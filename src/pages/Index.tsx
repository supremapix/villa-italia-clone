import Navigation from "@/components/Navigation";
import SummerAlert from "@/components/SummerAlert";
import Hero from "@/components/Hero";
import KeyInfo from "@/components/KeyInfo";
import Gallery from "@/components/Gallery";
import GoogleReviews from "@/components/GoogleReviews";
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
      <SummerAlert />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <KeyInfo />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Gallery />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <GoogleReviews />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Welcome />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <PenhaAccordion />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Story />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Amenities />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <BetoCarrero />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Location />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <PenhaSection />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <SocialMedia />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Blog />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <InstagramFeed />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Suggestions />
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-8" />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  );
};

export default Index;
