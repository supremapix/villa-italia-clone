import Navigation from "@/components/Navigation";
import SummerAlert from "@/components/SummerAlert";
import Hero from "@/components/Hero";
import KeyInfo from "@/components/KeyInfo";
import Gallery from "@/components/Gallery";
import Welcome from "@/components/Welcome";
import PenhaAccordion from "@/components/PenhaAccordion";

import Amenities from "@/components/Amenities";
import BetoCarrero from "@/components/BetoCarrero";
import Restaurant from "@/components/Restaurant";
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
