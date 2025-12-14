const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Disponible 24/7",
    description: "Tu asistente nunca duerme. Atiende clientes de madrugada, fines de semana y días festivos.",
    highlight: "Nunca pierdas una venta",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Respuestas instantáneas",
    description: "Sin tiempos de espera. Tus clientes obtienen respuestas en segundos, no en horas.",
    highlight: "Clientes más satisfechos",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agenda citas automáticamente",
    description: "Conecta tu calendario. El asistente agenda, confirma y envía recordatorios.",
    highlight: "Menos no-shows",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Respuestas precisas",
    description: "Entrénalo con tu información. Solo responde lo que tú quieres, sin inventar.",
    highlight: "Confianza total",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Ahorra en personal",
    description: "Un asistente IA cuesta una fracción de un empleado y atiende a todos simultáneamente.",
    highlight: "ROI inmediato",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Integración en 5 minutos",
    description: "Copia y pega una línea de código. Sin desarrolladores, sin complicaciones.",
    highlight: "Cero fricción técnica",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Beneficios para tu negocio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Automatiza la atención al cliente
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reduce costos, aumenta ventas y mejora la satisfacción de tus clientes
            con un asistente que trabaja sin descanso.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-3">{feature.description}</p>
              <span className="inline-block text-sm font-medium text-indigo-600">
                {feature.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            Potenciado por los modelos de IA más avanzados
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center text-gray-400">
            <span className="font-semibold">OpenAI GPT-4</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Claude 3.5</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">GPT-4o-mini</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Y más...</span>
          </div>
        </div>
      </div>
    </section>
  );
}
