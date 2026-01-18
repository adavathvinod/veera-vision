import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-villa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-20">
        <div className="max-w-3xl">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-6 animate-fade-up">
            Genuine Real Estate in Hyderabad
          </p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Find Your Dream 
            <span className="block text-gradient-gold">Home in Hyderabad</span>
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-xl mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Discover genuine properties - open plots, houses, apartments, and agriculture lands across Hyderabad's best localities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-primary-foreground/30 text-primary-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
            >
              Request Callback
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-charcoal/90 backdrop-blur-sm border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "100+", label: "Properties Sold" },
              { value: "10+", label: "Years in Hyderabad" },
              { value: "100%", label: "Happy Clients" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="font-serif text-2xl md:text-3xl text-gold mb-1">{stat.value}</p>
                <p className="text-primary-foreground/60 text-sm tracking-wider uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
