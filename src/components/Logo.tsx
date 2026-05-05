import { motion } from 'motion/react';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className={`font-display flex flex-col items-start leading-none tracking-tighter ${className}`}
    >
      <div className="flex items-baseline">
        <span className="text-4xl md:text-6xl font-black italic">F</span>
        <span className="text-5xl md:text-8xl font-extrabold -ml-1">35</span>
      </div>
      <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase -mt-1 md:-mt-2 opacity-80">
        Barbershop
      </span>
    </motion.div>
  );
}
