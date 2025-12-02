import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      slug: "melhores-praias-penha",
      title: "As Melhores Praias de Penha para Visitar",
      excerpt: "Descubra as praias mais bonitas e tranquilas da região de Penha e arredores.",
      date: "15 de Janeiro, 2026",
      image: "/placeholder.svg",
    },
    {
      slug: "roteiro-3-dias-penha",
      title: "Roteiro de 3 Dias em Penha e Região",
      excerpt: "Planeje sua viagem perfeita com nossas dicas de passeios e atrações imperdíveis.",
      date: "10 de Janeiro, 2026",
      image: "/placeholder.svg",
    },
    {
      slug: "gastronomia-penha",
      title: "Gastronomia em Penha: Sabores do Litoral",
      excerpt: "Conheça os melhores restaurantes e pratos típicos da região.",
      date: "5 de Janeiro, 2026",
      image: "/placeholder.svg",
    },
    {
      slug: "dicas-beto-carrero",
      title: "Dicas Essenciais para Aproveitar o Beto Carrero World",
      excerpt: "Tudo o que você precisa saber para uma visita perfeita ao maior parque da América Latina.",
      date: "28 de Dezembro, 2025",
      image: "/placeholder.svg",
    },
  ];

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
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <div className="mb-3">
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {post.date}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground group-hover:text-secondary transition-smooth">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <ArrowRight className="ml-2 h-4 w-4" />
                Ler Mais
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
