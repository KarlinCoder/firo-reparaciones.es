import { FaAward } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import { Element } from "react-scroll";

export const AboutMe = () => {
  const features = [
    {
      icon: <FiCheckCircle className="text-lg sm:text-xl text-emerald-400" />,
      title: "Técnico Certificado",
      description:
        "Certificaciones oficiales en las principales marcas del mercado",
      delay: 0.3,
    },
    {
      icon: <FiCheckCircle className="text-lg sm:text-xl text-emerald-400" />,
      title: "Garantía Extendida",
      description: "Reparaciones con garantía documentada de 6 meses",
      delay: 0.4,
    },
    {
      icon: <FiCheckCircle className="text-lg sm:text-xl text-emerald-400" />,
      title: "Atención Directa",
      description: "Comunicación sin intermediarios ni call centers",
      delay: 0.5,
    },
    {
      icon: <FiCheckCircle className="text-lg sm:text-xl text-emerald-400" />,
      title: "Respuesta Rápida",
      description: "Servicio urgente disponible en 24-48 horas",
      delay: 0.6,
    },
  ];

  return (
    <Element
      name="sobremi"
      className="relative bg-transparent py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text content */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-xs sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Profesional Certificado
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Soluciones técnicas{" "}
              <span className="text-emerald-400">con garantía</span>
            </h2>

            <div className="prose prose-invert max-w-none sm:max-w-xl md:max-w-2xl mb-6 sm:mb-8">
              <p className="text-sm sm:text-base md:text-md text-gray-300 mb-3 sm:mb-4">
                Soy <strong className="text-emerald-400">Julio</strong>, técnico
                especialista con más de 20 años resolviendo problemas complejos
                en electrodomésticos de todas las marcas.
              </p>
              <p className="text-sm sm:text-base md:text-md text-gray-300 mb-3 sm:mb-4">
                Mi metodología se basa en diagnósticos precisos, repuestos de
                calidad y transparencia absoluta. Si no merece la pena
                repararlo,{" "}
                <span className="text-white">seré el primero en decírtelo</span>
                .
              </p>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 md:mt-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gray-900/50 backdrop-blur-sm p-3 sm:p-4 md:p-5 rounded-lg sm:rounded-xl border border-gray-800 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-start gap-2 sm:gap-3 md:gap-4">
                    <div className="mt-0.5 p-1.5 sm:p-2 bg-emerald-900/20 rounded-md sm:rounded-lg transition">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-xs sm:text-sm md:text-base mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image section */}
          <div className="flex-1 w-full order-1 lg:order-2 flex justify-center relative mb-6 sm:mb-8 lg:mb-0">
            <div className="relative">
              {/* Image frame */}
              <div className="relative w-full max-w-xs sm:max-w-sm md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 border-gray-800 shadow-[0_0_0_1px_rgba(52,211,153,0.1)] group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-emerald-900/10 pointer-events-none"></div>
                <img
                  src="/julio1.jpg"
                  alt="Julio - Técnico especialista"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-emerald-400/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>

              {/* Experience badge */}
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 bg-gradient-to-br from-emerald-600 to-emerald-400 text-gray-950 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full font-bold shadow-lg flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                <FaAward className="text-sm sm:text-base md:text-lg" />
                <span>+7 Años</span>
              </div>

              {/* Decorative element */}
              <div className="absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-10 sm:w-12 h-10 sm:h-12 border-2 sm:border-[3px] border-emerald-400/30 rounded-lg sm:rounded-xl pointer-events-none hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};
