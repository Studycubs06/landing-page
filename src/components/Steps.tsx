const steps = [
  { num: "1", title: "Choose Age Group", desc: "5–9 or 10–15 years" },
  { num: "2", title: "Pick a Program", desc: "Loco, Debate, or Custom" },
  { num: "3", title: "Book & Pay", desc: "Secure checkout" },
  { num: "4", title: "Start Speaking!", desc: "First class within 48hrs" },
];

const Steps = () => (
  <section className="py-16 bg-muted/50">
    <div className="container mx-auto px-4">
      <span className="block text-center font-body font-bold text-xs text-primary tracking-widest uppercase mb-2">How It Works</span>
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-center mb-12">
        Start Speaking in <span className="text-yellow-400">Minutes</span>
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <div key={s.num} className="relative text-center">
            <div className="w-12 h-12 rounded-full bg-cta-gradient font-display font-extrabold text-primary-foreground text-lg flex items-center justify-center mx-auto mb-3 shadow-playful">
              {s.num}
            </div>
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute top-6 left-[calc(50%+28px)] w-[calc(100%-56px)] h-0.5 bg-border" />
            )}
            <h4 className="font-display font-bold text-sm sm:text-base mb-1">{s.title}</h4>
            <p className="font-body text-xs text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Steps;
