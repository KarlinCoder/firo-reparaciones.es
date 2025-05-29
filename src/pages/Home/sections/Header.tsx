import { motion, cubicBezier } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export const Header = () => {
  // Configuración de easing personalizada
  const customEase = cubicBezier(0.6, 0.01, -0.05, 0.95);

  return (
    <header className="relative w-full min-h-screen overflow-hidden flex items-center">
      {/* Fondo con imagen y efecto parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/fondoPresentation.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.43, 0.13, 0.23, 0.96],
          type: "tween", // Fuerza animación JS para evitar error WAAPI
        }}
      >
        {/* Capas de overlay para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-950/70 to-emerald-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent"></div>
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-full flex flex-col justify-center">
        <div className="py-16 text-left space-y-6">
          {/* Badge animado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: customEase,
              type: "tween",
            }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 border border-emerald-400/30 text-emerald-300 text-sm backdrop-blur-md w-fit shadow-lg shadow-emerald-900/10"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Servicio técnico especializado
          </motion.div>

          {/* Título principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "tween",
            }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 via-emerald-400 to-emerald-500">
                Reparación profesional
              </span>
              <span className="block text-white mt-2 drop-shadow-xl">
                de electrodomésticos
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                type: "tween",
              }}
              className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Soluciones técnicas rápidas y garantizadas para todas las marcas
              en Mallorca - España.
            </motion.p>
          </motion.div>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1,
              type: "tween",
            }}
            className="flex flex-col sm:flex-row gap-4 pt-2"
          >
            <motion.a
              href="#contacto"
              className="px-8 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-base shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPhoneAlt className="text-sm" />
              Contactar ahora
            </motion.a>
            <motion.a
              href="#servicios"
              className="px-8 py-2 bg-transparent border-2 border-emerald-400 text-emerald-400 hover:bg-emerald-400/10 font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-3 text-base backdrop-blur-sm"
              whileHover={{
                scale: 1.02,
                backgroundColor: "rgba(52, 211, 153, 0.1)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              Nuestros servicios
            </motion.a>
          </motion.div>

          {/* Info adicional */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.2,
              type: "tween",
            }}
            className="flex flex-wrap items-center gap-4 pt-4 text-sm"
          >
            <div className="flex items-center gap-2 text-emerald-300 bg-gray-900/60 backdrop-blur-md px-4 py-2 rounded-lg">
              <FaMapMarkerAlt />
              <span className="text-white">Servicio en toda Mallorca</span>
            </div>
            <div className="text-gray-300">
              <span className="font-medium text-white">24/7</span> Servicio de
              emergencia
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
