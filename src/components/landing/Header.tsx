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
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-xl border-b border-border/20 transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/e02e11bb-6f61-4b2b-b2f7-46329f251243.png" 
              alt="ZeroToken" 
              className="h-11 w-auto transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#pricing" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300"
            >
              How it works
            </a>
            <a 
              href="/privacy" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Privacy
            </a>
          </nav>

          {/* Marsirius Icon & CTA */}
          <div className="flex items-center space-x-4">
            <img 
              src="/assets/marsirius-logo.png" 
              alt="Marsirius" 
              className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
            <Button 
              onClick={handleUpgrade}
              variant="default"
              size="default"
              className="font-semibold bg-gradient-to-r from-pink to-pink/90 hover:from-pink/90 hover:to-pink text-white shadow-lg border-0"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};