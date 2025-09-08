import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const Pro = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleProCheckout = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://ppvergvfxththbwtjsmu.supabase.co/functions/v1/stripe_create_checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sku: 'pro_monthly_usd_999',
          userId: 'USER_UUID',
          email: 'user@example.com'
        })
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (err) {
      setError('Failed to start checkout. Please try again.');
      console.error('Checkout error:', err);
    } finally {
      setLoading(false);
    }
  };

  const proFeatures = [
    "Unlimited handoffs (Fair-Use: 20/hour · 500/month)",
    "WOW Events Capture",
    "Faster recap engine", 
    "Includes ZeroMeter (live token gauge)",
    "Early access to Auto-Prompt & AI Detox (when released)",
    "Priority support"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-lavender via-lavender/80 to-lavender/60">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight">
              ZeroToken Pro — $9.99 / month
            </h1>

            {/* Features */}
            <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
              <ul className="space-y-4 text-left max-w-2xl mx-auto">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-white">
                    <div className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5 bg-gradient-to-br from-pink/30 to-lime/30 rounded-full flex items-center justify-center border border-pink/40">
                      <CheckCircle className="w-4 h-4 text-pink" />
                    </div>
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-8">
              <Button 
                id="proCheckoutBtn"
                onClick={handleProCheckout}
                disabled={loading}
                variant="hero-primary" 
                size="xl" 
                className="min-w-64 shadow-2xl"
              >
                {loading ? 'Loading...' : 'Upgrade to Pro →'}
              </Button>
              
              {/* Stripe note */}
              <p className="text-white/60 text-sm mt-3">
                Stripe checkout opens in a new tab.
              </p>
              
              {/* Error message */}
              {error && (
                <p className="text-red-300 text-sm mt-2">
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pro;