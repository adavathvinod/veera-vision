import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-[0.3em] uppercase text-sm mb-4">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ready to find your dream home in Hyderabad? Our team is here to help. Reach out to us and let's start your property journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded-lg flex-shrink-0">
                    <MapPin size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Plot 123, Road No. 10<br />
                      Jubilee Hills, Hyderabad<br />
                      Telangana 500033
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded-lg flex-shrink-0">
                    <Phone size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Call Us</h3>
                    <a href="tel:+919999999999" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 99999 99999
                    </a>
                    <br />
                    <a href="tel:+914012345678" className="text-muted-foreground hover:text-gold transition-colors">
                      +91 40 1234 5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded-lg flex-shrink-0">
                    <Mail size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Email Us</h3>
                    <a href="mailto:info@veeraproperties.com" className="text-muted-foreground hover:text-gold transition-colors">
                      info@veeraproperties.com
                    </a>
                    <br />
                    <a href="mailto:sales@veeraproperties.com" className="text-muted-foreground hover:text-gold transition-colors">
                      sales@veeraproperties.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-secondary rounded-xl">
                  <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded-lg flex-shrink-0">
                    <Clock size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-foreground mb-1">Working Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 7:00 PM<br />
                      Sunday: By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-[#25D366] text-primary-foreground font-medium tracking-wider uppercase rounded-lg transition-all hover:shadow-hover"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href="tel:+919999999999"
                  className="flex-1 flex items-center justify-center gap-3 px-6 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded-lg transition-all hover:shadow-hover"
                >
                  <Phone size={20} />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.8276548707396!2d78.41226037516644!3d17.421920783461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb972b5e3f0cd5%3A0xb7d37c1d1c96c79a!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ContactPage;
