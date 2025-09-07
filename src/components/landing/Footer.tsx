export const Footer = () => {
  return <footer className="bg-white border-t border-gray-200 py-16">
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
          
          {/* Left Side - Logo and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            
            {/* Brand Section */}
            <div className="flex items-center space-x-4 group">
              <img src="/lovable-uploads/449de380-e642-4520-a709-4ed0b95a1df8.png" alt="ZeroToken" className="h-16 w-auto transition-transform duration-300 group-hover:scale-105" />
              <div className="hidden md:block w-px h-6 bg-gradient-to-b from-pink/30 to-lime/30"></div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                Created by ZeroToken
              </span>
            </div>
            
            {/* Navigation Links */}
            <nav className="flex space-x-8 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-pink transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-600 hover:text-lime transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-lime after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-600 hover:text-pink transition-all duration-300 hover:scale-105 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-pink after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                Cookie Policy
              </a>
            </nav>
          </div>

          {/* Right Side - Created & Powered By */}
          <div className="flex items-center space-x-3 group">
            <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
              Created & Powered by
            </span>
            <img src="/lovable-uploads/9dca6b8d-c306-4bbd-be5c-1ecde2a8df1a.png" alt="Marsirius AI Labs" className="h-16 w-auto opacity-80 hover:opacity-100 transition-all duration-300 group-hover:scale-105" />
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            © 2024 ZeroToken. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};