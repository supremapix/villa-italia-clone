import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import EnhancedSEO from "@/components/EnhancedSEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trees, Coffee, Waves, Car, Heart, MapPin } from "lucide-react";

const distances = [
  { city: "Curitiba", km: "~180 km", time: "2h – 2h30" },
  { city: "São José dos Pinhais", km: "~175 km", time: "2h – 2h15" },
  { city: "Ponta Grossa", km: "~230 km", time: "2h30 – 3h" },
  { city: "Londrina", km: "~380 km", time: "4h – 4h30" },
  { city: "Maringá", km: "~430 km", time: "4h30 – 5h" },
  { city: "Joinville", km: "~80 km", time: "1h – 1h15" },
  { city: "Blumenau", km: "~100 km", time: "1h15 – 1h30" },
  { city: "Florianópolis", km: "~130 km", time: "1h30 – 2h" },
  { city: "Porto Alegre", km: "~470 km", time: "5h – 5h30" },
];

const benefits = [
  { icon: Trees, text: "5 minutos de carro do Beto Carrero World" },
  { icon: Waves, text: "A poucos passos da Praia de Armação" },
  { icon: Coffee, text: "Café da manhã incluso todos os dias" },
  { icon: Heart, text: "Piscina para relaxar depois de um dia no parque" },
  { icon: Car, text: "Estacionamento gratuito para hóspedes" },
  { icon: MapPin, text: "Ambiente tranquilo e familiar" },
];

const tips = [
  "Compre os ingressos online com antecedência — evita filas e geralmente sai mais barato.",
  "Chegue cedo (abertura): as atrações mais populares têm menos fila nas primeiras horas.",
  "Use roupas confortáveis e protetor solar — o parque é grande e você vai caminhar bastante.",
  "Separe um dia extra para a praia: depois de um dia intenso no parque, nada melhor do que relaxar na Praia de Armação, a poucos passos da pousada.",
  "Reserve sua hospedagem com antecedência nas temporadas de verão e férias de julho — as vagas esgotam rápido.",
];

const BetoCarreroWorld = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Pousada Perto do Beto Carrero World em Penha SC"
        description="Fique a 5 minutos do Beto Carrero World na Pousada Vila D'Itália em Penha/SC. Piscina, café da manhã e praia pertinho. Melhor custo-benefício para famílias."
        canonical="/beto-carrero-world"
        keywords="pousada perto beto carrero world, hotel proximo beto carrero, hospedagem penha sc, pousada beto carrero penha"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pousada perto do Beto Carrero World", url: "/beto-carrero-world" },
        ]}
      />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Pousada perto do Beto Carrero World em Penha SC
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Planejar uma viagem ao Beto Carrero World com a família é uma das aventuras mais
            esperadas do ano — e a base certa faz toda a diferença. A Pousada Vila D'Itália fica
            a apenas 5 minutos do parque, em Penha/SC, combinando a praticidade de chegar
            descansado às atrações com o charme de acordar pertinho da praia.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary text-center mb-12">
            Por que se hospedar na Vila D'Itália para visitar o Beto Carrero?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Card key={i} className="p-6 hover:shadow-hover transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed">{b.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Distâncias */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary text-center mb-12">
            Quanto tempo de carro até o Beto Carrero World?
          </h2>
          <Card className="overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Cidade de origem</th>
                    <th className="px-4 py-3 font-semibold">Distância até a pousada</th>
                    <th className="px-4 py-3 font-semibold">Tempo estimado</th>
                  </tr>
                </thead>
                <tbody>
                  {distances.map((d, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/50"}>
                      <td className="px-4 py-3 font-medium text-foreground">{d.city}</td>
                      <td className="px-4 py-3 text-muted-foreground">{d.km}</td>
                      <td className="px-4 py-3 text-muted-foreground">{d.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Dicas */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary text-center mb-12">
            Dicas para aproveitar o Beto Carrero World ao máximo
          </h2>
          <ul className="space-y-4">
            {tips.map((t, i) => (
              <li key={i} className="flex items-start gap-3 bg-card p-4 rounded-lg shadow-soft">
                <span className="text-cta text-2xl leading-none">•</span>
                <span className="text-foreground leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Reserva */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-6">
            Reserve sua estadia na Vila D'Itália
          </h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            A Pousada Vila D'Itália é a escolha favorita das famílias que visitam o Beto Carrero
            World. Garanta sua vaga e venha criar memórias inesquecíveis em Penha/SC.
          </p>
          <a
            href="https://book.omnibees.com/hotel/18988"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="lg">
              Ver disponibilidade e reservar
            </Button>
          </a>
          <div className="mt-6">
            <Link to="/acomodacoes" className="text-primary hover:text-primary-dark underline">
              Ver nossas acomodações
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default BetoCarreroWorld;
