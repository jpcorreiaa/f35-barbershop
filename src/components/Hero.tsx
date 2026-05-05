import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import Logo from './Logo';
import { IMAGES, LINKS } from '../constants';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.hero} 
          alt="Industrial Barbershop" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
        <div className="absolute inset-0 bg-bg/40" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-8">
          <Logo />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-4xl md:text-7xl">
              Estilo, precisão <br />
              <span className="text-muted">e atitude.</span>
            </h1>
            <p className="text-muted text-lg max-w-md font-medium leading-relaxed">
              Onde o estilo clássico encontra a atitude urbana. Cada corte é uma afirmação de personalidade.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a 
              href="#sobre" 
              className="group flex items-center gap-3 bg-accent text-bg px-8 py-4 font-bold uppercase tracking-widest hover:bg-muted transition-all"
            >
              Conhecer a barbearia
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href={LINKS.booking} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-accent/30 px-8 py-4 font-bold uppercase tracking-widest hover:bg-accent/10 transition-all backdrop-blur-sm"
            >
              <Calendar className="w-4 h-4" />
              Marcar horário
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative vertical rail text */}
      <div className="absolute right-12 bottom-12 hidden lg:block">
        <div className="writing-vertical-rl transform rotate-180 flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-bold opacity-30">
          <div className="w-px h-12 bg-white" />
          EST. 2024 • BRAGA • LORDELO
        </div>
      </div>
    </section>
  );
}
