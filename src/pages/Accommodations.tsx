import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import PenhaNews from "@/components/PenhaNews";
import RoomGallerySlider from "@/components/RoomGallerySlider";
import EnhancedSEO from "@/components/EnhancedSEO";
import PousadaMap from "@/components/PousadaMap";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Users, Wifi, Coffee, AirVent, Tv, Refrigerator } from "lucide-react";
import { useEffect, useRef } from "react";
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
import room11 from "@/assets/room-11.jpg";
import room12 from "@/assets/room-12.jpg";
import room13 from "@/assets/room-13.jpg";
import room14 from "@/assets/room-14.jpg";
import room15 from "@/assets/room-15.jpg";
import room16 from "@/assets/room-16.jpg";
import room17 from "@/assets/room-17.jpg";
import room18 from "@/assets/room-18.jpg";
import room19 from "@/assets/room-19.jpg";
import room20 from "@/assets/room-20.jpg";
import room21 from "@/assets/room-21.jpg";
import room22 from "@/assets/room-22.jpg";
import room23 from "@/assets/room-23.jpg";
import room24 from "@/assets/room-24.jpg";
import room25 from "@/assets/room-25.jpg";
import room26 from "@/assets/room-26.jpg";
import room27 from "@/assets/room-27.jpg";
import room28 from "@/assets/room-28.jpg";
import room29 from "@/assets/room-29.jpg";
import room30 from "@/assets/room-30.jpg";

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
  },
  {
    id: 11,
    image: room11,
    category: "suite",
    title: "Suíte Duplex Premium",
    description: "Suíte duplex moderna com dois níveis, perfeita para conforto e privacidade.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "2 Andares"]
  },
  {
    id: 12,
    image: room12,
    category: "familia",
    title: "Quarto Família Premium",
    description: "Amplo quarto familiar com decoração vibrante e múltiplas camas.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Múltiplas Camas"]
  },
  {
    id: 13,
    image: room13,
    category: "familia",
    title: "Quarto Família Confortável",
    description: "Espaço aconchegante com várias opções de camas para toda a família.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "4 Camas"]
  },
  {
    id: 14,
    image: room14,
    category: "suite",
    title: "Suíte Duplex Executiva",
    description: "Suíte com dois andares, ideal para estadias prolongadas.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Mezanino"]
  },
  {
    id: 15,
    image: room15,
    category: "familia",
    title: "Quarto Família Mezanino Premium",
    description: "Quarto com mezanino em estilo chalé, proporcionando muito espaço.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Mezanino"]
  },
  {
    id: 16,
    image: room16,
    category: "casal",
    title: "Quarto com Varanda",
    description: "Quarto com vista para a área externa e varanda privativa.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Varanda"]
  },
  {
    id: 17,
    image: room17,
    category: "casal",
    title: "Quarto Casal Luxo",
    description: "Quarto elegante com decoração romântica e toques especiais.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Decoração Especial"]
  },
  {
    id: 18,
    image: room18,
    category: "casal",
    title: "Suíte Casal Romântica",
    description: "Suíte moderna com decoração especial para ocasiões especiais.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Decoração Romântica"]
  },
  {
    id: 19,
    image: room19,
    category: "familia",
    title: "Quarto Família Clássico",
    description: "Quarto espaçoso com múltiplas camas e ambiente acolhedor.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "3 Camas"]
  },
  {
    id: 20,
    image: room20,
    category: "casal",
    title: "Quarto com Vista Externa",
    description: "Quarto com vista privilegiada para a área externa da pousada.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Vista Externa"]
  },
  {
    id: 21,
    image: room21,
    category: "familia",
    title: "Quarto Família Amplo",
    description: "Espaçoso quarto familiar com múltiplas camas e decoração colorida.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "4+ Camas"]
  },
  {
    id: 22,
    image: room22,
    category: "casal",
    title: "Quarto Casal Elegante",
    description: "Quarto elegante com decoração moderna e todas as comodidades.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 23,
    image: room23,
    category: "familia",
    title: "Quarto Família Conforto Plus",
    description: "Ambiente acolhedor com múltiplas opções de camas para toda a família.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Beliche"]
  },
  {
    id: 24,
    image: room24,
    category: "casal",
    title: "Quarto Vista Piscina",
    description: "Quarto com vista privilegiada para a área da piscina.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Vista Piscina"]
  },
  {
    id: 25,
    image: room25,
    category: "casal",
    title: "Quarto Casal Verde",
    description: "Ambiente tranquilo com decoração em tons de verde e branco.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis"]
  },
  {
    id: 26,
    image: room26,
    category: "familia",
    title: "Quarto Família Econômico",
    description: "Opção econômica com conforto para toda a família.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "3 Camas"]
  },
  {
    id: 27,
    image: room27,
    category: "familia",
    title: "Quarto Família Standard Plus",
    description: "Quarto familiar com beliche e decoração aconchegante.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Beliche"]
  },
  {
    id: 28,
    image: room28,
    category: "familia",
    title: "Quarto Família Triplo Plus",
    description: "Espaço confortável com múltiplas camas e ambiente familiar.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "3 Camas"]
  },
  {
    id: 29,
    image: room29,
    category: "familia",
    title: "Quarto Família Premium Plus",
    description: "Amplo quarto com beliche e cama de casal, ideal para famílias.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Beliche + Casal"]
  },
  {
    id: 30,
    image: room30,
    category: "casal",
    title: "Quarto Casal Romântico Plus",
    description: "Quarto aconchegante com decoração especial e ambiente romântico.",
    amenities: ["Ar-condicionado", "TV a Cabo", "Frigobar", "Wi-Fi Grátis", "Decoração Especial"]
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
      <EnhancedSEO
        title="Quartos Casal e Família em Penha SC | Perto do Beto Carrero"
        description="Acomodação para casal e família em Penha SC, a 5 min do Beto Carrero World. Piscina, café da manhã incluso e perto da Praia de Armação. Reserve já!"
        canonical="/acomodacoes"
        keywords="quarto casal penha sc, quarto familia penha, acomodacoes beto carrero, hotel familiar penha, suite familia penha, hospedagem perto beto carrero"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Acomodacoes", url: "/acomodacoes" }
        ]}
      />
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
            onClick={() => {
              const element = document.getElementById("reservation-form");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#reservation-form";
              }
            }}
          >
            Solicitar Reserva via WhatsApp
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

      <PousadaMap />

      <RoomGallerySlider />

      <PenhaNews />

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Accommodations;
