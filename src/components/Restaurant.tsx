import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Clock, MapPin, Phone, ChevronLeft, ChevronRight, UtensilsCrossed, Beer } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import ImageLightbox from "./ImageLightbox";

import restaurant1 from "@/assets/restaurant-1.jpg";
import restaurant2 from "@/assets/restaurant-2.jpg";
import restaurant3 from "@/assets/restaurant-3.jpg";
import restaurant4 from "@/assets/restaurant-4.jpg";
import restaurant5 from "@/assets/restaurant-5.jpg";
import restaurant6 from "@/assets/restaurant-6.jpg";
import restaurant7 from "@/assets/restaurant-7.jpg";
import restaurant8 from "@/assets/restaurant-8.jpg";
import restaurant9 from "@/assets/restaurant-9.jpg";
import restaurant10 from "@/assets/restaurant-10.jpg";
import restaurant11 from "@/assets/restaurant-11.jpg";
import restaurant12 from "@/assets/restaurant-12.jpg";
import restaurant13 from "@/assets/restaurant-13.jpg";
import restaurant14 from "@/assets/restaurant-14.jpg";
import restaurant15 from "@/assets/restaurant-15.jpg";
import restaurant16 from "@/assets/restaurant-16.jpg";
import restaurant17 from "@/assets/restaurant-17.jpg";
import restaurant18 from "@/assets/restaurant-18.jpg";
import restaurant19 from "@/assets/restaurant-19.jpg";
import restaurant20 from "@/assets/restaurant-20.jpg";
import restaurant21 from "@/assets/restaurant-21.jpg";
import restaurant22 from "@/assets/restaurant-22.jpg";
import restaurant23 from "@/assets/restaurant-23.jpg";
import restaurant24 from "@/assets/restaurant-24.jpg";
import restaurant25 from "@/assets/restaurant-25.jpg";
import restaurant26 from "@/assets/restaurant-26.jpg";

const restaurantImages = [
  { src: restaurant1, alt: "Area do Quiosque do Kaka" },
  { src: restaurant2, alt: "QR Code do cardapio digital" },
  { src: restaurant3, alt: "Vista geral do restaurante" },
  { src: restaurant4, alt: "Bebida refrescante do Quiosque" },
  { src: restaurant5, alt: "Porcao deliciosa de batatas" },
  { src: restaurant6, alt: "Marisco fresco com limao" },
  { src: restaurant7, alt: "Frango a passarinho com salada" },
  { src: restaurant8, alt: "Camarao alho e oleo" },
  { src: restaurant9, alt: "Prato executivo com arroz e salada" },
  { src: restaurant10, alt: "Area de mesas do Quiosque" },
  { src: restaurant11, alt: "Prato com frango grelhado e macarrao" },
  { src: restaurant12, alt: "Bife grelhado com arroz e macarrao" },
  { src: restaurant13, alt: "Porcoes de frango a passarinho" },
  { src: restaurant14, alt: "Frango crocante com limao" },
  { src: restaurant15, alt: "Prato executivo completo" },
  { src: restaurant16, alt: "Freezer de sorvetes Stringari" },
  { src: restaurant17, alt: "File de frango empanado com salada" },
  { src: restaurant18, alt: "Bife acebolado com macarrao e salada" },
  { src: restaurant19, alt: "Area coberta do Quiosque com mesas" },
  { src: restaurant20, alt: "Bife grelhado com arroz e macarrao" },
  { src: restaurant21, alt: "Geladeira com cervejas geladas" },
  { src: restaurant22, alt: "File empanado com ovo e macarrao" },
  { src: restaurant23, alt: "Ostras frescas com limao no gelo" },
  { src: restaurant24, alt: "Vista geral do Quiosque com churrasqueira" },
  { src: restaurant25, alt: "Decoracao do Quiosque com arte" },
  { src: restaurant26, alt: "Geladeira com refrigerantes e agua" },
];

const Restaurant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % restaurantImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + restaurantImages.length) % restaurantImages.length);
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
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conheçam o Quiosque do Kaká
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nosso restaurante oferece deliciosas refeições para tornar sua estadia ainda mais especial
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none bg-card">
            <div className="flex flex-col md:flex-row">
              {/* Image Slider Section */}
              <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-auto md:min-h-[400px] overflow-hidden bg-secondary/20 flex-shrink-0">
                <div className="relative w-full h-full">
                  {restaurantImages.map((image, index) => (
                    <div 
                      key={index} 
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover cursor-pointer"
                        loading="lazy"
                        onClick={() => openLightbox(index)}
                      />
                    </div>
                  ))}
                </div>

                {/* Tap hint on mobile */}
                <div className="absolute top-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-foreground md:hidden z-20">
                  Toque para ampliar
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={(e) => { e.stopPropagation(); prevSlide(); handleInteraction(); }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all z-20"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); nextSlide(); handleInteraction(); }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all z-20"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                  {restaurantImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentSlide(index); handleInteraction(); }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentSlide
                          ? "bg-cta w-6 sm:w-8 h-2 sm:h-3"
                          : "bg-background/60 hover:bg-background w-2 sm:w-3 h-2 sm:h-3"
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Quiosque do Kaká
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm sm:text-base">
                  Sabores completos: De petiscos classicos a deliciosas porcoes com camarao, tudo fresquinho para voce.
                  O Quiosque do Kaka oferece um ambiente agradavel e pratos deliciosos para voce 
                  e sua familia aproveitarem durante a estadia.
                </p>

                {/* Menu Highlights */}
                <div className="mb-4 p-3 bg-secondary/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <UtensilsCrossed className="w-4 h-4 text-cta" />
                    <span className="text-sm font-semibold text-foreground">Nossos Destaques:</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Mini Pizza, Coxinha, Batata Frita, Frango a Passarinho, Isca de Peixe, Camarao Soltinho e Camarao Alho e Oleo
                  </p>
                </div>

                {/* Drinks */}
                <div className="mb-4 p-3 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Beer className="w-4 h-4 text-cta" />
                    <span className="text-sm font-semibold text-foreground">Bebidas:</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Chopp Brahma, Cervejas (Antarctica, Original, Amstel, Heineken, Budweiser, Skol), Caipirinhas, Sucos e Refrigerantes
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <Clock className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Horário de funcionamento: 11:00 às 21:00 hrs</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <MapPin className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Localizado dentro da pousada</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <Phone className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Reservas: +55 47 99204-5122</span>
                  </div>
                </div>

                <a 
                  href="https://api.whatsapp.com/send?phone=5547992045122&text=Olá! Gostaria de saber mais sobre o Quiosque do Kaká"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-cta hover:bg-cta-dark text-cta-foreground text-base sm:text-lg py-5 sm:py-6"
                  >
                    <Utensils className="w-5 h-5 mr-2" />
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <ImageLightbox
        images={restaurantImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </section>
  );
};

export default Restaurant;
