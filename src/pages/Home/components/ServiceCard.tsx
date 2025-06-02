import { FaTools, FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

export const ServiceCard = ({ services }: { services: string[] }) => {
  return (
    <div className="bg-gray-900/60 h-full backdrop-blur-sm rounded-2xl border border-gray-800 p-5 sm:p-6 md:p-8 w-full max-w-[700px] mx-auto">
      {/* Encabezado */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
        <div className="p-2 sm:p-3 bg-emerald-600 rounded-full flex-shrink-0">
          <FaTools className="text-lg sm:text-xl text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
          Reparación Profesional
        </h3>
      </div>

      {/* Descripción */}
      <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
        Servicio técnico certificado para todas las marcas principales del
        mercado.
      </p>

      {/* Lista de servicios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-start sm:items-center gap-2 sm:gap-3"
          >
            <div className="p-1 bg-emerald-900/50 rounded-full flex-shrink-0 mt-0.5 sm:mt-0">
              <FaCheckCircle className="text-emerald-400 text-xs sm:text-sm" />
            </div>
            <span className="text-gray-300 text-xs sm:text-sm md:text-base">
              {service}
            </span>
          </div>
        ))}
      </div>

      {/* Botón de acción */}
      <div className="flex justify-start">
        <a
          href="#contacto"
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium px-4 py-2.5 rounded-md transition-all duration-300 text-sm"
        >
          <FaPhoneAlt className="text-xs sm:text-sm" />
          Contactar Ahora
        </a>
      </div>
    </div>
  );
};
