import { useSeo } from "@/hooks/use-seo";
import { SiteNav } from "@/components/shared/SiteNav";
import { Hero } from "@/components/home/Hero";
import { ServiceCards } from "@/components/home/ServiceCards";
import { ChatbotPackages } from "@/components/home/ChatbotPackages";
import { HomeBlogSection } from "@/components/home/HomeBlogSection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  useSeo({
    title: "Thinsk Media | AI-Powered Digital Marketing Agency — Dallas–Fort Worth",
    description: "Thinsk Media is a Dallas–Fort Worth AI-powered digital marketing agency specializing in SEO, social media, email marketing, and agentic workflow automation — built for modern businesses.",
    canonical: "https://thinskmedia.com/",
    ogImage: "https://thinskmedia.com/favicon.png",
  });

  return (
    <div className="min-h-screen bg-[#070C18] text-white selection:bg-white selection:text-black">
      <SiteNav />
      <main>
        <Hero />
        <ServiceCards />
        <ChatbotPackages />
        <HomeBlogSection />
      </main>
      <Footer />
    </div>
  );
}
