import { useState, useEffect, useCallback } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

import room31 from "@/assets/room-31.jpg";
import room32 from "@/assets/room-32.jpg";
import room33 from "@/assets/room-33.jpg";
import room34 from "@/assets/room-34.jpg";
import room35 from "@/assets/room-35.jpg";
import room36 from "@/assets/room-36.jpg";
import room37 from "@/assets/room-37.jpg";
import room38 from "@/assets/room-38.jpg";
import room39 from "@/assets/room-39.jpg";
import room40 from "@/assets/room-40.jpg";

const roomImages = [
  { src: room31, alt: "Quarto casal com varanda", title: "Quarto Casal", description: "Quarto confortável com cama de casal e varanda" },
  { src: room32, alt: "Quarto família", title: "Quarto Família", description: "Espaço amplo para toda a família" },
  { src: room33, alt: "Varanda com vista para piscina", title: "Varanda", description: "Vista panorâmica da área de lazer" },
  { src: room34, alt: "Vista aérea da piscina", title: "Vista da Varanda", description: "Área de lazer completa vista do quarto" },
  { src: room35, alt: "Banheiro completo", title: "Banheiro", description: "Banheiro privativo com secador" },
  { src: room36, alt: "Quarto família triplo", title: "Quarto Família Triplo", description: "Quarto com cama de casal e solteiro" },
  { src: room37, alt: "Quarto decorado", title: "Quarto Decorado", description: "Decoração aconchegante e moderna" },
  { src: room38, alt: "Quarto com TV", title: "Quarto com TV", description: "Todos os quartos com TV e ar-condicionado" },
  { src: room39, alt: "Quarto família amplo", title: "Quarto Família Amplo", description: "Espaço para até 4 pessoas" },
  { src: room40, alt: "Banheiro com box", title: "Banheiro Privativo", description: "Banheiro completo em todos os quartos" },
];

const RoomGallerySlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % roomImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + roomImages.length) % roomImages.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Galeria dos Quartos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça nossos quartos confortáveis e bem equipados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none bg-card">
            <div className="relative aspect-video md:aspect-[16/10] overflow-hidden group">
              <div 
                className="flex transition-transform duration-500 ease-in-out h-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {roomImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="min-w-full h-full flex-shrink-0 cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Play/Pause */}
              <Button
                variant="outline"
                size="icon"
                onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(!isAutoPlaying); }}
                className="absolute top-4 left-4 bg-background/80 hover:bg-background border-2 border-cta opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                {isAutoPlaying ? <Pause className="h-5 w-5 text-cta" /> : <Play className="h-5 w-5 text-cta" />}
              </Button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); handleInteraction(); }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); handleInteraction(); }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all z-10"
                aria-label="Próxima imagem"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-bold text-white mb-1">
                  {roomImages[currentSlide].title}
                </h3>
                <p className="text-white/90 text-sm sm:text-base">
                  {roomImages[currentSlide].description}
                </p>
              </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {roomImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); handleInteraction(); }}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide
                        ? "bg-cta w-6 sm:w-8 h-2 sm:h-3"
                        : "bg-white/60 hover:bg-white w-2 sm:w-3 h-2 sm:h-3"
                    }`}
                    aria-label={`Ir para imagem ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </Card>

          {/* Counter */}
          <div className="text-center mt-4">
            <p className="text-muted-foreground font-medium">
              {currentSlide + 1} / {roomImages.length}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white text-lg px-8 py-6"
            >
              Reserve Seu Quarto
            </Button>
          </a>
        </div>
      </div>

      <ImageLightbox
        images={roomImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default RoomGallerySlider;
