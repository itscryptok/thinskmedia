import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";
import cryptokBanner from "@assets/cryptok_online_banner_1779681482595.png";

const faqs = [
  {
    q: "Why is 'near Plano' a marketing mistake for Allen TX businesses?",
    a: "When an Allen business describes itself as 'near Plano' or 'serving the Plano area,' it dilutes its own geographic entity in search and AI systems. Google and AI search tools evaluate local authority by how consistently a business claims its actual location. A business that vaguely orbits Plano gets credit for neither market. One that builds explicit Allen identity — with schema markup, city-specific content, and local citations — owns its home market and becomes more discoverable to the Allen residents who are its actual customers.",
  },
  {
    q: "How does Allen ISD create a marketing opportunity that other DFW cities don't have in the same way?",
    a: "Allen ISD is one of the largest and most decorated school districts in Texas, with strong athletic and academic programs that drive community engagement throughout the year. This creates predictable, high-intensity purchase windows — fall sports gear, spring formal season, summer camp enrollment, back-to-school prep — that Allen businesses can time their campaigns to. Businesses that publish content tied to Allen ISD events and seasons appear in searches that competitors outside Allen literally cannot rank for.",
  },
  {
    q: "How does the Allen Premium Outlets create AI search opportunities for nearby businesses?",
    a: "Allen Premium Outlets drives thousands of visitors to Allen from across DFW and beyond every weekend. These visitors search for food, services, and entertainment near the outlets while they're physically in Allen. Businesses within a few miles that have published content referencing the outlets or the surrounding area appear in 'near Allen Premium Outlets' queries — a consistent stream of high-intent local searches that most businesses within driving distance ignore entirely.",
  },
  {
    q: "What types of Allen businesses benefit most from AI marketing investment?",
    a: "Service businesses with strong repeat-purchase cycles benefit most: pediatric healthcare, tutoring and academic enrichment (huge in an ISD-driven market), family restaurants, fitness studios, and home services. These businesses benefit from email automation that drives repeat visits, GEO signals that make them discoverable when families relocate to Allen, and local content that builds community-level recognition over time.",
  },
  {
    q: "Is the Allen TX search term actually less competitive than Plano or Frisco?",
    a: "Yes. Allen has approximately 115,000 residents and strong demographics, but as a city it has received far less SEO investment than Plano or Frisco — partly because many Allen businesses default to targeting the broader North Dallas area. This makes Allen-specific keywords and AI search queries significantly less competitive per ranking position than equivalent terms in Plano or Frisco. A business that establishes strong Allen GEO signals today faces a smaller field of well-optimized competitors than in any other comparably affluent DFW city.",
  },
];

