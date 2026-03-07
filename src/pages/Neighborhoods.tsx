import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PenhaNews from "@/components/PenhaNews";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, ArrowLeft, Home, HelpCircle } from "lucide-react";
import penhaBeach1 from "@/assets/penha-beach-1.webp";
import penhaBeach2 from "@/assets/penha-beach-2.webp";
import penhaBeach3 from "@/assets/penha-beach-3.jpg";
import penhaBeach4 from "@/assets/penha-beach-4.webp";
import penhaBeach5 from "@/assets/penha-beach-5.webp";
import penhaBeach6 from "@/assets/penha-beach-6.webp";
import penhaBeach7 from "@/assets/penha-beach-7.webp";
import penhaBeach8 from "@/assets/penha-beach-8.jpg";
import penhaBeach9 from "@/assets/penha-beach-9.png";
import penhaBeach10 from "@/assets/penha-beach-10.jpg";
import penhaBeach11 from "@/assets/penha-beach-11.jpg";
import penhaBeach12 from "@/assets/penha-beach-12.jpg";
import penhaBeach13 from "@/assets/penha-beach-13.jpg";
import penhaBeach14 from "@/assets/penha-beach-14.jpg";
import penhaBeach15 from "@/assets/penha-beach-15.jpg";
import penhaBeach16 from "@/assets/penha-beach-16.webp";

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  beaches: string[];
  attractions: string[];
  distance: string;
  image?: string;
  faqs?: { question: string; answer: string }[];
  metaTitle?: string;
  metaDescription?: string;
  isOfficial?: boolean;
}

