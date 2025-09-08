import { StructuredData } from "@/components/SEO/StructuredData";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Pricing } from "@/components/landing/Pricing";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Meta
        title="ZeroToken - Your AI chats, clear and under control"
        description="ZeroToken works inside ChatGPT, Claude, and Gemini. Shows memory left, creates handoff reports, and keeps conversations fresh with AI Detox."
        canonicalPath="/"
      />
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
