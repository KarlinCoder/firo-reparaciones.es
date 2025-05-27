import React from "react";
import { motion } from "framer-motion";
import {
  FaTools,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaHome,
  FaPhoneAlt,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export const Services = () => {
  const services = [
    "Lavadoras y Secadoras",
    "Neveras y Congeladores",
    "Lavavajillas",
    "Hornos y Microondas",
    "Aires Acondicionados",
    "Batidoras",
    "Placas de cocina",
    "Campanas extractoras",
  ];

  const serviceCards = [
    {
      icon: <FaShieldAlt />,
      title: "Garantía Extendida",
      description: "12 meses de garantía en todas las reparaciones realizadas",
      delay: 0.2,
    },
    {
      icon: <FaClock />,
      title: "Servicio 24/7",
      description: "Asistencia técnica disponible para emergencias",
      delay: 0.3,
    },
    {
      icon: <FaHome />,
      title: "Reparación a Domicilio",
      description: "Sin coste de desplazamiento en nuestra área",
      delay: 0.4,
    },
    {
      icon: <FaCalendarAlt />,
      title: "Citas Rápidas",
      description: "Disponibilidad en menos de 24 horas",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="servicios"
      className="relative bg-transparent py-24 overflow-hidden"
    >
      {/* Efecto de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Soluciones Técnicas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios <span className="text-emerald-400">Especializados</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Reparaciones profesionales para mantener tus electrodomésticos
            funcionando como nuevos
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tarjeta principal */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-2/3 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden relative h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/30 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
              <img
                src="/cardImage.jpg"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                alt="Técnico reparando electrodoméstico"
              />
            </div>

            <div className="relative z-20 pl-[55%] pr-8 py-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-emerald-600 rounded-full">
                  <FaTools className="text-xl text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  Reparación Profesional
                </h3>
              </div>

              <p className="text-gray-400 text-base md:text-lg">
                Servicio técnico certificado para todas las marcas principales
                del mercado.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="p-1 bg-emerald-900/50 rounded-full">
                      <FaCheckCircle className="text-emerald-400 text-sm" />
                    </div>
                    <span className="text-gray-300 text-sm md:text-base">
                      {service}
                    </span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="flex justify-start pt-2"
              >
                <a
                  href="#contacto"
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-emerald-400/20"
                >
                  <FaPhoneAlt />
                  Contactar Ahora
                  <FiArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Tarjetas secundarias */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            {serviceCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: card.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-900/20 rounded-lg group-hover:bg-emerald-400/10 transition">
                    {React.cloneElement(card.icon, {
                      className: "text-xl text-emerald-400",
                    })}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-400">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
