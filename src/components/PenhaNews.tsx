import { Card } from "@/components/ui/card";
import { Calendar, MapPin, Sparkles, Newspaper } from "lucide-react";

const PenhaNews = () => {
  const newsItems = [
    {
      icon: Calendar,
      title: "Carnaval 2025 em Penha",
      description: "Prepare-se para os melhores blocos e festas de carnaval da região! Programação completa com shows e desfiles nas praias.",
      color: "from-purple-500/20 to-pink-500/20",
      iconColor: "text-purple-600"
    },
    {
      icon: Sparkles,
      title: "Temporada de Verão 2025",
      description: "Aproveite as melhores tarifas para o verão! Praias limpas, águas mornas e infraestrutura completa te esperam.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-orange-600"
    },
    {
      icon: MapPin,
      title: "Novos Pontos Turísticos",
      description: "Descubra novos mirantes, trilhas ecológicas e restaurantes inaugurados recentemente em Penha e região.",
      color: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-600"
    },
    {
      icon: Newspaper,
      title: "Eventos em Penha - 2025",
      description: "Festivais de frutos do mar, apresentações culturais, shows ao vivo e muito mais durante todo o ano!",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              🌊 Novidades sobre Penha
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fique por dentro dos melhores eventos, atrações e novidades da região
            </p>
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.map((item, index) => (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br ${item.color} border-2 hover:scale-105 transition-smooth shadow-soft hover:shadow-hover animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full bg-background shadow-soft ${item.iconColor}`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
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
        </div>
      </div>
    </section>
  );
};

export default PenhaNews;