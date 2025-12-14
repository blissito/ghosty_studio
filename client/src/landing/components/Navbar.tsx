import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="https://formmy.app/dash/logo-full.svg"
              alt="Ghosty"
              className="h-8"
            />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollTo("features")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Beneficios
            </button>
            <button
              onClick={() => scrollTo("demo")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Demo
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Precios
            </button>
            <button
              onClick={() => scrollTo("how-it-works")}
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              Cómo funciona
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 text-sm">
              Iniciar sesión
            </button>
            <button
              onClick={() => scrollTo("pricing")}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              Comenzar gratis
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => scrollTo("features")}
                className="text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                Beneficios
              </button>
              <button
                onClick={() => scrollTo("demo")}
                className="text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                Demo
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                Precios
              </button>
              <button
                onClick={() => scrollTo("how-it-works")}
                className="text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                Cómo funciona
              </button>
              <hr className="my-2" />
              <button className="text-left px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                Iniciar sesión
              </button>
              <button
                onClick={() => scrollTo("pricing")}
                className="mx-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium text-center"
              >
                Comenzar gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
