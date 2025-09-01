import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { upgradeToProStripe } from "@/utils/stripe";

export const Header = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error('Upgrade failed:', error);
      toast.error("Upgrade failed. Please try again.");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-effect border-b border-white/20 transition-all duration-500 hover:backdrop-blur-3xl">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e02e11bb-6f61-4b2b-b2f7-46329f251243.png" 
              alt="ZeroToken" 
              className="h-11 w-auto transition-all duration-500 hover:scale-110 hover:drop-shadow-lg animate-breathe cursor-pointer"
            />
          </div>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#pricing" 
              className="text-sm font-semibold text-ink/80 hover:text-pink transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink after:transition-all after:duration-300 hover:after:w-full"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-semibold text-ink/80 hover:text-lime transition-all duration-300 hover:scale-105 relative after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lime after:transition-all after:duration-300 hover:after:w-full"
            >
              How it works
            </a>
            <a 
              href="/privacy" 
              className="text-sm font-medium text-ink/60 hover:text-ink transition-all duration-300 hover:scale-105"
            >
              Privacy
            </a>
          </nav>

          {/* CTA & Marsirius Icon */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleUpgrade}
              variant="default"
              size="default"
              className="font-semibold bg-gradient-to-r from-pink to-pink/80 hover:from-pink/90 hover:to-pink/70 text-white shadow-xl border-0 ripple-effect hover-lift transition-all duration-300 hover:shadow-2xl"
            >
              Upgrade to Pro
            </Button>
            <img 
              src="/lovable-uploads/94bcfd29-e1f6-4f86-87af-920406bc33dc.png" 
              alt="Marsirius" 
              className="h-6 w-auto opacity-60 hover:opacity-100 transition-all duration-500 hover:scale-110 animate-float cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};