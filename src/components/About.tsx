import { Award, Users, Building2, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized as the top luxury real estate agency for 5 consecutive years.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our dedicated professionals bring decades of combined experience.",
  },
  {
    icon: Building2,
    title: "Premium Portfolio",
    description: "Access to exclusive off-market properties and pre-launch offerings.",
  },
  {
    icon: Shield,
    title: "Trusted Partner",
    description: "Complete transparency and confidentiality in every transaction.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              Redefining Luxury
              <span className="block text-gold">Real Estate</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              At Veera Properties, we understand that finding your dream home is more than a transaction—it's a life-changing decision. For over 10 years, we've been connecting discerning buyers with exceptional properties that reflect their aspirations and lifestyle.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Our curated approach ensures that every property in our portfolio meets the highest standards of quality, design, and location. From stunning waterfront villas to prestigious city penthouses, we specialize in properties that define luxury living.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-105"
            >
              Learn More About Us
            </a>
          </div>

          {/* Features Grid */}
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
  );
};

export default About;
