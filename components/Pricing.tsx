import React from 'react';
import { Check, Star, Zap, Lock, BookOpen, Brain, Activity } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-6 bg-primary text-white relative overflow-hidden border-t border-white/5">
      {/* Background decorative blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-accent/10 rounded-full mix-blend-screen filter blur-[80px] animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">
              Escolha Seu Plano e <span className="text-accent">Comece Agora</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Acesso imediato ao método. Risco zero.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl mx-auto">
          
          {/* Plano 1 */}
          <FadeIn delay={100} className="h-full">
            <div className="bg-surface border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:border-white/20 transition-colors relative overflow-hidden">
              <div className="mb-5">
                <h3 className="text-xl font-bold text-white mb-1">O Despertar do Controle Masculino</h3>
                <p className="text-gray-400 text-sm">Para quem quer dar o primeiro passo</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-gray-400">R$</span>
                  <span className="text-5xl font-black text-white tracking-tighter">1,99</span>
                </div>
                <p className="text-gray-500 text-xs mt-1">Pagamento único • Acesso imediato</p>
              </div>

              <div className="flex-grow space-y-3 mb-6">
                <p className="text-white font-bold text-sm uppercase tracking-wide">O que você recebe:</p>
                <ul className="space-y-2.5">
                  {[
                    "Entendimento completo do RABS™",
                    "Mapeamento dos gatilhos pessoais",
                    "Identificação do seu nível de bloqueio",
                    "Primeiro destravamento emocional",
                    "Base para instalar o RCS™"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#" className="block w-full py-3.5 rounded-lg font-bold text-sm tracking-wide text-center bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10">
                Quero Esse Plano
              </a>
              <p className="text-center text-xs text-gray-500 mt-2 uppercase tracking-wider">Ideal para começar sua jornada</p>
            </div>
          </FadeIn>

          {/* Plano 2 - Popular */}
          <FadeIn delay={200} className="h-full">
            <div className="bg-secondary border border-accent rounded-2xl p-6 flex flex-col h-full shadow-[0_0_40px_rgba(217,119,6,0.15)] relative overflow-hidden transform md:-translate-y-2">
              {/* Mobile Shimmer */}
              <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none" style={{ animationDuration: '2s' }}></div>

              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-accent text-black px-4 py-1 rounded-b-lg text-[10px] font-black uppercase tracking-widest shadow-lg flex items-center gap-1">
                <Star size={10} fill="currentColor" /> Mais Popular
              </div>

              <div className="mb-5 mt-3">
                <h3 className="text-xl font-bold text-white mb-1">A Jornada Completa do RCS™</h3>
                <p className="text-gray-400 text-sm">Transformação completa com bônus exclusivos</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-medium text-gray-400">R$</span>
                  <span className="text-6xl font-black text-accent tracking-tighter">7,99</span>
                </div>
                <div className="flex items-center gap-3 mt-1">
                   <p className="text-gray-500 text-xs line-through">R$ 59,95</p>
                   <p className="text-accent font-bold text-xs bg-accent/10 px-2.5 py-0.5 rounded-full">Economia de R$ 50+</p>
                </div>
                <p className="text-gray-400 text-xs mt-1">Pagamento único • Acesso imediato</p>
              </div>

              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-center gap-2 text-accent font-bold text-sm mb-3">
                  <Zap size={16} fill="currentColor" />
                  <span>Tudo do plano anterior, MAIS:</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm md:text-base text-white">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>Ritual Antiansiedade de 7 Minutos <span className="text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-bold ml-1 align-middle">BÔNUS</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-white">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>Protocolo de Reconexão Cérebro-Pênis <span className="text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-bold ml-1 align-middle">BÔNUS</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-white">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>Mapa da Estabilidade Sexual <span className="text-[10px] bg-accent text-black px-1.5 py-0.5 rounded font-bold ml-1 align-middle">BÔNUS</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>Suporte prioritário por 30 dias</span>
                  </li>
                  <li className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                    <Check size={18} className="text-accent shrink-0 mt-0.5" />
                    <span>Atualizações futuras gratuitas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-surface/50 rounded-lg p-3 mb-4 border border-white/5 text-center">
                 <p className="text-xs text-gray-500 mb-0.5">Valor separado: <span className="line-through">R$ 59,95</span></p>
                 <p className="text-white font-bold text-base">Hoje por apenas <span className="text-accent">R$ 7,99</span></p>
              </div>

              <a href="#" className="block w-full py-3.5 rounded-lg font-bold text-base tracking-wide text-center bg-gradient-to-r from-accent to-accentLight hover:brightness-110 text-black transition-all shadow-lg shadow-accent/20 mb-2">
                Quero a Jornada Completa
              </a>
              <p className="text-center text-xs text-gray-500 flex justify-center items-center gap-1.5">
                <Zap size={12} /> Melhor custo-benefício • Transformação mais rápida
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={400}>
          <div className="mt-8 max-w-md mx-auto bg-surface/30 border border-white/10 rounded-xl p-3 flex flex-col items-center text-center gap-1">
             <div className="flex items-center gap-2 text-white font-bold text-sm">
               <Lock size={14} className="text-accent" />
               Pagamento 100% seguro
             </div>
             <p className="text-xs text-gray-400">
               Acesso instantâneo após a confirmação • <span className="text-accent">Garantia de 7 dias</span>
             </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};