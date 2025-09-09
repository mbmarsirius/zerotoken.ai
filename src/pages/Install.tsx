import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Link, useNavigate } from "react-router-dom";

const Install = () => {
  const navigate = useNavigate();
  // Soft redirect to waitlist to align with new flow
  if (typeof window !== 'undefined') {
    setTimeout(() => { try{ navigate('/waitlist'); }catch{} }, 0);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          
          {/* Clean, bold title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              Install{" "}
              <span className="bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent">
                ZeroToken
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-muted-foreground">
              From Chrome Web Store
            </div>
          </div>

          {/* Installation steps */}
          <div className="space-y-6 max-w-lg mx-auto">
            <div className="flex items-start text-left">
              <div className="w-8 h-8 mr-4 flex-shrink-0 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <span className="text-lg md:text-xl text-foreground/90 leading-relaxed">Open the Chrome Web Store listing</span>
            </div>
            
            <div className="flex items-start text-left">
              <div className="w-8 h-8 mr-4 flex-shrink-0 bg-gradient-to-r from-pink to-lime rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <span className="text-lg md:text-xl text-foreground/90 leading-relaxed">Click Add to Chrome</span>
            </div>
            
            <div className="flex items-start text-left">
              <div className="w-8 h-8 mr-4 flex-shrink-0 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <span className="text-lg md:text-xl text-foreground/90 leading-relaxed">Open ChatGPT and click "Generate Handoff"</span>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="pt-8 space-y-4">
            <Button 
              onClick={() => window.open('https://chromewebstore.google.com/detail/zerotoken/EXTENSION_ID', '_blank')}
              size="xl"
              className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-pink to-lime text-white rounded-xl hover:shadow-2xl hover:shadow-pink/30 hover:scale-105 transition-all duration-300 border-0"
            >
              Install from Chrome Web Store →
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Already installed?{" "}
              <Link to="/" className="text-pink hover:text-pink/80 transition-colors">
                Go to How it works
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Install;