const neighborhoods: Record<string, Neighborhood> = {
  // ===== PRAIAS OFICIAIS (19) =====
  "armacao": {
    id: "armacao",
    name: "Praia da Armação do Itapocorói (Trapiche)",
    description: "A Praia da Armação do Itapocorói, também conhecida como Trapiche, é uma das praias mais centrais e estruturadas de Penha. Com águas calmas, infraestrutura completa e proximidade ao Beto Carrero World, é o local ideal para famílias. A Pousada Vila D'Itália está localizada aqui!",
    highlights: [
      "Proximidade com o Beto Carrero World (5 minutos de carro)",
      "Águas calmas ideais para famílias com crianças",
      "Infraestrutura completa com restaurantes e comércio",
      "Trapiche histórico para passeios",
      "Localização da Pousada Vila D'Itália"
    ],
    beaches: ["Praia da Armação do Itapocorói"],
    attractions: [
      "Beto Carrero World (5 min de carro)",
      "Trapiche histórico",
      "Restaurantes à beira-mar",
      "Feira de artesanato local",
      "Quiosques na orla"
    ],
    distance: "Centro de Penha - 3km",
    image: penhaBeach1,
    metaTitle: "Praia da Armação do Itapocorói (Trapiche) - Penha SC | Guia Completo 2026",
    metaDescription: "Descubra a Praia da Armação do Itapocorói em Penha SC. Águas calmas, perto do Beto Carrero World, infraestrutura completa. Hospede-se na Pousada Vila D'Itália!",
    isOfficial: true,
    faqs: [
      {
        question: "Como chegar na Praia da Armação saindo do Aeroporto de Navegantes?",
        answer: "A Praia da Armação fica a apenas 20 minutos do Aeroporto de Navegantes. Você pode usar táxi, Uber, ou alugar um carro. A rota mais rápida é pela BR-101."
      },
      {
        question: "Qual a distância da Praia da Armação até o Beto Carrero World?",
        answer: "O Beto Carrero World fica em Penha, a apenas 5 minutos de carro (1,5km) da Praia da Armação. A pé são aproximadamente 40 minutos."
      },
      {
        question: "A Praia da Armação tem restaurantes e comércio?",
        answer: "Sim! A Armação possui excelente infraestrutura com diversos restaurantes especializados em frutos do mar, supermercados, farmácias e comércio local completo."
      },
      {
        question: "A Praia da Armação é boa para crianças?",
        answer: "Sim, a Praia da Armação tem águas calmas e rasas, ideal para famílias com crianças. A praia possui boa infraestrutura com quiosques e salva-vidas."
      },
      {
        question: "Onde se hospedar perto da Praia da Armação?",
        answer: "A Pousada Vila D'Itália é uma excelente opção, localizada a poucos passos da Praia da Armação, oferecendo piscinas, estacionamento gratuito e proximidade com todas as atrações."
      }
    ]
  },
  "praia-alegre": {
    id: "praia-alegre",
    name: "Praia Alegre",
    description: "A Praia Alegre faz jus ao seu nome! Com um ambiente descontraído e familiar, oferece águas calmas e uma orla agradável para caminhadas. É perfeita para quem busca tranquilidade sem abrir mão da infraestrutura turística.",
    highlights: [
      "Águas calmas e cristalinas",
      "Ideal para famílias com crianças",
      "Orla com calçadão para caminhadas",
      "Ambiente familiar e tranquilo",
      "Próximo ao centro de Penha"
    ],
    beaches: ["Praia Alegre"],
    attractions: [
      "Orla com calçadão",
      "Quiosques e restaurantes na praia",
      "Área de lazer para crianças",
      "Pesca artesanal"
    ],
    distance: "Centro de Penha - 2km",
    image: penhaBeach2,
    metaTitle: "Praia Alegre - Penha SC | Guia Completo 2026",
    metaDescription: "Conheça a Praia Alegre em Penha SC. Águas calmas, ambiente familiar, orla com calçadão. Ideal para famílias e crianças. Hospede-se na Pousada Vila D'Itália!",
    isOfficial: true,
    faqs: [
      {
        question: "Praia Alegre é boa para banho?",
        answer: "Sim! A Praia Alegre tem águas calmas e limpas, perfeitas para banho. É especialmente recomendada para famílias com crianças devido às ondas suaves."
      },
      {
        question: "Tem estrutura de quiosques na Praia Alegre?",
        answer: "Sim, a praia conta com diversos quiosques oferecendo bebidas, petiscos e refeições, além de aluguel de cadeiras e guarda-sóis."
      },
      {
        question: "Qual a melhor época para visitar Praia Alegre?",
        answer: "A alta temporada vai de dezembro a março, mas Praia Alegre é agradável o ano todo. De abril a novembro você encontra menos movimento e preços mais acessíveis."
      }
    ]
  },
  "praia-grande": {
    id: "praia-grande",
    name: "Praia Grande",
    description: "A Praia Grande é a mais extensa praia de Penha, com uma ampla faixa de areia e mar aberto. Com ondas consistentes, é o point dos surfistas e praticantes de esportes náuticos na região.",
    highlights: [
      "Praia mais extensa de Penha",
      "Mar aberto ideal para surf",
      "Ondas consistentes o ano todo",
      "Ampla faixa de areia",
      "Ótima para esportes náuticos"
    ],
    beaches: ["Praia Grande"],
    attractions: [
      "Surf e bodyboard",
      "Stand-up paddle",
      "Caminhadas na areia",
      "Kitesurf"
    ],
    distance: "Centro de Penha - 1km",
    image: penhaBeach7,
    metaTitle: "Praia Grande - Penha SC | Melhor Praia para Surf 2026",
    metaDescription: "Praia Grande em Penha SC: a melhor praia para surf no litoral catarinense. Mar aberto, ondas consistentes, ampla faixa de areia. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Praia Grande Penha é boa para surf?",
        answer: "Sim! A Praia Grande tem mar aberto com ondas consistentes, sendo uma das melhores praias da região para surf e bodyboard."
      },
      {
        question: "A Praia Grande é segura para banho?",
        answer: "Por ter mar aberto e ondas mais fortes, é mais indicada para banhistas experientes. Para famílias com crianças, recomendamos praias de águas mais calmas como Armação ou Praia Alegre."
      },
      {
        question: "Tem escola de surf na Praia Grande?",
        answer: "Sim, há escolas de surf que oferecem aulas para iniciantes e aluguel de pranchas, principalmente na alta temporada."
      }
    ]
  },
  "quilombo": {
    id: "quilombo",
    name: "Praia do Quilombo",
    description: "A Praia do Quilombo carrega uma história importante: seu nome deriva do período colonial, quando era local de refúgio de escravos. Hoje é uma bela praia preservada, com vista para a Ilha Feia e natureza exuberante.",
    highlights: [
      "Praia histórica e cultural",
      "Natureza preservada",
      "Vista para a Ilha Feia",
      "Águas calmas",
      "Paisagem natural única"
    ],
    beaches: ["Praia do Quilombo"],
    attractions: [
      "Vista para a Ilha Feia",
      "Trilhas ecológicas",
      "História e cultura local",
      "Fotografia de natureza"
    ],
    distance: "Centro de Penha - 4km",
    image: penhaBeach6,
    metaTitle: "Praia do Quilombo - Penha SC | História e Natureza 2026",
    metaDescription: "Conheça a Praia do Quilombo em Penha SC. Praia histórica com natureza preservada e vista para a Ilha Feia. Guia completo com dicas e informações!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a Praia do Quilombo tem esse nome?",
        answer: "O nome Quilombo deriva do período colonial brasileiro, quando era local de refúgio de escravos fugidos. O local preserva essa memória histórica importante."
      },
      {
        question: "O que é a Ilha Feia próxima à Praia do Quilombo?",
        answer: "A Ilha Feia é uma ilha costeira próxima, com vegetação de Mata Atlântica preservada. Apesar do nome, oferece belas paisagens e é local de interesse ecológico."
      },
      {
        question: "A Praia do Quilombo tem infraestrutura?",
        answer: "A infraestrutura é limitada devido ao caráter preservado da praia. Recomenda-se levar água, lanches e protetor solar."
      }
    ]
  },
  "praia-vermelha": {
    id: "praia-vermelha",
    name: "Praia Vermelha",
    description: "Apesar do nome, a Praia Vermelha possui areia fina e clara. É uma praia menos conhecida pelos turistas, o que garante mais tranquilidade. Na maré baixa, formam-se belas piscinas naturais entre as rochas.",
    highlights: [
      "Areia fina e clara",
      "Piscinas naturais na maré baixa",
      "Menos turística e mais tranquila",
      "Formações rochosas interessantes",
      "Ideal para fotografia"
    ],
    beaches: ["Praia Vermelha"],
    attractions: [
      "Piscinas naturais (maré baixa)",
      "Formações rochosas",
      "Trilhas costeiras",
      "Observação da vida marinha"
    ],
    distance: "Centro de Penha - 7km",
    image: penhaBeach8,
    metaTitle: "Praia Vermelha - Penha SC | Piscinas Naturais 2026",
    metaDescription: "Praia Vermelha em Penha SC: areia fina, piscinas naturais na maré baixa, tranquilidade. Praia menos turística ideal para relaxar. Guia completo!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a Praia Vermelha tem esse nome?",
        answer: "Apesar do nome, a Praia Vermelha possui areia fina e clara. O nome histórico pode estar relacionado a características geológicas antigas ou à cor das rochas em certos pontos."
      },
      {
        question: "Tem piscinas naturais na Praia Vermelha?",
        answer: "Sim! Durante a maré baixa, formam-se belas piscinas naturais entre as formações rochosas, perfeitas para banho e observação da vida marinha."
      },
      {
        question: "A Praia Vermelha é boa para fotografia?",
        answer: "Excelente! A areia fina, formações rochosas e o contraste com o mar azul criam cenários únicos para fotografia."
      }
    ]
  },
  "poa": {
    id: "poa",
    name: "Praia do Poá",
    description: "A Praia do Poá é uma das praias mais desertas e preservadas de Penha. Sem infraestrutura turística, é o refúgio perfeito para quem busca contato total com a natureza e tranquilidade absoluta.",
    highlights: [
      "Praia deserta e preservada",
      "Contato direto com a natureza",
      "Sem infraestrutura turística",
      "Paisagem intocada",
      "Ideal para meditação e relaxamento"
    ],
    beaches: ["Praia do Poá"],
    attractions: [
      "Contemplação da natureza",
      "Caminhadas na areia",
      "Paisagens preservadas",
      "Fotografia de natureza"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach5,
    metaTitle: "Praia do Poá - Penha SC | Praia Deserta e Preservada 2026",
    metaDescription: "Praia do Poá em Penha SC: uma das praias mais desertas do litoral catarinense. Natureza preservada, tranquilidade total. Guia completo!",
    isOfficial: true,
    faqs: [
      {
        question: "A Praia do Poá tem estrutura de quiosques?",
        answer: "Não, a Praia do Poá é uma praia sem infraestrutura turística. É uma das praias mais desertas de Penha, ideal para quem busca tranquilidade total."
      },
      {
        question: "O que levar para a Praia do Poá?",
        answer: "Como não há infraestrutura, leve água, lanches, protetor solar, cadeira e guarda-sol. Esteja preparado para aproveitar a tranquilidade do local."
      },
      {
        question: "A Praia do Poá é de fácil acesso?",
        answer: "O acesso requer um pouco mais de esforço, mas a recompensa é uma praia praticamente deserta e preservada."
      }
    ]
  },
  "cancela": {
    id: "cancela",
    name: "Praia da Cancela",
    description: "A Praia da Cancela é uma pequena enseada em Penha, conhecida por sua tranquilidade e águas calmas. O nome deriva de uma antiga cancela que controlava o acesso ao local. Ideal para quem busca sossego.",
    highlights: [
      "Pequena enseada tranquila",
      "Águas calmas e rasas",
      "Menos movimentada",
      "Ambiente familiar",
      "Boa para relaxar"
    ],
    beaches: ["Praia da Cancela"],
    attractions: [
      "Banho de mar tranquilo",
      "Contemplação",
      "Pesca de linha",
      "Caminhadas"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach9,
    metaTitle: "Praia da Cancela - Penha SC | Enseada Tranquila 2026",
    metaDescription: "Praia da Cancela em Penha SC: pequena enseada com águas calmas e tranquilidade. Ideal para relaxar em família. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Cancela?",
        answer: "O nome deriva de uma antiga cancela (porteira) que existia no acesso ao local, controlando a passagem para essa área."
      },
      {
        question: "A Praia da Cancela é boa para crianças?",
        answer: "Sim! Por ter águas calmas e rasas, é uma ótima opção para famílias com crianças pequenas."
      },
      {
        question: "Tem infraestrutura na Praia da Cancela?",
        answer: "A infraestrutura é básica. Recomenda-se trazer o necessário como água, lanches e protetor solar."
      }
    ]
  },
  "cascalho": {
    id: "cascalho",
    name: "Praia do Cascalho",
    description: "A Praia do Cascalho recebe esse nome devido às pequenas pedras que compõem parte de sua orla. É uma praia pitoresca e menos frequentada, ideal para quem gosta de paisagens diferentes e tranquilidade.",
    highlights: [
      "Paisagem diferenciada com cascalhos",
      "Praia menos frequentada",
      "Águas limpas",
      "Formações rochosas",
      "Ideal para contemplação"
    ],
    beaches: ["Praia do Cascalho"],
    attractions: [
      "Paisagem única",
      "Fotografia",
      "Caminhadas",
      "Contemplação da natureza"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach10,
    metaTitle: "Praia do Cascalho - Penha SC | Paisagem Única 2026",
    metaDescription: "Praia do Cascalho em Penha SC: paisagem diferenciada com pedras e cascalhos. Praia tranquila e pitoresca. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Cascalho?",
        answer: "O nome vem das pequenas pedras e cascalhos que compõem parte de sua orla, criando uma paisagem diferenciada das outras praias de areia."
      },
      {
        question: "A Praia do Cascalho é boa para banho?",
        answer: "É possível banhar-se, mas a presença de cascalhos requer atenção. Recomenda-se usar calçados apropriados para água."
      },
      {
        question: "Tem comércio na Praia do Cascalho?",
        answer: "A infraestrutura é mínima. Traga tudo que precisar para seu dia de praia."
      }
    ]
  },
  "saudade": {
    id: "saudade",
    name: "Praia da Saudade",
    description: "A Praia da Saudade tem um nome poético que reflete sua atmosfera nostálgica e tranquila. É uma praia pequena e acolhedora, perfeita para momentos de reflexão e descanso longe do agito.",
    highlights: [
      "Atmosfera tranquila e nostálgica",
      "Praia pequena e acolhedora",
      "Ideal para reflexão",
      "Poucas aglomerações",
      "Contato com a natureza"
    ],
    beaches: ["Praia da Saudade"],
    attractions: [
      "Contemplação do mar",
      "Momentos de reflexão",
      "Fotografias poéticas",
      "Caminhadas tranquilas"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach11,
    metaTitle: "Praia da Saudade - Penha SC | Tranquilidade e Paz 2026",
    metaDescription: "Praia da Saudade em Penha SC: praia pequena e tranquila, ideal para reflexão e descanso. Atmosfera nostálgica e acolhedora. Guia 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Saudade?",
        answer: "O nome poético reflete a atmosfera nostálgica e tranquila do local, ideal para momentos de reflexão e contemplação."
      },
      {
        question: "A Praia da Saudade é movimentada?",
        answer: "Não, é uma das praias mais tranquilas de Penha, perfeita para quem busca paz e sossego."
      },
      {
        question: "Tem estrutura na Praia da Saudade?",
        answer: "A infraestrutura é básica. Leve o necessário para passar o dia com conforto."
      }
    ]
  },
  "bacia-da-vovo": {
    id: "bacia-da-vovo",
    name: "Praia da Bacia da Vovó",
    description: "A Praia da Bacia da Vovó tem um nome carinhoso que reflete sua atmosfera acolhedora. Possui certificação Bandeira Azul de qualidade ambiental, garantindo águas limpas e bem cuidadas. Ideal para famílias!",
    highlights: [
      "Certificação Bandeira Azul",
      "Águas cristalinas e limpas",
      "Ambiente familiar acolhedor",
      "Natureza preservada",
      "Qualidade ambiental certificada"
    ],
    beaches: ["Praia da Bacia da Vovó"],
    attractions: [
      "Banho em águas certificadas",
      "Trilhas ecológicas",
      "Mirantes naturais",
      "Pesca de arremesso"
    ],
    distance: "Centro de Penha - 4km",
    image: penhaBeach3,
    metaTitle: "Praia da Bacia da Vovó - Penha SC | Bandeira Azul 2026",
    metaDescription: "Praia da Bacia da Vovó em Penha SC: certificação Bandeira Azul de qualidade ambiental. Águas cristalinas, ambiente familiar. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "O que é a Bandeira Azul da Bacia da Vovó?",
        answer: "A Bandeira Azul é uma certificação internacional que atesta qualidade ambiental, água limpa, boa gestão e infraestrutura adequada."
      },
      {
        question: "Por que a praia se chama Bacia da Vovó?",
        answer: "O nome carinhoso reflete a atmosfera acolhedora do local, como se fosse um abraço de avó. É uma praia tranquila e familiar."
      },
      {
        question: "Bacia da Vovó é muito movimentada?",
        answer: "É uma das praias mais tranquilas de Penha, ideal para quem busca sossego e contato com a natureza em um ambiente certificado."
      }
    ]
  },
  "fortaleza": {
    id: "fortaleza",
    name: "Praia da Fortaleza",
    description: "A Praia da Fortaleza recebe esse nome por sua proximidade com antigas estruturas defensivas da região. É uma praia com boa estrutura e águas agradáveis, combinando história e lazer.",
    highlights: [
      "Histórico defensivo da região",
      "Boa infraestrutura",
      "Águas agradáveis para banho",
      "Paisagem cênica",
      "Combinação de história e lazer"
    ],
    beaches: ["Praia da Fortaleza"],
    attractions: [
      "História local",
      "Banho de mar",
      "Quiosques",
      "Passeios culturais"
    ],
    distance: "Centro de Penha - 3km",
    image: penhaBeach12,
    metaTitle: "Praia da Fortaleza - Penha SC | História e Lazer 2026",
    metaDescription: "Praia da Fortaleza em Penha SC: praia com história e boa infraestrutura. Águas agradáveis e paisagem cênica. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Fortaleza?",
        answer: "O nome deriva de antigas estruturas defensivas que existiam na região durante o período colonial."
      },
      {
        question: "A Praia da Fortaleza tem infraestrutura?",
        answer: "Sim, possui boa estrutura com quiosques e fácil acesso, sendo uma das praias mais bem equipadas de Penha."
      },
      {
        question: "É uma praia boa para famílias?",
        answer: "Sim! As águas são agradáveis e a infraestrutura facilita o dia de praia com crianças."
      }
    ]
  },
  "manguinho": {
    id: "manguinho",
    name: "Praia do Manguinho",
    description: "A Praia do Manguinho é conhecida pela presença de manguezais em seu entorno, criando um ecossistema rico e diversificado. É ideal para quem gosta de observar a natureza e a vida marinha.",
    highlights: [
      "Proximidade com manguezais",
      "Ecossistema rico e diversificado",
      "Ideal para observação da natureza",
      "Vida marinha abundante",
      "Ambiente preservado"
    ],
    beaches: ["Praia do Manguinho"],
    attractions: [
      "Observação de manguezais",
      "Vida marinha",
      "Fotografia de natureza",
      "Trilhas ecológicas"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach13,
    metaTitle: "Praia do Manguinho - Penha SC | Manguezais e Natureza 2026",
    metaDescription: "Praia do Manguinho em Penha SC: natureza preservada com manguezais. Ecossistema rico, ideal para observação da natureza. Guia 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Manguinho?",
        answer: "O nome vem dos manguezais presentes em seu entorno, criando um ecossistema único e biodiverso."
      },
      {
        question: "É possível ver animais na Praia do Manguinho?",
        answer: "Sim! Os manguezais abrigam diversas espécies de caranguejos, aves e peixes, tornando o local ideal para observação da natureza."
      },
      {
        question: "A praia é boa para banho?",
        answer: "É mais indicada para contemplação e observação da natureza devido à proximidade com os manguezais."
      }
    ]
  },
  "monge": {
    id: "monge",
    name: "Praia do Monge",
    description: "A Praia do Monge é envolta em lendas locais sobre um monge que teria habitado a região. É uma praia mística e tranquila, com formações rochosas interessantes e atmosfera de paz.",
    highlights: [
      "Lendas e misticismo local",
      "Formações rochosas únicas",
      "Atmosfera de paz e tranquilidade",
      "Praia pouco frequentada",
      "Paisagem contemplativa"
    ],
    beaches: ["Praia do Monge"],
    attractions: [
      "Lendas locais",
      "Formações rochosas",
      "Contemplação",
      "Fotografia"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach14,
    metaTitle: "Praia do Monge - Penha SC | Lendas e Misticismo 2026",
    metaDescription: "Praia do Monge em Penha SC: praia mística envolta em lendas. Formações rochosas, tranquilidade e atmosfera única. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Monge?",
        answer: "Lendas locais contam sobre um monge que teria habitado a região, dando à praia uma atmosfera mística e contemplativa."
      },
      {
        question: "A Praia do Monge é movimentada?",
        answer: "Não, é uma das praias mais tranquilas e pouco frequentadas de Penha, ideal para quem busca paz."
      },
      {
        question: "Tem infraestrutura na Praia do Monge?",
        answer: "A infraestrutura é mínima. Traga tudo que precisar para seu dia contemplativo."
      }
    ]
  },
  "lucas": {
    id: "lucas",
    name: "Praia do Lucas",
    description: "A Praia do Lucas é uma pequena enseada que leva o nome de um antigo morador da região. É um recanto tranquilo, ideal para quem busca fugir das praias mais movimentadas.",
    highlights: [
      "Pequena enseada acolhedora",
      "Nome de morador histórico",
      "Ambiente tranquilo e reservado",
      "Águas calmas",
      "Ideal para relaxar"
    ],
    beaches: ["Praia do Lucas"],
    attractions: [
      "Banho tranquilo",
      "Pesca de linha",
      "Contemplação",
      "Caminhadas"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach15,
    metaTitle: "Praia do Lucas - Penha SC | Enseada Tranquila 2026",
    metaDescription: "Praia do Lucas em Penha SC: pequena enseada tranquila e acolhedora. Águas calmas, ideal para relaxar. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Lucas?",
        answer: "O nome homenageia um antigo morador da região que vivia próximo a essa enseada."
      },
      {
        question: "A Praia do Lucas é de fácil acesso?",
        answer: "O acesso pode requerer uma pequena caminhada, mas a tranquilidade do local compensa."
      },
      {
        question: "Tem comércio na Praia do Lucas?",
        answer: "Não há infraestrutura comercial. Leve tudo que precisar para seu dia de praia."
      }
    ]
  },
  "sao-miguel": {
    id: "sao-miguel",
    name: "Praia de São Miguel",
    description: "A Praia de São Miguel é um bairro tranquilo e residencial de Penha, que oferece uma atmosfera pacata e familiar. Ideal para quem busca descanso em uma comunidade acolhedora.",
    highlights: [
      "Ambiente residencial tranquilo",
      "Comunidade familiar acolhedora",
      "Menos movimento turístico",
      "Praia calma e agradável",
      "Comércio local autêntico"
    ],
    beaches: ["Praia de São Miguel"],
    attractions: [
      "Capela de São Miguel",
      "Pequenos mercados locais",
      "Restaurantes familiares",
      "Pesca artesanal"
    ],
    distance: "Centro de Penha - 8km",
    image: penhaBeach4,
    metaTitle: "Praia de São Miguel - Penha SC | Tranquilidade Familiar 2026",
    metaDescription: "Praia de São Miguel em Penha SC: bairro tranquilo e familiar. Atmosfera pacata, comunidade acolhedora. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "São Miguel é um bairro tranquilo?",
        answer: "Sim, é um dos bairros mais tranquilos de Penha, com perfil residencial e familiar."
      },
      {
        question: "Tem comércio em São Miguel?",
        answer: "Sim, há pequenos mercados, padarias e restaurantes familiares que atendem moradores e visitantes."
      },
      {
        question: "São Miguel é longe do centro de Penha?",
        answer: "Fica a 8km do centro, cerca de 15 minutos de carro. Ótima opção para tranquilidade com acesso rápido às atrações."
      }
    ]
  },
  "gravata": {
    id: "gravata",
    name: "Praia do Gravatá",
    description: "A Praia do Gravatá (trecho de Penha) é conhecida pela vegetação de restinga e bromélias que dão nome ao local. É uma praia de beleza natural singular, ainda pouco explorada pelo turismo.",
    highlights: [
      "Vegetação de restinga preservada",
      "Bromélias características",
      "Beleza natural singular",
      "Pouco explorada pelo turismo",
      "Ideal para ecoturismo"
    ],
    beaches: ["Praia do Gravatá"],
    attractions: [
      "Observação de bromélias",
      "Vegetação de restinga",
      "Ecoturismo",
      "Fotografia de natureza"
    ],
    distance: "Centro de Penha - 7km",
    image: penhaBeach16,
    metaTitle: "Praia do Gravatá - Penha SC | Restinga e Natureza 2026",
    metaDescription: "Praia do Gravatá em Penha SC: vegetação de restinga, bromélias e natureza preservada. Praia ideal para ecoturismo. Guia 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Gravatá?",
        answer: "O nome vem das bromélias gravatás que são abundantes na vegetação de restinga da região."
      },
      {
        question: "A Praia do Gravatá é boa para ecoturismo?",
        answer: "Sim! A vegetação preservada de restinga e a presença de bromélias tornam o local ideal para observação da natureza."
      },
      {
        question: "Tem infraestrutura na Praia do Gravatá?",
        answer: "A infraestrutura é mínima, preservando o caráter natural do local. Venha preparado."
      }
    ]
  },
  "paciencia": {
    id: "paciencia",
    name: "Praia da Paciência",
    description: "A Praia da Paciência é considerada uma das menores praias do Brasil! Um local rústico e autêntico, sem infraestrutura turística, perfeito para quem busca paz absoluta e contato genuíno com a natureza.",
    highlights: [
      "Uma das menores praias do Brasil",
      "Ambiente completamente rústico",
      "Sem infraestrutura turística",
      "Contato genuíno com a natureza",
      "Local único e autêntico"
    ],
    beaches: ["Praia da Paciência"],
    attractions: [
      "Contemplação da natureza",
      "Fotografias únicas",
      "Momentos de paz",
      "Experiência autêntica"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach5,
    metaTitle: "Praia da Paciência - Penha SC | Uma das Menores do Brasil 2026",
    metaDescription: "Praia da Paciência em Penha SC: uma das menores praias do Brasil! Ambiente rústico, natureza preservada, paz absoluta. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "A Praia da Paciência tem restaurantes?",
        answer: "Não, é uma praia sem qualquer infraestrutura turística. Leve água, lanches e tudo que precisar."
      },
      {
        question: "Por que visitar a Praia da Paciência?",
        answer: "Para vivenciar uma das menores praias do Brasil em um ambiente completamente natural, ideal para paz e contemplação."
      },
      {
        question: "É realmente uma das menores praias do Brasil?",
        answer: "Sim! A Praia da Paciência é reconhecida como uma das menores praias do país, tornando-a uma experiência única."
      }
    ]
  },
  "cordas": {
    id: "cordas",
    name: "Praia do Cordas",
    description: "A Praia do Cordas recebe esse nome pela antiga prática de pesca com cordas na região. É uma praia rústica e tranquila, mantendo as tradições pesqueiras locais vivas.",
    highlights: [
      "Tradição pesqueira local",
      "Ambiente rústico e autêntico",
      "Praia tranquila",
      "Cultura local preservada",
      "Ideal para quem gosta de pesca"
    ],
    beaches: ["Praia do Cordas"],
    attractions: [
      "Pesca artesanal",
      "Tradições locais",
      "Contemplação",
      "Contato com pescadores"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach9,
    metaTitle: "Praia do Cordas - Penha SC | Tradição Pesqueira 2026",
    metaDescription: "Praia do Cordas em Penha SC: tradição pesqueira, ambiente rústico e tranquilo. Cultura local preservada. Guia completo 2026!",
    isOfficial: true,
    faqs: [
      {
        question: "Por que a praia se chama Cordas?",
        answer: "O nome vem da antiga tradição de pesca com cordas praticada pelos pescadores locais."
      },
      {
        question: "É possível ver pescadores na Praia do Cordas?",
        answer: "Sim! A praia mantém as tradições pesqueiras, e é comum encontrar pescadores artesanais trabalhando."
      },
      {
        question: "Tem infraestrutura na Praia do Cordas?",
        answer: "A infraestrutura é básica, mantendo o caráter rústico e tradicional do local."
      }
    ]
  },

  // ===== ENSEADAS E TRECHOS LOCAIS =====
  "retiro": {
    id: "retiro",
    name: "Praia do Retiro",
    description: "A Praia do Retiro é um trecho de praia reconhecido por moradores e frequentadores como um local de refúgio e descanso. Ideal para quem busca se afastar do movimento e encontrar paz.",
    highlights: [
      "Refúgio tranquilo",
      "Reconhecida por moradores locais",
      "Ambiente de descanso",
      "Pouco movimento",
      "Natureza preservada"
    ],
    beaches: ["Praia do Retiro"],
    attractions: [
      "Descanso e relaxamento",
      "Contemplação",
      "Caminhadas tranquilas"
    ],
    distance: "Centro de Penha - 7km",
    image: penhaBeach10,
    metaTitle: "Praia do Retiro - Penha SC | Refúgio Tranquilo 2026",
    metaDescription: "Praia do Retiro em Penha SC: refúgio tranquilo reconhecido por moradores. Ideal para descanso e paz. Guia 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "Por que a praia se chama Retiro?",
        answer: "O nome reflete o caráter do local como um refúgio para quem busca se afastar do movimento e descansar."
      },
      {
        question: "A Praia do Retiro é oficial?",
        answer: "É um trecho reconhecido por moradores e frequentadores locais, embora não conste nos guias turísticos oficiais."
      }
    ]
  },
  "farol": {
    id: "farol",
    name: "Praia do Farol",
    description: "A Praia do Farol recebe esse nome pela proximidade com um farol da região. É um trecho de praia com vista privilegiada e atmosfera marítima autêntica.",
    highlights: [
      "Vista para o farol",
      "Atmosfera marítima autêntica",
      "Paisagem privilegiada",
      "Ideal para fotografia",
      "Trecho reconhecido localmente"
    ],
    beaches: ["Praia do Farol"],
    attractions: [
      "Vista do farol",
      "Fotografia",
      "Contemplação do mar"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach11,
    metaTitle: "Praia do Farol - Penha SC | Vista Privilegiada 2026",
    metaDescription: "Praia do Farol em Penha SC: vista para o farol, atmosfera marítima autêntica. Paisagem privilegiada. Guia 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "Por que a praia se chama Farol?",
        answer: "O nome vem da proximidade com um farol que orienta a navegação na região."
      },
      {
        question: "É possível visitar o farol?",
        answer: "Depende das condições de acesso e regulamentação local. Consulte informações atualizadas ao visitar."
      }
    ]
  },
  "pescadores": {
    id: "pescadores",
    name: "Praia dos Pescadores",
    description: "A Praia dos Pescadores é onde a comunidade pesqueira de Penha desenvolve suas atividades tradicionais. É possível ver barcos coloridos, redes de pesca e vivenciar a cultura local.",
    highlights: [
      "Comunidade pesqueira ativa",
      "Barcos coloridos tradicionais",
      "Cultura local autêntica",
      "Redes de pesca artesanal",
      "Frutos do mar frescos"
    ],
    beaches: ["Praia dos Pescadores"],
    attractions: [
      "Observar pescadores",
      "Comprar peixe fresco",
      "Cultura tradicional",
      "Fotografia documental"
    ],
    distance: "Centro de Penha - 2km",
    image: penhaBeach12,
    metaTitle: "Praia dos Pescadores - Penha SC | Cultura Pesqueira 2026",
    metaDescription: "Praia dos Pescadores em Penha SC: comunidade pesqueira ativa, barcos coloridos, cultura local. Compre peixe fresco! Guia 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "Posso comprar peixe fresco na Praia dos Pescadores?",
        answer: "Sim! Os pescadores locais vendem peixes e frutos do mar frescos diretamente de suas embarcações."
      },
      {
        question: "É possível passear de barco?",
        answer: "Alguns pescadores oferecem passeios de barco. Negocie diretamente com eles no local."
      }
    ]
  },
  "fundinho": {
    id: "fundinho",
    name: "Praia do Fundinho",
    description: "A Praia do Fundinho é uma pequena enseada conhecida pelos moradores locais. O nome carinhoso reflete seu tamanho compacto e atmosfera intimista.",
    highlights: [
      "Pequena enseada acolhedora",
      "Conhecida por moradores",
      "Atmosfera intimista",
      "Águas calmas",
      "Tranquilidade total"
    ],
    beaches: ["Praia do Fundinho"],
    attractions: [
      "Banho tranquilo",
      "Contemplação",
      "Relaxamento"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach13,
    metaTitle: "Praia do Fundinho - Penha SC | Enseada Intimista 2026",
    metaDescription: "Praia do Fundinho em Penha SC: pequena enseada intimista conhecida por moradores. Águas calmas e tranquilidade. Guia 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "Por que a praia se chama Fundinho?",
        answer: "O nome carinhoso reflete o tamanho compacto e a atmosfera intimista desta pequena enseada."
      },
      {
        question: "A Praia do Fundinho é de fácil acesso?",
        answer: "O acesso pode requerer conhecimento local. Pergunte aos moradores a melhor forma de chegar."
      }
    ]
  },
  "mirante": {
    id: "mirante",
    name: "Praia do Mirante",
    description: "A Praia do Mirante oferece uma das vistas mais bonitas de Penha. É um trecho de praia conhecido por surfistas e moradores, com paisagem privilegiada para contemplação.",
    highlights: [
      "Vista panorâmica espetacular",
      "Conhecida por surfistas",
      "Paisagem para contemplação",
      "Ideal para fotografia",
      "Pôr do sol inesquecível"
    ],
    beaches: ["Praia do Mirante"],
    attractions: [
      "Vista panorâmica",
      "Fotografia",
      "Surf (em certas condições)",
      "Pôr do sol"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach14,
    metaTitle: "Praia do Mirante - Penha SC | Vista Panorâmica 2026",
    metaDescription: "Praia do Mirante em Penha SC: uma das vistas mais bonitas do litoral! Paisagem panorâmica, ideal para fotografia. Guia 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "Por que a praia se chama Mirante?",
        answer: "O nome vem da vista panorâmica espetacular que o local oferece, permitindo contemplar grande parte do litoral."
      },
      {
        question: "Qual o melhor horário para visitar?",
        answer: "O pôr do sol é especialmente bonito no Mirante, criando um espetáculo de cores inesquecível."
      }
    ]
  },
  "costao-quilombo": {
    id: "costao-quilombo",
    name: "Praia do Costão do Quilombo",
    description: "A Praia do Costão do Quilombo é um trecho rochoso adjacente à Praia do Quilombo. Conhecida por surfistas e pescadores, oferece formações rochosas impressionantes e ondas para os mais experientes.",
    highlights: [
      "Formações rochosas impressionantes",
      "Adjacente à Praia do Quilombo",
      "Ondas para surfistas experientes",
      "Pesca de costeira",
      "Paisagem dramática"
    ],
    beaches: ["Praia do Costão do Quilombo"],
    attractions: [
      "Surf (avançado)",
      "Pesca de costeira",
      "Formações rochosas",
      "Fotografia"
    ],
    distance: "Centro de Penha - 4km",
    image: penhaBeach15,
    metaTitle: "Praia do Costão do Quilombo - Penha SC | Surf e Rochas 2026",
    metaDescription: "Praia do Costão do Quilombo em Penha SC: formações rochosas, surf para experientes, pesca de costeira. Guia completo 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "O Costão do Quilombo é bom para surf?",
        answer: "Sim, mas é recomendado para surfistas experientes devido às formações rochosas e condições mais desafiadoras."
      },
      {
        question: "Qual a relação com a Praia do Quilombo?",
        answer: "É um trecho rochoso adjacente à Praia do Quilombo, formando uma continuidade geográfica."
      }
    ]
  },
  "canto-armacao": {
    id: "canto-armacao",
    name: "Praia do Canto da Armação",
    description: "A Praia do Canto da Armação é um trecho tranquilo no extremo da Praia da Armação. Conhecida por moradores e frequentadores assíduos, oferece mais sossego que a área central.",
    highlights: [
      "Trecho mais tranquilo da Armação",
      "Conhecida por moradores",
      "Menos movimento",
      "Águas calmas",
      "Pesca de linha"
    ],
    beaches: ["Praia do Canto da Armação"],
    attractions: [
      "Banho tranquilo",
      "Pesca de linha",
      "Menos aglomeração",
      "Contemplação"
    ],
    distance: "Centro de Penha - 3km",
    image: penhaBeach16,
    metaTitle: "Praia do Canto da Armação - Penha SC | Tranquilidade 2026",
    metaDescription: "Praia do Canto da Armação em Penha SC: trecho tranquilo da Armação, menos movimento, águas calmas. Guia completo 2026!",
    isOfficial: false,
    faqs: [
      {
        question: "O Canto da Armação é diferente da Praia da Armação?",
        answer: "É um trecho específico no extremo da Praia da Armação, geralmente mais tranquilo e menos movimentado."
      },
      {
        question: "É bom para famílias?",
        answer: "Sim! Por ser mais calmo e com menos movimento, é uma excelente opção para famílias que buscam sossego."
      }
    ]
  }
};

