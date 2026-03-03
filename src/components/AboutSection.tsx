import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import buntyImg from "@/assets/bunty-portrait.jpeg";
import { Camera, Users, Palette, Award } from "lucide-react";

const highlights = [
  { icon: Camera, label: "7+ Years", desc: "Photography Experience" },
  { icon: Users, label: "500+", desc: "Happy Clients" },
  { icon: Palette, label: "100+", desc: "Graphic Design Clients" },
  { icon: Award, label: "Pro", desc: "Editing & Album Design" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-2">
            Meet <span className="gold-gradient-text">Bunty Chavan</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              <img
                src={buntyImg}
                alt="Bunty Chavan - Owner of Sai Photo Studio"
                className="w-full h-full object-cover rounded-full border-4 border-primary/40"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-3 gold-gradient-text">📸 Sai Photo Studio</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Led by Bunty Chavan, Sai Photo Studio has been capturing timeless memories for over 7 years.
                We specialize in wedding storytelling, creative pre-wedding shoots, and professional
                photography services in Patan and surrounding areas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3 gold-gradient-text">🎨 Sai Graphics</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                In 2025, Sai Graphics was launched to provide premium graphic design solutions. Within just
                6 months, we have successfully served 100+ clients with creative branding and wedding design
                solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="glass-card rounded-lg p-6 text-center"
            >
              <h.icon className="mx-auto mb-3 text-primary" size={28} />
              <p className="text-2xl font-bold font-heading gold-gradient-text">{h.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
