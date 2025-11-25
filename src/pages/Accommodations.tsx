import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Users, Wifi, Coffee, AirVent, Tv, Refrigerator } from "lucide-react";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import room6 from "@/assets/room-6.jpg";
import room7 from "@/assets/room-7.jpg";
import room8 from "@/assets/room-8.jpg";
import room9 from "@/assets/room-9.jpg";
import room10 from "@/assets/room-10.jpg";

type RoomCategory = "todos" | "casal" | "familia" | "suite";

interface Room {
  id: number;
  image: string;
  category: RoomCategory;
  title: string;
  description: string;
  amenities: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    image: room1,
    category: "casal",
    title: "Quarto Casal Standard",
    description: "Quarto confortável com cama de casal, ar-condicionado e acesso à área externa.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 2,
    image: room2,
    category: "casal",
    title: "Quarto Casal Confort",
    description: "Ambiente acolhedor com decoração italiana e todas as comodidades necessárias.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 3,
    image: room3,
    category: "familia",
    title: "Quarto Família Mezanino",
    description: "Espaçoso quarto com mezanino, ideal para famílias com crianças.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Mezanino"]
  },
  {
    id: 4,
    image: room4,
    category: "suite",
    title: "Suíte Duplex",
    description: "Suíte duplex com dois andares, perfeita para grupos ou famílias maiores.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "2 Andares"]
  },
  {
    id: 5,
    image: room5,
    category: "casal",
    title: "Quarto Casal Deluxe",
    description: "Quarto elegante com vista externa e decoração sofisticada.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 6,
    image: room6,
    category: "familia",
    title: "Quarto Família Triplo",
    description: "Quarto amplo com cama de casal e beliche, ideal para famílias.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Beliche"]
  },
  {
    id: 7,
    image: room7,
    category: "familia",
    title: "Quarto Família Quádruplo",
    description: "Ambiente espaçoso com múltiplas camas, perfeito para grupos.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "4 Camas"]
  },
  {
    id: 8,
    image: room8,
    category: "casal",
    title: "Banheiro Privativo",
    description: "Todos os quartos possuem banheiro privativo moderno e completo.",
    amenities: ["Chuveiro", "Box de Vidro", "Toalhas", "Amenities"]
  },
  {
    id: 9,
    image: room9,
    category: "casal",
    title: "Quarto Casal Premium",
    description: "Quarto com decoração azul, cama de casal confortável e todas as comodidades.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 10,
    image: room10,
    category: "casal",
    title: "Quarto Casal Romântico",
    description: "Ambiente romântico com detalhes especiais e decoração acolhedora.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  }
];

const testimonials = [
  {
    name: "Maria Silva",
    rating: 5,
    comment: "Excelente pousada! Muito limpa, café da manhã maravilhoso e a localização é perfeita. Ficamos 3 dias e voltaremos com certeza!",
    date: "Janeiro 2024"
  },
  {
    name: "João Santos",
    rating: 5,
    comment: "A pousada superou nossas expectativas. Os quartos são confortáveis, a piscina é ótima e fica muito perto do Beto Carrero. Recomendo!",
    date: "Dezembro 2023"
  },
  {
    name: "Ana Paula",
    rating: 5,
    comment: "Adoramos nossa estadia! Os donos são muito atenciosos, o lugar é limpo e organizado. A praia fica a poucos passos. Voltaremos!",
    date: "Fevereiro 2024"
  },
  {
    name: "Carlos Eduardo",
    rating: 5,
    comment: "Ótimo custo-benefício! Quartos espaçosos, café da manhã completo e a área de lazer é perfeita para as crianças. Muito bom!",
    date: "Janeiro 2024"
  }
];

const Accommodations = () => {
  const [selectedCategory, setSelectedCategory] = useState<RoomCategory>("todos");

  const filteredRooms = selectedCategory === "todos" 
    ? rooms 
    : rooms.filter(room => room.category === selectedCategory);

  const categories = [
    { value: "todos" as RoomCategory, label: "Todos os Quartos" },
    { value: "casal" as RoomCategory, label: "Casal" },
    { value: "familia" as RoomCategory, label: "Família" },
    { value: "suite" as RoomCategory, label: "Suítes" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Nossas Acomodações
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Quartos confortáveis e bem equipados para tornar sua estadia inesquecível
          </p>
          <Button 
            variant="cta" 
            size="lg"
            onClick={() => window.open("https://book.omnibees.com/hotel/18988", "_blank")}
          >
            Reserve Agora
          </Button>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.value}
                variant={selectedCategory === cat.value ? "cta" : "outline"}
                onClick={() => setSelectedCategory(cat.value)}
                className="min-w-[140px]"
              >
                {cat.label}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room) => (
              <Card key={room.id} className="overflow-hidden group hover:shadow-hover transition-smooth">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={room.image} 
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-secondary mb-2">
                    {room.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {room.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {room.amenities.map((amenity, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-foreground"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Common Amenities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold text-center text-secondary mb-12">
            Comodidades em Todos os Quartos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: AirVent, label: "Ar-Condicionado" },
              { icon: Tv, label: "TV a Cabo" },
              { icon: Refrigerator, label: "Frigobar" },
              { icon: Wifi, label: "Wi-Fi Grátis" },
              { icon: Coffee, label: "Café da Manhã" },
              { icon: Users, label: "Roupa de Cama" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 text-secondary mb-3" />
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
              O Que Dizem Nossos Hóspedes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Avaliações reais de pessoas que se hospedaram na Pousada Vila D'Itália
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 shadow-soft hover:shadow-hover transition-smooth">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-cta text-cta" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">"{testimonial.comment}"</p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open("https://book.omnibees.com/hotel/18988", "_blank")}
            >
              Reserve Sua Estadia
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Accommodations;
