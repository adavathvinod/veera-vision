import { Search, MapPin, Home, IndianRupee } from "lucide-react";

const PropertySearch = () => {
  return (
    <section className="relative z-20 -mt-12 px-6">
      <div className="container mx-auto">
        <div className="bg-background shadow-card rounded-lg p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Location */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground tracking-wide uppercase flex items-center gap-2">
                <MapPin size={14} className="text-gold" />
                Location
              </label>
              <select className="w-full p-3 bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all">
                <option value="">All Locations</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">New Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="goa">Goa</option>
                <option value="hyderabad">Hyderabad</option>
              </select>
            </div>

            {/* Property Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground tracking-wide uppercase flex items-center gap-2">
                <Home size={14} className="text-gold" />
                Property Type
              </label>
              <select className="w-full p-3 bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all">
                <option value="">All Types</option>
                <option value="villa">Luxury Villa</option>
                <option value="penthouse">Penthouse</option>
                <option value="apartment">Apartment</option>
                <option value="bungalow">Bungalow</option>
                <option value="farmhouse">Farmhouse</option>
              </select>
            </div>

            {/* Price Range */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground tracking-wide uppercase flex items-center gap-2">
                <IndianRupee size={14} className="text-gold" />
                Price Range
              </label>
              <select className="w-full p-3 bg-secondary border border-border rounded text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all">
                <option value="">Any Price</option>
                <option value="1-5">₹1 Cr - ₹5 Cr</option>
                <option value="5-10">₹5 Cr - ₹10 Cr</option>
                <option value="10-25">₹10 Cr - ₹25 Cr</option>
                <option value="25+">₹25 Cr+</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button className="w-full flex items-center justify-center gap-3 px-6 py-3 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-[1.02]">
                <Search size={18} />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
