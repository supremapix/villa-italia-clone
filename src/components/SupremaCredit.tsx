import { Heart, ArrowUpRight } from 'lucide-react';

export default function SupremaCredit() {
  return <div className="suprema-credit-panel" role="group" aria-label="Desenvolvimento do site">
    <p className="suprema-credit-intro">Desenvolvido com <Heart className="suprema-heart" size={20} fill="currentColor" role="img" aria-label="amor" /> por</p>
    <a id="developer-suprema-link" className="suprema-credit" href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" aria-label="Suprema Sites Express: conheça nosso site (abre em nova aba)">
      <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema Mídia" width={220} height={74} loading="lazy" />
      <span className="suprema-credit-copy"><strong>Suprema Sites Express</strong><span className="suprema-credit-cta">Conheça nosso site <ArrowUpRight size={16} aria-hidden="true" /></span></span>
    </a>
  </div>;
}
