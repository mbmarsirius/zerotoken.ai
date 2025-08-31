import zerotokenLogoOfficial from "@/assets/zerotoken-logo-official.png";
import marsirusLogo from "/assets/marsirius-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-ink text-text-dark py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          
          {/* Left Side - Logo and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            
            {/* Brand Section */}
            <div className="flex items-center space-x-4">
              <img 
                src={zerotokenLogoOfficial} 
                alt="ZeroToken" 
                className="h-8 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
              <div className="hidden md:block w-px h-6 bg-text-dark/30"></div>
              <span className="text-sm text-text-dark/70">
                Created by ZeroToken
              </span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-text-dark/70 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-text-dark/70 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-text-dark/70 hover:text-secondary transition-colors duration-300 font-medium"
              >
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Right Side - Powered By */}
          <div className="flex items-center space-x-3 group">
            <span className="text-sm text-text-dark/50 group-hover:text-text-dark/70 transition-colors duration-300">
              Powered by
            </span>
            <img 
              src={marsirusLogo} 
              alt="Marsirius AI Labs" 
              className="h-8 w-auto opacity-60 hover:opacity-80 transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-text-dark/20 text-center">
          <p className="text-sm text-text-dark/50">
            © 2024 ZeroToken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};