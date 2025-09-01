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
    <section id="pricing" className="py-32 relative overflow-hidden" style={{ background: 'var(--pricing-bg)' }}>
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lime/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Choose your <span className="bg-gradient-to-r from-pink via-primary to-lime bg-clip-text text-transparent">plan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free and upgrade when you're ready for more advanced AI conversation management.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name} 
              className={`relative transition-all duration-700 hover:-translate-y-6 animate-fade-in-up overflow-hidden ${
                plan.popular 
                  ? 'border-primary/30 ring-2 ring-primary/20 scale-105' 
                  : 'border-border/30 hover:border-primary/30'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                background: plan.popular ? 
                  'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,102,196,0.05) 100%)' :
                  'rgba(255,255,255,0.90)',
                backdropFilter: 'blur(20px)',
                boxShadow: plan.popular ? 
                  '0 25px 50px -12px rgba(255,102,196,0.25), 0 0 0 1px rgba(255,102,196,0.1)' :
                  'var(--shadow-card)'
              }}
            >
              {/* Glow Effect for Pro Plan */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-lime/10 opacity-50"></div>
              )}
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-pink to-primary text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl">
                    <Crown className="h-4 w-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 relative z-10">
                {/* Plan Icon */}
                <div className="mx-auto mb-4 w-fit p-4 rounded-2xl"
                  style={{
                    background: plan.popular ? 
                      'linear-gradient(135deg, hsl(var(--pink) / 0.1), hsl(var(--lime) / 0.1))' :
                      'linear-gradient(135deg, hsl(var(--lime) / 0.1), hsl(var(--lavender) / 0.1))'
                  }}>
                  {plan.popular ? 
                    <Crown className="h-8 w-8 text-primary" /> : 
                    <Zap className="h-8 w-8 text-secondary" />
                  }
                </div>
                
                <CardTitle className="text-3xl font-display font-bold text-foreground mb-2">
                  {plan.name}
                </CardTitle>
                <div className="flex items-end justify-center gap-1 mt-6 mb-4">
                  <span className="text-6xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-muted-foreground text-xl mb-3">
                      {plan.period}
                    </span>
                  )}
                </div>
                <CardDescription className="text-lg leading-relaxed">
                  {plan.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8 relative z-10">
                {/* Features List */}
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4 group">
                      <Check className={`h-5 w-5 flex-shrink-0 mt-1 transition-colors duration-300 ${
                        plan.popular ? 'text-primary group-hover:text-lime' : 'text-secondary group-hover:text-primary'
                      }`} />
                      <span className="text-foreground font-medium leading-relaxed group-hover:text-primary transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  onClick={plan.action}
                  size="lg"
                  className={`w-full mt-8 font-bold text-lg py-6 transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-pink via-primary to-lime text-white hover:scale-105 hover:shadow-xl' 
                      : 'bg-gradient-to-r from-lime to-secondary text-text-light hover:scale-105 hover:shadow-xl'
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-border/30">
            <p className="text-muted-foreground text-lg">
              All plans include access to <span className="font-semibold text-foreground">ChatGPT, Claude, and Gemini</span> integrations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};