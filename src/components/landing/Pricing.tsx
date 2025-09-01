import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { upgradeToProStripe } from "@/utils/stripe";
import { CheckCircle } from "lucide-react";

export const Pricing = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      console.error('Upgrade failed:', error);
      toast.error("Upgrade failed. Please try again.");
    }
  };

  const freeFeatures = [
    "Basic memory monitoring",
    "Simple context refresh", 
    "5 handoff reports per month",
    "Community support"
  ];

  const proFeatures = [
    "Unlimited handoff reports",
    "Advanced AI Detox modes",
    "Auto-prompt engineering",
    "PDF export & email sharing",
    "Priority support",
    "Custom memory thresholds"
  ];

  return (
    <section id="pricing" className="py-32 bg-gradient-to-br from-pink/25 via-pink/15 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink/30 to-lime/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/25 to-pink/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-pink/35 to-transparent rounded-full blur-2xl animate-bounce" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-lime/20 to-pink/20 border border-white/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-lime/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <span className="text-2xl font-bold bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent">F</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">Free</h3>
                <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors">Perfect for getting started</p>
                <div className="text-5xl font-bold bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent mb-2">$0</div>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">Forever free</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-lime/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-lime" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full border-lime/30 text-gray-700 hover:bg-lime/10 hover:border-lime/50 transition-all duration-300"
              >
                Get Started Free
              </Button>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in relative" style={{ animationDelay: '0.2s' }}>
            {/* Popular badge with enhanced styling */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-pink to-lime text-white text-sm font-semibold px-6 py-3 rounded-full shadow-lg animate-pulse">
                <span className="relative">
                  Most Popular
                  <div className="absolute inset-0 bg-gradient-to-r from-lime to-pink rounded-full blur opacity-50"></div>
                </span>
              </div>
            </div>
            
            <div className="relative p-8 pt-12 rounded-3xl bg-gradient-to-br from-pink/20 to-lime/20 border border-white/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink/20">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink to-lime rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-lg">
                  <span className="text-2xl font-bold text-white">P</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">Pro</h3>
                <p className="text-gray-700 mb-6 group-hover:text-gray-800 transition-colors">For power users and teams</p>
                <div className="text-5xl font-bold bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent mb-2">$9</div>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors">per month, billed monthly</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700 group-hover:text-gray-800 transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-pink/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-pink" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleUpgrade}
                size="lg" 
                className="w-full bg-gradient-to-r from-pink to-lime text-white hover:from-pink/90 hover:to-lime/90 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Upgrade to Pro →
              </Button>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};