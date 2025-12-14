# Ghosty Studio - Notas de Desarrollo

## Stack
- Backend: Hono + Node.js
- DB: SQLite + Drizzle ORM
- Frontend: React 19 + Tailwind CSS v4
- AI: Vercel AI SDK + OpenAI
- Deploy: Fly.io + Docker

---

## TODO: Sistema de Tracking Agnóstico (Sistema Nervioso)

### Concepto
Un sistema de captura de eventos centralizado que:
1. **Captura TODO por default** en formato normalizado
2. **Almacena localmente** (SQLite = source of truth)
3. **Distribuye a "sinks"** según configuración (Langfuse, webhooks, OTEL, etc.)

El "sistema nervioso" siempre está activo. Los "órganos" (integraciones) se conectan después.

### Eventos a Capturar

```
LIFECYCLE:
├── session.created
├── session.expired
└── widget.loaded

CHAT:
├── message.user.sent
├── message.assistant.started
├── message.assistant.chunk      # streaming
├── message.assistant.completed
└── message.assistant.error

TOOLS:
├── tool.called
├── tool.completed
├── tool.failed
└── tool.timeout

USAGE:
├── tokens.consumed
└── cost.calculated

ERRORS:
├── error.api
├── error.rate_limit
├── error.timeout
└── error.validation
```

### Schema de Evento Normalizado

```typescript
interface TrackingEvent {
  id: string;                    // UUID único
  timestamp: number;             // Unix ms
  type: string;                  // "message.assistant.completed"

  // Context
  widgetId: string;
  sessionToken: string;
  organizationId?: string;

  // Payload (varía según tipo)
  data: {
    // Chat
    role?: "user" | "assistant";
    content?: string;
    contentLength?: number;

    // Tokens/Cost
    model?: string;
    promptTokens?: number;
    completionTokens?: number;
    totalTokens?: number;
    costMicro?: number;          // microdólares

    // Tools
    toolName?: string;
    toolInput?: object;
    toolOutput?: object;

    // Performance
    latencyMs?: number;
    finishReason?: string;

    // Errors
    errorCode?: string;
    errorMessage?: string;
  };

  // Metadata
  meta?: {
    userAgent?: string;
    ip?: string;
    origin?: string;
    country?: string;
  };
}
```

### Tabla en SQLite

```sql
CREATE TABLE tracking_events (
  id TEXT PRIMARY KEY,
  timestamp INTEGER NOT NULL,
  type TEXT NOT NULL,
  widget_id TEXT,
  session_token TEXT,
  organization_id TEXT,
  data_json TEXT NOT NULL,
  meta_json TEXT
);

-- Índices para queries rápidas
CREATE INDEX idx_events_timestamp ON tracking_events(timestamp);
CREATE INDEX idx_events_type ON tracking_events(type);
CREATE INDEX idx_events_widget ON tracking_events(widget_id);
CREATE INDEX idx_events_session ON tracking_events(session_token);
CREATE INDEX idx_events_org ON tracking_events(organization_id);
```

### Sistema de Sinks (Destinos)

```typescript
interface TrackingSink {
  name: string;
  enabled: boolean;
  filter?: (event: TrackingEvent) => boolean;
  transform?: (event: TrackingEvent) => any;
  send: (events: TrackingEvent[]) => Promise<void>;
}

const sinks: TrackingSink[] = [
  // 1. SQLite local (siempre activo, source of truth)
  {
    name: "sqlite",
    enabled: true,
    send: async (events) => db.insert(trackingEvents).values(events)
  },

  // 2. Langfuse (análisis LLM)
  {
    name: "langfuse",
    enabled: config.langfuseEnabled,
    filter: (e) => e.type.startsWith("message.") || e.type.startsWith("tool."),
    send: async (events) => langfuse.ingestEvents(events)
  },

  // 3. Webhook del cliente (Enterprise)
  {
    name: "customer_webhook",
    enabled: !!widget.webhookUrl,
    filter: (e) => widget.webhookEvents?.includes(e.type),
    send: async (events) => fetch(widget.webhookUrl, {
      method: "POST",
      body: JSON.stringify(events)
    })
  },

  // 4. OpenTelemetry (observabilidad general)
  {
    name: "otel",
    enabled: config.otelEnabled,
    transform: toOtelSpan,
    send: async (events) => otelExporter.export(events)
  },

  // 5. Console (dev only)
  {
    name: "console",
    enabled: isDev,
    send: async (events) => console.log("[TRACK]", events)
  }
];
```