const Neighborhoods = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  if (slug && neighborhoods[slug]) {
    const neighborhood = neighborhoods[slug];
    
    return (
      <div className="min-h-screen">
        <EnhancedSEO
          title={neighborhood.metaTitle || `${neighborhood.name} - Penha SC`}
          description={neighborhood.metaDescription || neighborhood.description}
          canonical={`/bairros-penha/${slug}`}
          type="place"
          image={typeof neighborhood.image === 'string' ? neighborhood.image : undefined}
          keywords={`${neighborhood.name}, praia penha sc, praias santa catarina, litoral catarinense, turismo penha, pousada penha sc, hospedagem penha`}
          breadcrumbs={[
            { name: "Home", url: "/" },
            { name: "Praias de Penha", url: "/bairros-penha" },
            { name: neighborhood.name, url: `/bairros-penha/${slug}` }
          ]}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Beach",
            "name": neighborhood.name,
            "description": neighborhood.description,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Penha",
              "addressRegion": "SC",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-26.7729",
              "longitude": "-48.6412"
            },
            "touristType": "Famílias, Casais, Turistas",
            "containedInPlace": {
              "@type": "City",
              "name": "Penha",
              "containedInPlace": {
                "@type": "State",
                "name": "Santa Catarina"
              }
            }
          }}
        />
        <Navigation />
        <main className="pt-24">
          <article className="container mx-auto px-4 py-12 max-w-5xl">
            <Button
              variant="outline"
              onClick={() => navigate("/bairros-penha")}
              className="mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Praias
            </Button>

            {neighborhood.image && (
              <div className="mb-8 rounded-2xl overflow-hidden shadow-hover">
                <img 
                  src={neighborhood.image} 
                  alt={`${neighborhood.name} - Praia em Penha SC`}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            )}

            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                {neighborhood.isOfficial ? (
                  <span className="bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full">
                    ✓ Praia Oficial
                  </span>
                ) : (
                  <span className="bg-muted text-muted-foreground text-sm font-medium px-3 py-1 rounded-full">
                    Enseada/Trecho Local
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                {neighborhood.name}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>{neighborhood.distance}</span>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-foreground leading-relaxed mb-8">
                {neighborhood.description}
              </p>

              <Card className="p-8 mb-8 bg-accent/5">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Destaques</h2>
                <ul className="space-y-2">
                  {neighborhood.highlights.map((highlight, index) => (
                    <li key={index} className="text-foreground">✓ {highlight}</li>
                  ))}
                </ul>
              </Card>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">🏖️ Praias</h3>
                  <ul className="space-y-2">
                    {neighborhood.beaches.map((beach, index) => (
                      <li key={index} className="text-foreground">{beach}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">📍 Atrações</h3>
                  <ul className="space-y-2">
                    {neighborhood.attractions.map((attraction, index) => (
                      <li key={index} className="text-foreground">{attraction}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            {/* FAQs Section - Structured Data for SEO */}
            {neighborhood.faqs && neighborhood.faqs.length > 0 && (
              <div className="mt-12 mb-12">
                <Card className="p-8 bg-accent/5">
                  <div className="flex items-center gap-3 mb-6">
                    <HelpCircle className="w-8 h-8 text-primary" />
                    <h2 className="text-3xl font-bold text-foreground">Perguntas Frequentes sobre {neighborhood.name}</h2>
                  </div>
                  <Accordion type="single" collapsible className="w-full">
                    {neighborhood.faqs.map((faq, index) => (
                      <AccordionItem key={index} value={`faq-${index}`}>
                        <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </Card>
              </div>
            )}

            {/* JSON-LD Structured Data for FAQs */}
            {neighborhood.faqs && neighborhood.faqs.length > 0 && (
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": neighborhood.faqs.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  })
                }}
              />
            )}

            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Hospede-se na Pousada Vila D'Itália</h3>
                <p className="text-lg mb-6">
                  Localizada na Armação, próxima a todas as 25 praias de Penha!
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="cta"
                    asChild
                  >
                    <a
                      href="https://book.omnibees.com/hotel/18988"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reserve sua Estadia
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => navigate("/")}
                  >
                    <Home className="mr-2 h-4 w-4" />
                    Página Inicial
                  </Button>
                </div>
              </div>
            </div>
          </article>
        </main>
        <Footer />
        <FloatingButtons />
        <ScrollToTop />
      </div>
    );
  }

  // Lista de todas as praias
  const officialBeaches = Object.values(neighborhoods).filter(n => n.isOfficial);
  const localBeaches = Object.values(neighborhoods).filter(n => !n.isOfficial);

  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="25 Praias de Penha SC - Guia Completo 2026"
        description="Guia completo das 25 praias de Penha SC. Conheca cada praia, atracoes, dicas e hospede-se na Pousada Vila D'Italia perto do Beto Carrero World!"
        canonical="/bairros-penha"
        keywords="praias penha sc, litoral santa catarina, praia armacao, praia grande penha, beto carrero world, turismo penha"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Praias de Penha", url: "/bairros-penha" }
        ]}
      />
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  As 25 Praias de Penha - Santa Catarina
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                  Guia completo de todas as praias e enseadas que tornam Penha um destino único no litoral catarinense
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                    ✓ 19 Praias Oficiais
                  </span>
                  <span className="bg-muted text-muted-foreground px-4 py-2 rounded-full">
                    + 6 Enseadas e Trechos Locais
                  </span>
                </div>
              </div>

              {/* Praias Oficiais */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <span className="text-primary">🏖️</span> Praias Oficiais de Penha
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {officialBeaches.map((neighborhood) => (
                    <Card
                      key={neighborhood.id}
                      className="overflow-hidden hover:shadow-hover transition-shadow cursor-pointer group"
                      onClick={() => navigate(`/bairros-penha/${neighborhood.id}`)}
                    >
                      {neighborhood.image && (
                        <div className="h-48 overflow-hidden">
                          <img
                            src={neighborhood.image}
                            alt={neighborhood.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {neighborhood.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {neighborhood.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{neighborhood.distance}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Enseadas e Trechos Locais */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                  <span>🌊</span> Enseadas e Trechos Locais
                </h2>
                <p className="text-muted-foreground mb-8">
                  Praias e trechos reconhecidos por moradores, surfistas e operadores de turismo local
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {localBeaches.map((neighborhood) => (
                    <Card
                      key={neighborhood.id}
                      className="overflow-hidden hover:shadow-hover transition-shadow cursor-pointer group"
                      onClick={() => navigate(`/bairros-penha/${neighborhood.id}`)}
                    >
                      {neighborhood.image && (
                        <div className="h-40 overflow-hidden">
                          <img
                            src={neighborhood.image}
                            alt={neighborhood.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {neighborhood.name}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                          {neighborhood.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{neighborhood.distance}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Info Section */}
              <div className="bg-accent/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  Por Que Visitar Penha?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-foreground">
                  <div>
                    <h3 className="text-xl font-bold mb-3">🏖️ 25 Praias</h3>
                    <p>Penha possui 25 praias e enseadas, cada uma com sua característica única.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">🎢 Beto Carrero World</h3>
                    <p>O maior parque temático da América Latina está aqui!</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3">🍤 Gastronomia</h3>
                    <p>Frutos do mar frescos e culinária típica catarinense.</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-12 text-center">
                <div className="bg-primary/10 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Explore Todas as Praias com a Pousada Vila D'Itália</h3>
                  <p className="text-lg mb-6 text-muted-foreground">
                    Localização central na Armação - acesso fácil a todas as 25 praias!
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Button
                      size="lg"
                      variant="cta"
                      asChild
                    >
                      <a
                        href="https://book.omnibees.com/hotel/18988"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Reserve sua Estadia
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      onClick={() => navigate("/")}
                    >
                      <Home className="mr-2 h-4 w-4" />
                      Página Inicial
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <PenhaNews />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />

      {/* JSON-LD Structured Data for Beach List */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Praias de Penha - Santa Catarina",
            "description": "Lista completa das 25 praias de Penha SC",
            "numberOfItems": Object.keys(neighborhoods).length,
            "itemListElement": Object.values(neighborhoods).map((beach, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Beach",
                "name": beach.name,
                "description": beach.description,
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Penha",
                  "addressRegion": "SC",
                  "addressCountry": "BR"
                }
              }
            }))
          })
        }}
      />
    </div>
  );
};

export default Neighborhoods;