import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, ShieldCheck, Bot } from 'lucide-react';
import { sendMessageToAI } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'model',
      text: 'Olá! Sou o especialista virtual do VigorMax. Tem alguma dúvida sobre como recuperar sua vitalidade? Posso explicar sobre ingredientes, prazos ou garantias. É tudo 100% sigiloso.'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for the API
    const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
    }));

    try {
      const responseText = await sendMessageToAI(input, historyForApi);
      const botMsg: Message = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[90vw] sm:w-[380px] h-[500px] bg-secondary rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-black p-4 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-surface border border-white/10 p-2 rounded-full">
                <Bot size={20} className="text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white">Especialista VigorMax</h3>
                <span className="text-[10px] text-accent flex items-center gap-1 uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></span>
                  Online Agora
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-[#121212] space-y-4">
            <div className="text-center text-[10px] text-gray-600 mb-6 uppercase tracking-widest">
              <ShieldCheck size={10} className="inline mr-1 -mt-0.5" />
              Conversa criptografada e anônima
            </div>
            
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-lg text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-accent text-black font-medium rounded-tr-none'
                      : 'bg-surface text-gray-300 border border-white/5 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-surface p-4 rounded-lg border border-white/5 rounded-tl-none">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-75"></span>
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full animate-bounce delay-150"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-secondary border-t border-white/10">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-primary border border-white/10 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-accent focus:border-accent focus:outline-none text-gray-200 placeholder-gray-600"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-accent hover:bg-accentLight text-black p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-surface text-gray-400' : 'bg-accent hover:bg-accentLight text-black'
        } p-4 rounded-full shadow-2xl shadow-accent/20 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-bold group border border-white/10`}
      >
        {!isOpen && (
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap text-sm">
            Tirar Dúvidas
          </span>
        )}
        {isOpen ? <X size={24} /> : <MessageCircle size={26} />}
      </button>
    </div>
  );
};