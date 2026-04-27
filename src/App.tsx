/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import { 
  Wrench, 
  Settings, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Gauge, 
  Car,
  Disc,
  ArrowRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Sub-components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-bg/90 backdrop-blur-md py-4 border-bottom border-line shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-sm rotate-45">
            <Wrench className="text-white w-6 h-6 -rotate-45" />
          </div>
          <span className="font-display text-2xl font-bold tracking-tighter uppercase italic">
            Precision<span className="text-primary italic">Auto</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-400">
          <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
          <a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
        </div>

        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="no-referrer"
          className="bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-sm font-bold text-sm tracking-tight transition-all active:scale-95 flex items-center gap-2"
        >
          ORÇAMENTO RÁPIDO
        </a>
      </div>
    </nav>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/5511999999999"
    target="_blank"
    rel="no-referrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
    id="whatsapp-fixed-cta"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Fale Conosco
    </span>
  </motion.a>
);

const SectionHeading = ({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-[2px] bg-primary"></div>
      <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">
        {subtitle}
      </span>
    </div>
    <h2 className={`font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase ${light ? 'text-white' : 'text-white'}`}>
      {title}
    </h2>
  </div>
);

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[70] origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 technical-grid">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-bg/95 to-primary/10 z-0" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-primary text-[10px] font-bold tracking-widest uppercase">Tecnologia de Ponta & Alta Performance</span>
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-8 italic">
              SEU CARRO<br />
              <span className="text-primary not-italic">NO ÁPICE</span><br />
              DA PERFORMANCE
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 font-medium leading-relaxed">
              Mecânica especializada, alinhamento 3D e tecnologia avançada para quem não aceita menos que a perfeição técnica.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#agendar" 
                className="bg-primary hover:bg-neutral-100 hover:text-dark-bg text-white px-8 py-4 rounded-sm font-black tracking-tighter uppercase text-lg transition-all flex items-center justify-center gap-3 active:scale-95 shadow-[0_0_40px_rgba(196,30,58,0.3)]"
              >
                AGENDAR AGORA <ChevronRight size={20} />
              </a>
              <div className="flex items-center gap-4 px-6 py-4 border border-line rounded-sm">
                <ShieldCheck className="text-primary" />
                <div>
                  <div className="text-white font-bold text-xs uppercase tracking-wider">Garantia Total</div>
                  <div className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">Peças & Mão de Obra</div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <div className="relative w-full aspect-square max-w-lg">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <img 
                src="/images/hero.png" 
                alt="Automotive Engine" 
                className="w-full h-full object-cover rounded-2xl relative z-10 border border-line grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 z-20 bg-dark-bg border border-line p-6 rounded-sm shadow-2xl">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-display font-black text-primary tracking-tighter leading-none">15Y</div>
                  <div className="text-gray-400 text-[10px] font-bold uppercase leading-tight tracking-widest">Anos de<br />Expertise</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="servicos" className="py-24 bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Expertise Técnica" 
            title="Nossos Serviços de Elite" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Gauge size={32} />, title: "Mecânica de Alta Precisão", desc: "Diagnóstico computadorizado de última geração para motores nacionais e importados.", img: "/images/diagnostics.png" },
              { icon: <Disc size={32} />, title: "Freios e Suspensão", desc: "Segurança total com revisão completa dos sistemas de frenagem e amortecimento.", img: "/images/brakes.png" },
              { icon: <Settings size={32} />, title: "Alinhamento 3D Laser", desc: "Precisão milimétrica para prolongar a vida útil dos seus pneus e estabilidade total.", img: "/images/alignment.png" },
              { icon: <Car size={32} />, title: "Troca de Óleo VIP", desc: "Lubrificantes premium e filtros originais para máxima proteção do motor.", img: "/images/oil_change.png" },
              { icon: <ShieldCheck size={32} />, title: "Checkup Preventivo", desc: "Evite surpresas desagradáveis com nossa análise completa de 50 itens essenciais.", img: "/images/checkup.png" },
              { icon: <Wrench size={32} />, title: "Funilaria & Pintura", desc: "Acabamento de fábrica com tecnologia de pintura dry-system e polimento.", img: "/images/painting.png" },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[400px] overflow-hidden rounded-sm border border-line glass-card hover:border-primary/50 transition-all duration-500"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-transparent" />
                </div>
                
                <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                  <div className="text-primary mb-4 p-3 bg-primary/10 w-fit rounded-sm group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold tracking-tight mb-2 uppercase group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200">
                    {service.desc}
                  </p>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                    Saiba Mais <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="diferenciais" className="py-24 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeading subtitle="Por que Nós?" title="O Padrão de Ouro Automotivo" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {[
              { icon: <Clock size={40} />, title: "Agilidade Total", desc: "Processos otimizados para entregar seu carro o mais rápido possível." },
              { icon: <ShieldCheck size={40} />, title: "Garantia Real", desc: "Transparência total e garantia por escrito em todos os serviços." },
              { icon: <Settings size={40} />, title: "Alta Tecnologia", desc: "Equipamentos que você só encontra em concessionárias premium." },
              { icon: <Star size={40} />, title: "Time Elite", desc: "Profissionais certificados e em constante treinamento técnico." },
            ].map((d, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6"
              >
                <div className="text-primary">{d.icon}</div>
                <div>
                  <h4 className="font-display font-bold text-xl uppercase tracking-tighter mb-2">{d.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-bg border-y border-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
            <div className="lg:col-span-1">
              <SectionHeading subtitle="Prova Social" title="Quem Confia, Recomenda" />
              <p className="text-gray-400 mb-8">Mais de 5.000 clientes satisfeitos e veículos prontos para a estrada com segurança máxima.</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-2 border-dark-bg bg-surface overflow-hidden">
                      <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="font-black text-2xl leading-none">4.9/5.0</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-primary">Avaliação Google</div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Ricardo Santos", role: "Proprietário BMW X3", text: "Profissionalismo de concessionária com preço justo. O alinhamento 3D mudou a estabilidade do carro." },
                { name: "Camila Lima", role: "Cliente Fidelidade", text: "Minha oficina de confiança há 5 anos. Atendimento rápido e equipe extremamente técnica." }
              ].map((t, i) => (
                <div key={i} className="p-8 glass-card border-line rounded-sm relative">
                  <div className="flex gap-1 mb-6">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="fill-primary text-primary" />)}
                  </div>
                  <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                  <div>
                    <div className="font-bold uppercase tracking-tight text-white">{t.name}</div>
                    <div className="text-primary text-[10px] font-black tracking-widest uppercase">{t.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-24 bg-dark-bg technical-grid">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
          <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs">Simples & Prático</span>
          <h2 className="font-display text-5xl md:text-7xl font-black tracking-tighter uppercase mt-4 italic">
            SEU CARRO PRONTO<br />EM <span className="text-primary not-italic">4 PASSOS</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: "01", title: "Contato", desc: "Nos chame no WhatsApp agora." },
            { step: "02", title: "Diagnóstico", desc: "Análise técnica presencial." },
            { step: "03", title: "Execução", desc: "Mão de obra de alta precisão." },
            { step: "04", title: "Entrega", desc: "Checkup final e entrega segura." },
          ].map((s, i) => (
            <div key={i} className="relative text-center group">
              <div className="text-8xl font-display font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-primary/10 transition-colors">
                {s.step}
              </div>
              <div className="relative z-10">
                <div className="h-1 bg-line w-full absolute top-1/2 -translate-y-1/2 left-0 hidden md:block" />
                <div className="w-12 h-12 rounded-full bg-dark-bg border-4 border-primary mx-auto relative z-20 flex items-center justify-center text-primary font-black group-hover:bg-primary group-hover:text-white transition-all">
                  <CheckCircle2 size={24} />
                </div>
                <h4 className="font-display font-bold uppercase tracking-tighter text-2xl mt-6 mb-2">{s.title}</h4>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-12 py-5 rounded-sm font-black tracking-tighter uppercase text-xl inline-flex items-center gap-4"
          >
            QUERO MEU CARRO NOVO <MessageCircle size={24} />
          </motion.button>
        </div>
      </section>

      {/* Map & Location */}
      <section id="contato" className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeading subtitle="Onde Estamos" title="Visite Nossa Planta" />
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-sm bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-2">Endereço Principal</h5>
                  <p className="text-xl font-medium">Av. das Nações Unidas, 12.345<br />São Paulo - SP, 04578-000</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-line">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-4 flex items-center gap-2">
                    <Clock size={14} /> Atendimento
                  </h5>
                  <ul className="text-gray-400 space-y-2 text-sm font-medium">
                    <li>Seg - Sex: 08:00 - 18:00</li>
                    <li>Sábado: 08:00 - 13:00</li>
                    <li>Domingo: Fechado</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-xs text-primary mb-4 flex items-center gap-2">
                    <Phone size={14} /> Contato
                  </h5>
                  <ul className="text-gray-400 space-y-2 text-sm font-medium">
                    <li className="text-white text-lg font-bold">(11) 99999-9999</li>
                    <li>contato@precisionauto.com</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <button className="mt-12 w-full bg-white text-dark-bg hover:bg-primary hover:text-white px-8 py-4 rounded-sm font-black tracking-tighter uppercase transition-all flex items-center justify-center gap-3">
              COMO CHEGAR <MapPin size={20} />
            </button>
          </div>
          
          <div className="w-full h-[500px] bg-line rounded-sm overflow-hidden relative border border-line grayscale">
            {/* Fake Map with UI elements to feel real */}
            <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-12 h-12 bg-primary rounded-full animate-ping absolute -inset-0 opacity-50" />
                <div className="w-12 h-12 bg-primary rounded-full relative z-10 flex items-center justify-center shadow-[0_0_20px_rgba(196,30,58,0.6)]">
                  <Wrench className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-line bg-dark-bg">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 grayscale brightness-200">
            <div className="w-8 h-8 bg-white flex items-center justify-center rounded-sm rotate-45">
              <Wrench className="text-black w-5 h-5 -rotate-45" />
            </div>
            <span className="font-display text-xl font-bold tracking-tighter uppercase italic text-white leading-none">
              Precision<span className="italic">Auto</span>
            </span>
          </div>
          
          <div className="text-gray-600 text-[10px] font-bold uppercase tracking-widest text-center">
            © 2026 PRECISIONAUTO CENTRO AUTOMOTIVO - TODOS OS DIREITOS RESERVADOS
          </div>
          
          <div className="flex gap-6">
            {['Instagram', 'Facebook', 'LinkedIn'].map(s => (
              <a key={s} href="#" className="text-gray-500 hover:text-primary transition-colors text-[10px] font-black uppercase tracking-widest">{s}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
