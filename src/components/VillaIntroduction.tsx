import { Link } from "react-router-dom";
import veranda from "@/assets/gallery-1.jpg";
import room from "@/assets/room-1.jpg";
export default function VillaIntroduction() {
  return <>
    <div className="villa-facts" aria-label="Sua estadia"><p><strong>80 metros</strong><span>da Praia da Armação</span></p><p><strong>5 minutos</strong><span>de carro do Beto Carrero</span></p><p><strong>Duas piscinas</strong><span>externa e coberta</span></p><p><strong>Seu tempo, aqui</strong><span>Check-in 14h · Check-out 11h30</span></p></div>
    <section id="about" className="villa-story villa-shell">
      <figure><img src={veranda} alt="Varanda de madeira com vista para o jardim e os telhados da pousada" loading="lazy" /><figcaption>Os pequenos encantos da nossa vila.</figcaption></figure>
      <div><p className="villa-eyebrow">01 / A POUSADA</p><h2>Portas abertas.<br /><em>Tempo para ficar.</em></h2><p>Uma varanda para desacelerar, o jardim para respirar e a praia logo ali. Preparamos a Vila D’Itália para receber quem procura tranquilidade e comodidade no litoral de Santa Catarina.</p><p>Entre um passeio em Penha e um dia de diversão no Beto Carrero, encontre espaço para descansar e aproveitar a companhia de quem veio com você.</p><a className="villa-text-link" href="#gallery">Passeie pela pousada ↗</a></div>
    </section>
    <section className="villa-rooms" id="accommodations"><div className="villa-shell villa-room-grid"><div><p className="villa-eyebrow">02 / ACOMODAÇÕES</p><h2>O descanso também<br />faz parte da viagem.</h2><p>Quartos para casais, famílias e suítes, com banheiro privativo, ar-condicionado, TV, frigobar e Wi-Fi. Conheça as fotos e converse com nossa equipe sobre a opção para sua estadia.</p><Link className="villa-button" to="/acomodacoes">Ver todas as acomodações ↗</Link><p className="villa-small">Consulte disponibilidade e condições diretamente com a central de reservas.</p></div><figure><img src={room} alt="Quarto de casal da pousada com porta em arco, cama preparada e frigobar" loading="lazy" /><figcaption>Aconchego nos detalhes, do seu jeito.</figcaption></figure></div></section>
  </>;
}
