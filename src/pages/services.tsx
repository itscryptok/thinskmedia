import { motion } from "framer-motion";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";

const services = [
  {
    tag: "GEO",
    heading: "Generative Engine Optimization",
    body: "Your customers are already asking AI where to find businesses like yours. We make sure your brand shows up in those answers — on ChatGPT, Perplexity, and every AI-powered search engine reshaping how people discover local businesses.",
    icon: "◈",
    testId: "service-geo",
  },
  {
    tag: "SEO",
    heading: "Search Engine Optimization",
    body: "Rank higher on Google and get found by the customers already searching for you. We handle on-page SEO, technical audits, local optimization, and content strategy tailored to the DFW market.",
    icon: "◇",
    testId: "service-seo",
  },
  {
    tag: "Social Media",
    heading: "Social Media Marketing",
    body: "Build a brand people actually follow. We create and manage content for Instagram, LinkedIn, and beyond — with a strategy rooted in your audience, not just trends.",
    icon: "○",
    testId: "service-social",
  },
  {
    tag: "Email Marketing",
    heading: "Email Marketing",
    body: "Turn subscribers into clients. We design email sequences, newsletters, and lead nurture campaigns that keep your audience engaged and your pipeline full.",
    icon: "□",
    testId: "service-email",
  },
];


export default function Services() {
  useSeo({
    title: "Services | AI-Powered Marketing | Thinsk Media",
    description: "Explore Thinsk Media's AI-powered marketing services: GEO, SEO, social media management, email marketing, and agentic workflow automation for DFW businesses.",
    canonical: "https://thinskmedia.com/services",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">

      <SiteNav />

      <main className="pt-16">

        {/* Hero */}
        <section className="relative bg-black pt-24 pb-20 px-6 border-b border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-block border border-white/20 px-4 py-1.5 mb-6 text-xs uppercase tracking-widest text-white/50">
                Dallas–Fort Worth · AI-Powered Agency
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight uppercase mb-6">
                Smart Marketing Solutions for Your Business Visibility
              </h1>
              <p className="text-base md:text-lg text-white/65 max-w-2xl mb-10 font-light leading-relaxed">
                Thinsk Media provides marketing solution that helps non-tech local businesses grow their visibility using AI tools that are built specifically for this purpose. We help Dallas–Fort Worth businesses stand out online with smart SEO, social media strategy, and email marketing — built on real tech, not guesswork.
              </p>
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-free-audit-hero"
                className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,255,255,0.25)]"
              >
                Ready to Boost My Visibility →
              </a>
              <a
                href="https://jhirah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 transition-all duration-200 hover:border-white hover:-translate-y-1"
              >
                Use Jhirah.com to Boost 3x
              </a>
            </motion.div>
          </div>
        </section>

        {/* What We Do */}
        <section className="bg-black py-20 px-6 border-b border-white/10" id="what-we-do">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Core Offerings</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                What We Do
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
              {services.map((s, i) => (
                <motion.article
                  key={s.heading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  data-testid={s.testId}
                  className="bg-black p-8 group hover:bg-white/5 transition-colors duration-300"
                >
                  <div className="text-2xl mb-5 text-white/30 group-hover:text-white/60 transition-colors font-mono">
                    {s.icon}
                  </div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">{s.tag}</p>
                  <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-4">
                    {s.heading}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Thinsk Media */}
        <section className="bg-black py-20 px-6 border-b border-white/10" id="why-thinsk">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-14"
            >
              <p className="text-xs uppercase tracking-widest text-white/40 mb-3">Why Thinsk Media</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                A Different Kind of Marketing Agency
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-white/70 leading-relaxed mb-6">
                  Most agencies hand your project to a junior team and send you a monthly report. At Thinsk Media, your strategy is led by a founder with 15+ years in AI, frontend development, and technical SEO. That means every campaign is backed by real technical depth — not just creative instinct.
                </p>
                <p className="text-white/70 leading-relaxed">
                  We work with small and mid-size businesses across Dallas–Fort Worth who need marketing that actually performs.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border border-white/10 p-8"
              >
                <h3 className="font-display font-bold text-xl uppercase tracking-tight mb-4">
                  Built for Dallas. Designed to Scale.
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  From local service businesses in Fort Worth to tech startups in Frisco, we help DFW companies build an online presence that works as hard as they do.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white text-black py-20 px-6" id="contact">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-widest text-black/40 mb-4">Get Started</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                Ready to Grow Your<br />Business Online?
              </h2>
              <p className="text-black/65 max-w-xl mb-10 leading-relaxed">
                Let's talk about where you are and where you want to be. We'll start with a free consultation about your current online presence — no commitment, no pressure.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="button-free-audit-footer"
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
              <p className="mt-8 text-xs uppercase tracking-widest text-black/40">
                Based in Dallas–Fort Worth · Serving businesses across Texas and beyond
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