### API del Tracker

```typescript
// tracking/index.ts
class Tracker {
  private queue: TrackingEvent[] = [];
  private sinks: TrackingSink[] = [];
  private flushInterval = 1000; // batch cada 1s

  track(type: string, data: object, context?: TrackingContext) {
    const event: TrackingEvent = {
      id: randomUUID(),
      timestamp: Date.now(),
      type,
      widgetId: context?.widgetId,
      sessionToken: context?.sessionToken,
      organizationId: context?.organizationId,
      data,
      meta: context?.meta,
    };

    this.queue.push(event);
  }

  // Helpers específicos
  trackMessage(role: string, content: string, ctx: TrackingContext) {
    this.track(`message.${role}.completed`, {
      role,
      content,
      contentLength: content.length
    }, ctx);
  }

  trackTokens(usage: TokenUsage, model: string, ctx: TrackingContext) {
    this.track("tokens.consumed", {
      model,
      promptTokens: usage.inputTokens,
      completionTokens: usage.outputTokens,
      totalTokens: usage.totalTokens,
      costMicro: calculateCost(model, usage),
    }, ctx);
  }

  trackError(error: Error, ctx: TrackingContext) {
    this.track("error", {
      errorCode: error.name,
      errorMessage: error.message
    }, ctx);
  }

  trackTool(name: string, phase: "called" | "completed" | "failed", data: object, ctx: TrackingContext) {
    this.track(`tool.${phase}`, { toolName: name, ...data }, ctx);
  }

  // Flush a todos los sinks
  async flush() {
    if (this.queue.length === 0) return;

    const events = this.queue.splice(0);

    await Promise.allSettled(
      this.sinks
        .filter(s => s.enabled)
        .map(async (sink) => {
          try {
            const filtered = sink.filter ? events.filter(sink.filter) : events;
            if (filtered.length === 0) return;

            const transformed = sink.transform
              ? filtered.map(sink.transform)
              : filtered;

            await sink.send(transformed);
          } catch (err) {
            console.error(`[Tracker] Sink ${sink.name} failed:`, err);
          }
        })
    );
  }
}

export const tracker = new Tracker();

// Auto-flush cada segundo
setInterval(() => tracker.flush(), 1000);
```

### Uso en server.ts

```typescript
app.post("/api/chat", async (c) => {
  const ctx: TrackingContext = {
    widgetId,
    sessionToken,
    organizationId,
    meta: {
      userAgent: c.req.header("User-Agent"),
      origin: c.req.header("Origin"),
    }
  };

  // Track mensaje del usuario
  tracker.track("message.user.sent", {
    content: lastMessage.content,
    contentLength: lastMessage.content.length
  }, ctx);

  const startTime = Date.now();
  const result = chat(messages);

  // Track cuando termina
  result.text.then((text) => {
    tracker.track("message.assistant.completed", {
      content: text,
      contentLength: text.length,
      latencyMs: Date.now() - startTime,
    }, ctx);
  });

  // Track usage
  result.usage.then((usage) => {
    tracker.trackTokens(usage, model, ctx);
  });

  return result.toUIMessageStreamResponse();
});
```

### Queries de Ejemplo

```sql
-- Costos por organización este mes
SELECT
  organization_id,
  SUM(json_extract(data_json, '$.costMicro')) / 1000000.0 as cost_usd
FROM tracking_events
WHERE type = 'tokens.consumed'
  AND timestamp >= strftime('%s', 'now', 'start of month') * 1000
GROUP BY organization_id;

-- Errores por tipo últimas 24h
SELECT
  json_extract(data_json, '$.errorCode') as error_code,
  COUNT(*) as count
FROM tracking_events
WHERE type LIKE 'error%'
  AND timestamp >= (strftime('%s', 'now') - 86400) * 1000
GROUP BY error_code
ORDER BY count DESC;

-- Latencia promedio por widget
SELECT
  widget_id,
  AVG(json_extract(data_json, '$.latencyMs')) as avg_latency_ms,
  COUNT(*) as message_count
FROM tracking_events
WHERE type = 'message.assistant.completed'
GROUP BY widget_id;

-- Timeline de una sesión (debugging)
SELECT
  datetime(timestamp/1000, 'unixepoch') as time,
  type,
  json_extract(data_json, '$.contentLength') as content_length,
  json_extract(data_json, '$.latencyMs') as latency
FROM tracking_events
WHERE session_token = ?
ORDER BY timestamp;
```

