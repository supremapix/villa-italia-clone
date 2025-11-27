import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MapPin, Palmtree, UtensilsCrossed, Sun, Home } from "lucide-react";

const PenhaAccordion = () => {
  const navigate = useNavigate();

  const neighborhoods = [
    { name: "Armação", slug: "armacao", description: "Bairro central com praias calmas e infraestrutura completa" },
    { name: "Praia Alegre", slug: "praia-alegre", description: "Praia vibrante com ótimas opções de lazer" },
    { name: "Bacia da Vovó", slug: "bacia-da-vovo", description: "Local tranquilo ideal para famílias" },
    { name: "Paciência", slug: "paciencia", description: "Praia calma perfeita para relaxar" },
    { name: "Poá", slug: "poa", description: "Área residencial próxima ao Beto Carrero" },
    { name: "Praia Grande", slug: "praia-grande", description: "Extensa faixa de areia com águas cristalinas" },
    { name: "Praia Vermelha", slug: "praia-vermelha", description: "Visual único com areia avermelhada" },
    { name: "São Miguel", slug: "sao-miguel", description: "Região com natureza preservada" }
  ];

  const attractions2025 = [
    "Beto Carrero World - O maior parque temático da América Latina",
    "Parque Beto Carrero Beach Park - Nova atração aquática (2025)",
    "Aquário de Penha - Vida marinha fascinante",
    "Passeios de Barco pelas 19 praias",
    "Trilhas ecológicas na Mata Atlântica",
    "Gastronomia de frutos do mar frescos",
    "Festas e eventos culturais durante todo o ano"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Descubra Penha em Detalhes
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tudo que você precisa saber sobre Penha e a Pousada Vila D'Italia
            </p>
          </div>

          <Card className="bg-card shadow-hover p-8 animate-fade-in-up">
            <Accordion type="single" collapsible className="w-full">
              {/* Bairros de Penha */}
              <AccordionItem value="neighborhoods">
                <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-primary">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-8 h-8 text-primary" />
                    <span>Bairros de Penha</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    <p className="text-lg text-muted-foreground mb-6">
                      Penha é dividida em diversos bairros, cada um com sua personalidade única. 
                      A Pousada Vila D'Italia está localizada na Armação, uma das regiões mais privilegiadas.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {neighborhoods.map((neighborhood, idx) => (
                        <Card key={idx} className="p-4 hover:shadow-hover transition-all cursor-pointer"
                          onClick={() => navigate(`/bairros-penha/${neighborhood.slug}`)}>
                          <h4 className="font-bold text-lg text-primary mb-2">{neighborhood.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{neighborhood.description}</p>
                          <Button variant="outline" size="sm" className="w-full">
                            Saiba mais
                          </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Sobre a Pousada */}
              <AccordionItem value="pousada">
                <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-secondary">
                  <div className="flex items-center gap-3">
                    <Home className="w-8 h-8 text-secondary" />
                    <span>Sobre a Pousada Vila D'Italia</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    <p className="text-lg text-muted-foreground">
                      A Pousada Vila D'Italia é seu refúgio perfeito em Penha! Oferecemos:
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Piscina ao ar livre e coberta com hidromassagem",
                        "Café da manhã completo com produtos frescos incluído na diária",
                        "Quartos confortáveis com ar-condicionado, TV a cabo e Wi-Fi grátis",
                        "Estacionamento gratuito e seguro",
                        "Área de lazer com sinuca e jardim",
                        "Localização privilegiada: a poucos passos da Praia de Armação",
                        "5 minutos (1,5km) do Beto Carrero World",
                        "Atendimento familiar e acolhedor",
                        "Melhor custo-benefício da região"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-foreground">
                          <span className="text-cta text-xl">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Beto Carrero World */}
              <AccordionItem value="betocarrero">
                <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-cta">
                  <div className="flex items-center gap-3">
                    <Palmtree className="w-8 h-8 text-cta" />
                    <span>Beto Carrero World</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    <p className="text-lg text-muted-foreground mb-4">
                      O maior parque temático da América Latina fica a apenas 5 minutos da pousada!
                    </p>
                    <div className="bg-accent/10 p-6 rounded-lg">
                      <h4 className="font-bold text-xl mb-4">Por que se hospedar perto do parque?</h4>
                      <ul className="space-y-2">
                        {[
                          "Economize tempo de deslocamento - mais tempo para diversão",
                          "Volte para descansar no meio do dia e retorne ao parque renovado",
                          "Evite trânsito intenso nas épocas de alta temporada",
                          "Café da manhã reforçado antes de um dia cheio de emoções",
                          "Piscina para relaxar após um dia intenso de atrações"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cta">•</span>
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pontos Turísticos 2025 */}
              <AccordionItem value="tourism">
                <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-primary">
                  <div className="flex items-center gap-3">
                    <Sun className="w-8 h-8 text-primary" />
                    <span>Pontos Turísticos em Penha 2025</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-4">
                    <p className="text-lg text-muted-foreground mb-4">
                      Penha oferece atrações incríveis para todas as idades em 2025:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {attractions2025.map((attraction, idx) => (
                        <Card key={idx} className="p-4 bg-gradient-to-br from-primary/5 to-secondary/5">
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{idx + 1}</span>
                            <p className="text-foreground font-medium">{attraction}</p>
                          </div>
                        </Card>
                      ))}
                    </div>
                    <div className="mt-6 p-6 bg-cta/10 rounded-lg">
                      <h4 className="font-bold text-xl mb-3">🌟 Destaque 2025</h4>
                      <p className="text-foreground">
                        Além das 19 praias paradisíacas, Penha se consolida como destino familiar completo 
                        com infraestrutura renovada, novos restaurantes e eventos culturais durante todo o ano!
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Curiosidades sobre Penha */}
              <AccordionItem value="curiosities">
                <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-secondary">
                  <div className="flex items-center gap-3">
                    <UtensilsCrossed className="w-8 h-8 text-secondary" />
                    <span>Por Que Escolher Penha?</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4 space-y-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="p-6 text-center bg-primary/5">
                        <div className="text-4xl font-bold text-primary mb-2">19</div>
                        <p className="text-muted-foreground">Praias Paradisíacas</p>
                      </Card>
                      <Card className="p-6 text-center bg-secondary/5">
                        <div className="text-4xl font-bold text-secondary mb-2">365</div>
                        <p className="text-muted-foreground">Dias de Sol por Ano</p>
                      </Card>
                      <Card className="p-6 text-center bg-cta/5">
                        <div className="text-4xl font-bold text-cta mb-2">100%</div>
                        <p className="text-muted-foreground">Familiar e Seguro</p>
                      </Card>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-xl">🏖️ Curiosidades de Penha:</h4>
                      <ul className="space-y-2">
                        {[
                          "Clima subtropical úmido com temperaturas agradáveis o ano todo",
                          "Gastronomia rica em frutos do mar fresquíssimos",
                          "Custo de hospedagem mais acessível que Balneário Camboriú",
                          "Atmosfera tranquila ideal para famílias com crianças",
                          "Fácil acesso pelo Aeroporto de Navegantes (14km)",
                          "Infraestrutura turística completa com segurança"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary">✓</span>
                            <span className="text-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="cta"
              onClick={() => window.open("https://book.omnibees.com/hotel/18988", "_blank")}
              className="text-xl px-12 py-6"
            >
              Reserve Agora na Pousada Vila D'Italia
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenhaAccordion;