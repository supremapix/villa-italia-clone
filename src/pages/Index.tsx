import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Amenities from "@/components/Amenities";
import BetoCarrero from "@/components/BetoCarrero";
import Location from "@/components/Location";
import PenhaSection from "@/components/PenhaSection";
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
        <Welcome />
        <Story />
        <Amenities />
        <BetoCarrero />
        <Location />
        <PenhaSection />
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
