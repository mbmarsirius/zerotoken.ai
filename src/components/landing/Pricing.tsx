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
    <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 mb-6">Perfect for getting started</p>
              <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
              <p className="text-gray-500 text-sm">Forever free</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-700">
                  <CheckCircle className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
            >
              Get Started Free
            </Button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gray-900 rounded-2xl p-8 shadow-lg relative">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-lime text-gray-900 text-sm font-semibold px-4 py-2 rounded-full">
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
              <p className="text-gray-300 mb-6">For power users and teams</p>
              <div className="text-5xl font-bold text-white mb-2">$9</div>
              <p className="text-gray-400 text-sm">per month, billed monthly</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {proFeatures.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-200">
                  <CheckCircle className="w-5 h-5 text-lime mr-3 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={handleUpgrade}
              size="lg" 
              className="w-full bg-lime text-gray-900 hover:bg-lime/90 font-semibold"
            >
              Upgrade to Pro
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};