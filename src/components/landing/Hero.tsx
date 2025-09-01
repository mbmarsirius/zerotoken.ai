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
      {/* Enhanced cinematic background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-white/8 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-lime/20 rounded-full blur-2xl animate-breathe delay-500"></div>
        <div className="absolute bottom-1/3 left-1/2 w-32 h-32 bg-pink/15 rounded-full blur-2xl animate-breathe delay-700"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Enhanced Status Badge */}
          <div className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-md rounded-full px-5 py-2.5 text-sm font-semibold text-white border border-white/40 shadow-lg hover-lift cursor-pointer">
            <div className="w-2 h-2 bg-secondary rounded-full animate-glow-lime"></div>
            Pro is live
          </div>

          {/* Brand Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/895885eb-c61d-4842-9597-0866e843d5e6.png" 
                alt="ZeroToken Cross Logo" 
                className="h-40 w-auto transition-all duration-700 hover:scale-125 animate-breathe cursor-pointer" 
                style={{ 
                  filter: 'drop-shadow(0 0 25px rgba(236,72,153,0.4)) drop-shadow(0 0 50px rgba(193,255,114,0.2))',
                }}
              />
            </div>
          </div>

          {/* Enhanced Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[0.95] tracking-tight">
            Your AI chats,{" "}
            <span className="bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] font-extrabold">
              clear and under control
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            ZeroToken works inside ChatGPT, Claude, and Gemini. Shows memory left, creates handoff reports, and keeps conversations fresh with AI Detox.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              onClick={handleUpgrade}
              variant="hero-primary"
              size="xl"
              className="min-w-48 shadow-2xl ripple-effect hover-lift transition-all duration-300 hover:shadow-pink-glow animate-glow-pulse"
            >
              Upgrade to Pro →
            </Button>
            
            <Button 
              onClick={scrollToHowItWorks}
              variant="hero-outline"
              size="xl"
              className="min-w-48 hover-lift transition-all duration-300"
            >
              See how it works
            </Button>
          </div>

          {/* Enhanced Pain Point with Premium Glassmorphism */}
          <div className="pt-16 opacity-100">
            <div className="relative max-w-4xl mx-auto hover-lift">
              <div className="absolute inset-0 bg-gradient-to-r from-pink/30 to-lime/30 rounded-3xl blur-2xl animate-glow-pulse"></div>
              <div className="relative bg-black/30 backdrop-blur-xl rounded-3xl p-10 border border-white/30 shadow-dramatic">
                <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed tracking-tight">
                  "Your AI keeps forgetting things mid-conversation, and you're copy-pasting the same context over and over..."
                </p>
                <div className="mt-6 text-lime text-xl font-bold animate-fade-in-left">
                  → ZeroToken fixes this forever.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};