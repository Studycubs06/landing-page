import { Star, CheckCircle2 } from "lucide-react";

const checkpoints = [
  "Expert Communication Coaches",
  "Small Batches — Max 6 Kids",
  "Online Classes, Pan India",
];

const HeroSection = () => (
  <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-20 overflow-hidden bg-gradient-to-br from-primary/15 via-background to-secondary/20">
    {/* Decorative blobs */}
    <div className="absolute top-20 -left-16 w-72 h-72 rounded-full bg-primary/20 blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="absolute bottom-0 -right-16 w-80 h-80 rounded-full bg-secondary/25 blur-3xl pointer-events-none" aria-hidden="true" />
    <div className="relative z-10">
    {/* Trust bar */}
    <div className="container mx-auto px-4 mb-8">
      <div className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/30 rounded-full px-4 py-1.5">
        <Star className="text-secondary fill-secondary" size={14} />
        <span className="font-body font-bold text-xs text-foreground/70">
          4.9★ Rated · Trusted by 1,000+ Parents Across India
        </span>
      </div>
    </div>

    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-3xl sm:text-4xl lg:text-[2.8rem] leading-tight font-extrabold mb-6 text-foreground" style={{ fontFamily: "'Fredoka', sans-serif" }}>
        India's <span className="text-secondary">#1 Platform</span> for Online{" "}
        <span className="text-secondary">Public Speaking</span> Classes
      </h1>

      <ul className="space-y-3 mb-8">
        {checkpoints.map((cp) => (
          <li key={cp} className="flex items-center gap-3">
            <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
            <span className="font-body text-foreground/70 font-medium">{cp}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-col sm:flex-row gap-3">
        <a href="#demo" className="px-8 py-3 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground shadow-playful hover:scale-105 transition-transform text-base">
          Book a Free Demo →
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%20StudyCubs!%20I%20want%20to%20enquire%20about%20your%20public%20speaking%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full border-2 border-primary font-display font-bold text-primary hover:bg-primary/5 transition-colors text-base"
        >
          Chat with StudyCubs Team
        </a>
      </div>
    </div>
    </div>
  </section>
);

export default HeroSection;
