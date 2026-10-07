import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";

const faqs = [
  {
    q: "What is the best starting point for repurposing AI news content?",
    a: "Start with a comprehensive pillar piece like a detailed blog post or video, then extract platform-specific insights to create adaptable derivatives. Create one comprehensive piece and adapt it for platforms rather than creating from scratch each time.",
  },
  {
    q: "How important is human review in AI-driven content repurposing?",
    a: "Human-in-the-loop editorial review is essential to maintain brand voice, verify facts, and catch formatting issues before publishing. Human review gates prevent errors and preserve brand integrity amidst AI automation.",
  },
  {
    q: "Why can't I just post the same AI news content on every platform?",
    a: "Posting identical content ignores platform-specific audience and algorithm expectations, leading to lower engagement and possible suppression. Each platform has distinct culture and format needs, and copying content results in underperformance.",
  },
  {
    q: "How should I schedule repurposed posts across platforms?",
    a: "Distribute your posts over 7 to 14 days instead of posting all at once to maintain consistent visibility without overwhelming your audience. Staggered publishing keeps content fresh and enhances algorithmic reach across every channel.",
  },
];

const tableOfContents = [
  "What you need: prepping for multi-platform AI news repurposing",
  "Step-by-step execution: adapting AI news content for each platform",
  "Common pitfalls and verification to ensure your AI news repurposing succeeds",
  "Expected results: benefits and metrics to track",
  "Why adaptive repurposing beats raw volume",
  "Optimize your AI news distribution with Thinsk Media",
  "Frequently asked questions",
];

