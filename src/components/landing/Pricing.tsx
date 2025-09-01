import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { upgradeToProStripe } from "@/utils/stripe";
import { Check, Star, Zap, Crown } from "lucide-react";

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

  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with AI conversation management",
      features: [
        "Basic memory monitoring",
        "Simple context refresh",
        "5 handoff reports per month",
        "Community support"
      ],
      cta: "Get Started",
      popular: false,
      action: null
    },
    {
      name: "Pro",
      price: "$9",
      period: "/month",
      description: "Advanced features for power users and professionals",
      features: [
        "Unlimited handoff reports",
        "Advanced AI Detox modes",
        "Auto-prompt engineering",
        "PDF export & email sharing",
        "Priority support",
        "Custom memory thresholds"
      ],
      cta: "Upgrade to Pro",
      popular: true,
      action: handleUpgrade
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade when you're ready for more advanced AI conversation management.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`p-8 transition-all duration-300 hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-2 border-pink shadow-lg bg-white' 
                  : 'border border-border/50 shadow-sm bg-white hover:shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Crown size={14} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                {plan.popular && (
                  <div className="p-2 rounded-lg bg-pink/10">
                    <Zap className="w-5 h-5 text-pink" />
                  </div>
                )}
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="text-3xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="text-muted-foreground">
                  {plan.name === "Free" 
                    ? "Perfect for trying out ZeroToken's basic features" 
                    : "Unlock the full potential of AI interactions"
                  }
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-2">
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-lime flex items-center justify-center mt-0.5">
                      <Check size={10} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={plan.action}
                variant={plan.popular ? "default" : "outline"}
                className={`w-full font-medium ${
                  plan.popular 
                    ? 'bg-pink hover:bg-pink/90 text-white border-0' 
                    : 'border border-lime text-lime hover:bg-lime hover:text-white'
                }`}
              >
                {plan.name === "Free" ? "Get Started Free" : "Upgrade to Pro"}
              </Button>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-4 max-w-2xl mx-auto border border-border/50">
            <p className="text-muted-foreground">
              All plans include access to <span className="font-semibold text-foreground">ChatGPT, Claude, and Gemini</span> integrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};