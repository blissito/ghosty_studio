const plans = [
  {
    name: "Starter",
    price: "$490",
    period: "MXN/mes",
    description: "Trae tu propia API key",
    features: [
      "1 widget",
      "Usa tu API key de OpenAI/Anthropic",
      "Todos los modelos (GPT-5, Sonnet, etc.)",
      "Mensajes ilimitados*",
      "Analytics básico",
      "Soporte comunidad",
    ],
    footnote: "*Pagas directo al proveedor de IA",
    cta: "Empezar gratis",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$890",
    period: "MXN/mes",
    description: "Sin configurar nada, funciona al instante",
    features: [
      "10 widgets",
      "5,000 mensajes/mes incluidos",
      "Modelos: GPT-4o-mini, Haiku, y más",
      "Excedente: $0.15/mensaje",
      "Sin branding 'Powered by'",
      "Webhooks personalizados",
      "Soporte por email",
    ],
    footnote: "Modelos premium: agrega tu API key",
    cta: "Empezar gratis",
    highlighted: true,
    badge: "Popular",
  },
  {
    name: "Enterprise",
    price: "$2,490",
    period: "MXN/mes",
    description: "Para equipos que escalan",
    features: [
      "Widgets ilimitados",
      "25,000 mensajes/mes incluidos",
      "Modelos: GPT-4o-mini, Haiku, y más",
      "Excedente: $0.10/mensaje",
      "BYOK disponible para compliance",
      "Respaldos automáticos diarios",
      "Exportar datos (JSON/CSV)",
      "SLA 99.9% uptime",
      "Soporte prioritario WhatsApp",
    ],
    cta: "Empezar gratis",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
            </svg>
            Oferta de lanzamiento: TODO GRATIS por tiempo limitado
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Precios simples y transparentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades.
            Cancela cuando quieras.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl shadow-indigo-500/30 scale-105"
                  : "bg-white border border-gray-200"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <h3 className={`text-xl font-semibold mb-2 ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-indigo-200" : "text-gray-500"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold line-through opacity-50 ${plan.highlighted ? "text-white" : "text-gray-400"}`}>
                    {plan.price}
                  </span>
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    $0
                  </span>
                  <span className={plan.highlighted ? "text-indigo-200" : "text-gray-500"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.highlighted ? "text-indigo-200" : "text-green-600"}`}>
                  Gratis por lanzamiento
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-indigo-200" : "text-indigo-600"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.highlighted ? "text-indigo-100" : "text-gray-600"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              {plan.footnote && (
                <p className={`text-xs mb-4 ${plan.highlighted ? "text-indigo-300" : "text-gray-400"}`}>
                  {plan.footnote}
                </p>
              )}

              {/* CTA */}
              <button
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-indigo-50"
                    : "bg-indigo-600 text-white hover:bg-indigo-700"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿Tienes preguntas?{" "}
            <a href="mailto:hola@fixtergeek.com" className="text-indigo-600 hover:underline font-medium">
              Escríbenos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
