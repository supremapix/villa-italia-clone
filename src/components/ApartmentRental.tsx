import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, MapPin, Phone, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

import apartment1 from "@/assets/apartment-1.jpg";
import apartment2 from "@/assets/apartment-2.jpg";
import apartment3 from "@/assets/apartment-3.jpg";
import apartment4 from "@/assets/apartment-4.jpg";
import apartment5 from "@/assets/apartment-5.jpg";
import apartment6 from "@/assets/apartment-6.jpg";
import apartment7 from "@/assets/apartment-7.jpg";
import apartment8 from "@/assets/apartment-8.jpg";

const apartmentImages = [
  { src: apartment1, alt: "Cozinha e sala de jantar do apartamento" },
  { src: apartment2, alt: "Quarto principal com cama de casal" },
  { src: apartment3, alt: "Varanda com plantas" },
  { src: apartment4, alt: "Sala de estar com TV" },
  { src: apartment5, alt: "Quarto com armário" },
  { src: apartment6, alt: "Churrasqueira na varanda" },
  { src: apartment7, alt: "Quarto adicional" },
  { src: apartment8, alt: "Quarto com ar condicionado e TV" },
];

const ApartmentRental = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % apartmentImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + apartmentImages.length) % apartmentImages.length);
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

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Apartamento para Locação
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alugue nosso apartamento completo em Penha para suas férias em família
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Slider Section */}
              <div className="relative h-64 sm:h-80 md:h-full md:min-h-[400px] overflow-hidden bg-secondary/20">
                <div 
                  className="flex transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {apartmentImages.map((image, index) => (
                    <div key={index} className="min-w-full h-full flex-shrink-0">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={() => { prevSlide(); handleInteraction(); }}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </button>
                <button
                  onClick={() => { nextSlide(); handleInteraction(); }}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full shadow-lg transition-all"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                  {apartmentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => { setCurrentSlide(index); handleInteraction(); }}
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
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Apartamento Completo em Penha
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm sm:text-base">
                  Apartamento totalmente equipado para você e sua família aproveitarem as melhores férias em Penha. 
                  Com cozinha completa, churrasqueira, ar condicionado em todos os ambientes e muito conforto 
                  para sua estadia.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <Home className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Apartamento completo com cozinha e churrasqueira</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <Users className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Ideal para famílias e grupos</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <MapPin className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Localização privilegiada em Penha</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground text-sm sm:text-base">
                    <Phone className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Locação: +55 47 99273-8090</span>
                  </div>
                </div>

                <a 
                  href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá! Gostaria de saber mais sobre a locação do apartamento em Penha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-cta hover:bg-cta-dark text-cta-foreground text-base sm:text-lg py-5 sm:py-6"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Solicitar Informações
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApartmentRental;
