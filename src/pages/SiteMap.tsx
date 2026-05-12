import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Sitemap, Home, Bed, FileText, HelpCircle, MapPin, TreePine, Newspaper, Map, ExternalLink } from "lucide-react";

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
    { label: "Início", path: "/" },
    { label: "Acomodações", path: "/acomodacoes" },
    { label: "Blog da Pousada", path: "/blog" },
    { label: "Perguntas Frequentes (FAQ)", path: "/faq" },
    { label: "Bairros e Praias de Penha", path: "/bairros-penha" },
    { label: "Beto Carrero World", path: "/beto-carrero-world" },
    { label: "Mapa do Site", path: "/mapa-do-site" },
  ],
};

const blogPosts: SitemapSection = {
  title: "Artigos do Blog",
  icon: <Newspaper className="w-5 h-5 text-primary" />,
  links: [
    { label: "Roteiro Saindo de Maringá: Fim de Semana no Beto Carrero World com Crianças", path: "/blog/roteiro-maringa-beto-carrero-world" },
    { label: "Praia da Armação em Penha SC: Tudo Que Você Precisa Saber Antes de Ir", path: "/blog/praia-armacao-penha-sc" },
    { label: "Dicas para Aproveitar o Beto Carrero World no Máximo com a Família", path: "/blog/dicas-beto-carrero-world-familia" },
    { label: "Roteiro de 4 Dias no Litoral Norte de SC Saindo de Londrina", path: "/blog/roteiro-litoral-norte-sc-saindo-de-londrina" },
    { label: "Pousada Perto do Beto Carrero World: Por Que se Hospedar em Penha é a Melhor Escolha", path: "/blog/pousada-perto-beto-carrero-world-penha-sc" },
    { label: "Melhor Época para Visitar o Beto Carrero World com Crianças", path: "/blog/melhor-epoca-beto-carrero-world-criancas" },
    { label: "O Que Fazer em Penha SC Além do Beto Carrero World", path: "/blog/o-que-fazer-em-penha-sc" },
    { label: "Quanto Tempo de Curitiba até o Beto Carrero World? Guia Completo de Rotas", path: "/blog/curitiba-ate-beto-carrero-world-quanto-tempo" },
    { label: "Mirante da Praia Vermelha em Penha SC: A Vista Mais Bonita do Litoral Norte", path: "/blog/mirante-praia-vermelha-penha-vista" },
    { label: "Penha SC na Baixa Temporada: Por Que Visitar Fora do Verão Vale Muito", path: "/blog/penha-sc-baixa-temporada-vantagens" },
    { label: "Pousada Perto do Beto Carrero World: Como Escolher a Melhor", path: "/blog/pousada-perto-beto-carrero-como-escolher" },
    { label: "Como Chegar em Penha SC: Carro, Avião, Ônibus e Todas as Opções", path: "/blog/como-chegar-penha-sc-dicas-transporte" },
    { label: "Temporada de Verão em Penha SC: Planeje sua Viagem com Antecedência", path: "/blog/temporada-verao-penha-sc-2027" },
    { label: "Praias Tranquilas no Litoral Norte de SC: Guia para Fugir da Agitação", path: "/blog/praias-tranquilas-litoral-norte-sc" },
    { label: "Maricultura em Penha SC: Conheça a Capital Brasileira dos Mariscos", path: "/blog/maricultura-penha-sc-turismo" },
    { label: "Penha SC no Fim de Semana: Roteiro de 2 Dias para Aproveitar Tudo", path: "/blog/penha-sc-fim-de-semana-roteiro-rapido" },
    { label: "Ilha Feia em Penha SC: Como Fazer o Passeio de Barco e o Que Esperar", path: "/blog/ilha-feia-penha-sc-passeio-barco" },
    { label: "Gastronomia em Penha SC: Onde Comer Frutos do Mar e os Melhores Restaurantes", path: "/blog/gastronomia-penha-sc-frutos-do-mar" },
    { label: "Penha SC com Crianças: Roteiro Completo de 3 Dias para Famílias", path: "/blog/penha-sc-com-criancas-roteiro-familia" },
    { label: "Beto Carrero World 2026: Guia Completo com Dicas de Ingressos e Atrações", path: "/blog/beto-carrero-world-dicas-guia-2026" },
    { label: "Praias de Penha SC: Guia Completo com as 10 Melhores Praias da Cidade", path: "/blog/praias-de-penha-sc-guia-completo" },
    { label: "Festas e Eventos em Penha SC de Abril a Julho 2026: Calendário Completo", path: "/blog/festas-eventos-penha-sc-abril-julho-2026" },
    { label: "Beto Carrero World 2026: Guia Completo para Famílias", path: "/blog/beto-carrero-world-guia-completo-familias-2026" },
    { label: "Guia Completo de Penha SC: Beto Carrero World, Praias e Onde se Hospedar", path: "/blog/guia-completo-penha-sc-beto-carrero" },
    { label: "As 19 Praias de Penha SC: Guia Completo com Dicas para Cada Praia", path: "/blog/praias-penha-sc-litoral-norte" },
    { label: "Férias de Verão Jan/Fev/Mar 2026: Penha e Balneário Camboriú", path: "/blog/ferias-verao-janeiro-fevereiro-marco-2026-penha-balneario-camboriu" },
    { label: "Cuidados com a Pele no Verão: Guia de Proteção Solar", path: "/blog/cuidados-pele-verao-dicas-saude-praia-penha" },
    { label: "Temporada de Verão 2025/2026 em Penha-SC", path: "/blog/temporada-verao-2025-2026-penha-sc" },
    { label: "Réveillon 2026 em Penha-SC", path: "/blog/reveillon-2026-penha-santa-catarina" },
    { label: "As Melhores Praias de Penha para Visitar", path: "/blog/melhores-praias-penha" },
    { label: "Roteiro de 3 Dias em Penha e Região", path: "/blog/roteiro-3-dias-penha" },
    { label: "Gastronomia em Penha: Sabores do Litoral", path: "/blog/gastronomia-penha" },
    { label: "Dicas Essenciais para Aproveitar o Beto Carrero World", path: "/blog/dicas-beto-carrero" },
  ],
};

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
    { label: "Reservar Online — Omnibees", path: "https://book.omnibees.com/hotel/18988", external: true },
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
  const navigate = useNavigate();

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

  const handleClick = (link: SitemapLink) => {
    if (link.external) {
      window.open(link.path, "_blank", "noopener,noreferrer");
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
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
            <button
              onClick={() => handleClick(link)}
              className="text-left text-sm md:text-base text-foreground/80 hover:text-primary transition-smooth flex items-start gap-1.5 group w-full"
            >
              {link.external ? (
                <ExternalLink className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
              ) : (
                <Map className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-muted-foreground group-hover:text-primary" />
              )}
              <span className="group-hover:underline">{link.label}</span>
            </button>
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
            <Sitemap className="w-5 h-5" />
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
          {renderSection(beachLinks)}

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
                onClick={() => window.open("https://book.omnibees.com/hotel/18988", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center justify-center px-6 py-3 bg-cta text-cta-foreground font-semibold rounded-lg hover:bg-cta-dark transition-smooth"
              >
                <Bed className="w-4 h-4 mr-2" />
                Reservar Online
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

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default SiteMap;
