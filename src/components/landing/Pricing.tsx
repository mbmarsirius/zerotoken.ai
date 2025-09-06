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
  const freeFeatures = ["Basic memory monitoring", "Simple context refresh", "5 handoff reports per month", "Community support"];
  const proFeatures = ["Unlimited handoff reports", "Advanced AI Detox modes", "Auto-prompt engineering", "PDF export & email sharing", "Priority support", "Custom memory thresholds"];
  const enterpriseFeatures = ["Everything in Pro", "Custom AI model training", "White-label solution", "Advanced analytics dashboard", "Dedicated account manager", "24/7 phone support", "Custom integrations", "SLA guarantee"];
  return <section id="pricing" className="py-32 bg-gradient-to-br from-pink/25 via-pink/15 to-white relative overflow-hidden bg-cyan-300">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink/30 to-lime/25 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/25 to-pink/30 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink/20 to-transparent rounded-full blur-2xl"></div>
      <div className="absolute top-10 right-20 w-40 h-40 bg-gradient-to-br from-pink/35 to-transparent rounded-full blur-2xl animate-bounce" style={{
      animationDelay: '3s'
    }}></div>
      <div className="absolute bottom-10 left-20 w-60 h-60 bg-gradient-to-br from-lime/20 to-transparent rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '4s'
    }}></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Free Plan */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in lg:mt-8">
            <div className="relative p-8 rounded-3xl bg-glass-subtle border border-white/40 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-lime/20 group-hover:border-white/60 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lime/30 to-lime/10 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/30">
                  <span className="text-2xl font-bold text-lime">F</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Free</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors">Perfect for getting started</p>
                <div className="text-5xl font-bold text-lime mb-2">$0</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">Forever free</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-lime/20 rounded-full flex items-center justify-center border border-lime/30">
                      <CheckCircle className="w-4 h-4 text-lime" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost-modern" size="lg" className="w-full bg-pink/10 text-pink border border-pink/30 hover:bg-pink/30 hover:border-pink hover:text-white hover:shadow-lg hover:shadow-pink/25 active:bg-pink/40 active:scale-95 transition-all duration-300">
                Get Started Free
              </Button>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in relative lg:scale-110 lg:shadow-2xl" style={{ animationDelay: '0.1s' }}>
            {/* Popular badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-pink to-lime text-white text-sm font-semibold px-6 py-3 rounded-full shadow-xl animate-glow border border-white/20">
                <span className="relative">
                  Most Popular
                </span>
              </div>
            </div>
            
            <div className="relative p-8 pt-12 rounded-3xl bg-glass-premium border-2 border-primary/30 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:border-primary/50 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-pink to-lime rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/20">
                  <span className="text-3xl font-bold text-white">P</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Pro</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors text-lg">For power users</p>
                <div className="text-6xl font-bold bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent mb-2">$9</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">per month, billed monthly</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-gradient-to-br from-pink/30 to-lime/30 rounded-full flex items-center justify-center border border-pink/40">
                      <CheckCircle className="w-4 h-4 text-pink" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button onClick={handleUpgrade} variant="ghost-modern" size="lg" className="w-full font-semibold text-lg bg-lime/10 text-lime border border-lime/30 hover:bg-lime/40 hover:border-lime hover:text-white hover:shadow-lg hover:shadow-lime/25 active:bg-lime/50 active:scale-95 transition-all duration-300">
                Upgrade to Pro →
              </Button>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink/5 via-transparent to-lime/5 animate-pulse"></div>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in lg:mt-8" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-8 rounded-3xl bg-glass-subtle border border-white/40 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-purple/20 group-hover:border-white/60 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple/30 to-purple/10 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl border border-white/30">
                  <span className="text-2xl font-bold text-purple">E</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-purple transition-colors">Enterprise</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors">For large teams</p>
                <div className="text-4xl font-bold text-purple mb-2">Custom</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">Contact for pricing</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-purple/20 rounded-full flex items-center justify-center border border-purple/30">
                      <CheckCircle className="w-4 h-4 text-purple" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="ghost-modern" size="lg" className="w-full bg-lavender/10 text-lavender border border-lavender/30 hover:bg-lavender/30 hover:border-lavender hover:text-white hover:shadow-lg hover:shadow-lavender/25 active:bg-lavender/40 active:scale-95 transition-all duration-300">
                Contact Sales
              </Button>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};