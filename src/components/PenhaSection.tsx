import { Button } from "./ui/button";
import { Globe, MapPin } from "lucide-react";

const PenhaSection = () => {
  const penha360Url = "https://app.orbitpan.com.br/penha-sc/";
  const routeUrl = "https://goo.gl/maps/DV8EGo5pMzve3byE7";

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Penha 360° */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conheça Penha em 360°
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore a cidade de Penha em uma experiência imersiva e descubra todos os encantos da região
            </p>
            <a
              href={penha360Url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-hover hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Globe className="mr-2 h-5 w-5" />
                Ver Penha em 360°
              </Button>
            </a>
          </div>

          {/* Divider */}
          <div className="h-px bg-border my-12"></div>

          {/* Route CTA */}
          <div className="text-center animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Como Chegar até a Pousada
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              A apenas 1,5 km do Beto Carrero World e 30 metros da praia. Veja a melhor rota!
            </p>
            <a
              href={routeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="cta"
                className="text-lg px-8 py-6 h-auto shadow-hover hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
              >
                <MapPin className="mr-2 h-6 w-6" />
                Ver Rotas no Google Maps
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              📍 Rua José Braz Canoas, 245 - Armação do Itapocorói, Penha - SC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PenhaSection;
