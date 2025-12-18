import { Button } from "./ui/button";
import { Globe, MapPin } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import penhaBeach10 from "@/assets/penha-beach-10.jpg";
import penhaBeach12 from "@/assets/penha-beach-12.jpg";
import penhaBeach14 from "@/assets/penha-beach-14.jpg";
import penhaBeach17 from "@/assets/penha-beach-17.jpg";
import penhaBeach19 from "@/assets/penha-beach-19.jpg";
import penhaBeach23 from "@/assets/penha-beach-23.jpg";
import penhaBeach24 from "@/assets/penha-beach-24.jpg";
import penhaBeach28 from "@/assets/penha-beach-28.jpg";
import penhaBeach29 from "@/assets/penha-beach-29.jpg";
import penhaBeach30 from "@/assets/penha-beach-30.jpg";

const PenhaSection = () => {
  const penha360Url = "https://app.orbitpan.com.br/penha-sc/";
  const routeUrl = "https://goo.gl/maps/DV8EGo5pMzve3byE7";

  const beachImages = [
    { src: penhaBeach10, alt: "Praia de Armação movimentada" },
    { src: penhaBeach12, alt: "Movimento na Praia de Armação em dia de sol" },
    { src: penhaBeach14, alt: "Guarda-sóis coloridos na Praia de Armação" },
    { src: penhaBeach17, alt: "Guarda-sóis coloridos e mar tranquilo" },
    { src: penhaBeach19, alt: "Turistas aproveitando as águas calmas" },
    { src: penhaBeach23, alt: "Alta temporada na Praia de Armação" },
    { src: penhaBeach24, alt: "Esportes aquáticos em Penha" },
    { src: penhaBeach28, alt: "Famílias curtindo o mar de Penha" },
    { src: penhaBeach29, alt: "Guarda-sóis e cadeiras na areia" },
    { src: penhaBeach30, alt: "Vista colorida da praia" },
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

          {/* Traveler Info */}
          <div className="bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-2xl p-10 mb-12 animate-fade-in shadow-hover border-2 border-primary/30">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
              📋 Informações para Viajantes
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-foreground">
              <div>
                <h4 className="font-bold text-xl mb-4 text-primary">🏖️ Praias Principais</h4>
                <ul className="space-y-3 text-foreground text-base">
                  <li>• Praia da Armação - A poucos passos da Praia de Armação!</li>
                  <li>• Praia Grande</li>
                  <li>• Praia do Trapiche</li>
                  <li>• Praia Alegre</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-primary">🎢 Atrações</h4>
                <ul className="space-y-3 text-foreground text-base">
                  <li>• Beto Carrero World (5 min de carro)</li>
                  <li>• Unipraias Balneário Camboriú (24 km)</li>
                  <li>• Cristo Luz (30 km)</li>
                  <li>• Parque Natural Municipal da Costeira</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-primary">🍽️ Gastronomia</h4>
                <ul className="space-y-3 text-foreground text-base">
                  <li>• Restaurantes de frutos do mar</li>
                  <li>• Opções de comida italiana</li>
                  <li>• Lanchonetes na orla</li>
                  <li>• Sorveterias e cafés</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-primary">🚗 Acesso</h4>
                <ul className="space-y-3 text-foreground text-base">
                  <li>• Aeroporto Navegantes: 14 km</li>
                  <li>• BR-101 próxima</li>
                  <li>• Estacionamento gratuito</li>
                  <li>• Fácil acesso às praias</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Route CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Chegar até a Pousada
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              A apenas 1,5 km do Beto Carrero World. Veja a melhor rota!
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
              📍 R. Luís Vicente da Silva, 183 - Centro, Penha - SC, 88385-000, Brasil
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenhaSection;
