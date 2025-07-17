import { EmailForm } from "./_components/EmailForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            De la impotencia a la{" "}
            <span className="text-brand-blue">tranquilidad</span>.{" "}
            <br className="hidden sm:block" />
            El escudo digital para la vista de tus hijos.
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-brand-gray mb-12 max-w-3xl mx-auto leading-relaxed">
            Nuestra app transforma la pantalla en un entorno visual dinámico,{" "}
            <span className="text-brand-green font-semibold">
              como si estuvieran jugando al aire libre
            </span>
            .
          </p>

          {/* Email Form */}
          <div className="mb-16">
            <EmailForm />
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-brand-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Protección Científica
              </h3>
              <p className="text-brand-gray text-sm">
                Basado en investigación oftalmológica avanzada
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-brand-green"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Fácil de Usar
              </h3>
              <p className="text-brand-gray text-sm">
                Se activa automáticamente, sin interrumpir el juego
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-brand-blue"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Tranquilidad Total
              </h3>
              <p className="text-brand-gray text-sm">
                Monitoreo en tiempo real de la salud visual
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-brand-gray text-sm">
            © 2025 SightGuardian AI. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
