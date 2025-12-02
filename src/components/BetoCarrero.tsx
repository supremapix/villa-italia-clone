import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Rocket, Ticket, MapPin, ExternalLink } from "lucide-react";

const BetoCarrero = () => {
  return (
    <section id="accommodations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-cta/10 text-cta px-4 py-2 rounded-full">
              <Rocket className="w-5 h-5" />
              <span className="font-semibold">A 5 minutos da Pousada!</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary">
              Beto Carrero World
            </h2>
            <div className="w-20 h-1 bg-cta rounded-full" />

            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Você não pode perder a chance de visitar o <strong>maior parque temático da América Latina</strong>: o Beto Carrero World!
              </p>

              <p>
                Localizado em uma região linda do litoral brasileiro, o Beto Carrero World tem tudo para proporcionar dias incríveis de alegria e diversão para você e toda a sua família.
              </p>

              <p>
                São mais de <strong>14 milhões de m²</strong> repletos de atrações sensacionais, como montanhas-russas radicais, torre de queda livre e shows incríveis para todas as idades.
              </p>

              <p>
                Além das atrações de tirar o fôlego, o parque conta com restaurantes, lojas exclusivas, estacionamento e uma estrutura completa planejada para o seu conforto e comodidade.
              </p>

              <p className="font-semibold text-secondary">
                Não perca a chance de viver momentos únicos de adrenalina e felicidade no Beto Carrero World. Venha você também curtir esse mundo mágico de diversões com quem mais ama!
              </p>
            </div>

            <Button
              variant="cta"
              size="lg"
              className="mt-4"
              onClick={() => window.open("https://www.betocarrero.com.br", "_blank")}
            >
              <ExternalLink className="w-5 h-5" />
              Visite o site oficial
            </Button>
          </div>

          {/* Features Cards */}
          <div className="space-y-6 animate-fade-in-up">
            <Card className="p-8 bg-secondary border-none shadow-soft hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-white text-secondary p-4 rounded-full">
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-secondary-foreground">Apenas 5 Minutos</h3>
                  <p className="text-secondary-foreground text-lg">
                    A pousada fica a apenas 1,5 km do parque. Você pode ir e voltar rapidamente para descansar!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-secondary border-none shadow-soft hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-white text-secondary p-4 rounded-full">
                  <Ticket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-secondary-foreground">Mais de 100 Atrações</h3>
                  <p className="text-secondary-foreground text-lg">
                    Montanhas-russas, shows ao vivo, zoológico, restaurantes e muito mais para toda a família!
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-accent border-none shadow-soft hover:shadow-hover transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-white text-accent p-4 rounded-full">
                  <Rocket className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2 text-accent-foreground">Diversão Garantida</h3>
                  <p className="text-accent-foreground text-lg">
                    O maior parque da América Latina com atrações para todas as idades e gostos!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetoCarrero;
