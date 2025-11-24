import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Story = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Quote className="w-16 h-16 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
              Uma Experiência Inesquecível
            </h2>
            <div className="w-20 h-1 bg-cta rounded-full mx-auto" />
          </div>

          {/* Story Content */}
          <Card className="bg-muted border-none p-8 md:p-12 shadow-soft animate-fade-in-up">
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-secondary first-letter:mr-2 first-letter:float-left">
                Imagine, meu amigo, que numa tarde de verão eu peguei a estrada rumo a Penha, aquele cantinho encantador do litoral catarinense, decidido a explorar o famoso Beto Carrero World. Mas, depois de rodar um pouco, percebi que queria também um refúgio tranquilo para descansar ao fim do dia. Foi aí que descobri a Pousada Vila D'Itália.
              </p>

              <p>
                Logo na chegada, fui recebido por um jardim amplo e bem cuidado, com espreguiçadeiras e vasos de flores, que lembravam uma pequena vila europeia. A fachada, em tons de amarelo suave e verde, já dava pistas do clima acolhedor que eu encontraria lá dentro.
              </p>

              <p>
                Meu quarto, decorado com móveis de madeira clara e pequenos detalhes em cerâmica italiana, tinha cama box confortável, ar-condicionado, TV a cabo e um frigobar abastecido. O banheiro privativo era espaçoso e bem iluminado. Ao abrir a janela, a brisa suave trazia o cheiro do mar, pois a pousada fica a apenas 80 metros da Praia da Armação.
              </p>

              <p>
                No primeiro fim de tarde, aproveitei a piscina externa: um espaço moderno, cercado por palmeiras e guarda-sóis. Logo ao lado, havia a piscina coberta com hidromassagem, perfeita para relaxar depois de um dia agitado no parque. Mergulhei na água quentinha, senti aquelas bolhinhas massageando as costas e pensei: 'É aqui que volto toda vez que vier a Penha.'
              </p>

              <p>
                Pela manhã, o café-da-manhã era um espetáculo: pães fresquinhos, frios, frutas da estação, ovos mexidos e café coado na hora, servido numa varanda com vista para o jardim.
              </p>

              <p className="font-semibold text-secondary italic">
                No último dia, antes de partir, dei mais um mergulho e agradeci mentalmente a escolha. A Pousada Vila D'Itália me ofereceu o equilíbrio perfeito entre diversão e tranquilidade, sol e descanso, mar e piscina. Se você quiser repetir essa história, basta reservar seu quarto – e preparar o coração para se apaixonar por Penha.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Story;
