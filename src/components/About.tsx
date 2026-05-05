import { motion } from 'motion/react';
import { Scissors, ShieldCheck, Ruler } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Scissors,
      title: "Cortes de Precisão",
      desc: "Trabalho artesanal com as técnicas mais modernas do mercado."
    },
    {
      icon: ShieldCheck,
      title: "Ambiente Premium",
      desc: "Espaço pensado para o conforto do homem moderno, com estética industrial."
    },
    {
      icon: Ruler,
      title: "Atendimento Personalizado",
      desc: "Cada detalhe é planejado para superar as suas expectativas."
    }
  ];

  return (
    <section id="sobre" className="relative py-24 md:py-32 overflow-hidden bg-surface">
      <div className="concrete-texture absolute inset-0 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
             <div className="absolute -inset-4 bg-accent/5 rounded-2xl scale-95 group-hover:scale-100 transition-transform duration-700" />
             <img 
               src="https://images.unsplash.com/photo-1590540179852-c1103d9fdca3?q=80&w=2070&auto=format&fit=crop" 
               alt="Barber at work" 
               className="relative rounded-lg grayscale hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover border border-white/10"
               referrerPolicy="no-referrer"
             />
             <div className="absolute -bottom-6 -right-6 bg-accent text-bg px-8 py-10 hidden md:block">
               <span className="font-display text-4xl block leading-none">+10</span>
               <span className="text-[10px] uppercase font-bold tracking-widest">Anos de Exp.</span>
             </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">Sobre nós</span>
              <h2 className="text-4xl md:text-6xl">Espaço Urbano, Atitude Profissional.</h2>
            </div>
            
            <p className="text-muted text-lg leading-relaxed max-w-xl">
              F35 Barbershop não é apenas uma barbearia. É um destino para quem busca excelência. 
              Nascida da paixão pela estética urbana e o cuidado impecável, criamos um ambiente 
              que une a força do industrial com o conforto do premium.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col gap-3"
                >
                  <f.icon className="w-8 h-8 text-white mb-2" />
                  <h3 className="text-sm font-bold tracking-wider">{f.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
