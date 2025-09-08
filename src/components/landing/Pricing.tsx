import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Pricing = () => {
  const freeFeatures = ["3 continuity handoffs total (one-time trial)", "WOW Events Capture", "Includes ZeroMeter (live token gauge)", "Checkpoints & basic privacy", "No credit card required"];
  const proFeatures = ["Unlimited handoffs (Fair-Use applies: 20/hour · 500/month)", "WOW Events Capture", "Faster recap engine", "Includes ZeroMeter (live token gauge)", "Early access to Auto-Prompt & AI Detox (when released)", "Priority support"];
  const enterpriseFeatures = ["Pay only when you need it", "One handoff includes the curated WOW Events", "Includes ZeroMeter (live token gauge)", "Same continuity quality as Pro, no subscription"];
  return <section id="pricing" className="py-32 bg-gradient-to-br from-lime/15 via-pink/10 to-lavender/15 relative overflow-hidden">
      {/* Enhanced decorative background elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-to-br from-pink/40 to-lime/35 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/35 to-lavender/40 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-lavender/30 to-pink/25 rounded-full blur-2xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-10 right-20 w-48 h-48 bg-gradient-to-br from-pink/45 to-lime/30 rounded-full blur-2xl animate-bounce" style={{
      animationDelay: '3s'
    }}></div>
      <div className="absolute bottom-10 left-20 w-64 h-64 bg-gradient-to-br from-lime/35 to-lavender/25 rounded-full blur-3xl animate-pulse" style={{
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
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-lime/30 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-lime/40 group-hover:border-lime/50 group-hover:from-white/95 group-hover:to-white/80 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-lime/60 to-lime/40 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-lime/30 border-2 border-lime/50 group-hover:shadow-2xl group-hover:shadow-lime/50">
                  <span className="text-3xl font-bold text-white">F</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Free (Trial)</h3>
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
              
              <Button 
                onClick={() => window.location.href = '/install'}
                variant="brand-outline" 
                size="lg" 
                className="w-full bg-white text-gray-900 border-2 border-lime hover:bg-lime hover:text-white hover:shadow-xl hover:shadow-lime/30 transition-all duration-300 font-semibold"
              >
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
            
            <div className="relative p-8 pt-12 rounded-3xl bg-gradient-to-br from-pink/10 via-lime/5 to-lavender/10 border-2 border-gradient-to-r border-pink/40 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink/40 group-hover:border-pink/60 group-hover:from-pink/15 group-hover:via-lime/10 group-hover:to-lavender/15 h-full">
              <div className="text-center mb-8">
                <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-pink via-lime to-lavender rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-pink/40 border-2 border-pink/60 group-hover:shadow-2xl group-hover:shadow-pink/60">
                  <span className="text-4xl font-bold text-white">P</span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">Pro</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors text-lg">For power users</p>
                <div className="text-6xl font-bold bg-gradient-to-r from-pink to-lime bg-clip-text text-transparent mb-2">$9.99</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">per month</p>
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
              
              <Button 
                onClick={() => window.location.href = '/pro'}
                size="lg" 
                className="w-full bg-gradient-to-r from-pink to-lime text-white font-bold text-lg hover:from-pink/90 hover:to-lime/90 hover:scale-105 hover:shadow-2xl hover:shadow-pink/40 active:scale-95 transition-all duration-300 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:-skew-x-12 before:translate-x-[-100%] hover:before:translate-x-[200%] before:transition-transform before:duration-600"
              >
                Upgrade to Pro →
              </Button>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink/5 via-transparent to-lime/5 animate-pulse"></div>
            </div>
          </div>

          {/* Lite PAYG Plan */}
          <div className="group transform transition-all duration-500 hover:scale-105 animate-fade-in lg:mt-8" style={{ animationDelay: '0.2s' }}>
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/90 to-white/70 border-2 border-lavender/30 backdrop-blur-xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-lavender/40 group-hover:border-lavender/50 group-hover:from-white/95 group-hover:to-white/80 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-lavender/60 to-lavender/40 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-lavender/30 border-2 border-lavender/50 group-hover:shadow-2xl group-hover:shadow-lavender/50">
                  <span className="text-3xl font-bold text-white">L</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-lavender transition-colors">Lite PAYG</h3>
                <p className="text-muted-foreground mb-6 group-hover:text-foreground/80 transition-colors">For occasional use</p>
                <div className="text-4xl font-bold text-lavender mb-2">$2.99</div>
                <p className="text-muted-foreground text-sm group-hover:text-foreground/70 transition-colors">per handoff</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-foreground/80 group-hover:text-foreground transition-colors">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-lavender/20 rounded-full flex items-center justify-center border border-lavender/30">
                      <CheckCircle className="w-4 h-4 text-lavender" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => window.location.href = '/lite'}
                size="lg" 
                className="w-full bg-white text-lavender border-2 border-lavender hover:bg-lavender hover:text-white hover:shadow-xl hover:shadow-lavender/30 transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
              >
                Buy a credit →
              </Button>

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};