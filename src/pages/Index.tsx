import Navigation from "@/components/Navigation";

import VillaIntroduction from "@/components/VillaIntroduction";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import HomeBetoFAQ from "@/components/HomeBetoFAQ";
import EnhancedSEO from "@/components/EnhancedSEO";

import Amenities from "@/components/Amenities";
import Restaurant from "@/components/Restaurant";
import ApartmentRental from "@/components/ApartmentRental";
import Location from "@/components/Location";
import SocialMedia from "@/components/SocialMedia";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import ReservationForm from "@/components/ReservationForm";
import KnowledgeSection from "@/components/KnowledgeSection";
import PousadaMap from "@/components/PousadaMap";

const Index = () => {
  return (
    <div className="min-h-screen villa-home">
      <EnhancedSEO
        title="Pousada com piscina em Penha SC"
        description="Conheça a Vila D'Itália em Penha SC: piscinas externa e coberta, fotos das acomodações e informações para sua viagem ao Beto Carrero. Consulte datas e valores."
        canonical="/"
        keywords="pousada penha, pousada beto carrero, hospedagem penha, pousada praia armacao, pousada com piscina penha, hotel familiar penha"
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />
      <Navigation />

      <main id="main-content">
        <Hero />
        <VillaIntroduction />
        <Gallery />
        <Amenities />
        <Restaurant />
        <ApartmentRental />
        <Location />
        <KnowledgeSection />
        <SocialMedia />
        <Blog />
        <ReservationForm />
        <HomeBetoFAQ />
        <Contact />
        <PousadaMap />
      </main>

    </div>
  );
};

export default Index;
