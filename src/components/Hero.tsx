import { Button } from "@/components/ui/button";
import { MapPin, Star, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-pool.jpg";

const Hero = () => {
  const phrases = [
    "Sua casa fora de casa em Penha",
    "Pousada com Piscinas para sua Família",
    "Tranquilidade e Comodidade em Santa Catarina"
  ];
  
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const phrase = phrases[currentPhrase];

    if (!isDeleting && charIndex < phrase.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(phrase.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(phrase.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && charIndex === phrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentPhrase((currentPhrase + 1) % phrases.length);
    }
  }, [charIndex, isDeleting, currentPhrase, phrases]);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroImage}
          alt="Pousada Vila D'Itália"
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
      </div>

      {/* Content with Staggered Animations */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge with Float Animation */}
          <div 
            className="inline-flex items-center gap-2 bg-cta/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-hover animate-float"
            style={{ animation: 'fadeInDown 0.8s ease-out 0.2s both, float 3s ease-in-out 1s infinite' }}
          >
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">A 5 minutos do Beto Carrero World</span>
          </div>

          {/* Main Heading with Typing Effect */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight min-h-[180px] md:min-h-[150px] flex items-center justify-center"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.4s both' }}
          >
            <span className="inline-block drop-shadow-lg">
              {displayedText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Subheading */}
          <p 
            className="text-xl md:text-2xl font-light max-w-3xl mx-auto drop-shadow-md"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s both' }}
          >
            Pousada Vila D'Itália, sua casa fora de casa. A tranquilidade e a comodidade que sua família merece está aqui, o paraíso de Santa Catarina.
          </p>

          {/* Location Info */}
          <div 
            className="flex flex-wrap items-center justify-center gap-6 text-lg"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.8s both' }}
          >
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>Praia da Armação, Penha/SC</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              <span>80m da praia</span>
            </div>
          </div>

          {/* CTA Buttons with Shimmer */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            style={{ animation: 'fadeInUp 0.8s ease-out 1s both' }}
          >
            <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
              <Button
                variant="hero"
                size="lg"
                className="text-lg px-8 py-6 relative overflow-hidden group animate-pulse-glow"
              >
                <span className="absolute inset-0 animate-shimmer" />
                <Phone className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Reserve sua estadia</span>
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.getElementById("about");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg px-8 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-secondary transition-all duration-300"
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>

      {/* Animated Waves at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden">
        <svg 
          className="relative w-[200%] h-20 md:h-32" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
            fill="rgba(255,255,255,0.1)"
            className="animate-wave"
          />
          <path 
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
            fill="rgba(255,255,255,0.05)"
            className="animate-wave"
            style={{ animationDelay: '-5s' }}
          />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
