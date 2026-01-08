import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 bg-[#25D366] text-primary-foreground rounded-full shadow-lg hover:shadow-hover hover:scale-110 transition-all duration-300"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={24} fill="currentColor" />
        <span className="absolute right-full mr-3 px-3 py-2 bg-charcoal text-primary-foreground text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Phone Button */}
      <a
        href="tel:+919999999999"
        className="group flex items-center justify-center w-14 h-14 bg-gradient-gold text-accent-foreground rounded-full shadow-lg hover:shadow-hover hover:scale-110 transition-all duration-300 animate-pulse"
        aria-label="Call us"
      >
        <Phone size={24} />
        <span className="absolute right-full mr-3 px-3 py-2 bg-charcoal text-primary-foreground text-sm font-medium rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
