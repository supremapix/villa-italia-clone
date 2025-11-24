import { Card } from "@/components/ui/card";
import { Waves, Ship, Palmtree, Rocket, Church, Utensils } from "lucide-react";

const suggestions = [
  {
    icon: Waves,
    title: "Praia da Armação",
    description: "Combina beleza natural, atividades ao ar livre e um ambiente perfeito para relaxar.",
  },
  {
    icon: Ship,
    title: "Ilha Feia",
    description: "Um verdadeiro paraíso natural com águas cristalinas e vegetação preservada.",
  },
  {
    icon: Palmtree,
    title: "Praia do Quilombo",
    description: "Conhecida por suas águas claras, areias douradas e ambiente tranquilo.",
  },
  {
    icon: Rocket,
    title: "Beto Carrero World",
    description: "O parque mais divertido do Brasil fica a apenas 8km da pousada. Prepare-se para muita emoção!",
  },
  {
    icon: Church,
    title: "Centro Histórico",
    description: "Conheça as belas igrejas, casarios e o charmoso comércio da parte antiga da cidade.",
  },
  {
    icon: Utensils,
    title: "Gastronomia",
    description: "Experimente os frutos do mar frescos das barracas de praia e os pratos típicos locais.",
  },
];

const Suggestions = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Sugestões Imperdíveis para sua Estadia
          </h2>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Roteiros especiais para aproveitar o melhor de Penha e região
          </p>
        </div>

        {/* Suggestions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-scale-in">
          {suggestions.map((suggestion, index) => {
            const Icon = suggestion.icon;
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-hover transition-smooth cursor-pointer group bg-muted border-none shadow-soft relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary/10 to-transparent rounded-bl-full" />
                <div className="relative">
                  <div className="bg-secondary text-secondary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth shadow-soft">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-2xl mb-3 text-foreground">{suggestion.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">{suggestion.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Suggestions;
