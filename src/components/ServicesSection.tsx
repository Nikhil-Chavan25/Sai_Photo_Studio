import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera, Heart, UserCheck, BookOpen, Film,
  Pen, Mail, Image, CreditCard, Flag, Disc
} from "lucide-react";

const photoServices = [
  { icon: Heart, title: "Wedding Photography", desc: "Cinematic coverage of your special day with artistic storytelling" },
  { icon: Camera, title: "Pre-Wedding Shoot", desc: "Creative couple shoots at stunning locations" },
  { icon: UserCheck, title: "Passport Photo", desc: "Professional ID & passport photos with instant delivery" },
  { icon: BookOpen, title: "Album Design", desc: "Premium wedding album designing with luxury finishes" },
  { icon: Film, title: "Video Editing", desc: "Cinematic wedding films and highlight reels" },
];

const graphicServices = [
  { icon: Pen, title: "Logo Design", desc: "Unique brand identity and logo creation" },
  { icon: Mail, title: "Wedding Invitation Cards", desc: "Elegant digital & print wedding invitations" },
  { icon: Image, title: "Social Media Posters", desc: "Eye-catching posts for all platforms" },
  { icon: CreditCard, title: "Business Cards", desc: "Professional visiting card design" },
  { icon: Flag, title: "Banner Design", desc: "Large format banners and flex designs" },
  { icon: Disc, title: "Album Cover Design", desc: "Creative album and book cover artwork" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState<"photo" | "graphic">("photo");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const services = activeTab === "photo" ? photoServices : graphicServices;

  return (
    <section id="services" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Our Services</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            What We <span className="gold-gradient-text">Offer</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: "photo" as const, label: "📸 Photography" },
            { key: "graphic" as const, label: "🎨 Graphic Design" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-6 py-3 rounded-sm text-sm font-medium tracking-wider uppercase transition-all duration-300 border ${
                activeTab === t.key
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-primary"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card rounded-lg p-8 text-center group cursor-default"
            >
              <div className="w-14 h-14 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/10 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
