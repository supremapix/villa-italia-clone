import { blogPosts as catalog } from "@/data/blogCatalog";
import Navigation from "@/components/Navigation";
import EnhancedSEO from "@/components/EnhancedSEO";
import { LayoutTemplate, Home, Bed, FileText, HelpCircle, MapPin, TreePine, Newspaper, Map, ExternalLink } from "lucide-react";

interface SitemapLink {
  label: string;
  path: string;
  external?: boolean;
}

interface SitemapSection {
  title: string;
  icon: React.ReactNode;
  links: SitemapLink[];
}

const mainPages: SitemapSection = {
  title: "Páginas Principais",
  icon: <Home className="w-5 h-5 text-primary" />,
  links: [
    { label: "Instagram da pousada", path: "/instagram" },
    { label: "Início", path: "/" },
    { label: "Acomodações", path: "/acomodacoes" },
    { label: "Blog da Pousada", path: "/blog" },
    { label: "Perguntas Frequentes (FAQ)", path: "/faq" },
    { label: "Bairros e Praias de Penha", path: "/bairros-penha" },
    { label: "Beto Carrero World", path: "/beto-carrero-world" },
    { label: "Mapa do Site", path: "/mapa-do-site" },
  ],
};

const blogPosts: SitemapSection = {title:'Artigos do Blog',icon:<Newspaper className="w-5 h-5 text-primary"/>,links:Object.values(catalog).map(p=>({label:p.title,path:'/blog/'+p.id}))};

const beaches: SitemapSection = {
  title: "Praias e Bairros de Penha",
  icon: <MapPin className="w-5 h-5 text-primary" />,
  links: [
    { label: "Praia da Armação do Itapocorói (Trapiche)", path: "/bairros-penha/armacao" },
    { label: "Praia Alegre", path: "/bairros-penha/praia-alegre" },
    { label: "Praia Grande", path: "/bairros-penha/praia-grande" },
    { label: "Quilombo", path: "/bairros-penha/quilombo" },
    { label: "Praia Vermelha", path: "/bairros-penha/praia-vermelha" },
    { label: "Poa", path: "/bairros-penha/poa" },
    { label: "Cancela", path: "/bairros-penha/cancela" },
    { label: "Cascalho", path: "/bairros-penha/cascalho" },
    { label: "Saudade", path: "/bairros-penha/saudade" },
    { label: "Bacia da Vovó", path: "/bairros-penha/bacia-da-vovo" },
    { label: "Fortaleza", path: "/bairros-penha/fortaleza" },
    { label: "Manguinho", path: "/bairros-penha/manguinho" },
    { label: "Monge", path: "/bairros-penha/monge" },
    { label: "Lucas", path: "/bairros-penha/lucas" },
    { label: "São Miguel", path: "/bairros-penha/sao-miguel" },
    { label: "Gravata", path: "/bairros-penha/gravata" },
    { label: "Paciência", path: "/bairros-penha/paciencia" },
    { label: "Cordas", path: "/bairros-penha/cordas" },
    { label: "Retiro", path: "/bairros-penha/retiro" },
    { label: "Farol", path: "/bairros-penha/farol" },
    { label: "Pescadores", path: "/bairros-penha/pescadores" },
    { label: "Fundinho", path: "/bairros-penha/fundinho" },
    { label: "Mirante", path: "/bairros-penha/mirante" },
    { label: "Costão do Quilombo", path: "/bairros-penha/costao-quilombo" },
    { label: "Canto da Armação", path: "/bairros-penha/canto-armacao" },
  ],
};

