import { ExternalLink, Play, Lock } from "lucide-react";

const DEMO_URL = "https://demo.ghosty.studio/preview";

export function Demo() {
  return (
    <section id="demo" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Play className="w-4 h-4" />
          Demo en vivo
        </div>

        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Prueba Ghosty ahora mismo
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Visita nuestro preview y experimenta el chat con IA en acción.
        </p>

        {/* Credentials Box */}
        <div className="inline-flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-6 py-4 mb-10">
          <Lock className="w-5 h-5 text-amber-600" />
          <div className="text-left">
            <p className="text-sm text-amber-800 font-medium">Credenciales de acceso:</p>
            <p className="text-amber-700 font-mono">
              Usuario: <span className="font-bold">admin</span> &nbsp;|&nbsp; Contraseña: <span className="font-bold">admin123</span>
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Ingresa las credenciales</h3>
            <p className="text-sm text-gray-600">
              Usa admin / admin123
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Abre el chat</h3>
            <p className="text-sm text-gray-600">
              Haz clic en el botón flotante en la esquina
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-indigo-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Conversa con la IA</h3>
            <p className="text-sm text-gray-600">
              Pregunta lo que quieras y ve la magia
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25"
        >
          <Play className="w-5 h-5" />
          Ver preview en vivo
          <ExternalLink className="w-4 h-4 ml-1" />
        </a>

        <p className="mt-4 text-sm text-gray-500">
          demo.ghosty.studio/preview
        </p>
      </div>
    </section>
  );
}
