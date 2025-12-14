import { Heart, Shield, TrendingUp, Users } from "lucide-react";

export function Sustainability() {
  return (
    <section id="sustainability" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Independiente y sostenible
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sin inversionistas. Sin compromisos.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ghosty es un proyecto autofinanciado. No respondemos a VCs,
            no buscamos exits, no vendemos tus datos.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Our model */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Nuestro modelo</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Somos sostenibles gracias a las suscripciones de nuestros usuarios.
              Los ingresos se usan para:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Mantener y mejorar el proyecto
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Pagar la infraestructura
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                Dedicar tiempo completo al open source
              </li>
            </ul>
          </div>

          {/* Right: Why we charge */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Por que cobramos</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Como no ganamos dinero vendiendo datos ni mostrando anuncios,
              necesitamos cobrar por el Cloud para mantener el proyecto vivo.
            </p>
            <p className="text-gray-600">
              Elegimos el modelo de <strong>suscripcion</strong> en lugar del
              modelo de capitalismo de vigilancia.
            </p>
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500">
                El tier self-hosted es y sera siempre <strong className="text-gray-700">gratis</strong>.
                Codigo MIT. Despliega donde quieras.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy promise */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-white mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">No vendemos tus datos. Punto.</h3>
              <p className="text-emerald-100">
                No monetizamos la informacion de tus usuarios. No insertamos trackers
                ni publicidad. Cuando usas Ghosty, tu eres el dueno absoluto de toda
                la informacion.
              </p>
            </div>
          </div>
        </div>

        {/* Why no VC */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Por que no buscamos inversion
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Los inversionistas quieren retornos exponenciales.
                <strong className="block text-gray-900 mt-1">Nosotros queremos un producto util.</strong>
              </p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                El VC presiona por crecimiento a toda costa.
                <strong className="block text-gray-900 mt-1">Nosotros preferimos crecer organicamente.</strong>
              </p>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">
                Las startups hacen "exit" vendiendo a corporaciones.
                <strong className="block text-gray-900 mt-1">Nosotros queremos que Ghosty exista por decadas.</strong>
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-500 italic">
            Creemos que el software puede ser un oficio, no solo un vehiculo de especulacion.
          </p>
        </div>
      </div>
    </section>
  );
}
