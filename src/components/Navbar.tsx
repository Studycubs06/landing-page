import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/studycubs-logo.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-primary/10 via-background/95 to-secondary/10 backdrop-blur-md border-b border-border shadow-card">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="StudyCubs" className="h-9 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-body font-semibold text-sm text-foreground/70 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="tel:+919876543210" className="hidden md:inline-flex items-center gap-2 font-display font-bold text-primary text-sm hover:underline">
          <Phone size={16} />
          9876 54 32 10
        </a>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="font-body font-semibold text-foreground/80 hover:text-primary transition-colors block py-1">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="tel:+919876543210" className="mt-3 inline-flex items-center gap-2 font-display font-bold text-primary text-sm">
            <Phone size={16} /> 9876 54 32 10
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
