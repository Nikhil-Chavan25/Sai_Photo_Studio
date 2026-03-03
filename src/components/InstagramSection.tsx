import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Follow Us</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            On <span className="gold-gradient-text">Instagram</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Sai Photo Studio",
              handle: "@sai_photography_01",
              url: "https://www.instagram.com/sai_photography_01",
              desc: "Wedding stories, pre-wedding magic & cinematic moments",
              label: "Follow Photography",
            },
            {
              name: "Sai Graphics",
              handle: "@sai_graphics2025",
              url: "https://www.instagram.com/sai_graphics2025",
              desc: "Logo designs, invitations, posters & creative branding",
              label: "Follow Sai Graphics",
            },
          ].map((item, i) => (
            <motion.div
              key={item.handle}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
              className="glass-card rounded-lg p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary/40 flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold gold-gradient-text mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-1">{item.handle}</p>
              <p className="text-xs text-muted-foreground mb-6">{item.desc}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-border-btn inline-block text-xs py-2 px-6"
              >
                {item.label}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
