import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Pricing plans data
const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'Forever free',
    description: '3 continuity handoffs total (one-time trial)',
    features: ['WOW Events Capture', 'Basic functionality', 'Chrome Web Store'],
    buttonText: 'Install from Chrome Web Store',
    buttonId: 'btn-free',
    isPopular: false
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Unlimited handoffs (Fair‑Use: 20/hour · 500/month)',
    features: ['Unlimited handoffs', 'Priority support', 'Advanced features', 'Analytics dashboard'],
    buttonText: 'Subscribe to Pro',
    buttonId: 'btn-pro',
    isPopular: true
  },
  {
    id: 'lite',
    name: 'Lite PAYG',
    price: '$2.99',
    period: 'per handoff',
    description: 'Pay only when you need it',
    features: ['Includes curated WOW Events', 'Pay per use', 'No monthly commitment', 'Premium support'],
    buttonText: 'Buy Lite PAYG',
    buttonId: 'btn-lite',
    isPopular: false
  }
];
const Waitlist = () => {
  return (
    <div className="min-h-screen bg-lavender">
      <Meta 
        title="ZeroToken – Simple pricing" 
        description="Install free from the Chrome Web Store, or upgrade to Pro. Lite PAYG available." 
        canonicalPath="/waitlist" 
      />
      <Header />
      
      <main className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-16">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink/20 via-lime/20 to-lavender/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/fae4b52f-ca68-4783-acf7-f8ca0bc7856c.png" 
                alt="ZeroToken Cross Logo" 
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.4)) drop-shadow(0 0 40px rgba(193,255,114,0.3))'
                }} 
                className="relative w-36 h-27 mx-auto" 
              />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground animate-fade-in-up lg:text-7xl">
                Simple pricing
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                Choose the plan that works for you. From free trial to unlimited handoffs.
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative bg-gradient-to-br from-card/20 via-card/10 to-card/20 backdrop-blur-3xl border rounded-3xl p-8 space-y-8 shadow-[0_8px_32px_rgba(31,38,135,0.37),0_0_1px_rgba(255,255,255,0.4)_inset,0_0_60px_rgba(193,255,114,0.1)_inset] animate-scale-in hover:shadow-[0_12px_40px_rgba(31,38,135,0.5),0_0_80px_rgba(193,255,114,0.15)_inset] hover:scale-[1.02] transition-all duration-500 ${
                  plan.isPopular 
                    ? 'border-lime/50 bg-gradient-to-br from-lime/25 via-pink/15 to-lime/20 shadow-[0_0_40px_rgba(193,255,114,0.3)] hover:shadow-[0_0_80px_rgba(193,255,114,0.5)]' 
                    : 'border-white/20'
                } before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-pink/5 before:p-[1px] before:-z-10 before:backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink to-lime text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-display font-bold text-foreground">{plan.name}</h3>
                    <div className="mt-2">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-muted-foreground mt-2 font-display">{plan.description}</p>
                  </div>
                  
                  <Button
                    id={plan.buttonId}
                    onClick={plan.id === 'free' ? () => window.open('https://chromewebstore.google.com/detail/alhbkpcjielfigjdioeieajichhknmpp', '_blank') : undefined}
                    className={`w-full h-12 font-bold rounded-xl transition-all duration-300 ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-pink to-lime text-white hover:shadow-2xl hover:shadow-lime/30 hover:scale-105 border-0'
                        : 'bg-background/60 border border-border/50 text-foreground hover:bg-background/80 hover:border-border'
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime shrink-0" />
                      <span className="text-muted-foreground font-display">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
      
      {/* Inline JavaScript for Stripe Checkout */}
      <script dangerouslySetInnerHTML={{
        __html: `
const SUPABASE_URL = "https://ppvergvfxththbwtjsmu.supabase.co";
const ANON = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwdmVyZ3ZmeHRodGhid3Rqc211Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYxODk0MjAsImV4cCI6MjA3MTc2NTQyMH0.GAgKvepBkOaPjFi9i462AGc007dWG-uefj94iw_EgoI";

async function checkout(sku){
  try{
    const res = await fetch(\`\${SUPABASE_URL}/functions/v1/stripe_create_checkout\`, {
      method: "POST",
      headers: { "content-type":"application/json", "authorization":\`Bearer \${ANON}\`, "apikey": ANON },
      body: JSON.stringify({ sku }) // "zt_pro_monthly" or "zt_lite_payg"
    });
    const j = await res.json().catch(()=>null);
    if (j && j.url) { location.href = j.url; return; }
  }catch(e){}
  // Fallback: pricing page stays same; show brief alert to user
  alert("Checkout açılırken bir sorun oldu. Lütfen tekrar deneyin.");
}

// Button event listeners
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("btn-pro")?.addEventListener("click", ()=> checkout("zt_pro_monthly"));
  document.getElementById("btn-lite")?.addEventListener("click", ()=> checkout("zt_lite_payg"));
});
        `
      }} />
    </div>
  );
};
export default Waitlist;