import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const BillingSuccess = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-lavender/80 to-lavender/60">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Payment successful
            </h1>

            {/* Body */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-white text-xl md:text-2xl leading-relaxed">
                You can now use your new plan/credit in the ZeroToken extension.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                onClick={() => window.location.href = '/#how-it-works'}
                variant="hero-primary" 
                size="xl" 
                className="min-w-48 shadow-2xl"
              >
                Open How it works
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/#pricing'}
                variant="hero-outline" 
                size="xl" 
                className="min-w-48"
              >
                Go to Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingSuccess;