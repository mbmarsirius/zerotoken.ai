import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { upgradeToProStripe } from "@/utils/stripe";
import { Check, Star } from "lucide-react";

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
    <section id="pricing" className="py-24" style={{ background: 'var(--pricing-bg)' }}>
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Choose your plan
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start free and upgrade when you're ready for more advanced AI conversation management.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-500 hover:shadow-xl hover:-translate-y-2 animate-fade-in-up ${
                plan.popular 
                  ? 'border-primary shadow-lg ring-2 ring-primary/20 scale-105' 
                  : 'border-border hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl font-display font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="flex items-end justify-center gap-1 mt-4">
                  <span className="text-5xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-lg mb-2">
                      {plan.period}
                    </span>
                  )}
                </div>
                <CardDescription className="text-base mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features List */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={plan.action}
                  variant={plan.popular ? "brand-primary" : "brand-outline"}
                  size="lg"
                  className="w-full mt-6 font-semibold"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <p className="text-muted-foreground">
            All plans include access to ChatGPT, Claude, and Gemini integrations
          </p>
        </div>
      </div>
    </section>
  );
};