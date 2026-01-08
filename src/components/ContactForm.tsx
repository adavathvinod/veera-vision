import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Phone, Calendar, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15, "Phone number is too long"),
  propertyType: z.string().min(1, "Please select a property type"),
  budget: z.string().min(1, "Please select a budget range"),
  preferredDate: z.string().min(1, "Please select a preferred callback date"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  message: z.string().max(500, "Message is too long").optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Request Submitted Successfully!",
      description: "Our team will call you back at your preferred time.",
    });
    reset();
    
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="bg-background rounded-2xl shadow-card p-8 md:p-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 flex items-center justify-center bg-gradient-gold rounded-lg">
          <Calendar className="text-accent-foreground" size={24} />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-foreground">Schedule a Callback</h3>
          <p className="text-muted-foreground text-sm">We'll reach out at your convenience</p>
        </div>
      </div>

      {isSubmitted ? (
        <div className="text-center py-12">
          <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
          <h4 className="font-serif text-2xl text-foreground mb-2">Thank You!</h4>
          <p className="text-muted-foreground">We'll contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Full Name *
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              {errors.name && (
                <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Email Address *
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Phone Number *
              </label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="+91 99999 99999"
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Property Type *
              </label>
              <select
                {...register("propertyType")}
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              >
                <option value="">Select Type</option>
                <option value="villa">Villa</option>
                <option value="bungalow">Bungalow</option>
                <option value="apartment">Apartment</option>
                <option value="penthouse">Penthouse</option>
                <option value="farmhouse">Farmhouse</option>
                <option value="plot">Plot</option>
              </select>
              {errors.propertyType && (
                <p className="text-destructive text-sm mt-1">{errors.propertyType.message}</p>
              )}
            </div>

            {/* Budget */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Budget Range *
              </label>
              <select
                {...register("budget")}
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              >
                <option value="">Select Budget</option>
                <option value="1-3">₹1 Cr - ₹3 Cr</option>
                <option value="3-5">₹3 Cr - ₹5 Cr</option>
                <option value="5-10">₹5 Cr - ₹10 Cr</option>
                <option value="10-15">₹10 Cr - ₹15 Cr</option>
                <option value="15+">₹15 Cr+</option>
              </select>
              {errors.budget && (
                <p className="text-destructive text-sm mt-1">{errors.budget.message}</p>
              )}
            </div>

            {/* Preferred Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Callback Date *
              </label>
              <input
                {...register("preferredDate")}
                type="date"
                min={new Date().toISOString().split('T')[0]}
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              />
              {errors.preferredDate && (
                <p className="text-destructive text-sm mt-1">{errors.preferredDate.message}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Preferred Time *
              </label>
              <select
                {...register("preferredTime")}
                className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
              >
                <option value="">Select Time</option>
                <option value="9-11">9:00 AM - 11:00 AM</option>
                <option value="11-1">11:00 AM - 1:00 PM</option>
                <option value="2-4">2:00 PM - 4:00 PM</option>
                <option value="4-6">4:00 PM - 6:00 PM</option>
                <option value="6-8">6:00 PM - 8:00 PM</option>
              </select>
              {errors.preferredTime && (
                <p className="text-destructive text-sm mt-1">{errors.preferredTime.message}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Requirements (Optional)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your specific requirements..."
              className="w-full p-3 bg-secondary border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-gold text-accent-foreground font-medium tracking-wider uppercase rounded-lg transition-all duration-300 hover:shadow-hover hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send size={18} />
                Request Callback
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
