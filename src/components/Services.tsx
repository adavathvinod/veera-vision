import { Home, Key, FileText, TrendingUp, Briefcase, HeartHandshake } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Sales",
    description: "Expert guidance through every step of buying or selling your luxury property.",
  },
  {
    icon: Key,
    title: "Property Management",
    description: "Comprehensive management services for your real estate investments.",
  },
  {
    icon: FileText,
    title: "Legal Assistance",
    description: "Complete documentation and legal support for seamless transactions.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic advice to maximize returns on your property investments.",
  },
  {
    icon: Briefcase,
    title: "Corporate Relocations",
    description: "Tailored solutions for executives and corporate housing needs.",
  },
  {
    icon: HeartHandshake,
    title: "Concierge Services",
    description: "White-glove service to make your property transition effortless.",
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
            Comprehensive real estate solutions designed to exceed your expectations at every touchpoint.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-charcoal-light/50 border border-primary-foreground/10 rounded-lg hover:border-gold/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center border border-gold/30 rounded-lg mb-6 group-hover:bg-gradient-gold group-hover:border-transparent transition-all duration-300">
                <service.icon size={28} className="text-gold group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-primary-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-primary-foreground/60 leading-relaxed">
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
