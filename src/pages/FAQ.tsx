import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Plus, Minus, HelpCircle, Search, Phone, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
}

interface RelatedSearchCard {
  id: string;
  title: string;
  content: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "Qual o horário de check-in e check-out?",
    answer: "O check-in é a partir das 14h e o check-out até as 11:30h. Caso precise de horários diferenciados, entre em contato conosco para verificar disponibilidade."
  },
  {
    question: "O café da manhã está incluso na diária?",
    answer: "Sim! Todas as diárias incluem café da manhã completo, servido das 7h30 às 10h, com pães, frutas, bolos, sucos, café, leite, frios e muito mais."
  },
  {
    question: "A pousada tem estacionamento?",
    answer: "Sim, oferecemos estacionamento gratuito para todos os hóspedes, com vagas dentro da propriedade da pousada."
  },
  {
    question: "Qual a distância da pousada até a praia?",
    answer: "A Pousada Vila D'Italia fica a apenas 80 a 100 metros da Praia da Armação — são poucos passos até a areia. Você pode ir e voltar da praia a pé sem nenhum esforço."
  },
  {
    question: "Qual a distância até o Beto Carrero World?",
    answer: "A pousada fica a apenas 5 minutos de carro do Beto Carrero World, o maior parque temático da América Latina. Acesso rápido e fácil, sem trânsito complicado."
  },
  {
    question: "A pousada aceita animais de estimação?",
    answer: "Infelizmente não aceitamos animais de estimação nas dependências da pousada, para garantir o conforto e a segurança de todos os hóspedes."
  },
  {
    question: "A pousada tem piscina?",
    answer: "Sim! Temos piscina ao ar livre para uso de todos os hóspedes, perfeita para se refrescar nos dias de calor."
  },
  {
    question: "Como faço para reservar?",
    answer: "Você pode reservar diretamente pelo nosso site oficial, pelo WhatsApp (47) 99273-8090 ou pelos portais de reserva como Booking.com e Decolar. Reservando pelo site oficial você garante as melhores tarifas sem intermediários."
  },
  {
    question: "A pousada tem Wi-Fi?",
    answer: "Sim, oferecemos Wi-Fi gratuito em todas as áreas da pousada, incluindo quartos e áreas comuns."
  },
  {
    question: "Quantos quartos a pousada possui?",
    answer: "A Pousada Vila D'Italia possui 15 quartos confortáveis, todos equipados com ar-condicionado, TV, frigobar e banheiro privativo."
  },
  {
    question: "A pousada tem restaurante?",
    answer: "Sim! Contamos com o Quiosque do Kaká, nosso restaurante que oferece pratos deliciosos com ingredientes frescos e sabor caseiro. Aberto para hóspedes e visitantes."
  },
  {
    question: "Quais praias ficam próximas da pousada?",
    answer: "Além da Praia da Armação (80m), você tem acesso fácil à Praia Alegre, Praia Grande, Praia do Quilombo, Praia Vermelha e mais de 15 praias em um raio de 50km, incluindo praias de Balneário Camboriú e Navegantes."
  },
  {
    question: "A pousada é indicada para famílias com crianças?",
    answer: "Com certeza! A Pousada Vila D'Italia é perfeita para famílias. Temos ambiente seguro, piscina, proximidade com a praia e o Beto Carrero World — diversão garantida para todas as idades."
  },
  {
    question: "Qual a política de cancelamento?",
    answer: "Nossa política de cancelamento varia conforme a temporada e o tipo de reserva. Entre em contato conosco pelo WhatsApp ou e-mail para conhecer as condições vigentes."
  }
];

