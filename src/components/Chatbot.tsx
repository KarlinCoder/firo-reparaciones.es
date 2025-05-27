import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaComment, FaTimes, FaUser, FaRobot } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

// Tipado para mensajes
interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Julio, técnico de FIRO Reparaciones. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);
    let botText = "";
    const currentBotMessageId = messages.length + 2;

    try {
      const response = await fetch(
        "https://firo-bot.onrender.com/chat-stream",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: inputValue }),
        }
      );

      if (!response.ok || !response.body) {
        throw new Error("Error al recibir la respuesta.");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        botText += chunk;

        setMessages((prev) => {
          const last = prev[prev.length - 1];
          if (last && last.sender === "bot") {
            const updated = [...prev];
            updated[updated.length - 1] = {
              ...last,
              text: botText,
            };
            return updated;
          }
          return [
            ...prev,
            {
              id: currentBotMessageId,
              text: botText,
              sender: "bot",
              timestamp: new Date(),
            },
          ];
        });
      }

      setIsTyping(false);
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          text: "Hubo un problema al procesar tu mensaje. Inténtalo más tarde.",
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
      setIsTyping(false);
    }
  };

  // Animaciones
  const chatVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      scale: 0.9,
      transition: {
        duration: 0.2,
      },
    },
  };

  const buttonVariants = {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.1,
      rotate: 10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Botón SIEMPRE visible */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-emerald-600 hover:bg-emerald-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
        variants={buttonVariants}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
      >
        <FaComment className="text-xl" />
        {/* Indicador de estado en línea */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900"></span>
      </motion.button>

      {/* Ventana de chat posicionada encima del botón */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={chatVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute bottom-0 right-0 w-80 h-[500px] bg-gray-900 rounded-xl shadow-2xl border border-gray-700 overflow-hidden flex flex-col z-50"
          >
            {/* Encabezado */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-4 py-3 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="bg-white p-1 rounded-full">
                    <FaRobot className="text-emerald-600 text-lg" />
                  </div>
                  {/* Indicador de estado en línea */}
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-emerald-700"></span>
                </div>
                <div>
                  <span className="text-white font-medium block">Julio</span>
                  <span className="text-xs text-emerald-100 flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    En línea - FIRO Reparaciones
                  </span>
                </div>
              </div>
              <motion.button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Cerrar chat"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTimes />
              </motion.button>
            </div>

            {/* Área de mensajes */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-950/50 backdrop-blur-sm">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`mb-4 flex ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.sender === "user"
                        ? "bg-emerald-600 text-white rounded-br-none"
                        : "bg-gray-800 text-gray-100 rounded-bl-none"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {message.sender === "user" ? (
                        <FaUser className="text-xs opacity-70" />
                      ) : (
                        <FaRobot className="text-xs opacity-70" />
                      )}
                      <span className="text-xs opacity-70">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}

              {/* Indicador de "escribiendo..." */}
              {isTyping && (
                <motion.div
                  className="flex justify-start mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gray-800 text-gray-100 rounded-lg rounded-bl-none px-4 py-2">
                    <div className="flex space-x-1">
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input de mensaje */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-gray-700 bg-gray-900"
            >
              <motion.div className="flex gap-2" layout>
                <motion.input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe tu mensaje..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-emerald-500"
                  whileFocus={{ borderColor: "#10b981" }}
                />
                <motion.button
                  type="submit"
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                  aria-label="Enviar mensaje"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={!inputValue.trim()}
                >
                  <IoMdSend className="text-lg" />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
