import { Zap, PhoneCall } from "lucide-react";

const HowToBook = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-10">
        How Would You Like to <span className="text-yellow-400">Get Started?</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <a href="#demo" className="flex items-center justify-between bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Book Instantly</h3>
              <p className="font-body text-sm text-muted-foreground">Choose a batch, pick a date & start</p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground text-sm group-hover:scale-105 transition-transform">Start</span>
        </a>

        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between bg-card rounded-2xl p-6 border border-border shadow-card hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-secondary/15 flex items-center justify-center">
              <PhoneCall className="text-secondary" size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg">Help Me Choose</h3>
              <p className="font-body text-sm text-muted-foreground">Our team will guide you to the right program</p>
            </div>
          </div>
          <span className="px-4 py-1.5 rounded-full border-2 border-primary font-display font-bold text-primary text-sm group-hover:bg-primary/5 transition-colors">Callback</span>
        </a>
      </div>
    </div>
  </section>
);

export default HowToBook;
