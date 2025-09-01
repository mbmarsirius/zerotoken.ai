import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { upgradeToProStripe } from "@/utils/stripe";

export const Hero = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error('Upgrade failed:', error);
      toast.error("Upgrade failed. Please try again.");
    }
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'var(--hero-bg)' }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white border border-white/30">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            Pro is live
          </div>

          {/* Brand Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/895885eb-c61d-4842-9597-0866e843d5e6.png" 
                alt="ZeroToken Cross Logo" 
                className="h-40 w-auto transition-transform duration-500 hover:scale-110" 
                style={{ 
                  filter: 'drop-shadow(0 0 15px rgba(236,72,153,0.3))',
                  animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
                }}
              />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight">
            Your AI chats,{" "}
            <span className="bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent animate-fade-in">
              clear and under control
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            ZeroToken works inside ChatGPT, Claude, and Gemini. Shows memory left, creates handoff reports, and keeps conversations fresh with AI Detox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleUpgrade}
              variant="hero-primary"
              size="xl"
              className="min-w-48 shadow-2xl"
            >
              Upgrade to Pro →
            </Button>
            
            <Button 
              onClick={scrollToHowItWorks}
              variant="hero-outline"
              size="xl"
              className="min-w-48"
            >
              See how it works
            </Button>
          </div>

          {/* Pain Point */}
          <div className="pt-12 opacity-90">
            <p className="text-white/80 text-lg italic max-w-2xl mx-auto">
              "Your AI keeps forgetting things mid-conversation, and you're copy-pasting the same context over and over..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};