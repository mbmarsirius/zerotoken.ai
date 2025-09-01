import zerotokenLogoOfficial from "@/assets/zerotoken-logo-official.png";
import marsirusLogo from "/assets/marsirius-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          
          {/* Left Side - Logo and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            
            {/* Brand Section */}
            <div className="flex items-center space-x-4">
              <img 
                src={zerotokenLogoOfficial} 
                alt="ZeroToken" 
                className="h-8 w-auto"
              />
              <div className="hidden md:block w-px h-6 bg-gray-300"></div>
              <span className="text-sm text-gray-600">
                Created by ZeroToken
              </span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-8 text-sm">
              <a 
                href="/privacy" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="/cookies" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Right Side - Powered By */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-gray-500">
              Powered by
            </span>
            <img 
              src={marsirusLogo} 
              alt="Marsirius AI Labs" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity duration-200"
            />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2024 ZeroToken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};