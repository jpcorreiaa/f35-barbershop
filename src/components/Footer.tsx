import { Instagram, Send } from 'lucide-react';
import { LINKS } from '../constants';

export default function Footer() {
  return (
    <footer className="bg-bg py-20 border-t border-border-custom overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-baseline">
              <span className="font-display text-2xl font-bold italic">F</span>
              <span className="font-display text-3xl font-black">35</span>
            </a>
            <p className="text-xs text-muted leading-relaxed uppercase tracking-wider max-w-xs transition-colors hover:text-white">
              Estilo, precisão e atitude. <br />
              Onde cada detalhe conta uma história de profissionalismo.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Links</h4>
            <ul className="flex flex-col gap-4 text-xs font-semibold uppercase tracking-widest">
              <li><a href="#sobre" className="hover:text-muted transition-colors">Sobre</a></li>
              <li><a href="#galeria" className="hover:text-muted transition-colors">Trabalhos</a></li>
              <li><a href="#ambiente" className="hover:text-muted transition-colors">Espaço</a></li>
              <li><a href="#unidades" className="hover:text-muted transition-colors">Unidades</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Contato</h4>
            <ul className="flex flex-col gap-4 text-xs font-medium text-muted">
              <li>info@f35barber.pt</li>
              <li>+351 912 345 678</li>
              <li className="flex items-center gap-4 pt-2">
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Booking</h4>
            <p className="text-xs text-muted mb-2">Reserve o seu horário agora mesmo de forma rápida.</p>
            <a 
              href={LINKS.booking} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-accent text-bg px-6 py-3 text-center text-xs font-bold uppercase tracking-widest hover:bg-muted transition-colors"
            >
              Agendar Online
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/5 pt-10">
          <p className="text-[9px] uppercase tracking-[0.5em] opacity-30">
            © 2026 F35 Barbershop • Crafted with Attitude.
          </p>
          <div className="flex gap-10">
             <span className="text-[9px] uppercase tracking-[0.5em] opacity-30">Braga</span>
             <span className="text-[9px] uppercase tracking-[0.5em] opacity-30">Lordelo</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
