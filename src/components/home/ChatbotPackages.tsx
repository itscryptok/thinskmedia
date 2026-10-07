import { motion } from "framer-motion";

const packages = [
  {
    number: "01",
    title: "Website Only",
    price: "$250 setup + $20/month",
    priceNote: "hosting included",
    description:
      "A modern, fast website built for your business.",
    testId: "card-chatbot-package-1",
  },
  {
    number: "02",
    title: "Website + SEO + AI Chatbot",
    price: "$420 setup + $50/month",
    priceNote: "hosting included",
    description:
      "Rank higher on Google plus an AI chatbot that answers your customers and books appointments 24/7.",
    testId: "card-chatbot-package-2",
  },
  {
    number: "03",
    title: "Everything + DM/SMS Chatbot",
    price: "$910 setup + $180/month",
    priceNote: "hosting included",
    description:
      "The full package — the AI chatbot also answers your social media DMs, text messages and WhatsApp.",
    testId: "card-chatbot-package-3",
  },
];

export function ChatbotPackages() {
  return (
    <section id="chatbots" className="bg-[#070C18] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C9A227]" />
            <p className="text-xs uppercase tracking-[0.2em] text-[#C9A227] font-bold">AI Chatbots</p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            Upgrade your business with an AI chatbot
          </h2>
          <p className="text-white/55 text-base md:text-lg max-w-2xl font-light leading-relaxed">
            On your website, social media DMs, text SMS, WhatsApp and more. It answers
            your customers instantly, 24/7 — booking appointments and capturing leads
            while you sleep.
          </p>
        </motion.div>

        {/* Package cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              data-testid={pkg.testId}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-[#070C18] hover:bg-[#0D1425] p-10 transition-colors duration-400 relative overflow-hidden"
            >
              {/* Gold corner accent on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-[#C9A227] group-hover:w-full transition-all duration-500 ease-out" />

              <span className="font-display font-bold text-5xl text-white/10 group-hover:text-white/20 transition-colors duration-300 leading-none select-none block mb-8">
                {pkg.number}
              </span>

              <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-white mb-3">
                {pkg.title}
              </h3>
              <p className="text-[#C9A227] font-bold text-xl mb-1">
                {pkg.price}
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-white/40 mb-5 font-bold">
                {pkg.priceNote}
              </p>
              <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/65 transition-colors duration-300">
                {pkg.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Sample + contact strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 border border-[#C9A227]/40 bg-[#C9A227]/5 px-8 py-6"
        >
          <p className="text-white/70 text-sm mb-3">
            See a live sample chatbot at{" "}
            <a
              href="https://cryptok.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A227] font-bold underline underline-offset-4"
            >
              cryptok.online
            </a>{" "}
            — tap the gold chat bubble, bottom right.
          </p>
          <p className="text-white/70 text-sm">
            Contact us by DM on Instagram:{" "}
            <a
              href="https://instagram.com/itscryptok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              itscryptok
            </a>
            , TikTok:{" "}
            <a
              href="https://tiktok.com/@itsCaptaintok"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-bold"
            >
              itsCaptaintok
            </a>
            , or email{" "}
            <a href="mailto:itscryptok@gmail.com" className="text-[#C9A227] font-bold">
              itscryptok@gmail.com
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
