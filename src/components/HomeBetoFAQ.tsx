import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo de Curitiba até a Pousada Vila D'Italia?",
    a: "De Curitiba até Penha/SC são aproximadamente 180 km pela BR-101 e BR-376, com tempo médio de 2h a 2h30 dependendo do trânsito. A pousada fica a apenas 5 minutos do Beto Carrero World, tornando-se a base perfeita para quem vem da capital paranaense.",
  },
  {
    q: "Quanto tempo de Londrina até a pousada?",
    a: "De Londrina até Penha/SC são cerca de 380 km, com tempo estimado de 4h a 4h30 pela BR-369 e BR-101. Uma viagem tranquila, ideal para sair na sexta à noite ou sábado bem cedo e chegar descansado para curtir o Beto Carrero.",
  },
  {
    q: "Quanto tempo de Maringá até a pousada?",
    a: "De Maringá até Penha/SC são aproximadamente 430 km, com tempo médio de 4h30 a 5h. Recomendamos sair na sexta-feira à noite para aproveitar o sábado inteiro no Beto Carrero World sem pressa.",
  },
  {
    q: "Quanto tempo de Ponta Grossa até a pousada?",
    a: "De Ponta Grossa até Penha/SC são cerca de 230 km, com tempo de 2h30 a 3h pela BR-376. Uma das rotas mais rápidas do Paraná para chegar ao litoral norte catarinense.",
  },
  {
    q: "A pousada fica perto do Beto Carrero World?",
    a: "Sim! A Pousada Vila D'Itália fica a apenas 5 minutos de carro do Beto Carrero World, em Penha/SC. Além da praticidade para o parque, você também fica a poucos passos da Praia de Armação — um ótimo combo para as férias em família.",
  },
  {
    q: "A pousada é boa para famílias com crianças?",
    a: "Com certeza. A estrutura da Vila D'Itália foi pensada para famílias: piscina, café da manhã incluso, acomodações confortáveis e localização privilegiada entre o Beto Carrero World e a praia. As crianças adoram!",
  },
  {
    q: "Tem estacionamento na pousada?",
    a: "Sim, a Pousada Vila D'Itália oferece estacionamento para os hóspedes, o que facilita bastante para quem viaja de carro de cidades como Curitiba, Londrina ou Maringá.",
  },
  {
    q: "Qual a melhor época para visitar o Beto Carrero World e se hospedar em Penha?",
    a: "O parque funciona o ano todo, mas os períodos de férias escolares (janeiro e julho) e feriados prolongados são os mais movimentados. Para quem quer mais tranquilidade, março, abril, outubro e novembro são excelentes opções com clima agradável e filas menores.",
  },
];

const HomeBetoFAQ = () => {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Perguntas Frequentes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Dúvidas frequentes de quem vem visitar o Beto Carrero World
            </h2>
            <div className="w-20 h-1 bg-cta rounded-full mx-auto" />
          </div>

          <Card className="bg-card shadow-hover p-6 md:p-8 animate-fade-in-up">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed pt-2">{f.a}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
    </section>
  );
};

export default HomeBetoFAQ;
