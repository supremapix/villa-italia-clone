import { Button } from "./ui/button";
import { Globe, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import penhaBeach1 from "@/assets/penha-beach-1.webp";
import penhaBeach2 from "@/assets/penha-beach-2.webp";
import penhaBeach3 from "@/assets/penha-beach-3.jpg";
import penhaBeach4 from "@/assets/penha-beach-4.webp";
import penhaSunset from "@/assets/penha-sunset.jpg";
import penhaBeach9 from "@/assets/penha-beach-9.png";

const PenhaSection = () => {
  const penha360Url = "https://app.orbitpan.com.br/penha-sc/";
  const routeUrl = "https://goo.gl/maps/DV8EGo5pMzve3byE7";

  const beachImages = [
    { src: penhaBeach1, alt: "Praia da Armação - Penha SC" },
    { src: penhaBeach2, alt: "Vista aérea da Praia da Armação" },
    { src: penhaBeach3, alt: "Praia da Armação próximo ao Beto Carrero" },
    { src: penhaBeach4, alt: "Barco na Praia da Armação" },
    { src: penhaSunset, alt: "Por do sol em Penha SC" },
    { src: penhaBeach9, alt: "Praia tranquila em Penha" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Image Carousel */}
          <div className="mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Penha - Santa Catarina
            </h2>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {beachImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-soft hover:shadow-hover transition-smooth">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover hover:scale-110 transition-smooth"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Penha 360° */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conheça Penha em 360°
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore a cidade de Penha em uma experiência imersiva e descubra todos os encantos da região
            </p>
            <a
              href={penha360Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hover hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Globe className="mr-2 h-5 w-5" />
                Ver Penha em 360°
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-12"></div>

          {/* Route CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Chegar até a Pousada
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              A apenas 1,5 km do Beto Carrero World e 30 metros da praia. Veja a melhor rota!
            </p>
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="cta"
                className="text-lg px-8 py-6 h-auto shadow-hover hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <MapPin className="mr-2 h-6 w-6" />
                Ver Rotas no Google Maps
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              📍 Rua José Braz Canoas, 245 - Armação do Itapocorói, Penha - SC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenhaSection;
