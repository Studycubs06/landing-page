import { Mic, Users, Trophy, Sparkles } from "lucide-react";

const programs = [
  {
    icon: Mic,
    title: "Storytelling & Narration",
    desc: "Build vocabulary, expression, and creative confidence",
    tags: ["Ages 5–9", "Beginner"],
  },
  {
    icon: Users,
    title: "Debates & Discussions",
    desc: "Develop critical thinking and persuasive speaking skills",
    tags: ["Ages 10–15", "Intermediate"],
  },
  {
    icon: Trophy,
    title: "MUN & Competition Prep",
    desc: "Intensive training for Model UN, elocution, and oratory contests",
    tags: ["Ages 10–15", "Advanced"],
  },
  {
    icon: Sparkles,
    title: "Creative Expression",
    desc: "Poetry recitation, role-play, and dramatic performances",
    tags: ["All Ages", "Fun"],
  },
];

const Programs = () => (
  <section id="programs" className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-2">
        Which Program Is Right for <span className="text-yellow-400">Your Child?</span>
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Browse by category or talk to our program advisors
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((p) => (
          <a href="#demo" key={p.title} className="group bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all">
            <div className="h-36 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <p.icon className="text-primary" size={32} />
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-base mb-1">{p.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-3 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span key={t} className="text-xs font-body font-semibold bg-muted text-muted-foreground px-2.5 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 bg-muted rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-2xl mx-auto">
        <div>
          <h4 className="font-display font-bold text-base">Not sure which program?</h4>
          <p className="font-body text-sm text-muted-foreground">Our advisors can guide you — free consultation</p>
        </div>
        <div className="flex gap-3">
          <a href="tel:+919876543210" className="px-5 py-2 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground text-sm">Call Us</a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="px-5 py-2 rounded-full border-2 border-primary font-display font-bold text-primary text-sm">WhatsApp</a>
        </div>
      </div>
    </div>
  </section>
);

export default Programs;
