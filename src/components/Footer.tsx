import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 px-4">
    <div className="max-w-6xl mx-auto text-center space-y-3">
      <p className="font-heading text-lg gold-gradient-text font-bold">Sai Photo Studio & Sai Graphics</p>
      <p className="text-xs text-muted-foreground">
        Patan, Maharashtra 415206, India &bull; +91 96578 24524
      </p>
      <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
        Made with <Heart size={12} className="text-primary" /> Nikhil Chavan.
      </p>
    </div>
  </footer>
);

export default Footer;
