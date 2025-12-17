import Navigation from "@/components/Navigation";
import SummerAlert from "@/components/SummerAlert";
import Hero from "@/components/Hero";
import KeyInfo from "@/components/KeyInfo";
import Gallery from "@/components/Gallery";
import Welcome from "@/components/Welcome";
import PenhaAccordion from "@/components/PenhaAccordion";
import EnhancedSEO from "@/components/EnhancedSEO";

import Amenities from "@/components/Amenities";
import BetoCarrero from "@/components/BetoCarrero";
import Restaurant from "@/components/Restaurant";
import ApartmentRental from "@/components/ApartmentRental";
import Location from "@/components/Location";
import PenhaSection from "@/components/PenhaSection";
import PenhaNews from "@/components/PenhaNews";
import SocialMedia from "@/components/SocialMedia";
import Blog from "@/components/Blog";
import InstagramFeed from "@/components/InstagramFeed";
import Suggestions from "@/components/Suggestions";
import Contact from "@/components/Contact";
import ReservationForm from "@/components/ReservationForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO
        title="Pousada com Piscina e Cafe da Manha na Praia Armacao Penha SC - 5min Beto Carrero World"
        description="Pousada Vila D'Italia em Penha/SC: a poucos passos da Praia de Armacao e 5min do Beto Carrero World. Piscina, cafe da manha, melhor custo-beneficio para familias."
        canonical="/"
        keywords="pousada penha, hotel penha sc, pousada beto carrero, hospedagem penha, pousada praia armacao, pousada com piscina penha, cafe da manha incluso, hospedagem barata penha, hotel familiar penha"
        breadcrumbs={[
          { name: "Home", url: "/" }
        ]}
      />
      <Navigation />
      <SummerAlert />
      <main>
        <Hero />
        <KeyInfo />
        <Gallery />
        <Welcome />
        <PenhaAccordion />
        <Amenities />
        <BetoCarrero />
        <Restaurant />
        <ApartmentRental />
        <Location />
        <PenhaSection />
        <PenhaNews />
        <SocialMedia />
        <Blog />
        <InstagramFeed />
        <Suggestions />
        <ReservationForm />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Index;