### Features por Tier

| Tier | Tracking Features |
|------|-------------------|
| **Starter** | Dashboard básico, retención 7 días |
| **Pro** | + Historial conversaciones, retención 30 días, exportar CSV |
| **Enterprise** | + Langfuse, webhooks custom, retención 1 año, exportar JSON/Parquet |

### Beneficios

1. **Agnóstico**: Datos en tu formato, no dependes de vendor
2. **Extensible**: Agregar sink = agregar objeto
3. **Retroactivo**: Re-procesar históricos a nuevos sinks
4. **Debugging**: Trace completo de todo
5. **Billing preciso**: Datos exactos de consumo
6. **Compliance**: Exportar/eliminar datos por usuario (GDPR)
7. **Analytics**: Base para dashboards avanzados

### Implementación por Fases

- [ ] **Fase 1**: Schema + tabla tracking_events
- [ ] **Fase 2**: Clase Tracker con sink SQLite
- [ ] **Fase 3**: Integrar en server.ts (chat, tools, errors)
- [ ] **Fase 4**: Dashboard de eventos en admin
- [ ] **Fase 5**: Sink Langfuse (Enterprise)
- [ ] **Fase 6**: Sink Webhook custom (Enterprise)
- [ ] **Fase 7**: Exportar datos (Pro/Enterprise)

---

## Modelo de Negocio: Híbrido (BYOK + Mensajes incluidos)

### Pricing Final

| Plan | Precio | Mensajes | Modelos | Excedente |
|------|--------|----------|---------|-----------|
| **Starter** | $490 MXN | Ilimitados (BYOK) | Todos | N/A |
| **Pro** | $890 MXN | 5,000/mes | Económicos | $0.15/msg |
| **Enterprise** | $2,490 MXN | 25,000/mes | Económicos + BYOK | $0.10/msg |

### Modelos por tier

**Incluidos en Pro/Enterprise (económicos):**
- gpt-4o-mini
- gpt-4.1-mini
- gpt-4.1
- gpt-5-nano
- Haiku 3.5/4.5

**Solo BYOK (premium):**
- gpt-5
- gpt-5-mini
- Sonnet 3.5/4/4.5
- Opus

### Márgenes

```
Costo por mensaje (400 tokens, gpt-4o-mini): ~$0.004 MXN
Excedente Pro: $0.15/mensaje → Margen: 97%
Excedente Enterprise: $0.10/mensaje → Margen: 96%

Mensajes incluidos Pro (5,000):
  Costo: ~$20 MXN ($1.10 USD)
  Precio: $890 MXN
  Margen base: $870 MXN (98%)
```

### Implicaciones técnicas
- [ ] Pool de API keys propias (para Pro/Enterprise)
- [ ] Contador de mensajes por organización
- [ ] Rate limiting por plan
- [ ] UI para que Starter/Enterprise configure su API key
- [ ] Selector de modelo según tier
- [ ] Alertas cuando se acercan al límite

---

## Roadmap General

### Fase 1: Landing Page ✅
- [x] Navbar, Hero, Features, Pricing, Footer
- [x] 3 tiers: Starter $490, Pro $890, Enterprise $2,490
- [x] Banner "GRATIS por lanzamiento"

### Fase 2: Auth (Próximo)
- [ ] Registro/login email+password
- [ ] Tabla users, userSessions
- [ ] Middleware de auth

### Fase 3: Multi-tenant
- [ ] Tablas: organizations, memberships, widgets
- [ ] Row-level isolation
- [ ] CRUD APIs

### Fase 4: Dashboard
- [ ] Lista de widgets
- [ ] Configurar widget
- [ ] Stats por widget

### Fase 5: Tracking (Sistema Nervioso)
- [ ] Ver sección arriba

### Fase 6: Self-hosted
- [ ] Modo single-tenant
- [ ] Documentación para forks
