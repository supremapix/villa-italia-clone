import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, ArrowLeft, Home } from "lucide-react";

interface Neighborhood {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  beaches: string[];
  attractions: string[];
  distance: string;
}

const neighborhoods: Record<string, Neighborhood> = {
  "armacao": {
    id: "armacao",
    name: "Armação (Armação do Itapocorói)",
    description: "Armação é um dos bairros mais procurados de Penha, conhecido por sua localização privilegiada e infraestrutura completa. É aqui que a Pousada Vila D'Itália está localizada!",
    highlights: [
      "Proximidade com o Beto Carrero World (5 minutos)",
      "Acesso fácil a múltiplas praias",
      "Restaurantes de frutos do mar",
      "Comércio local diversificado",
      "Atmosfera familiar e tranquila"
    ],
    beaches: ["Praia da Armação", "Praia do Quilombo"],
    attractions: [
      "Beto Carrero World",
      "Restaurantes à beira-mar",
      "Feira de artesanato local",
      "Parque Natural Municipal da Costeira"
    ],
    distance: "Centro de Penha - 3km"
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
    distance: "Centro de Penha - 2km"
  },
  "bacia-da-vovo": {
    id: "bacia-da-vovo",
    name: "Bacia da Vovó",
    description: "Com um nome carinhoso e único, a Bacia da Vovó é uma praia pequena e aconchegante, perfeita para quem procura sossego e contato com a natureza.",
    highlights: [
      "Praia pequena e tranquila",
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
    distance: "Centro de Penha - 4km"
  },
  "paciencia": {
    id: "paciencia",
    name: "Paciência",
    description: "O bairro da Paciência oferece uma experiência mais rústica e autêntica de Penha, mantendo características de uma vila de pescadores.",
    highlights: [
      "Ambiente de vila de pescadores",
      "Contato com a comunidade local",
      "Peixe fresco diariamente",
      "Preços mais acessíveis",
      "Autenticidade cultural"
    ],
    beaches: ["Praia da Paciência"],
    attractions: [
      "Colônia de pescadores",
      "Barcos tradicionais",
      "Culinária regional autêntica"
    ],
    distance: "Centro de Penha - 5km"
  },
  "poa": {
    id: "poa",
    name: "Poá",
    description: "O Poá é conhecido por sua praia extensa e boa para a prática de esportes náuticos. É um bairro em crescimento com boa infraestrutura.",
    highlights: [
      "Praia extensa",
      "Bom para esportes náuticos",
      "Infraestrutura em crescimento",
      "Área residencial tranquila",
      "Próximo ao Parque Beto Carrero"
    ],
    beaches: ["Praia do Poá"],
    attractions: [
      "Escola de surf e stand-up",
      "Beach tennis",
      "Quiosques modernos"
    ],
    distance: "Centro de Penha - 6km"
  },
  "praia-grande": {
    id: "praia-grande",
    name: "Praia Grande",
    description: "A mais extensa e movimentada das praias de Penha. O bairro oferece a maior variedade de serviços, comércio e opções de lazer.",
    highlights: [
      "Praia mais extensa de Penha",
      "Vida noturna agitada",
      "Maior variedade de restaurantes",
      "Comércio diversificado",
      "Eventos durante a temporada"
    ],
    beaches: ["Praia Grande"],
    attractions: [
      "Calçadão à beira-mar",
      "Bares e restaurantes",
      "Shows e eventos",
      "Esportes na areia",
      "Feira noturna"
    ],
    distance: "Centro de Penha - 1km"
  },
  "praia-vermelha": {
    id: "praia-vermelha",
    name: "Praia Vermelha",
    description: "Com areias avermelhadas que dão nome ao bairro, é uma praia belíssima e menos conhecida pelos turistas.",
    highlights: [
      "Areias de cor avermelhada",
      "Menos turística",
      "Beleza natural única",
      "Águas limpas",
      "Ideal para fotografia"
    ],
    beaches: ["Praia Vermelha"],
    attractions: [
      "Formações rochosas",
      "Piscinas naturais (maré baixa)",
      "Trilhas costeiras"
    ],
    distance: "Centro de Penha - 7km"
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
    distance: "Centro de Penha - 8km"
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
              Voltar para Bairros
            </Button>

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
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Neighborhoods;
