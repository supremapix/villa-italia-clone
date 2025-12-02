import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Utensils, Clock, MapPin, Phone } from "lucide-react";

const Restaurant = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conheçam o Quiosque do Kaká
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nosso restaurante oferece deliciosas refeições para tornar sua estadia ainda mais especial
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none bg-card">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full min-h-[300px] bg-secondary/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Utensils className="w-24 h-24 text-cta mx-auto mb-4" />
                  <p className="text-muted-foreground">Área do Restaurante</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Quiosque do Kaká
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Desfrute de refeições saborosas preparadas com carinho em nosso restaurante. 
                  O Quiosque do Kaká oferece um ambiente agradável e pratos deliciosos para você 
                  e sua família aproveitarem durante a estadia.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Horário de funcionamento: Consulte a recepção</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Localizado dentro da pousada</span>
                  </div>
                  <div className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-cta flex-shrink-0" />
                    <span>Reservas: +55 47 99273-8090</span>
                  </div>
                </div>

                <a 
                  href="https://api.whatsapp.com/send?phone=5547992738090&text=Olá! Gostaria de saber mais sobre o Quiosque do Kaká"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-cta hover:bg-cta-dark text-cta-foreground text-lg py-6"
                  >
                    <Utensils className="w-5 h-5 mr-2" />
                    Saiba Mais
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Restaurant;
