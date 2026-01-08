import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertySearch from "@/components/PropertySearch";
import PropertyGallery from "@/components/PropertyGallery";
import About from "@/components/About";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PropertySearch />
      <PropertyGallery />
      <About />
      <Services />
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
