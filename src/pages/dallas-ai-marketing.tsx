import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";
import cryptokBanner from "@assets/cryptok_online_banner_1779681482595.png";

const faqs = [
  {
    q: "Why is it so hard for Dallas businesses to rank on Google and AI search?",
    a: "Dallas is the ninth-largest city in the United States and home to more Fortune 500 headquarters than almost any other American city. Every major national brand, every regional competitor, and tens of thousands of local businesses are all competing for the same high-level 'Dallas TX' keywords. Businesses that try to rank for broad terms like 'best restaurant in Dallas' or 'top marketing agency Dallas' are competing in the most expensive digital real estate in Texas. The businesses that win are those that get hyper-specific — they claim their neighborhood, their niche, and their specific customer type — and layer AI search signals on top of that precision targeting.",
  },
  {
    q: "How do Dallas neighborhoods create separate, less-competitive SEO and AI search opportunities?",
    a: "Dallas is not one market — it is dozens of micro-markets stacked inside a single city boundary. Deep Ellum, Uptown, Oak Cliff, Bishop Arts District, Lakewood, East Dallas, Preston Hollow, Lake Highlands, and Lower Greenville each have distinct demographics, foot traffic patterns, and search behaviors. A business in Oak Cliff that explicitly claims 'Oak Cliff' in its schema markup, Google Business Profile, and website content competes against a much smaller field than one targeting all of Dallas. AI tools like ChatGPT and Perplexity parse geographic specificity — when someone asks 'find me a personal trainer in Oak Cliff Dallas,' the tools surface businesses that have explicitly built Oak Cliff identity, not businesses that vaguely describe themselves as being 'in the Dallas area.'",
  },
  {
    q: "How does AI search (ChatGPT, Perplexity) handle Dallas business queries differently than Google?",
    a: "Google rewards domain authority, backlinks, and technical SEO signals that take years to accumulate. AI search engines — ChatGPT, Perplexity, Google's AI Overviews, and similar tools — synthesize information from many sources simultaneously and weight recency, specificity, and structured data more heavily than traditional ranking factors. A Dallas business with well-structured FAQ schema, consistent NAP (name-address-phone) citations across local directories, and regularly published location-specific content can appear in AI search answers months before it would crack Google's first page. This is the window that exists right now in Dallas — and it is closing as more businesses discover GEO.",
  },
  {
    q: "What types of Dallas businesses benefit most from AI marketing investment?",
    a: "Service businesses with local intent — healthcare, legal, home services, fitness, food and beverage, professional services — benefit most because their customers use search and AI tools to find them at the moment of need. Dallas's large corporate workforce also creates strong B2B demand for professional services, commercial real estate, staffing, and enterprise software — markets where AI search visibility translates directly to high-value lead generation. Any Dallas business with a defined service area, a specific customer avatar, and a repeatable service offering has a clear AI marketing opportunity that most of its competitors are not yet pursuing.",
  },
  {
    q: "How does GEO help a Dallas small business compete against national chains with massive marketing budgets?",
    a: "National chains have broad awareness but weak local specificity. When someone asks ChatGPT 'find me the best pediatric dentist in Lakewood Dallas who takes BlueCross,' a national dental chain's generic Dallas page doesn't answer that question — but a locally-owned practice with a Lakewood-specific FAQ page, neighborhood schema markup, and published content about Dallas insurance networks does. GEO is the first digital channel where genuine local knowledge creates a structural advantage over national advertising budgets. A $500/month AI content investment from a local Dallas business outperforms a $50,000/month national brand campaign for the specific, high-intent local queries that actually drive appointments and purchases.",
  },
];

