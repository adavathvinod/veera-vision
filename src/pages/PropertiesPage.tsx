import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import { Bed, Bath, Maximize, MapPin, Search } from "lucide-react";
import { properties } from "@/data/properties";

const areas = ["All", "Jubilee Hills", "Banjara Hills", "Gachibowli", "Kondapur", "Hitech City", "Shamirpet"];
const priceRanges = ["All", "₹1-5 Cr", "₹5-10 Cr", "₹10-15 Cr", "₹15+ Cr"];
const propertyTypes = ["All", "Villa", "Bungalow", "Duplex", "Penthouse", "Farmhouse"];

const PropertiesPage = () => {
  const [areaFilter, setAreaFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProperties = properties.filter((property) => {
    const matchesArea = areaFilter === "All" || property.area === areaFilter;
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Our Properties
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              Premium Properties in Hyderabad
            </h1>
            <p className="text-muted-foreground text-lg">
              Discover your perfect home from our curated collection of luxury properties across Hyderabad's most prestigious neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-secondary border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search by name or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
            </div>

            {/* Area Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {areas.map((area) => (
                <button
                  key={area}
                  onClick={() => setAreaFilter(area)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    areaFilter === area
                      ? "bg-gradient-gold text-accent-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground border border-border"
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing {filteredProperties.length} {filteredProperties.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((property) => (
                <Link
                  key={property.id}
                  to={`/properties/${property.id}`}
                  className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 hover:-translate-y-2"
                >
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
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-card-foreground mb-2 group-hover:text-gold transition-colors">
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
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No properties found matching your criteria.</p>
              <button
                onClick={() => { setAreaFilter("All"); setSearchQuery(""); }}
                className="mt-4 text-gold hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default PropertiesPage;
