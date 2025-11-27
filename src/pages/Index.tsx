import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import KeyInfo from "@/components/KeyInfo";
import Welcome from "@/components/Welcome";
import PenhaAccordion from "@/components/PenhaAccordion";
import Story from "@/components/Story";
import Amenities from "@/components/Amenities";
import BetoCarrero from "@/components/BetoCarrero";
import Location from "@/components/Location";
import PenhaSection from "@/components/PenhaSection";
import SocialMedia from "@/components/SocialMedia";
import Blog from "@/components/Blog";
import InstagramFeed from "@/components/InstagramFeed";
import Suggestions from "@/components/Suggestions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <KeyInfo />
        <Welcome />
        <PenhaAccordion />
        <Story />
        <Amenities />
        <BetoCarrero />
        <Location />
        <PenhaSection />
        <SocialMedia />
        <Blog />
        <InstagramFeed />
        <Suggestions />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Index;
