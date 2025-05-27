import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaArrowDown } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      {/* Fondo con opacidad controlada */}
      <div
        className="absolute inset-0 bg-[url(/fondoPresentation.jpg)] bg-cover bg-center"
        style={{
          opacity: 0.5,
          filter: "brightness(0.7) contrast(1.2)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-950/60 to-emerald-900/20"></div>
      </div>

      {/* Efecto de ruido sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Contenido principal alineado a izquierda */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        <div className="py-16 text-left">
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-xs backdrop-blur-sm w-fit"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Servicio técnico especializado
          </motion.div>

          {/* Título principal */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 max-w-2xl"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Reparación profesional
            </span>
            <span className="block text-white drop-shadow-md mt-2">
              de electrodomésticos
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-base sm:text-lg text-gray-200 mb-8 max-w-xl drop-shadow-md"
          >
            Soluciones técnicas rápidas y garantizadas para todas las marcas en
            Mallorca
          </motion.p>

          {/* Lista de beneficios */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 w-fit"
          >
            {[
              "Diagnóstico gratuito",
              "Garantía 12 meses",
              "Repuestos originales",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-emerald-400 bg-gray-900/50 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm w-fit"
              >
                <FiCheckCircle className="flex-shrink-0 text-xs" />
                <span className="text-white drop-shadow-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#contacto"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-md transition-all duration-200 hover:shadow-md hover:shadow-emerald-400/20 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Contactar ahora
            </a>
            <a
              href="#servicios"
              className="px-6 py-3 bg-transparent border border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-medium rounded-md transition-all duration-200 flex items-center justify-center gap-2 backdrop-blur-sm text-sm sm:text-base"
            >
              Nuestros servicios
            </a>
          </motion.div>

          {/* Ubicación */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 1 }}
            className="mt-8 text-emerald-400 bg-gray-900/50 backdrop-blur-sm px-3 py-1.5 rounded-md inline-flex items-center gap-2 text-sm"
          >
            <FaMapMarkerAlt className="flex-shrink-0 text-xs" />
            <span className="text-white drop-shadow-sm">
              Servicio en toda Mallorca
            </span>
          </motion.div>
        </div>

        {/* Flecha indicadora centrada */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5,
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a href="#servicios" className="block">
            <FaArrowDown className="w-6 h-6 text-emerald-400 hover:text-emerald-300 transition-colors bg-gray-900/50 backdrop-blur-sm p-1.5 rounded-full" />
          </a>
        </motion.div>
      </div>
    </header>
  );
};