const FAQ = () => {
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openCard, setOpenCard] = useState<string | null>(null);

  // Handle URL hash for related searches
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      setOpenCard(hash);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 300);
    }
  }, [location.hash]);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleCard = (id: string) => {
    const newId = openCard === id ? null : id;
    setOpenCard(newId);
    if (newId) {
      window.history.replaceState(null, "", `#${newId}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  const relatedSearchCards: RelatedSearchCard[] = [
    {
      id: "pousada-penha-beira-mar",
      title: "Pousada Penha Beira Mar",
      content: (
        <p>
          A Pousada Vila D'Italia está localizada a apenas 80 a 100 metros da Praia da Armação — poucos passos do mar. É na prática uma{" "}
          <Link to="/#location" className="text-secondary font-semibold hover:underline">pousada beira mar em Penha SC</Link>, com acesso direto à praia a pé, sem precisar de carro ou deslocamento. Acorde, tome o{" "}
          <Link to="/#amenities" className="text-secondary font-semibold hover:underline">café da manhã incluso</Link> e vá direto para a areia.
        </p>
      )
    },
    {
      id: "pousada-penha-2-estrelas",
      title: "Pousada Penha 2 Estrelas",
      content: (
        <p>
          A Pousada Vila D'Italia oferece estrutura completa com piscina, café da manhã, Wi-Fi, estacionamento e 15 quartos confortáveis em Penha SC. Nota 8.3 no Booking.com e 8.5 na Decolar — avaliada pelos hóspedes como muito boa. O{" "}
          <Link to="/#why-penha" className="text-secondary font-semibold hover:underline">melhor custo-benefício de Penha</Link> para famílias e casais.
        </p>
      )
    },
    {
      id: "pousada-penha-oficial",
      title: "Pousada Penha Oficial",
      content: (
        <p>
          O site oficial da Pousada Vila D'Italia é www.pousadaviladitalia.com.br —{" "}
          <Link to="/#reservation" className="text-secondary font-semibold hover:underline">reservar pelo site oficial</Link> garante as melhores tarifas, condições exclusivas e atendimento direto com os proprietários sem intermediários ou taxas extras.
        </p>
      )
    },
    {
      id: "pousada-penha-tematica",
      title: "Pousada Penha Temática",
      content: (
        <p>
          A Pousada Vila D'Italia tem nome e inspiração na cultura italiana, transmitindo um clima acolhedor e familiar típico das pousadas temáticas. Ambiente decorado com charme, atendimento personalizado e aquela sensação de estar em um lugar especial diferente dos hotéis convencionais.
        </p>
      )
    },
    {
      id: "penha-parque-pousada",
      title: "Penha Parque Pousada",
      content: (
        <p>
          Quer ficar hospedado perto do parque em Penha SC? A Pousada Vila D'Italia é a escolha ideal — a apenas{" "}
          <Link to="/#beto-carrero" className="text-secondary font-semibold hover:underline">5 minutos de carro do Beto Carrero World</Link>. Fácil acesso ao parque pela manhã, retorno confortável para descanso e piscina à tarde. Sem estresse de trânsito ou deslocamento longo.
        </p>
      )
    },
    {
      id: "pousada-penha-barata",
      title: "Pousada Penha Barata",
      content: (
        <p>
          A Pousada Vila D'Italia oferece o{" "}
          <Link to="/#why-penha" className="text-secondary font-semibold hover:underline">melhor custo-benefício de Penha SC</Link> — café da manhã incluso, piscina, Wi-Fi, estacionamento e 15 quartos confortáveis com tarifas acessíveis para famílias de todos os perfis. Compare e veja: estrutura completa com preço justo a 5 min do Beto Carrero e passos da praia.
        </p>
      )
    },
    {
      id: "pousada-penha-pe-na-areia",
      title: "Pousada Penha Pé na Areia",
      content: (
        <p>
          A Pousada Vila D'Italia é praticamente pé na areia em Penha SC — apenas 80 a 100 metros separam a pousada da{" "}
          <Link to="/#location" className="text-secondary font-semibold hover:underline">Praia da Armação</Link>. Você literalmente sai do quarto, passa pelo jardim e em 2 minutos já está com os pés na areia. Não existe localização mais próxima do mar nessa faixa de preço em Penha.
        </p>
      )
    },
    {
      id: "recanto-armacao-pousada-penha",
      title: "Recanto Armação Pousada Penha",
      content: (
        <p>
          Buscando um recanto aconchegante próximo à Praia da Armação em Penha? A Pousada Vila D'Italia fica a metros da Armação, com{" "}
          <Link to="/#amenities" className="text-secondary font-semibold hover:underline">piscina, café da manhã</Link> e ambiente familiar que proporciona o verdadeiro recanto de descanso que você procura. A combinação perfeita de localização, conforto e preço.
        </p>
      )
    }
  ];

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const webPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "FAQ - Perguntas Frequentes | Pousada Vila D'Italia - Penha SC",
    "description": "Perguntas frequentes sobre a Pousada Vila D'Italia em Penha SC. Informações sobre check-in, café da manhã, piscina, praias, Beto Carrero World e reservas.",
    "url": "https://www.pousadaviladitalia.com.br/faq",
    "keywords": "pousada penha beira mar, pousada penha 2 estrelas, pousada penha sc oficial, pousada penha tematica, penha parque pousada, pousada penha barata, pousada penha pe na areia, recanto armacao pousada penha, pousada perto beto carrero world, hospedagem penha sc barata, pousada familiar penha sc, pousada penha com piscina, onde ficar perto beto carrero, hotel penha pe na areia, pousada armacao penha sc",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Pousada Vila D'Italia",
      "url": "https://www.pousadaviladitalia.com.br"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="FAQ - Perguntas Frequentes | Pousada Vila D'Italia - Penha SC"
        description="Perguntas frequentes sobre a Pousada Vila D'Italia em Penha SC. Check-in, café da manhã, piscina, praias próximas, Beto Carrero World, tarifas e reservas."
        canonical="https://www.pousadaviladitalia.com.br/faq"
        keywords="pousada penha beira mar, pousada penha 2 estrelas, pousada penha sc oficial, pousada penha tematica, penha parque pousada, pousada penha barata, pousada penha pe na areia, recanto armacao pousada penha, pousada perto beto carrero world, hospedagem penha sc barata, pousada familiar penha sc, pousada penha com piscina, onde ficar perto beto carrero, hotel penha pe na areia, pousada armacao penha sc"
        structuredData={faqStructuredData}
        breadcrumbs={[
          { name: "Início", url: "https://www.pousadaviladitalia.com.br" },
          { name: "FAQ", url: "https://www.pousadaviladitalia.com.br/faq" }
        ]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 animate-fade-in">
            <HelpCircle className="w-5 h-5" />
            <span className="font-semibold text-sm uppercase tracking-wider">Central de Ajuda</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in">
            Perguntas <span className="text-primary">Frequentes</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            Encontre respostas para as dúvidas mais comuns sobre a{" "}
            <Link to="/" className="text-secondary font-semibold hover:underline">Pousada Vila D'Italia</Link> em Penha SC. 
            Não encontrou sua resposta? Fale conosco pelo WhatsApp!
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground text-center mb-12">
            Dúvidas Sobre a <span className="text-secondary">Pousada</span>
          </h2>

          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`bg-card rounded-xl border transition-all duration-300 overflow-hidden ${
                  openFAQ === index 
                    ? "border-primary/30 shadow-md" 
                    : "border-border hover:border-primary/20 hover:shadow-sm"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                  aria-expanded={openFAQ === index}
                >
                  <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFAQ === index 
                      ? "max-h-96 opacity-100" 
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA WhatsApp */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 border border-primary/10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              Não encontrou sua resposta?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Fale diretamente com nossa equipe pelo WhatsApp. Estamos prontos para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20FAQ%20do%20site%20e%20tenho%20uma%20dúvida"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="cta" size="lg" className="gap-2">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp - Central de Reservas
                </Button>
              </a>
              <a href="tel:+5547992738090">
                <Button variant="outline" size="lg" className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Phone className="w-5 h-5" />
                  (47) 99273-8090
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Searches Section - Long Tail SEO */}
      <section className="py-16 md:py-20 bg-muted/30" id="buscas-relacionadas">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
              <Search className="w-4 h-4" />
              <span className="font-semibold text-sm uppercase tracking-wider">Buscas Populares</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Você Também Pode Estar <span className="text-primary">Buscando...</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Encontre informações detalhadas sobre hospedagem, praias e turismo em Penha SC
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {relatedSearchCards.map((card) => (
              <div
                key={card.id}
                id={card.id}
                className={`bg-card rounded-xl border transition-all duration-300 overflow-hidden ${
                  openCard === card.id
                    ? "border-l-4 border-l-secondary border-t-border border-r-border border-b-border shadow-lg"
                    : "border-border hover:shadow-md hover:border-primary/20"
                }`}
              >
                <button
                  onClick={() => toggleCard(card.id)}
                  className="w-full flex items-center justify-between p-5 text-left gap-3"
                  aria-expanded={openCard === card.id}
                >
                  <h3 className="text-base md:text-lg font-bold text-primary">
                    {card.title}
                  </h3>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openCard === card.id
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {openCard === card.id ? (
                      <Minus className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </span>
                </button>
                <div
                  className={`transition-all duration-400 ease-in-out ${
                    openCard === card.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-5 pb-5 border-t border-border/30">
                    <div className="text-muted-foreground leading-relaxed pt-4">
                      {card.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Reserve Agora no Site Oficial
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Garanta as melhores tarifas, sem intermediários. Café da manhã incluso, piscina, Wi-Fi e estacionamento — tudo a 80m da praia e 5 min do Beto Carrero World.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-6 gap-2">
                Reserve Pelo Site Oficial
              </Button>
            </a>
            <a
              href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6 gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD WebPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageStructuredData) }}
      />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FAQ;
