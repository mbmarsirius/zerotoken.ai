import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string, hash?: string) => {
    if (path === '/') {
      navigate('/');
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(path);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl border-b border-white/10 transition-all duration-500 bg-gradient-to-r from-lime/90 via-lime/95 to-lime/90 shadow-lg shadow-lime/20">
      <div className="container mx-auto px-4 lg:px-6" style={{ backgroundColor: '#c1ff72' }}>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 group">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/d3ceeec1-ae84-473a-a428-2343ef5e15c7.png" 
                alt="ZeroToken" 
                className="h-11 w-auto transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
              />
            </Link>
          </div>

          {/* Navigation - Hidden on mobile, shown on larger screens */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('/', 'pricing')}
              className="relative text-sm font-medium text-ink hover:text-pink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Pricing
            </button>
            <button 
              onClick={() => handleNavigation('/', 'how-it-works')}
              className="relative text-sm font-medium text-ink hover:text-pink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              How it works
            </button>
            <Link 
              to="/privacy" 
              className="relative text-sm font-medium text-ink/70 hover:text-ink transition-all duration-300 hover:scale-105 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-pink after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Privacy
            </Link>
          </nav>

          {/* CTA & Marsirius Icon */}
          <div className="flex items-center space-x-4">
            <Button 
              onClick={() => handleNavigation('/waitlist')}
              variant="hero-primary"
              size="default"
              className="font-semibold"
            >
              Join Waitlist
            </Button>
            <div className="relative group">
              <a href="https://www.marsirius.ai" target="_blank" rel="noopener noreferrer">
                <img 
                  src="/lovable-uploads/834de80d-75ef-4c38-a1e2-05ec14b7a565.png" 
                  alt="Marsirius" 
                  className="h-6 w-auto opacity-70 hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glass shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] animate-glass-shine"></div>
    </header>
  );
};