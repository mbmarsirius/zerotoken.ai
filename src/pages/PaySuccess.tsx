import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { CheckCircle, Sparkles } from "lucide-react";

const PaySuccess = () => {
  const [searchParams] = useSearchParams();
  const sku = searchParams.get("sku");

  const isPro = sku === "zt_pro_monthly";
  const isLite = sku === "zt_lite_payg";

  let message = "Thanks for your purchase. Your payment has been processed successfully.";
  if (isPro) {
    message = "Thanks for your purchase. Your Pro subscription is now active and ready to use.";
  } else if (isLite) {
    message = "Thanks for your purchase. A Lite credit has been added to your account.";
  }

  // Auto-refresh parent window and close this tab
  useEffect(() => {
    try {
      // Arkadaki sayfayı yenile (panel plan/kredi bilgisini günceller)
      if (window.opener && !window.opener.closed) {
        window.opener.location.reload();
      }
    } catch(e) {}
    
    // Bu sekmeyi kısa gecikme sonrası kapat
    const timer = setTimeout(() => {
      try { 
        window.close(); 
      } catch(e) {}
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Meta
        title="Payment Successful - ZeroToken"
        description="Your payment has been processed successfully. Thank you for choosing ZeroToken."
      />
      <div className="min-h-screen bg-gradient-to-br from-lime/10 via-white to-lavender/5">
        <Header />
        
        <main className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon with Animation */}
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-lime/30 to-lime/20 backdrop-blur-lg rounded-full flex items-center justify-center border border-lime/40 shadow-2xl shadow-lime/25 animate-scale-in">
                <CheckCircle className="w-12 h-12 text-lime" />
              </div>
              
              {/* Confetti Animation */}
              <div className="absolute inset-0 pointer-events-none">
                <Sparkles className="absolute top-2 left-8 w-4 h-4 text-pink animate-pulse" />
                <Sparkles className="absolute top-6 right-6 w-3 h-3 text-lavender animate-pulse delay-150" />
                <Sparkles className="absolute bottom-4 left-12 w-3 h-3 text-lime animate-pulse delay-300" />
                <Sparkles className="absolute bottom-8 right-10 w-4 h-4 text-pink animate-pulse delay-500" />
              </div>
            </div>

            {/* Success Message */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                Payment successful — you're all set
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-4">
                {message}
              </p>
              
              {/* Refresh instruction for Pro/Lite purchases */}
              {(isPro || isLite) && (
                <div className="bg-gradient-to-r from-lime/10 to-lime/5 border border-lime/20 rounded-xl p-4 mt-6">
                  <p className="text-lime-700 font-medium text-lg">
                    💡 Don't forget to refresh your ZeroToken tab to activate your updated plan!
                  </p>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.open('https://chromewebstore.google.com/detail/alhbkpcjielfigjdioeieajichhknmpp', '_blank')}
                size="lg"
                className="w-full sm:w-auto relative bg-gradient-to-br from-lime/90 to-lime backdrop-blur-lg text-ink border border-lime/30 hover:from-lime hover:to-lime/80 hover:shadow-2xl hover:shadow-lime/40 hover:scale-105 transition-all duration-500 font-bold overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Open ZeroToken →</span>
              </Button>
              
              <Button 
                onClick={() => window.location.href = '/waitlist'}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto relative bg-white/80 backdrop-blur-lg text-gray-700 border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 font-semibold"
              >
                Back to Pricing
              </Button>
            </div>

            {/* Subtle Glow Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-lime/20 via-lime/5 to-transparent rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PaySuccess;