import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Pause, Play } from "lucide-react";
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
import penhaBeach17 from "@/assets/penha-beach-17.jpg";
import penhaBeach18 from "@/assets/penha-beach-18.jpg";
import penhaBeach19 from "@/assets/penha-beach-19.jpg";
import penhaBeach20 from "@/assets/penha-beach-20.jpg";
import penhaBeach21 from "@/assets/penha-beach-21.jpg";
import penhaBeach22 from "@/assets/penha-beach-22.jpg";
import penhaBeach23 from "@/assets/penha-beach-23.jpg";
import penhaBeach24 from "@/assets/penha-beach-24.jpg";
import penhaBeach25 from "@/assets/penha-beach-25.jpg";
import penhaBeach26 from "@/assets/penha-beach-26.jpg";
import penhaBeach27 from "@/assets/penha-beach-27.jpg";
import penhaBeach28 from "@/assets/penha-beach-28.jpg";
import penhaBeach29 from "@/assets/penha-beach-29.jpg";
import penhaBeach30 from "@/assets/penha-beach-30.jpg";
import penhaBeach31 from "@/assets/penha-beach-31.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

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
      src: penhaBeach17,
      alt: "Praia de Penha",
      title: "Praia da Armacao",
      description: "Guarda-sois coloridos e mar tranquilo em Penha - Santa Catarina",
      rating: 5
    },
    {
      src: penhaBeach18,
      alt: "Praia de Penha Panoramica",
      title: "Vista Panoramica da Praia",
      description: "Praia da Armacao com montanhas ao fundo",
      rating: 5
    },
    {
      src: penhaBeach19,
      alt: "Praia Movimentada",
      title: "Dia de Praia em Penha",
      description: "Turistas aproveitando as aguas calmas de Penha",
      rating: 5
    },
    {
      src: penhaBeach20,
      alt: "Mar de Penha",
      title: "Aguas Cristalinas",
      description: "Mar calmo e aguas transparentes ideais para banho",
      rating: 5
    },
    {
      src: penhaBeach21,
      alt: "Por do Sol em Penha",
      title: "Por do Sol Espetacular",
      description: "Nascer do sol deslumbrante na praia de Penha",
      rating: 5
    },
    {
      src: penhaBeach22,
      alt: "Entardecer na Praia",
      title: "Entardecer Magico",
      description: "Ceu colorido no fim de tarde em Penha",
      rating: 5
    },
    {
      src: penhaBeach23,
      alt: "Praia Lotada",
      title: "Alta Temporada",
      description: "Praia cheia de visitantes no verao",
      rating: 5
    },
    {
      src: penhaBeach24,
      alt: "Jet Ski",
      title: "Esportes Aquaticos",
      description: "Diversao nas aguas de Penha",
      rating: 5
    },
    {
      src: penhaBeach25,
      alt: "Sombra na Praia",
      title: "Natureza Exuberante",
      description: "Arvores oferecem sombra natural na praia",
      rating: 5
    },
    {
      src: penhaBeach26,
      alt: "Lua Cheia",
      title: "Noite de Lua Cheia",
      description: "Vista noturna espetacular de Penha",
      rating: 5
    },
    {
      src: penhaBeach27,
      alt: "Praia com Montanhas",
      title: "Paisagem de Penha",
      description: "Praia cercada por morros verdes",
      rating: 5
    },
    {
      src: penhaBeach28,
      alt: "Banhistas",
      title: "Diversao na Praia",
      description: "Familias curtindo o mar de Penha",
      rating: 5
    },
    {
      src: penhaBeach29,
      alt: "Guarda-sois Coloridos",
      title: "Cores da Praia",
      description: "Guarda-sois e cadeiras na areia de Penha",
      rating: 5
    },
    {
      src: penhaBeach30,
      alt: "Vista da Praia",
      title: "Praia da Armacao",
      description: "Vista colorida da praia com guarda-sois",
      rating: 5
    },
    {
      src: penhaBeach31,
      alt: "Sombra da Arvore",
      title: "Descanso na Praia",
      description: "Momento de relaxamento sob as arvores",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsLightboxOpen(true);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, galleryItems.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conheça Nossa Pousada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore as comodidades e áreas de lazer da Pousada Vila D'Itália
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none">
            <div 
              className="relative aspect-video md:aspect-[16/10] group cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <img
                src={galleryItems[currentIndex].src}
                alt={galleryItems[currentIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Play/Pause Control */}
              <Button
                variant="outline"
                size="icon"
                onClick={(e) => { e.stopPropagation(); togglePlayPause(); }}
                className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-cta" />
                ) : (
                  <Play className="h-5 w-5 text-cta" />
                )}
              </Button>

              {/* Tap to expand hint on mobile */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-foreground md:hidden">
                Toque para ampliar
              </div>
              
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta h-12 w-12 md:h-14 md:w-14 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-cta" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta h-12 w-12 md:h-14 md:w-14 z-10"
              >
                <ChevronRight className="h-6 w-6 text-cta" />
              </Button>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(galleryItems[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {galleryItems[currentIndex].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-cta w-12 h-3"
                    : "bg-muted hover:bg-muted-foreground/30 w-3 h-3"
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <p className="text-muted-foreground font-medium">
              {currentIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white text-xl px-10 py-7 shadow-glow hover:scale-105 transition-all duration-300"
            >
              Reserve Sua Estadia Agora
            </Button>
          </a>
        </div>
      </div>

      <ImageLightbox
        images={galleryItems}
        initialIndex={currentIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        autoPlayInterval={5000}
      />
    </section>
  );
};

export default Gallery;
