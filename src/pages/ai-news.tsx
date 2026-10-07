import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";

import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";

const reasons = [
  {
    tag: "WEALTH",
    heading: "A Changing World",
    body: "We are currently witnessing the largest migration of private wealth in modern history. As AI and other futuristic tech continues to emerge, top investors are constantly seeking new and early opportunities to invest and diversify their portfolio.",
  },
  {
    tag: "WORK",
    heading: "The Future of Work",
    body: "As AI continues to change the job market, startups and self-owned businesses are becoming the primary way people work. More startups leads to more opportunities — and you can find news about them early here at Thinsk Media.",
  },
  {
    tag: "NEWSLETTER",
    heading: "Stay Informed",
    body: "Sign up for our newsletter to receive regular updates. We will notify you whenever there is important news about wealth migration that you should follow.",
  },
];

export default function AiNews() {
  useSeo({
    title: "Why AI News & Investing | Thinsk Media",
    description:
      "Discover why tracking AI news and investment trends matters now more than ever. Learn about wealth migration, the future of work, and how to stay ahead.",
    canonical: "https://thinskmedia.com/ai-news",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block border border-white/20 px-4 py-1.5 mb-8 text-xs uppercase tracking-widest text-white/60">
              Thinsk Media · Investment Intelligence
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight mb-6">
              Why AI News<br />&amp; Investing?
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed">
              The intersection of artificial intelligence and private capital is reshaping how wealth is built. Here's why it matters to you.
            </p>
          </motion.div>
        </section>

        {/* Reasons */}
        <section className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {reasons.map((item, i) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="py-10 md:py-0 md:px-10 first:md:pl-0 last:md:pr-0 flex flex-col gap-4"
              >
                <span className="text-xs uppercase tracking-widest text-white/30 font-bold">
                  {item.tag}
                </span>
                <h2 className="font-display font-bold text-xl uppercase tracking-tight">
                  {item.heading}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed font-light">
                  {item.body}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Featured Article */}
        <section className="max-w-5xl mx-auto px-6 py-16 border-t border-white/10">
          <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-8">Featured Article</p>
          <Link href="/email-lists-guide" className="group block border border-white/10 hover:border-white/30 transition-colors p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-white/30 font-bold">May 14, 2026 · Email Marketing</span>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight group-hover:text-white/80 transition-colors">
                  Why Email Lists Matter for Creators: The Essential Guide
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                  A creator with 500,000 Instagram followers and no email list is more financially vulnerable than one with 8,000 engaged subscribers. Learn the real mechanics behind email list value.
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors whitespace-nowrap">
                Read Article →
              </span>
            </div>
          </Link>

          <Link href="/repurpose-ai-news" className="group block border border-white/10 hover:border-white/30 transition-colors p-8 md:p-10 mt-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs uppercase tracking-widest text-white/30 font-bold">AI Strategy · Content Distribution</span>
                <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight group-hover:text-white/80 transition-colors">
                  How to Repurpose AI News Across Platforms Effectively
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xl">
                  One article or briefing can reach LinkedIn, X, YouTube, and newsletter subscribers simultaneously. Here's the step-by-step framework for making every piece of AI news work harder across every platform.
                </p>
              </div>
              <span className="shrink-0 text-sm font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors whitespace-nowrap">
                Read Article →
              </span>
            </div>
          </Link>
        </section>

        {/* CTA */}
        <section className="bg-white text-black">
          <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 mb-2 font-bold">Stay Ahead</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                Follow AI News &amp; Investment Trends
              </h2>
            </div>
            <a
              href="https://captaintok.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-4 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              Visit AI News Hub →
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
