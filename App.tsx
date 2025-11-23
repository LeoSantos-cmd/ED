import React, { useEffect, useState } from 'react';
import { ShieldCheck, Menu, X, Lock, Clock, AlertCircle, HelpCircle, User } from 'lucide-react';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { FadeIn } from './components/FadeIn';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 3, minutes: 27, seconds: 0 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) return prev;

        if (prev.seconds === 0) {
          if (prev.minutes === 0) {
            return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
          }
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Avatares reais para prova social - Updated links
  const socialAvatars = [
    "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=100&h=100&fit=crop&crop=faces",
    "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=100&h=100&fit=crop&crop=faces"
  ];

  return (
    <div className="min-h-screen bg-primary text-gray-200 overflow-x-hidden font-sans text-base">
      {/* Header */}
      <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-primary/95 backdrop-blur border-b border-white/10 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-accent text-white p-1.5 rounded font-bold text-xl tracking-tighter shadow-lg shadow-accent/20">VM</div>
            <span className="font-bold text-2xl tracking-tight text-white">
              VigorMax<span className="text-accent">Pro</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {['Método', 'Garantia', 'FAQ'].map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => scrollTo(item === 'Método' ? 'metodo' : item.toLowerCase())}
                className="font-medium text-base text-gray-300 hover:text-accent transition-colors uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('planos')}
              className="bg-gradient-to-r from-accent to-accentLight hover:brightness-110 text-black px-6 py-3 rounded-lg font-bold text-base transition-all transform hover:scale-105 shadow-lg shadow-accent/20"
            >
              QUERO COMEÇAR
            </button>
          </nav>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-secondary border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 z-50">
             {['Método', 'Garantia', 'FAQ'].map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => scrollTo(item === 'Método' ? 'metodo' : item.toLowerCase())}
                className="text-left py-3 px-4 text-gray-200 font-medium border-b border-white/5 hover:bg-white/5 rounded-lg transition-colors text-lg"
              >
                {item}
              </button>
            ))}
             <button 
              onClick={() => scrollTo('planos')}
              className="bg-accent text-black w-full py-4 rounded-lg font-bold shadow-lg shadow-accent/20 mt-2 text-lg"
            >
              COMEÇAR AGORA
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-24 pb-8 lg:pt-28 lg:pb-12 bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen opacity-20"></div>
          <img 
            src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?auto=format&fit=crop&q=80&w=1920" 
            alt="Background Texture" 
            className="w-full h-full object-cover opacity-10 mix-blend-overlay grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/80 to-primary"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto md:mx-0">
            
            <FadeIn delay={100}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 tracking-tight">
                Você sabe o que é o RABS™?
                <span className="block mt-2 text-xl md:text-4xl lg:text-5xl font-bold text-gray-400 leading-normal">
                  É o reflexo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-danger via-red-600 to-danger uppercase tracking-wider font-black filter drop-shadow-lg animate-pulse">BLOQUEIO</span> que o seu cérebro cria para te proteger da <span className="relative inline-block px-3 mx-1 before:block before:absolute before:-inset-1 before:-skew-y-2 before:bg-danger before:rounded-sm shadow-2xl"><span className="relative text-white font-black italic tracking-wide">HUMILHAÇÃO</span></span>
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={200} className="w-full">
              <div className="my-6 w-full max-w-3xl aspect-video bg-black rounded-xl shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-accent/20 md:border-white/10 relative overflow-hidden group cursor-pointer hover:border-accent/50 transition-all duration-300">
                  <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent z-20 pointer-events-none"></div>
                  <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800" alt="Vídeo Explicativo" className="w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-500 grayscale mix-blend-luminosity" />
                  <div className="absolute inset-0 flex items-center justify-center z-30">
                    <div className="relative">
                      <div className="absolute -inset-6 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                      <div className="w-20 h-20 bg-gradient-to-br from-accent to-accentLight rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(217,119,6,0.6)] group-hover:scale-110 transition-transform duration-300 border border-white/20 relative z-10">
                          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-black border-b-[10px] border-b-transparent ml-1.5"></div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-30">
                    <p className="text-gray-200 text-base font-semibold flex items-center gap-2 tracking-wide">
                      <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-danger"></span>
                        </span> 
                      ASSISTA: Como reverter o bloqueio em 2 minutos
                    </p>
                  </div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mb-8 max-w-xl pl-6 border-l-4 border-accent/50">
                <p className="text-white font-bold text-lg md:text-xl mb-3">
                  90% dos casos de falha não são físicos, mas sim causados pelo RABS™.
                </p>
                <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                  Aprenda a desligar o <strong className="text-white font-bold">RABS™</strong> e recuperar o controle da sua ereção.
                  <span className="block mt-2 text-base md:text-lg">Sem depender de remédios nem sorte. <span className="text-accent font-bold">Apenas potência crua.</span></span>
                </p>
              </div>
            </FadeIn>
            
            <FadeIn delay={400} className="w-full flex flex-col items-start">
              <div className="w-full max-w-md flex flex-col gap-4">
                <button
                  onClick={() => scrollTo('planos')}
                  className="group relative w-full bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black text-lg md:text-xl py-5 px-6 md:px-8 rounded-lg shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 border-b-4 border-amber-700 active:border-b-0 active:translate-y-1 overflow-hidden whitespace-nowrap"
                >
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
                  <span className="relative z-10">CONHECER O PROTOCOLO</span>
                </button>

                <div className="flex flex-wrap justify-center items-center gap-3 text-gray-400 text-sm font-medium w-full text-center uppercase tracking-wide">
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-accent" />
                    <span>Acesso imediato</span>
                  </div>
                  <span className="text-gray-700 hidden md:inline">•</span>
                  <div>
                    A partir de <span className="text-accentLight font-bold">R$ 1,99</span>
                  </div>
                  <span className="text-gray-700 hidden md:inline">•</span>
                  <div>Risco Zero</div>
                </div>

                <div className="mt-2 flex items-center gap-4 text-gray-400 text-base w-fit">
                  <div className="flex -space-x-3">
                    {socialAvatars.map((src, i) => (
                      <div key={i} className="w-12 h-12 rounded-full bg-surface border-2 border-primary overflow-hidden transition-all">
                        <img src={src} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <p className="text-base">Mais de <span className="text-white font-bold">4.500</span> homens satisfeitos.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Pricing Section */}
      <Pricing />

      {/* Guarantee Section */}
      <section id="garantia" className="py-8 bg-surface border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeIn direction="up">
            <div className="bg-primary w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-accent/20 shadow-[0_0_30px_rgba(217,119,6,0.2)] relative overflow-hidden">
               <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
               <ShieldCheck className="w-10 h-10 text-accent relative z-10" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Garantia Blindada de 7 Dias</h2>
            <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed max-w-2xl mx-auto">
              Acesse o método e aplique o primeiro destravamento. Se você não sentir que está retomando o controle ou que esse produto não é para você, devolvemos 100% do seu investimento.
              <span className="block mt-3 text-white font-bold">Sem burocracia. Sem perguntas.</span>
              O valor é simbólico perto da transformação que você vai viver.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-8 bg-primary border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
           <div className="flex-1 relative">
             <div className="w-56 md:w-64 mx-auto aspect-[3/4] bg-secondary rounded-xl overflow-hidden border border-white/10 shadow-2xl relative grayscale hover:grayscale-0 transition-all duration-500">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=600" alt="Especialista" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                  <p className="text-white font-bold text-lg">Dr. Ricardo Mendes</p>
                  <p className="text-accent text-base">Especialista em Saúde Masculina</p>
                </div>
             </div>
           </div>
           <div className="flex-1">
             <FadeIn>
               <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quem Criou o Método?</h2>
               <div className="space-y-4 text-base md:text-lg text-gray-400 leading-relaxed">
                 <p>
                   Olá, sou Ricardo Mendes. Nos últimos 15 anos, dediquei minha carreira a estudar o que ninguém queria falar: <strong className="text-white">a ansiedade sexual masculina.</strong>
                 </p>
                 <p>
                   Percebi a quantidade de homens sendo tratados equivocadamente com remédios químicos para um problema que, na verdade, é um <strong className="text-white">reflexo emocional (RABS™)</strong> simples de contornar com o método correto de tratar. Eles não estavam "quebrados", apenas mal programados.
                 </p>
                 <p>
                   Minha missão é quebrar o silêncio e a vergonha, entregando um método simples e testado para que homens comuns recuperem a confiança que é sua por direito.
                 </p>
               </div>
             </FadeIn>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-8 bg-secondary border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4">
           <FadeIn>
             <h2 className="text-center text-3xl font-bold text-white mb-2 tracking-tight">Perguntas Frequentes</h2>
             <p className="text-center text-base md:text-lg text-gray-500 mb-8">Tire suas dúvidas sobre o protocolo</p>
           </FadeIn>
           <div className="space-y-3">
             {[
               { q: "E se meu problema for físico?", a: "90% dos casos de falha não são físicos, mas sim causados pelo RABS™. O método ajuda você a identificar se o bloqueio é físico ou emocional logo nos primeiros passos." },
               { q: "E se eu já tiver tentado remédios e terapias?", a: "Remédios tratam o sintoma (ereção), mas não a causa (o medo). O RCS™ foca em reprogramar a resposta automática do seu cérebro, algo que pílulas não fazem." },
               { q: "Em quanto tempo posso ver diferença?", a: "A compreensão do problema é imediata. Muitos homens relatam sentir alívio e maior controle já na primeira aplicação das técnicas de destravamento." },
               { q: "Vou precisar falar com alguém sobre isso?", a: "Não. O método é 100% digital e autoaplicável. Você faz no seu tempo, com total privacidade, sem precisar se expor." },
               { q: "Funciona mesmo que eu esteja em um relacionamento?", a: "Sim. O método pode ser aplicado tanto por homens solteiros quanto casados. Inclusive, há bônus focados em reconexão com a parceira." }
             ].map((item, idx) => (
               <FadeIn key={idx} delay={idx * 100}>
                 <div className="bg-surface rounded-xl border border-white/5 p-5 hover:border-accent/30 transition-colors group">
                   <div className="flex gap-4">
                     <HelpCircle className="shrink-0 text-accent mt-1" size={24} />
                     <div>
                       <h3 className="font-bold text-lg text-gray-200 mb-2 group-hover:text-white transition-colors">{item.q}</h3>
                       <p className="text-base text-gray-400 font-light leading-relaxed">{item.a}</p>
                     </div>
                   </div>
                 </div>
               </FadeIn>
             ))}
           </div>
        </div>
      </section>

      {/* Urgency Section Moved Here */}
      <section className="bg-secondary py-6 border-y border-white/5">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-5 text-center md:text-left">
           <div className="flex items-center gap-2 text-danger animate-pulse">
             <AlertCircle size={24} />
             <span className="font-bold uppercase tracking-widest text-base">Condições Especiais de Lançamento</span>
           </div>
           <div className="flex items-center gap-3 bg-primary/50 px-5 py-2.5 rounded-lg border border-white/10">
             <Clock size={20} className="text-gray-400" />
             <div className="flex gap-1 font-mono text-xl md:text-2xl font-bold text-white">
               <span>{timeLeft.hours.toString().padStart(2, '0')}</span>:
               <span>{timeLeft.minutes.toString().padStart(2, '0')}</span>:
               <span>{timeLeft.seconds.toString().padStart(2, '0')}</span>
             </div>
             <span className="text-base text-gray-500 uppercase">para o fim da oferta</span>
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
              Você não é "broxa". <br />
              Você só precisa ser reprogramado.
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Pare de aceitar o silêncio e a vergonha. Desligue o RABS™ hoje mesmo e recupere o controle da sua vida.
            </p>
            <button 
              onClick={() => scrollTo('planos')}
              className="bg-accent hover:bg-accentLight text-black text-lg md:text-xl font-black py-4 px-10 rounded-full shadow-[0_0_50px_rgba(217,119,6,0.4)] hover:shadow-[0_0_70px_rgba(217,119,6,0.6)] transition-all transform hover:scale-105"
            >
              QUERO COMEÇAR AGORA
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-gray-500 py-10 border-t border-white/10 text-base">
        <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-6 opacity-80">
                <div className="bg-accent text-white p-1.5 rounded text-sm font-bold">VM</div>
                <span className="font-bold text-xl text-white">VigorMax Pro</span>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400 text-base max-w-2xl">
              "Nossa missão é devolver ao homem o controle sobre o próprio corpo e a própria masculinidade, através de conhecimento e prática, sem dependência química."
            </p>
            <p className="text-base">&copy; 2024 VigorMax Pro. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;