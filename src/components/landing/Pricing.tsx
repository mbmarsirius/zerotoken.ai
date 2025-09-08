import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export const Pricing = () => {
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
            <div className="relative p-8 rounded-2xl bg-white border border-lime/20 hover:shadow-lg hover:shadow-lime/10 hover:border-lime/40 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">F</span>
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
                onClick={() => window.location.href = '/install'}
                size="lg" 
                className="w-full bg-lime text-ink hover:bg-lime/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-lime/30"
              >
                Get Started Free
              </Button>
            </div>
          </div>

          {/* Pro Plan - Featured */}
          <div className="relative lg:scale-105">
            {/* Popular badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-pink text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg shadow-pink/30">
                Most Popular
              </div>
            </div>
            
            <div className="relative p-8 pt-12 rounded-2xl bg-white border-2 border-pink hover:shadow-xl hover:shadow-pink/20 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">P</span>
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
                onClick={() => window.location.href = '/pro'}
                size="lg" 
                className="w-full bg-pink text-white font-bold text-lg hover:bg-pink/90 transition-all duration-300 hover:shadow-lg hover:shadow-pink/30"
              >
                Upgrade to Pro →
              </Button>
            </div>
          </div>

          {/* Lite PAYG Plan */}
          <div className="lg:mt-8">
            <div className="relative p-8 rounded-2xl bg-white border border-lavender/20 hover:shadow-lg hover:shadow-lavender/10 hover:border-lavender/40 transition-all duration-300 h-full">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">L</span>
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
                onClick={() => window.location.href = '/lite'}
                size="lg" 
                className="w-full bg-lavender text-ink hover:bg-lavender/90 transition-all duration-300 font-semibold hover:shadow-lg hover:shadow-lavender/30"
              >
                Buy a credit →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};