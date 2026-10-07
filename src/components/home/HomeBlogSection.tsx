import { motion } from "framer-motion";
import { Link } from "wouter";

const latestPosts = [
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
      "Allen businesses that say 'near Plano' are invisible in Allen searches — and leave the most underserved premium market in Collin County wide open for whoever claims it first.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
  },
  {
    href: "/mckinney-ai-marketing",
    category: "Local Marketing",
    date: "May 22, 2026",
    title: "AI Marketing for McKinney TX: The Local-First Paradox",
    excerpt:
      "McKinney residents will go out of their way to support a local business — if they know it exists. Here's how to close the gap between local-first intention and digital discovery.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
];

export function HomeBlogSection() {
  return (
    <section className="bg-[#070C18] py-24 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-white" />
              <p className="text-xs uppercase tracking-[0.2em] text-white font-bold">From the Blog</p>
            </div>
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight text-white">
              Latest Insights
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors font-bold group"
          >
            All Articles
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </motion.div>

        {/* Featured post — large + two smaller */}
        <div className="grid md:grid-cols-5 gap-px bg-white/10">

          {/* Large featured card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-3"
          >
            <Link href={latestPosts[0].href} className="group block h-full bg-[#070C18] hover:bg-[#0D1425] transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out z-10" />
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={latestPosts[0].image}
                  alt={latestPosts[0].title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070C18] via-[#070C18]/40 to-transparent" />
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase tracking-widest text-white font-bold">{latestPosts[0].category}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-xs uppercase tracking-widest text-white/30">{latestPosts[0].date}</span>
                </div>
                <h3 className="font-display font-bold text-2xl uppercase tracking-tight leading-tight text-white group-hover:text-white transition-colors duration-300">
                  {latestPosts[0].title}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{latestPosts[0].excerpt}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors pt-1">
                  Read Article <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Two smaller cards stacked */}
          <div className="md:col-span-2 flex flex-col gap-px bg-white/10">
            {latestPosts.slice(1).map((post, i) => (
              <motion.div
                key={post.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: (i + 1) * 0.12 }}
                className="flex-1"
              >
                <Link href={post.href} className="group flex flex-col h-full bg-[#070C18] hover:bg-[#0D1425] transition-colors duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-500 ease-out z-10" />
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070C18]/80 to-transparent" />
                  </div>
                  <div className="p-6 space-y-3 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-widest text-white font-bold">{post.category}</span>
                      <span className="text-white/30">·</span>
                      <span className="text-xs uppercase tracking-widest text-white/30">{post.date}</span>
                    </div>
                    <h3 className="font-display font-bold text-base uppercase tracking-tight leading-tight text-white group-hover:text-white transition-colors duration-300">
                      {post.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                      Read <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile "all articles" */}
        <div className="sm:hidden mt-8 text-center">
          <Link href="/blog" className="text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors font-bold">
            View All Articles →
          </Link>
        </div>

      </div>
    </section>
  );
}
