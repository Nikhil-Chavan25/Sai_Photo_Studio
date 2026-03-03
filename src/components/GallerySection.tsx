import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import g1 from "@/assets/gallery-1.jpeg";
import g2 from "@/assets/gallery-2.jpeg";
import g3 from "@/assets/gallery-3.jpeg";
import g4 from "@/assets/gallery-4.jpeg";
import g5 from "@/assets/gallery-5.jpeg";
import g6 from "@/assets/gallery-6.jpeg";
import g7 from "@/assets/gallery-7.jpeg";
import g8 from "@/assets/gallery-8.jpeg";
import g9 from "@/assets/gallery-9.jpeg";
import g10 from "@/assets/23.jpeg";
import g11 from "@/assets/12 .jpeg";
import g12 from "@/assets/2.jpeg";
import g13 from "@/assets/3.jpeg";

const images = [
  { src: g1, cat: "Pre-Wedding" },
  { src: g2, cat: "Pre-Wedding" },
  { src: g11, cat: "Pre-Wedding" },
  { src: g3, cat: "Pre-Wedding" },
   { src: g12, cat: "Pre-Wedding" },
  { src: g4, cat: "Studio Shoots" },
  { src: g5, cat: "Studio Shoots" },
  { src: g10, cat: "Studio Shoots" },
  { src: g13, cat: "Studio Shoots" },
  { src: g6, cat: "Pre-Wedding" },
  { src: g7, cat: "Weddings" },
  { src: g8, cat: "Pre-Wedding" },
  { src: g9, cat: "Weddings" },
];

const filters = ["All", "Weddings", "Pre-Wedding", "Studio Shoots"];

const GallerySection = () => {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = active === "All" ? images : images.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Our <span className="gold-gradient-text">Gallery</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300 border ${
                active === f
                  ? "bg-primary border-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 md:columns-3 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((img, i) => (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="break-inside-avoid cursor-pointer group overflow-hidden rounded-lg"
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.cat}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
