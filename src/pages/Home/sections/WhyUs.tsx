import {
  FaTools,
  FaHome,
  FaHeadset,
  FaMoneyBillWave,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";
import React from "react";

export const WhyUs = () => {
  const features = [
    {
      icon: <FaTools />,
      title: "Equipamiento Profesional",
      description: "Tecnología de última generación para diagnósticos precisos",
      delay: 0.1,
    },
    {
      icon: <FaHome />,
      title: "Sin Costo por Visita",
      description: "No cobramos desplazamiento en nuestra área de servicio",
      delay: 0.2,
    },
    {
      icon: <FaHeadset />,
      title: "Asistencia 24/7",
      description: "Servicio de emergencia disponible en cualquier momento",
      delay: 0.3,
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Precios Justos",
      description: "Presupuestos transparentes sin sorpresas",
      delay: 0.4,
    },
    {
      icon: <FaShieldAlt />,
      title: "Garantía Extendida",
      description: "12 meses de garantía en todas nuestras reparaciones",
      delay: 0.5,
    },
    {
      icon: <FaClock />,
      title: "Rapidez",
      description: "Soluciones en menos de 24 horas en la mayoría de casos",
      delay: 0.6,
    },
  ];

  return (
    <section
      id="whyus"
      className="relative bg-transparent py-24 overflow-hidden"
    >
      {/* Efecto de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Ventajas Exclusivas
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ¿Por qué elegir <span className="text-emerald-400">FIRO</span>?
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Excelencia técnica y un servicio personalizado que marca la
            diferencia
          </p>
        </div>

        {/* Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10"
            >
              {/* Ícono */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-emerald-900/20 rounded-lg group-hover:bg-emerald-400/10 transition">
                  {React.cloneElement(feature.icon, {
                    className: "text-3xl text-emerald-400",
                  })}
                </div>
              </div>

              {/* Contenido */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto adicional */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed">
              En FIRO Reparaciones no solo solucionamos problemas técnicos,
              creamos relaciones de confianza. Cada servicio incluye{" "}
              <span className="text-emerald-400">
                asesoramiento personalizado
              </span>{" "}
              para ayudarte a mantener tus electrodomésticos en óptimas
              condiciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
