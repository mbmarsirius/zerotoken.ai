import { Button } from "@/components/ui/button";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { XCircle } from "lucide-react";

const PayCancel = () => {
  return (
    <>
      <Meta
        title="Payment Canceled - ZeroToken"
        description="Your payment was canceled. No charges were made to your account."
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 lg:px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Cancel Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gray-100 to-gray-50 backdrop-blur-lg rounded-full flex items-center justify-center border border-gray-200 shadow-xl shadow-gray-200/50 animate-scale-in">
                <XCircle className="w-12 h-12 text-gray-400" />
              </div>
            </div>

            {/* Cancel Message */}
            <div className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                Payment canceled
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                No charges were made. You can return to pricing and try again.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => window.location.href = '/waitlist'}
                size="lg"
                className="w-full sm:w-auto relative bg-gradient-to-br from-lime/90 to-lime backdrop-blur-lg text-ink border border-lime/30 hover:from-lime hover:to-lime/80 hover:shadow-2xl hover:shadow-lime/40 hover:scale-105 transition-all duration-500 font-bold overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Back to Pricing</span>
              </Button>
              
              <Button 
                onClick={() => window.open('https://chromewebstore.google.com/detail/alhbkpcjielfigjdioeieajichhknmpp', '_blank')}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto relative bg-white/80 backdrop-blur-lg text-gray-700 border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 font-semibold"
              >
                Install Free
              </Button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default PayCancel;