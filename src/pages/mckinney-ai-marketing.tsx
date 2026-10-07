import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";
import cryptokBanner from "@assets/cryptok_online_banner_1779681482595.png";

const faqs = [
  {
    q: "How is marketing a business in McKinney different from marketing in other DFW cities?",
    a: "McKinney has a stronger local-first culture than most DFW cities. Residents here actively seek out locally-owned businesses and are more likely to share recommendations with neighbors. This means that earning genuine community visibility — through reviews, word-of-mouth automation, and local content — compounds faster in McKinney than in more transient markets like Frisco.",
  },
  {
    q: "Does McKinney's historic downtown create specific SEO and GEO opportunities?",
    a: "Yes. The historic downtown district generates a significant volume of 'near downtown McKinney' and 'McKinney TX square' search queries from both local residents and DFW visitors. Businesses with content and schema markup that reference specific downtown landmarks — the Collin County Courthouse square, Chestnut Square, the Historic District — capture queries that generic McKinney-wide content misses entirely.",
  },
  {
    q: "What AI search tools do McKinney residents use to find local businesses?",
    a: "ChatGPT, Perplexity, and Google AI Overviews are the dominant AI search tools in McKinney, as in most DFW markets. The difference in McKinney is query intent: residents here frequently ask AI tools for local-specific recommendations with phrases like 'locally owned,' 'family-run,' or 'not a chain' — meaning businesses that communicate local ownership and community involvement in their structured data perform better than those that don't.",
  },
  {
    q: "How can McKinney businesses compete with national chains using AI marketing?",
    a: "National chains have larger budgets but a structural disadvantage in McKinney: they can't authentically claim local identity. A McKinney-owned business that publishes hyper-local content, actively participates in community events digitally, and builds genuine review volume from local customers creates a profile that AI tools recognize as more locally authoritative than a chain's national presence — regardless of the chain's marketing budget.",
  },
  {
    q: "What's the most common AI marketing mistake McKinney businesses make?",
    a: "Publishing generic DFW or 'North Texas' content instead of McKinney-specific content. AI search tools use geographic entity mentions to determine local relevance. A business that consistently references McKinney neighborhoods, local landmarks, and community events in its content outperforms a competitor that publishes high-quality content with no geographic specificity — because AI tools can't determine where the second business actually operates.",
  },
];

