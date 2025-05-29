import { FaAward } from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";

export const AboutMe = () => {
  // Datos de características mejoradas
  const features = [
    {
      icon: <FiCheckCircle className="text-xl text-emerald-400" />,
      title: "Técnico Certificado",
      description:
        "Certificaciones oficiales en las principales marcas del mercado",
      delay: 0.3,
    },
    {
      icon: <FiCheckCircle className="text-xl text-emerald-400" />,
      title: "Garantía Extendida",
      description: "Reparaciones con garantía documentada de 12 meses",
      delay: 0.4,
    },
    {
      icon: <FiCheckCircle className="text-xl text-emerald-400" />,
      title: "Atención Directa",
      description: "Comunicación sin intermediarios ni call centers",
      delay: 0.5,
    },
    {
      icon: <FiCheckCircle className="text-xl text-emerald-400" />,
      title: "Respuesta Rápida",
      description: "Servicio urgente disponible en 24-48 horas",
      delay: 0.6,
    },
  ];

  return (
    <section
      id="sobremi"
      className="relative bg-transparent py-24 overflow-hidden"
    >
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Efecto de gradiente */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Contenido de texto mejorado */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Profesional Certificado
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluciones técnicas{" "}
              <span className="text-emerald-400">con garantía</span>
            </h2>

            <div className="prose prose-invert max-w-2xl mb-8">
              <p className="text-lg text-gray-300 mb-4">
                Soy <strong className="text-emerald-400">Julio</strong>, técnico
                especialista con más de 7 años resolviendo problemas complejos
                en electrodomésticos de todas las marcas.
              </p>
              <p className="text-gray-400">
                Mi metodología se basa en diagnósticos precisos, repuestos de
                calidad y transparencia absoluta. Si no merece la pena
                repararlo,{" "}
                <span className="text-white">seré el primero en decírtelo</span>
                .
              </p>
            </div>

            {/* Características mejoradas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 hover:bg-gray-900/70 backdrop-blur-sm p-5 rounded-xl border border-gray-800 hover:border-emerald-400/30 transition-all duration-300 shadow-lg hover:shadow-emerald-400/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 p-2 bg-emerald-900/20 rounded-lg group-hover:bg-emerald-400/10 transition">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen mejorada */}
          <div className="flex-1 flex justify-center relative">
            <div className="relative">
              {/* Marco con efecto neón */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-gray-800 shadow-[0_0_0_1px_rgba(52,211,153,0.1)] group">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-emerald-900/10 pointer-events-none"></div>
                <img
                  src="/julio1.jpg"
                  alt="Julio - Técnico especialista"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-emerald-400/5 group-hover:bg-transparent transition-all duration-300"></div>
              </div>

              {/* Badge animado */}
              <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-emerald-600 to-emerald-400 text-gray-950 px-6 py-2 rounded-full font-bold shadow-xl flex items-center gap-2">
                <FaAward className="text-lg" />
                <span>+7 Años</span>
              </div>

              {/* Elemento decorativo */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-400/30 rounded-xl pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
