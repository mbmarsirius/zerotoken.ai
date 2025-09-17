import { Button } from "@/components/ui/button";
import { Meta } from "@/components/SEO/Meta";
import { CheckCircle } from "lucide-react";

const AuthCallback = () => {
  return (
    <>
      <Meta 
        title="Authentication Successful - ZeroToken"
        description="Successfully authenticated with ZeroToken. Get started with the Chrome extension."
      />
      
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lime/10 via-white to-lavender/5">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-lavender/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="relative z-10 max-w-md mx-auto text-center p-8">
          {/* Success icon with glow */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-lime/20 rounded-full blur-xl animate-pulse" />
            <div className="relative bg-gradient-to-br from-lime to-lime/80 text-white rounded-full p-4 w-20 h-20 mx-auto flex items-center justify-center shadow-2xl">
              <CheckCircle className="w-10 h-10" />
            </div>
          </div>
          
          {/* Success message */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-display">
            Authentication Successful!
          </h1>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            You're all set! Now you can use ZeroToken to keep your AI conversations organized and under control.
          </p>
          
          {/* CTA Button */}
          <Button
            onClick={() => window.open('https://chromewebstore.google.com/detail/zerotoken-%E2%80%93-handoff-repor/alhbkpcjielfigjdioeieajichhknmpp', '_blank')}
            className="w-full bg-gradient-to-r from-lime to-lime/90 hover:from-lime/90 hover:to-lime text-white font-medium py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Open ZeroToken Extension
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Click the button above to open ZeroToken in the Chrome Web Store
          </p>
        </div>
      </div>
    </>
  );
};

export default AuthCallback;