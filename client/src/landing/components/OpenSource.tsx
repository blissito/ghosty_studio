const GITHUB_REPO = "blissito/ghosty_studio";

export function OpenSource() {
  return (
    <section id="open-source" className="py-16 px-4 sm:px-6 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Compact header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            También disponible como open source
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ghosty es 100% código abierto. Si prefieres control total,
            despliega en tu propia infraestructura.
          </p>
        </div>

        {/* Two options side by side - compact */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {/* Cloud - Recommended */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 relative">
            <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-0.5 rounded-bl-lg">
              RECOMENDADO
            </div>
            <h3 className="text-lg font-semibold mb-2">Ghosty Cloud</h3>
            <p className="text-indigo-200 text-sm mb-4">
              Listo en minutos. Sin configurar servidores.
            </p>
            <ul className="space-y-2 text-sm mb-4">
              {["Actualizaciones automáticas", "Soporte incluido", "Escala sin límites"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-indigo-100">
                  <svg className="w-4 h-4 text-indigo-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full text-center bg-white hover:bg-gray-100 text-indigo-600 py-2 px-4 rounded-lg font-medium transition-colors text-sm"
            >
              Comenzar gratis
            </button>
          </div>

          {/* Self-hosted */}
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2">Self-hosted</h3>
            <p className="text-gray-400 text-sm mb-4">
              Despliega en tu servidor. Control total.
            </p>
            <ul className="space-y-2 text-sm mb-4">
              {["Código MIT - gratis siempre", "Tus datos, tu servidor", "Docker / VPS / Cloud"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-300">
                  <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`https://github.com/${GITHUB_REPO}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm"
            >
              Ver en GitHub
            </a>
          </div>
        </div>

        {/* Trust badges - compact */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Sin tracking</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>Tus datos son tuyos</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </section>
  );
}
