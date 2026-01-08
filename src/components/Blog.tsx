import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

import blogTemporadaVerao from "@/assets/blog-temporada-verao-penha.jpg";
import blogReveillon from "@/assets/blog-reveillon-penha-2025.jpg";
import blogVeraoJaneiro2026 from "@/assets/blog-verao-janeiro-2026.jpg";
import blogCuidadosPele from "@/assets/blog-cuidados-pele-verao.jpg";
const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      slug: "ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu",
      title: "Férias de Verão Jan/Fev/Mar 2026: Penha e Balneário Camboriú",
      excerpt: "Guia completo com praias num raio de 50km, passeios imperdíveis, roteiros e dicas para aproveitar ao máximo suas férias de verão no litoral catarinense!",
      date: "3 de Janeiro, 2026",
      image: blogVeraoJaneiro2026,
      featured: true,
    },
    {
      slug: "cuidados-pele-verao-dicas-saude-praia-penha",
      title: "Cuidados com a Pele no Verão: Guia de Proteção Solar",
      excerpt: "Dicas essenciais de proteção solar, hidratação e saúde para curtir as praias de Penha com a pele protegida e saudável!",
      date: "2 de Janeiro, 2026",
      image: blogCuidadosPele,
      featured: true,
    },
    {
      slug: "temporada-verao-2025-2026-penha-sc",
      title: "Temporada de Verão 2025/2026 em Penha-SC",
      excerpt: "O guia completo para suas férias perfeitas no litoral catarinense. Praias, gastronomia, Beto Carrero e muito mais!",
      date: "22 de Dezembro, 2025",
      image: blogTemporadaVerao,
      featured: false,
    },
    {
      slug: "reveillon-2026-penha-santa-catarina",
      title: "Réveillon 2026 em Penha-SC",
      excerpt: "Celebre a virada do ano no paraíso do litoral catarinense. Queima de fogos, tradições e dicas para aproveitar!",
      date: "22 de Dezembro, 2025",
      image: blogReveillon,
      featured: false,
    },
    {
      slug: "melhores-praias-penha",
      title: "As Melhores Praias de Penha para Visitar",
      excerpt: "Descubra as praias mais bonitas e tranquilas da região de Penha e arredores.",
      date: "15 de Outubro, 2025",
      image: null,
      featured: false,
    },
    {
      slug: "roteiro-3-dias-penha",
      title: "Roteiro de 3 Dias em Penha e Região",
      excerpt: "Planeje sua viagem perfeita com nossas dicas de passeios e atrações imperdíveis.",
      date: "10 de Setembro, 2025",
      image: null,
      featured: false,
    },
    {
      slug: "gastronomia-penha",
      title: "Gastronomia em Penha: Sabores do Litoral",
      excerpt: "Conheça os melhores restaurantes e pratos típicos da região.",
      date: "5 de Agosto, 2025",
      image: null,
      featured: false,
    },
    {
      slug: "dicas-beto-carrero",
      title: "Dicas Essenciais para Aproveitar o Beto Carrero World",
      excerpt: "Tudo o que você precisa saber para uma visita perfeita ao maior parque da América Latina.",
      date: "20 de Abril, 2025",
      image: null,
      featured: false,
    },
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

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

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-12 animate-scale-in">
          {featuredPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.image && (
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cta text-cta-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      Destaque
                    </span>
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                    {post.date}
                  </span>
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-3 text-foreground group-hover:text-secondary transition-smooth leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.slug}`);
                  }}
                >
                  Ler Artigo Completo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Regular Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-scale-in">
          {regularPosts.map((post, index) => (
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
              <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-secondary transition-smooth leading-tight">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed text-sm line-clamp-3">
                {post.excerpt}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blog/${post.slug}`);
                }}
              >
                <ArrowRight className="mr-2 h-4 w-4" />
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
