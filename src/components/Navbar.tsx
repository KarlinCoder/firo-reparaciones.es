import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import logo from "/icons/logo.png";
import { Link as LinkScroll } from "react-scroll";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "inicio", text: "Inicio" },
    { href: "sobremi", text: "Sobre Mi" },
    { href: "servicios", text: "Servicios" },
    { href: "experiencia", text: "Experiencia" },
    { href: "preguntasfrecuentes", text: "FAQ" },
    { href: "porquenosotros", text: "¿Porque Nosotros?" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-30 w-full bg-neutral-950/70 backdrop-blur-2xl border-b border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo y marca */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="h-8 sm:h-10 w-auto"
                src={logo}
                alt="FIRO Reparaciones"
              />
              <span className="ml-2 text-[1.40rem] font-bold text-white italic">
                FIRO Reparaciones
              </span>
            </div>

            {/* Menú desktop */}
            <div className="hidden min-[925px]:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <LinkScroll
                    smooth={true}
                    duration={400}
                    to={link.href}
                    className="px-3 cursor-pointer sm:px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-emerald-400 transition-colors duration-300"
                  >
                    {link.text}
                  </LinkScroll>
                </div>
              ))}
            </div>

            {/* Botones de contacto desktop */}
            <div className="hidden min-[1172px]:flex items-center space-x-2 sm:space-x-3 ml-4 sm:ml-6">
              <a
                href="tel:+34612345678"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-emerald-400 hover:bg-gray-800/50 border border-emerald-400/20 hover:border-emerald-400/40 transition-colors duration-300"
              >
                <FaPhoneAlt className="mr-1 sm:mr-2" />
                Llamar
              </a>
              <a
                href="https://wa.me/34612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 sm:px-4 py-2 rounded-lg text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 shadow-lg hover:shadow-emerald-400/20"
              >
                <FaWhatsapp className="mr-1 sm:mr-2" />
                WhatsApp
              </a>
            </div>

            {/* Botón móvil */}
            <div className="min-[925px]:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 focus:outline-none transition-colors duration-300"
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              >
                {menuOpen ? (
                  <FaTimes className="h-5 w-5" />
                ) : (
                  <FaBars className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menú móvil overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Fondo oscuro - ajustado para no cubrir el navbar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40  mt-16" // Añadido mt-16 para que empiece debajo del navbar
              onClick={() => setMenuOpen(false)}
            />

            {/* Menú desplegable */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="fixed top-[81px] left-0 right-0 bg-neutral-950/70 backdrop-blur-xl border-b border-gray-800/50 z-50 shadow-xl"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <LinkScroll
                    key={link.href}
                    to={link.href}
                    smooth={true}
                    onClick={() => setMenuOpen(false)}
                    className="block w-full px-4 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    {link.text}
                  </LinkScroll>
                ))}

                <div className="pt-2 space-y-2">
                  <a
                    href="tel:+34612345678"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-medium text-white bg-gray-800 hover:bg-gray-700/80 border border-gray-700 transition-colors duration-200"
                  >
                    <FaPhoneAlt className="mr-3" />
                    Llamar ahora
                  </a>
                  <a
                    href="https://wa.me/34612345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 transition-colors duration-200"
                  >
                    <FaWhatsapp className="mr-3" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
