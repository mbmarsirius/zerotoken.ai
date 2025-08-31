import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

import { upgradeToProStripe } from "@/utils/stripe";
import { toast } from "sonner";

export const Pricing = () => {
  const handleUpgrade = async () => {
    try {
      const checkoutUrl = await upgradeToProStripe();
      // Open Stripe checkout in a new tab
      window.open(checkoutUrl, '_blank');
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Upgrade failed — please try again.");
    }
  };

  const plans = [
    {
      name: "Free",
      subtitle: "One-time trial",
      price: "€0",
      period: "forever",
      features: [
        "1 Handoff total",
        "3 Auto-Checkpoints total", 
        "PDF & Email",
        "No daily reset"
      ],
      cta: "Get Started",
      popular: false,
      variant: "outline" as const
    },
    {
      name: "Pro",
      subtitle: "Most popular",
      price: "€7",
      period: "/month",
      features: [
        "Unlimited handoffs & checkpoints",
        "Priority processing",
        "Live progress & export suite",
        "Hallucination Meter™ (coming soon)"
      ],
      cta: "Upgrade to Pro",
      popular: true,
      variant: "pink-outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more power
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-accent-pink shadow-lg' 
                  : 'border border-border'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-accent-pink text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.subtitle}
                </p>
                
                <div className="flex items-baseline justify-center">
                  <span className="font-display text-5xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-lime mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                variant={plan.variant}
                size="lg"
                className="w-full"
                onClick={plan.name === "Pro" ? handleUpgrade : undefined}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};