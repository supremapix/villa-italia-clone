import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Plane, Coffee, Clock, Waves, Car, Calendar, Star } from "lucide-react";

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
      icon: Coffee,
      title: "Café da Manhã",
      description: "Incluso na diária",
      highlight: "Completo"
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
              Diárias a partir de R$ 149
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-cta-foreground">
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Estacionamento Grátis</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Café da Manhã Incluso</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <span className="text-2xl">✓</span>
                <span className="font-semibold">Área de Lazer Completa</span>
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

        {/* Prominent Booking Card */}
        <div className="mt-8 text-center">
          <Card className="p-6 md:p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border-2 border-primary bg-gradient-to-br from-primary/95 via-tuscany-gold/90 to-primary/95 relative overflow-hidden">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
            
            <div className="flex flex-col items-center text-center space-y-4 relative z-10">
              <div className="p-4 bg-white rounded-full shadow-lg">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 text-primary animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 drop-shadow-lg">
                  Reserve Agora e Garanta Sua Vaga!
                </h3>
                <p className="text-base md:text-lg text-white font-bold mb-4 drop-shadow-md flex items-center justify-center gap-2">
                  <Star className="w-5 h-5 fill-white" />
                  Vagas Limitadas para o Verão!
                  <Star className="w-5 h-5 fill-white" />
                </p>
                <p className="text-sm md:text-base text-white/95 mb-6 drop-shadow font-medium">
                  Aproveite nossas tarifas especiais e garanta os melhores dias de sol, praia e diversão em Penha!
                </p>
                <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg"
                    className="bg-olive-green text-white hover:bg-olive-green/90 font-bold text-base md:text-lg px-6 md:px-10 py-5 md:py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    RESERVE SUA ESTADIA
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

export default KeyInfo;