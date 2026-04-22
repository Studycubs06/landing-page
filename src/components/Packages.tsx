import { Check, Sparkles } from "lucide-react";

const features = [
  "12 interactive sessions",
  "1 hour 15 minutes per session",
  "Small batch (5–6 students)",
  "Expert communication coach",
  "Certificate of completion",
  "Recorded session access",
];

const Packages = () => (
  <section id="packages" className="py-20 bg-warm-gradient">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-center mb-4">
        Our <span className="text-gradient">Package</span>
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-14">
        One simple, all-inclusive plan designed to transform your child's communication skills.
      </p>

      <div className="max-w-md mx-auto">
        <div className="relative bg-card rounded-3xl shadow-playful border-2 border-primary/30 overflow-hidden">
          <div className="bg-hero-gradient px-8 py-5 text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Sparkles className="text-primary-foreground" size={20} />
              <span className="font-display font-bold text-primary-foreground text-sm uppercase tracking-wider">Most Popular</span>
            </div>
            <div className="font-display text-5xl font-extrabold text-primary-foreground">
              ₹3,500
            </div>
            <span className="font-body text-primary-foreground/80 text-sm">per student</span>
          </div>

          <div className="p-8">
            <ul className="space-y-4 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="text-accent-foreground" size={14} />
                  </div>
                  <span className="font-body font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <a href="#demo" className="block text-center px-8 py-3.5 rounded-full bg-hero-gradient font-display font-bold text-primary-foreground shadow-playful hover:scale-105 transition-transform text-lg">
              Enroll Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Packages;