export default function MckinneyAiMarketing() {
  useSeo({
    title: "AI Marketing for McKinney TX: The Local-First Paradox | Thinsk Media",
    description:
      "McKinney residents want to shop local — but they still find businesses on their phones. Most local McKinney businesses are invisible to the neighbors who would choose them. Here's how AI marketing closes that gap.",
    canonical: "https://thinskmedia.com/mckinney-ai-marketing",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI Marketing for McKinney TX: The Local-First Paradox",
      description:
        "McKinney, TX has one of DFW's strongest local-first consumer cultures — but most local businesses are invisible to the neighbors who'd choose them. This is how AI marketing closes that gap.",
      datePublished: "2026-05-22T08:00:00-05:00",
      dateModified: "2026-05-22T08:00:00-05:00",
      author: { "@type": "Organization", name: "Thinsk Media", url: "https://thinskmedia.com" },
      publisher: {
        "@type": "Organization",
        name: "Thinsk Media",
        logo: { "@type": "ImageObject", url: "https://thinskmedia.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://thinskmedia.com/mckinney-ai-marketing" },
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80",
      articleSection: "Local Marketing",
      keywords: [
        "AI marketing McKinney TX", "digital marketing McKinney Texas", "McKinney TX SEO",
        "GEO McKinney", "local business marketing McKinney", "McKinney downtown marketing",
        "generative engine optimization McKinney DFW",
      ],
      about: [
        { "@type": "Place", name: "McKinney", address: { "@type": "PostalAddress", addressLocality: "McKinney", addressRegion: "TX", addressCountry: "US" } },
        { "@type": "Thing", name: "Local Business Marketing" },
        { "@type": "Thing", name: "Community-Based Marketing" },
        { "@type": "Thing", name: "Generative Engine Optimization" },
      ],
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MarketingAgency",
      name: "Thinsk Media",
      url: "https://thinskmedia.com",
      logo: "https://thinskmedia.com/favicon.png",
      description:
        "AI-powered digital marketing agency serving McKinney, Frisco, Plano, Allen, Dallas, Fort Worth, and the greater DFW metroplex.",
      telephone: "+14439865060",
      areaServed: [
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Allen", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Prosper", containedInPlace: { "@type": "State", name: "Texas" } },
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
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">May 22, 2026</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Local Marketing</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">McKinney, TX</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight mb-6">
              AI Marketing for McKinney TX: The Local-First Paradox
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              McKinney residents will go out of their way to support a local business over a chain — if they know it exists. That last part is the problem. Most locally-owned businesses in McKinney are invisible to the neighbors who would actively choose them. They show up behind a Yelp aggregator, a national franchise, or not at all. AI marketing is how you change that.
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=80"
            alt="McKinney TX historic downtown square with local businesses"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">McKinney, TX — a community that chooses local, when local shows up</p>
        </div>

        <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

          {/* Section 1 */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              What Makes McKinney Different from Every Other DFW City
            </h2>
            <p className="text-white/65 leading-relaxed">
              McKinney was named the best place to live in the United States by Money magazine — not once, but multiple times. That distinction isn't just a real estate tagline. It reflects something real about the culture: McKinney residents are invested in their community in a way that's unusual even by Texas standards. They show up for local events. They post on Nextdoor before they check Google. They celebrate when a local restaurant expands and mourn when a neighborhood fixture closes.
            </p>
            <p className="text-white/65 leading-relaxed">
              That community investment creates a marketing environment unlike Frisco's constant-newcomer churn or Plano's corporate-corridor pragmatism. In McKinney, reputation compounds faster. A well-reviewed local business that participates in community events, earns genuine neighbor recommendations, and publishes content that speaks to McKinney specifically can build a loyal customer base that no amount of advertising budget can easily displace.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/10">
              {[
                { stat: "215K+", label: "McKinney residents (2026)" },
                { stat: "#1", label: "Best Place to Live, Money magazine" },
                { stat: "$97K+", label: "Median household income" },
                { stat: "1850s", label: "Historic downtown established" },
                { stat: "Top 10", label: "Fastest-growing US cities" },
                { stat: "40%+", label: "Residents who moved in last 10 years" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 bg-white/3 space-y-1">
                  <p className="font-display font-bold text-2xl text-white">{stat}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              The paradox is that despite this community orientation, McKinney residents still find businesses the same way everyone else does — on their phones, using Google and AI tools. The local-first intention is real. But discovery still happens digitally. A business that isn't findable digitally doesn't benefit from McKinney's local-first culture, no matter how good it actually is.
            </p>
          </section>

          {/* Section 2 — Downtown */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The Downtown District Advantage — and Why Most Businesses Aren't Using It
            </h2>

            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
              alt="Local restaurant and retail in historic downtown McKinney"
              className="w-full aspect-video object-cover my-6"
            />
            <p className="text-xs text-white/30 -mt-10 mb-6 uppercase tracking-widest">McKinney's historic downtown draws both residents and DFW visitors searching locally</p>

            <p className="text-white/65 leading-relaxed">
              McKinney's historic downtown square is one of the most visited commercial districts in Collin County. On any given weekend, visitors drive from Plano, Allen, and deeper into Dallas to walk the square, eat at local restaurants, and browse boutiques. These visitors are searching <em className="text-white/80">right now</em> — while they're in their cars, while they're walking the sidewalks — for things to do, places to eat, and services near downtown McKinney.
            </p>
            <p className="text-white/65 leading-relaxed">
              Those searches generate a specific category of high-intent local queries that most businesses completely ignore in their digital strategy:
            </p>

            <div className="space-y-2 border border-white/10 divide-y divide-white/10">
              {[
                ["'restaurants near downtown McKinney TX'", "High-volume, high-intent — answered by AI before Google Maps in many cases"],
                ["'things to do near McKinney square this weekend'", "Event-adjacent intent — businesses that publish event-adjacent content capture this"],
                ["'locally owned boutiques McKinney TX'", "Explicit local-first intent — national brands cannot compete here"],
                ["'best brunch in McKinney Texas'", "Heavy AI search volume — ChatGPT and Perplexity both answer this with named businesses"],
                ["'McKinney TX near Chestnut Square'", "Hyper-local landmark reference — almost no businesses optimize for this, making it low-competition"],
              ].map(([query, note]) => (
                <div key={query as string} className="px-5 py-4 space-y-1">
                  <p className="text-white text-sm font-medium italic">{query}</p>
                  <p className="text-white/40 text-xs">{note}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              Businesses that create content referencing these landmarks and intent signals — not just "McKinney TX" but "near the Collin County Courthouse," "walking distance from the historic square," "on the McKinney downtown strip" — appear in both traditional search and AI-generated recommendations for visitors who are already primed to spend money.
            </p>
          </section>

          {/* Section 3 — Competing with chains */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Local vs. Chain: The Battle AI Marketing Lets You Win
            </h2>

            <img
              src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?w=1200&q=80"
              alt="Independent local business storefront competing with national brands"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">McKinney residents prefer local — AI marketing makes sure they can find you</p>

            <p className="text-white/65 leading-relaxed">
              National chains have structural advantages in most marketing channels: larger ad budgets, professional content teams, and brand recognition that arrives before a customer ever searches. In McKinney, they have one structural disadvantage that money can't fix: they can't authentically claim local identity.
            </p>
            <p className="text-white/65 leading-relaxed">
              AI search tools pick up on this. When someone asks ChatGPT for "locally owned coffee shops in McKinney TX," the AI is specifically looking for businesses that have established local identity signals — Nextdoor mentions, community event participation, neighborhood-specific content, reviews from local residents that describe community connection. A McKinney-owned café with 200 genuine Google reviews and a blog post about the McKinney Farmers Market will outperform a Starbucks in that query every time.
            </p>

            <blockquote className="border-l-4 border-white pl-6 py-2">
              <p className="text-white/80 italic leading-relaxed">
                "National chains optimize for scale. Local businesses optimize for place. In McKinney's market, optimization for place is the competitive edge — and AI search tools are increasingly built to recognize it."
              </p>
            </blockquote>

            <p className="text-white/65 leading-relaxed">
              The playbook for local McKinney businesses competing against national presence is straightforward — not easy, but clear:
            </p>
            <ul className="space-y-3 text-white/65">
              {[
                "Publish content that references McKinney community events — the Heard-Craig House, ArtWalk, McKinney ISD events, the Farmers Market at Chestnut Square",
                "Build review volume from local residents explicitly; reviews that mention neighborhood names or community context outperform generic five-star reviews in local AI search",
                "Use schema markup to declare local ownership explicitly — 'locally owned and operated in McKinney since [year]' is a structured data signal, not just marketing copy",
                "Be present on Nextdoor and respond to neighbor recommendations — AI tools scrape community platforms as part of local authority scoring",
                "Create content in a voice that sounds like a McKinney neighbor wrote it, not a national marketing department",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-white mt-1 shrink-0">→</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 4 — What good looks like */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              What McKinney's Best-Reviewed Businesses Do Differently
            </h2>
            <p className="text-white/65 leading-relaxed">
              The most-reviewed, most-recommended local businesses in McKinney aren't necessarily the best at their craft. They're the best at building visible community presence. The pattern is consistent across categories:
            </p>

            <div className="space-y-4">
              {[
                {
                  pattern: "They show up at the event before the business does",
                  detail: "McKinney's best-reviewed businesses sponsor, participate in, or at minimum publish content around ArtWalk, the Farmers Market, First Monday Trade Days, and neighborhood events. This creates local content that references community touchpoints — exactly what AI tools weight when evaluating local authority. The restaurant that posts about the Farmers Market produce they sourced this week shows up in searches for 'farm-to-table McKinney' that a business with no community content never reaches.",
                },
                {
                  pattern: "They treat reviews as a conversation, not a score",
                  detail: "Businesses with strong McKinney reputations respond to every review — positive and negative — with specific, personal language. Not 'thanks for the feedback!' but 'Sarah, so glad you enjoyed the bluebonnet honey jar — it came from a farm just outside of McKinney that we've worked with for three years.' That specificity signals local authenticity to both human readers and AI tools parsing review sentiment.",
                },
                {
                  pattern: "They're in the conversation on Nextdoor before someone else puts them there",
                  detail: "McKinney's Nextdoor communities are active. Businesses that participate — answering questions, sharing relevant local information, occasionally noting their own services when genuinely relevant — build community credibility that translates directly to word-of-mouth recommendations and AI search signals. Businesses that wait to be recommended miss the conversations entirely.",
                },
              ].map(({ pattern, detail }) => (
                <div key={pattern} className="border-l-2 border-white/20 pl-6 space-y-2">
                  <p className="font-display font-bold text-sm uppercase tracking-tight">{pattern}</p>
                  <p className="text-white/55 text-sm leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — GEO for McKinney */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              GEO in McKinney: The Structured Data That Unlocks Community Visibility
            </h2>
            <p className="text-white/65 leading-relaxed">
              Generative Engine Optimization in McKinney has a specific flavor. Unlike Plano — where GEO is about professional credibility — or Frisco — where it's about capturing new-resident discovery — McKinney GEO is about community belonging. The signals that matter here are about place identity: how clearly your digital presence communicates that you're <em className="text-white/80">of</em> McKinney, not just <em className="text-white/80">in</em> McKinney.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Signal</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Generic implementation</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">McKinney-calibrated implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Service area schema", "'Serving the DFW metroplex'", "McKinney, Allen, Fairview, Prosper, Anna, Melissa — with zip codes"],
                    ["About page copy", "'Family-owned local business'", "'Serving McKinney since [year] — before the second Costco opened'"],
                    ["Blog content", "General industry tips", "Monthly content tied to McKinney ISD calendar, community events, local seasons"],
                    ["Google Business posts", "Promotions and offers", "Photos from ArtWalk, Farmers Market sourcing, neighborhood mentions"],
                    ["FAQ content", "Generic service questions", "'Do you serve the historic downtown McKinney area?' 'Are you near the McKinney square?'"],
                    ["Review responses", "Generic thank-you language", "Specific neighborhood references, event callouts, long-term resident acknowledgment"],
                  ].map(([signal, generic, local]) => (
                    <tr key={signal as string}>
                      <td className="px-4 py-3 text-white font-medium text-xs">{signal}</td>
                      <td className="px-4 py-3 text-white/35 text-xs">{generic}</td>
                      <td className="px-4 py-3 text-white/65 text-xs">{local}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-white/5 border border-white/10 p-6">
              <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-2">The McKinney GEO Difference</p>
              <p className="text-white/65 text-sm leading-relaxed">
                AI tools can't tell the difference between a business that genuinely belongs to McKinney and one that just listed a McKinney address. What they can do is measure the consistency and depth of geographic entity signals across your website, content, reviews, and citations. A business that talks about McKinney specifically — its neighborhoods, its events, its landmarks, its seasons — builds a geographic entity profile that stands apart from businesses with a single city mention buried in their contact page.
              </p>
            </div>
          </section>

          {/* Section 6 — Email in a community market */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Email in McKinney: Turning Customers Into Community Advocates
            </h2>
            <p className="text-white/65 leading-relaxed">
              McKinney's community orientation makes email marketing unusually powerful here. In a transient market like Frisco, email is about retention — keeping new residents engaged before they drift. In McKinney, email is about amplification. A satisfied customer who receives a well-crafted follow-up sequence doesn't just come back. They forward it to neighbors. They post about it on Nextdoor. They become the word-of-mouth engine that compounds the entire marketing effort.
            </p>
            <p className="text-white/65 leading-relaxed">
              The key difference in how McKinney email should be written: community voice over promotional voice. Emails that feel like they come from a McKinney neighbor outperform emails that feel like marketing materials — because McKinney residents are specifically attuned to the difference.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 p-5 space-y-3">
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Promotional voice (performs worse in McKinney)</p>
                <div className="space-y-2 text-white/50 text-sm italic">
                  <p>"Don't miss our spring sale — 20% off all services this weekend only!"</p>
                  <p>"We're the #1 rated [service] in North Texas. Book your appointment today."</p>
                  <p>"Limited spots available. Click below to reserve yours."</p>
                </div>
              </div>
              <div className="border border-white/10 p-5 space-y-3">
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold">Community voice (performs better in McKinney)</p>
                <div className="space-y-2 text-white/65 text-sm italic">
                  <p>"We're going to be at the Farmers Market on Saturday — come say hi and grab a sample."</p>
                  <p>"Three McKinney families referred friends to us last month. We noticed."</p>
                  <p>"McKinney ISD spring break is coming up — here's how we can help."</p>
                </div>
              </div>
            </div>

            <p className="text-white/65 leading-relaxed">
              AI-powered email doesn't mean impersonal. It means generating community-voice content at scale — timed to McKinney's calendar, referencing local events, and written in the register of a business that actually belongs here. The automation handles delivery and timing; the voice is what wins the forwarded email and the Nextdoor post.
            </p>
          </section>

          {/* CTA */}
          <section className="border border-white/20 p-8 space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Thinsk Media — DFW AI Marketing</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              McKinney wants to support local.<br />Let's make sure they can find you.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Thinsk Media builds AI marketing systems that help McKinney businesses show up in the searches, AI recommendations, and community conversations where their neighbors are already looking. Local-first culture only pays off when local businesses are visible.
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
              Questions About AI Marketing in McKinney
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
