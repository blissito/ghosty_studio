export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src="https://formmy.app/dash/logo-full.svg"
                alt="Ghosty"
                className="h-8 brightness-0 invert"
              />
            </div>
            <p className="text-sm max-w-xs mb-4">
              El widget de chat con IA más fácil de integrar.
              Potenciado por modelos de última generación.
            </p>
            <p className="text-sm">
              Hecho con cariño por{" "}
              <a href="https://fixtergeek.com" className="text-indigo-400 hover:text-indigo-300" target="_blank" rel="noopener noreferrer">
                Fixtergeek
              </a>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
              </li>
              <li>
                <a href="/preview" className="hover:text-white transition-colors">Demo</a>
              </li>
              <li>
                <a href="https://github.com/blissito/ghosty_studio" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/terms" className="hover:text-white transition-colors">Términos de servicio</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition-colors">Política de privacidad</a>
              </li>
              <li>
                <a href="mailto:hola@fixtergeek.com" className="hover:text-white transition-colors">Contacto</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Ghosty. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            {/* Twitter/X */}
            <a href="https://twitter.com/fixtergeek" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/blissito/ghosty_studio" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
