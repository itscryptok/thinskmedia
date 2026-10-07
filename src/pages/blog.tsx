import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";
import cryptokBanner from "@assets/cryptok_online_banner_1779681482595.png";

const articles = [
  {
    href: "/dallas-ai-marketing",
    category: "Local Marketing",
    date: "May 24, 2026",
    title: "AI Marketing for Dallas TX: How to Get Found in Texas's Most Competitive Market",
    excerpt:
      "Dallas has more Fortune 500 HQs than almost any US city and thousands of businesses fighting for the same keywords. The businesses winning aren't outspending competitors — they're out-targeting them at the neighborhood level.",
    image: "https://images.unsplash.com/photo-1515965885361-f1e0095517ea?w=800&q=80",
  },
  {
    href: "/allen-ai-marketing",
    category: "Local Marketing",
    date: "May 23, 2026",
    title: "AI Marketing for Allen TX: Stop Saying \"Near Plano\"",
    excerpt:
      "Allen businesses that describe themselves as 'near Plano' are invisible in Allen-specific searches — and leave the most underserved premium market in Collin County wide open for competitors who won't make that mistake.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    href: "/mckinney-ai-marketing",
    category: "Local Marketing",
    date: "May 22, 2026",
    title: "AI Marketing for McKinney TX: The Local-First Paradox",
    excerpt:
      "McKinney residents will go out of their way to support a local business — if they know it exists. Most locally-owned McKinney businesses are invisible to the neighbors who'd choose them. Here's how to fix that.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    href: "/plano-ai-marketing",
    category: "Local Marketing",
    date: "May 21, 2026",
    title: "AI Marketing for Plano TX: Earning the Market That Does Its Homework",
    excerpt:
      "Plano buyers research before they buy — and more of them are researching on AI tools. Open ChatGPT and search your own business. Here's what they find, and how to change it.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    href: "/frisco-ai-marketing",
    category: "Local Marketing",
    date: "May 20, 2026",
    title: "AI Marketing for Frisco TX: The Speed Advantage",
    excerpt:
      "~400 new households arrive in Frisco every month with no brand loyalty and no go-to businesses yet. The window to be found first is short. Here's how to own it.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
];

export default function Blog() {
  useSeo({
    title: "Marketing Blog | Thinsk Media",
    description:
      "Practical guides on AI-powered marketing, email list building, content distribution, SEO, and social media strategy — built for creators and modern businesses.",
    canonical: "https://thinskmedia.com/blog",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Sponsor banner */}
        <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="block w-full">
          <img src={cryptokBanner} alt="Find the best everyday apps at cryptok.online" className="w-full block" />
        </a>

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-block border border-white/20 px-4 py-1.5 mb-8 text-xs uppercase tracking-widest text-white/60">
              Thinsk Media · Knowledge Hub
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight mb-6">
              Marketing Blog
            </h1>
            <p className="text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed">
              Practical guides on AI-powered marketing, email list building, content distribution, SEO, and social media strategy — built for creators and modern businesses.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white/90 transition-colors duration-200"
              >
                Boost My Visibility →
              </a>
              <a
                href="https://jhirah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 hover:border-white transition-colors duration-200"
              >
                Use Jhirah.com to Boost 3x
              </a>
            </div>
          </motion.div>
        </section>

        {/* Articles grid */}
        <section className="max-w-5xl mx-auto px-6 pb-24 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 mt-0">
            {articles.map((article, i) => (
              <motion.div
                key={article.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-black"
              >
                <Link href={article.href} className="group block h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs uppercase tracking-widest text-white/40 font-bold">{article.category}</span>
                      <span className="text-white/20">·</span>
                      <span className="text-xs uppercase tracking-widest text-white/40">{article.date}</span>
                    </div>
                    <h2 className="font-display font-bold text-lg md:text-xl uppercase tracking-tight leading-tight group-hover:text-white/80 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors pt-2">
                      Read Article →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white text-black">
          <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-black/40 mb-2 font-bold">Work with Us</p>
              <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
                Ready to Grow Your Business?
              </h2>
            </div>
            <Link
              href="/services"
              className="shrink-0 bg-black text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
            >
              Smart Services →
            </Link>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
