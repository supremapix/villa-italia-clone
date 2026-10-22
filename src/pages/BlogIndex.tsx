import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, ArrowRight, BookOpen, Tag } from "lucide-react";

import { blogPosts as catalog } from '@/data/blogCatalog';
import { editorialArticles } from '@/data/editorialArticles';
const blogPosts = Object.values(catalog).map(p=>({slug:p.id,title:p.title,date:p.date,image:p.image,excerpt:p.metaDescription || p.content.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,160), category:p.category || 'Turismo',featured:p.id in editorialArticles}));
const allCategories = ["Todos", ...Array.from(new Set(blogPosts.map(p => p.category)))];

const BlogIndex = () => {
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

      <main id="main-content">
      {/* Hero */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "#243f36" }}>
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
              aria-pressed={activeCategory === cat}
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
            {featured.map((post, index) => (
              <Card
                key={post.slug}
                className="overflow-hidden hover:shadow-hover transition-smooth cursor-pointer group bg-card border-none shadow-soft"
              >
                {post.image && (
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      width="600"
                      height="300"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="bg-cta text-cta-foreground px-3 py-1 rounded-full text-sm font-semibold">Destaque</span>
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">{post.category}</span>
                    </div>
                    <a
                      href="https://wa.me/5547992738090"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-2 px-4 flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      📞 (47) 99273-8090
                    </a>
                  </div>
                )}
                <div className="p-6">
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{post.date}</span>
                  <h2 className="font-bold text-xl md:text-2xl mb-3 mt-2 text-foreground group-hover:text-secondary transition-smooth leading-tight"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <Button variant="outline" asChild className="gap-2">
                    <Link to={`/blog/${post.slug}`}>Ler artigo completo</Link>
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
            >
              {post.image ? (
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    width="400"
                    height="200"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-primary text-primary-foreground px-2.5 py-0.5 rounded-full text-xs font-semibold">{post.category}</span>
                  </div>
                  <a
                    href="https://wa.me/5547992738090"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1.5 px-3 flex items-center justify-center hover:bg-black/80 transition-colors"
                  >
                    📞 (47) 99273-8090
                  </a>
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
                <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-secondary transition-smooth leading-tight line-clamp-2"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                <Button variant="outline" asChild size="sm" className="w-full gap-2">
                  <Link to={`/blog/${post.slug}`}>Ler mais</Link>
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
            <a href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Vim%20do%20blog%20e%20gostaria%20de%20fazer%20uma%20reserva" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-6">Solicitar Reserva WhatsApp</Button>
            </a>
            <a href="https://wa.me/5547992738090" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-6">WhatsApp</Button>
            </a>
          </div>
          <div className="text-center mt-8 text-xs text-primary-foreground/60">
            <p>Fotos reais da região: Licença Creative Commons / Domínio Público.</p>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default BlogIndex;
