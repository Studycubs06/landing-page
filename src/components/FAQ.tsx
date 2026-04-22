import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "What age group is StudyCubs for?", a: "StudyCubs is designed for children aged 5–15 years. We have separate programs for 5–9 and 10–15 age groups with age-appropriate curriculum." },
  { q: "How are the classes conducted?", a: "All classes are conducted online via Zoom. Each session is 1 hour 15 minutes long with small batches of just 5–6 students for maximum engagement." },
  { q: "What is the Loco Methodology?", a: "Loco is our proprietary 4-pillar methodology covering Storytelling, Impromptu Speaking, Debates & Discussions, and Creative Expression — making learning both fun and impactful." },
  { q: "Do I need to pay in advance?", a: "We accept partial payment to confirm the slot. The remaining can be paid before the first session. We also offer EMI options." },
  { q: "What if my child doesn't like it?", a: "We offer a free demo session so your child can experience the class before committing. If they don't enjoy the first paid session, we offer a full refund." },
  { q: "How do I track my child's progress?", a: "Parents receive a detailed progress report after every 4 sessions highlighting improvements in confidence, vocabulary, articulation, and stage presence." },
  { q: "Can I reschedule classes?", a: "Yes! You can reschedule up to 2 classes per module with at least 24 hours notice. We understand kids have busy schedules." },
  { q: "Are certificates provided?", a: "Yes, every student receives a certificate of completion after finishing their 12-session module. Top performers get featured as Super Cubs!" },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-2">
          Frequently Asked <span className="text-yellow-400">Questions</span>
        </h2>
        <p className="font-body text-muted-foreground text-center mb-10 text-sm">
          Everything you need to know before enrolling
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-display font-bold text-sm sm:text-base pr-4">{faq.q}</span>
                <ChevronDown
                  className={`text-muted-foreground flex-shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`}
                  size={18}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
