import zerotokenLogoOfficial from "@/assets/zerotoken-logo-official.png";
import marsirusLogo from "/assets/marsirius-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-lavender/40 via-lavender/20 to-white border-t border-lavender/30 py-16 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-lavender/30 to-transparent"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-lime/15 to-pink/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-20 w-48 h-48 bg-gradient-to-br from-pink/15 to-lavender/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          
          {/* Left Side - Logo and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            
            {/* Brand Section */}
            <div className="flex items-center space-x-4 group">
              <img 
                src={zerotokenLogoOfficial} 
                alt="ZeroToken" 
                className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden md:block w-px h-6 bg-gradient-to-b from-pink/30 to-lime/30"></div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Created by ZeroToken
              </span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-8 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-600 hover:text-pink transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-600 hover:text-lime transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lime after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-gray-600 hover:text-pink transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Right Side - Powered By */}
          <div className="flex items-center space-x-3 group">
            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
              Powered by
            </span>
            <img 
              src={marsirusLogo} 
              alt="Marsirius AI Labs" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-all duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gradient-to-r from-pink/20 via-gray-200 to-lime/20 text-center">
          <p className="text-sm text-gray-500">
            © 2024 ZeroToken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};