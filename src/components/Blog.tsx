import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

import blogPraiasPenhaSc from "@/assets/blog-praias-penha-sc.jpg";
import blogBetoCarreroGuia from "@/assets/blog-beto-carrero-guia-2026.jpg";
import blogOQueFazerPenha from "@/assets/blog-o-que-fazer-penha.jpg";
import blogPenhaCriancas from "@/assets/blog-penha-criancas.jpg";
import blogGastronomiaPenha from "@/assets/blog-gastronomia-penha.jpg";
import blogIlhaFeiaPenha from "@/assets/blog-ilha-feia-penha.jpg";
import blogFimDeSemanaPenha from "@/assets/blog-fim-de-semana-penha.jpg";
import blogMariculturaPenha from "@/assets/blog-maricultura-penha.jpg";

const Blog = () => {
  const navigate = useNavigate();
  
  const blogPosts = [
    {
      slug: "praias-de-penha-sc-guia-completo",
      title: "Praias de Penha SC: Guia Completo com as 10 Melhores Praias",
      excerpt: "Descubra as 10 melhores praias de Penha SC — Armação, Alegre, Quilombo e mais. Dicas de estrutura, acesso e hospedagem pertinho do mar.",
      date: "1 de Abril, 2026",
      image: blogPraiasPenhaSc,
      featured: true,
    },
    {
      slug: "beto-carrero-world-dicas-guia-2026",
      title: "Beto Carrero World 2026: Guia Completo com Dicas de Ingressos e Atrações",
      excerpt: "Atrações por faixa etária, ingressos com desconto, roteiro de 1 dia hora a hora e onde ficar a 5 min do maior parque da América Latina.",
      date: "15 de Abril, 2026",
      image: blogBetoCarreroGuia,
      featured: true,
    },
    {
      slug: "o-que-fazer-em-penha-sc",
      title: "O Que Fazer em Penha SC: 15 Atrações Imperdíveis",
      excerpt: "Penha vai além do Beto Carrero! Ilha Feia, maricultura, trilhas, gastronomia e 15 atrações para qualquer viajante.",
      date: "1 de Maio, 2026",
      image: blogOQueFazerPenha,
      featured: false,
    },
    {
      slug: "penha-sc-com-criancas-roteiro-familia",
      title: "Penha SC com Crianças: Roteiro de 3 Dias para Famílias",
      excerpt: "Roteiro família-friendly: Beto Carrero, praias tranquilas, mirantes e pousada com piscina para crianças.",
      date: "15 de Maio, 2026",
      image: blogPenhaCriancas,
      featured: false,
    },
    {
      slug: "gastronomia-penha-sc-frutos-do-mar",
      title: "Gastronomia em Penha SC: Frutos do Mar e Restaurantes",
      excerpt: "Guia gastronômico com foco em frutos do mar frescos. Penha é a maior produtora de mariscos do Brasil!",
      date: "1 de Junho, 2026",
      image: blogGastronomiaPenha,
      featured: false,
    },
    {
      slug: "ilha-feia-penha-sc-passeio-barco",
      title: "Ilha Feia em Penha SC: Passeio de Barco Imperdível",
      excerpt: "Como embarcar, quanto custa, o que ver e as melhores dicas para a Ilha Feia.",
      date: "15 de Junho, 2026",
      image: blogIlhaFeiaPenha,
      featured: false,
    },
    {
      slug: "penha-sc-fim-de-semana-roteiro-rapido",
      title: "Penha SC no Fim de Semana: Roteiro de 2 Dias",
      excerpt: "Roteiro otimizado de 2 dias: praia, Beto Carrero, gastronomia e mirante.",
      date: "1 de Julho, 2026",
      image: blogFimDeSemanaPenha,
      featured: false,
    },
    {
      slug: "maricultura-penha-sc-turismo",
      title: "Maricultura em Penha SC: Capital dos Mariscos",
      excerpt: "A maricultura molda a cultura, gastronomia e turismo de Penha, a maior produtora de mariscos do Brasil.",
      date: "15 de Julho, 2026",
      image: blogMariculturaPenha,
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
