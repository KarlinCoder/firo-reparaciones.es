import React from "react";
import { FaShieldAlt, FaClock, FaHome, FaCalendarAlt } from "react-icons/fa";
import { ServiceCard } from "../components/ServiceCard";

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
      icon: <FaShieldAlt size={18} />,
      title: "Garantía Extendida",
      description: "6 meses de garantía en todas las reparaciones realizadas",
    },
    {
      icon: <FaClock size={18} />,
      title: "Servicio 24/7",
      description: "Asistencia técnica disponible para emergencias",
    },
    {
      icon: <FaHome size={18} />,
      title: "Reparación a Domicilio",
      description: "Sin coste de desplazamiento en nuestra área",
    },
    {
      icon: <FaCalendarAlt size={18} />,
      title: "Citas Rápidas",
      description: "Disponibilidad en menos de 24 horas",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 bg-gray-950">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Encabezado */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Soluciones Técnicas
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
            Servicios <span className="text-emerald-400">Especializados</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-base md:text-lg">
            Reparaciones profesionales para mantener tus electrodomésticos
            funcionando como nuevos
          </p>
        </div>

        {/* Contenido principal */}
        <div className="flex flex-col lg:flex-row gap-6 xl:gap-8">
          {/* Tarjeta principal */}
          <div className="lg:flex-1">
            <ServiceCard services={services} />
          </div>

          {/* Tarjetas secundarias - Versión corregida */}
          <div className="lg:flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {serviceCards.map((card, index) => (
              <div
                key={index}
                className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-gray-800 hover:border-emerald-400/30 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-emerald-900/20 rounded-lg text-emerald-400 flex-shrink-0">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
