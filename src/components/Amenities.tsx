import { Card } from "@/components/ui/card";
import {
  Waves,
  Wifi,
  Car,
  Tv,
  Snowflake,
  Wind,
  Trees,
  Star,
  Droplets,
  Clock,
  Ruler,
  ShieldAlert,
  Baby,
  Smartphone,
  Sparkles,
} from "lucide-react";
import poolImage from "@/assets/pool-outdoor-new.jpg";

const amenities = [
  { icon: Waves, title: "Duas Piscinas", description: "Externa e coberta" },
  { icon: Car, title: "Estacionamento Grátis", description: "Gratuito para hóspedes" },
  { icon: Wifi, title: "Wi-Fi Grátis", description: "Em toda a propriedade" },
  { icon: Tv, title: "TV Fechada", description: "Mais de mil canais disponíveis" },
  { icon: Snowflake, title: "Ar-Condicionado", description: "Controle individual" },
  { icon: Wind, title: "Frigobar", description: "Em cada suíte" },
  { icon: Trees, title: "Jardim", description: "Espaços relaxantes" },
  { icon: Droplets, title: "Secador", description: "De cabelo disponível" },
];

const poolRules = [
  { icon: Clock, text: "Horario da Piscina: 09:00 - 21:00 hrs" },
  { icon: Ruler, text: "Profundidade: 1,50 Mt (4 ft)" },
  { icon: ShieldAlert, text: "Obrigatorio tomar ducha e retirar oleos/bronzeador antes de entrar na piscina" },
  { icon: Baby, text: "Criancas na piscina deverao estar acompanhadas de um adulto e com equipamento de seguranca. Obrigatorio o uso de fralda em criancas menores de 03 anos" },
  { icon: Smartphone, text: "Pontos para carregar seu celular disponiveis" },
  { icon: Sparkles, text: "Espaco de Relaxamento: Proibido criancas desacompanhadas dos pais. Proibido alimentos e bebidas na area interna" },
];

const Amenities = () => {
  return (
    <section id="leisure" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Você merece aproveitar uma estadia dos sonhos
          </h2>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Venha conhecer a Pousada Vila D'Itália! Aqui você encontra uma estrutura completa para proporcionar dias incríveis de descanso e diversão.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-1 gap-6 mb-16 animate-fade-in-up max-w-2xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-hover h-[400px]">
            <img
              src={poolImage}
              alt="Piscina externa"
              className="w-full h-full object-cover hover:scale-105 transition-smooth"
            />
            <div className="absolute top-4 right-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-white text-2xl font-display font-bold">Piscinas</h3>
              <p className="text-white/90">Relaxe em nossa piscina com horario estendido: das 09:00 as 21:00</p>
            </div>
          </div>
        </div>

        {/* Pool Rules Section */}
        <Card className="mb-16 p-6 md:p-8 bg-cta/10 border-2 border-cta/30 animate-fade-in-up">
          <h3 className="text-2xl font-display font-bold text-cta mb-6 text-center">
            Regras de Uso da Piscina
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {poolRules.map((rule, index) => {
              const Icon = rule.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-background rounded-lg"
                >
                  <div className="bg-cta/20 p-2 rounded-full flex-shrink-0">
                    <Icon className="w-5 h-5 text-cta" />
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{rule.text}</p>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-scale-in">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
              >
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:scale-110 transition-smooth">
                  <Icon className="w-8 h-8 text-secondary group-hover:text-secondary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground">{amenity.title}</h3>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-foreground">
            Pensamos em todos os detalhes para o seu conforto. Existem passeios para os pontos turísticos da região. As suítes contam com TV fechada com mais de mil canais, ar-condicionado, frigobar e secador de cabelo. Queremos que sinta que está em casa!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
