const CTASection = () => (
  <section className="py-16 bg-cta-gradient relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-primary-foreground" />
      <div className="absolute bottom-10 right-20 w-48 h-48 rounded-full bg-primary-foreground" />
    </div>
    <div className="container mx-auto px-4 text-center relative z-10">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary-foreground mb-3">
        Build Your Child's Confidence Today
      </h2>
      <p className="font-body text-primary-foreground/70 max-w-lg mx-auto mb-8 text-sm">
        Join 1,000+ families who trust StudyCubs for their child's communication journey
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="#demo" className="px-8 py-3 rounded-full bg-card font-display font-bold text-primary shadow-playful hover:scale-105 transition-transform text-base">
          Book a Free Demo
        </a>
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full border-2 border-primary-foreground font-display font-bold text-primary-foreground hover:bg-primary-foreground/10 transition-colors text-base"
        >
          Chat on WhatsApp
        </a>
      </div>
      <p className="font-body text-xs text-primary-foreground/50 mt-4">Free demo · 100% satisfaction · Flexible scheduling</p>
    </div>
  </section>
);

export default CTASection;
