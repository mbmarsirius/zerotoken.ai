import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Pricing = () => {
  const navigate = useNavigate();
  const freeFeatures = ["3 continuity handoffs total (one-time trial)", "WOW Events Capture", "Includes ZeroMeter (live token gauge)", "Checkpoints & basic privacy", "No credit card required"];
  const proFeatures = ["Unlimited handoffs (Fair-Use applies: 20/hour · 500/month)", "WOW Events Capture", "Faster recap engine", "Includes ZeroMeter (live token gauge)", "Early access to Auto-Prompt & AI Detox (when released)", "Priority support"];
  const enterpriseFeatures = ["Pay only when you need it", "One handoff includes the curated WOW Events", "Includes ZeroMeter (live token gauge)", "Same continuity quality as Pro, no subscription"];
  return <section id="pricing" className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Simple pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready for advanced features
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 lg:gap-6">
          {/* Free Plan */}
          <div className="lg:mt-8">
            <div className="relative p-8 rounded-2xl bg-lime/10 backdrop-blur-xl border border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 transition-all duration-500 h-full before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-lavender/30 to-lavender/20 backdrop-blur-lg rounded-xl flex items-center justify-center border border-lavender/40 shadow-lg shadow-lavender/25 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-lavender/20 before:to-transparent before:opacity-100 before:transition-all before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/30 after:to-transparent after:opacity-60">
                  <span className="text-2xl font-bold text-lavender relative z-10">F</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free (Trial)</h3>
                <p className="text-gray-600 mb-6">Perfect for getting started</p>
                <div className="text-5xl font-bold text-gray-900 mb-2">$0</div>
                <p className="text-gray-500 text-sm">Forever free</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {freeFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => navigate('/install')}
                size="lg" 
                className="w-full relative bg-gradient-to-br from-lime/80 to-lime backdrop-blur-lg text-ink border border-lime/30 hover:from-lime hover:to-lime/90 hover:shadow-2xl hover:shadow-lime/40 hover:scale-105 transition-all duration-500 font-semibold overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Get Started Free</span>
              </Button>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative lg:scale-105">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-pink/90 to-pink backdrop-blur-lg text-white text-sm font-semibold px-4 py-2 rounded-full shadow-xl shadow-pink/40 border border-pink/30 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000">
                <span className="relative z-10">Most Popular</span>
              </div>
            </div>
            
            <div className="relative p-8 pt-12 rounded-2xl bg-pink/15 backdrop-blur-xl border-2 border-pink/60 hover:bg-pink/25 hover:shadow-3xl hover:shadow-pink/50 hover:border-pink/80 transition-all duration-500 h-full before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-pink/15 before:via-lime/5 before:to-lavender/10 before:opacity-100 hover:before:opacity-100 hover:before:from-pink/25 hover:before:via-lime/10 hover:before:to-lavender/15 before:transition-all before:duration-500 after:absolute after:inset-0 after:rounded-2xl after:bg-gradient-to-tr after:from-transparent after:via-white/20 after:to-transparent after:opacity-100 hover:after:opacity-100 hover:after:via-white/30 after:transition-all after:duration-500 shadow-xl shadow-pink/25">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-lime/30 to-lime/20 backdrop-blur-lg rounded-xl flex items-center justify-center border border-lime/40 shadow-lg shadow-lime/25 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-lime/20 before:to-transparent before:opacity-100 before:transition-all before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/30 after:to-transparent after:opacity-60">
                  <span className="text-3xl font-bold text-lime relative z-10">P</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600 mb-6 text-lg">For power users</p>
                <div className="text-6xl font-bold text-gray-900 mb-2">$9.99</div>
                <p className="text-gray-500 text-sm">per month</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => navigate('/pro')}
                size="lg" 
                className="w-full relative bg-gradient-to-br from-pink/90 to-pink backdrop-blur-lg text-white border border-pink/30 hover:from-pink hover:to-pink/80 hover:shadow-2xl hover:shadow-pink/50 hover:scale-105 transition-all duration-500 font-bold text-lg overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Upgrade to Pro →</span>
              </Button>
            </div>
          </div>

          {/* Lite PAYG Plan */}
          <div className="lg:mt-8">
            <div className="relative p-8 rounded-2xl bg-lavender/10 backdrop-blur-xl border border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 transition-all duration-500 h-full before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink/30 to-pink/20 backdrop-blur-lg rounded-xl flex items-center justify-center border border-pink/40 shadow-lg shadow-pink/25 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:from-pink/20 before:to-transparent before:opacity-100 before:transition-all before:duration-500 after:absolute after:inset-0 after:bg-gradient-to-tr after:from-transparent after:via-white/30 after:to-transparent after:opacity-60">
                  <span className="text-2xl font-bold text-pink relative z-10">L</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Lite PAYG</h3>
                <p className="text-gray-600 mb-6">For occasional use</p>
                <div className="text-4xl font-bold text-gray-900 mb-2">$2.99</div>
                <p className="text-gray-500 text-sm">per handoff</p>
              </div>
              
              <ul className="space-y-4 mb-8 min-h-[240px]">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="w-6 h-6 mr-3 flex-shrink-0 mt-0.5 bg-gray-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-gray-600" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={() => navigate('/lite')}
                size="lg" 
                className="w-full relative bg-gradient-to-br from-lavender/80 to-lavender backdrop-blur-lg text-ink border border-lavender/30 hover:from-lavender hover:to-lavender/90 hover:shadow-2xl hover:shadow-lavender/40 hover:scale-105 transition-all duration-500 font-semibold overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700"
              >
                <span className="relative z-10">Buy a credit →</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
};