import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Home, Building, RefreshCw, Calendar, Building2, Trees, Handshake, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Open Plots",
    description: "Premium open plots in prime locations across Hyderabad for building your dream home.",
    features: ["Verified land titles", "Clear documentation", "Prime locations", "Flexible plot sizes"],
  },
  {
    icon: Building,
    title: "New Houses",
    description: "Brand new ready-to-move houses with modern amenities and quality construction.",
    features: ["Modern designs", "Quality construction", "Ready to move", "All amenities"],
  },
  {
    icon: RefreshCw,
    title: "Resale Houses",
    description: "Quality-verified resale properties at competitive prices in established localities.",
    features: ["Verified properties", "Best prices", "Established areas", "Immediate possession"],
  },
  {
    icon: Calendar,
    title: "On Going Booking Houses",
    description: "Book your dream home in upcoming projects with flexible payment plans.",
    features: ["Early bird discounts", "Flexible payments", "Premium projects", "Best locations"],
  },
  {
    icon: Building2,
    title: "Apartment Flats",
    description: "Modern apartment flats in gated communities with world-class amenities.",
    features: ["Gated communities", "Modern amenities", "24/7 security", "Multiple options"],
  },
  {
    icon: Trees,
    title: "Agriculture Lands",
    description: "Fertile agriculture lands and farmhouses in serene locations around Hyderabad.",
    features: ["Fertile lands", "Good water source", "Farm houses", "Investment options"],
  },
  {
    icon: Handshake,
    title: "Buy and Sale",
    description: "Complete buy and sale assistance with transparent dealings and legal support.",
    features: ["Transparent deals", "Legal support", "Best prices", "Quick process"],
  },
  {
    icon: FileText,
    title: "Legal Assistance",
    description: "Complete documentation and legal support for seamless transactions.",
    features: ["Title verification", "Agreement drafting", "Registration support", "Due diligence"],
  },
  {
    icon: Shield,
    title: "RERA Compliance",
    description: "Ensuring all properties and transactions are RERA compliant for your peace of mind.",
    features: ["RERA verification", "Documentation", "Compliance checks", "Legal protection"],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Services
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              All Genuine Properties Available
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From open plots to apartment flats, we offer all types of properties in Hyderabad. Complete buy and sale assistance with transparent dealings.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-secondary rounded-2xl hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-gold rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={28} className="text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Process
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-6">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your needs and preferences" },
              { step: "02", title: "Property Search", desc: "Curate matching properties" },
              { step: "03", title: "Site Visits", desc: "Arrange viewings at your convenience" },
              { step: "04", title: "Closing", desc: "Handle all documentation & registration" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 flex items-center justify-center border-2 border-gold rounded-full mx-auto mb-4">
                  <span className="font-serif text-2xl text-gold">{item.step}</span>
                </div>
                <h3 className="font-serif text-xl text-primary-foreground mb-2">{item.title}</h3>
                <p className="text-primary-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Contact us today for a free consultation and let us help you find your perfect property in Hyderabad.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-105"
          >
            Schedule Consultation
          </a>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ServicesPage;