export default function AllenAiMarketing() {
  useSeo({
    title: "AI Marketing for Allen TX: Stop Saying 'Near Plano' | Thinsk Media",
    description:
      "Allen TX businesses that describe themselves as 'near Plano' are invisible in Allen-specific searches — and give up the most underserved premium market in Collin County. Here's how to own Allen instead.",
    canonical: "https://thinskmedia.com/allen-ai-marketing",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI Marketing for Allen TX: Stop Saying 'Near Plano'",
      description:
        "Allen, TX businesses that describe themselves as 'near Plano' are invisible in Allen-specific AI and Google search results. This is how to build Allen identity and own the most underserved premium market in Collin County.",
      datePublished: "2026-05-23T08:00:00-05:00",
      dateModified: "2026-05-23T08:00:00-05:00",
      author: { "@type": "Organization", name: "Thinsk Media", url: "https://thinskmedia.com" },
      publisher: {
        "@type": "Organization",
        name: "Thinsk Media",
        logo: { "@type": "ImageObject", url: "https://thinskmedia.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://thinskmedia.com/allen-ai-marketing" },
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
      articleSection: "Local Marketing",
      keywords: [
        "AI marketing Allen TX", "digital marketing Allen Texas", "Allen TX SEO",
        "GEO Allen Texas", "Allen ISD marketing", "Allen Premium Outlets marketing",
        "local business marketing Allen DFW", "generative engine optimization Allen TX",
      ],
      about: [
        { "@type": "Place", name: "Allen", address: { "@type": "PostalAddress", addressLocality: "Allen", addressRegion: "TX", addressCountry: "US" } },
        { "@type": "Thing", name: "Local Search Optimization" },
        { "@type": "Thing", name: "Geographic Entity Optimization" },
        { "@type": "Thing", name: "AI-Powered Local Marketing" },
      ],
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MarketingAgency",
      name: "Thinsk Media",
      url: "https://thinskmedia.com",
      logo: "https://thinskmedia.com/favicon.png",
      description:
        "AI-powered digital marketing agency serving Allen, McKinney, Plano, Frisco, Dallas, Fort Worth, and the greater DFW metroplex.",
      telephone: "+14439865060",
      areaServed: [
        { "@type": "City", name: "Allen", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Richardson", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "MetroArea", name: "Dallas–Fort Worth Metroplex" },
      ],
      serviceType: ["AI-Powered Digital Marketing", "Generative Engine Optimization", "Local SEO", "Social Media Marketing", "Email Marketing Automation"],
      sameAs: ["https://www.linkedin.com/in/mcyemmy", "https://www.tiktok.com/@itsCaptain_Tok"],
      founder: { "@type": "Person", name: "Yemi" },
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const scripts = [articleSchema, localBusinessSchema, faqSchema].map((schema) => {
      const el = document.createElement("script");
      el.type = "application/ld+json";
      el.text = JSON.stringify(schema);
      document.head.appendChild(el);
      return el;
    });

    return () => scripts.forEach((el) => el.remove());
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Sponsor banner */}
        <a href="https://cryptok.online" target="_blank" rel="noopener noreferrer" className="block w-full">
          <img src={cryptokBanner} alt="Find the best everyday apps at cryptok.online" className="w-full block" />
        </a>

        {/* Hero */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">May 23, 2026</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Local Marketing</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Allen, TX</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight mb-6">
              AI Marketing for Allen TX: Stop Saying "Near Plano"
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              Search for almost any service "in Allen TX" and you'll find businesses that describe themselves as "near Plano," "serving the North Dallas area," or "Collin County's premier" something. What you won't find is many businesses that have invested in specifically owning Allen. That gap is an opportunity — because Allen's demographics are strong, its search terms are underserved, and the businesses that claim this market now face a smaller competitive field than anywhere else in Collin County.
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80"
            alt="Allen TX community showing growth and business opportunity"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">Allen, TX — one of Collin County's strongest markets, and one of its least claimed</p>
        </div>

        <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

          {/* Section 1 — The near-Plano mistake */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Why "Near Plano" Is Making Allen Businesses Invisible
            </h2>
            <p className="text-white/65 leading-relaxed">
              Here's how it happens. An Allen business owner looks at their neighbor city — Plano, with its Fortune 500 corridor and national name recognition — and decides to borrow some of that credibility. They describe themselves as "near Plano" or "just north of Plano" or "serving the greater Plano area." It feels like the smart play: more people know Plano, so use Plano.
            </p>
            <p className="text-white/65 leading-relaxed">
              The problem is that Google and AI search tools are not impressed by borrowed geography. When someone in Allen searches for "best physical therapist in Allen TX" or asks ChatGPT "find me a tutoring center in Allen Texas," the AI is looking for businesses that have explicitly, consistently, and specifically claimed Allen. A business that says "near Plano" in its schema markup, its website copy, and its Google Business Profile is not claiming Allen. It is claiming proximity to somewhere else — which means it competes poorly in both markets and dominates neither.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/10">
              {[
                { stat: "115K+", label: "Allen residents (2026)" },
                { stat: "$101K+", label: "Median household income" },
                { stat: "Top 5", label: "Best DFW suburbs for families" },
                { stat: "AISD", label: "One of TX's top school districts" },
                { stat: "Low", label: "Competition for 'Allen TX' keywords" },
                { stat: "Near 0%", label: "Local businesses with full GEO setup" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 bg-white/3 space-y-1">
                  <p className="font-display font-bold text-2xl text-white">{stat}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              Allen has 115,000 residents with a median household income above $100,000. Allen ISD is one of the most sought-after school districts in Texas. Allen Premium Outlets draws visitors from across DFW every week. This is not a secondary market that needs to lean on Plano. It is a primary market that has been systematically underinvested in from a digital marketing standpoint — which is exactly what makes it valuable to the businesses willing to claim it first.
            </p>
          </section>

          {/* Section 2 — Allen ISD as a marketing anchor */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Allen ISD: The Marketing Calendar That Runs Itself
            </h2>

            <img
              src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=1200&q=80"
              alt="Allen ISD school activities and community events driving local purchase behavior"
              className="w-full aspect-video object-cover my-6"
            />
            <p className="text-xs text-white/30 -mt-10 mb-6 uppercase tracking-widest">Allen ISD's calendar drives purchase behavior in ways no other DFW city anchor does</p>

            <p className="text-white/65 leading-relaxed">
              Allen ISD serves nearly 22,000 students across one of the most engaged school communities in Texas. Allen High School regularly ranks among the largest and most competitive high school athletic programs in the country — the football stadium seats 18,000 people. Academic competition programs, performing arts, and extracurriculars run year-round. This is not background noise. It is a predictable economic engine that drives purchase behavior for thousands of Allen families on a calendar that almost no business currently markets around.
            </p>
            <p className="text-white/65 leading-relaxed">
              Every season of the AISD calendar creates high-intent search demand that Allen businesses can capture:
            </p>

            <div className="space-y-0 border border-white/10 divide-y divide-white/10">
              {[
                {
                  season: "August–September",
                  event: "Back to school + fall sports kickoff",
                  queries: ["tutoring centers in Allen TX", "sports nutrition near Allen High School", "school supply deals Allen", "football season prep Allen ISD"],
                },
                {
                  season: "October–November",
                  event: "Playoff season + homecoming",
                  queries: ["Allen Eagles merchandise", "homecoming dress alterations Allen TX", "restaurants near Allen High School stadium", "sports photography Allen"],
                },
                {
                  season: "January–February",
                  event: "Spring enrollment + academic competition season",
                  queries: ["STAAR prep tutoring Allen TX", "academic enrichment programs Allen", "SAT prep near Allen ISD"],
                },
                {
                  season: "April–May",
                  event: "Prom + spring sports + graduation",
                  queries: ["prom limo Allen TX", "senior portrait photographers Allen", "graduation flowers Allen", "spring sport registration Allen"],
                },
              ].map(({ season, event, queries }) => (
                <div key={season} className="p-5 space-y-2">
                  <div className="flex gap-4 items-baseline">
                    <span className="text-xs uppercase tracking-widest text-white/30 font-bold shrink-0 w-32">{season}</span>
                    <span className="font-display font-bold text-sm uppercase tracking-tight">{event}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-36">
                    {queries.map((q) => (
                      <span key={q} className="text-xs text-white/40 border border-white/10 px-2 py-1 italic">"{q}"</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              An AI content pipeline built around the AISD calendar creates evergreen search visibility that compounds year over year. A tutoring center that publishes content about STAAR prep in January, summer enrichment in May, and fall academic readiness in August builds a content history that AI tools recognize as genuinely local authority — not a business that published one blog post about Allen in 2023 and went quiet.
            </p>
          </section>

          {/* Section 3 — Premium Outlets opportunity */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The Premium Outlets Effect: Capturing Visitor Search Traffic
            </h2>

            <img
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&q=80"
              alt="Allen Premium Outlets drawing shoppers and creating local search demand"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Allen Premium Outlets brings thousands of DFW visitors to Allen weekly — most of them searching locally</p>

            <p className="text-white/65 leading-relaxed">
              Allen Premium Outlets is one of the most-visited retail destinations in North Texas. On any given Saturday, shoppers drive from Dallas, Fort Worth, Frisco, and beyond to spend a half-day at the outlets. Before they leave their houses, and while they're walking between stores, many of them are searching for things to do nearby: where to eat, where to get a coffee, whether there's anything else worth doing in Allen.
            </p>
            <p className="text-white/65 leading-relaxed">
              This is a consistent stream of out-of-area, high-intent visitors who are physically in Allen, have discretionary income to spend, and are actively searching. The businesses that capture this traffic are the ones that have:
            </p>
            <ul className="space-y-3 text-white/65">
              {[
                "Google Business Profiles with 'near Allen Premium Outlets' explicitly mentioned in their service description or posts",
                "Website content that references the outlets as a landmark — 'five minutes from Allen Premium Outlets' in their About or Location pages",
                "Schema markup with precise latitude/longitude and a service area that includes the outlets' zip code (75013)",
                "Consistent recent photos on their GBP showing the business, not stock images — visitors searching on phones respond to evidence the place actually exists",
                "Positive reviews from out-of-area visitors who came from the outlets corridor — these reviews signal to AI tools that the business attracts regional, not just local, traffic",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 — GEO for Allen */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              GEO for Allen: Owning the Least-Contested Premium Market in Collin County
            </h2>
            <p className="text-white/65 leading-relaxed">
              Generative Engine Optimization in Allen has a structural advantage that no other comparable DFW city currently offers: low competition. Plano has been an SEO battleground for years. Frisco has attracted significant marketing investment as the city's growth became national news. McKinney has a robust local business community actively building digital presence. Allen sits between all of them with strong demographics, growing population, and almost no well-optimized competition for AI search signals.
            </p>

            <blockquote className="border-l-4 border-white pl-6 py-2">
              <p className="text-white/80 italic leading-relaxed">
                "The window to establish first-mover GEO authority in Allen, TX is wider than in any other Collin County city right now. The business that sets up proper schema markup, builds Allen-specific content, and maintains consistent local citations this year will hold that position for a long time."
              </p>
            </blockquote>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Allen GEO Setup — What to Build</p>
              <div className="space-y-4">
                {[
                  {
                    item: "LocalBusiness schema with Allen-specific service area",
                    detail: "Declare: Allen, TX 75002 · Allen, TX 75013 · Allen, TX 75025 — plus neighboring cities: McKinney, Fairview, Lucas, Wylie, Plano north. Never just 'DFW area.'",
                  },
                  {
                    item: "FAQ page with Allen-specific queries",
                    detail: "'What is the best [service] in Allen TX?' · 'Do you serve the Allen Premium Outlets area?' · 'Are you near Allen High School?' Each FAQ answer should be 2–4 sentences with specific Allen references.",
                  },
                  {
                    item: "Service area page naming Allen neighborhoods",
                    detail: "Twin Creeks, Shadow Lakes, Stacy Ridge, Cottonwood Creek — these neighborhood names appear in local search queries from Allen residents who think in geographic terms, not zip codes.",
                  },
                  {
                    item: "Allen-specific content published monthly",
                    detail: "At minimum: one piece of content per month that references Allen ISD, an Allen landmark, or an Allen community event. This is the compounding signal that builds long-term AI search authority.",
                  },
                  {
                    item: "Allen Chamber of Commerce and local citations",
                    detail: "Allen/Fairview Chamber of Commerce listing, Collin County BBB, Nextdoor Allen communities, local ISD parent groups where applicable. Cross-platform consistency amplifies every other GEO signal.",
                  },
                ].map(({ item, detail }) => (
                  <div key={item} className="flex gap-4">
                    <span className="text-white mt-0.5 shrink-0 text-sm">✓</span>
                    <div>
                      <p className="text-white text-sm font-medium">{item}</p>
                      <p className="text-white/40 text-xs leading-relaxed mt-0.5">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 5 — Two Allen business profiles */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              What AI Marketing Looks Like for Two Allen Business Types
            </h2>

            {[
              {
                type: "Family-Serving B2C",
                example: "Pediatric dental practice, tutoring center, or kids' fitness studio",
                context: "Allen's demographic is heavily family-oriented. AISD's size and quality are the primary reason families move here — which means a business that markets authentically to Allen families, using the language and landmarks of Allen family life, has a built-in community audience that no national brand can replicate.",
                aiMarketing: [
                  "GBP optimized with photos of the Allen location, updated monthly during AISD event seasons",
                  "FAQ content targeting Allen ISD parents: 'Does your tutoring center offer STAAR prep for Allen ISD?' 'What are your hours around Allen High School dismissal times?'",
                  "Email automation timed to the AISD academic calendar — back-to-school, winter break, spring testing season",
                  "Instagram content referencing Allen ISD events, Allen neighborhood names, and local milestones that parents recognize instantly",
                ],
                edge: "Allen ISD parent networks are tight and active on social media and Nextdoor. A business that genuinely engages with that community gets word-of-mouth amplification that scales faster than paid advertising.",
              },
              {
                type: "Restaurants and Food & Beverage",
                example: "Locally-owned restaurant, bakery, coffee shop, or specialty food business",
                context: "Allen has a mix of chain restaurants along US-75 and a growing independent food scene. The Premium Outlets visitor traffic and the ISD-adjacent family audience create two distinct high-value customer streams — both of which search locally before visiting.",
                aiMarketing: [
                  "Content strategy targeting both streams: 'best brunch near Allen Premium Outlets' for visitor traffic and 'family dinner Allen TX' for resident traffic",
                  "Post-visit email sequence: review request at 24 hours, loyalty offer at 14 days, seasonal menu announcement at 30 days",
                  "Google Business Profile posts every Friday referencing weekend events in Allen — outlets tax-free weekend, Allen Farmers Market, AISD games",
                  "Schema markup with 'Allen, TX' as the primary location, explicit 'near Allen Premium Outlets' reference in business description",
                ],
                edge: "DFW visitors who find your restaurant via 'near Allen Premium Outlets' search become repeat visitors. Once a family from Frisco or Dallas finds a restaurant they love near the outlets, they come back every time they make the trip.",
              },
            ].map(({ type, example, context, aiMarketing, edge }) => (
              <div key={type} className="border border-white/10 p-6 space-y-5">
                <div className="space-y-1">
                  <p className="font-display font-bold text-sm uppercase tracking-tight text-white">{type}</p>
                  <p className="text-xs text-white/35 uppercase tracking-widest">{example}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{context}</p>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-3">AI Marketing Stack</p>
                  <ul className="space-y-2">
                    {aiMarketing.map((item) => (
                      <li key={item} className="flex gap-3 text-white/55 text-sm">
                        <span className="text-white/30 shrink-0 mt-1">·</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-3">
                  <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">The Allen Edge</p>
                  <p className="text-white/55 text-xs leading-relaxed italic">{edge}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Section 6 — What to do now */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The Claim: What Owning Allen Actually Looks Like
            </h2>
            <p className="text-white/65 leading-relaxed">
              "Owning" a local market in AI search is not a metaphor — it has a concrete meaning. It means that when someone types any high-intent query with "Allen TX" into Google, Perplexity, or ChatGPT, your business appears. Not necessarily first for every query, but consistently, across categories of queries relevant to your business.
            </p>
            <p className="text-white/65 leading-relaxed">
              Getting there is a matter of accumulating the right signals over time. Here's what the first 60 days of claiming Allen look like for any business:
            </p>

            <div className="space-y-0 border border-white/10">
              {[
                {
                  week: "Week 1–2",
                  title: "Plant the flag",
                  actions: [
                    "Install LocalBusiness schema on your website — service area: Allen TX 75002, 75013, 75025 — plus Fairview, Lucas, McKinney, Wylie",
                    "Rewrite your Google Business Profile description to lead with 'Allen, TX' — not 'near Plano' or 'Collin County area'",
                    "Audit your NAP data: name, address, and phone must match exactly on Google, Yelp, and every directory listing you control",
                  ],
                },
                {
                  week: "Week 3–4",
                  title: "Build the content foundation",
                  actions: [
                    "Write an FAQ page with at least 5 Allen-specific questions your customers actually ask AI tools",
                    "Add a service area page that names Allen neighborhoods: Twin Creeks, Shadow Lakes, Cottonwood Creek, Stacy Ridge, Bray Central",
                    "Create one blog post or GBP post tied to the current AISD calendar season",
                  ],
                },
                {
                  week: "Week 5–8",
                  title: "Activate the community signals",
                  actions: [
                    "Submit your listing to Allen/Fairview Chamber of Commerce and Collin County BBB — these are high-authority Allen-specific citations",
                    "Set up your first email automation: 5-email welcome sequence for new customers or subscribers",
                    "Post to your GBP every week — at least two Allen references per month (outlets weekend traffic, AISD event, local neighborhood mention)",
                  ],
                },
              ].map(({ week, title, actions }) => (
                <div key={week} className="p-6 border-b border-white/10 last:border-0 space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-widest text-white/30 font-bold shrink-0">{week}</span>
                    <span className="h-px flex-1 bg-white/10" />
                    <span className="font-display font-bold text-sm uppercase tracking-tight">{title}</span>
                  </div>
                  <ul className="space-y-2">
                    {actions.map((action) => (
                      <li key={action} className="flex gap-3 text-white/60 text-sm">
                        <span className="text-white/30 shrink-0 mt-1">·</span>
                        <span className="leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border border-white/20 p-8 space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Thinsk Media — DFW AI Marketing</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Allen doesn't need Plano's name.<br />It needs businesses willing to own it.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Thinsk Media builds AI marketing systems that help Allen businesses establish the search visibility and local authority their market is ready to deliver — without borrowing credibility from neighboring cities.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://calendly.com/thinskmedia/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-1"
              >
                Boost My Visibility
              </a>
              <a
                href="https://jhirah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:-translate-y-1"
              >
                Use Jhirah.com to Boost 3x
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center border border-white/30 text-white font-bold uppercase tracking-wider text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:border-white hover:-translate-y-1"
              >
                Our Services
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Questions About AI Marketing in Allen
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="border border-white/10 p-6 space-y-3">
                  <h3 className="font-display font-bold text-base uppercase tracking-tight">{faq.q}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="pt-4 border-t border-white/10">
            <Link href="/blog" className="text-xs uppercase tracking-widest text-white/40 hover:text-white transition-colors font-bold">
              ← All Articles
            </Link>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
