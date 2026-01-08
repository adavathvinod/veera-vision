import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";
import property4 from "@/assets/property-4.jpg";
import property5 from "@/assets/property-5.jpg";
import property6 from "@/assets/property-6.jpg";

const properties = [
  {
    id: 1,
    image: property1,
    title: "Skyline Penthouse",
    location: "Mumbai, Maharashtra",
    price: "₹18.5 Cr",
    beds: 4,
    baths: 5,
    area: "5,200 sq ft",
    tag: "Featured",
  },
  {
    id: 2,
    image: property2,
    title: "Ocean View Villa",
    location: "Goa, India",
    price: "₹12.8 Cr",
    beds: 5,
    baths: 6,
    area: "7,500 sq ft",
    tag: "New",
  },
  {
    id: 3,
    image: property3,
    title: "Hillside Retreat",
    location: "Lonavala, Maharashtra",
    price: "₹8.2 Cr",
    beds: 4,
    baths: 4,
    area: "4,800 sq ft",
    tag: null,
  },
  {
    id: 4,
    image: property4,
    title: "Heritage Townhouse",
    location: "New Delhi",
    price: "₹22.5 Cr",
    beds: 6,
    baths: 7,
    area: "8,200 sq ft",
    tag: "Premium",
  },
  {
    id: 5,
    image: property5,
    title: "Mountain Lodge",
    location: "Shimla, Himachal",
    price: "₹6.5 Cr",
    beds: 5,
    baths: 5,
    area: "6,000 sq ft",
    tag: null,
  },
  {
    id: 6,
    image: property6,
    title: "Waterfront Estate",
    location: "Kerala Backwaters",
    price: "₹15.0 Cr",
    beds: 4,
    baths: 5,
    area: "5,800 sq ft",
    tag: "Exclusive",
  },
];

const PropertyGallery = () => {
  return (
    <section id="properties" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Premium Properties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of luxury homes, each offering unparalleled elegance and modern amenities.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group bg-background rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {property.tag && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-gold text-accent-foreground text-xs font-medium tracking-wider uppercase rounded">
                    {property.tag}
                  </span>
                )}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-charcoal/80 backdrop-blur-sm text-primary-foreground font-serif text-lg rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {property.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl text-foreground mb-2 group-hover:text-gold transition-colors">
                  {property.title}
                </h3>
                <p className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin size={14} className="text-gold" />
                  {property.location}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-muted-foreground text-sm">
                    <span className="flex items-center gap-1">
                      <Bed size={14} />
                      {property.beds}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath size={14} />
                      {property.baths}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize size={14} />
                      {property.area}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border-2 border-foreground text-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
