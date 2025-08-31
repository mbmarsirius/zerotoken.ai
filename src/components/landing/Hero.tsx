import { Button } from "@/components/ui/button";

import { upgradeToProStripe } from "@/utils/stripe";
import { toast } from "sonner";

export const Hero = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      // Open Stripe checkout in a new tab
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upgrade failed — please try again.");
    }
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-lavender/10 via-background to-pink/5 py-20 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-lavender/20 via-transparent to-pink/20 animate-pulse opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pro Badge */}
          <div className="inline-flex items-center justify-center mb-8">
            <div className="border-2 border-accent-pink text-accent-pink bg-white/50 backdrop-blur-sm rounded-full px-6 py-2 font-semibold text-sm">
              ✨ Pro is live — Stripe checkout
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Your AI chats,{" "}
            <span className="bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent">
              clear and under control
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            ZeroToken works inside ChatGPT, Claude, and Gemini. It shows you how much memory your AI has left, 
            turns long chats into narrative handoff reports, and keeps conversations fresh with AI Detox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="hero-primary" 
              size="xl"
              onClick={handleUpgrade}
              className="w-full sm:w-auto"
            >
              Upgrade to Pro →
            </Button>
            <Button 
              variant="hero-secondary" 
              size="xl"
              onClick={scrollToHowItWorks}
              className="w-full sm:w-auto"
            >
              See how it works
            </Button>
          </div>

          {/* Pain Point */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg text-foreground font-medium">
              <span className="text-accent-pink font-semibold">Ever had ChatGPT forget what you said?</span> 
              {" "}That's the memory wall. ZeroToken makes sure you never hit it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};