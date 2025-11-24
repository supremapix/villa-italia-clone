import { Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";

const InstagramFeed = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const instagramHandle = "viladitaliapousada";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Siga-nos no Instagram
            </h2>
            <p className="text-lg text-muted-foreground">
              Acompanhe nossos momentos especiais e inspire-se para sua próxima visita
            </p>
          </div>

          {/* Instagram Embed */}
          <div
            className={`overflow-hidden rounded-lg shadow-lg mb-8 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <iframe
              src={`https://www.instagram.com/${instagramHandle}/embed`}
              width="100%"
              height="750"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              title={`Feed do Instagram da Pousada Villa D'Italia`}
              loading="lazy"
              className="max-h-[90vh]"
            />
          </div>

          {/* CTA Button */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90 text-white shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Instagram className="mr-2 h-5 w-5" />
                Seguir @{instagramHandle}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
