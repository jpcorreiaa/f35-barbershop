import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: "João Silva",
      text: "Melhor barbearia de Braga. Atendimento impecável e o ambiente industrial é sensacional.",
      rating: 5
    },
    {
      name: "Ricardo Mendes",
      text: "Profissionais que realmente entendem de técnica. Vale cada centavo pela experiência e o café é ótimo.",
      rating: 5
    },
    {
      name: "André Costa",
      text: "O visual da barbearia é incrível. Muito estilo e competência em cada corte que já fiz lá.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-bg border-y border-border-custom relative overflow-hidden">
      <div className="industrial-grid absolute inset-0 opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.4em] opacity-40">Opinião dos Clientes</span>
          <h2 className="text-4xl md:text-5xl mt-4">Atitude que conquista.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <div 
              key={i} 
              className="bg-surface-light p-10 flex flex-col gap-6 relative group border border-white/5"
            >
              <Quote className="w-10 h-10 text-white/5 absolute top-6 right-6" />
              <div className="flex gap-1">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-white text-white" />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-muted line-clamp-4">
                "{rev.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[10px] font-bold uppercase tracking-widest">{rev.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
