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
      const base = 'https://buy.stripe.com/28E00j16MaAOcwk4vF1sQ01';
      const url = new URL(base);
      // Optional user id propagation for webhook association
      try{
        const uidFromQuery = new URLSearchParams(window.location.search).get('uid');
        const uidFromStorage = localStorage.getItem('zt_user_id') || '';
        const uid = uidFromQuery || uidFromStorage || '';
        if (uid) url.searchParams.set('client_reference_id', uid);
      }catch {}
      window.location.href = url.toString();
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
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          
          {/* Clean, bold title */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-gray-900 tracking-tight">
              ZeroToken 
              <span className="bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent">
                {" "}Pro
              </span>
            </h1>
            <div className="text-4xl font-bold text-gray-800">
              $9.99 
              <span className="text-2xl text-gray-500 font-normal">/month</span>
            </div>
          </div>

          {/* Clean feature list */}
          <div className="space-y-6 max-w-lg mx-auto">
            {proFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center text-center">
                <div className="w-6 h-6 mr-4 flex-shrink-0 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-4 h-4 text-white" strokeWidth={2} />
                </div>
                <span className="text-xl text-gray-700 leading-relaxed text-center">{feature}</span>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="pt-8 space-y-4">
            <Button 
              id="proCheckoutBtn"
              onClick={handleProCheckout}
              disabled={loading}
              className="px-12 py-4 text-xl font-bold bg-gradient-to-r from-pink to-lime text-white rounded-xl hover:shadow-2xl hover:shadow-pink/30 hover:scale-105 transition-all duration-300"
            >
              {loading ? 'Loading...' : 'Upgrade to Pro →'}
            </Button>
            
            <p className="text-gray-500 text-sm">
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

export default Pro;