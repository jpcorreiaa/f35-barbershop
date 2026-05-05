import { MapPin, ArrowRight } from 'lucide-react';
import { LINKS } from '../constants';

export default function Units() {
  const units = [
    {
      name: "Braga",
      address: "Av. da Liberdade, 123",
      zip: "4710-251 Braga",
      maps: LINKS.mapsBraga
    },
    {
      name: "Lordelo",
      address: "Rua Industrial, 456",
      zip: "4815-621 Lordelo",
      maps: LINKS.mapsLordelo
    }
  ];

  return (
    <section id="unidades" className="py-24 md:py-32 bg-surface">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">Localizações</span>
          <h2 className="text-4xl md:text-6xl mt-4">Nossas Unidades.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {units.map((unit) => (
            <div 
              key={unit.name}
              className="bg-bg border border-border-custom p-12 group hover:border-white transition-colors duration-500"
            >
              <MapPin className="w-10 h-10 mb-8 opacity-40 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-2xl mb-4">{unit.name}</h3>
              <div className="text-muted text-sm space-y-1 mb-10">
                <p>{unit.address}</p>
                <p>{unit.zip}</p>
              </div>
              <a 
                href={unit.maps} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[10px] uppercase font-bold tracking-[0.3em] hover:text-white transition-colors"
              >
                Ver no mapa <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
