import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

const Contact = () => {
  const whatsappNumber = "5547999999999"; // Número de exemplo - substituir pelo real
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
            <h3 className="font-bold text-lg mb-2">Telefone</h3>
            <p className="text-muted-foreground mb-4">(47) 9999-9999</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
            >
              WhatsApp
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-bold text-lg mb-2">E-mail</h3>
            <p className="text-muted-foreground mb-4 break-all">contato@viladitalia.com.br</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.location.href = "mailto:contato@viladitalia.com.br"}
            >
              Enviar E-mail
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-cta/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-cta" />
            </div>
            <h3 className="font-bold text-lg mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-4">@viladitalia</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              Seguir
            </Button>
          </Card>

          <Card className="p-6 text-center hover:shadow-hover transition-smooth bg-background border-none shadow-soft">
            <div className="bg-primary/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-lg mb-2">Localização</h3>
            <p className="text-muted-foreground mb-4">Praia da Armação, Penha/SC</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("https://maps.google.com", "_blank")}
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
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank")}
            >
              <Phone className="w-5 h-5" />
              Reserve pelo WhatsApp
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 border-2 border-white text-white hover:bg-white hover:text-secondary"
              onClick={() => window.open("https://pousadaviladitalia.com.br", "_blank")}
            >
              <ExternalLink className="w-5 h-5" />
              Visite nosso site
            </Button>
          </div>
        </Card>

        {/* Info Footer */}
        <div className="mt-12 text-center text-muted-foreground">
          <p className="mb-2">
            <strong>Endereço:</strong> Praia da Armação, Penha - Santa Catarina
          </p>
          <p className="mb-2">
            <strong>Distância Beto Carrero:</strong> 5 minutos de carro / 1,5 km
          </p>
          <p>
            <strong>Distância Praia:</strong> 30-80 metros
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
