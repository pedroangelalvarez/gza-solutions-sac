"use client";

import { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Estado para el loader
  const [hasOpened, setHasOpened] = useState(false);
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ sender: string; content: string }[]>([]);

  const handleOpenChat = () => {
    setIsOpen(true); // Abre el chat inmediatamente
    setIsLoading(true); // Activa el loader para los elementos internos
    setTimeout(() => {
      setIsLoading(false); // Desactiva el loader después de 1 segundo
      if (!hasOpened) {
        setChatHistory((prev) => [
          ...prev,
          { sender: 'assistant', content: 'Bienvenido, soy el asesor virtual, ¿en qué puedo apoyarte?' },
        ]);
        setHasOpened(true);
      }
    }, 1000); // Duración del loader: 1 segundo
  };

  const handleSendMessage = async () => {
    if (!message.trim() || message.trim().length < 3) {
      console.error('El mensaje debe contener al menos 3 caracteres.');
      return;
    }

    setChatHistory((prev) => [...prev, { sender: 'user', content: message }]);

    // Respuesta predefinida si el mensaje es "Hola"
    if (message.trim().toLowerCase() === 'hola') {
      setChatHistory((prev) => [
        ...prev,
        { sender: 'assistant', content: 'Hola, ¿en qué puedo ayudarte?' },
      ]);
      setMessage(''); // Limpia el textarea
      return; // No llama a la API
    }

    const ASK_API_URL = process.env.NEXT_PUBLIC_ASK_API_PRODUCTION;

    setIsSending(true);
    try {
      const response = await axios.post(ASK_API_URL + '/ask', {
        content: message,
      });

      const content = response.data.result;
      if (content) {
        setChatHistory((prev) => [...prev, { sender: 'assistant', content }]);
      } else {
        console.error('No se encontró el contenido en la respuesta.');
      }
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prev) => [
        ...prev,
        { sender: 'assistant', content: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.' },
      ]);
    } finally {
      setIsSending(false);
      setMessage('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen ? (
        <button
          onClick={handleOpenChat}
          className="bg-primary text-white px-4 py-2 rounded-full shadow-lg hover:bg-primary-dark transition"
          aria-label="Abrir chat"
        >
          Contactar con un asesor
        </button>
      ) : isLoading ? ( // Muestra el loader skeleton mientras carga
        <div className="bg-white shadow-lg rounded-lg p-4 w-72 flex flex-col items-center justify-center">
          <div className="animate-pulse w-full">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4 w-72 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Chat</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition"
              aria-label="Cerrar chat"
            >
              ✕
            </button>
          </div>
          <div
            className="flex-grow overflow-y-auto mb-2 border border-gray-300 rounded-md p-2"
            style={{ maxHeight: '300px' }}
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`mb-2 ${
                  chat.sender === 'user' ? 'text-right' : 'text-left'
                }`}
              >
                {chat.sender === 'user' ? (
                  <span className="inline-block px-3 py-2 rounded-lg bg-blue-500 text-white">
                    {chat.content}
                  </span>
                ) : (
                  <div className="inline-block px-3 py-2 rounded-lg bg-gray-200 text-black">
                    <ReactMarkdown>{chat.content}</ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
          </div>
          {!isSending ? (
            <>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault(); // Evita el salto de línea
                    if (message.trim().length >= 3) {
                      handleSendMessage(); // Llama a la función si el mensaje es válido
                    } else {
                      console.error('El mensaje debe contener al menos 3 caracteres.');
                    }
                  }
                }}
                placeholder="Escribe tu mensaje..."
                className="w-full border border-gray-300 rounded-md p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-primary"
                rows={2}
              />
              <button
                onClick={handleSendMessage}
                disabled={isSending || message.trim().length < 3} // Deshabilita si el mensaje es inválido
                className={`w-full bg-primary text-white py-2 rounded-md hover:bg-primary-dark transition ${
                  isSending || message.trim().length < 3 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSending ? 'Enviando...' : 'Enviar'}
              </button>
            </>
          ) : (
            <div className="animate-pulse w-full">
              <div className="h-10 bg-gray-300 rounded mb-2"></div>
              <div className="h-10 bg-gray-300 rounded"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}