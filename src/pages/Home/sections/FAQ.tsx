import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Cuál es el tiempo de respuesta promedio para una reparación?",
      answer:
        "En la mayoría de los casos, atendemos emergencias el mismo día y realizamos reparaciones completas en menos de 24 horas. Para casos más complejos, proporcionamos un diagnóstico inmediato y un estimado preciso.",
    },
    {
      question: "¿Trabajan con repuestos originales?",
      answer:
        "Sí, utilizamos repuestos originales o de calidad equivalente certificada. Siempre informamos al cliente sobre las opciones disponibles y sus garantías antes de proceder con cualquier reemplazo.",
    },
    {
      question: "¿Qué electrodomésticos reparan?",
      answer:
        "Especializados en lavadoras, secadoras, neveras y hornos. También reparamos lavavajillas, microondas y pequeños electrodomésticos. Contáctenos para confirmar si atendemos su modelo específico.",
    },
    {
      question: "¿Cómo funciona la garantía de sus reparaciones?",
      answer:
        "Ofrecemos 12 meses de garantía en todas nuestras reparaciones. La garantía cubre piezas y mano de obra, excepto en casos de mal uso o daños externos no relacionados con la reparación original.",
    },
    {
      question: "¿Tienen costo por diagnóstico?",
      answer:
        "El diagnóstico es completamente gratuito si procede con la reparación con nosotros. Solo aplicamos un cargo moderado por diagnóstico si decide no continuar con el servicio.",
    },
    {
      question: "¿Qué áreas geográficas cubren?",
      answer:
        "Servimos toda el área metropolitana sin costo de desplazamiento. Para ubicaciones más alejadas, aplicamos un pequeño suplemento que siempre comunicamos con transparencia antes de la visita.",
    },
  ];

  return (
    <section id="faq" className="relative bg-transparent py-24 overflow-hidden">
      {/* Efecto de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-gray-950 to-emerald-900/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado sin animaciones */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Información importante
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preguntas <span className="text-emerald-400">Frecuentes</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y procesos
          </p>
        </div>

        {/* Acordeón optimizado */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="overflow-hidden">
              <div
                className={`rounded-xl border transition-all duration-200 ${
                  activeIndex === index
                    ? "border-emerald-400/30"
                    : "border-gray-800"
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-gray-900/60 hover:bg-gray-900/80 backdrop-blur-sm transition-colors duration-200"
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-content-${index}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-emerald-900/20 rounded-lg">
                      <FaQuestionCircle className="text-xl text-emerald-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <div
                    className={`transition-transform duration-200 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <FaChevronDown className="text-emerald-400" />
                  </div>
                </button>

                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-200 ease-in-out overflow-hidden ${
                    activeIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pt-0 pl-16 text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final sin animaciones */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-4">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible 24/7 para resolver cualquier
              consulta adicional que puedas tener.
            </p>
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-emerald-600/20">
              Contactar a un especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
