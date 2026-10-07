import { Link } from "wouter";
import logoPath from "@assets/thinskmedia-logo2-_1779460727079.png";

const externalLinks = [
  { label: "A Book on Marketing", href: "https://captaintok.com/books" },
  { label: "Parent Company", href: "https://cryptok.online" },
];

const internalLinks = [
  { label: "Our Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Why AI News & Investing", href: "/ai-news" },
  { label: "Contact Us", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#070C18] text-white border-t border-white/15">

      {/* Gold top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />

      {/* CTA strip */}
      <div className="border-b border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white font-bold mb-2">Ready to Grow?</p>
            <h3 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight text-white">
              Let's build your AI marketing edge.
            </h3>
          </div>
          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white/90 transition-colors duration-200"
            >
              Boost My Visibility →
            </Link>
            <a
              href="https://jhirah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white transition-colors duration-200"
            >
              Use Jhirah.com to Boost 3x
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <img
              src={logoPath}
              alt="Thinsk Media"
              className="h-7 object-contain filter invert opacity-80"
            />
            <p className="text-xs text-white/25 uppercase tracking-widest">
              © {new Date().getFullYear()} Thinsk Media · Dallas–Fort Worth
            </p>
          </div>

          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
            {externalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-white/35 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            {internalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/35 hover:text-white transition-colors uppercase tracking-widest whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