export default function RepurposeAiNews() {
  useSeo({
    title: "How to Repurpose AI News Across Platforms Effectively | Thinsk Media",
    description:
      "A single AI news article or briefing can reach LinkedIn, X, YouTube, and newsletter subscribers simultaneously. Here's how to make every piece work harder across every platform.",
    canonical: "https://thinskmedia.com/repurpose-ai-news",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">AI Strategy</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Content Distribution</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight mb-6">
              How to Repurpose AI News Across Platforms Effectively
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              AI news content is being produced at a pace that most founders and investors struggle to keep up with, let alone distribute well. The real opportunity is not just staying informed — it's making every piece of AI news work harder across multiple channels. When you repurpose AI news with intention, a single article or briefing can reach LinkedIn professionals, X followers, YouTube viewers, and newsletter subscribers simultaneously.
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <img
            src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=80"
            alt="Multi-platform social media content strategy"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">Distributing content across multiple platforms simultaneously</p>
        </div>

        {/* Table of Contents */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <div className="border border-white/10 p-6 md:p-8">
            <h2 className="font-display font-bold text-xs uppercase tracking-widest text-white/40 mb-5">Table of Contents</h2>
            <ol className="space-y-2">
              {tableOfContents.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/60 leading-snug">
                  <span className="text-white/25 font-bold shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="max-w-3xl mx-auto px-6 mb-16 overflow-x-auto">
          <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Key Takeaways</p>
          <table className="w-full text-sm border border-white/10">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Point</th>
                <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                ["Start with pillar content", "Create one comprehensive AI news piece as a source before adapting it for multiple platforms."],
                ["Adapt per platform", "Tailor tone, format, and visuals to fit each platform's unique audience and algorithms."],
                ["Use human review", "Maintain brand integrity through editorial oversight despite using AI automation tools."],
                ["Schedule strategically", "Space out repurposed posts over days to maximize reach without spamming feeds."],
                ["Verify formatting", "Preview each content piece on its target platform to avoid display errors or truncation."],
              ].map(([point, detail]) => (
                <tr key={point}>
                  <td className="px-4 py-3 text-white font-medium align-top whitespace-nowrap">{point}</td>
                  <td className="px-4 py-3 text-white/50">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

          {/* Section 1 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              What You Need: Prepping for Multi-Platform AI News Repurposing
            </h2>
            <p className="text-white/65 leading-relaxed">
              To begin successfully repurposing AI news, you first need the right sources and setup. Jumping in without a clear framework wastes time and produces content that underperforms on every channel.
            </p>
            <p className="text-white/65 leading-relaxed">
              <strong className="text-white">Choose your pillar content first.</strong> A pillar piece is your anchor — a detailed, high-quality asset such as a long-form blog post, a recorded webinar, or a comprehensive AI news briefing. Everything else you publish flows from this source. Founders who try to repurpose short, thin content end up with even thinner derivatives that carry no real value.
            </p>
            <p className="text-white/65 leading-relaxed">
              <strong className="text-white">Identify your target platforms.</strong> For AI startup investors and founders, the highest-value platforms are typically:
            </p>
            <ul className="space-y-3 text-white/65">
              {[
                "LinkedIn: Professional audiences, long-form commentary, thought leadership posts",
                "X (formerly Twitter): Fast-moving threads, breaking AI news, community discussion",
                "YouTube or short-form video: Explainer clips, news summaries, investor briefings",
                "Email newsletters: Curated digests with editorial framing for high-value subscribers",
                "Podcasts or audio clips: Repurposed commentary for commuters and passive listeners",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Platform table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    {["Platform", "Content format", "Tone", "Optimal length"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["LinkedIn", "Articles, carousels, posts", "Professional, insightful", "150–300 words"],
                    ["X (Twitter)", "Threads, single tweets", "Punchy, direct", "280 chars/tweet"],
                    ["YouTube", "Video summaries, clips", "Conversational, visual", "3–10 minutes"],
                    ["Email newsletter", "Curated digest", "Editorial, personal", "400–800 words"],
                    ["Podcast/audio", "Commentary clips", "Relaxed, informative", "5–15 minutes"],
                  ].map(([platform, format, tone, length]) => (
                    <tr key={platform}>
                      <td className="px-4 py-3 text-white font-medium">{platform}</td>
                      <td className="px-4 py-3 text-white/50">{format}</td>
                      <td className="px-4 py-3 text-white/50">{tone}</td>
                      <td className="px-4 py-3 text-white/50">{length}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Pro Tip</p>
              <p className="text-white/65 text-sm leading-relaxed">
                Before you build your repurposing workflow, audit your existing AI news content library. Identify three to five pillar pieces that already performed well. Those are your first repurposing candidates because the audience signal already exists.
              </p>
            </div>
          </section>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1200&q=80"
            alt="Content strategy planning with spreadsheet"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 -mt-12 mb-2 uppercase tracking-widest">Mapping pillar content to platform-specific derivatives</p>

          {/* Section 2 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Step-by-Step Execution: Adapting AI News Content for Each Platform
            </h2>
            <p className="text-white/65 leading-relaxed">
              With your prep complete, execute a multi-platform repurposing workflow step by step.
            </p>
            <ul className="space-y-4 text-white/65">
              {[
                ["Extract key insights immediately", "Right after consuming or publishing a pillar piece, pull out the five to seven most shareable insights. Do this while the content is fresh. Write them in plain language, not copied sentences from the original."],
                ["Draft platform-specific derivatives", "Each insight becomes a different format depending on the platform. A LinkedIn post might frame the insight as a lesson for investors. The same insight on X becomes a punchy two-sentence opener for a thread. On YouTube, it becomes a talking point in a short explainer."],
                ["Apply platform-specific hooks", "LinkedIn readers respond to professional stakes. X users engage with immediacy. TikTok and short-form video favor speed and personality over polish. Ignoring that distinction costs you engagement."],
                ["Schedule distribution over 7 to 14 days", "Do not publish everything at once. Spread your derivatives across two weeks. This keeps your brand visible without flooding any single audience and gives you time to observe early engagement signals."],
                ["Use AI tools for adaptation tasks, then review manually", "AI tools handle caption rewriting, video reframing, and scheduling efficiently. But always review each piece before it goes live. Repurposing a single content piece typically takes 3–5 hours to generate 10–15 platform-optimized posts."],
              ].map(([title, body]) => (
                <li key={title as string} className="space-y-1">
                  <p className="font-bold text-white">{title}</p>
                  <p className="leading-relaxed">{body}</p>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Pro Tip</p>
              <p className="text-white/65 text-sm leading-relaxed">
                Build a simple content matrix in a spreadsheet. Rows are your pillar insights, columns are your platforms. Fill each cell with the specific derivative format. This prevents accidental content duplication and makes it easy to assign tasks to team members.
              </p>
            </div>
          </section>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80"
            alt="Reviewing content before publishing"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 -mt-12 mb-2 uppercase tracking-widest">Editorial review before every publish — non-negotiable</p>

          {/* Section 3 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Common Pitfalls and Verification to Ensure Your Repurposing Succeeds
            </h2>
            <p className="text-white/65 leading-relaxed">
              Following the execution steps carefully sets you up for success, but vigilance in verification keeps your content effective over time. The most common mistakes founders make:
            </p>
            <ul className="space-y-3 text-white/65">
              {[
                "Posting the same text across every platform without any adaptation",
                "Publishing all derivatives on the same day, which creates noise rather than sustained presence",
                "Skipping the preview step and discovering formatting errors only after publishing",
                "Repurposing low-quality source content that was already underperforming",
                "Letting AI-generated captions go live without a human reading them first",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <blockquote className="border-l-4 border-white pl-6 py-2 my-6">
              <p className="text-white/80 italic leading-relaxed">
                "Preview tools that check formatting on each platform prevent truncated captions, cropped images, and other common errors unique to each channel."
              </p>
            </blockquote>

            <p className="text-white/65 leading-relaxed font-bold text-white">Verification checklist before every post goes live:</p>
            <ul className="space-y-3 text-white/65">
              {[
                "Does the caption read naturally for this platform's audience?",
                "Is the image or video properly sized and not cropped unexpectedly?",
                "Are all links functional and pointing to the correct destination?",
                "Does the tone match the platform's culture?",
                "Has a human reviewed the AI-generated text for accuracy and brand alignment?",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">✓</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">Pro Tip</p>
              <p className="text-white/65 text-sm leading-relaxed">
                Create a 5-minute pre-publish review ritual for every piece of content. It sounds small, but it catches the errors that damage credibility — especially when you are distributing AI news to sophisticated investor audiences who notice inaccuracies quickly.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Expected Results: Benefits and Metrics to Track
            </h2>

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
              alt="Analytics dashboard showing content performance metrics"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Tracking cross-platform performance metrics</p>

            <p className="text-white/65 leading-relaxed">
              When done correctly, repurposing AI news across platforms produces compounding returns. One pillar piece repurposed can achieve <strong className="text-white">4x typical organic reach</strong> by spanning multiple platforms and formats with consistent, native adaptation.
            </p>
            <p className="text-white/65 leading-relaxed">
              Platform-native adaptations deliver higher engagement and stronger algorithmic signals compared to duplicated posts. Algorithms on LinkedIn, X, and YouTube are designed to favor content that matches each platform's native behavior.
            </p>
            <p className="text-white/65 font-bold text-white">Metrics worth tracking:</p>
            <ul className="space-y-3 text-white/65">
              {[
                "Total impressions across platforms: Measures cumulative reach from a single pillar piece",
                "Engagement rate per platform: Likes, shares, comments, and saves relative to impressions",
                "Click-through rate to source content: How many platform users follow through to your full article",
                "Content lifespan: How many days after publishing the content continues to generate engagement",
                "Follower or subscriber growth: Whether repurposed content is attracting new audience members",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Results table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    {["Metric", "Single platform", "Multi-platform (repurposed)"].map((h) => (
                      <th key={h} className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Total impressions", "1x", "Up to 4x"],
                    ["Content lifespan", "1–2 days", "7–14 days"],
                    ["Engagement touchpoints", "1 format", "5–8 formats"],
                    ["Audience segments reached", "1", "3–5"],
                  ].map(([metric, single, multi]) => (
                    <tr key={metric}>
                      <td className="px-4 py-3 text-white font-medium">{metric}</td>
                      <td className="px-4 py-3 text-white/40">{single}</td>
                      <td className="px-4 py-3 text-white">{multi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Why Adaptive Repurposing Beats Raw Volume in AI News Content Strategies
            </h2>

            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
              alt="Team collaborating on content strategy"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Quality and adaptation outperform volume every time</p>

            <p className="text-white/65 leading-relaxed">
              There is a temptation in the AI startup world to equate volume with visibility. Post more, reach more. It is an understandable instinct, but it is the wrong one.
            </p>
            <p className="text-white/65 leading-relaxed">
              The founders and investors who build durable content authority in 2026 are not the ones posting the most. They are the ones whose content feels native to every platform it appears on. A LinkedIn post that reads like a tweet gets ignored. A TikTok script that reads like a press release gets scrolled past. The format is the message — and ignoring that costs you the audience's attention.
            </p>
            <p className="text-white/65 leading-relaxed">
              Automation enables scale, but it cannot make judgment calls about what your audience actually needs to hear. For AI news specifically — where claims about funding rounds, model capabilities, and regulatory shifts carry real stakes — a human editor is not optional.
            </p>
            <p className="text-white/65 leading-relaxed">
              There is also a discoverability dimension that most content strategies overlook entirely. Content must be structured for extractability and adapted for direct-answer AI engines to maximize downstream performance. This means using clear headers, FAQ sections, and structured data so that AI-driven search engines can surface your content in response to relevant queries.
            </p>
            <p className="text-white/65 leading-relaxed">
              The practical takeaway: fewer, better-adapted pieces consistently outperform a flood of identical reposts. Strategically spaced content nurtures audience trust and signals that your brand understands each platform's culture and respects the audience's time.
            </p>
          </section>

          {/* CTA */}
          <section className="border border-white/20 p-8 space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Optimize Your AI News Distribution</p>
            <h2 className="font-display font-bold text-2xl uppercase tracking-tight">
              Thinsk Media Content Distribution Solutions
            </h2>
            <p className="text-white/65 leading-relaxed">
              Putting a multi-platform repurposing workflow into practice takes more than a checklist. Thinsk Media specializes in content distribution strategies built specifically for AI startups, founders, and investors who want their insights to reach the right audiences across every major platform. Explore our books for practical guides on AI news content strategy, multi-platform marketing, and building brand authority in the agentic economy.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://captaintok.com/books"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-black font-bold uppercase tracking-widest text-sm px-6 py-3 transition-all duration-200 hover:-translate-y-1"
              >
                Explore Our Books →
              </a>
              <Link
                href="/services"
                className="inline-flex items-center border border-white/30 text-white font-bold uppercase tracking-widest text-sm px-6 py-3 transition-all duration-200 hover:border-white hover:-translate-y-1"
              >
                Our Services
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="space-y-0 divide-y divide-white/10 border-t border-b border-white/10">
              {faqs.map(({ q, a }) => (
                <div key={q} className="py-6 space-y-2">
                  <p className="font-bold text-white leading-snug">{q}</p>
                  <p className="text-white/60 leading-relaxed text-sm">{a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Back link */}
          <div className="pt-4 border-t border-white/10">
            <Link href="/ai-news" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors">
              ← Back to Why AI News &amp; Investing
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
