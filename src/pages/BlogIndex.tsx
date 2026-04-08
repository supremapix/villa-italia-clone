import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";

import blogTemporadaVerao from "@/assets/blog-temporada-verao-penha.jpg";
import blogReveillon from "@/assets/blog-reveillon-penha-2025.jpg";
import blogVeraoJaneiro2026 from "@/assets/blog-verao-janeiro-2026.jpg";
import blogCuidadosPele from "@/assets/blog-cuidados-pele-verao.jpg";
import blogFestasPenha from "@/assets/blog-festas-penha.jpg";
import blogBetoCarreroOutono from "@/assets/blog-beto-carrero-outono.jpg";
import penhaBeach1 from "@/assets/penha-beach-1.webp";
import penhaBeach3 from "@/assets/penha-beach-3.jpg";

// New 14 articles images
import blogPraiasPenhaSc from "@/assets/blog-praias-penha-sc.jpg";
import blogBetoCarreroGuia from "@/assets/blog-beto-carrero-guia-2026.jpg";
import blogOQueFazerPenha from "@/assets/blog-o-que-fazer-penha.jpg";
import blogPenhaCriancas from "@/assets/blog-penha-criancas.jpg";
import blogGastronomiaPenha from "@/assets/blog-gastronomia-penha.jpg";
import blogIlhaFeiaPenha from "@/assets/blog-ilha-feia-penha.jpg";
import blogFimDeSemanaPenha from "@/assets/blog-fim-de-semana-penha.jpg";
import blogMariculturaPenha from "@/assets/blog-maricultura-penha.jpg";
import blogPraiasTranquilasSc from "@/assets/blog-praias-tranquilas-sc.jpg";
import blogTemporadaVerao2027 from "@/assets/blog-temporada-verao-2027.jpg";
import blogComoChegar from "@/assets/blog-como-chegar-penha.jpg";
import blogPousadaPertoBeto from "@/assets/blog-pousada-perto-beto-carrero.jpg";
import blogBaixaTemporada from "@/assets/blog-baixa-temporada-penha.jpg";
import blogMirantePraiaVermelha from "@/assets/blog-mirante-praia-vermelha.jpg";

