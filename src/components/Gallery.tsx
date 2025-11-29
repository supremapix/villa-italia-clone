import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, Star, Expand, Pause, Play } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const galleryItems = [
    {
      image: gallery1,
      title: "Passeio de Helicóptero no Beto Carrero",
      description: "Experiência única no maior parque temático da América Latina",
      rating: 5
    },
    {
      image: gallery2,
      title: "Localização Privilegiada",
      description: "Acesso fácil para ônibus de turismo e grupos",
      rating: 5
    },
    {
      image: gallery3,
      title: "Área de Lazer Completa",
      description: "Espaço de convivência com sinuca e entretenimento",
      rating: 5
    },
    {
      image: gallery4,
      title: "Piscina Exclusiva",
      description: "Área de piscina com vista panorâmica e conforto",
      rating: 5
    },
    {
      image: gallery5,
      title: "Piscina Cristalina",
      description: "Relaxe em nossa piscina com água cristalina",
      rating: 5
    },
    {
      image: gallery6,
      title: "Vista da Área de Lazer",
      description: "Ambiente tranquilo e seguro para toda família",
      rating: 5
    },
    {
      image: gallery7,
      title: "Área de Piscina",
      description: "Cadeiras de sol e área de descanso completa",
      rating: 5
    },
    {
      image: gallery8,
      title: "Espreguiçadeiras Confortáveis",
      description: "Relaxe ao sol em nossas espreguiçadeiras",
      rating: 5
    },
    {
      image: gallery9,
      title: "Área de Café da Manhã",
      description: "Espaço coberto para refeições com TV e conforto",
      rating: 5
    },
    {
      image: gallery10,
      title: "Fachada da Pousada",
      description: "Arquitetura italiana com charme e aconchego",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Autoplay effect
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, galleryItems.length]);

  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Conheça Nossa Pousada
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore as comodidades e áreas de lazer da Pousada Vila D'Itália
          </p>
        </div>

        {/* Gallery Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Card className="overflow-hidden shadow-elegant border-none">
            <div className="relative aspect-video md:aspect-[16/10] group">
              <img
                src={galleryItems[currentIndex].image}
                alt={galleryItems[currentIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Play/Pause Control */}
              <Button
                variant="outline"
                size="icon"
                onClick={togglePlayPause}
                className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta opacity-0 group-hover:opacity-100 transition-opacity z-20"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5 text-cta" />
                ) : (
                  <Play className="h-5 w-5 text-cta" />
                )}
              </Button>

              {/* Lightbox Trigger */}
              <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta opacity-0 group-hover:opacity-100 transition-opacity z-20"
                  >
                    <Expand className="h-5 w-5 text-cta" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-7xl w-[95vw] h-[90vh] p-0">
                  <div className="relative w-full h-full flex items-center justify-center bg-black/90">
                    <img
                      src={galleryItems[currentIndex].image}
                      alt={galleryItems[currentIndex].title}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(galleryItems[currentIndex].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                        {galleryItems[currentIndex].title}
                      </h3>
                      <p className="text-white/90 text-base md:text-lg">
                        {galleryItems[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta h-12 w-12 md:h-14 md:w-14 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-cta" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background/95 border-2 border-cta h-12 w-12 md:h-14 md:w-14 z-10"
              >
                <ChevronRight className="h-6 w-6 text-cta" />
              </Button>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 md:p-8">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(galleryItems[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-cta text-cta" />
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                  {galleryItems[currentIndex].title}
                </h3>
                <p className="text-white/90 text-base md:text-lg">
                  {galleryItems[currentIndex].description}
                </p>
              </div>
            </div>
          </Card>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6 flex-wrap">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "bg-cta w-12 h-3"
                    : "bg-muted hover:bg-muted-foreground/30 w-3 h-3"
                }`}
                aria-label={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <p className="text-muted-foreground font-medium">
              {currentIndex + 1} / {galleryItems.length}
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="https://book.omnibees.com/hotel/18988" target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-white text-foreground border-2 border-foreground hover:bg-foreground hover:text-white text-xl px-10 py-7 shadow-glow hover:scale-105 transition-all duration-300"
            >
              Reserve Sua Estadia Agora
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
