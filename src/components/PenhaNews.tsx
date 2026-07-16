import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles, Newspaper, PartyPopper, Ticket, ArrowRight } from "lucide-react";

const PenhaNews = () => {
  const navigate = useNavigate();

  const newsItems = [
    {
      icon: PartyPopper,
      title: "Eventos Ago–Dez 2026 em Penha e Região",
      description: "Oktoberfest Blumenau, Marejada Itajaí, feriadões e Natal iluminado em BC. Calendário completo com hospedagem estratégica em Penha.",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600",
      link: "/blog/festas-eventos-penha-regiao-agosto-dezembro-2026"
    },
    {
      icon: Ticket,
      title: "Réveillon 2026/2027 no Litoral Norte SC",
      description: "Queima de fogos, festas na praia, pacotes e onde se hospedar para curtir a virada em Penha e Balneário Camboriú.",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600",
      link: "/blog/reveillon-2026-2027-penha-balneario-camboriu"
    },
    {
      icon: Sparkles,
      title: "Natal 2026: Luzes em BC e Magia em Blumenau",
      description: "Iluminação da orla de Balneário Camboriú, espetáculos natalinos em Blumenau e clima de fim de ano em Penha.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-600",
      link: "/blog/natal-2026-penha-balneario-camboriu-blumenau"
    },
    {
      icon: Newspaper,
      title: "Festa Nacional do Marisco 2027",
      description: "27ª edição da maior festa gastronômica do litoral catarinense: datas, atrações e hospedagem em Penha SC.",
      color: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-600",
      link: "/blog/festa-nacional-do-marisco-2027-penha-sc"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌊 Novidades sobre Penha
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro dos melhores eventos, atrações e novidades da região
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br ${item.color} border-2 hover:scale-105 transition-smooth shadow-soft hover:shadow-hover animate-fade-in-up cursor-pointer`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => navigate(item.link)}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-background shadow-soft ${item.iconColor}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Ler mais <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenhaNews;