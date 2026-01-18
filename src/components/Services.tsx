import { Home, Building, RefreshCw, Calendar, Building2, Trees, Handshake } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Open Plots",
    description: "Premium open plots in prime locations across Hyderabad for your dream home.",
  },
  {
    icon: Building,
    title: "New Houses",
    description: "Brand new ready-to-move houses with modern amenities and quality construction.",
  },
  {
    icon: RefreshCw,
    title: "Resale Houses",
    description: "Quality-verified resale properties at competitive prices in established localities.",
  },
  {
    icon: Calendar,
    title: "On Going Booking Houses",
    description: "Book your dream home in upcoming projects with flexible payment plans.",
  },
  {
    icon: Building2,
    title: "Apartment Flats",
    description: "Modern apartment flats in gated communities with world-class amenities.",
  },
  {
    icon: Trees,
    title: "Agriculture Lands",
    description: "Fertile agriculture lands and farmhouses in serene locations around Hyderabad.",
  },
  {
    icon: Handshake,
    title: "Buy and Sale",
    description: "Complete buy and sale assistance with transparent dealings and legal support.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-6">
            Our Services
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            All genuine properties available in Hyderabad. We deal in all types of properties to meet your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-charcoal-light/50 border border-primary-foreground/10 rounded-lg hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold/30 rounded-lg mb-4 group-hover:bg-gradient-gold group-hover:border-transparent transition-all duration-300">
                <service.icon size={24} className="text-gold group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-lg text-primary-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
