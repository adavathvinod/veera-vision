import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
  property: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Sharma",
    role: "IT Professional",
    image: testimonial1,
    rating: 5,
    review: "Veera Properties made our dream of owning a home in Jubilee Hills come true. Their team was incredibly professional, transparent, and helpful throughout the entire process. Highly recommended!",
    property: "Jubilee Hills Villa"
  },
  {
    id: 2,
    name: "Priya Reddy",
    role: "Business Owner",
    image: testimonial2,
    rating: 5,
    review: "I was looking for an investment property in Hyderabad and Veera Properties exceeded all my expectations. Their market knowledge and personalized service made the entire experience seamless.",
    property: "Gachibowli Duplex"
  },
  {
    id: 3,
    name: "Venkat & Lakshmi",
    role: "Retired Couple",
    image: testimonial3,
    rating: 5,
    review: "After 30 years abroad, we wanted to settle in Hyderabad. Veera Properties understood our needs perfectly and found us the ideal home. Their after-sales support has been exceptional.",
    property: "Banjara Hills Bungalow"
  }
];
