import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import heroImg from "@/assets/gallery-1.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Wedding photography by Sai Photo Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Camera size={14} className="text-primary" />
            <span className="text-xs tracking-widest uppercase text-primary">
              7+ Years Experience • 500+ Happy Clients
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
            <span className="gold-gradient-text">Sai Photo</span>
            <br />
            <span className="text-foreground">Studio</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 font-light">
            Capturing Your Beautiful Moments Forever
          </p>

          <p className="text-sm text-muted-foreground mb-10">
            Led by <span className="text-primary font-medium">Bunty Chavan</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#contact" className="gold-solid-btn">
              Book Now
            </a>
            <a href="#gallery" className="gold-border-btn">
              View Gallery
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-primary/20 bg-primary/5"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs md:text-sm text-muted-foreground">
              Now Introducing <span className="text-primary font-semibold">Sai Graphics</span> – Premium Design Solutions
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
