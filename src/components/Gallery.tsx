import { useState } from "react";
import ImageLightbox from "./ImageLightbox";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";
import gallery21 from "@/assets/gallery-21.jpg";
import gallery22 from "@/assets/gallery-22.jpg";
import gallery23 from "@/assets/gallery-23.jpg";
import gallery24 from "@/assets/gallery-24.jpg";
import gallery25 from "@/assets/gallery-25.jpg";
import gallery26 from "@/assets/gallery-26.jpg";
import gallery27 from "@/assets/gallery-27.jpg";
import gallery28 from "@/assets/gallery-28.jpg";
import gallery29 from "@/assets/gallery-29.jpg";
import gallery30 from "@/assets/gallery-30.jpg";
import gallery31 from "@/assets/gallery-31.jpg";


export default function Gallery() {
 const [selected,setSelected] = useState<number | null>(null);
  const galleryItems = [
    {
      src: gallery1,
      alt: "Vista da Varanda",
      title: "Vista da Varanda",
      description: "Varanda com vista panorâmica da pousada",
      rating: 5
    },
    {
      src: gallery2,
      alt: "Piscina Coberta",
      title: "Piscina Coberta",
      description: "Espaço de relaxamento exclusivo para hóspedes",
      rating: 5
    },
    {
      src: gallery3,
      alt: "Piscina Principal",
      title: "Piscina Principal",
      description: "Relaxe em nossa piscina com água cristalina",
      rating: 5
    },
    {
      src: gallery4,
      alt: "Área do Restaurante",
      title: "Área do Restaurante",
      description: "Ambiente acolhedor para refeições em família",
      rating: 5
    },
    {
      src: gallery5,
      alt: "Salão de Jogos",
      title: "Salão de Jogos",
      description: "Mesa de sinuca para momentos de diversão",
      rating: 5
    },
    {
      src: gallery6,
      alt: "Área de Lazer Completa",
      title: "Área de Lazer Completa",
      description: "Piscina com espreguiçadeiras e área coberta",
      rating: 5
    },
    {
      src: gallery7,
      alt: "Jardim Tropical",
      title: "Jardim Tropical",
      description: "Ambiente tranquilo com vegetação exuberante",
      rating: 5
    },
    {
      src: gallery8,
      alt: "Vista Aérea da Piscina",
      title: "Vista Aérea da Piscina",
      description: "Nossa área de lazer completa vista de cima",
      rating: 5
    },
    {
      src: gallery9,
      alt: "Fachada da Pousada",
      title: "Fachada da Pousada",
      description: "Arte e cores que marcam nossa identidade",
      rating: 5
    },
    {
      src: gallery10,
      alt: "Nossa Equipe",
      title: "Nossa Equipe",
      description: "Time dedicado ao seu conforto e bem-estar",
      rating: 5
    },
    {
      src: gallery11,
      alt: "Piscina com Vista",
      title: "Piscina com Vista",
      description: "Vista panoramica da piscina e area de lazer",
      rating: 5
    },
    {
      src: gallery12,
      alt: "Area de Descanso",
      title: "Area de Descanso",
      description: "Espreguicadeiras ao redor da piscina",
      rating: 5
    },
    {
      src: gallery13,
      alt: "Piscina Cristalina",
      title: "Piscina Cristalina",
      description: "Agua cristalina para seu relaxamento",
      rating: 5
    },
    {
      src: gallery14,
      alt: "Fachada Artistica",
      title: "Fachada Artistica",
      description: "Mural colorido na entrada da pousada",
      rating: 5
    },
    {
      src: gallery15,
      alt: "Entrada da Pousada",
      title: "Entrada da Pousada",
      description: "Estacionamento e acesso principal",
      rating: 5
    },
    {
      src: gallery16,
      alt: "Area Coberta",
      title: "Area Coberta",
      description: "Espaco coberto com vista para piscina",
      rating: 5
    },
    {
      src: gallery17,
      alt: "Restaurante",
      title: "Restaurante",
      description: "Area de refeicoes com decoracao rustica",
      rating: 5
    },
    {
      src: gallery18,
      alt: "Espreguicadeiras",
      title: "Espreguicadeiras",
      description: "Conforto ao redor da piscina",
      rating: 5
    },
    {
      src: gallery19,
      alt: "Piscina ao Sol",
      title: "Piscina ao Sol",
      description: "Aproveite o sol em nossa piscina",
      rating: 5
    },
    {
      src: gallery20,
      alt: "Vista da Piscina",
      title: "Vista da Piscina",
      description: "Ampla area de lazer com piscina",
      rating: 5
    },
    {
      src: gallery21,
      alt: "Detalhe da Piscina",
      title: "Detalhe da Piscina",
      description: "Agua cristalina e ambiente relaxante",
      rating: 5
    },
    {
      src: gallery22,
      alt: "Estacionamento",
      title: "Estacionamento",
      description: "Estacionamento amplo e seguro",
      rating: 5
    },
    {
      src: gallery23,
      alt: "Piscina com Escada",
      title: "Piscina com Escada",
      description: "Acesso facil a piscina",
      rating: 5
    },
    {
      src: gallery24,
      alt: "Area de Lazer Completa",
      title: "Area de Lazer Completa",
      description: "Vista panoramica da area de lazer",
      rating: 5
    },
    {
      src: gallery25,
      alt: "Salao de Sinuca",
      title: "Salao de Sinuca",
      description: "Mesa de sinuca para diversao",
      rating: 5
    },
    {
      src: gallery26,
      alt: "Restaurante com Vista",
      title: "Restaurante com Vista",
      description: "Area de refeicoes com vista para piscina",
      rating: 5
    },
    {
      src: gallery27,
      alt: "Espreguicadeiras",
      title: "Espreguicadeiras",
      description: "Conforto ao sol na beira da piscina",
      rating: 5
    },
    {
      src: gallery28,
      alt: "Vista do Restaurante",
      title: "Vista do Restaurante",
      description: "Ambiente agradavel para refeicoes",
      rating: 5
    },
    {
      src: gallery29,
      alt: "Area de Lazer",
      title: "Area de Lazer",
      description: "Piscina com cadeiras e ducha",
      rating: 5
    },
    {
      src: gallery30,
      alt: "Decoracao Italiana",
      title: "Decoracao Italiana",
      description: "Detalhes decorativos com mensagens de carinho",
      rating: 5
    },
    {
      src: gallery31,
      alt: "Piscina Vista Lateral",
      title: "Piscina Vista Lateral",
      description: "Vista lateral da piscina e area coberta",
      rating: 5
    }
  ];


return <section id="gallery" className="villa-gallery"><div className="villa-shell"><div className="villa-gallery-heading"><div><p className="villa-eyebrow">03 / UM PASSEIO PELA VILA</p><h2>Antes de chegar,<br /><em>sinta-se por aqui.</em></h2></div><p>Varandas, jardins e cantinhos para descansar.<br />Fotografias da nossa pousada, para você conhecer de perto.</p></div><div className="villa-photo-grid">{[0,2,6,8].map((index) => <button key={index} onClick={()=>setSelected(index)} aria-label={`Ampliar foto: ${galleryItems[index].title}`}><img src={galleryItems[index].src} alt={galleryItems[index].alt} loading="lazy" /><span>{galleryItems[index].title} <span aria-hidden="true">↗</span></span></button>)}</div><button className="villa-text-link" onClick={()=>setSelected(0)}>Ver todas as {galleryItems.length} fotos ↗</button></div><ImageLightbox images={galleryItems} initialIndex={selected ?? 0} isOpen={selected !== null} onClose={()=>setSelected(null)} autoPlay={false} /></section>;
}
