import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Sparkles, Newspaper, PartyPopper, Ticket, ArrowRight } from "lucide-react";

const PenhaNews = () => {
  const navigate = useNavigate();

  const newsItems = [
    {
      icon: PartyPopper,
      title: "Festas e Eventos Abr-Jul 2026",
      description: "Festa Junina, Festival de Inverno, eventos gastronômicos e Beto Carrero com filas curtas. Preços até 40% menores!",
      color: "from-orange-500/20 to-red-500/20",
      iconColor: "text-orange-600",
      link: "/blog/festas-eventos-penha-sc-abril-julho-2026"
    },
    {
      icon: Ticket,
      title: "Guia Beto Carrero 2026",
      description: "Roteiro completo, ingressos com desconto, atrações por faixa etária e dicas para aproveitar ao máximo com a família.",
      color: "from-blue-500/20 to-indigo-500/20",
      iconColor: "text-blue-600",
      link: "/blog/beto-carrero-world-guia-completo-familias-2026"
    },
    {
      icon: Sparkles,
      title: "Baixa Temporada — Melhor Custo",
      description: "Abril a julho: clima agradável, praias tranquilas, piscina aquecida e tarifas especiais na Pousada Vila D'Italia.",
      color: "from-yellow-500/20 to-orange-500/20",
      iconColor: "text-yellow-600",
      link: "/blog/festas-eventos-penha-sc-abril-julho-2026"
    },
    {
      icon: Newspaper,
      title: "Calendário de Eventos 2026",
      description: "Semana Santa, Dia das Mães, Arraial de Penha, Festa de São João, Festival do Pinhão e férias de julho!",
      color: "from-green-500/20 to-teal-500/20",
      iconColor: "text-green-600",
      link: "/blog/festas-eventos-penha-sc-abril-julho-2026"
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