import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
    <div className="container mx-auto px-4 py-2.5 flex items-center justify-center gap-3">
      <a
        href="#demo"
        className="flex-1 max-w-[200px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground text-sm hover:brightness-110 transition-all"
      >
        Book a Free Demo →
      </a>
      <a
        href="https://wa.me/919876543210?text=Hi%20StudyCubs!%20I%20want%20to%20enquire%20about%20your%20public%20speaking%20classes."
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 max-w-[220px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border-2 border-primary font-display font-bold text-primary text-sm hover:bg-primary/5 transition-colors"
      >
        <MessageCircle size={16} />
        Chat with StudyCubs Team
      </a>
    </div>
  </div>
);

export default WhatsAppButton;
