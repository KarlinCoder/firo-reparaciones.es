import { useState, useEffect } from "react";
import {
  FaHandsClapping,
  FaHouseCircleCheck,
  FaRegHourglassHalf,
  FaUserGroup,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Experience = () => {
  // Estados para los contadores
  const [years, setYears] = useState(0);
  const [clients, setClients] = useState(0);
  const [homes, setHomes] = useState(0);
  const [satisfaction, setSatisfaction] = useState(0);

  // Animación cuando el componente está en vista
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      // Animación de los contadores mejorada
      const animateCounters = () => {
        const duration = 1800;

        // Años (0 a 7)
        animateValue(0, 7, duration, setYears);

        // Clientes (0 a 300)
        animateValue(0, 300, duration, setClients);

        // Domicilios (0 a 110)
        animateValue(0, 110, duration, setHomes);

        // Satisfacción (0 a 97)
        animateValue(0, 97, duration, setSatisfaction);
      };

      const animateValue = (
        start: number,
        end: number,
        duration: number,
        setter: React.Dispatch<React.SetStateAction<number>>
      ) => {
        let startTimestamp: number | null = null;
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          setter(Math.floor(progress * (end - start) + start));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      };

      animateCounters();
    }
  }, [inView]);

  // Datos de las métricas mejoradas
  const metrics = [
    {
      icon: <FaRegHourglassHalf className="text-2xl text-emerald-400" />,
      value: years,
      label: "Años de experiencia",
      suffix: "+",
      delay: 0.2,
    },
    {
      icon: <FaUserGroup className="text-2xl text-emerald-400" />,
      value: clients,
      label: "Clientes satisfechos",
      suffix: "+",
      delay: 0.3,
    },
    {
      icon: <FaHouseCircleCheck className="text-2xl text-emerald-400" />,
      value: homes,
      label: "Visitas a domicilio",
      suffix: "+",
      delay: 0.4,
    },
    {
      icon: <FaHandsClapping className="text-2xl text-emerald-400" />,
      value: satisfaction,
      label: "Tasa de satisfacción",
      suffix: "%",
      delay: 0.5,
    },
  ];

  return (
    <section
      ref={ref}
      id="experiencia"
      className="relative bg-transparent py-24 overflow-hidden"
    >
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Efecto de gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Resultados Comprobados
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Experiencia que{" "}
            <span className="text-emerald-400">inspira confianza</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Años de dedicación reflejados en números que hablan por sí mismos
          </p>
        </motion.div>

        {/* Contadores mejorados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: metric.delay,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-4 p-3 bg-emerald-900/20 rounded-full">
                  {metric.icon}
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">
                  {metric.value}
                  <span className="text-emerald-400">{metric.suffix}</span>
                </h3>
                <p className="text-gray-400 mt-auto">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto descriptivo mejorado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <p className="text-lg text-gray-300 leading-relaxed">
              Con más de{" "}
              <span className="text-emerald-400 font-semibold">
                {years} años
              </span>{" "}
              de experiencia, he atendido personalmente a{" "}
              <span className="text-emerald-400 font-semibold">
                {clients}+ clientes
              </span>{" "}
              en más de{" "}
              <span className="text-emerald-400 font-semibold">
                {homes}+ visitas a domicilio
              </span>
              , manteniendo un{" "}
              <span className="text-emerald-400 font-semibold">
                {satisfaction}% de satisfacción
              </span>
              . Cada número representa una solución técnica y una relación de
              confianza construida.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
