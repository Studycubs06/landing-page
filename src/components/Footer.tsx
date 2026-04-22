import logo from "@/assets/studycubs-logo.webp";

const Footer = () => (
  <footer id="contact" className="bg-foreground text-primary-foreground py-14 pb-24">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <img src={logo} alt="StudyCubs" className="h-8 w-auto brightness-200 mb-3" loading="lazy" />
          <p className="font-body text-primary-foreground/50 text-sm leading-relaxed">
            India's best public speaking platform for children. Empowering young minds since 2023.
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm mb-3">Quick Links</h4>
          <ul className="space-y-1.5 font-body text-sm text-primary-foreground/50">
            <li><a href="#home" className="hover:text-primary-foreground transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-primary-foreground transition-colors">About Us</a></li>
            <li><a href="#programs" className="hover:text-primary-foreground transition-colors">Programs</a></li>
            <li><a href="#reviews" className="hover:text-primary-foreground transition-colors">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm mb-3">Contact</h4>
          <ul className="space-y-1.5 font-body text-sm text-primary-foreground/50">
            <li>📧 hello@studycubs.com</li>
            <li>📞 +91 98765 43210</li>
            <li>📍 Pan India (Online)</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-sm mb-3">Get Started</h4>
          <p className="font-body text-sm text-primary-foreground/50 mb-3">Transform your child's confidence today.</p>
          <a href="#demo" className="inline-flex px-5 py-2 rounded-full bg-cta-gradient font-display font-bold text-primary-foreground text-sm shadow-playful hover:scale-105 transition-transform">
            Book a Free Demo
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-5 text-center">
        <p className="font-body text-xs text-primary-foreground/30">
          © 2025 StudyCubs. All rights reserved. Made with 🧡 for young speakers.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
