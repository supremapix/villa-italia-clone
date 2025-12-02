import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import PenhaNews from "@/components/PenhaNews";
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
import penhaBeach5 from "@/assets/penha-beach-5.webp";
import penhaBeach6 from "@/assets/penha-beach-6.webp";
import penhaBeach7 from "@/assets/penha-beach-7.webp";
import penhaBeach8 from "@/assets/penha-beach-8.jpg";

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
}

const neighborhoods: Record<string, Neighborhood> = {
  "armacao": {
    id: "armacao",
    name: "Armação (Armação do Itapocorói)",
    description: "Armação é um dos bairros mais procurados de Penha, conhecido por sua localização privilegiada e infraestrutura completa. É aqui que a Pousada Vila D'Itália está localizada!",
    highlights: [
      "Proximidade com o Beto Carrero World (5 minutos de carro)",
      "Acesso fácil a múltiplas praias",
      "Restaurantes de frutos do mar",
      "Comércio local diversificado",
      "Atmosfera familiar e tranquila"
    ],
    beaches: ["Praia da Armação"],
    attractions: [
      "Beto Carrero World",
      "Restaurantes à beira-mar",
      "Feira de artesanato local",
      "Parque Natural Municipal da Costeira"
    ],
    distance: "Centro de Penha - 3km",
    image: penhaBeach1,
    faqs: [
      {
        question: "Como chegar em Armação saindo do Aeroporto de Navegantes?",
        answer: "Armação fica a apenas 20 minutos do Aeroporto de Navegantes. Você pode usar táxi, Uber, ou alugar um carro. A rota mais rápida é pela BR-101."
      },
      {
        question: "Qual a distância de Armação até o Beto Carrero World?",
        answer: "O Beto Carrero World fica em Penha, a apenas 5 minutos de carro (1,5km) de Armação. A pé são aproximadamente 40 minutos."
      },
      {
        question: "Armação tem restaurantes e supermercados?",
        answer: "Sim! Armação possui excelente infraestrutura com diversos restaurantes especializados em frutos do mar, supermercados, farmácias e comércio local completo."
      },
      {
        question: "A Praia da Armação é boa para crianças?",
        answer: "Sim, a Praia da Armação tem águas calmas e rasas, ideal para famílias com crianças. A praia possui boa infraestrutura com quiosques e salva-vidas."
      },
      {
        question: "Onde se hospedar em Armação?",
        answer: "A Pousada Vila D'Itália é uma excelente opção em Armação, oferecendo localização privilegiada, piscinas e proximidade com todas as atrações."
      }
    ]
  },
  "praia-alegre": {
    id: "praia-alegre",
    name: "Praia Alegre",
    description: "Um bairro encantador que faz jus ao seu nome. A Praia Alegre oferece um ambiente descontraído e familiar, perfeito para quem busca tranquilidade sem abrir mão da infraestrutura.",
    highlights: [
      "Praia com águas calmas",
      "Ideal para famílias com crianças",
      "Ótimos restaurantes",
      "Ambiente tranquilo",
      "Próximo ao centro"
    ],
    beaches: ["Praia Alegre"],
    attractions: [
      "Orla com calçadão",
      "Quiosques na praia",
      "Área de lazer",
      "Pesca artesanal"
    ],
    distance: "Centro de Penha - 2km",
    image: penhaBeach2,
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
  "bacia-da-vovo": {
    id: "bacia-da-vovo",
    name: "Bacia da Vovó",
    description: "Com um nome carinhoso e único, a Bacia da Vovó é uma praia pequena e aconchegante, perfeita para quem procura sossego e contato com a natureza. Possui certificação Bandeira Azul de qualidade ambiental.",
    highlights: [
      "Praia com Bandeira Azul",
      "Águas cristalinas",
      "Poucas construções",
      "Natureza preservada",
      "Ideal para relaxar"
    ],
    beaches: ["Praia da Bacia da Vovó"],
    attractions: [
      "Trilhas ecológicas",
      "Mirantes naturais",
      "Pesca de arremesso"
    ],
    distance: "Centro de Penha - 4km",
    image: penhaBeach3,
    faqs: [
      {
        question: "O que é a Bandeira Azul da Bacia da Vovó?",
        answer: "A Bandeira Azul é uma certificação internacional de qualidade ambiental, que atesta que a praia possui água limpa, boa gestão ambiental e infraestrutura adequada."
      },
      {
        question: "Bacia da Vovó é muito movimentada?",
        answer: "Não, é uma das praias mais tranquilas de Penha, ideal para quem busca sossego e contato com a natureza. Perfeita para relaxar longe das multidões."
      },
      {
        question: "Tem comércio próximo à Bacia da Vovó?",
        answer: "A infraestrutura é mais limitada devido ao caráter preservado da praia. Recomenda-se levar água, lanches e protetor solar."
      }
    ]
  },
  "paciencia": {
    id: "paciencia",
    name: "Praia da Paciência",
    description: "A Praia da Paciência é considerada uma das menores praias do Brasil. Um local rústico e autêntico, sem infraestrutura turística, perfeito para quem busca paz e contato com a natureza.",
    highlights: [
      "Uma das menores praias do Brasil",
      "Ambiente rústico e preservado",
      "Sem infraestrutura turística",
      "Contato com a natureza",
      "Local para reflexão e paz"
    ],
    beaches: ["Praia da Paciência"],
    attractions: [
      "Contemplação da natureza",
      "Fotografias únicas",
      "Caminhadas tranquilas"
    ],
    distance: "Centro de Penha - 5km",
    image: penhaBeach5,
    faqs: [
      {
        question: "A Praia da Paciência tem restaurantes?",
        answer: "Não, a Praia da Paciência é uma praia sem infraestrutura turística. Recomenda-se levar água, lanches e tudo que precisar."
      },
      {
        question: "Por que visitar a Praia da Paciência?",
        answer: "Para vivenciar uma das menores praias do Brasil em um ambiente completamente natural e preservado, ideal para momentos de paz e contemplação."
      },
      {
        question: "Praia da Paciência é um bairro?",
        answer: "A Paciência é uma praia de Penha, não um bairro. É um local pequeno e rústico, conhecido por ser uma das menores praias do país."
      }
    ]
  },
  "poa": {
    id: "poa",
    name: "Praia do Poá",
    description: "A Praia do Poá é uma das praias mais desertas e tranquilas de Penha. Um local sem infraestrutura turística, ideal para quem busca sossego total e contato com a natureza.",
    highlights: [
      "Praia deserta e tranquila",
      "Sem infraestrutura turística",
      "Contato direto com a natureza",
      "Ambiente preservado",
      "Ideal para relaxar em paz"
    ],
    beaches: ["Praia do Poá"],
    attractions: [
      "Contemplação da natureza",
      "Caminhadas na areia",
      "Paisagens preservadas"
    ],
    distance: "Centro de Penha - 6km",
    image: penhaBeach6,
    faqs: [
      {
        question: "A Praia do Poá tem estrutura de quiosques?",
        answer: "Não, a Praia do Poá é uma praia sem infraestrutura turística. É uma das praias mais desertas de Penha, ideal para quem busca tranquilidade total."
      },
      {
        question: "Praia do Poá é boa para surf?",
        answer: "A Praia do Poá é mais indicada para quem busca sossego e contemplação da natureza devido ao seu caráter preservado e deserto."
      },
      {
        question: "O que levar para a Praia do Poá?",
        answer: "Como não há infraestrutura, leve água, lanches, protetor solar, cadeira e guarda-sol. É importante estar preparado para aproveitar a tranquilidade do local."
      }
    ]
  },
  "praia-grande": {
    id: "praia-grande",
    name: "Praia Grande",
    description: "A mais extensa das praias de Penha. Com mar aberto e ondas consistentes, é ideal para a prática de surf e esportes náuticos.",
    highlights: [
      "Praia mais extensa de Penha",
      "Mar aberto ideal para surf",
      "Ondas consistentes",
      "Ótima para esportes náuticos",
      "Extensa faixa de areia"
    ],
    beaches: ["Praia Grande"],
    attractions: [
      "Surf e bodyboard",
      "Caminhadas na areia",
      "Stand-up paddle"
    ],
    distance: "Centro de Penha - 1km",
    image: penhaBeach7,
    faqs: [
      {
        question: "Praia Grande Penha é boa para surf?",
        answer: "Sim! A Praia Grande tem mar aberto com ondas consistentes, sendo uma das melhores praias da região para surf e bodyboard."
      },
      {
        question: "A Praia Grande tem muitas atrações turísticas?",
        answer: "A Praia Grande é mais conhecida pela extensão de sua faixa de areia e mar aberto, sendo ideal para quem gosta de esportes e caminhadas na praia."
      },
      {
        question: "Qual a melhor praia de Penha para quem gosta de surf?",
        answer: "A Praia Grande é ideal para surfistas devido ao mar aberto e ondas consistentes. É a praia mais extensa de Penha."
      }
    ]
  },
  "praia-vermelha": {
    id: "praia-vermelha",
    name: "Praia Vermelha",
    description: "Apesar do nome, a Praia Vermelha possui areia fina e clara. É uma praia belíssima e menos conhecida pelos turistas, perfeita para quem busca tranquilidade.",
    highlights: [
      "Areia fina e clara",
      "Menos turística",
      "Beleza natural única",
      "Águas limpas",
      "Ideal para relaxar"
    ],
    beaches: ["Praia Vermelha"],
    attractions: [
      "Formações rochosas",
      "Piscinas naturais (maré baixa)",
      "Trilhas costeiras"
    ],
    distance: "Centro de Penha - 7km",
    image: penhaBeach8,
    faqs: [
      {
        question: "Por que a Praia Vermelha tem esse nome?",
        answer: "Apesar do nome, a Praia Vermelha possui areia fina e clara. O nome histórico pode estar relacionado a características geológicas antigas da região."
      },
      {
        question: "Tem piscinas naturais na Praia Vermelha?",
        answer: "Sim! Durante a maré baixa, formam-se belas piscinas naturais entre as formações rochosas, perfeitas para banho e observação da vida marinha."
      },
      {
        question: "Praia Vermelha é boa para fotografia?",
        answer: "Excelente! A areia fina, formações rochosas e o contraste com o mar azul criam cenários únicos e perfeitos para fotografia."
      }
    ]
  },
  "sao-miguel": {
    id: "sao-miguel",
    name: "São Miguel",
    description: "Bairro tranquilo e residencial, São Miguel oferece uma atmosfera pacata e familiar, ideal para quem busca descanso.",
    highlights: [
      "Ambiente residencial",
      "Muito tranquilo",
      "Bom para famílias",
      "Menos movimento turístico",
      "Comunidade acolhedora"
    ],
    beaches: ["Praia de São Miguel"],
    attractions: [
      "Capela local",
      "Pequenos mercados",
      "Restaurantes familiares"
    ],
    distance: "Centro de Penha - 8km",
    image: penhaBeach1,
    faqs: [
      {
        question: "São Miguel é um bairro tranquilo?",
        answer: "Sim, São Miguel é um dos bairros mais tranquilos de Penha, com perfil residencial e familiar, ideal para quem busca paz e sossego."
      },
      {
        question: "Tem comércio em São Miguel?",
        answer: "Sim, há pequenos mercados, padarias e restaurantes familiares que atendem bem os moradores e visitantes, mantendo o caráter local."
      },
      {
        question: "São Miguel é longe do centro de Penha?",
        answer: "São Miguel fica a 8km do centro, cerca de 15 minutos de carro. É uma ótima opção para quem quer tranquilidade mas com acesso rápido às atrações."
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
                  alt={neighborhood.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            )}

            <div className="mb-12">
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
                  <h3 className="text-xl font-bold mb-4 text-foreground">Praias</h3>
                  <ul className="space-y-2">
                    {neighborhood.beaches.map((beach, index) => (
                      <li key={index} className="text-foreground">🏖️ {beach}</li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-foreground">Atrações</h3>
                  <ul className="space-y-2">
                    {neighborhood.attractions.map((attraction, index) => (
                      <li key={index} className="text-foreground">📍 {attraction}</li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            {/* FAQs Section */}
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

            <div className="mt-12 pt-8 border-t border-border">
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Hospede-se na Pousada Vila D'Itália</h3>
                <p className="text-lg mb-6">
                  Localizada estrategicamente na Armação, próxima a todos os bairros de Penha!
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

  // Lista de todos os bairros
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Bairros de Penha - Santa Catarina
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Conheça os bairros e praias que tornam Penha um destino único no litoral catarinense
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {Object.values(neighborhoods).map((neighborhood) => (
                  <Card
                    key={neighborhood.id}
                    className="p-6 hover:shadow-hover transition-shadow cursor-pointer"
                    onClick={() => navigate(`/bairros-penha/${neighborhood.id}`)}
                  >
                    <h3 className="text-2xl font-bold mb-3 text-foreground">
                      {neighborhood.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {neighborhood.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <MapPin className="h-4 w-4" />
                      <span>{neighborhood.distance}</span>
                    </div>
                    <Button variant="outline" className="w-full">
                      Saiba Mais
                    </Button>
                  </Card>
                ))}
              </div>

              <div className="bg-accent/10 rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
                  Por Que Visitar Penha?
                </h2>
                <div className="grid md:grid-cols-3 gap-6 text-foreground">
                  <div>
                    <h3 className="text-xl font-bold mb-3">🏖️ 19 Praias</h3>
                    <p>Penha possui 19 praias paradisíacas, cada uma com sua característica única.</p>
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
            </div>
          </div>
        </section>
      </main>
      <PenhaNews />
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Neighborhoods;
