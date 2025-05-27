import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import logo from "/icons/logo.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const navLinks = [
    { href: "#inicio", text: "Inicio" },
    {
      href: "#servicios",
      text: "Servicios",
      submenu: [
        { href: "#lavadoras", text: "Lavadoras" },
        { href: "#frigorificos", text: "Frigoríficos" },
        { href: "#hornos", text: "Hornos" },
        { href: "#lavavajillas", text: "Lavavajillas" },
      ],
    },
    { href: "#experiencia", text: "Experiencia" },
    { href: "#testimonios", text: "Clientes" },
    { href: "#contacto", text: "Contacto" },
  ];

  const toggleSubmenu = (item: string) => {
    setMobileSubmenu(mobileSubmenu === item ? null : item);
  };

  return (
    <nav className="fixed w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50 z-50">
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
                  {link.submenu && (
                    <FiChevronDown className="text-xs mt-0.5 opacity-70 group-hover:rotate-180 transition-transform" />
                  )}
                </a>

                {link.submenu && (
                  <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-xl bg-gray-900 border border-gray-800 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {link.submenu.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-emerald-400"
                        >
                          {subItem.text}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
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
                  <div
                    onClick={() =>
                      link.submenu
                        ? toggleSubmenu(link.text)
                        : setMenuOpen(false)
                    }
                    className="flex justify-between items-center px-3 py-3 rounded-lg text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 cursor-pointer"
                  >
                    <a
                      href={!link.submenu ? link.href : "#"}
                      className="flex-1"
                    >
                      {link.text}
                    </a>
                    {link.submenu && (
                      <FiChevronDown
                        className={`text-xs mt-0.5 transition-transform ${
                          mobileSubmenu === link.text ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </div>

                  {link.submenu && mobileSubmenu === link.text && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4"
                    >
                      {link.submenu.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="block px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-emerald-400 hover:bg-gray-800/30"
                        >
                          {subItem.text}
                        </a>
                      ))}
                    </motion.div>
                  )}
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
