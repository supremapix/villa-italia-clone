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
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import KnowledgeSection from "@/components/KnowledgeSection";
import PousadaMap from "@/components/PousadaMap";

const Index = () => {
  return (
    <div className="min-h-screen villa-home">
      <EnhancedSEO
        title="Pousada Penha SC perto do Beto Carrero"
        description="Pousada Vila D'Italia em Penha/SC: a poucos passos da Praia de Armação e 5min do Beto Carrero World. Piscina, café da manhã, ideal para famílias."
        canonical="/"
        keywords="pousada penha, hotel penha sc, pousada beto carrero, hospedagem penha, pousada praia armacao, pousada com piscina penha, cafe da manha incluso, hospedagem barata penha, hotel familiar penha"
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
      <Footer />
      <FloatingButtons />

    </div>
  );
};

export default Index;
