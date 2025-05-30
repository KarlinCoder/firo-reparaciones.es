import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import logo from "/icons/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    {
      href: "#servicios",
      text: "Servicios",
    },
    { href: "#experiencia", text: "Experiencia" },
    { href: "#testimonios", text: "Clientes" },
    { href: "#contacto", text: "Contacto" },
  ];

  return (
    <nav className="sticky top-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo y marca */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0 flex items-center"
          >
            <img className="h-10 w-auto" src={logo} alt="FIRO Reparaciones" />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
              FIRO Reparaciones
            </span>
          </motion.div>

          {/* Menú desktop */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center gap-1"
                >
                  {link.text}
                </a>
              </div>
            ))}
          </div>

          {/* Botones de contacto desktop */}
          <div className="hidden md:flex items-center space-x-3 ml-6">
            <a
              href="tel:+34612345678"
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-emerald-400 hover:bg-gray-800/50 border border-emerald-400/20 hover:border-emerald-400/40 transition-colors duration-300"
            >
              <FaPhoneAlt className="mr-2" />
              Llamar
            </a>
            <a
              href="https://wa.me/34612345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-emerald-400/20"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>

          {/* Botón móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 focus:outline-none transition-colors duration-300"
            >
              {menuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil con AnimatePresence */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg"
          >
            <div className="px-5 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <a href={link.href} className="flex-1">
                    {link.text}
                  </a>
                </div>
              ))}

              <div className="pt-4 space-y-3">
                <a
                  href="tel:+34612345678"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-white bg-gray-800 hover:bg-gray-700/80 border border-gray-700"
                >
                  <FaPhoneAlt className="mr-3" />
                  Llamar ahora
                </a>
                <a
                  href="https://wa.me/34612345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700"
                >
                  <FaWhatsapp className="mr-3" />
                  WhatsApp
                </a>
                <a
                  href="mailto:info@firoreparaciones.com"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium text-white bg-gray-800 hover:bg-gray-700/80 border border-gray-700"
                >
                  <FaEnvelope className="mr-3" />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
