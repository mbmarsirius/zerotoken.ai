import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Install = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-lavender/80 to-lavender/60">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Hero Line */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Install ZeroToken from Chrome Web Store
            </h1>

            {/* Steps */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <div className="space-y-6 text-left max-w-2xl mx-auto">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-lime rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-white text-lg">Open the Chrome Web Store listing.</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-pink rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-white text-lg">Click Add to Chrome.</p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-lavender rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-white text-lg">Open ChatGPT and click "Generate Handoff".</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                onClick={() => window.open('https://chromewebstore.google.com/detail/zerotoken/EXTENSION_ID', '_blank')}
                variant="hero-primary" 
                size="xl" 
                className="min-w-64 shadow-2xl"
              >
                Install from Chrome Web Store
              </Button>
            </div>

            {/* Secondary tip */}
            <p className="text-white/80 text-lg">
              Already installed?{" "}
              <a 
                href="/#how-it-works" 
                className="text-lime hover:text-lime/80 underline transition-colors"
              >
                Go to How it works
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Install;