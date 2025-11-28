import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Waves, Utensils, Compass, Calendar, Ship, Mountain } from "lucide-react";

const Suggestions = () => {
  const summerActivities = [
    {
      icon: Waves,
      title: "Praias Paradisíacas",
      description: "Descubra as praias menos movimentadas de Penha: Praia Grande, Praia da Armação e Praia Vermelha com águas cristalinas.",
      color: "text-mediterranean-blue"
    },
    {
      icon: Utensils,
      title: "Gastronomia Local",
      description: "Penha é a capital nacional dos mariscos! Experimente os melhores frutos do mar em restaurantes à beira-mar.",
      color: "text-cta"
    },
    {
      icon: Ship,
      title: "Passeios de Barco",
      description: "Explore a costa de Penha com passeios de escuna, mergulho e pesca esportiva. Aventuras inesquecíveis no mar!",
      color: "text-navy-blue"
    },
    {
      icon: Mountain,
      title: "Trilhas Ecológicas",
      description: "Conheça as trilhas da região com vistas panorâmicas do litoral. Contato com a natureza e ar puro garantidos!",
      color: "text-olive-green"
    },
    {
      icon: Compass,
      title: "Beto Carrero World",
      description: "A apenas 5 minutos da pousada! O maior parque temático da América Latina espera por você.",
      color: "text-primary"
    },
    {
      icon: Calendar,
      title: "Eventos de Verão",
      description: "Festas típicas, feiras de artesanato e shows ao ar livre animam as noites de verão em Penha.",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Roteiro de Verão Vila D'Italia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto italic mb-2">
            Penha no Verão: Sol, Mar e Aventura
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra as melhores experiências e atrações para aproveitar sua estadia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {summerActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-primary/30"
              >
                <div className={`p-3 bg-background rounded-full w-fit mb-4 ${activity.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {activity.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Dicas Importantes */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 to-cta/10 border-2 border-primary/30">
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
            📋 Avisos Importantes para sua Viagem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                🚗 Dica de Trânsito
              </h4>
              <p className="text-muted-foreground">
                No verão, o acesso às praias é mais intenso. Planeje-se e evite horários de pico (10h-12h e 15h-17h).
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                🍽️ Horários Estendidos
              </h4>
              <p className="text-muted-foreground">
                Restaurantes e atrações com horários especiais de verão. Aproveite as noites vibrantes de Penha!
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                🌊 Segurança nas Praias
              </h4>
              <p className="text-muted-foreground">
                Observe sempre as bandeiras de sinalização e respeite as orientações dos salva-vidas.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-foreground flex items-center gap-2">
                🎟️ Ingressos Antecipados
              </h4>
              <p className="text-muted-foreground">
                Para o Beto Carrero World, compre ingressos online com antecedência e evite filas!
              </p>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de mais informações ou dicas personalizadas?
          </p>
          <a href="https://api.whatsapp.com/send?phone=5547992045122&text=Ol%C3%A1!%20Gostaria%20de%20dicas%20sobre%20passeios%20em%20Penha" target="_blank" rel="noopener noreferrer">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-6"
            >
              Fale Conosco no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
