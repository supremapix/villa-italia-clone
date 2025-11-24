import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import Story from "@/components/Story";
import Amenities from "@/components/Amenities";
import BetoCarrero from "@/components/BetoCarrero";
import Location from "@/components/Location";
import Suggestions from "@/components/Suggestions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
        <Suggestions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
