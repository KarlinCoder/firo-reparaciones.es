import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import img1 from "/icons/logo.png";

export const Footer = () => {
  return (
    <footer className="relative bg-gray-950 border-t border-gray-800/50 pt-16 pb-8">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-950/50 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-300">
          {/* Sección Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <div className="flex items-center gap-3">
              <img src={img1} alt="FIRO Reparaciones" className="w-10 h-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                FIRO Reparaciones
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Servicio técnico especializado en electrodomésticos con atención
              personalizada en Mallorca.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://wa.me/34612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition-colors"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>
          </motion.div>

          {/* Sección Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold text-white">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">+34 612 345 678</p>
                  <p className="text-sm text-gray-400">
                    Disponible 24/7 para emergencias
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">info@firoreparaciones.com</p>
                  <p className="text-sm text-gray-400">
                    Respuesta en menos de 24h
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white">Mallorca, España</p>
                  <p className="text-sm text-gray-400">
                    Servicio a domicilio en toda la isla
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Sección Horario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold text-white">Horario</h4>
            <div className="flex items-start gap-3">
              <FiClock className="text-emerald-400 mt-1 flex-shrink-0" />
              <div className="space-y-2">
                <p className="text-white">Lunes - Viernes: 9:00 - 20:00</p>
                <p className="text-white">Sábados: 10:00 - 14:00</p>
                <p className="text-sm text-emerald-400">
                  Servicio de emergencia 24/7
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-5"
          >
            <h4 className="text-lg font-semibold text-white">Enlaces</h4>
            <ul className="space-y-3">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Sobre mí", href: "#sobremi" },
                { name: "Experiencia", href: "#experiencia" },
                { name: "Contacto", href: "#contacto" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors group"
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-0 group-hover:opacity-100 transition"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Línea divisoria y copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-6 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} FIRO Reparaciones. Todos los derechos
              reservados.
            </p>
            <p className="text-center md:text-right">
              Servicio técnico profesional en Mallorca
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
