import { Mic, Users, Trophy } from "lucide-react";

const cards = [
  {
    icon: Mic,
    title: "Expert-Led Sessions",
    description: "Our trained communication coaches use fun, interactive methods designed specifically for young learners aged 5–15.",
  },
  {
    icon: Users,
    title: "Small Batch Sizes",
    description: "Each batch has only 5–6 students, ensuring personal attention and maximum participation for every cub.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "95% of our students show remarkable improvement in confidence, articulation, and stage presence within 12 sessions.",
  },
];

const WhyChooseUs = () => (
  <section className="py-20 bg-card">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-center mb-4">
        Why Choose <span className="text-gradient">StudyCubs?</span>
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-14">
        We make public speaking fun, engaging, and transformative for your child.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.title}
            className="group bg-background rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border"
          >
            <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <card.icon className="text-primary-foreground" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold mb-3">{card.title}</h3>
            <p className="font-body text-muted-foreground leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
