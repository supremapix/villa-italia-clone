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
import room41 from "@/assets/room-41.jpg";
import room42 from "@/assets/room-42.jpg";
import room43 from "@/assets/room-43.jpg";
import room44 from "@/assets/room-44.jpg";
import room45 from "@/assets/room-45.jpg";
import room46 from "@/assets/room-46.jpg";
import room47 from "@/assets/room-47.jpg";
import room48 from "@/assets/room-48.jpg";
import room49 from "@/assets/room-49.jpg";
import room50 from "@/assets/room-50.jpg";
import room51 from "@/assets/room-51.jpg";
import room52 from "@/assets/room-52.jpg";
import room53 from "@/assets/room-53.jpg";
import room54 from "@/assets/room-54.jpg";
import room55 from "@/assets/room-55.jpg";
import room56 from "@/assets/room-56.jpg";
import room57 from "@/assets/room-57.jpg";
import room58 from "@/assets/room-58.jpg";
import room59 from "@/assets/room-59.jpg";
import room60 from "@/assets/room-60.jpg";
import room61 from "@/assets/room-61.jpg";
import room62 from "@/assets/room-62.jpg";
import room63 from "@/assets/room-63.jpg";
import room64 from "@/assets/room-64.jpg";
import room65 from "@/assets/room-65.jpg";
import room66 from "@/assets/room-66.jpg";
import room67 from "@/assets/room-67.jpg";
import room68 from "@/assets/room-68.jpg";
import room69 from "@/assets/room-69.jpg";
import room70 from "@/assets/room-70.jpg";
import room71 from "@/assets/room-71.jpg";

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
  { src: room41, alt: "Suite duplex com escada", title: "Suite Duplex", description: "Suite com mezanino e escada caracol" },
  { src: room42, alt: "Quarto casal com varanda", title: "Quarto com Varanda", description: "Quarto com acesso a varanda e ar-condicionado" },
  { src: room43, alt: "Banheiro com box de vidro", title: "Banheiro Moderno", description: "Banheiro com box de vidro e azulejos" },
  { src: room44, alt: "Banheiro com secador", title: "Banheiro com Secador", description: "Banheiro decorado com secador de cabelo" },
  { src: room45, alt: "Beliche vermelho", title: "Beliche", description: "Beliche confortavel para criancas" },
  { src: room46, alt: "Quarto familia com beliche", title: "Quarto Familia Quadruplo", description: "Quarto com beliche e cama de casal" },
  { src: room47, alt: "Quarto casal decorado", title: "Quarto Casal Decorado", description: "Quarto com decoracao artistica" },
  { src: room48, alt: "Quarto casal rosa", title: "Quarto Casal Rosa", description: "Quarto com varanda e vista para piscina" },
  { src: room49, alt: "Quarto triplo colorido", title: "Quarto Triplo", description: "Quarto com camas de solteiro e decoracao colorida" },
  { src: room50, alt: "Banheiro completo", title: "Banheiro Privativo", description: "Banheiro com box e pia" },
  { src: room51, alt: "Banheiro decorado", title: "Banheiro Completo", description: "Banheiro com box e espelho" },
  { src: room52, alt: "Varanda com vista piscina", title: "Varanda Panoramica", description: "Varanda com mesa e vista para piscina" },
  { src: room53, alt: "Quarto familia quadruplo", title: "Quarto Familia Quadruplo", description: "Quarto com beliche e cama de casal" },
  { src: room54, alt: "Piscina da pousada", title: "Area de Lazer", description: "Piscina com espreguicadeiras e ducha" },
  { src: room55, alt: "Vista da varanda", title: "Vista da Varanda", description: "Varanda com vista panoramica da piscina" },
  { src: room56, alt: "Banheiro colorido", title: "Banheiro Tematico", description: "Banheiro com espelho decorativo e secador" },
  { src: room57, alt: "Quarto casal azul", title: "Quarto Casal Azul", description: "Quarto com decoracao azul e TV" },
  { src: room58, alt: "Quarto casal com varanda", title: "Quarto com Varanda", description: "Quarto aconchegante com acesso a varanda" },
  { src: room59, alt: "Quarto duplo solteiro", title: "Quarto Duplo", description: "Quarto com duas camas de solteiro" },
  { src: room60, alt: "Frigobar e armario", title: "Comodidades", description: "Armario com frigobar e cobertores" },
  { src: room61, alt: "Quarto triplo rosa", title: "Quarto Triplo", description: "Quarto com camas de solteiro e casal" },
  { src: room62, alt: "Armario com frigobar", title: "Comodidades", description: "Armario com cobertores e frigobar" },
  { src: room63, alt: "Quarto triplo aconchegante", title: "Quarto Triplo", description: "Quarto com camas e decoracao acolhedora" },
  { src: room64, alt: "Quarto com TV", title: "Quarto com TV", description: "Quarto equipado com TV e armario" },
  { src: room65, alt: "Quarto casal azul varanda", title: "Quarto Casal Varanda", description: "Quarto com varanda e frigobar" },
  { src: room66, alt: "Quarto decorado leao", title: "Quarto Decorado", description: "Quarto com quadro colorido e ar-condicionado" },
  { src: room67, alt: "Quarto triplo colorido", title: "Quarto Triplo Colorido", description: "Quarto amplo com decoracao artistica" },
  { src: room68, alt: "Quarto casal vermelho", title: "Quarto Casal Vermelho", description: "Quarto com parede vermelha e banheiro privativo" },
  { src: room69, alt: "Quarto casal verde", title: "Quarto Casal Verde", description: "Quarto elegante com cabeceira e criado mudo" },
  { src: room70, alt: "Banheiro moderno", title: "Banheiro Moderno", description: "Banheiro com box de vidro e armario" },
  { src: room71, alt: "Mezanino chale", title: "Mezanino Chale", description: "Suite com mezanino e varias camas" },
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
