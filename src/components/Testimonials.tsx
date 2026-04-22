import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "My daughter was extremely shy and would never speak up in class. After just 12 sessions with StudyCubs, she won the inter-school debate competition! The transformation is unbelievable.",
  },
  {
    name: "Rajesh Patel",
    location: "Mumbai",
    text: "The coaches at StudyCubs are phenomenal. My son looks forward to every session. His vocabulary and confidence have grown tremendously. Worth every rupee!",
  },
  {
    name: "Anita Verma",
    location: "Bangalore",
    text: "I tried multiple platforms before StudyCubs. The small batch size and personal attention make all the difference. Both my kids are now confident speakers. Highly recommend!",
  },
  {
    name: "Suresh Nair",
    location: "Chennai",
    text: "Professional service. The coach arrived on time for every online session and engaged my son beautifully. His storytelling skills have improved so much!",
  },
];

const Testimonials = () => (
  <section id="reviews" className="py-16 bg-muted/50">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-2">
        What <span className="text-yellow-400">Families Say</span> About Us
      </h2>
      <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Don't just take our word for it — hear from parents who've seen the StudyCubs magic.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-6 shadow-card border border-border">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-secondary fill-secondary" size={14} />
              ))}
            </div>
            <p className="font-body text-foreground/75 text-sm leading-relaxed mb-5">"{t.text}"</p>
            <div>
              <p className="font-display font-bold text-sm text-foreground">{t.name}</p>
              <p className="font-body text-xs text-muted-foreground">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
