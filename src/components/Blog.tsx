import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

import blogReveillon from "@/assets/blog-reveillon-penha-2025.jpg";
import blogFestasPenha from "@/assets/blog-festas-penha.jpg";
import blogMariculturaPenha from "@/assets/blog-maricultura-penha.jpg";
import blogGastronomiaPenha from "@/assets/blog-gastronomia-penha.jpg";
import blogFimDeSemanaPenha from "@/assets/blog-fim-de-semana-penha.jpg";
import blogPenhaCriancas from "@/assets/blog-penha-criancas.jpg";
import blogBetoCarreroGuia from "@/assets/blog-beto-carrero-guia-2026.jpg";
import blogPraiasPenhaSc from "@/assets/blog-praias-penha-sc.jpg";

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      slug: "reveillon-2026-2027-penha-balneario-camboriu",
      title: "Réveillon 2026/2027 em Penha e Balneário Camboriú: Guia da Virada",
      excerpt: "Queima de fogos, festas na praia, pacotes e onde se hospedar para curtir a virada no litoral norte de SC sem pagar caro.",
      date: "1 de Outubro, 2026",
      image: blogReveillon,
      featured: true,
    },
    {
      slug: "natal-2026-penha-balneario-camboriu-blumenau",
      title: "Natal 2026 no Litoral de SC: Luzes em BC, Magia em Blumenau e Praia em Penha",
      excerpt: "Iluminação de Natal em Balneário Camboriú, espetáculos em Blumenau e clima de fim de ano em Penha — roteiro completo.",
      date: "1 de Novembro, 2026",
      image: blogFestasPenha,
      featured: true,
    },
    {
      slug: "festa-nacional-do-marisco-2027-penha-sc",
      title: "Festa Nacional do Marisco 2027 em Penha SC: 27ª Edição",
      excerpt: "O que esperar da maior festa gastronômica do litoral catarinense, datas, atrações e dicas para se hospedar em Penha.",
      date: "15 de Novembro, 2026",
      image: blogMariculturaPenha,
      featured: false,
    },
    {
      slug: "oktoberfest-blumenau-marejada-itajai-2026-base-penha",
      title: "Oktoberfest Blumenau e Marejada Itajaí 2026: Base em Penha",
      excerpt: "Por que se hospedar em Penha para curtir a Oktoberfest e a Marejada — distâncias, custos e roteiro do feriado.",
      date: "15 de Agosto, 2026",
      image: blogGastronomiaPenha,
      featured: false,
    },
    {
      slug: "feriados-prolongados-2026-penha-beto-carrero",
      title: "Feriados Prolongados do 2º Semestre 2026: Penha e Beto Carrero",
      excerpt: "Independência, Nossa Senhora, Finados e Proclamação: aproveite os feriadões com filas curtas no parque e praias tranquilas.",
      date: "5 de Agosto, 2026",
      image: blogFimDeSemanaPenha,
      featured: false,
    },
    {
      slug: "festas-eventos-penha-regiao-agosto-dezembro-2026",
      title: "Festas e Eventos em Penha e Região — Agosto a Dezembro 2026",
      excerpt: "Calendário completo: Oktoberfest, Marejada, Natal, Réveillon e feriadões. Hospedagem estratégica em Penha SC.",
      date: "20 de Julho, 2026",
      image: blogPenhaCriancas,
      featured: false,
    },
    {
      slug: "beto-carrero-world-dicas-guia-2026",
      title: "Beto Carrero World 2026: Guia Completo com Dicas de Ingressos e Atrações",
      excerpt: "Atrações por faixa etária, ingressos com desconto, roteiro de 1 dia hora a hora e onde ficar a 5 min do maior parque da América Latina.",
      date: "15 de Abril, 2026",
      image: blogBetoCarreroGuia,
      featured: false,
    },
    {
      slug: "praias-de-penha-sc-guia-completo",
      title: "Praias de Penha SC: Guia Completo com as 10 Melhores Praias",
      excerpt: "Descubra as 10 melhores praias de Penha SC — Armação, Alegre, Quilombo e mais. Estrutura, acesso e hospedagem pertinho do mar.",
      date: "1 de Abril, 2026",
      image: blogPraiasPenhaSc,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-scale-in">
          {regularPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group bg-background border-none shadow-soft"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.image && (
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-secondary transition-smooth leading-tight line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-3 leading-relaxed text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full gap-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/blog/${post.slug}`);
                  }}
                >
                  <ArrowRight className="h-4 w-4" />
                  Ler Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-10">
          <Button
            size="lg"
            onClick={() => navigate("/blog")}
            className="bg-secondary hover:bg-secondary-dark text-secondary-foreground gap-2"
          >
            Ver Todos os Artigos
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
