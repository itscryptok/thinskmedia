import { useState } from "react";
import { motion } from "framer-motion";
import { SiteNav } from "@/components/shared/SiteNav";
import { Footer } from "@/components/home/Footer";
import { useSeo } from "@/hooks/use-seo";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  useSeo({
    title: "Contact | Thinsk Media — AI-Powered Digital Marketing, Dallas–Fort Worth",
    description: "Get in touch with Thinsk Media. Tell us about your business and we'll show you exactly how to boost your online visibility with AI-powered marketing.",
    canonical: "https://thinskmedia.com/contact",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setFormState("success");
        form.reset();
      } else {
        setErrorMsg(json.message || "Something went wrong. Please try again.");
        setFormState("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setFormState("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#070C18] text-white selection:bg-white selection:text-black">
      <SiteNav />

      <main className="pt-16">

        {/* Hero */}
        <section className="bg-[#070C18] pt-24 pb-20 px-6 border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div {...fadeUp(0)}>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 mb-6">
                THINSK MEDIA · GET IN TOUCH
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase leading-tight tracking-tight mb-6">
                Let's Boost<br />Your Visibility
              </h1>
              <p className="text-base md:text-lg text-white/60 max-w-2xl font-light leading-relaxed">
                Tell us about your business. We'll get back to you with a clear picture of where you stand online and exactly what it would take to grow.
              </p>
              <div className="mt-8">
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
          </div>
        </section>

        {/* Form + Info */}
        <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-5 gap-16">

          {/* Left: form */}
          <motion.div className="md:col-span-3" {...fadeUp(0.1)}>
            {formState === "success" ? (
              <div className="border border-white/10 bg-[#0D1425] p-10 text-center">
                <div className="text-4xl mb-4">✓</div>
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight mb-3">Message Sent!</h2>
                <p className="text-white/60 leading-relaxed">
                  Thanks for reaching out. We'll review your message and get back to you shortly.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 inline-flex items-center gap-2 border border-white/20 text-white font-bold uppercase tracking-wider text-xs px-6 py-3 hover:border-white/60 transition-colors duration-200"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="acbd8a00-90a4-4cf4-8328-e1b8d1eb18e0" />
                <input type="hidden" name="subject" value="New Contact Form Submission — Thinsk Media" />
                <input type="hidden" name="from_name" value="Thinsk Media Website" />
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      Full Name <span className="text-white">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-[#0D1425] border border-white/10 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      Email <span className="text-white">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full bg-[#0D1425] border border-white/10 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      Phone <span className="text-white/30">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(214) 555-0100"
                      className="w-full bg-[#0D1425] border border-white/10 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                      Business Name <span className="text-white/30">(optional)</span>
                    </label>
                    <input
                      type="text"
                      name="business"
                      placeholder="Acme Co."
                      className="w-full bg-[#0D1425] border border-white/10 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-2">
                    How Can We Help? <span className="text-white">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your business, your goals, or what's not working with your current marketing..."
                    className="w-full bg-[#0D1425] border border-white/10 text-white placeholder-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors duration-200 resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="text-red-400 text-sm border border-red-400/20 bg-red-400/5 px-4 py-3">
                    {errorMsg}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="inline-flex items-center gap-2 bg-white text-black font-bold uppercase tracking-wider text-sm px-8 py-4 hover:bg-white/90 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formState === "submitting" ? "Sending…" : "Boost My Visibility →"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Right: info */}
          <motion.div className="md:col-span-2 space-y-10" {...fadeUp(0.2)}>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Based In</p>
              <p className="text-white font-semibold">Dallas–Fort Worth, Texas</p>
              <p className="text-white/50 text-sm mt-1">Serving businesses across Texas and beyond</p>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">What to Expect</p>
              <ul className="space-y-3 text-sm text-white/60 leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-white mt-0.5">→</span>
                  Response within 1 business day
                </li>
                <li className="flex gap-3">
                  <span className="text-white mt-0.5">→</span>
                  A clear look at where your business stands online
                </li>
                <li className="flex gap-3">
                  <span className="text-white mt-0.5">→</span>
                  No pressure, no jargon — just honest guidance
                </li>
                <li className="flex gap-3">
                  <span className="text-white mt-0.5">→</span>
                  AI-powered strategy tailored to your market
                </li>
              </ul>
            </div>
            <div className="border-t border-white/10 pt-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Services</p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>AI-Powered SEO</li>
                <li>Social Media Strategy</li>
                <li>Email List Building</li>
                <li>Content Distribution</li>
                <li>Local Search Visibility</li>
              </ul>
            </div>
          </motion.div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
