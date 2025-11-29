import { Star, Quote } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      author: "Maria Silva",
      rating: 5,
      text: "Pousada maravilhosa! O café da manhã é delicioso e a localização é perfeita, perto da praia e do Beto Carrero. A piscina é um charme à parte. Adoramos o ambiente familiar e acolhedor!",
      date: "Há 2 semanas",
      location: "São Paulo, SP"
    },
    {
      author: "João Santos",
      rating: 5,
      text: "Excelente custo-benefício! Os proprietários são muito atenciosos e a pousada tem um clima aconchegante. A proximidade com o Beto Carrero facilitou muito nossa viagem. Voltaremos com certeza!",
      date: "Há 1 mês",
      location: "Curitiba, PR"
    },
    {
      author: "Ana Paula Rodrigues",
      rating: 5,
      text: "Adoramos nossa estadia! Quartos limpos e confortáveis, café da manhã completo com produtos frescos, e a proximidade com as atrações é um diferencial. As crianças amaram a piscina!",
      date: "Há 3 semanas",
      location: "Florianópolis, SC"
    },
    {
      author: "Carlos Eduardo Oliveira",
      rating: 5,
      text: "Perfeito para famílias! As crianças adoraram a piscina e nós aproveitamos o descanso. Ambiente tranquilo, seguro e muito bem localizado. A decoração italiana é linda!",
      date: "Há 1 semana",
      location: "Porto Alegre, RS"
    },
    {
      author: "Fernanda Costa",
      rating: 5,
      text: "A pousada supera as expectativas! Decoração italiana encantadora, limpeza impecável e atendimento nota 10. O café da manhã é maravilhoso. Já estamos planejando voltar!",
      date: "Há 2 meses",
      location: "Joinville, SC"
    },
    {
      author: "Roberto Mendes",
      rating: 5,
      text: "Experiência incrível! Fomos em família para o Beto Carrero e a localização da pousada foi perfeita. Estrutura excelente, proprietários super atenciosos e preço justo. Recomendo muito!",
      date: "Há 1 semana",
      location: "Blumenau, SC"
    },
    {
      author: "Juliana Martins",
      rating: 5,
      text: "Melhor pousada da região! Quartos espaçosos, ar condicionado funcionando perfeitamente, Wi-Fi rápido. A praia fica pertinho e o centro também. Adoramos tudo!",
      date: "Há 3 semanas",
      location: "Rio de Janeiro, RJ"
    },
    {
      author: "Pedro Henrique",
      rating: 5,
      text: "Ficamos hospedados por 4 dias e foi maravilhoso! O atendimento é personalizado, os quartos são limpos diariamente e o café da manhã tem bastante variedade. Voltaremos com certeza!",
      date: "Há 2 semanas",
      location: "Balneário Camboriú, SC"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            O que dizem nossos hóspedes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xl font-semibold text-foreground">4.4</span>
          </div>
          <p className="text-muted-foreground">Baseado em 432 avaliações do Google</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <Card className="p-8 md:p-12 shadow-elegant border-2 border-primary/20 bg-background">
            <Quote className="w-12 h-12 text-primary/30 mb-4" />
            <div className="mb-6">
              <div className="flex mb-3">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-4">
                "{reviews[currentReview].text}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <p className="font-semibold text-foreground text-lg">{reviews[currentReview].author}</p>
                  <p className="text-sm text-muted-foreground">{reviews[currentReview].location} • {reviews[currentReview].date}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>Google Reviews</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-background hover:bg-primary hover:text-white border-2 border-primary h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-background hover:bg-primary hover:text-white border-2 border-primary h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dots Navigation */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentReview
                    ? "bg-primary w-8 h-3"
                    : "bg-muted hover:bg-muted-foreground/30 w-3 h-3"
                }`}
                aria-label={`Ir para avaliação ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Google Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Pousada+Vila+D'Italia/@-26.7707,-48.6434,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary-dark font-semibold underline"
          >
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
