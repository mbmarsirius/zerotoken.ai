import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const BillingCancel = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-lavender/80 to-lavender/60">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              Payment cancelled
            </h1>

            {/* Body */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <p className="text-white text-xl md:text-2xl leading-relaxed">
                Your plan wasn't changed. You can try again anytime.
              </p>
            </div>

            {/* Button */}
            <div className="pt-8">
              <Button 
                onClick={() => window.location.href = '/#pricing'}
                variant="hero-primary" 
                size="xl" 
                className="min-w-48 shadow-2xl"
              >
                Back to Pricing
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingCancel;