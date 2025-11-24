import { Card } from "@/components/ui/card";
import { MapPin, Waves, Store, Utensils, Ship } from "lucide-react";
import beachImage from "@/assets/beach-armacao.jpg";

const attractions = [
  {
    icon: Waves,
    title: "Praia da Armação",
    description: "A praia mais próxima da pousada, a apenas 30 metros de distância. Águas calmas e rasas, ideal para famílias.",
  },
  {
    icon: Waves,
    title: "Praia Grande",
    description: "Uma praia extensa, com 8 km de extensão, perfeita para caminhadas, corridas e esportes na areia.",
  },
  {
    icon: Ship,
    title: "Ilha Feia",
    description: "Apesar do nome curioso, é um verdadeiro paraíso natural rodeado por águas cristalinas.",
  },
  {
    icon: Store,
    title: "Centro Histórico",
    description: "Diversas lojas, restaurantes e a Igreja Matriz de São João Batista do século XVIII.",
  },
  {
    icon: Utensils,
    title: "Gastronomia Local",
    description: "Capital nacional dos mariscos. Experimente os frutos do mar frescos nas barracas e restaurantes.",
  },
];

const Location = () => {
  return (
    <section id="location" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Penha - Santa Catarina
          </h2>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Não perca a chance de visitar a encantadora cidade de Penha
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src={beachImage}
              alt="Praia de Penha"
              className="rounded-2xl shadow-hover w-full h-[500px] object-cover"
            />
            <Card className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 shadow-hover">
              <div className="flex items-center gap-3">
                <MapPin className="w-10 h-10" />
                <div>
                  <p className="font-bold text-lg">Localização Perfeita</p>
                  <p className="text-sm opacity-90">80m da Praia da Armação</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Description */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Penha está localizada a apenas 5 minutos de carro do Beto Carrero World, o parque temático mais divertido do Brasil. Além disso, as lindas praias da região ficam a poucos passos da pousada.
              </p>

              <p>
                Temos uma localização privilegiada, perto dos pontos turísticos e contando com supermercados, farmácias, restaurantes e tudo o que precisa durante a sua estadia.
              </p>

              <p>
                Penha é um dos destinos litorâneos mais encantadores de Santa Catarina, unindo charme, natureza exuberante e uma economia pujante.
              </p>

              <p>
                Conhecida como a <strong>capital nacional dos mariscos</strong>, a cidade tem na maricultura uma importante base econômica. A pesca e o turismo também movimentam a região, triplicando a população de 30 mil habitantes durante o verão.
              </p>

              <p className="font-semibold text-secondary">
                Penha sintetiza o melhor do litoral catarinense: natureza exuberante, cultura e gastronomia locais, praias tranquilas e economia pujante. É um convite irresistível para quem busca charme, descanso e contato com o mar em Santa Catarina.
              </p>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div>
          <h3 className="text-3xl font-display font-bold text-secondary mb-8 text-center">
            O que fazer em Penha
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
            {attractions.map((attraction, index) => {
              const Icon = attraction.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
                >
                  <div className="bg-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-smooth">
                    <Icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                  </div>
                  <h4 className="font-bold text-xl mb-3 text-foreground">{attraction.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{attraction.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
