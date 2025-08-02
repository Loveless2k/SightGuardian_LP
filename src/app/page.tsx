"use client";

import { EmailForm } from "./_components/EmailForm";
import { motion } from "framer-motion";
import {
  heroTitleVariants,
  heroSubtitleVariants,
  heroFormVariants,
  staggerContainerVariants,
  staggerItemVariants,
  fadeInUpVariants,
  viewportOptions,
} from "@/lib/animations";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function Home() {
  const prefersReducedMotion = useReducedMotion();

  // Optimize animations based on user preferences
  const animationConfig = prefersReducedMotion
    ? { duration: 0.2, ease: "easeOut" }
    : { duration: 0.5, ease: [0.4, 0, 0.2, 1] };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-100 to-emerald-100 relative overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-brand-blue/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-green/10 to-transparent rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <main className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            variants={staggerContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Hero Content Container */}
            <motion.div
              className="bg-white/90 backdrop-blur-md rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black/20 border border-white/50 relative overflow-hidden"
              variants={staggerItemVariants}
            >
              {/* Decorative Elements */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-blue/20 to-transparent rounded-full blur-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
              <motion.div
                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-green/20 to-transparent rounded-full blur-2xl"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.7 }}
              ></motion.div>

              {/* Content Wrapper */}
              <div className="relative z-10">
                {/* Headline */}
                <motion.h1
                  className="text-4xl sm:text-5xl lg:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight"
                  variants={heroTitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  De la impotencia a la{" "}
                  <motion.span
                    className="text-brand-blue bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                  >
                    tranquilidad
                  </motion.span>
                  . <br className="hidden sm:block" />
                  <motion.span
                    className="block mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-gray-dark"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 }}
                  >
                    El escudo digital para la vista de tus hijos.
                  </motion.span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-medium"
                  variants={heroSubtitleVariants}
                  initial="hidden"
                  animate="visible"
                >
                  Nuestra app transforma la pantalla en un entorno visual
                  dinámico,{" "}
                  <motion.span
                    className="text-brand-green font-bold bg-gradient-to-r from-brand-green to-emerald-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                  >
                    como si estuvieran jugando al aire libre
                  </motion.span>
                  .
                </motion.p>

                {/* Email Form */}
                <motion.div
                  className="mb-20 mt-12"
                  variants={heroFormVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="max-w-2xl mx-auto">
                    <EmailForm />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="mt-20 bg-white/85 backdrop-blur-md rounded-3xl p-10 sm:p-12 border border-white/60 shadow-xl shadow-black/15"
              variants={fadeInUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
              >
                <motion.div
                  className="text-center group"
                  variants={staggerItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-brand-blue/30 to-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-blue/25"
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                  </motion.div>
                  <motion.h3
                    className="font-black text-gray-900 mb-3 text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Protección Científica
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-base leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Basado en investigación oftalmológica avanzada
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group"
                  variants={staggerItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-brand-green/30 to-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-green/25"
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      boxShadow: "0 25px 50px -12px rgba(52, 211, 153, 0.4)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                  </motion.div>
                  <motion.h3
                    className="font-black text-gray-900 mb-3 text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Fácil de Usar
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-base leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Se activa automáticamente, sin interrumpir el juego
                  </motion.p>
                </motion.div>

                <motion.div
                  className="text-center group"
                  variants={staggerItemVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-brand-blue/30 to-brand-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-brand-blue/25"
                    whileHover={{
                      scale: 1.1,
                      rotate: 3,
                      boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)",
                      transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
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
                  </motion.div>
                  <motion.h3
                    className="font-black text-gray-900 mb-3 text-xl"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Tranquilidad Total
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-base leading-relaxed font-medium"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Monitoreo en tiempo real de la salud visual
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* How It Works Section */}
          <motion.section
            className="mt-32 mb-24"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
          >
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                variants={staggerItemVariants}
              >
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
                  variants={staggerItemVariants}
                >
                  ¿Cómo Funciona{" "}
                  <span className="bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                    SightGuardian AI
                  </span>
                  ?
                </motion.h2>
                <motion.p
                  className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                  variants={staggerItemVariants}
                >
                  Tecnología avanzada que protege la vista de tus hijos de
                  manera inteligente y automática
                </motion.p>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                variants={staggerContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
              >
                {/* Step 1 */}
                <motion.div
                  className="text-center relative"
                  variants={staggerItemVariants}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-black text-brand-blue">
                      1
                    </span>
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Instalación Automática
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Se instala en segundos y se activa automáticamente cuando
                    tus hijos usan dispositivos
                  </p>
                </motion.div>

                {/* Step 2 */}
                <motion.div
                  className="text-center relative"
                  variants={staggerItemVariants}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-brand-green/20 to-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-black text-brand-green">
                      2
                    </span>
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.7,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Monitoreo Inteligente
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    IA avanzada analiza patrones de uso y ajusta la protección
                    visual en tiempo real
                  </p>
                </motion.div>

                {/* Step 3 */}
                <motion.div
                  className="text-center relative"
                  variants={staggerItemVariants}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-brand-blue/20 to-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-6 relative"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-2xl font-black text-brand-blue">
                      3
                    </span>
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 bg-brand-green rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{
                        delay: 0.9,
                        type: "spring",
                        stiffness: 500,
                      }}
                    >
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Protección Continua
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Protección 24/7 que se adapta automáticamente sin
                    interrumpir la experiencia de juego
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </main>

        {/* Features Showcase Section */}
        <motion.section
          className="py-24 bg-gradient-to-br from-brand-blue/5 via-slate-50 to-brand-green/5 relative overflow-hidden"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          {/* Background Decorations */}
          {!prefersReducedMotion && (
            <>
              <motion.div
                className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-brand-blue/5 to-transparent rounded-full blur-3xl"
                animate={{
                  x: [0, 50, 0],
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
              />
              <motion.div
                className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-brand-green/5 to-transparent rounded-full blur-3xl"
                animate={{
                  x: [0, -50, 0],
                  y: [0, 30, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
              />
            </>
          )}

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              className="text-center mb-16"
              variants={staggerItemVariants}
            >
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
                variants={staggerItemVariants}
              >
                Características{" "}
                <span className="bg-gradient-to-r from-brand-green to-emerald-500 bg-clip-text text-transparent">
                  Avanzadas
                </span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                variants={staggerItemVariants}
              >
                Tecnología de vanguardia diseñada específicamente para proteger
                la salud visual infantil
              </motion.p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {/* Feature 1 */}
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-black/10"
                variants={staggerItemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-brand-blue/20 to-brand-blue/10 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-brand-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Filtro de Luz Azul Adaptativo
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ajusta automáticamente la intensidad del filtro según la hora
                  del día y el contenido visualizado, reduciendo la fatiga
                  ocular sin afectar la experiencia visual.
                </p>
                <motion.div
                  className="flex items-center text-brand-blue font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Protección inteligente</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Feature 2 */}
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-black/10"
                variants={staggerItemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-brand-green/20 to-brand-green/10 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-brand-green"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Análisis de Patrones de Uso
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Monitorea los hábitos de uso y proporciona insights valiosos
                  sobre el tiempo de pantalla, ayudando a establecer rutinas
                  saludables para tus hijos.
                </p>
                <motion.div
                  className="flex items-center text-brand-green font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Insights detallados</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>

              {/* Feature 3 */}
              <motion.div
                className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-xl shadow-black/10"
                variants={staggerItemVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3 },
                }}
              >
                <motion.div
                  className="w-12 h-12 bg-gradient-to-br from-accent-purple/20 to-accent-purple/10 rounded-xl flex items-center justify-center mb-6"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg
                    className="w-6 h-6 text-accent-purple"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 16l3-3 3 3M17 8l-3 3-3-3"
                    />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ejercicio Visual Inteligente
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Distorsión controlada de la imagen que se ajusta
                  automáticamente en función del tiempo de uso, incentivando al
                  usuario a ejercitar la vista mediante movimientos naturales de
                  acercamiento y alejamiento del dispositivo.
                </p>
                <motion.div
                  className="flex items-center text-accent-purple font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Ejercicio adaptativo</span>
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

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
