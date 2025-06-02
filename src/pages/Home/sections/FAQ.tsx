import { FaQuestionCircle } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "¿Cuál es el tiempo de respuesta promedio para una reparación?",
      answer:
        "En la mayoría de los casos, atendemos emergencias el mismo día y realizamos reparaciones completas en menos de 24 horas.",
    },
    {
      question: "¿Trabajan con repuestos originales?",
      answer:
        "Sí, utilizamos repuestos originales o de calidad equivalente certificada.",
    },
    {
      question: "¿Qué electrodomésticos reparan?",
      answer: "Especializados en lavadoras, secadoras, neveras y hornos.",
    },
    {
      question: "¿Cómo funciona la garantía de sus reparaciones?",
      answer: "Ofrecemos 12 meses de garantía en todas nuestras reparaciones.",
    },
    {
      question: "¿Tienen costo por diagnóstico?",
      answer: "No, no cobramos por diagnósticos.",
    },
    {
      question: "¿Qué áreas geográficas cubren?",
      answer:
        "Servimos toda el área metropolitana sin costo de desplazamiento.",
    },
  ];

  return (
    <section id="preguntasfrecuentes" className="py-16 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-400/20 text-emerald-400 text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            Información importante
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Preguntas <span className="text-emerald-400">Frecuentes</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestros servicios y procesos
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-3 px-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-lg overflow-hidden"
            >
              <div className="w-full flex justify-between items-center p-4 sm:p-5 bg-gray-900/60">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="px-2 bg-emerald-900/20 rounded-lg text-emerald-400">
                    <FaQuestionCircle className="text-lg" />
                  </div>
                  <h3 className="text-left font-medium text-white text-[1rem]">
                    {faq.question}
                  </h3>
                </div>
              </div>

              <div className="p-4 sm:p-5 pl-14 sm:pl-16 text-gray-300 bg-gray-900/30">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
