import { useState } from "react";
import {
  FaHandsClapping,
  FaRegHourglassHalf,
  FaUserGroup,
} from "react-icons/fa6";

export const Experience = () => {
  // Estados para los contadores
  const [years] = useState(20);
  const [clients] = useState(300);
  const [satisfaction] = useState(99.7);

  // Datos de las métricas mejoradas
  const metrics = [
    {
      icon: (
        <FaRegHourglassHalf className="text-xl sm:text-2xl text-emerald-400" />
      ),
      value: years,
      label: "Años de experiencia",
      suffix: "+",
      delay: 0.2,
    },
    {
      icon: <FaUserGroup className="text-xl sm:text-2xl text-emerald-400" />,
      value: clients,
      label: "Clientes satisfechos",
      suffix: "+",
      delay: 0.3,
    },
    {
      icon: (
        <FaHandsClapping className="text-xl sm:text-2xl text-emerald-400" />
      ),
      value: satisfaction,
      label: "Tasa de satisfacción",
      suffix: "%",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="experiencia"
      className="relative bg-transparent py-16 sm:py-20 md:py-24 overflow-hidden"
    >
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Efecto de gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado mejorado */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-xs sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Resultados Comprobados
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Experiencia que{" "}
            <span className="text-emerald-400">inspira confianza</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto">
            Años de dedicación reflejados en números que hablan por sí mismos
          </p>
        </div>

        {/* Contadores mejorados */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 px-5 sm:px-0 max-w-[900px] mx-auto justify-items-center">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-gray-800 transition-all duration-300 shadow-lg w-full h-full max-w-[300px] justify-items-center"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-3 p-2 sm:p-3 bg-emerald-900/20 rounded-full">
                  {metric.icon}
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2">
                  {metric.value}
                  <span className="text-emerald-400">{metric.suffix}</span>
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm md:text-base mt-auto">
                  {metric.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Texto descriptivo mejorado */}
        <div className="mt-12 sm:mt-16 px-5 sm:px-0 text-center max-w-xl sm:max-w-2xl md:max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 sm:p-6 border border-gray-800">
            <p className="text-sm sm:text-md text-gray-300 leading-relaxed">
              Con más de{" "}
              <span className="text-emerald-400 font-semibold">
                {years} años
              </span>{" "}
              de experiencia, he atendido personalmente a{" "}
              <span className="text-emerald-400 font-semibold">
                {clients}+ clientes
              </span>
              , manteniendo un{" "}
              <span className="text-emerald-400 font-semibold">
                {satisfaction}% de satisfacción
              </span>
              . Cada número representa una solución técnica y una relación de
              confianza construida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
