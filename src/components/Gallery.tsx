import { motion } from 'motion/react';
import { IMAGES } from '../constants';

export default function Gallery() {
  const images = [
    { src: IMAGES.fade1, category: 'Fade Master', span: 'col-span-2 row-span-2' },
    { src: IMAGES.beard, category: 'Barba Impecável', span: 'col-span-1 row-span-1' },
    { src: IMAGES.fade2, category: 'Estilo Moderno', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?q=80&w=2070&auto=format&fit=crop', category: 'Detalhes', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1599351431247-f579338421f0?q=80&w=2070&auto=format&fit=crop', category: 'Finalização', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section id="galeria" className="py-24 md:py-32 bg-bg">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">Nosso Trabalho</span>
            <h2 className="text-4xl md:text-7xl">Galeria de Cortes.</h2>
          </div>
          <p className="text-muted text-sm max-w-xs text-left md:text-right">
            Confira alguns dos trabalhos realizados pelos nossos especialistas em cada unidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden ${img.span}`}
            >
              <img 
                src={img.src} 
                alt={img.category} 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-bg/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <span className="text-xs font-bold tracking-[0.3em] uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  {img.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
