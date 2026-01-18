import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navTextClass = isScrolled || !isHomePage
    ? "text-foreground"
    : "text-primary-foreground";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Veera Properties" className="h-10 w-10 object-contain" />
          <span className={`font-serif text-xl font-semibold tracking-wide transition-colors duration-300 ${navTextClass}`}>
            Veera Properties
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:text-gold ${navTextClass} ${
                location.pathname === link.href ? "text-gold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-6 py-2.5 bg-gradient-gold text-accent-foreground text-sm font-medium tracking-wider uppercase rounded transition-all duration-300 hover:shadow-hover hover:scale-105"
        >
          Schedule Viewing
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${navTextClass}`}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background shadow-elegant transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-foreground text-sm font-medium tracking-wider uppercase py-2 border-b border-border last:border-b-0 hover:text-gold transition-colors ${
                location.pathname === link.href ? "text-gold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 text-center px-6 py-3 bg-gradient-gold text-accent-foreground text-sm font-medium tracking-wider uppercase rounded"
          >
            Schedule Viewing
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
