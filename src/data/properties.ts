import property1 from "@/assets/hyd-property-1.jpg";
import property2 from "@/assets/hyd-property-2.jpg";
import property3 from "@/assets/hyd-property-3.jpg";
import property4 from "@/assets/hyd-property-4.jpg";
import property5 from "@/assets/hyd-property-5.jpg";
import property6 from "@/assets/hyd-property-6.jpg";
import floorPlan from "@/assets/floor-plan.jpg";

export interface Property {
  id: string;
  image: string;
  images: string[];
  title: string;
  location: string;
  area: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  tag: string | null;
  description: string;
  features: string[];
  floorPlan: string;
}

export const properties: Property[] = [
  {
    id: "jubilee-hills-villa",
    image: property1,
    images: [property1, property2, property3],
    title: "Jubilee Hills Luxury Villa",
    location: "Jubilee Hills, Hyderabad",
    area: "Jubilee Hills",
    price: "₹8.5 Cr",
    beds: 5,
    baths: 6,
    sqft: "6,500 sq ft",
    tag: "Featured",
    description: "This stunning 5-bedroom villa in the heart of Jubilee Hills offers panoramic views and world-class amenities. Featuring Italian marble flooring, German modular kitchen, and a private landscaped garden, this property represents the pinnacle of luxury living in Hyderabad.",
    features: [
      "Italian Marble Flooring",
      "German Modular Kitchen",
      "Private Swimming Pool",
      "Home Theater",
      "Landscaped Garden",
      "24/7 Security",
      "Covered Parking for 4 Cars",
      "Servant Quarters"
    ],
    floorPlan: floorPlan
  },
  {
    id: "banjara-hills-bungalow",
    image: property2,
    images: [property2, property1, property4],
    title: "Banjara Hills Bungalow",
    location: "Banjara Hills, Hyderabad",
    area: "Banjara Hills",
    price: "₹12.8 Cr",
    beds: 6,
    baths: 7,
    sqft: "8,200 sq ft",
    tag: "Premium",
    description: "An architectural masterpiece in prestigious Banjara Hills. This contemporary bungalow features expansive living spaces, a rooftop terrace with city views, and premium finishes throughout. Perfect for those seeking exclusivity and comfort.",
    features: [
      "Rooftop Terrace",
      "Infinity Pool",
      "Smart Home Automation",
      "Private Elevator",
      "Wine Cellar",
      "Gym & Spa",
      "Landscaped Lawns",
      "Underground Parking"
    ],
    floorPlan: floorPlan
  },
  {
    id: "gachibowli-duplex",
    image: property3,
    images: [property3, property5, property4],
    title: "Gachibowli Premium Duplex",
    location: "Gachibowli, Hyderabad",
    area: "Gachibowli",
    price: "₹4.2 Cr",
    beds: 4,
    baths: 5,
    sqft: "4,800 sq ft",
    tag: "New",
    description: "A modern duplex in Hyderabad's IT corridor. This property offers the perfect blend of luxury and convenience, with proximity to major tech parks and excellent connectivity. Features include double-height living room and panoramic balconies.",
    features: [
      "Double Height Living",
      "Modular Kitchen",
      "Club Membership",
      "Children's Play Area",
      "Jogging Track",
      "Power Backup",
      "Covered Parking",
      "Intercom Facility"
    ],
    floorPlan: floorPlan
  },
  {
    id: "kondapur-villa",
    image: property4,
    images: [property4, property1, property2],
    title: "Kondapur Pool Villa",
    location: "Kondapur, Hyderabad",
    area: "Kondapur",
    price: "₹6.5 Cr",
    beds: 4,
    baths: 5,
    sqft: "5,200 sq ft",
    tag: "Exclusive",
    description: "This premium villa features a stunning private pool and is located in a gated community. With world-class amenities and modern architecture, it offers an unparalleled lifestyle in one of Hyderabad's most sought-after neighborhoods.",
    features: [
      "Private Swimming Pool",
      "Gated Community",
      "24/7 Security",
      "Modular Kitchen",
      "Terrace Garden",
      "Double Car Parking",
      "Visitor Parking",
      "Community Hall"
    ],
    floorPlan: floorPlan
  },
  {
    id: "hitech-city-penthouse",
    image: property5,
    images: [property5, property3, property4],
    title: "Hitech City Penthouse",
    location: "Hitech City, Hyderabad",
    area: "Hitech City",
    price: "₹9.2 Cr",
    beds: 4,
    baths: 4,
    sqft: "4,500 sq ft",
    tag: "Luxury",
    description: "Experience sky-high living in this ultra-luxury penthouse. With 360-degree city views, private terrace, and premium finishes, this is the ultimate address for those who want to live above it all in Hyderabad's IT hub.",
    features: [
      "360° City Views",
      "Private Terrace",
      "Sky Lounge Access",
      "Smart Home Features",
      "Premium Fittings",
      "Dedicated Lift",
      "Concierge Service",
      "Helipad Access"
    ],
    floorPlan: floorPlan
  },
  {
    id: "shamirpet-farmhouse",
    image: property6,
    images: [property6, property1, property2],
    title: "Shamirpet Heritage Farmhouse",
    location: "Shamirpet, Hyderabad",
    area: "Shamirpet",
    price: "₹3.8 Cr",
    beds: 5,
    baths: 5,
    sqft: "12,000 sq ft",
    tag: null,
    description: "Escape to tranquility with this heritage-style farmhouse spread across 2 acres. Featuring traditional architecture with modern comforts, mango orchards, and a private lake view. Perfect as a weekend retreat or permanent residence.",
    features: [
      "2 Acre Land",
      "Mango Orchard",
      "Lake View",
      "Traditional Architecture",
      "Modern Amenities",
      "Organic Garden",
      "Outdoor Kitchen",
      "Guest House"
    ],
    floorPlan: floorPlan
  }
];

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find(p => p.id === id);
};
