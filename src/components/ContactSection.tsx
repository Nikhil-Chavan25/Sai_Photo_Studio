import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Phone, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error("Please fill in Name and Phone.");
      return;
    }
    const text = `Name: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919657824524?text=${text}`, "_blank");
    toast.success("Redirecting to WhatsApp!");
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Contact <span className="gold-gradient-text">Us</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Sai Photo Studio</h4>
                  <p className="text-sm text-muted-foreground">
                    Shop No 2, near Patan, Kumbharwada, Patan, Maharashtra 415206, India
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-lg p-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-heading font-semibold text-foreground mb-1">Sai Graphics</h4>
                  <p className="text-sm text-muted-foreground">
                    In front of Bank of Maharashtra, Patan, Maharashtra 415206, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="tel:+919657824524" className="gold-border-btn flex items-center gap-2 text-xs py-3 px-6">
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/919657824524"
                target="_blank"
                rel="noopener noreferrer"
                className="gold-solid-btn flex items-center gap-2 text-xs py-3 px-6"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-border h-52">
              <iframe
                title="Sai Photo Studio Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0!2d73.9!3d17.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIyJzQ4LjAiTiA3M8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-lg p-8 space-y-5">
              <h3 className="font-heading text-xl font-bold gold-gradient-text mb-2">Send Us a Message</h3>
              {[
                { name: "name" as const, placeholder: "Your Name *", type: "text" },
                { name: "phone" as const, placeholder: "Phone Number *", type: "tel" },
                { name: "email" as const, placeholder: "Email Address", type: "email" },
              ].map((f) => (
                <input
                  key={f.name}
                  type={f.type}
                  placeholder={f.placeholder}
                  value={form[f.name]}
                  onChange={(e) => setForm({ ...form, [f.name]: e.target.value })}
                  maxLength={f.name === "email" ? 255 : 100}
                  className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors"
                />
              ))}
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/60 transition-colors"
              >
                <option value="">Select Service Type</option>
                <option value="Photography">Photography</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
              <textarea
                placeholder="Your Message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                rows={4}
                className="w-full bg-secondary/50 border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 transition-colors resize-none"
              />
              <button type="submit" className="gold-solid-btn w-full flex items-center justify-center gap-2">
                <Send size={16} /> Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
