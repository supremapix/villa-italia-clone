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
