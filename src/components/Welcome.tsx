import { Card } from "@/components/ui/card";
import { Award } from "lucide-react";
import roomImage from "@/assets/room-interior.jpg";

const Welcome = () => {
  return (
    <section id="about" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src={roomImage}
              alt="Quarto aconchegante"
              className="rounded-2xl shadow-hover w-full h-[500px] object-cover"
            />
            <Card className="absolute -bottom-6 -right-6 bg-cta text-cta-foreground p-6 shadow-hover">
              <div className="flex items-center gap-3">
                <Award className="w-10 h-10" />
                <div>
                  <p className="font-bold text-lg">Localização Privilegiada</p>
                  <p className="text-sm opacity-90">5 min do Beto Carrero</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
                Seja bem-vindo à Pousada Villa D'Italia
              </h2>
              <div className="w-20 h-1 bg-cta rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Preparamos com carinho este espaço para recebê-lo e proporcionar uma estadia inesquecível em Armação, Penha. Queremos que aqui você encontre tranquilidade, conforto e muita comodidade para dias maravilhosos.
              </p>

              <p>
                Nossos quartos, decorados com todo cuidado, oferecem o máximo de bem-estar para seu descanso. Banheiro privativo, ar-condicionado, TV a cabo e Wi-Fi gratuito estão à sua disposição. E para começar o dia com ânimo, o delicioso café da manhã na nossa área de refeições!
              </p>

              <p>
                O amplo e aconchegante jardim convida você a relaxar, sentir a brisa do mar e recarregar as energias. E estamos a apenas alguns passos das praias de Penha, com suas águas cristalinas e areias bem branquinhas.
              </p>

              <p className="font-semibold text-secondary">
                Estamos contando os dias para recebê-lo aqui na Villa D'Italia, seu refúgio pessoal no paraíso do litoral norte catarinense. Sua chegada será uma alegria para nós!
              </p>
            </div>

            {/* Highlight Box */}
            <Card className="bg-primary border-none p-6 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="bg-secondary text-secondary-foreground p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-primary-foreground">
                    Localização Estratégica
                  </h3>
                  <p className="text-primary-foreground">
                    A apenas 5 minutos do Beto Carrero World - A poucos metros da Praia de Armação!
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
