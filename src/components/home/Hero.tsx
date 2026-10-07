import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-[#070C18] text-white overflow-hidden">

      {/* Bold background image with layered overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=90"
          alt="Dramatic city skyline at night — Dallas–Fort Worth"
          className="w-full h-full object-cover opacity-75"
        />
        {/* Strong left-side dark panel so text pops */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070C18] via-[#070C18]/85 to-[#070C18]/20" />
        {/* Extra dark strip behind the actual text column */}
        <div className="absolute inset-y-0 left-0 w-2/3 bg-gradient-to-r from-[#070C18]/70 to-transparent" />
        {/* Bottom fade into the rest of the page */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-transparent to-[#070C18]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      {/* Gold geometric accent — top right */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none z-0">
        <div className="w-full h-full border border-white rotate-45 translate-x-32 -translate-y-32" />
        <div className="absolute inset-8 border border-white rotate-45 translate-x-32 -translate-y-32" />
      </div>

      <div className="max-w-6xl mx-auto px-6 z-10 w-full py-32 md:py-40">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Location badge */}
          <div className="inline-flex items-center gap-3 border border-white/30 bg-white/8 px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-white font-bold">
              Dallas–Fort Worth · AI-Powered Agency
            </span>
          </div>

          {/* Main headline */}
          <h1 className="font-display font-bold uppercase leading-none tracking-tight mb-6">
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
              Smarter
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white">
              Marketing.
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl text-white/90">
              Real Results.
            </span>
          </h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-white/55 max-w-xl mb-4 font-light leading-relaxed"
          >
            Thinsk Media is a Dallas–Fort Worth digital marketing agency that specializes in providing AI-powered marketing solution that helps non-tech local businesses grow their visibility through SEO, social media, and email marketing and Agentic workflow development — all powered by AI and built for modern businesses. Let us help you reach more, Sell more and Engage better.
          </motion.p>

          {/* AI chatbot pitch — gold highlight */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-[#C9A227] max-w-xl mb-4 font-bold leading-relaxed"
          >
            Upgrade your business with an AI chatbot on your website, social media DMs, text SMS, WhatsApp and more.{" "}
            <a href="/#chatbots" className="underline underline-offset-4">
              See our packages
            </a>
          </motion.p>

          {/* Divider accent */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="origin-left w-24 h-px bg-white mb-10"
          />

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary — gold fill */}
            <a
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-free-audit"
              className="inline-flex items-center justify-center bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white/90 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
            >
              Boost My Visibility
            </a>

            <a
              href="https://jhirah.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Use Jhirah.com to Boost 3x
            </a>

            {/* Secondary — white border */}
            <a
              href="/services"
              data-testid="button-our-services"
              className="inline-flex items-center justify-center border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Smart Services
            </a>

            <a
              href="/blog"
              data-testid="button-blog"
              className="inline-flex items-center justify-center border border-white/20 text-white/70 font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Marketing Blog
            </a>

            <a
              href="https://captaintok.com/books"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-books-marketing"
              className="inline-flex items-center justify-center border border-white/20 text-white/70 font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              A Book on Marketing
            </a>

            <a
              href="https://captaintok.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-ai-news"
              className="inline-flex items-center justify-center border border-white/20 text-white/70 font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white/40 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              Follow the News
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 left-6 md:left-1/2 md:-translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-white/25 font-bold">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
