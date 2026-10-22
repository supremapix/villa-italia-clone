import { ArrowUpRight } from "lucide-react";
import heroImage from "@/assets/gallery-6.jpg";
export default function Hero() {
  return <section id="hero" className="villa-hero">
    <div className="villa-hero-copy">
      <p className="villa-eyebrow">PENHA, SANTA CATARINA · PRAIA DA ARMAÇÃO</p>
      <h1>Um pouco de Itália.<br /><em>Seu lugar em Penha.</em></h1>
      <p className="villa-lead">Dias de mar, descanso e tempo juntos. Na Vila D’Itália, sua família encontra uma casa acolhedora a poucos passos da praia.</p>
      <div className="villa-actions"><a className="villa-button" href="#reservation-form">Planejar minha estadia <ArrowUpRight size={20} /></a><a className="villa-text-link" href="/acomodacoes">Conhecer os quartos ↗</a></div>
      <div className="villa-hero-note"><span>Bem-vindo à nossa vila</span><span>80 m da praia · 5 min do Beto Carrero</span></div>
    </div>
    <figure className="villa-hero-photo"><img src={heroImage} alt="Piscina da Vila D’Itália cercada por varandas de madeira e telhados de barro" loading="eager" /><figcaption>Sol, piscina e a tranquilidade de estar aqui.</figcaption></figure>
  </section>;
}
