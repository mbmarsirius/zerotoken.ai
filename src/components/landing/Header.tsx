import { Button } from "@/components/ui/button";
import zerotokenLogo from "/assets/zerotoken-logo.png";

import { upgradeToProStripe } from "@/utils/stripe";
import { toast } from "sonner";

export const Header = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      // Open Stripe checkout in a new tab
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upgrade failed — please try again.");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-ink/20 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={zerotokenLogo} 
              alt="ZeroToken" 
              className="h-8 w-auto"
            />
            <span className="font-display font-semibold text-xl text-text-dark">
              ZeroToken
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#pricing" 
              className="text-text-dark hover:text-lime transition-colors font-medium"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="text-text-dark hover:text-lime transition-colors font-medium"
            >
              How it works
            </a>
            <a 
              href="/privacy" 
              className="text-text-dark hover:text-lime transition-colors font-medium"
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="text-text-dark hover:text-lime transition-colors font-medium"
            >
              Terms
            </a>
            <a 
              href="/cookies" 
              className="text-text-dark hover:text-lime transition-colors font-medium"
            >
              Cookies
            </a>
          </nav>

          {/* CTA Button */}
          <Button 
            variant="lime-pill" 
            size="lg"
            onClick={handleUpgrade}
          >
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </header>
  );
};