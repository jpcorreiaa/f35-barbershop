import { IMAGES } from '../constants';

export default function Environment() {
  return (
    <section id="ambiente" className="py-24 md:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 flex flex-col justify-center gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">O Ambiente</span>
              <h2 className="text-4xl md:text-6xl">Visual Industrial & Garagem.</h2>
            </div>
            <p className="text-muted leading-relaxed">
              Inspirado na estética das garagens e no minimalismo industrial. 
              Um espaço escuro, técnico e desenhado para uma experiência imersiva.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-sm hover:-translate-y-2 transition-transform duration-500">
               <img 
                 src={IMAGES.interior1} 
                 alt="Interior detail 1" 
                 className="w-full h-full object-cover min-h-[300px] grayscale"
                 referrerPolicy="no-referrer"
               />
            </div>
            <div className="overflow-hidden rounded-sm translate-y-8 hover:translate-y-6 transition-transform duration-500">
               <img 
                 src={IMAGES.interior2} 
                 alt="Interior detail 2" 
                 className="w-full h-full object-cover min-h-[300px] grayscale"
                 referrerPolicy="no-referrer"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