export default function DallasAiMarketing() {
  useSeo({
    title: "AI Marketing for Dallas TX: How to Get Found in Texas's Most Competitive Market | Thinsk Media",
    description:
      "Dallas is the most competitive business market in Texas. Generic 'Dallas TX' marketing gets buried. Here's how AI-powered, neighborhood-level marketing gets local businesses found first — on Google and AI search.",
    canonical: "https://thinskmedia.com/dallas-ai-marketing",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI Marketing for Dallas TX: How to Get Found in Texas's Most Competitive Business Market",
      description:
        "Dallas is massive, competitive, and full of businesses fighting for the same digital real estate. The businesses winning use AI-powered, neighborhood-level marketing to get hyper-specific — and get found first on both Google and AI search engines.",
      datePublished: "2026-05-24T08:00:00-05:00",
      dateModified: "2026-05-24T08:00:00-05:00",
      author: { "@type": "Organization", name: "Thinsk Media", url: "https://thinskmedia.com" },
      publisher: {
        "@type": "Organization",
        name: "Thinsk Media",
        logo: { "@type": "ImageObject", url: "https://thinskmedia.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://thinskmedia.com/dallas-ai-marketing" },
      image: "https://images.unsplash.com/photo-1515965885361-f1e0095517ea?w=1200&q=80",
      articleSection: "Local Marketing",
      keywords: [
        "AI marketing Dallas TX", "digital marketing Dallas Texas", "Dallas TX SEO",
        "GEO Dallas Texas", "neighborhood marketing Dallas", "Uptown Dallas marketing",
        "Oak Cliff marketing", "local business marketing Dallas DFW",
        "generative engine optimization Dallas TX", "ChatGPT Dallas business",
      ],
      about: [
        { "@type": "Place", name: "Dallas", address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" } },
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
        "AI-powered digital marketing agency serving Dallas, Fort Worth, Plano, Frisco, Allen, McKinney, and the greater DFW metroplex.",
      telephone: "+14439865060",
      areaServed: [
        { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Allen", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
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

        {/* Hero text */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">May 24, 2026</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Local Marketing</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Dallas, TX</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight mb-6">
              AI Marketing for Dallas TX: How to Get Found in Texas's Most Competitive Business Market
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              Dallas has more Fortune 500 headquarters than almost any other American city. It has nearly 1.3 million residents, hundreds of thousands of businesses, and some of the most expensive digital real estate in Texas. If your marketing strategy is simply "target Dallas," you are competing in the hardest arena in the state — with everyone else. The businesses winning in Dallas right now are not outspending their competitors. They are out-targeting them: going deeper on neighborhood, on niche, and on the AI search signals that most Dallas businesses have never touched.
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <img
            src="https://images.unsplash.com/photo-1515965885361-f1e0095517ea?w=1200&q=80"
            alt="Dallas TX skyline — Texas's most competitive business market"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">Dallas — 1.3 million residents, thousands of businesses, and most of them marketing the same way</p>
        </div>

        <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

          {/* Section 1 — The problem with generic Dallas marketing */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Why "We Serve Dallas" Gets You Found by Nobody
            </h2>
            <p className="text-white/65 leading-relaxed">
              Walk into almost any Dallas small business's website and you'll find a headline that says something like: "Dallas's Premier [Service]" or "Serving the Greater Dallas Area" or "Dallas, TX's Top-Rated [Business Type]." It's the default. Everyone does it. Which is exactly the problem.
            </p>
            <p className="text-white/65 leading-relaxed">
              When thousands of businesses make the same geographic claim with the same boilerplate language, search engines and AI tools have no meaningful signal to separate them. Google sees hundreds of "best electrician in Dallas TX" pages that are structurally identical. ChatGPT synthesizes the same dozen sources that rank on Google and returns a generic answer. Your business, which is genuinely good and genuinely local, becomes invisible inside the noise.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/10">
              {[
                { stat: "1.3M+", label: "Dallas residents (2026)" },
                { stat: "23", label: "Fortune 500 HQs in DFW" },
                { stat: "50+", label: "Distinct Dallas neighborhoods" },
                { stat: "$72K+", label: "Median household income" },
                { stat: "High", label: "Competition for 'Dallas TX' terms" },
                { stat: "Low", label: "Businesses with GEO setup" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 bg-white/3 space-y-1">
                  <p className="font-display font-bold text-2xl text-white">{stat}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              The solution is not to abandon Dallas-level marketing. It's to layer underneath it — to build the neighborhood-level and niche-level specificity that makes your business the obvious answer when someone asks a precise question, not a generic one. "Best personal trainer in Dallas" is a fight you probably can't win. "Personal trainer in Lakewood Dallas specializing in runners" is a fight you can own within months.
            </p>
          </section>

          {/* Section 2 — The neighborhood angle */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Dallas Is Not One Market. It's Fifty.
            </h2>

            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80"
              alt="Dallas neighborhoods at night — each one is its own search and AI marketing opportunity"
              className="w-full aspect-video object-cover my-6"
            />
            <p className="text-xs text-white/30 -mt-10 mb-6 uppercase tracking-widest">Each Dallas neighborhood is a distinct search market with its own demographics, intent patterns, and AI search queries</p>

            <p className="text-white/65 leading-relaxed">
              Dallas contains neighborhoods so distinct they function like separate cities. Uptown is dense, young, and professional — bars, fitness studios, and high-end restaurants compete in a half-mile radius. Oak Cliff is creative, culturally rich, and rapidly gentrifying — local-first buyers who will drive past a chain to reach a business that feels authentically part of their community. Bishop Arts District is a destination in its own right, drawing visitors from across DFW. Deep Ellum is the entertainment and arts corridor, with evening economy that runs completely differently from daytime business. Lakewood and East Dallas are established, family-oriented, and intensely neighborhood-loyal. Preston Hollow and Highland Park are among the wealthiest zip codes in Texas.
            </p>
            <p className="text-white/65 leading-relaxed">
              Each of these neighborhoods represents a separate search market — with its own query patterns, its own demographics, and its own level of competition for AI search visibility. A business in any one of them that explicitly claims that neighborhood in its structured data, content, and citations competes against a dramatically smaller field than one claiming all of Dallas.
            </p>

            <div className="space-y-0 border border-white/10 divide-y divide-white/10">
              {[
                {
                  neighborhood: "Uptown",
                  profile: "Young professionals, dense foot traffic, high dining & fitness spend",
                  queries: ["personal trainer Uptown Dallas", "brunch Uptown Dallas Saturday", "co-working space near Uptown Dallas", "happy hour Uptown Dallas this week"],
                },
                {
                  neighborhood: "Oak Cliff / Bishop Arts",
                  profile: "Local-first buyers, creative community, mid-to-high income",
                  queries: ["local coffee shop Oak Cliff Dallas", "independent bookstore Bishop Arts District", "yoga studio Oak Cliff TX", "best tacos Bishop Arts Dallas"],
                },
                {
                  neighborhood: "Deep Ellum",
                  profile: "Evening economy, entertainment, arts, music-driven foot traffic",
                  queries: ["live music Deep Ellum this weekend", "parking near Deep Ellum Dallas", "bars Deep Ellum Dallas", "food before show Deep Ellum"],
                },
                {
                  neighborhood: "Lakewood / East Dallas",
                  profile: "Established families, high neighborhood loyalty, long purchase cycles",
                  queries: ["pediatrician Lakewood Dallas", "home renovation contractor East Dallas", "private school near Lakewood TX", "family dentist Lakewood Dallas"],
                },
              ].map(({ neighborhood, profile, queries }) => (
                <div key={neighborhood} className="p-5 space-y-2">
                  <div className="flex gap-4 items-baseline flex-wrap">
                    <span className="font-display font-bold text-sm uppercase tracking-tight text-white">{neighborhood}</span>
                    <span className="text-xs text-white/35 italic">{profile}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {queries.map((q) => (
                      <span key={q} className="text-xs text-white/40 border border-white/10 px-2 py-1 italic">"{q}"</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              The queries above represent real, high-intent search behavior happening every day in Dallas. Most of the businesses that should be appearing in these results are not — because their websites and schema markup say "Dallas, TX" and nothing more specific. The ones that claim the neighborhood win the neighborhood.
            </p>
          </section>

          {/* Section 3 — Corporate corridor + B2B */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The Corporate Corridor: Dallas's B2B AI Marketing Opportunity
            </h2>

            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
              alt="Dallas corporate offices — B2B marketing opportunity for service businesses"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-6 uppercase tracking-widest">Dallas's corporate concentration creates B2B search demand that most service businesses ignore entirely</p>

            <p className="text-white/65 leading-relaxed">
              Dallas hosts the headquarters of AT&T, Toyota North America, Southwest Airlines, ExxonMobil, and dozens of other enterprise-level companies. The city's Uptown and downtown corridors alone contain more corporate office space per square mile than most entire metropolitan areas. This concentration of professional workforce creates consistent, high-value demand for B2B services that most Dallas marketing strategies completely ignore.
            </p>
            <p className="text-white/65 leading-relaxed">
              When a procurement officer at a Dallas-based company asks ChatGPT or Perplexity for "marketing agencies serving Dallas enterprise clients" or "commercial cleaning services for Dallas Uptown office buildings," the AI synthesizes available data and returns a ranked answer. The businesses in that answer are not the ones with the most Google reviews. They're the ones with structured content, FAQ schemas, and consistent local citations that make their services and service area explicit to AI parsing systems.
            </p>
            <ul className="space-y-3 text-white/65">
              {[
                "Build a dedicated B2B service page using schema markup that explicitly names your corporate client types and the Dallas business districts you serve",
                "Publish FAQ content answering questions enterprise buyers actually ask: 'Do you serve businesses in Uptown Dallas?' 'What is your minimum contract size?' 'Do you work with Fortune 500 clients in the DFW area?'",
                "Create case studies or testimonials that reference real Dallas business contexts — even general ones: 'a Dallas-based healthcare company,' 'an Uptown financial services firm'",
                "Build citations on B2B directories used by Dallas procurement teams: Dallas Regional Chamber, Dallas Business Journal sourcing lists, North Texas industry associations",
                "Target long-tail B2B queries in your content: 'HR consulting firm for Dallas startups,' 'commercial IT services for Dallas Uptown offices' — these are lower competition and higher conversion than any B2C Dallas keyword",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 — GEO setup for Dallas */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              GEO for Dallas: Building the AI Search Signals That Get You Found First
            </h2>
            <p className="text-white/65 leading-relaxed">
              Generative Engine Optimization in Dallas requires a two-level strategy: broad enough to appear in citywide AI searches, specific enough to win neighborhood and niche queries. Most Dallas businesses have neither. The rare business that has both is nearly uncatchable in its space.
            </p>

            <blockquote className="border-l-4 border-white pl-6 py-2">
              <p className="text-white/80 italic leading-relaxed">
                "Dallas is the biggest AI search battleground in Texas — but it's a battle most businesses aren't actually fighting yet. The ones who set up proper GEO signals today, at both the city and neighborhood level, will hold those positions long after the competition figures out what GEO even is."
              </p>
            </blockquote>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-4">Dallas GEO Setup — What to Build</p>
              <div className="space-y-4">
                {[
                  {
                    item: "LocalBusiness schema with neighborhood-level service area",
                    detail: "Don't just declare 'Dallas, TX.' Declare your neighborhood (e.g., 'Uptown Dallas 75204') plus adjacent neighborhoods and zip codes your actual customers come from. Add landmark proximity: 'near Klyde Warren Park,' 'walking distance from Uptown Dallas,' 'minutes from SMU campus.'",
                  },
                  {
                    item: "Neighborhood-specific landing pages",
                    detail: "If you serve multiple Dallas neighborhoods, each one should have a dedicated page: /dallas-uptown, /oak-cliff-dallas, /lakewood-dallas. Each page needs unique content — not a template with the neighborhood name swapped. AI tools penalize duplicate-structure pages.",
                  },
                  {
                    item: "FAQ schema targeting real Dallas buyer questions",
                    detail: "'What parts of Dallas do you serve?' · 'Are you near [landmark]?' · 'Do you serve clients in [specific neighborhood]?' Each FAQ answer should be 2–4 sentences with specific Dallas references that AI tools can parse and quote.",
                  },
                  {
                    item: "Dallas-specific content published monthly",
                    detail: "One piece per month that references a Dallas event, neighborhood trend, or local business context. This is the compounding signal that builds long-term AI search authority — a business that published 12 Dallas-specific pieces last year answers queries that competitors from six months ago can't.",
                  },
                  {
                    item: "Dallas citations and directory consistency",
                    detail: "Dallas Regional Chamber, Dallas Business Journal directory, Biz Journal DFW, neighborhood-specific Nextdoor communities, Dallas Observer local business listings. NAP (name, address, phone) must be identical across every listing — AI tools detect inconsistency as a trust signal.",
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

          {/* Section 5 — Two Dallas business profiles */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              What AI Marketing Looks Like for Two Dallas Business Types
            </h2>

            {[
              {
                type: "Neighborhood B2C Service",
                example: "Fitness studio, med spa, or family dental practice in Lakewood or Uptown",
                context: "Dallas's neighborhood-loyal residents search for services using neighborhood terms — not 'Dallas.' A fitness studio in Uptown that markets as 'Uptown Dallas' rather than 'Dallas' competes in a field of dozens, not thousands. The same principle applies in any Dallas neighborhood with a distinct identity.",
                aiMarketing: [
                  "Google Business Profile optimized with neighborhood name, nearby landmarks, and photos updated monthly",
                  "Service pages with schema markup explicitly naming the neighborhood, adjacent streets, and zip code served",
                  "FAQ content answering neighborhood-specific questions: 'Are you walkable from Katy Trail?' 'Do you have parking near your Uptown location?'",
                  "Instagram content using neighborhood hashtags (#UptownDallas, #LakewoodDallas) and tagging local landmarks to build geographic context in social algorithms",
                  "Email automation segmented by customer neighborhood for hyperlocal promotions tied to community events",
                ],
              },
              {
                type: "Professional B2B Service",
                example: "Accounting firm, HR consulting, commercial cleaning, or staffing agency serving Dallas businesses",
                context: "Dallas's corporate concentration means the B2B buyer pool is enormous — and largely unsegmented in AI search results. A professional services firm that builds explicit schema markup for its B2B service area, publishes industry-specific Dallas content, and targets procurement-stage queries can appear in AI searches that its competitors have never even thought to optimize for.",
                aiMarketing: [
                  "B2B-focused schema markup naming corporate client types, service areas (Uptown, downtown, Las Colinas), and industries served",
                  "Content targeting procurement-stage queries: 'How to choose a Dallas HR consulting firm,' 'What to look for in a Dallas commercial cleaning contract'",
                  "Case study pages referencing Dallas business contexts — even anonymized ones — that signal to AI tools the firm has real local enterprise experience",
                  "LinkedIn content strategy targeting Dallas professional decision-makers, with geo-tagged posts about Dallas business trends",
                  "Dallas Regional Chamber membership and active citation profile on Dallas business directories used by procurement teams",
                ],
              },
            ].map(({ type, example, context, aiMarketing }) => (
              <div key={type} className="border border-white/10 p-8 space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">{type}</p>
                  <p className="font-display font-bold text-xl uppercase tracking-tight">{example}</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-white/20 pl-4">{context}</p>
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold">AI Marketing Playbook</p>
                  {aiMarketing.map((item) => (
                    <div key={item} className="flex gap-3 text-sm text-white/65">
                      <span className="text-white mt-0.5 shrink-0">→</span>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* FAQ section */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Dallas AI Marketing — Common Questions
            </h2>
            <div className="space-y-0 border border-white/10 divide-y divide-white/10">
              {faqs.map((faq) => (
                <div key={faq.q} className="p-6 space-y-3">
                  <p className="font-display font-bold text-sm md:text-base uppercase tracking-tight">{faq.q}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border border-white/10 p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Ready to Own Your Market?</p>
              <h3 className="font-display font-bold text-xl md:text-2xl uppercase tracking-tight">
                Let's build your Dallas AI marketing strategy.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed max-w-md">
                We'll audit your current search presence, identify your neighborhood and niche opportunities, and build the GEO signals that get your Dallas business found first — on Google and AI search.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-xs px-8 py-4 hover:bg-white/90 transition-colors"
              >
                Boost My Visibility →
              </a>
              <a
                href="https://jhirah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-bold uppercase tracking-wider text-xs px-8 py-4 hover:border-white transition-colors"
              >
                Use Jhirah.com to Boost 3x
              </a>
            </div>
          </section>

          {/* Related articles */}
          <section className="space-y-5">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">More DFW Local Marketing Guides</p>
            <div className="grid sm:grid-cols-2 gap-px bg-white/10 border border-white/10">
              {[
                { href: "/frisco-ai-marketing", city: "Frisco, TX", title: "The Speed Advantage", date: "May 20, 2026" },
                { href: "/plano-ai-marketing", city: "Plano, TX", title: "Earning the Market That Does Its Homework", date: "May 21, 2026" },
                { href: "/mckinney-ai-marketing", city: "McKinney, TX", title: "The Local-First Paradox", date: "May 22, 2026" },
                { href: "/allen-ai-marketing", city: "Allen, TX", title: "Stop Saying 'Near Plano'", date: "May 23, 2026" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="group block bg-black p-6 hover:bg-white/5 transition-colors">
                  <p className="text-xs uppercase tracking-widest text-white/30 mb-1">{article.city} · {article.date}</p>
                  <p className="font-display font-bold text-sm uppercase tracking-tight group-hover:text-white/80 transition-colors">
                    AI Marketing for {article.city}: {article.title}
                  </p>
                </Link>
              ))}
            </div>
          </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
