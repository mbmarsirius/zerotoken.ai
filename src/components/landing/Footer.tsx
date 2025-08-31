import marsirusLogo from "/assets/marsirius-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-ink text-text-dark py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-8 md:mb-0">
            <p className="text-center md:text-left">
              © 2025 ZeroToken · Created by ZeroToken · Powered by Marsirius AI Labs
            </p>
            
            <div className="flex space-x-6 text-sm">
              <a 
                href="/privacy" 
                className="text-text-dark hover:text-lime transition-colors"
              >
                Privacy
              </a>
              <a 
                href="/terms" 
                className="text-text-dark hover:text-lime transition-colors"
              >
                Terms
              </a>
              <a 
                href="/cookies" 
                className="text-text-dark hover:text-lime transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>

          {/* Marsirius logo */}
          <div className="flex items-center space-x-3">
            <span className="text-sm text-text-dark/70">Powered by</span>
            <img 
              src={marsirusLogo} 
              alt="Marsirius AI Labs" 
              className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};