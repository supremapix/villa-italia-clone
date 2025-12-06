import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Waves, Trees, UtensilsCrossed, Sun } from "lucide-react";

const WhyPenha = () => {
  const navigate = useNavigate();
  
  const curiosities = [
    {
      icon: <Waves className="w-8 h-8" />,
      title: "25 Praias Paradisíacas",
      description: "Penha possui 25 praias, cada uma com sua característica única - de águas calmas para famílias até ondas perfeitas para surf."
    },
    {
      icon: <Trees className="w-8 h-8" />,
      title: "Clima Privilegiado",
      description: "Com clima subtropical úmido, Penha oferece temperaturas agradáveis o ano todo, perfeito para aproveitar o mar em qualquer estação."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: "Gastronomia de Frutos do Mar",
      description: "Pescado fresco todos os dias! A culinária local é famosa por seus frutos do mar fresquíssimos vindos direto dos barcos de pesca."
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: "Proximidade com Atrações",
      description: "A apenas 5 minutos do Beto Carrero World e 24km de Balneário Camboriú, Penha é a base perfeita para explorar a região."
    }
  ];

  const neighborhoods = [
    { name: "Armação", slug: "armacao" },
    { name: "Praia Alegre", slug: "praia-alegre" },
    { name: "Bacia da Vovó", slug: "bacia-da-vovo" },
    { name: "Paciência", slug: "paciencia" },
    { name: "Poá", slug: "poa" },
    { name: "Praia Grande", slug: "praia-grande" },
    { name: "Praia Vermelha", slug: "praia-vermelha" },
    { name: "São Miguel", slug: "sao-miguel" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Por Que Escolher Penha?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra por que Penha é o destino perfeito para suas férias no litoral catarinense
            </p>
          </div>

          {/* Curiosities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {curiosities.map((item, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-hover transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-4 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Neighborhoods Section */}
          <div className="bg-accent/10 rounded-2xl p-10 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Explore as <strong>Praias de Penha</strong>
              </h3>
              <p className="text-lg text-muted-foreground">
                Cada praia tem sua personalidade única e belezas especiais
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {neighborhoods.map((neighborhood, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 text-base hover:bg-primary hover:text-primary-foreground transition-all"
                  onClick={() => navigate(`/bairros-penha/${neighborhood.slug}`)}
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  {neighborhood.name}
                </Button>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="cta"
                onClick={() => navigate("/bairros-penha")}
                className="text-lg px-8"
              >
                Ver Todas as Praias
              </Button>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <Card className="p-6 bg-primary/5">
              <div className="text-4xl font-bold text-primary mb-2">25</div>
              <div className="text-muted-foreground">Praias para Explorar</div>
            </Card>
            <Card className="p-6 bg-secondary/5">
              <div className="text-4xl font-bold text-secondary mb-2">5 min</div>
              <div className="text-muted-foreground">Do Beto Carrero World</div>
            </Card>
            <Card className="p-6 bg-cta/5">
              <div className="text-4xl font-bold text-cta mb-2">14 km</div>
              <div className="text-muted-foreground">Do Aeroporto de Navegantes</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPenha;
