import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Award, Users, Building2, Shield, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Client-Centric",
    description: "Your needs drive everything we do. We listen, understand, and deliver beyond expectations.",
  },
  {
    icon: Shield,
    title: "Transparency",
    description: "Complete honesty in every transaction. No hidden fees, no surprises—just clear communication.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about Hyderabad real estate and helping families find their perfect homes.",
  },
];

const stats = [
  { value: "100+", label: "Properties Sold" },
  { value: "10+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              About Us
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              Redefining Luxury Real Estate in Hyderabad
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              For over 10 years, Veera Properties has been the trusted name in Hyderabad's premium real estate market. Our journey began with a simple vision—to help families find homes that inspire and investments that grow.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                Born & Raised in Hyderabad
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2015, Veera Properties started as a small family business with big dreams. Our founder, with deep roots in Hyderabad, understood that buying a home is more than a transaction—it's a life-changing decision.
                </p>
                <p>
                  Today, we're proud to be one of Hyderabad's leading luxury real estate agencies. From the tree-lined avenues of Jubilee Hills to the modern towers of Hitech City, we've helped hundreds of families find their dream homes.
                </p>
                <p>
                  Our success is built on one simple principle: treating every client like family. We take the time to understand your needs, preferences, and aspirations, ensuring that we find not just a house, but a home.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-secondary rounded-lg p-8 text-center">
                  <p className="font-serif text-3xl md:text-4xl text-gold mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Values
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-primary-foreground mb-6">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 border border-primary-foreground/10 rounded-lg hover:border-gold/50 transition-all duration-300"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-gold rounded-full mx-auto mb-6">
                  <value.icon size={32} className="text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl text-primary-foreground mb-4">{value.title}</h3>
                <p className="text-primary-foreground/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
              The Veera Advantage
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "RERA Registered", desc: "All our properties are RERA compliant" },
              { icon: Users, title: "Local Expertise", desc: "Deep knowledge of Hyderabad market" },
              { icon: Building2, title: "Exclusive Listings", desc: "Access to off-market properties" },
              { icon: Shield, title: "End-to-End Support", desc: "From search to registration" },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-secondary rounded-lg group hover:shadow-card transition-all duration-300">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded mb-4 group-hover:scale-110 transition-transform">
                  <item.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default AboutPage;