const blogPosts = [
  // === NEW 14 ARTICLES (April–November 2026) — newest first ===
  {
    slug: "mirante-praia-vermelha-penha-vista",
    title: "Mirante da Praia Vermelha em Penha SC: A Vista Mais Bonita do Litoral Norte",
    excerpt: "Conheça o Mirante da Praia Vermelha em Penha SC — como chegar, melhor horário para a foto perfeita e o point mais instagramável do litoral norte.",
    date: "1 de Novembro, 2026",
    image: blogMirantePraiaVermelha,
    category: "Passeios",
    featured: false,
  },
  {
    slug: "penha-sc-baixa-temporada-vantagens",
    title: "Penha SC na Baixa Temporada: Por Que Visitar Fora do Verão Vale Muito",
    excerpt: "Preços até 40% menores, praias tranquilas, Beto Carrero sem filas e atendimento personalizado. A baixa temporada em Penha é a temporada secreta!",
    date: "1 de Outubro, 2026",
    image: blogBaixaTemporada,
    category: "Viagem",
    featured: false,
  },
  {
    slug: "pousada-perto-beto-carrero-como-escolher",
    title: "Pousada Perto do Beto Carrero World: Como Escolher a Melhor",
    excerpt: "Critérios para escolher a hospedagem ideal perto do parque: distância, café da manhã, piscina, quartos para família e custo-benefício.",
    date: "15 de Setembro, 2026",
    image: blogPousadaPertoBeto,
    category: "Hospedagem",
    featured: false,
  },
  {
    slug: "como-chegar-penha-sc-dicas-transporte",
    title: "Como Chegar em Penha SC: Carro, Avião, Ônibus e Todas as Opções",
    excerpt: "De Curitiba (~2h15), Florianópolis (~1h30) ou São Paulo (~7h). Aeroporto de Navegantes a 14km. Todas as rotas detalhadas.",
    date: "1 de Setembro, 2026",
    image: blogComoChegar,
    category: "Viagem",
    featured: false,
  },
  {
    slug: "temporada-verao-penha-sc-2027",
    title: "Temporada de Verão em Penha SC: Planeje sua Viagem com Antecedência",
    excerpt: "Alta temporada: a população sobe de 30 mil para 100 mil! Saiba como reservar com antecedência e aproveitar ao máximo.",
    date: "15 de Agosto, 2026",
    image: blogTemporadaVerao2027,
    category: "Viagem",
    featured: false,
  },
  {
    slug: "praias-tranquilas-litoral-norte-sc",
    title: "Praias Tranquilas no Litoral Norte de SC: Guia para Fugir da Agitação",
    excerpt: "As praias mais calmas de Penha, Piçarras e Balneário Barra do Sul. Ideal para famílias e quem busca sossego no litoral catarinense.",
    date: "1 de Agosto, 2026",
    image: blogPraiasTranquilasSc,
    category: "Praias",
    featured: false,
  },
  {
    slug: "maricultura-penha-sc-turismo",
    title: "Maricultura em Penha SC: Conheça a Capital Brasileira dos Mariscos",
    excerpt: "Penha é a maior produtora de mariscos do Brasil. Saiba como a maricultura molda a cultura, a gastronomia e o turismo local.",
    date: "15 de Julho, 2026",
    image: blogMariculturaPenha,
    category: "Cultura",
    featured: false,
  },
  {
    slug: "penha-sc-fim-de-semana-roteiro-rapido",
    title: "Penha SC no Fim de Semana: Roteiro de 2 Dias para Aproveitar Tudo",
    excerpt: "Roteiro otimizado de 2 dias: praia, Beto Carrero, gastronomia e mirante. Tudo sem perder nada!",
    date: "1 de Julho, 2026",
    image: blogFimDeSemanaPenha,
    category: "Guias",
    featured: false,
  },
  {
    slug: "ilha-feia-penha-sc-passeio-barco",
    title: "Ilha Feia em Penha SC: Como Fazer o Passeio de Barco e o Que Esperar",
    excerpt: "Tudo sobre o passeio de barco para a Ilha Feia: como embarcar, quanto custa, o que ver e dicas para aproveitar ao máximo.",
    date: "15 de Junho, 2026",
    image: blogIlhaFeiaPenha,
    category: "Passeios",
    featured: false,
  },
  {
    slug: "gastronomia-penha-sc-frutos-do-mar",
    title: "Gastronomia em Penha SC: Onde Comer Frutos do Mar e os Melhores Restaurantes",
    excerpt: "Guia gastronômico com foco em frutos do mar frescos. Penha é a maior produtora de mariscos do Brasil!",
    date: "1 de Junho, 2026",
    image: blogGastronomiaPenha,
    category: "Gastronomia",
    featured: false,
  },
  {
    slug: "penha-sc-com-criancas-roteiro-familia",
    title: "Penha SC com Crianças: Roteiro Completo de 3 Dias para Famílias",
    excerpt: "Roteiro família-friendly de 3 dias: Beto Carrero, praias tranquilas, mirantes e pousada com piscina para crianças.",
    date: "15 de Maio, 2026",
    image: blogPenhaCriancas,
    category: "Guias",
    featured: false,
  },
  {
    slug: "o-que-fazer-em-penha-sc",
    title: "O Que Fazer em Penha SC: 15 Atrações Imperdíveis Além do Beto Carrero",
    excerpt: "Penha vai além do parque! Ilha Feia, maricultura, trilhas, gastronomia e 15 atrações imperdíveis para qualquer viajante.",
    date: "1 de Maio, 2026",
    image: blogOQueFazerPenha,
    category: "Guias",
    featured: false,
  },
  {
    slug: "beto-carrero-world-dicas-guia-2026",
    title: "Beto Carrero World 2026: Guia Completo com Dicas de Ingressos e Atrações",
    excerpt: "Atrações por faixa etária, ingressos com desconto, roteiro de 1 dia hora a hora e onde ficar a 5 min do maior parque da América Latina.",
    date: "15 de Abril, 2026",
    image: blogBetoCarreroGuia,
    category: "Atrações",
    featured: true,
  },
  {
    slug: "praias-de-penha-sc-guia-completo",
    title: "Praias de Penha SC: Guia Completo com as 10 Melhores Praias da Cidade",
    excerpt: "Descubra as 10 melhores praias de Penha SC — Armação, Alegre, Quilombo e mais. Dicas de estrutura, acesso e hospedagem pertinho do mar.",
    date: "1 de Abril, 2026",
    image: blogPraiasPenhaSc,
    category: "Praias",
    featured: true,
  },
  // === EXISTING ARTICLES ===
  {
    slug: "festas-eventos-penha-sc-abril-julho-2026",
    title: "Festas e Eventos em Penha SC de Abril a Julho 2026: Calendário Completo",
    excerpt: "Descubra as festas juninas, eventos gastronômicos e atrações de baixa temporada em Penha SC. Preços até 40% menores e Beto Carrero sem filas!",
    date: "13 de Março, 2026",
    image: blogFestasPenha,
    category: "Eventos",
    featured: false,
  },
  {
    slug: "beto-carrero-world-guia-completo-familias-2026",
    title: "Beto Carrero World 2026: Guia Completo para Famílias",
    excerpt: "Tudo sobre o maior parque da América Latina: atrações por faixa etária, ingressos com desconto, roteiro de 1 dia e onde ficar a 5 min do parque.",
    date: "13 de Março, 2026",
    image: blogBetoCarreroOutono,
    category: "Atrações",
    featured: false,
  },
  {
    slug: "guia-completo-penha-sc-beto-carrero",
    title: "Guia Completo de Penha SC: Beto Carrero World, Praias e Onde se Hospedar",
    excerpt: "Planeje sua viagem a Penha SC com este guia completo: o que fazer, as melhores praias, como aproveitar o Beto Carrero World e dicas de hospedagem.",
    date: "1 de Março, 2025",
    image: penhaBeach1,
    category: "Guias",
    featured: false,
  },
  {
    slug: "praias-penha-sc-litoral-norte",
    title: "As 19 Praias de Penha SC: Guia Completo com Dicas para Cada Praia",
    excerpt: "Conheça as 19 praias de Penha SC: Armação, Manguinho, Alegre, Saudade e muito mais.",
    date: "1 de Março, 2025",
    image: penhaBeach3,
    category: "Praias",
    featured: false,
  },
  {
    slug: "ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu",
    title: "Férias de Verão Jan/Fev/Mar 2026: Penha e Balneário Camboriú",
    excerpt: "Guia completo com praias num raio de 50km, passeios imperdíveis e roteiros para aproveitar ao máximo suas férias de verão!",
    date: "3 de Janeiro, 2026",
    image: blogVeraoJaneiro2026,
    category: "Viagem",
    featured: false,
  },
  {
    slug: "cuidados-pele-verao-dicas-saude-praia-penha",
    title: "Cuidados com a Pele no Verão: Guia de Proteção Solar",
    excerpt: "Dicas essenciais de proteção solar, hidratação e saúde para curtir as praias de Penha com a pele protegida e saudável!",
    date: "2 de Janeiro, 2026",
    image: blogCuidadosPele,
    category: "Saúde",
    featured: false,
  },
  {
    slug: "temporada-verao-2025-2026-penha-sc",
    title: "Temporada de Verão 2025/2026 em Penha-SC",
    excerpt: "O guia completo para suas férias perfeitas no litoral catarinense. Praias, gastronomia, Beto Carrero e muito mais!",
    date: "22 de Dezembro, 2025",
    image: blogTemporadaVerao,
    category: "Viagem",
    featured: false,
  },
  {
    slug: "reveillon-2026-penha-santa-catarina",
    title: "Réveillon 2026 em Penha-SC",
    excerpt: "Celebre a virada do ano no paraíso do litoral catarinense. Queima de fogos, tradições e dicas para aproveitar!",
    date: "22 de Dezembro, 2025",
    image: blogReveillon,
    category: "Eventos",
    featured: false,
  },
  {
    slug: "melhores-praias-penha",
    title: "As Melhores Praias de Penha para Visitar",
    excerpt: "Descubra as praias mais bonitas e tranquilas da região de Penha e arredores.",
    date: "15 de Outubro, 2025",
    image: null,
    category: "Praias",
    featured: false,
  },
  {
    slug: "roteiro-3-dias-penha",
    title: "Roteiro de 3 Dias em Penha e Região",
    excerpt: "Planeje sua viagem perfeita com nossas dicas de passeios e atrações imperdíveis.",
    date: "10 de Setembro, 2025",
    image: null,
    category: "Guias",
    featured: false,
  },
  {
    slug: "gastronomia-penha",
    title: "Gastronomia em Penha: Sabores do Litoral",
    excerpt: "Conheça os melhores restaurantes e pratos típicos da região.",
    date: "5 de Agosto, 2025",
    image: null,
    category: "Gastronomia",
    featured: false,
  },
  {
    slug: "dicas-beto-carrero",
    title: "Dicas Essenciais para Aproveitar o Beto Carrero World",
    excerpt: "Tudo o que você precisa saber para uma visita perfeita ao maior parque da América Latina.",
    date: "20 de Abril, 2025",
    image: null,
    category: "Atrações",
    featured: false,
  },
];

