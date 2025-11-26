import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TrendingUp, Sparkles } from "lucide-react";

const blogPosts = [
  {
    icon: Calendar,
    title: "Eventos em Penha 2025",
    description: "Confira a agenda completa de eventos, festas e celebrações que acontecem em Penha durante o ano todo.",
    category: "Eventos",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: MapPin,
    title: "Melhores Passeios na Região",
    description: "Descubra os pontos turísticos imperdíveis, trilhas ecológicas e passeios de barco em Penha e arredores.",
    category: "Dicas de Passeios",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: TrendingUp,
    title: "Novidades da Pousada",
    description: "Fique por dentro das melhorias, promoções especiais e novos serviços oferecidos pela Villa D'Italia.",
    category: "Notícias",
    color: "bg-cta/10 text-cta",
  },
  {
    icon: Sparkles,
    title: "Atrações Imperdíveis",
    description: "Do Beto Carrero World às praias paradisíacas, conheça tudo que torna Penha um destino único no litoral catarinense.",
    category: "Atrações",
    color: "bg-accent/10 text-accent",
  },
];

const Blog = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Blog & Notícias
          </h2>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Descubra eventos, dicas de passeios, novidades da pousada e as melhores atrações da região
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
          {blogPosts.map((post, index) => {
            const IconComponent = post.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
              >
                <div className={`${post.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="mb-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-smooth">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.description}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:bg-secondary group-hover:text-secondary-foreground group-hover:border-secondary transition-smooth"
                >
                  Saiba Mais
                </Button>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Quer receber nossas novidades, dicas exclusivas e promoções especiais?
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="text-lg px-8"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Inscreva-se na Newsletter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
