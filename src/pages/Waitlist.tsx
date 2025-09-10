import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, Users, Gem, Share, Linkedin } from "lucide-react";

// TypeScript workaround for outdated Supabase types
const rpc = (name: string, args?: any) => (supabase as any).rpc(name, args);
const invokeFn = (name: string, payload: any) => (supabase as any).functions.invoke(name, {
  body: payload
});

// Custom hook for founder claimed with polling
const useFounderClaimed = () => {
  const [claimed, setClaimed] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const fetchClaimed = async () => {
    try {
      if (abortControllerRef.current) abortControllerRef.current.abort();
      abortControllerRef.current = new AbortController();
      const {
        data,
        error
      } = await rpc('get_founder_claimed');
      if (!error && typeof data === 'number') {
        setClaimed(data);
        setIsLoading(false);
        console.log('Founder claimed updated:', data); // Debug log
      }
    } catch (err) {
      console.error('Founder counter failed:', err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchClaimed();
    intervalRef.current = setInterval(fetchClaimed, 15000); // Reduced to 15s for more frequent updates

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);
  return {
    claimed,
    isLoading
  };
};

// Founding Ribbon Component
const FoundingRibbon = ({
  claimed
}: {
  claimed: number | null;
}) => {
  const isOver5000 = typeof claimed === 'number' && claimed > 5000;
  return <div className="mx-auto mt-6 w-full max-w-4xl px-4" aria-live="polite">
      <div className={`text-center font-display rounded-2xl border px-8 py-6 shadow-2xl transition-all duration-700 backdrop-blur-3xl bg-gradient-to-br from-background/20 via-card/30 to-background/20 border-white/20 hover:bg-gradient-to-br hover:from-lime/10 hover:via-pink/5 hover:to-lime/10 hover:border-lime/30 hover:shadow-[0_0_40px_rgba(193,255,114,0.3)] hover:scale-[1.02] ${isOver5000 ? 'text-red-600 dark:text-red-400' : 'text-foreground'} relative before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:via-transparent before:to-pink/5 before:p-[1px] before:-z-10`}>
        {isOver5000 ? <div className="space-y-2">
              <div className="text-2xl font-bold">🚀 Founding 5,000 REACHED!</div>
              <div className="text-lg">Priority Wave opening soon • <span className="font-black text-xl text-lime">{claimed?.toLocaleString()}</span>/5,000 claimed</div>
            </div> : <div className="space-y-2">
              <div className="text-2xl font-bold">💎 Founding 5,000</div>
              <div className="text-lg text-muted-foreground">3 months Pro at launch • <span className="font-black text-xl text-lime">{claimed?.toLocaleString() ?? 0}</span>/5,000 claimed</div>
            </div>}
      </div>
    </div>;
};

// Progress Meter Component  
const FounderMeter = ({
  claimed,
  total = 5000
}: {
  claimed: number | null;
  total?: number;
}) => {
  const percentage = claimed && claimed > 0 ? Math.min((claimed / total) * 100, 100) : 0;
  return <div className="mx-auto mt-8 w-full max-w-4xl px-4">
      <div className="space-y-6">
        <div className="flex justify-between text-lg font-display font-semibold text-foreground">
          <span className="text-foreground">
            {claimed?.toLocaleString() ?? 0} of {total.toLocaleString()} claimed
          </span>
          <span className="text-lime font-bold">
            {percentage < 1 ? percentage.toFixed(2) : percentage.toFixed(1)}%
          </span>
        </div>
        <div className="relative">
          <Progress value={percentage} className="h-6 relative overflow-hidden rounded-full bg-muted/30 backdrop-blur-sm border border-border/50 shadow-inner transition-all duration-1000 hover:shadow-lg" role="progressbar" aria-valuenow={claimed ?? 0} aria-valuemin={0} aria-valuemax={total} />
          {/* Animated glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-lime/10 to-transparent animate-pulse pointer-events-none"></div>
        </div>
        <div className="text-center">
          <p className="text-sm text-muted-foreground font-display">
            Real-time counter • Updates every 15 seconds
          </p>
        </div>
      </div>
    </div>;
};
const Waitlist = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);
  const [copyStatus, setCopyStatus] = useState<string>("");
  const referredBy = searchParams.get("ref");

  // Robust param reading with fallback
  const sp = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const offer = (searchParams.get('offer') || sp.get('offer') || 'zt3m').trim().toLowerCase(); // Default to zt3m
  const src = (searchParams.get('src') || sp.get('src') || '').trim();
  const utm_source = (searchParams.get('utm_source') || sp.get('utm_source') || '').trim();
  const utm_campaign = (searchParams.get('utm_campaign') || sp.get('utm_campaign') || '').trim();
  const utm_content = (searchParams.get('utm_content') || sp.get('utm_content') || '').trim();
  const {
    claimed: founderClaimed,
    isLoading: founderLoading
  } = useFounderClaimed();
  useEffect(() => {
    fetchWaitlistCount();
  }, []);
  const fetchWaitlistCount = async () => {
    try {
      const {
        data,
        error
      } = await rpc('get_waitlist_count');
      if (!error && typeof data === 'number') setWaitlistCount(data);
    } catch (err) {
      console.error('Failed to fetch waitlist count:', err);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }
    setIsSubmitting(true);
    try {
      // Use RPC for idempotent server-side logic
      const {
        data,
        error
      } = await rpc('create_waitlist', {
        p_email: email.trim(),
        p_referred_by: referredBy
      });
      if (error) throw error;
      const row = Array.isArray(data) ? data[0] as any : null;
      if (row?.out_referral_code) {
        setReferralCode(row.out_referral_code);
        setIsSubmitted(true);
        toast.success("You're on the waitlist!");
        await fetchWaitlistCount();
        // Write campaign metadata (best-effort, non-blocking)
        try {
          await rpc('update_waitlist_meta', {
            p_email: email.trim(),
            p_offer: offer || null,
            p_source: src || null,
            p_utm_source: utm_source || null,
            p_utm_campaign: utm_campaign || null,
            p_utm_content: utm_content || null
          });
        } catch {}
        // Fire-and-forget welcome email
        try {
          await invokeFn('waitlist_send_welcome', {
            email: email.trim(),
            referral_code: row.out_referral_code
          });
        } catch {}
      }
    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      toast.error(error.message || "Failed to join waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const copyReferralLink = () => {
    const link = `https://zerotoken.ai/waitlist?ref=${referralCode}`;
    navigator.clipboard.writeText(link);
    setCopyStatus("Copied!");
    toast.success("Referral link copied!");
    setTimeout(() => setCopyStatus(""), 1500);
  };
  if (isSubmitted) {
    return <div className="min-h-screen bg-lavender">
        <Meta title="You're on the list! - ZeroToken Waitlist" description="Successfully joined the ZeroToken waitlist. Share your referral link to unlock bonus features." canonicalPath="/waitlist" />
        <Header />
        
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-lime to-lime/80 rounded-full flex items-center justify-center animate-bounce-gentle">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  You're on the list!
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto font-display">
                  Get ready for something extraordinary. We'll notify you as soon as ZeroToken launches.
                </p>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-2xl border border-border/30 rounded-2xl p-8 space-y-6 shadow-xl">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-display font-bold text-foreground">
                    Congratulations! 🎉
                  </h3>
                  <div className="p-6 bg-gradient-to-br from-lime/10 via-card/20 to-card/30 rounded-2xl border border-lime/20 backdrop-blur-xl">
                    <p className="text-lg font-semibold font-display text-foreground mb-2">
                      You're in the Founding 5,000!
                    </p>
                    <p className="text-muted-foreground font-display">
                      As one of our first 5,000 members, you'll receive <span className="font-bold text-[#ff66c4]">3 months of ZeroToken Pro</span> completely free when we launch.
                    </p>
                    {typeof founderClaimed === 'number' && founderClaimed > 5000 && <p className="text-muted-foreground font-display mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                        🚀 You're queued for the <span className="font-semibold text-red-600 dark:text-red-400">Priority Wave</span>. We'll notify you the moment we go live!
                      </p>}
                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </main>
        
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-lavender">
      <Meta title="Join the ZeroToken Waitlist" description="Be among the first 5,000 members and unlock 3 months ZeroToken Pro free at launch. Founding member benefits included." canonicalPath="/waitlist" />
      <Header />
      
      {/* Always show Founding Ribbon and Progress Meter */}
      {founderLoading ? <div className="mx-auto mt-6 w-full max-w-4xl px-4">
          <div className="bg-gradient-to-r from-muted/30 to-muted/50 h-12 rounded-xl animate-pulse backdrop-blur-sm border border-muted/20"></div>
          <div className="mt-6 space-y-3">
            <div className="bg-gradient-to-r from-muted/20 to-muted/40 h-5 rounded animate-pulse"></div>
            <div className="bg-gradient-to-r from-muted/30 to-muted/50 h-4 rounded animate-pulse border border-muted/20"></div>
          </div>
        </div> : <>
          <FoundingRibbon claimed={founderClaimed} />
          <FounderMeter claimed={founderClaimed} />
        </>}
      
      <main className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink/20 via-lime/20 to-lavender/20 rounded-full blur-3xl animate-pulse"></div>
              <img src="/lovable-uploads/fae4b52f-ca68-4783-acf7-f8ca0bc7856c.png" alt="ZeroToken Cross Logo" style={{
              filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.4)) drop-shadow(0 0 40px rgba(193,255,114,0.3))'
            }} className="relative w-36 h-27 mx-auto hue-rotate-" />
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground animate-fade-in-up lg:text-7xl">
                Join the ZeroToken Waitlist
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                Be among the first 5,000 members and unlock <span className="font-semibold text-lime">3 months ZeroToken Pro</span> free at launch.
              </p>
            </div>
          </div>

          {/* Form Section with Enhanced Glass Effect */}
          <div className="relative bg-gradient-to-br from-card/20 via-card/10 to-card/20 backdrop-blur-3xl border border-white/20 rounded-3xl p-8 md:p-12 space-y-8 shadow-[0_8px_32px_rgba(31,38,135,0.37),0_0_1px_rgba(255,255,255,0.4)_inset,0_0_60px_rgba(193,255,114,0.1)_inset] animate-scale-in before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/10 before:via-transparent before:to-pink/5 before:p-[1px] before:-z-10 before:backdrop-blur-sm hover:shadow-[0_12px_40px_rgba(31,38,135,0.5),0_0_80px_rgba(193,255,114,0.15)_inset] hover:scale-[1.02] transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-14 text-lg bg-background/60 border-border/50 focus:border-lime focus:ring-lime/20 rounded-xl px-6 backdrop-blur-sm shadow-inner hover:bg-background/80 transition-all duration-300" disabled={isSubmitting} />
                
                <Button type="submit" disabled={isSubmitting} size="xl" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-pink to-lime text-white rounded-xl hover:shadow-2xl hover:shadow-lime/30 hover:scale-105 transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed hover:from-pink/90 hover:to-lime/90">
                  {isSubmitting ? <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Joining the Founding 5,000...</span>
                    </div> : "Join the Founding 5,000"}
                </Button>
              </div>
            </form>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground font-display">
                Join the first 5,000 members and unlock <span className="font-semibold text-lime">3 months ZeroToken Pro</span> free.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                
                
              </div>
            </div>
          </div>

          {/* Benefits with Clean Design */}
          <div className="grid gap-4 md:gap-6 text-left max-w-lg mx-auto">
            {["First 5,000 founding members", "3 months ZeroToken Pro free", "Exclusive Founding Badge", "Priority launch access"].map((benefit, index) => <div key={index} className="group flex items-center space-x-3 p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/20 animate-fade-in-up hover:bg-card/50 hover:border-border/40 hover:shadow-lg transition-all duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CheckCircle className="w-5 h-5 text-lime shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 font-display">{benefit}</span>
              </div>)}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Waitlist;