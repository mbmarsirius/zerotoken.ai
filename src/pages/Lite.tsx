import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const Lite = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLiteCheckout = async () => {
    setLoading(true);
    setError('');
    try {
      const base = 'https://buy.stripe.com/6oUbJ1g1GdN0dAofaj1sQ02';
      const url = new URL(base);
      try{
        const uidFromQuery = new URLSearchParams(window.location.search).get('uid');
        const uidFromStorage = localStorage.getItem('zt_user_id') || '';
        const uid = uidFromQuery || uidFromStorage || '';
        if (uid) url.searchParams.set('client_reference_id', uid);
      }catch{}
      window.location.href = url.toString();
    } catch (err) {
      setError('Failed to start checkout. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const liteFeatures = [
    "One handoff includes the curated WOW Events",
    "Includes ZeroMeter (live token gauge)",
    "Same continuity quality as Pro, no subscription"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/90 to-background/80">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          
          {/* Clean, bold title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground tracking-tight">
              ZeroToken{" "}
              <span className="bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent">
                Lite
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-bold text-foreground">
              Pay as you go
            </div>
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              $2.99{" "}
              <span className="text-xl md:text-2xl text-muted-foreground font-normal">per handoff</span>
            </div>
          </div>

          {/* Clean feature list */}
          <div className="space-y-6 max-w-lg mx-auto">
            {liteFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <span className="text-lg md:text-xl text-foreground/90 leading-relaxed">{feature}</span>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="pt-8 space-y-4">
            <Button 
              id="liteCheckoutBtn"
              onClick={handleLiteCheckout}
              disabled={loading}
              size="xl"
              className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-pink to-lime text-white rounded-xl hover:shadow-2xl hover:shadow-pink/30 hover:scale-105 transition-all duration-300 border-0"
            >
              {loading ? 'Loading...' : 'Buy a credit →'}
            </Button>
            
            <p className="text-muted-foreground text-sm">
              Secure checkout powered by Stripe
            </p>
            
            {error && (
              <p className="text-red-500 text-sm bg-red-50 px-4 py-2 rounded-lg border border-red-200">
                {error}
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lite;