import React from 'react';
import { Zap, Shield, Clock, Battery, CheckCircle, Heart, UserCheck, Check, X, Lock, Target, Eye, Map, BarChart2, Unlock, RefreshCw, Quote, Star, AlertTriangle, Ban, MessageSquareWarning, UserMinus, Activity } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Features: React.FC = () => {
  const benefits = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-danger" />,
      title: "Falhar na Hora H",
      desc: "Você sente a ansiedade crescendo. O coração acelera. Quando chega o momento... NADA ACONTECE. E mais uma vez, aquele terror do constrangimento te destrói."
    },
    {
      icon: <Ban className="w-8 h-8 text-accent" />,
      title: "Funciona Sozinho, Trava com Ela",
      desc: "Sozinho, tudo funciona perfeitamente. Mas quando há uma mulher real ao seu lado, é como se sua potência fosse desligada. A agonia de não entender o \"porque\" te corrói por dentro."
    },
    {
      icon: <MessageSquareWarning className="w-8 h-8 text-accent" />,
      title: "Medo de Ser Chamado de 'Broxa'",
      desc: "Aquela palavra que corta fundo. O medo constante de ser rotulado, julgado, diminuído. De não ser visto como homem. O pior... se sentir realmente menos homem."
    },
    {
      icon: <UserMinus className="w-8 h-8 text-accent" />,
      title: "Sensação de Ser 'Menos Homem'",
      desc: "Cada falha tira um pedaço da sua masculinidade. Você olha no espelho e não reconhece mais o homem que deveria ser. Pois sabe que o PAPEL NATURAL DE UM HOMEM é dar muito prazer a sua mulher."
    }
  ];

  const methodSteps = [
    {
      number: 1,
      icon: <Eye className="w-6 h-6 text-accent" />,
      title: "Descobrir o Reflexo",
      desc: "Você vai entender exatamente o que é o RABS™ e como ele funciona no seu corpo. Consciência é o primeiro passo."
    },
    {
      number: 2,
      icon: <Map className="w-6 h-6 text-accent" />,
      title: "Mapear os Gatilhos",
      desc: "Identificar os momentos, situações e pensamentos que ativam o bloqueio. Cada homem tem seus gatilhos únicos."
    },
    {
      number: 3,
      icon: <BarChart2 className="w-6 h-6 text-accent" />,
      title: "Descobrir Seu Nível",
      desc: "Entender em qual nível de bloqueio você se encontra agora e qual o caminho mais direto para sair dele."
    },
    {
      number: 4,
      icon: <Unlock className="w-6 h-6 text-accent" />,
      title: "Primeiro Destravamento",
      desc: "Aplicar a primeira técnica de destravamento emocional. Você vai sentir a diferença já nas primeiras aplicações."
    },
    {
      number: 5,
      icon: <RefreshCw className="w-6 h-6 text-accent" />,
      title: "Reforçar o Novo Padrão",
      desc: "Consolidar o RCS™ (Reflexo de Confiança Sexual) através de práticas simples e diretas que vão fortalecer sua nova resposta."
    }
  ];

  const stories = [
    {
      name: "Carlos",
      age: 34,
      avatar: "https://i.imgur.com/6soCqBm.png",
      text: "Eu passava vergonha toda vez que tinha intimidade. Funcionava sozinho, mas quando tinha uma mulher do lado, travava completamente. Comecei a evitar relacionamentos. Quando descobri o RABS™, foi como se acendessem uma luz. Finalmente entendi que não era eu, era um reflexo que eu podia desligar. Hoje, eu durmo ao lado da minha namorada sentindo orgulho, não medo.",
      summary: "Finalmente me sinto no controle novamente."
    },
    {
      name: "Rafael",
      age: 29,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces",
      text: "A pior coisa era o ciclo. Quanto mais eu tentava, mais eu falhava. E quanto mais eu falhava, mais forte ficava o medo. Foi um inferno. Esse método me mostrou que o problema não estava no meu corpo, estava na minha mente. Aprendi a mapear meus gatilhos e hoje eu sei exatamente o que fazer quando a ansiedade aparece. Mudou minha vida.",
      summary: "Voltei a me sentir homem."
    },
    {
      name: "Thiago",
      age: 41,
      avatar: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?w=150&h=150&fit=crop&crop=faces",
      text: "Eu já tinha tentado de tudo. Remédios, terapia, vídeos no YouTube. Nada funcionava de verdade. Ou eu ficava dependente do remédio ou eu broxava. O conceito do RABS™ e do RCS™ explicou exatamente o que eu tava passando. Tanto que o método funcionou muito rápido. Eu não aguentava mais as dores que os remédios traziam toda vez que eu tomava.",
      summary: "Finalmente algo que ataca a raiz do problema."
    },
    {
      name: "Marcelo",
      age: 37,
      avatar: "https://i.imgur.com/gHXxwvl.jpeg",
      text: "A camisinha era meu pior pesadelo. Toda vez que tinha que colocar, já era. Perdia tudo. A vergonha era tanta que eu evitava situações. Minha autoestima estava destruída. Com o método, aprendi qual era meu gatilho específico e aprendi a desativar esse bloqueio. Hoje uso camisinha sem problema nenhum. Parece besteira, mas eu me arriscava muito por não usar.",
      summary: "Recuperei a confiança que eu achei que tinha perdido para sempre."
    },
    {
      name: "André",
      age: 32,
      avatar: "https://i.imgur.com/EkOnDlF.png",
      text: "Eu achava que estava quebrado. Que tinha algum problema físico. Fui em médicos, fiz exames... nada. Foi quando percebi que o problema era emocional, mas não sabia o que fazer. O método me deu um caminho claro. Não é só teoria, são passos práticos que você aplica e vê o resultado. A primeira vez que funcionou depois de tanto tempo... cara, foi indescritível.",
      summary: "Hoje eu sei que meu corpo funciona perfeitamente."
    }
  ];

  // Reusable CTA Block
  const CTAButtonBlock = () => (
    <div className="w-full max-w-md mx-auto flex flex-col gap-4 mt-8">
      <a
        href="#planos"
        className="group relative w-full bg-gradient-to-b from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-black text-lg md:text-xl py-5 px-6 md:px-8 rounded-lg shadow-[0_0_40px_rgba(245,158,11,0.2)] transition-all transform hover:-translate-y-1 hover:shadow-[0_0_60px_rgba(245,158,11,0.4)] flex items-center justify-center gap-3 border-b-4 border-amber-700 active:border-b-0 active:translate-y-1 overflow-hidden whitespace-nowrap"
      >
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"></div>
        <span className="relative z-10">CONHECER O PROTOCOLO</span>
      </a>

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

      <div className="mt-2 flex justify-center items-center gap-4 text-gray-400 text-base">
        <div className="flex -space-x-3">
          {[
            "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=100&h=100&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1557862921-37829c790f19?w=100&h=100&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?w=100&h=100&fit=crop&crop=faces",
            "https://images.unsplash.com/photo-1581382575275-97901c2635b7?w=100&h=100&fit=crop&crop=faces"
          ].map((src, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-surface border-2 border-primary overflow-hidden">
              <img src={src} alt="User" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        <p className="text-base">Mais de <span className="text-white font-bold">4.500</span> homens satisfeitos.</p>
      </div>
    </div>
  );

  return (
    <section id="beneficios" className="py-6 bg-secondary border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              Você Sabe Exatamente Do Que Estou Falando
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
              Aquele momento em que você percebe que o medo está no controle, não você.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {benefits.map((item, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <div className="bg-surface p-5 rounded-xl hover:shadow-[0_0_20px_rgba(217,119,6,0.1)] transition-all duration-300 border border-accent/10 md:border-white/5 hover:border-accent/30 h-full group relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Mobile Shimmer Effect */}
                <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="bg-black/40 w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto border border-white/5 group-hover:border-accent/50 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* The Cycle That Imprisons You Block */}
        <FadeIn delay={200} className="w-full max-w-3xl mx-auto mb-8">
          <div className="bg-primary shadow-2xl border border-white/5 rounded-2xl p-6 md:p-8 relative overflow-hidden">
            {/* Dark accent glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-danger/5 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-tight border-l-4 border-danger pl-5">
              O Ciclo Que Te Aprisiona
            </h3>

            <div className="relative pl-5 space-y-6">
               {/* Vertical line */}
               <div className="absolute left-[36px] top-4 bottom-8 w-0.5 bg-white/10"></div>

               {/* Steps */}
               {[
                 { num: 1, text: <>Você sente <span className="text-danger font-bold">medo</span> de falhar novamente</>, border: "border-danger/40", textCol: "text-danger" },
                 { num: 2, text: <>O medo ativa o <span className="text-accent font-bold">RABS™</span> (reflexo de bloqueio)</>, border: "border-accent/40", textCol: "text-accent" },
                 { num: 3, text: <>Você <span className="text-danger font-bold">falha</span> mais uma vez</>, border: "border-danger/40", textCol: "text-danger" },
                 { num: 4, text: <>O medo <span className="text-danger font-bold">aumenta</span> ainda mais</>, border: "border-danger/40", textCol: "text-danger" }
               ].map((step, idx) => (
                 <div key={idx} className="relative flex items-center gap-4 group">
                    <div className={`w-10 h-10 rounded-full bg-surface border ${step.border} flex items-center justify-center ${step.textCol} font-bold text-base shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                      {step.num}
                    </div>
                    <p className="text-gray-300 text-base">{step.text}</p>
                 </div>
               ))}
            </div>

            <div className="mt-6 bg-gradient-to-r from-surface to-transparent border-l-4 border-danger p-4 rounded-r-lg">
               <h4 className="text-white font-bold text-base md:text-lg mb-1">E o ciclo se repete. Cada vez pior. Cada vez mais forte.</h4>
               <p className="text-base text-gray-500">Até que você começa a evitar completamente as situações íntimas.</p>
            </div>

            <div className="mt-6 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent z-10 pointer-events-none"></div>
               <img 
                 src="https://i.imgur.com/z3WwPkD.png" 
                 alt="Ilustração do Ciclo" 
                 className="w-full h-auto rounded-lg shadow-lg border border-white/5 opacity-90 hover:opacity-100 transition-all duration-500"
               />
            </div>
          </div>
        </FadeIn>

        {/* Mindset Shift Section */}
        <FadeIn delay={300} className="w-full max-w-4xl mx-auto text-center mt-8 mb-10 space-y-8">
            {/* The "What if" Box */}
            <div className="bg-surface/30 border border-accent/20 rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden backdrop-blur-sm">
                 {/* Subtle glow inside box */}
                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-accent/50 to-transparent"></div>
                 
                 <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Mas e se eu te disser que...</h3>
                 <p className="text-base md:text-xl text-accent font-medium leading-relaxed">
                   O problema não está no seu corpo. Está no comando que ele recebe.
                 </p>
            </div>

            {/* The Good News Card - Compact Version with readable font */}
            <div className="bg-surface border border-white/10 rounded-xl px-4 py-3 flex flex-col justify-center text-center relative overflow-hidden shadow-2xl max-w-[280px] md:max-w-xs mx-auto">
                <h3 className="text-base md:text-lg font-bold text-white mb-1.5">A Boa Notícia É:</h3>
                
                <div className="text-base text-gray-400 leading-tight space-y-0.5 font-light">
                    <p>Reflexos podem ser</p>
                    <p className="text-accent font-black text-lg uppercase tracking-tight py-0.5">desaprendidos</p>
                    <p>e novos reflexos podem ser</p>
                    <p className="text-accent font-black text-lg uppercase tracking-tight py-0.5">instalados.</p>
                </div>

                <div className="mt-2 pt-2 border-t border-white/10">
                    <p className="text-white font-bold text-base">
                        É o que a neurociência comprova.
                    </p>
                </div>
            </div>

            {/* The Visualization Text */}
            <div className="flex flex-col items-center gap-4 pt-4">
                <div className="px-4 py-2 rounded-full border border-accent/20 text-accent bg-accent/5 text-base font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                    Imagine Por Um Momento...
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                    Como Seria Sua Vida Sem O <span className="text-danger inline-block relative">
                      Medo de Falhar
                      <svg className="absolute w-full h-3 -bottom-1.5 left-0 text-danger opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                      </svg>
                    </span>
                </h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-light">
                    Porque esse será você daqui pra frente.
                </p>
            </div>
        </FadeIn>

        {/* RCS Explanation Section (NEW) */}
        <FadeIn delay={400} className="w-full max-w-4xl mx-auto mb-10 px-4">
            {/* RCS Card - Full Width now */}
            <div className="bg-surface/50 border border-accent/40 rounded-2xl p-6 md:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(217,119,6,0.15)] flex flex-col">
                 <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center border border-accent/20 shadow-[0_0_20px_rgba(217,119,6,0.1)]">
                        <Zap className="w-7 h-7 text-accent fill-accent/20" />
                    </div>
                    <div>
                        <h3 className="text-3xl font-black text-white leading-none tracking-tight">RCS™</h3>
                        <p className="text-gray-400 text-lg font-medium tracking-wide">Reflexo de Confiança Sexual</p>
                    </div>
                 </div>

                 <div className="space-y-5 flex-grow">
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        O RCS™ é o <strong className="text-white">novo reflexo</strong> que esse método inovador começa a instalar no lugar do Reflexo de Bloqueio.
                    </p>
                    <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                        Em vez do seu cérebro ativar o medo quando você está em uma situação íntima, ele cria um desvio emocional para ativar <strong className="text-accent">confiança e relaxamento</strong>.
                    </p>

                    <div className="bg-black/30 rounded-xl p-5 border border-white/5 my-4">
                        <h4 className="text-white font-bold mb-3 text-base uppercase tracking-wider">Com o RCS™ instalado, você experimenta:</h4>
                        <ul className="space-y-2.5">
                            {[
                                "Ereção natural e estável",
                                "Resistência à pressão externa",
                                "Confiança que não depende de remédios",
                                "Resposta corporal automática e positiva"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-base text-gray-300">
                                    <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                 </div>

                 <div className="mt-auto pt-5 border-t border-accent/20">
                    <p className="text-accentLight font-bold text-base md:text-lg leading-tight">
                        Você não está "consertando" nada. Você está reprogramando um comando que estava errado.
                    </p>
                 </div>
            </div>
        </FadeIn>
        
        {/* CTA Button Block for RCS */}
        <FadeIn className="mb-10">
          <CTAButtonBlock />
        </FadeIn>

        {/* Emotional Reality Block */}
        <FadeIn delay={500} className="max-w-2xl mx-auto mb-10 px-4">
             <div className="bg-[#121214] border border-white/5 rounded-2xl p-8 text-center shadow-2xl relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
                      Voltar a deitar ao lado <br className="hidden md:block" />
                      de uma mulher <br />
                      sentindo <span className="text-accent">orgulho</span>, <br />
                      não <span className="text-danger">vergonha</span>.
                  </h3>
                  
                  <div className="w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto mb-6 rounded-full opacity-60"></div>
                  
                  <p className="text-gray-300 text-lg md:text-xl font-light">
                      Essa é a realidade que o <br className="md:hidden" />
                      <span className="text-accent font-bold">RCS™</span> (Reflexo de Confiança Sexual) <br className="md:hidden" />
                      vai trazer para você.
                  </p>
             </div>
        </FadeIn>

        {/* Transformation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-10 px-4">
           {[
             {
               icon: <Zap className="w-6 h-6 text-accent" />,
               title: "Confiança Inabalável",
               desc: "Você chega na hora H sabendo que vai funcionar. Sem tremedeira. Sem suor frio. Apenas confiança pura."
             },
             {
               icon: <Activity className="w-6 h-6 text-accent" />,
               title: "Ereção Firme em Qualquer Situação",
               desc: "Camisinha, primeira vez com alguém novo, luz acesa... nada disso importa mais. Seu corpo responde como deveria."
             },
             {
               icon: <Heart className="w-6 h-6 text-accent" />,
               title: "Relacionamentos Mais Leves",
               desc: "Sem aquela tensão antes da intimidade. Sem precisar inventar desculpas. Apenas naturalidade e conexão."
             },
             {
               icon: <UserCheck className="w-6 h-6 text-accent" />,
               title: "Orgulho de Si Mesmo",
               desc: "Você volta a se olhar no espelho e ver um homem no controle. Alguém que recuperou o que era seu por direito."
             }
           ].map((item, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="bg-surface border border-white/5 p-5 rounded-2xl flex items-start gap-4 hover:border-accent/30 transition-all duration-300 shadow-lg group h-full">
                   <div className="bg-secondary p-2.5 rounded-xl border border-white/10 text-accent group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(217,119,6,0.1)]">
                      {item.icon}
                   </div>
                   <div>
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-accentLight transition-colors">{item.title}</h3>
                      <p className="text-gray-400 text-base leading-relaxed">{item.desc}</p>
                   </div>
                </div>
              </FadeIn>
           ))}
        </div>

        {/* Before vs After Section */}
        <FadeIn delay={400} className="max-w-5xl mx-auto mb-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Antes Card */}
            <div className="bg-surface/40 border border-danger/20 rounded-2xl p-6 relative overflow-hidden group hover:border-danger/40 transition-all duration-300">
               <h3 className="text-xl font-black text-danger mb-4 uppercase tracking-wider">Antes</h3>
               <ul className="space-y-3">
                 {[
                   "Medo constante de falhar",
                   "Evitando intimidade",
                   "Vergonha e culpa",
                   "Relacionamentos tensos",
                   "Autoestima destruída"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-gray-400 text-base">
                     <X className="w-5 h-5 text-danger shrink-0" />
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Depois Card */}
            <div className="bg-surface border border-accent rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(217,119,6,0.15)] transform md:-translate-y-2 md:scale-105 z-10">
               {/* Mobile Shimmer */}
               <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>
               
               <h3 className="text-xl font-black text-accent mb-4 uppercase tracking-wider">Depois</h3>
               <ul className="space-y-3">
                 {[
                   "Confiança em qualquer situação",
                   "Intimidade natural e espontânea",
                   "Orgulho da própria masculinidade",
                   "Relacionamentos leves e saudáveis",
                   "Autoestima restaurada"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-white font-medium text-base">
                     <div className="bg-accent/10 p-1 rounded-full">
                        <Check className="w-4 h-4 text-accent shrink-0" />
                     </div>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </FadeIn>

        {/* Narrative Transition Block replacing CTA Button */}
        <FadeIn className="mb-10">
          <div className="w-full max-w-md mx-auto flex flex-col gap-4 mt-8">
             <div className="text-center">
                 <p className="text-xl md:text-2xl text-gray-300 font-medium leading-tight mb-2">
                     Mas como exatamente isso funciona?{" "}
                     <br className="hidden md:block" />
                     Como você vai sair do bloqueio para a confiança?
                 </p>
                 <h2 className="text-4xl md:text-5xl font-black text-accent tracking-tighter drop-shadow-[0_0_25px_rgba(217,119,6,0.3)]">
                     É aqui que entra o método.
                 </h2>
             </div>
          </div>
        </FadeIn>

        {/* "O Despertar do Controle Masculino" Section - Container Visible immediately */}
        <div id="metodo" className="mb-10 max-w-6xl mx-auto px-4 pt-20 -mt-20">
             <div className="relative rounded-3xl border border-accent/20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-[#121214] to-[#0a0a0b] p-6 md:p-10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent shadow-[0_0_20px_rgba(217,119,6,0.5)]"></div>

                 <div className="text-center mb-10 relative z-10">
                    <FadeIn>
                        <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight bg-gradient-to-r from-white via-accent to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-text-shine">
                            O Despertar do Controle Masculino
                        </h2>
                        <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            Um protocolo estruturado para desativar o RABS™ e instalar o RCS™
                        </p>
                    </FadeIn>
                </div>

                <div className="flex flex-col lg:flex-row items-start gap-8 md:gap-12 relative z-10">
                    <FadeIn className="flex-1 w-full relative group perspective-1000 sticky top-6">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 rounded-full blur-[80px]"></div>
                        <div className="relative bg-surface border border-white/10 rounded-2xl p-3 shadow-2xl transform group-hover:rotate-y-6 transition-transform duration-700 ease-out">
                           <img 
                            src="https://i.imgur.com/hQBZgpb.png"
                            alt="Mockup do Protocolo" 
                            className="w-full h-auto rounded-lg shadow-inner border border-white/5 object-contain"
                           />
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none"></div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={100} className="flex-1 w-full">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8">
                            Este não é mais um produto que promete milagres. É um <strong className="text-white">método estruturado</strong>, em formato de protocolo digital, focado em três pilares:
                        </p>

                        <div className="space-y-5">
                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-surface border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(217,119,6,0.15)]">
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Entender o RABS™</h4>
                                    <p className="text-gray-400 text-base leading-relaxed">Dar nome ao que está travando você</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-surface border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(217,119,6,0.15)]">
                                    <CheckCircle size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Identificar Seus Gatilhos</h4>
                                    <p className="text-gray-400 text-base leading-relaxed">Mapear o que ativa o bloqueio em você</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="shrink-0 w-12 h-12 rounded-full bg-surface border border-accent/20 flex items-center justify-center text-accent shadow-[0_0_15px_rgba(217,119,6,0.15)]">
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1">Aplicar o Destravamento</h4>
                                    <p className="text-gray-400 text-base leading-relaxed">Fazer o primeiro movimento para desligar o reflexo</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 rounded-xl border border-white/10 bg-surface/50 relative overflow-hidden">
                            <div className="absolute left-0 top-0 h-full w-1.5 bg-accent"></div>
                            <p className="text-gray-200 text-base font-medium">
                                Tudo explicado de forma <span className="text-accent font-bold">direta</span>, sem linguagem complicada ou termos técnicos desnecessários.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* Como o Protocolo Funciona Steps */}
                <div className="mt-12 pt-8 border-t border-white/5 relative z-10">
                    <FadeIn>
                        <h3 className="text-center text-2xl md:text-3xl font-bold text-white mb-8">
                            Como o Protocolo Funciona
                        </h3>
                    </FadeIn>
                    
                    <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
                        {methodSteps.map((step, index) => (
                            <FadeIn key={index} delay={index * 100}>
                                <div className="bg-surface/30 border border-white/10 p-5 rounded-2xl flex flex-col sm:flex-row gap-5 items-start hover:border-accent/30 transition-colors relative overflow-hidden group">
                                    <div className="absolute top-0 left-0 w-1.5 h-full bg-accent opacity-0 group-hover:opacity-50 transition-opacity"></div>
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-black border border-accent/30 flex items-center justify-center text-lg font-black text-accent shadow-[0_0_20px_rgba(217,119,6,0.1)] group-hover:shadow-[0_0_25px_rgba(217,119,6,0.3)] transition-shadow">
                                        {step.number}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="text-accent/80">
                                                {step.icon}
                                            </div>
                                            <h4 className="text-white font-bold text-lg">{step.title}</h4>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed text-base">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Block: Não São Só Informações */}
                    <FadeIn delay={200} className="max-w-2xl mx-auto mt-10 mb-10">
                        <div className="bg-surface/80 border border-accent rounded-2xl p-6 md:p-8 text-center shadow-[0_0_30px_rgba(217,119,6,0.15)] relative overflow-hidden">
                            <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none"></div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Não São Só <br className="md:hidden" /> Informações
                            </h3>
                            
                            <p className="text-gray-300 text-lg leading-relaxed mb-5">
                                São <span className="text-white font-bold">ferramentas práticas</span> que 
                                você aplica e <span className="text-accent font-bold">vê os resultados acontecendo</span>.
                            </p>
                            
                            <p className="text-white font-medium text-lg border-t border-white/10 pt-4 inline-block px-8">
                                Passo a passo. Sem enrolação.
                            </p>
                        </div>
                    </FadeIn>
                    
                    {/* CTA Button Block for Informações Práticas */}
                    <FadeIn className="mb-10">
                       <CTAButtonBlock />
                    </FadeIn>

                    {/* Histórias Reais */}
                    <div className="mt-16">
                        <div className="text-center mb-8">
                            <FadeIn>
                                <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
                                    Eles Também Achavam Que Não Tinha Solução
                                </h3>
                                <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                                    Histórias reais de homens que recuperaram o controle sobre o próprio corpo.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {stories.map((story, index) => (
                                <FadeIn key={index} delay={index * 100} className={`h-full ${index === stories.length - 1 ? 'lg:col-start-2' : ''}`}>
                                    <div className="bg-surface p-6 rounded-2xl border border-white/10 relative flex flex-col shadow-lg group hover:border-accent/30 transition-colors h-full">
                                        <Quote className="absolute top-6 right-6 text-accent/10 w-10 h-10 transform rotate-180 scale-150" />
                                        
                                        <div className="flex items-center gap-4 mb-4">
                                            <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full object-cover border-2 border-accent/20" />
                                            <div>
                                                <h4 className="text-white font-bold text-base">{story.name}, <span className="text-gray-500 font-normal">{story.age} anos</span></h4>
                                                <div className="flex gap-0.5 text-accent my-1">
                                                    {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-gray-300 text-base leading-relaxed mb-6 italic relative z-10">
                                            "{story.text}"
                                        </p>

                                        <div className="mt-auto border-l-4 border-accent bg-white/5 p-3 rounded-r-xl">
                                            <p className="text-white font-bold text-base">{story.summary}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                    
                    {/* Mais de 4.500+ homens Block */}
                    <FadeIn delay={200} className="max-w-3xl mx-auto mt-16">
                        <div className="bg-surface/30 border border-accent/30 rounded-2xl p-8 text-center shadow-[0_0_30px_rgba(217,119,6,0.1)] relative overflow-hidden">
                            <div className="md:hidden absolute inset-0 w-full h-full -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/5 to-transparent z-0 pointer-events-none"></div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                                Mais de <span className="text-white">4.500+ homens</span> <br className="md:hidden" />
                                já começaram sua jornada
                            </h3>
                            
                            <div className="space-y-2 relative z-10">
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    Cada um com sua história. Cada um com seus gatilhos. Mas todos com o mesmo resultado:
                                </p>
                                <p className="text-accent font-bold text-lg md:text-xl tracking-wide pt-1">
                                    recuperação do controle e da confiança.
                                </p>
                            </div>
                        </div>
                    </FadeIn>

                </div>
             </div>
        </div>
      </div>
    </section>
  );
};