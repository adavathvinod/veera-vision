import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PropertyGallery from "@/components/PropertyGallery";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Link } from "react-router-dom";
import { Award, Users, Building2, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as Hyderabad's top luxury real estate agency.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Local experts with decades of combined experience.",
  },
  {
    icon: Building2,
    title: "Premium Portfolio",
    description: "Access to exclusive off-market properties.",
  },
  {
    icon: Shield,
    title: "RERA Registered",
    description: "Complete transparency in every transaction.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
                About Veera Properties
              </p>
              <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
                Hyderabad's Trusted
                <span className="block text-gold">Real Estate Partner</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                For over 15 years, Veera Properties has been connecting discerning buyers with exceptional homes across Hyderabad. From the prestigious lanes of Jubilee Hills to the IT corridors of Gachibowli, we understand the pulse of Hyderabad's luxury real estate market.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-105"
              >
                Learn More About Us
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-secondary rounded-lg hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} className="text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PropertyGallery />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Ready to Find Your Dream Home?
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-6">
            Let's Start Your Journey
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            Whether you're looking for a luxury villa in Jubilee Hills or a modern apartment in Hitech City, our team is here to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:bg-primary-foreground/10"
            >
              Call Us Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default Index;
