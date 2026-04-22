import aboutHero from "@/assets/about-hero.jpg";
import mascot from "@/assets/studycubs-mascot.png";

const stats = [
  "1,000+ Students Trained",
  "50+ Expert Coaches",
  "10,000+ Sessions Delivered",
  "Pan India (Online)",
  "4.9★ Parent Rating",
  "Small Batches (Max 6)",
  "Certificate Included",
];

const AboutUs = () => (
  <section id="about" className="relative py-20 overflow-hidden text-primary-foreground">
    {/* Futuristic dark gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,25%,8%)] via-[hsl(200,30%,12%)] to-[hsl(190,40%,10%)]" />
    <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(190 70% 42% / 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(40 90% 55% / 0.3) 0%, transparent 40%), radial-gradient(circle at 60% 80%, hsl(190 70% 42% / 0.2) 0%, transparent 50%)" }} />
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(hsl(190 70% 42% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(190 70% 42% / 0.3) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

    <div className="container mx-auto px-4 relative z-10">
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-3">
        You Focus on Parenting.{" "}
        <span className="text-primary">We'll Handle the Speaking Skills.</span>
      </h2>
      <p className="font-body text-primary-foreground/50 text-center max-w-xl mx-auto mb-10 text-sm">
        Trusted by families across India since 2023
      </p>

      {/* Image + Text */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-14">
        <div className="flex-shrink-0 relative">
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 shadow-[0_0_40px_-10px_hsl(190_70%_42%_/_0.3)]">
            <img
              src={aboutHero}
              alt="StudyCubs mascot and student"
              className="w-72 sm:w-80 lg:w-96 h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[hsl(210,25%,8%)] via-transparent to-transparent opacity-40" />
          </div>
          {/* Glow accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
          <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-secondary/10 blur-2xl" />
        </div>

        <p className="font-body text-primary-foreground/70 leading-relaxed text-base lg:text-lg text-center lg:text-left max-w-2xl">
          StudyCubs is India's leading public speaking and communication platform for children aged <strong className="text-primary">5–15</strong>. Our unique <strong className="text-secondary">Loco methodology</strong> blends storytelling, impromptu speaking, debates, and creative expression into sessions that are both fun and transformative. With expert coaches and small batch sizes of just 5–6 kids, every cub gets the spotlight they deserve.
        </p>
      </div>

      {/* Scrolling stats ticker */}
      <div className="relative overflow-hidden py-4 border-t border-b border-primary-foreground/10">
        <div className="flex animate-scroll-left w-max gap-8">
          {[...stats, ...stats].map((s, i) => (
            <span key={i} className="font-body font-bold text-sm text-primary-foreground/60 whitespace-nowrap flex items-center gap-2">
              <span className="text-primary">•</span>
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
