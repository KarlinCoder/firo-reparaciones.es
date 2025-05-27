import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="relative w-full min-h-screen bg-transparent overflow-hidden">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 via-gray-950 to-emerald-900/10"></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="py-24 text-center">
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Servicio técnico especializado
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Reparación profesional
            </span>
            <br className="hidden sm:block" />
            <span className="text-white">de electrodomésticos</span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
          >
            Soluciones técnicas rápidas y garantizadas para todas las marcas en
            Mallorca
          </motion.p>

          {/* Lista de beneficios */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
          >
            {[
              "Diagnóstico gratuito",
              "Garantía de 12 meses",
              "Repuestos originales",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-2 text-emerald-400"
              >
                <FiCheckCircle className="flex-shrink-0" />
                <span className="text-white">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20 flex items-center justify-center gap-2"
            >
              Contactar ahora
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Nuestros servicios
            </a>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex items-center justify-center gap-2 mt-12 text-emerald-400"
          >
            <FaMapMarkerAlt className="flex-shrink-0" />
            <span className="text-white">Servicio en toda Mallorca</span>
          </motion.div>
        </div>

        {/* Flecha indicadora */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a href="#servicios" className="block">
            <FaArrowDown className="w-8 h-8 text-emerald-400 hover:text-emerald-300 transition-colors" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};
