import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Clock, Waves, Car, Calendar, Star } from "lucide-react";

const KeyInfo = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: "Endereço",
      description: "R. Luís Vicente da Silva, 183 - Centro",
      highlight: "Penha - SC, 88385-000"
    },
    {
      icon: Waves,
      title: "Praia",
      description: "A poucos passos da Praia de Armação",
      highlight: "Caminhada rápida"
    },
    {
      icon: Car,
      title: "Beto Carrero",
      description: "5 minutos de carro",
      highlight: "1,5 km"
    },
    {
      icon: Plane,
      title: "Aeroporto",
      description: "Navegantes",
      highlight: "14 km"
    },
    {
      icon: MapPin,
      title: "Balneário Camboriú",
      description: "Fácil acesso",
      highlight: "24 km"
    },
    {
      icon: Clock,
      title: "Horários",
      description: "Check-in: 14:00h",
      highlight: "Check-out: 11:30h"
    }
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-2">
            Informações Importantes
          </h2>
          <p className="text-secondary-foreground/90 text-lg">
            Tudo que você precisa saber sobre sua estadia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
          {infoItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-background border-none shadow-hover hover:shadow-elegant transition-smooth group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-cta/10 p-3 rounded-xl group-hover:bg-cta group-hover:scale-110 transition-smooth">
                    <Icon className="w-6 h-6 text-cta group-hover:text-cta-foreground transition-smooth" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {item.description}
                    </p>
                    <p className="text-base font-semibold text-cta">
                      {item.highlight}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-cta to-cta-dark border-none p-8 shadow-elegant">
            <h3 className="text-3xl font-display font-bold text-cta-foreground mb-6">
              Garanta os melhores valores com a nossa central de reservas
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-cta-foreground">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Estacionamento Grátis</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Piscinas</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Wi-Fi Gratuito</span>
              </div>
            </div>
            <p className="text-cta-foreground/90 text-lg mt-6">
              🏖️ Pousada Vila D'Italia - Seu refúgio em Penha, Santa Catarina
            </p>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default KeyInfo;