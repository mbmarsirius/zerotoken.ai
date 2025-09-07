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
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl border-b border-white/10 transition-all duration-500 bg-gradient-to-r from-lime/90 via-lime/95 to-lime/90 shadow-lg shadow-lime/20">
      <div className="container mx-auto px-4 lg:px-6" style={{ backgroundColor: '#c1ff72' }}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <img 
              src="/lovable-uploads/713e3b96-9497-40e3-b983-51eb217c2ad1.png" 
              alt="ZeroToken" 
              className="h-11 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
            />
          </div>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#pricing" 
              className="relative text-sm font-medium text-ink hover:text-pink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Pricing
            </a>
            <a 
              href="#how-it-works" 
              className="relative text-sm font-medium text-ink hover:text-pink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              How it works
            </a>
            <a 
              href="/privacy" 
              className="relative text-sm font-medium text-ink/70 hover:text-ink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Privacy
            </a>
          </nav>

          {/* CTA & Marsirius Icon */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleUpgrade}
              variant="hero-primary"
              size="default"
              className="font-semibold"
            >
              Upgrade to Pro
            </Button>
            <div className="relative group">
              <img 
                src="/lovable-uploads/94bcfd29-e1f6-4f86-87af-920406bc33dc.png" 
                alt="Marsirius" 
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink/20 to-transparent rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-glass-shine"></div>
    </header>
  );
};