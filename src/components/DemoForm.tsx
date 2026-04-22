import { useState } from "react";

const DemoForm = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="demo" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-2">
          Request a <span className="text-yellow-400">Free Demo</span>
        </h2>
        <p className="font-body text-muted-foreground text-center mb-10 text-sm">
          Our team will help you find the perfect program for your child
        </p>

        {submitted ? (
          <div className="text-center py-12 bg-muted rounded-2xl">
            <p className="font-display text-2xl font-bold text-primary mb-2">Thank You! 🎉</p>
            <p className="font-body text-muted-foreground">We'll call you within 2 hours to schedule the demo.</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="bg-card rounded-2xl p-6 sm:p-8 border border-border shadow-card space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body font-semibold text-sm text-foreground/80 block mb-1.5">Parent's Name</label>
                <input required type="text" placeholder="Your name" className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
              <div>
                <label className="font-body font-semibold text-sm text-foreground/80 block mb-1.5">Phone Number</label>
                <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="font-body font-semibold text-sm text-foreground/80 block mb-1.5">Child's Age</label>
                <select required className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30">
                  <option value="">Select age</option>
                  {Array.from({ length: 11 }, (_, i) => i + 5).map(age => (
                    <option key={age} value={age}>{age} years</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body font-semibold text-sm text-foreground/80 block mb-1.5">Your City</label>
                <input type="text" placeholder="City name" className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
              </div>
            </div>

            <div>
              <label className="font-body font-semibold text-sm text-foreground/80 block mb-1.5">Anything else? (optional)</label>
              <textarea rows={3} placeholder="Tell us about your child's interests or any specific needs..." className="w-full px-4 py-2.5 rounded-xl border border-border bg-muted/50 font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
            </div>

            <p className="font-body text-xs text-muted-foreground">
              This is an enquiry, not a booking. A coordinator will call to confirm details.
            </p>

            <button type="submit" className="w-full py-3 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground shadow-playful hover:scale-[1.02] transition-transform text-base">
              Request a Free Demo
            </button>

            <p className="font-body text-xs text-muted-foreground text-center">
              We'll call within 2 hours · No spam, guaranteed
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

export default DemoForm;
