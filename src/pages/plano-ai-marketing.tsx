import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";
import cryptokBanner from "@assets/cryptok_online_banner_1779681482595.png";

const faqs = [
  {
    q: "Why is Plano, TX a strong market for AI-powered digital marketing in 2026?",
    a: "Plano has one of the highest concentrations of corporate headquarters and high-income households in the southern United States. Its business community is digitally sophisticated and research-driven — meaning buyers do extensive background checks before engaging a vendor. AI marketing directly addresses this behavior by establishing credibility across every channel a Plano prospect might check.",
  },
  {
    q: "What does Generative Engine Optimization (GEO) mean for a Plano business?",
    a: "GEO for a Plano business means structuring your online presence so that AI tools like ChatGPT, Perplexity, and Google AI Overviews recommend your business when someone asks a question like 'best financial advisor in Plano TX' or 'top IT services firm near Legacy West.' Since Plano's workforce adopted AI tools earlier than most US markets, GEO investment has an outsized impact here.",
  },
  {
    q: "How do Plano's corporate relocations create opportunity for local businesses?",
    a: "Every corporate relocation to Plano brings new employee households into the market. These are typically high-income, mobile-first consumers who rely on digital discovery to find local services. Businesses with strong GEO and local SEO visibility capture this incoming audience; those without it are invisible to buyers who have no prior local relationship to fall back on.",
  },
  {
    q: "What makes B2B marketing in Plano different from B2C?",
    a: "Plano's B2B buyers — procurement teams, department heads, and business owners near the Legacy corridor — make decisions over weeks or months, not minutes. They research on LinkedIn, read case studies, check peer reviews on G2 or Clutch, and vet vendors on multiple channels before initiating contact. Effective B2B marketing in Plano builds authority across all those touchpoints simultaneously, not just one.",
  },
  {
    q: "How long does it take to see results from AI marketing in Plano?",
    a: "Local SEO and GEO improvements generate measurable visibility gains within 60–90 days. LinkedIn content authority typically shows engagement lift within 30 days for B2B firms. The compounding effect — where authority in one channel reinforces credibility in others — becomes pronounced around the 6-month mark, which is why starting sooner matters more than starting perfectly.",
  },
];

