import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { LINKS } from '../constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Espaço', href: '#sobre' },
    { name: 'Cortes', href: '#galeria' },
    { name: 'Ambiente', href: '#ambiente' },
    { name: 'Unidades', href: '#unidades' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-border-custom py-4' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-baseline transition-opacity hover:opacity-80">
          <span className="font-display text-2xl font-bold italic">F</span>
          <span className="font-display text-3xl font-black">35</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-xs uppercase tracking-widest font-semibold hover:text-muted transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={LINKS.booking} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-bg px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors"
          >
            Marcar Horário
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface border-b border-border-custom md:hidden py-10 px-6 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg uppercase tracking-widest font-bold"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={LINKS.booking}
              className="bg-accent text-bg py-4 text-center font-bold uppercase tracking-widest"
            >
              Marcar Horário
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
