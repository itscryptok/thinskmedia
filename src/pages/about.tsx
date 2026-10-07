import { motion } from "framer-motion";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function About() {
  useSeo({
    title: "About | Thinsk Media — AI-Powered Digital Marketing, Dallas–Fort Worth",
    description: "Meet Yemi, founder of Thinsk Media — a Dallas–Fort Worth tech and marketing specialist building AI-powered marketing strategies for modern businesses.",
    canonical: "https://thinskmedia.com/about",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Hero */}
        <section className="bg-black pt-24 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div {...fadeUp()}>
              <div className="inline-block border border-white/20 px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-white/50">
                Dallas–Fort Worth · AI & Marketing
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase mb-6">
                About<br />Thinsk Media
              </h1>
              <p className="text-base md:text-lg text-white/65 max-w-2xl font-light leading-relaxed">
                Thinsk Media is a Dallas–Fort Worth digital marketing agency that specializes in providing AI-powered marketing solution that helps non-tech local businesses grow their visibility through SEO, social media, email marketing, and Agentic workflow development — all powered by AI and built for modern businesses.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="bg-black py-20 px-6 border-b border-white/10">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp()} className="mb-10">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Why Thinsk Media</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Your Ideal AI Marketing Partner
              </h2>
            </motion.div>
            <motion.p {...fadeUp(0.1)} className="text-white/70 leading-relaxed max-w-3xl text-base">
              For anyone seeking to grow their business through AI-powered SEO and advanced AI marketing strategies, your ideal partner should be a local, tech-savvy professional who understands both the AI domain — having built their own AI company — and the marketing domain, gained from practical experience building their own business. Don't waste time on marketing channels that make noise but don't work. Schedule a consultation today with Yemi, a Dallas–Fort Worth based tech and marketing specialist who can help you get started and stay ahead of the competition.
            </motion.p>
          </div>
        </section>

        {/* Founder */}
        <section className="bg-black py-20 px-6 border-b border-white/10" id="founder">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp()} className="mb-12">
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">The Founder</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                Meet Yemi
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div {...fadeUp(0.1)}>
                <p className="text-white/70 leading-relaxed mb-8">
                  Yemi is building AI and tech apps for everyday use — some of which can be found at{" "}
                  <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-white/70 transition-colors">
                    Cryptok.online
                  </a>
                  . He also writes self-help books focused on broadening readers' perspectives in their areas of expertise — including his ebook on marketing,{" "}
                  <a href="https://captaintok.com/books" target="_blank" rel="noopener noreferrer" className="text-white/90 underline underline-offset-2 hover:text-white transition-colors"><em>Selling Rain to the Ocean</em></a>.
                </p>

                <div className="space-y-4">
                  <h3 className="font-display font-bold text-sm uppercase tracking-widest text-white/40 mb-4">
                    Connect with Yemi
                  </h3>
                  {[
                    { label: "Phone", value: "443-986-5060", href: "tel:4439865060" },
                    { label: "LinkedIn", value: "linkedin.com/in/mcyemmy", href: "https://linkedin.com/in/mcyemmy" },
                    { label: "TikTok", value: "@itsCaptain_Tok", href: "https://tiktok.com/@itsCaptain_Tok" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4 border-b border-white/5 pb-4">
                      <span className="text-xs uppercase tracking-widest text-white/30 w-20 pt-0.5 shrink-0">{c.label}</span>
                      <a
                        href={c.href}
                        target={c.href.startsWith("http") ? "_blank" : undefined}
                        rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        data-testid={`contact-${c.label.toLowerCase()}`}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {c.value}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Parent company */}
              <motion.div {...fadeUp(0.2)} className="border border-white/10 p-8">
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-2">
                  Cryp Tok Solutions
                </h3>
                <p className="text-xs uppercase tracking-widest text-white/40 mb-6">Parent Company</p>
                <p className="text-sm text-white/60 leading-relaxed mb-8">
                  Thinsk Media operates under Cryp Tok Solutions — a tech company building AI-powered tools and applications for modern businesses and everyday use.
                </p>
                <div className="space-y-4">
                  {[
                    { label: "Website", value: "Cryptok.online", href: "https://cryptok.online" },
                    { label: "Instagram", value: "@itsCryp_Tok", href: "https://instagram.com/itsCryp_Tok" },
                    { label: "X / Twitter", value: "@itsCryp_Tok", href: "https://x.com/itsCryp_Tok" },
                  ].map((c) => (
                    <div key={c.label} className="flex items-start gap-4 border-b border-white/5 pb-4">
                      <span className="text-xs uppercase tracking-widest text-white/30 w-20 pt-0.5 shrink-0">{c.label}</span>
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`company-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-sm text-white/70 hover:text-white transition-colors"
                      >
                        {c.value}
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white text-black py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div {...fadeUp()}>
              <p className="text-xs uppercase tracking-widest text-black/40 mb-4">Get Started</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-black/65 max-w-xl mb-10 leading-relaxed">
                Book a free consultation with Yemi and get a clear picture of where your business stands online — and exactly what it would take to grow.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-about-cta"
                  className="inline-flex items-center gap-2 bg-black text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
                >
                  Boost My Visibility →
                </a>
                <a
                  href="https://jhirah.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-black/30 text-black font-bold uppercase tracking-wider text-sm px-8 py-4 transition-all duration-200 hover:border-black hover:-translate-y-1"
                >
                  Use Jhirah.com to Boost 3x
                </a>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
