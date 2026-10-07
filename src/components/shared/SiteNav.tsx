import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import logoPath from "@assets/thinskmedia-logo2-_1779460727079.png";

const navLinks = [
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-[#070C18]/97 backdrop-blur-xl border-b border-white/15"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        <Link href="/">
          <img
            src={logoPath}
            alt="Thinsk Media"
            className="h-7 object-contain filter invert cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              data-testid={`nav-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className={`text-xs font-bold uppercase tracking-widest transition-colors duration-200 ${
                location === link.href
                  ? "text-white"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            data-testid="nav-contact"
            className="text-xs font-bold uppercase tracking-widest bg-white text-black px-6 py-2.5 hover:bg-white/90 transition-colors duration-200"
          >
            Boost My Visibility
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/60 hover:text-white transition-colors"
          onClick={() => setOpen((o) => !o)}
          data-testid="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-current transition-all duration-200 mb-1.5 ${open ? "rotate-45 translate-y-2.5" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 mb-1.5 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-current transition-all duration-200 ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#070C18] border-t border-white/15 px-6 py-8 flex flex-col gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-xs font-bold uppercase tracking-widest text-white hover:text-white transition-colors"
          >
            Boost My Visibility →
          </Link>
        </div>
      )}
    </header>
  );
}