export default function PlanoAiMarketing() {
  useSeo({
    title: "AI Marketing for Plano TX: Earning the Market That Does Its Homework | Thinsk Media",
    description:
      "Plano buyers research before they buy — and more of them are researching on AI tools. Here's how Plano businesses build the digital credibility that turns AI search results into booked appointments.",
    canonical: "https://thinskmedia.com/plano-ai-marketing",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  useEffect(() => {
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "AI Marketing for Plano TX: Earning the Market That Does Its Homework",
      description:
        "How Plano, TX businesses build digital credibility through GEO, B2B content marketing, and AI-powered automation — in a market where buyers research extensively before engaging any vendor.",
      datePublished: "2026-05-21T08:00:00-05:00",
      dateModified: "2026-05-21T08:00:00-05:00",
      author: { "@type": "Organization", name: "Thinsk Media", url: "https://thinskmedia.com" },
      publisher: {
        "@type": "Organization",
        name: "Thinsk Media",
        logo: { "@type": "ImageObject", url: "https://thinskmedia.com/favicon.png" },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": "https://thinskmedia.com/plano-ai-marketing" },
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
      articleSection: "Local Marketing",
      keywords: [
        "AI marketing Plano TX", "digital marketing Plano Texas", "Plano TX SEO",
        "GEO Plano", "B2B marketing Plano TX", "generative engine optimization Plano",
        "Legacy West marketing", "Plano small business marketing",
      ],
      about: [
        { "@type": "Place", name: "Plano", address: { "@type": "PostalAddress", addressLocality: "Plano", addressRegion: "TX", addressCountry: "US" } },
        { "@type": "Thing", name: "B2B Marketing" },
        { "@type": "Thing", name: "Digital Credibility" },
        { "@type": "Thing", name: "Artificial Intelligence Marketing" },
      ],
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "MarketingAgency",
      name: "Thinsk Media",
      url: "https://thinskmedia.com",
      logo: "https://thinskmedia.com/favicon.png",
      description:
        "AI-powered digital marketing agency serving Plano, Dallas, Fort Worth, Frisco, McKinney, Allen, Richardson, and the greater DFW metroplex.",
      telephone: "+14439865060",
      areaServed: [
        { "@type": "City", name: "Plano", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Dallas", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Fort Worth", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Frisco", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "McKinney", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Allen", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "City", name: "Richardson", containedInPlace: { "@type": "State", name: "Texas" } },
        { "@type": "MetroArea", name: "Dallas–Fort Worth Metroplex" },
      ],
      serviceType: ["AI-Powered Digital Marketing", "Generative Engine Optimization", "SEO", "B2B Marketing", "Email Marketing Automation"],
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

        {/* Article Hero */}
        <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">May 21, 2026</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Local Marketing</span>
              <span className="text-white/20">·</span>
              <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Plano, TX</span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-tight tracking-tight mb-6">
              AI Marketing for Plano TX: Earning the Market That Does Its Homework
            </h1>
            <p className="text-base md:text-lg text-white/60 leading-relaxed font-light">
              Open ChatGPT right now. Type: <em>"What's the best [your service] in Plano TX?"</em> Read what comes back. If your business isn't mentioned — or worse, a competitor is — that interaction is happening with potential customers every day. Plano buyers research before they commit. Most of them are doing that research on AI tools. This is about what they find when they look.
            </p>
          </motion.div>
        </section>

        {/* Hero image */}
        <div className="max-w-3xl mx-auto px-6 mb-16">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
            alt="Plano TX corporate office district representing a sophisticated research-driven market"
            className="w-full aspect-video object-cover"
          />
          <p className="text-xs text-white/30 mt-2 uppercase tracking-widest">Plano, TX — where buyers research extensively before making decisions</p>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-6 pb-24 space-y-14">

          {/* Section 1 — The research culture */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Why Plano Buyers Are Different
            </h2>
            <p className="text-white/65 leading-relaxed">
              Plano's economy is built on industries that run on due diligence — technology, finance, healthcare, professional services. The residents who work at Toyota's North American campus, JPMorgan Chase's operations center, or Ericsson's US headquarters are trained to evaluate options carefully before committing. That professional instinct doesn't switch off when they're hiring a contractor, choosing a restaurant for a client dinner, or selecting a marketing agency.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-px border border-white/10">
              {[
                { stat: "285K+", label: "Plano residents (2026)" },
                { stat: "$90K+", label: "Median household income" },
                { stat: "72%", label: "Residents with college degrees" },
                { stat: "15+", label: "Fortune 500 operations in Plano" },
                { stat: "Top 10", label: "Best US cities for business, Forbes" },
                { stat: "Top 5", label: "Safest US cities (multiple years)" },
              ].map(({ stat, label }) => (
                <div key={label} className="p-5 bg-white/3 space-y-1">
                  <p className="font-display font-bold text-2xl text-white">{stat}</p>
                  <p className="text-xs text-white/40 uppercase tracking-widest leading-snug">{label}</p>
                </div>
              ))}
            </div>

            <p className="text-white/65 leading-relaxed">
              Plano buyers check Google reviews, LinkedIn profiles, websites, and — increasingly — AI search tools before making first contact. The business with a clear, authoritative digital presence gets the inquiry. The one that's hard to evaluate on a phone screen at 9pm doesn't get a second look, regardless of how good the actual service is.
            </p>
            <p className="text-white/65 leading-relaxed">
              This is the fundamental challenge for Plano businesses: you can't win Plano's market on quality alone. You have to be findable, credible, and clearly differentiated <em className="text-white/80">before</em> a prospect ever speaks to you.
            </p>
          </section>

          {/* Section 2 — AI search in a research-driven market */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The AI Search Problem Is Bigger in Plano Than Elsewhere
            </h2>

            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"
              alt="Professional using laptop to research vendors before a business decision"
              className="w-full aspect-video object-cover my-6"
            />
            <p className="text-xs text-white/30 -mt-10 mb-6 uppercase tracking-widest">Plano's tech and finance workforce adopted AI research tools earlier than most US markets</p>

            <p className="text-white/65 leading-relaxed">
              AI search adoption follows workforce demographics. Cities with high concentrations of knowledge workers in tech and finance — exactly Plano's profile — adopt AI tools faster than the national average. ChatGPT, Perplexity, and AI-assisted Google searches are not emerging tools for Plano's professional class. They're already embedded in how many of them work, and by extension, how they research local purchases.
            </p>
            <p className="text-white/65 leading-relaxed">
              The implications are concrete. When a procurement manager at a Legacy Business Park firm needs to hire a commercial cleaning company, they don't necessarily open Google Maps. Some of them ask Perplexity: <em className="text-white/80">"What are the best-rated commercial cleaning services in Plano TX near the Legacy corridor?"</em> That AI either names you or it doesn't.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-white/10">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Discovery channel</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">What Plano buyers use it for</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-widest text-xs font-bold">Your optimization target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    ["Google Maps / Local Pack", "Proximity + reviews for B2C decisions", "GBP completeness, citation consistency, review volume"],
                    ["AI chat tools (ChatGPT, Perplexity)", "Shortlisting vendors, asking comparison questions", "Schema markup, FAQ content, structured entity data"],
                    ["LinkedIn", "Vetting B2B vendors and founders", "Consistent posting, thought leadership, founder profile"],
                    ["Google organic search", "Deep research after shortlisting", "Service pages, case studies, industry content"],
                    ["Nextdoor / neighborhood groups", "Trusted peer recommendations for local services", "Review prompts, referral automation, community presence"],
                  ].map(([channel, use, target]) => (
                    <tr key={channel as string}>
                      <td className="px-4 py-3 text-white font-medium text-xs">{channel}</td>
                      <td className="px-4 py-3 text-white/50 text-xs">{use}</td>
                      <td className="px-4 py-3 text-white/40 text-xs">{target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-white/65 leading-relaxed">
              Plano's research-intensive buyers don't stop at one channel. They triangulate. A business that shows up on AI search, has a well-maintained LinkedIn presence, and has a clear website with specific service information passes the vetting process. One that only ranks on Google Maps but has gaps everywhere else generates doubt — and in Plano, doubt kills the sale.
            </p>
          </section>

          {/* Section 3 — B2B vs B2C */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Two Games, One City: B2B and B2C in Plano
            </h2>

            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
              alt="B2B business meeting in a Plano corporate setting"
              className="w-full aspect-video object-cover"
            />
            <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">B2B and B2C marketing in Plano require fundamentally different strategies</p>

            <p className="text-white/65 leading-relaxed">
              Plano is unusual in DFW: it runs two parallel economies. The B2C market — restaurants, healthcare, personal services, real estate — operates like a typical affluent suburb but with higher price tolerance and more discerning buyers. The B2B market around Legacy Business Park, Legacy West, and the Dallas North Tollway corridor is a concentrated professional services ecosystem unlike anything else in the region.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-white/10 p-6 space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">B2C Plano</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  {[
                    "Discovery: Google Maps, Instagram, Nextdoor, AI chat",
                    "Decision timeline: hours to days",
                    "Key signal: reviews, photos, and local relevance",
                    "Retention tool: email automation and loyalty programs",
                    "Content platform: Instagram, TikTok, email newsletters",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-white/30 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-white/10 p-6 space-y-4">
                <p className="text-xs uppercase tracking-widest text-white/40 font-bold">B2B Plano</p>
                <ul className="space-y-2 text-white/60 text-sm">
                  {[
                    "Discovery: LinkedIn, Perplexity, Google organic, referrals",
                    "Decision timeline: weeks to months",
                    "Key signal: thought leadership, case studies, founder credibility",
                    "Retention tool: client onboarding drips and QBR content",
                    "Content platform: LinkedIn, email sequences, long-form SEO",
                  ].map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-white/30 shrink-0">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="text-white/65 leading-relaxed">
              The mistake most Plano businesses make is running one strategy for both audiences. A B2B IT services firm posting restaurant-style Instagram content isn't building credibility with procurement managers. A B2C medical spa with no social presence and no email follow-up is losing patients to competitors who figured out Instagram three years ago.
            </p>
          </section>

          {/* Section 4 — Three case studies */}
          <section className="space-y-6">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Three Plano Business Types — and What Actually Moves the Needle
            </h2>
            <p className="text-white/65 leading-relaxed">
              Generic marketing advice doesn't survive contact with a specific market. Here's what effective AI marketing looks like for three common Plano business profiles:
            </p>

            {[
              {
                type: "Professional Services Firm",
                example: "Law firm, CPA, financial advisor, or consulting firm near Legacy West",
                challenge: "Plano's professional class is skeptical. They check credentials, read LinkedIn profiles, and look for published thinking before initiating contact. A firm with no content footprint looks like it has nothing to say.",
                strategy: "LinkedIn thought leadership published consistently under the founder's name, combined with long-form website content targeting the questions Plano business owners ask AI tools ('best business attorney in Plano TX for LLC formation'). Schema markup on every practice area page. Monthly email to existing clients with a market update that gets forwarded.",
                signal: "The goal is showing up in Perplexity when someone searches your category — and having your LinkedIn confirm what they found there.",
              },
              {
                type: "Medical or Wellness Practice",
                example: "Medical spa, dermatology practice, physical therapist, or boutique fitness studio",
                challenge: "Plano has dense competition in health and wellness. Every strip mall near Shops at Legacy has three or four options for most procedures. The practices winning are the ones that look established, respond to every review, and stay in front of existing patients between visits.",
                strategy: "Google Business Profile maintained like a second website — updated photos monthly, every review responded to with specific service language. Instagram content pipeline with Plano-specific references. Post-appointment email sequence: review request at 48 hours, rebooking offer at 30 days, reactivation at 90 days.",
                signal: "The compounding effect: a practice that responds to every review and posts consistently for six months looks categorically more established than a competitor that doesn't — even if they opened the same month.",
              },
              {
                type: "B2B Technology or IT Services",
                example: "Managed IT provider, software vendor, or marketing technology firm serving Plano businesses",
                challenge: "B2B buyers near Plano's corporate corridor evaluate vendors over weeks. They read case studies, check LinkedIn, and sometimes ask ChatGPT or Perplexity for recommendations. A vendor with no content presence at any of those touchpoints doesn't make the shortlist.",
                strategy: "Structured service pages targeting 'IT services Plano TX' and 'managed IT provider Legacy Business Park.' FAQ content addressing the exact questions Plano IT buyers ask AI tools. LinkedIn company page updated weekly with industry content. Six-email nurture sequence for inbound leads that demonstrates expertise before asking for a meeting.",
                signal: "Plano B2B sales cycles are long. The goal isn't to close on first contact — it's to be the most credible option still standing when the prospect is ready to decide.",
              },
            ].map(({ type, example, challenge, strategy, signal }) => (
              <div key={type} className="border border-white/10 p-6 space-y-4">
                <div className="space-y-1">
                  <p className="font-display font-bold text-sm uppercase tracking-tight text-white">{type}</p>
                  <p className="text-xs text-white/35 uppercase tracking-widest">{example}</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">The Challenge</p>
                    <p className="text-white/60 text-sm leading-relaxed">{challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">The Strategy</p>
                    <p className="text-white/60 text-sm leading-relaxed">{strategy}</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 px-4 py-3">
                    <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-1">The Signal</p>
                    <p className="text-white/55 text-xs leading-relaxed italic">{signal}</p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Section 5 — Credibility audit */}
          <section className="space-y-5">
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              The Plano Credibility Audit: Six Questions to Answer Before Your Next Marketing Dollar
            </h2>
            <p className="text-white/65 leading-relaxed">
              Before investing in ads, campaigns, or new content, every Plano business should be able to answer these six questions. Each gap is a credibility leak that undermines everything else you're spending money on.
            </p>

            <div className="space-y-3">
              {[
                {
                  n: "01",
                  q: "What does ChatGPT say when asked for the best [your service] in Plano TX?",
                  why: "If you're not in the answer, you're invisible to a growing share of your market. This is your baseline GEO measurement.",
                },
                {
                  n: "02",
                  q: "Is your Google Business Profile photo-updated, fully categorized, and actively responding to reviews?",
                  why: "An outdated GBP signals a business that isn't paying attention. Plano buyers notice.",
                },
                {
                  n: "03",
                  q: "Does your website have a service area page that explicitly names Plano neighborhoods — West Plano, East Plano, Legacy corridor, Willow Bend?",
                  why: "Generic 'DFW area' language performs poorly in AI search. City and neighborhood specificity is a core GEO signal.",
                },
                {
                  n: "04",
                  q: "Does your business show up consistently — same name, address, phone — across Google, Yelp, BBB, Plano Chamber, and Nextdoor?",
                  why: "NAP inconsistency reduces your AI search credibility score. AI tools cross-reference multiple sources to validate local businesses.",
                },
                {
                  n: "05",
                  q: "Do you have an automated email sequence that activates when someone becomes a customer or subscriber?",
                  why: "Without automation, customer relationships atrophy between interactions. Plano's high-income market rewards businesses that stay present.",
                },
                {
                  n: "06",
                  q: "Are you publishing content — blog posts, LinkedIn updates, or social posts — that references Plano specifically at least twice per month?",
                  why: "Consistent, localized content is how you compound authority in AI search over time. Silence is indistinguishable from irrelevance.",
                },
              ].map(({ n, q, why }) => (
                <div key={n} className="border border-white/10 p-5 space-y-2">
                  <div className="flex gap-4 items-start">
                    <span className="font-display font-bold text-2xl text-white/15 shrink-0">{n}</span>
                    <p className="font-display font-bold text-sm uppercase tracking-tight leading-snug">{q}</p>
                  </div>
                  <p className="text-white/45 text-xs leading-relaxed pl-10">{why}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border border-white/20 p-8 space-y-4">
            <p className="text-xs uppercase tracking-widest text-white/40 font-bold">Thinsk Media — DFW AI Marketing</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl uppercase tracking-tight">
              Plano rewards the prepared.
            </h2>
            <p className="text-white/60 leading-relaxed">
              Plano's buyers are already researching their next purchase. Some of them are searching your category right now. Thinsk Media builds the AI marketing infrastructure that makes sure they find you — and that what they find earns the inquiry.
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
              Questions About AI Marketing in Plano
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