const bookingLinks: SitemapSection = {
  title: "Reservas e Contato",
  icon: <Bed className="w-5 h-5 text-primary" />,
  links: [
    { label: "Solicitar Reserva — WhatsApp", path: "https://api.whatsapp.com/send?phone=5547992738090", external: true },
    { label: "WhatsApp Central de Reservas — (47) 99273-8090", path: "https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva", external: true },
    { label: "WhatsApp Recepção — (47) 99204-5122", path: "https://wa.me/5547992045122?text=Olá!%20Vim%20do%20site%20e%20preciso%20de%20atendimento", external: true },
    { label: "E-mail: contato@viladitalia.com.br", path: "mailto:contato@viladitalia.com.br", external: true },
    { label: "Instagram", path: "https://www.instagram.com/viladitaliapousada/", external: true },
    { label: "Facebook", path: "https://www.facebook.com/viladitalia/?ref=embed_page", external: true },
    { label: "YouTube", path: "https://www.youtube.com/@POUSADAVILADITÁLIA", external: true },
    { label: "TikTok", path: "https://www.tiktok.com/@pousadaviladitalia", external: true },
    { label: "Pinterest", path: "https://br.pinterest.com/pousadaviladitalia", external: true },
  ],
};

const SiteMap = () => {


  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mapa do Site — Pousada Vila D'Italia",
    "description": "Navegue por todas as páginas, artigos do blog, praias e bairros de Penha SC no site da Pousada Vila D'Italia.",
    "url": "https://www.pousadaviladitalia.com.br/mapa-do-site",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://www.pousadaviladitalia.com.br/" },
        { "@type": "ListItem", "position": 2, "name": "Mapa do Site", "item": "https://www.pousadaviladitalia.com.br/mapa-do-site" },
      ]
    }
  };



  const renderSection = (section: SitemapSection) => (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
        {section.icon}
        {section.title}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2">
        {section.links.map((link) => (
          <li key={link.path}>
            <a
              href={link.path}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-left text-sm md:text-base text-foreground/80 hover:text-primary transition-smooth flex items-start gap-1.5 group w-full"
            >
              {link.external ? (
                <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
              ) : (
                <Map className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
              )}
              <span className="group-hover:underline">{link.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Mapa do Site — Pousada Vila D'Italia | Penha SC"
        description="Navegue por todas as páginas, artigos do blog, praias e bairros de Penha SC no site da Pousada Vila D'Italia."
        canonical="/mapa-do-site"
        keywords="mapa do site pousada vila ditalia, navegação site penha sc, páginas pousada penha"
        structuredData={structuredData}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: "Mapa do Site", url: "/mapa-do-site" },
        ]}
      />

      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-12 bg-gradient-to-br from-primary/90 to-primary-dark/90 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 C300,40 600,0 900,20 C1200,40 1200,40 1200,40 L0,40 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/15 text-white px-4 py-2 rounded-full mb-6">
            <LayoutTemplate className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">Navegação Completa</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
            Mapa do Site
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg">
            Encontre rapidamente todas as páginas, artigos do blog, praias e informações da Pousada Vila D'Italia.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          {renderSection(mainPages)}

          <div className="border-t border-border my-8" />
          {renderSection(beaches)}

          <div className="border-t border-border my-8" />
          {renderSection(blogPosts)}

          <div className="border-t border-border my-8" />
          {renderSection(bookingLinks)}

          {/* CTA */}
          <div className="mt-12 p-6 md:p-8 bg-muted/50 rounded-xl text-center border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-2">
              Pronto para sua viagem?
            </h3>
            <p className="text-foreground/80 mb-4 max-w-xl mx-auto">
              A Pousada Vila D'Italia está a poucos metros da Praia de Armação e a 5 minutos do Beto Carrero World.
              Reserve agora e aproveite o melhor de Penha SC.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => window.open("https://api.whatsapp.com/send?phone=5547992738090&text=Olá!%20Vim%20do%20Sitemap%20e%20gostaria%20de%20fazer%20uma%20reserva", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center px-6 py-3 bg-cta text-cta-foreground font-semibold rounded-lg hover:bg-cta-dark transition-smooth"
              >
                <Bed className="w-4 h-4 mr-2" />
                Solicitar Reserva WhatsApp
              </button>
              <button
                onClick={() => window.open("https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary-dark transition-smooth"
              >
                WhatsApp (47) 99273-8090
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteMap;
