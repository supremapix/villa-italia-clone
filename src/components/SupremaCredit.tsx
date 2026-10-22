import { Heart } from 'lucide-react';

export default function SupremaCredit() {
  return <a className="suprema-credit" href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer">
    <span>Desenvolvido com <Heart className="suprema-heart" size={18} fill="currentColor" role="img" aria-label="amor" /> por <strong>Suprema Sites Express</strong></span>
    <img src="https://img.supremamidia.com/suprema-img.png" alt="Suprema" height={18} loading="lazy" />
  </a>;
}
