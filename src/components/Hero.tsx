import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone } from "lucide-react";
import heroImage from "@/assets/hero-pousada.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Pousada Vila D'Itália"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cta/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-hover">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">A 5 minutos do Beto Carrero World</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
            A Pousada Villa D'Italia é seu refúgio perfeito entre o mar e a diversão
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Seja bem-vindo à Pousada Villa D'Italia, seu paraíso pessoal no litoral norte de Santa Catarina!
          </p>

          {/* Location Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-lg">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Praia da Armação, Penha/SC</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>80m da praia</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToContact}
              className="text-lg px-8 py-6"
            >
              <Phone className="w-5 h-5" />
              Reserve sua estadia
            </Button>
            <Button
              variant="outline-white"
              size="lg"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
