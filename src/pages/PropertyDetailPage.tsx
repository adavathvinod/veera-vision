import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ContactForm from "@/components/ContactForm";
import { getPropertyById, properties } from "@/data/properties";
import { Bed, Bath, Maximize, MapPin, Check, ChevronLeft, ChevronRight, Phone, MessageCircle } from "lucide-react";

const PropertyDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const property = getPropertyById(id || "");
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "floorplan">("overview");

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="font-serif text-4xl text-foreground mb-4">Property Not Found</h1>
          <Link to="/properties" className="text-gold hover:underline">
            Browse all properties
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const relatedProperties = properties.filter(p => p.id !== property.id).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-foreground">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="bg-secondary pb-8">
        <div className="container mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden">
            <img
              src={property.images[activeImageIndex]}
              alt={property.title}
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
            
            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-gold hover:text-accent-foreground transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-full text-foreground hover:bg-gold hover:text-accent-foreground transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Tag */}
            {property.tag && (
              <span className="absolute top-4 left-4 px-4 py-2 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded">
                {property.tag}
              </span>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 px-4 py-2 bg-charcoal/80 backdrop-blur-sm text-primary-foreground text-sm rounded">
              {activeImageIndex + 1} / {property.images.length}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4 overflow-x-auto pb-2">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImageIndex(index)}
                className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === activeImageIndex ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={image} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
                  {property.title}
                </h1>
                <p className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin size={18} className="text-gold" />
                  {property.location}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Bed size={18} />
                    {property.beds} Bedrooms
                  </span>
                  <span className="flex items-center gap-2">
                    <Bath size={18} />
                    {property.baths} Bathrooms
                  </span>
                  <span className="flex items-center gap-2">
                    <Maximize size={18} />
                    {property.sqft}
                  </span>
                </div>
              </div>

              {/* Price */}
              <div className="bg-secondary rounded-xl p-6 mb-8">
                <p className="text-muted-foreground text-sm mb-1">Price</p>
                <p className="font-serif text-3xl text-gold">{property.price}</p>
              </div>

              {/* Tabs */}
              <div className="border-b border-border mb-8">
                <div className="flex gap-8">
                  {[
                    { id: "overview", label: "Overview" },
                    { id: "features", label: "Features" },
                    { id: "floorplan", label: "Floor Plan" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as typeof activeTab)}
                      className={`pb-4 text-sm font-medium tracking-wider uppercase transition-all ${
                        activeTab === tab.id
                          ? "text-gold border-b-2 border-gold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === "overview" && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    {property.description}
                  </p>
                </div>
              )}

              {activeTab === "features" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <Check size={18} className="text-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "floorplan" && (
                <div className="bg-secondary rounded-xl p-4">
                  <img
                    src={property.floorPlan}
                    alt="Floor Plan"
                    className="w-full rounded-lg"
                  />
                </div>
              )}

              {/* Quick Contact */}
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+919999999999"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded-lg transition-all hover:shadow-hover"
                >
                  <Phone size={20} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi, I'm interested in ${property.title} (${property.price})`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-primary-foreground font-medium tracking-wider uppercase rounded-lg transition-all hover:shadow-hover"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Sidebar - Contact Form */}
            <div className="lg:col-span-1">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
            Similar Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProperties.map((prop) => (
              <Link
                key={prop.id}
                to={`/properties/${prop.id}`}
                className="group bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">{prop.location}</p>
                  <p className="font-serif text-gold">{prop.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default PropertyDetailPage;