const allCategories = ["Todos", ...Array.from(new Set(blogPosts.map(p => p.category)))];

const BlogIndex = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered = activeCategory === "Todos"
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const featured = filtered.filter(p => p.featured);
  const regular = filtered.filter(p => !p.featured);

  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog da Pousada Vila D'Italia",
    "url": "https://www.pousadaviladitalia.com.br/blog",
    "description": "Dicas de viagem, roteiros, guias completos sobre Penha SC, Beto Carrero World e litoral norte de Santa Catarina.",
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://www.pousadaviladitalia.com.br/blog/${post.slug}`,
      "author": { "@type": "Organization", "name": "Pousada Vila D'Italia" }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Blog da Pousada Vila D'Italia — Dicas de Viagem, Praias e Beto Carrero | Penha SC"
        description="Dicas de viagem, roteiros, guias completos sobre Penha SC, Beto Carrero World, praias do litoral norte de Santa Catarina e hospedagem."
        canonical="/blog"
        keywords="blog penha sc, dicas penha, praias penha sc, beto carrero dicas, roteiro penha, hospedagem penha sc, litoral norte sc"
        structuredData={blogListSchema}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: "Blog", url: "/blog" }
        ]}
      />

      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #006994 0%, #004A70 100%)" }}>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 C300,40 600,0 900,20 C1200,40 1200,40 1200,40 L0,40 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">Blog da Pousada</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 animate-fade-in-up">
            Blog — Pousada Vila D'Italia
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Dicas de viagem, roteiros e guias completos sobre Penha, Beto Carrero World e litoral norte de Santa Catarina
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <div className="container mx-auto px-4 -mt-4 relative z-20 mb-10">
        <div className="flex flex-wrap justify-center gap-2">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === cat
                  ? "bg-secondary text-secondary-foreground shadow-md"
                  : "bg-card text-foreground border border-border hover:border-secondary/50"
              }`}
            >
              <Tag className="w-3.5 h-3.5" />
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Posts */}
      {featured.length > 0 && (
        <section className="container mx-auto px-4 mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((post) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group bg-card border-none shadow-soft"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                {post.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-cta text-cta-foreground px-3 py-1 rounded-full text-sm font-semibold">Destaque</span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{post.date}</span>
                  <h2 className="font-bold text-xl md:text-2xl mb-3 mt-2 text-foreground group-hover:text-secondary transition-smooth leading-tight">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Button variant="outline" className="gap-2">
                    Ler Artigo Completo <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {regular.map((post) => (
            <Card
              key={post.slug}
              className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group bg-card border-none shadow-soft"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.image ? (
                <div className="relative h-44 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-smooth" loading="lazy" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold">{post.category}</span>
                  </div>
                </div>
              ) : (
                <div className="h-44 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-primary/30" />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-secondary transition-smooth leading-tight line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <ArrowRight className="h-4 w-4" /> Ler Mais
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Sidebar-style CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-2">Pousada Vila D'Italia</h2>
          <p className="text-primary-foreground/80 mb-6">80m da Praia | 2,5km Beto Carrero | Café Incluso | Piscina Aquecida | Pets</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-6">Verificar Disponibilidade</Button>
            </a>
            <a href="https://wa.me/5547992738090" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-6">WhatsApp</Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogIndex;
