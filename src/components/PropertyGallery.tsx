import { useState } from "react";
import { Link } from "react-router-dom";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { properties } from "@/data/properties";

const areas = ["All", "Jubilee Hills", "Banjara Hills", "Gachibowli", "Kondapur", "Hitech City", "Shamirpet"];

const PropertyGallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = activeFilter === "All" 
    ? properties 
    : properties.filter(p => p.area === activeFilter);

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Our Portfolio
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Premium Properties in Hyderabad
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of luxury homes across Hyderabad's most sought-after localities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {areas.map((area) => (
            <button
              key={area}
              onClick={() => setActiveFilter(area)}
              className={`px-5 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === area
                  ? "bg-gradient-gold text-accent-foreground"
                  : "bg-background text-muted-foreground hover:text-foreground border border-border"
              }`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
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
                      {property.sqft}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/properties"
            className="inline-flex items-center px-8 py-4 border-2 border-foreground text-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            View All Properties
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
