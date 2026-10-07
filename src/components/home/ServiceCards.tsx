import { motion } from "framer-motion";

const services = [
  {
    title: "GEO Intelligence",
    subtitle: "Generative Engine Optimization",
    description:
      "Your customers are already asking AI where to find businesses like yours. We make sure your brand shows up in those answers — on ChatGPT, Perplexity, and every AI-powered search engine reshaping how people discover you.",
    icon: "◈",
    number: "01",
    testId: "card-geo-intelligence",
  },
  {
    title: "SEO Intelligence",
    subtitle: "Search Engine Optimization",
    description:
      "If your business isn't showing up on the first page of Google, you're losing customers to someone else. We fix that — with a tailored SEO strategy that targets the exact searches your ideal clients are already making.",
    icon: "◇",
    number: "02",
    testId: "card-seo-intelligence",
  },
  {
    title: "Social AI",
    subtitle: "AI-Driven Social Media",
    description:
      "You shouldn't have to post every day just to stay relevant. We build and run an AI-powered content system that keeps your brand active, consistent, and growing — so you can focus on running your business.",
    icon: "○",
    number: "03",
    testId: "card-social-ai",
  },
  {
    title: "Agentic Workflow",
    subtitle: "AI Agents for Business",
    description:
      "Think about the repetitive marketing tasks eating up your team's time — follow-ups, reporting, lead nurturing, campaign updates. We build AI agents that handle all of it automatically, so nothing falls through the cracks.",
    icon: "□",
    number: "04",
    testId: "card-agentic-workflow",
  },
];

export function ServiceCards() {
  return (
    <section className="bg-[#070C18] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white" />
              <p className="text-xs uppercase tracking-[0.2em] text-white font-bold">What We Do</p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Core Services
            </h2>
          </div>
          <p className="text-white/40 text-sm max-w-xs leading-relaxed">
            Every service is built around one goal: getting your business found by the right people, in the right place, at the right time.
          </p>
        </motion.div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              data-testid={service.testId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#070C18] hover:bg-[#0D1425] p-10 transition-colors duration-400 relative overflow-hidden"
            >
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out" />

              {/* Number + icon */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display font-bold text-5xl text-white/10 group-hover:text-white/20 transition-colors duration-300 leading-none select-none">
                  {service.number}
                </span>
                <span className="text-2xl text-white/40 group-hover:text-white/70 transition-colors duration-300 font-mono">
                  {service.icon}
                </span>
              </div>

              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-1 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-xs uppercase tracking-[0.15em] text-white/50 mb-5 font-bold">
                {service.subtitle}
              </p>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 border border-white/20 bg-white/5 px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/60 text-sm">
            Not sure which service fits your business?{" "}
            <span className="text-white">We'll tell you — free.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-xs px-7 py-3 hover:bg-white/90 transition-colors duration-200"
            >
              Boost My Visibility
              <span>→</span>
            </a>
            <a
              href="https://jhirah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-wider text-xs px-7 py-3 hover:border-white transition-colors duration-200"
            >
              Use Jhirah.com to Boost 3x
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
