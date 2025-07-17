import { EmailForm } from "./_components/EmailForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Hero Content Container */}
            <div className="bg-white/70 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black/10 border border-white/30 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-green/20 to-transparent rounded-full blur-2xl"></div>

              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
                  De la impotencia a la{" "}
                  <span className="text-brand-blue bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                    tranquilidad
                  </span>
                  . <br className="hidden sm:block" />
                  <span className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700">
                    El escudo digital para la vista de tus hijos.
                  </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
                  Nuestra app transforma la pantalla en un entorno visual
                  dinámico,{" "}
                  <span className="text-brand-green font-bold bg-gradient-to-r from-brand-green to-emerald-500 bg-clip-text text-transparent">
                    como si estuvieran jugando al aire libre
                  </span>
                  .
                </p>

                {/* Email Form */}
                <div className="mb-20 mt-12">
                  <div className="max-w-2xl mx-auto">
                    <EmailForm />
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-20 bg-white/60 backdrop-blur-md rounded-3xl p-10 sm:p-12 border border-white/40 shadow-xl shadow-black/5">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-blue/30 to-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-blue/25 group-hover:shadow-2xl group-hover:shadow-brand-blue/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-10 h-10 text-brand-blue"
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
                  <h3 className="font-black text-gray-900 mb-3 text-xl">
                    Protección Científica
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Basado en investigación oftalmológica avanzada
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-green/30 to-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-green/25 group-hover:shadow-2xl group-hover:shadow-brand-green/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-10 h-10 text-brand-green"
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
                  <h3 className="font-black text-gray-900 mb-3 text-xl">
                    Fácil de Usar
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Se activa automáticamente, sin interrumpir el juego
                  </p>
                </div>

                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-blue/30 to-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-blue/25 group-hover:shadow-2xl group-hover:shadow-brand-blue/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <svg
                      className="w-10 h-10 text-brand-blue"
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
                  <h3 className="font-black text-gray-900 mb-3 text-xl">
                    Tranquilidad Total
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed font-medium">
                    Monitoreo en tiempo real de la salud visual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-24 border-t border-gray-300 bg-white/90 backdrop-blur-md shadow-2xl">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center text-gray-800 text-base font-semibold">
              © 2025 SightGuardian AI. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
