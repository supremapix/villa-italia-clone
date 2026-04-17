import { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import { ChevronDown, Plus, Minus, HelpCircle, Search, Phone, MessageCircle, MapPin, Coffee, Waves, PawPrint, DollarSign, BedDouble, CalendarCheck } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface RelatedSearchCard {
  id: string;
  title: string;
  content: React.ReactNode;
}

const faqItems: FAQItem[] = [
  // BLOCO 1: RESERVAS E CHECK-IN (6)
  {
    category: "reservas",
    question: "Como faço uma reserva na Pousada Vila D'Italia?",
    answer: "Você pode reservar diretamente pelo nosso site (www.pousadaviladitalia.com.br), pelo WhatsApp, pelo telefone ou pelas plataformas Booking.com e Decolar. Para garantir o melhor preço recomendamos a reserva direta pelo nosso site ou WhatsApp. Entre em contato e vamos te ajudar a escolher o quarto ideal para sua família!"
  },
  {
    category: "reservas",
    question: "Qual o horário de check-in e check-out?",
    answer: "O check-in é a partir das 14h e o check-out até as 12h (ao meio-dia). Em casos de disponibilidade podemos acomodar check-in antecipado ou check-out tardio — consulte nossa equipe pelo WhatsApp com antecedência."
  },
  {
    category: "reservas",
    question: "É necessário pagar antecipado para confirmar a reserva?",
    answer: "Sim, solicitamos um sinal para confirmar a reserva. O valor é informado no momento da reserva conforme o período e tipo de quarto escolhido. O restante pode ser pago na chegada."
  },
  {
    category: "reservas",
    question: "Quais formas de pagamento aceitam?",
    answer: "Aceitamos PIX, cartão de crédito, cartão de débito e dinheiro. Consulte as condições de parcelamento no cartão no momento da reserva."
  },
  {
    category: "reservas",
    question: "Posso cancelar minha reserva?",
    answer: "Temos política de cancelamento conforme o período de antecedência. Consulte as condições no momento da reserva ou entre em contato pelo WhatsApp para mais informações."
  },
  {
    category: "reservas",
    question: "A pousada fica aberta o ano todo?",
    answer: "Sim! A Pousada Vila D'Italia funciona o ano todo. Temporada alta: dezembro a fevereiro, Semana Santa, feriados prolongados e Festa Junina. Fora de temporada temos preços especiais e mais tranquilidade."
  },
  // BLOCO 2: QUARTOS E ACOMODAÇÕES (7)
  {
    category: "quartos",
    question: "Quantos quartos a pousada tem?",
    answer: "A Pousada Vila D'Italia tem 18 quartos aconchegantes com diferentes configurações para atender casais, famílias e grupos. Todos com ar-condicionado, TV de tela plana, frigobar, banheiro privativo com chuveiro, secador de cabelo, roupa de cama e toalhas."
  },
  {
    category: "quartos",
    question: "Os quartos têm ar-condicionado?",
    answer: "Sim! Todos os quartos têm ar-condicionado split para seu conforto em qualquer época do ano. Dica: os quartos do térreo costumam ser mais frescos naturalmente à noite."
  },
  {
    category: "quartos",
    question: "Tem quartos com varanda ou terraço?",
    answer: "Sim! Alguns quartos contam com varanda ou terraço. Consulte a disponibilidade no momento da reserva se esta comodidade é importante para você."
  },
  {
    category: "quartos",
    question: "Os quartos têm frigobar?",
    answer: "Sim! Todos os quartos têm frigobar para sua conveniência durante a estadia."
  },
  {
    category: "quartos",
    question: "Qual é a capacidade máxima por quarto?",
    answer: "Temos quartos para casais, quartos triplos e quartos família. A capacidade varia por quarto — consulte no momento da reserva o quarto certo para o número de pessoas do seu grupo."
  },
  {
    category: "quartos",
    question: "Os quartos são limpos diariamente?",
    answer: "Sim! Realizamos limpeza diária dos quartos durante a estadia com troca de toalhas conforme política interna. Para estadias mais longas informe suas preferências à nossa equipe."
  },
  {
    category: "quartos",
    question: "Tem quarto adaptado para PCD?",
    answer: "Consulte nossa equipe pelo WhatsApp para verificar disponibilidade e acessibilidade conforme sua necessidade. Fazemos o possível para atender todos os hóspedes com conforto."
  },
  // BLOCO 3: PISCINA E LAZER (7)
  {
    category: "piscina",
    question: "A pousada tem piscina?",
    answer: "Sim! Temos duas piscinas: uma piscina ao ar livre e uma piscina coberta/aquecida — perfeita para o inverno de Santa Catarina. Também contamos com jacuzzi/hidromassagem e solário. As piscinas são frequentemente elogiadas pela limpeza e manutenção caprichada."
  },
  {
    category: "piscina",
    question: "A piscina coberta é aquecida?",
    answer: "Sim! Nossa piscina coberta é aquecida, o que permite aproveitar o banho mesmo nos dias mais frios do inverno em Penha. É uma das comodidades mais queridas pelas famílias que nos visitam."
  },
  {
    category: "piscina",
    question: "A piscina tem horário de funcionamento?",
    answer: "Consulte o horário de funcionamento das piscinas na recepção no momento do check-in ou pelo WhatsApp."
  },
  {
    category: "piscina",
    question: "Crianças podem usar a piscina?",
    answer: "Sim! Nossas piscinas são ótimas para crianças. Pedimos que crianças pequenas estejam sempre acompanhadas dos responsáveis na área da piscina. A piscina é um dos maiores atrativos para famílias na nossa pousada."
  },
  {
    category: "piscina",
    question: "Tem jacuzzi ou hidromassagem?",
    answer: "Sim! Contamos com banheira de hidromassagem para relaxar após um dia intenso no Beto Carrero World ou na praia."
  },
  {
    category: "piscina",
    question: "Tem outras opções de lazer além das piscinas?",
    answer: "Sim! Oferecemos academia, mesa de bilhar, jardim e lounge compartilhado. O restaurante e bar próprio também são ótimos para relaxar sem precisar sair da pousada."
  },
  {
    category: "piscina",
    question: "A área de lazer é compartilhada com todos os hóspedes?",
    answer: "Sim! As piscinas, jacuzzi, jardim, lounge e demais áreas de lazer são compartilhadas por todos os hóspedes. Em alta temporada recomendamos ir cedo às piscinas para garantir lugar."
  },
  // BLOCO 4: CAFÉ DA MANHÃ (5)
  {
    category: "cafe",
    question: "O café da manhã está incluso na diária?",
    answer: "Sim! O café da manhã está incluso em todas as diárias. Servimos em estilo buffet com opções continentais e americanas para começar bem o dia."
  },
  {
    category: "cafe",
    question: "Qual o horário do café da manhã?",
    answer: "O horário do café da manhã é informado na recepção no check-in. Consulte também pelo WhatsApp antes da chegada."
  },
  {
    category: "cafe",
    question: "O café da manhã serve opções para crianças?",
    answer: "Sim! O buffet tem opções variadas que agradam crianças e adultos para começar o dia com energia para as atrações de Penha."
  },
  {
    category: "cafe",
    question: "O restaurante serve almoço e jantar?",
    answer: "Sim! Nossa pousada tem restaurante e bar próprios servindo porções, lanches, almoço e jantar pagos à parte. Uma comodidade enorme para quem chega cansado do dia no Beto Carrero e não quer sair para comer."
  },
  {
    category: "cafe",
    question: "Tem opção para hóspedes com restrições alimentares?",
    answer: "Informe suas restrições alimentares (alergias, vegetarianismo etc) no momento da reserva ou na chegada para que nossa equipe possa se preparar."
  },
  // BLOCO 5: FAMÍLIAS (5)
  {
    category: "pets",
    question: "A pousada aceita pets?",
    answer: "Não. Infelizmente a Pousada Vila D'Italia não aceita animais de estimação. Para garantir o conforto e bem-estar de todos os hóspedes, nossa propriedade não é pet friendly. Recomendamos procurar hotéis especializados em pets na região de Penha SC."
  },
  {
    category: "pets",
    question: "Posso levar meu cachorro ou gato para a pousada?",
    answer: "Não aceitamos animais de estimação de nenhum porte ou espécie. Essa é uma política da pousada que não possui exceções. Sugerimos consultar opções de hospedagem para pets ou hotéis pet friendly na região antes da sua viagem."
  },
  {
    category: "pets",
    question: "A pousada é boa para famílias com crianças pequenas?",
    answer: "Sim! A Pousada Vila D'Italia é muito popular entre famílias com crianças. As piscinas, especialmente a aquecida, são ótimas para as crianças. Estamos a 2,5km do Beto Carrero World e a poucos passos da praia — perfeito para as crianças se divertirem."
  },
  {
    category: "pets",
    question: "Tem berço ou cama extra disponível?",
    answer: "Consulte a disponibilidade de cama extra ou berço no momento da reserva para garantirmos o quarto mais adequado para sua família."
  },
  {
    category: "pets",
    question: "A pousada é segura para crianças?",
    answer: "Sim! Nossa pousada tem ambiente familiar, equipe atenciosa e estrutura adequada para famílias. As piscinas exigem acompanhamento dos responsáveis para crianças menores."
  },
  // BLOCO 6: LOCALIZAÇÃO E ACESSOS (6)
  {
    category: "localizacao",
    question: "Qual a distância da pousada até o Beto Carrero World?",
    answer: "A Pousada Vila D'Italia fica a aproximadamente 2,5km do Parque Temático Beto Carrero World — cerca de 5 a 10 minutos de carro. Você pode ir de carro próprio ou de táxi/aplicativo facilmente."
  },
  {
    category: "localizacao",
    question: "A pousada fica perto da praia?",
    answer: "Sim! Estamos a apenas 80 metros da Praia da Armação — uma caminhada curta de 1 a 2 minutos. A praia é tranquila, boa para famílias e com comércio próximo."
  },
  {
    category: "localizacao",
    question: "Qual a distância até o aeroporto?",
    answer: "O Aeroporto Internacional de Navegantes (NVT) fica a aproximadamente 14km da pousada — cerca de 18 minutos de carro. Uma das hospedagens mais acessíveis para quem chega de avião."
  },
  {
    category: "localizacao",
    question: "Tem estacionamento na pousada?",
    answer: "Sim! Oferecemos estacionamento privativo gratuito para hóspedes. Uma comodidade importante para quem vem de carro — muito comum nas famílias que visitam o Beto Carrero."
  },
  {
    category: "localizacao",
    question: "Tem comércio e restaurantes perto?",
    answer: "Sim! Ao redor da pousada há supermercado, padaria, farmácia, restaurantes e lanchonetes. Tudo a pouca distância a pé — muito prático para as famílias."
  },
  {
    category: "localizacao",
    question: "Como chegar de carro à Pousada Vila D'Italia?",
    answer: "Nosso endereço é Rua Luís Vicente da Silva, 183 — bairro Armação, Penha SC. Use o Google Maps ou Waze buscando \"Pousada Vila D'Italia Penha\" para a rota mais atualizada até nós."
  },
  // BLOCO 7: PREÇOS E TEMPORADAS (6)
  {
    category: "precos",
    question: "Qual o melhor período para visitar Penha com melhor preço?",
    answer: "A baixa temporada (março a novembro exceto feriados) oferece preços mais acessíveis e menor movimento. O clima em Penha é agradável o ano todo. Nossas piscinas aquecidas tornam a experiência ótima mesmo no inverno."
  },
  {
    category: "precos",
    question: "Qual a temporada mais movimentada?",
    answer: "A alta temporada é dezembro a fevereiro, Semana Santa, Carnaval, feriados prolongados e Festa Junina. Reserve com antecedência pois os quartos se esgotam rapidamente nestes períodos em Penha."
  },
  {
    category: "precos",
    question: "Tem desconto para estadias longas?",
    answer: "Para estadias mais longas consulte condições especiais pelo WhatsApp ou diretamente no momento da reserva."
  },
  {
    category: "precos",
    question: "O preço de Booking e Decolar é igual ao preço direto?",
    answer: "A reserva direta pelo site ou WhatsApp pode ter condições especiais. Sempre consulte conosco antes de fechar pelo comparador — podemos oferecer o mesmo preço ou melhor com atendimento personalizado."
  },
  {
    category: "precos",
    question: "Criança paga diária?",
    answer: "A política de crianças varia conforme a idade e o quarto escolhido. Consulte no momento da reserva as condições para o seu grupo."
  },
  {
    category: "precos",
    question: "Tem pacotes especiais para réveillon ou carnaval?",
    answer: "Sim! Temos condições especiais para feriados e datas comemorativas. Consulte disponibilidade e valores com antecedência pelo WhatsApp pois esses períodos se esgotam rapidamente."
  },
];

const categories = [
  { id: "todos", label: "Todos", icon: HelpCircle },
  { id: "reservas", label: "Reservas", icon: CalendarCheck },
  { id: "quartos", label: "Quartos", icon: BedDouble },
  { id: "piscina", label: "Piscina", icon: Waves },
  { id: "cafe", label: "Café", icon: Coffee },
  { id: "pets", label: "Famílias", icon: PawPrint },
  { id: "localizacao", label: "Localização", icon: MapPin },
  { id: "precos", label: "Preços", icon: DollarSign },
];

const FAQ = () => {
  const location = useLocation();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [openCard, setOpenCard] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      // Check if hash matches a category
      const cat = categories.find(c => c.id === hash);
      if (cat) {
        setActiveCategory(hash);
        window.scrollTo({ top: 400, behavior: "smooth" });
      } else {
        setOpenCard(hash);
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
        }, 300);
      }
    }
  }, [location.hash]);

  const filteredFAQ = useMemo(() => {
    return faqItems.filter(item => {
      const matchesCategory = activeCategory === "todos" || item.category === activeCategory;
      const matchesSearch = searchTerm === "" ||
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

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
        <p>A Pousada Vila D'Italia está localizada a apenas 80 a 100 metros da Praia da Armação — poucos passos do mar. É na prática uma <Link to="/#location" className="text-secondary font-semibold hover:underline">pousada beira mar em Penha SC</Link>, com acesso direto à praia a pé, sem precisar de carro ou deslocamento. Acorde, tome o <Link to="/#amenities" className="text-secondary font-semibold hover:underline">café da manhã incluso</Link> e vá direto para a areia.</p>
      )
    },
    {
      id: "pousada-penha-2-estrelas",
      title: "Pousada Penha 2 Estrelas",
      content: (
        <p>A Pousada Vila D'Italia oferece estrutura completa com piscina, café da manhã, Wi-Fi, estacionamento e 18 quartos confortáveis em Penha SC. Nota 8.3 no Booking.com e 8.5 na Decolar — avaliada pelos hóspedes como muito boa. O <Link to="/#why-penha" className="text-secondary font-semibold hover:underline">melhor custo-benefício de Penha</Link> para famílias e casais.</p>
      )
    },
    {
      id: "pousada-penha-oficial",
      title: "Pousada Penha Oficial",
      content: (
        <p>O site oficial da Pousada Vila D'Italia é www.pousadaviladitalia.com.br — <Link to="/#reservation" className="text-secondary font-semibold hover:underline">reservar pelo site oficial</Link> garante as melhores tarifas, condições exclusivas e atendimento direto com os proprietários sem intermediários ou taxas extras.</p>
      )
    },
    {
      id: "pousada-penha-tematica",
      title: "Pousada Penha Temática",
      content: (
        <p>A Pousada Vila D'Italia tem nome e inspiração na cultura italiana, transmitindo um clima acolhedor e familiar típico das pousadas temáticas. Ambiente decorado com charme, atendimento personalizado e aquela sensação de estar em um lugar especial diferente dos hotéis convencionais.</p>
      )
    },
    {
      id: "penha-parque-pousada",
      title: "Penha Parque Pousada",
      content: (
        <p>Quer ficar hospedado perto do parque em Penha SC? A Pousada Vila D'Italia é a escolha ideal — a apenas <Link to="/#beto-carrero" className="text-secondary font-semibold hover:underline">5 minutos de carro do Beto Carrero World</Link>. Fácil acesso ao parque pela manhã, retorno confortável para descanso e piscina à tarde. Sem estresse de trânsito ou deslocamento longo.</p>
      )
    },
    {
      id: "pousada-penha-barata",
      title: "Pousada Penha Barata",
      content: (
        <p>A Pousada Vila D'Italia oferece o <Link to="/#why-penha" className="text-secondary font-semibold hover:underline">melhor custo-benefício de Penha SC</Link> — café da manhã incluso, piscina, Wi-Fi, estacionamento e 18 quartos confortáveis com tarifas acessíveis para famílias de todos os perfis. Compare e veja: estrutura completa com preço justo a 5 min do Beto Carrero e passos da praia.</p>
      )
    },
    {
      id: "pousada-penha-pe-na-areia",
      title: "Pousada Penha Pé na Areia",
      content: (
        <p>A Pousada Vila D'Italia é praticamente pé na areia em Penha SC — apenas 80 a 100 metros separam a pousada da <Link to="/#location" className="text-secondary font-semibold hover:underline">Praia da Armação</Link>. Você literalmente sai do quarto, passa pelo jardim e em 2 minutos já está com os pés na areia. Não existe localização mais próxima do mar nessa faixa de preço em Penha.</p>
      )
    },
    {
      id: "recanto-armacao-pousada-penha",
      title: "Recanto Armação Pousada Penha",
      content: (
        <p>Buscando um recanto aconchegante próximo à Praia da Armação em Penha? A Pousada Vila D'Italia fica a metros da Armação, com <Link to="/#amenities" className="text-secondary font-semibold hover:underline">piscina, café da manhã</Link> e ambiente familiar que proporciona o verdadeiro recanto de descanso que você procura. A combinação perfeita de localização, conforto e preço.</p>
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

  const lodgingStructuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Pousada Vila D'Italia",
    "url": "https://www.pousadaviladitalia.com.br",
    "telephone": "+55-47-99273-8090",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "R. Luís Vicente da Silva, 183",
      "addressLocality": "Penha",
      "addressRegion": "SC",
      "postalCode": "88385-000",
      "addressCountry": "BR"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": -26.7729, "longitude": -48.6412 },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Piscina Aquecida" },
      { "@type": "LocationFeatureSpecification", "name": "Café da Manhã Incluso" },
      { "@type": "LocationFeatureSpecification", "name": "Estacionamento Gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Wi-Fi Gratuito" },
      { "@type": "LocationFeatureSpecification", "name": "Jacuzzi" },
      { "@type": "LocationFeatureSpecification", "name": "Academia" },
      { "@type": "LocationFeatureSpecification", "name": "Restaurante" }
    ],
    "numberOfRooms": 18,
    "petsAllowed": false,
    "checkinTime": "14:00",
    "checkoutTime": "12:00",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "8.3",
      "bestRating": "10",
      "ratingCount": "247"
    }
  };

  const categoryLabels: Record<string, string> = {
    reservas: "Reservas e Check-in",
    quartos: "Quartos e Acomodações",
    piscina: "Piscina e Lazer",
    cafe: "Café da Manhã",
    pets: "Famílias e Crianças",
    localizacao: "Localização e Acessos",
    precos: "Preços e Temporadas",
  };

  // Group FAQ by category when showing all
  const groupedFAQ = useMemo(() => {
    if (activeCategory !== "todos" || searchTerm) return null;
    const groups: Record<string, FAQItem[]> = {};
    faqItems.forEach(item => {
      if (!groups[item.category]) groups[item.category] = [];
      groups[item.category].push(item);
    });
    return groups;
  }, [activeCategory, searchTerm]);

  const stats = [
    { value: "42", label: "Perguntas" },
    { value: "18", label: "Quartos" },
    { value: "80m", label: "da Praia" },
    { value: "☕", label: "Café Incluso" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <EnhancedSEO
        title="Pousada Vila D'Italia — Perguntas Frequentes | Penha SC | Perto do Beto Carrero e Praia Armação"
        description="Tire todas as suas dúvidas sobre a Pousada Vila D'Italia em Penha SC: reservas, quartos, café da manhã, piscina, famílias, Beto Carrero World e Praia da Armação. 42 respostas completas."
        canonical="/faq"
        keywords="pousada em penha sc, pousada perto do beto carrero world, pousada praia armacao penha, hospedagem penha sc, pousada penha com piscina, pousada penha cafe da manha incluso, hotel penha sc beto carrero, pousada familia penha sc, onde ficar em penha sc, pousada penha com cafe da manha, reserva pousada penha, penha sc hospedagem barata, pousada penha sc litoral norte"
        structuredData={faqStructuredData}
        breadcrumbs={[
          { name: "Início", url: "/" },
          { name: "Perguntas Frequentes", url: "/faq" }
        ]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #006994 0%, #004A70 100%)" }}>
        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,20 C300,40 600,0 900,20 C1200,40 1200,40 1200,40 L0,40 Z" fill="hsl(var(--background))" />
          </svg>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 animate-fade-in-up">
            Perguntas Frequentes — <br className="hidden md:block" />Pousada Vila D'Italia Penha SC
          </h1>
          <p className="text-lg text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            80m da Praia da Armação | 2,5km do Beto Carrero World
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Buscar sua dúvida..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full h-[50px] pl-12 pr-4 rounded-xl bg-background text-foreground border-0 shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-secondary"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setSearchTerm(""); }}
                  className={`h-[44px] px-4 rounded-full text-sm font-medium flex items-center gap-2 transition-all ${
                    activeCategory === cat.id
                      ? "bg-white text-[#006994] shadow-md"
                      : "bg-white/15 text-white hover:bg-white/25"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {searchTerm && (
            <p className="text-muted-foreground mb-6 text-center">
              {filteredFAQ.length} resultado{filteredFAQ.length !== 1 ? "s" : ""} para "{searchTerm}"
            </p>
          )}

          {groupedFAQ ? (
            // Grouped view
            Object.entries(groupedFAQ).map(([category, items]) => (
              <div key={category} id={category} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className="w-1 h-8 bg-secondary rounded-full" />
                  {categoryLabels[category]}
                </h2>
                <div className="space-y-3">
                  {items.map((item, idx) => {
                    const globalIndex = faqItems.indexOf(item);
                    return (
                      <div
                        key={globalIndex}
                        className={`bg-card rounded-xl border transition-all duration-300 overflow-hidden ${
                          openFAQ === globalIndex
                            ? "border-primary/30 shadow-md"
                            : "border-border hover:border-primary/20 hover:shadow-sm"
                        }`}
                      >
                        <button
                          onClick={() => toggleFAQ(globalIndex)}
                          className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                          aria-expanded={openFAQ === globalIndex}
                        >
                          <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">
                            {item.question}
                          </h3>
                          <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFAQ === globalIndex ? "rotate-180" : ""}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out ${openFAQ === globalIndex ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                          <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50">
                            <p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          ) : (
            // Filtered view
            <div className="space-y-3">
              {filteredFAQ.map((item) => {
                const globalIndex = faqItems.indexOf(item);
                return (
                  <div
                    key={globalIndex}
                    className={`bg-card rounded-xl border transition-all duration-300 overflow-hidden ${
                      openFAQ === globalIndex
                        ? "border-primary/30 shadow-md"
                        : "border-border hover:border-primary/20 hover:shadow-sm"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
                      aria-expanded={openFAQ === globalIndex}
                    >
                      <h3 className="text-base md:text-lg font-semibold text-foreground pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${openFAQ === globalIndex ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`transition-all duration-300 ease-in-out ${openFAQ === globalIndex ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                      <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed pt-4">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
              {filteredFAQ.length === 0 && (
                <div className="text-center py-12">
                  <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg">Nenhuma pergunta encontrada.</p>
                  <p className="text-muted-foreground">Tente outro termo ou fale conosco pelo WhatsApp.</p>
                </div>
              )}
            </div>
          )}

          {/* CTA WhatsApp */}
          <div className="mt-12 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10 border border-primary/10">
            <h3 className="text-2xl font-display font-bold text-foreground mb-3">
              Não encontrou sua resposta?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Fale diretamente com nossa equipe pelo WhatsApp. Estamos prontos para ajudar!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20FAQ%20do%20site%20e%20tenho%20uma%20dúvida" target="_blank" rel="noopener noreferrer">
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

      {/* Related Searches Section */}
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
                  <h3 className="text-base md:text-lg font-bold text-primary">{card.title}</h3>
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openCard === card.id ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"
                  }`}>
                    {openCard === card.id ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>
                <div className={`transition-all duration-400 ease-in-out ${openCard === card.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
                  <div className="px-5 pb-5 border-t border-border/30">
                    <div className="text-muted-foreground leading-relaxed pt-4">{card.content}</div>
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
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Reserve Agora no Site Oficial</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            Garanta as melhores tarifas, sem intermediários. Café da manhã incluso, piscina aquecida, Wi-Fi e estacionamento — tudo a 80m da praia e 5 min do Beto Carrero World.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-secondary hover:bg-secondary-dark text-secondary-foreground text-lg px-8 py-6 gap-2">
                Reserve Pelo Site Oficial
              </Button>
            </a>
            <a href="https://wa.me/5547992738090?text=Olá!%20Vim%20do%20site%20e%20gostaria%20de%20fazer%20uma%20reserva" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white bg-transparent hover:bg-white hover:text-primary text-lg px-8 py-6 gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD LodgingBusiness */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingStructuredData) }} />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default FAQ;
