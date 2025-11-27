import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5547992045122";
  const whatsappNumber2 = "5547992738090";
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de fazer uma reserva na Pousada Vila D'Itália."
  );

  return (
    <section id="contact" className="py-20 gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-secondary mb-4">
            Faça sua Reserva
          </h2>
          <div className="w-20 h-1 bg-cta rounded-full mx-auto mb-6" />
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Não perca mais tempo procurando a pousada ideal. Reserve agora sua estadia conosco e venha viver momentos memoráveis com quem mais ama.
          </p>
          <p className="text-lg text-secondary font-semibold mt-4">
            A Pousada Vila D'Itália tem tudo para você curtir dias incríveis em grande estilo. Estamos esperando você aqui!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-scale-in">
          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-secondary" />
            </div>
            <h3 className="font-bold text-2xl mb-2">Telefone</h3>
            <div className="mb-4 space-y-1">
              <p className="text-muted-foreground text-lg font-semibold">+55 47 99204-5122</p>
              <p className="text-muted-foreground text-lg font-semibold">+55 47 99273-8090</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
              >
                WhatsApp 1
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(`https://wa.me/${whatsappNumber2}?text=${whatsappMessage}`, "_blank")}
              >
                WhatsApp 2
              </Button>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-2xl mb-2">E-mail</h3>
            <div className="mb-4 space-y-1">
              <p className="text-muted-foreground break-all text-base font-semibold">contato@viladitalia.com.br</p>
              <p className="text-muted-foreground break-all text-base font-semibold">marketing.viladitalia@gmail.com</p>
            </div>
            <div className="flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = "mailto:contato@viladitalia.com.br"}
                className="text-sm"
              >
                Contato
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.location.href = "mailto:marketing.viladitalia@gmail.com"}
                className="text-sm"
              >
                Marketing
              </Button>
            </div>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-cta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-cta" />
            </div>
            <h3 className="font-bold text-2xl mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-4 text-lg font-semibold">@viladitaliapousada</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://www.instagram.com/viladitaliapousada/", "_blank")}
            >
              Seguir
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-primary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-2xl mb-2">Endereço</h3>
            <p className="text-muted-foreground mb-4 text-sm font-semibold">R. Luís Vicente da Silva, 183<br />Centro, Penha - SC, 88385-000</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://goo.gl/maps/uDdApnDSJKVc2EJN7", "_blank")}
            >
              Ver Mapa
            </Button>
          </Card>
        </div>

        {/* CTA Box */}
        <Card className="bg-secondary text-secondary-foreground p-12 text-center shadow-hover border-none animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Pronto para sua próxima aventura?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco agora e garanta as melhores datas para sua estadia na Pousada Vila D'Itália!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
              <Button
                variant="cta"
                size="lg"
                className="text-lg px-8"
              >
                <Phone className="w-5 h-5" />
                Reserve pelo WhatsApp
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary"
              onClick={() => window.open("https://goo.gl/maps/uDdApnDSJKVc2EJN7", "_blank")}
            >
              <MapPin className="w-5 h-5" />
              Ver no Mapa
            </Button>
          </div>
        </Card>

        {/* Info Footer */}
        <Card className="mt-12 p-8 bg-primary/10 border-2 border-primary shadow-soft">
          <div className="flex items-start gap-4 justify-center">
            <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div className="text-center">
              <h3 className="font-bold text-2xl text-foreground mb-3">Nosso Endereço</h3>
              <p className="text-lg text-foreground font-semibold mb-2">
                R. Luís Vicente da Silva, 183 - Centro
              </p>
              <p className="text-lg text-foreground font-semibold mb-4">
                Penha - SC, 88385-000, Brasil
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-6 text-left max-w-2xl mx-auto">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Beto Carrero:</strong> 5 minutos de carro (1,5 km)
                </p>
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Praia:</strong> A poucos passos da Praia de Armação
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
