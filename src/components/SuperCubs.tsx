import { Trophy } from "lucide-react";

const superCubs = [
  {
    name: "Saadgee Patodee",
    skill: "Public Speaking",
    image: "https://studycubs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsaadgee.9860a859.webp&w=1200&q=75",
  },
  {
    name: "Hraday Waykos",
    skill: "Public Speaking",
    image: "https://studycubs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhraday.0e982b18.webp&w=3840&q=75",
  },
  {
    name: "Shivani Kulkarni",
    skill: "Public Speaking",
    image: "https://studycubs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshivani.6f1c2049.webp&w=3840&q=75",
  },
  {
    name: "Swarit",
    skill: "Public Speaking",
    image: "https://studycubs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fswarit.9b54e728.webp&w=640&q=75",
  },
];

const SuperCubs = () => (
  <section className="py-16 bg-muted/50">
    <div className="container mx-auto px-4">
      <span className="block text-center font-body font-bold text-xs text-primary tracking-widest uppercase mb-2">
        Archives
      </span>
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-2">
        Meet Our <span className="text-yellow-400">SuperCubs</span> 🏆
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-12 text-sm">
        Celebrating our star students who shine bright on every stage
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {superCubs.map((cub) => (
          <div
            key={cub.name}
            className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={cub.image}
                alt={cub.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-display font-bold text-sm sm:text-base mb-1">{cub.name}</h3>
              <span className="inline-flex items-center gap-1 text-xs font-body font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                <Trophy size={12} />
                {cub.skill}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuperCubs;
