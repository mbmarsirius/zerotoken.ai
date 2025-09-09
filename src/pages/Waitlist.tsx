import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, Users, Gem, Share } from "lucide-react";

// TypeScript workaround for outdated Supabase types
const rpc = (name: string, args?: any) => (supabase as any).rpc(name, args);
const invokeFn = (name: string, payload: any) => (supabase as any).functions.invoke(name, { body: payload });
const Waitlist = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);
  
  const referredBy = searchParams.get("ref");
  
  // Robust param reading with fallback
  const sp = typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams();
  const offer = (searchParams.get('offer') || sp.get('offer') || '').trim().toLowerCase();
  const src = (searchParams.get('src') || sp.get('src') || '').trim();
  const utm_source = (searchParams.get('utm_source') || sp.get('utm_source') || '').trim();
  const utm_campaign = (searchParams.get('utm_campaign') || sp.get('utm_campaign') || '').trim();
  const utm_content = (searchParams.get('utm_content') || sp.get('utm_content') || '').trim();
  
  const [founderClaimed, setFounderClaimed] = useState<number | null>(null);
  useEffect(() => {
    fetchWaitlistCount();
    if (offer === 'zt3m') fetchFounderCount();
  }, []);
  const fetchWaitlistCount = async () => {
    try {
      const { data, error } = await rpc('get_waitlist_count');
      if (!error && typeof data === 'number') setWaitlistCount(data);
    } catch (err) {
      console.error('Failed to fetch waitlist count:', err);
    }
  };

  const fetchFounderCount = async () => {
    try{
      const { data, error } = await rpc('get_founder_claimed');
      if (!error && typeof data === 'number') setFounderClaimed(data);
    }catch(err){ console.error('Founder counter failed:', err); }
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
      const { data, error } = await rpc('create_waitlist', {
        p_email: email.trim(),
        p_referred_by: referredBy,
      });
      if (error) throw error;
      const row = Array.isArray(data) ? (data[0] as any) : null;
      if (row?.out_referral_code) {
        setReferralCode(row.out_referral_code);
        setIsSubmitted(true);
        toast.success("You're on the waitlist!");
        await fetchWaitlistCount();
        // Write campaign metadata (best-effort, non-blocking)
        try{
          await rpc('update_waitlist_meta', {
            p_email: email.trim(),
            p_offer: offer || null,
            p_source: src || null,
            p_utm_source: utm_source || null,
            p_utm_campaign: utm_campaign || null,
            p_utm_content: utm_content || null,
          });
        }catch{}
        // Fire-and-forget welcome email
        try {
          await invokeFn('waitlist_send_welcome', {
            email: email.trim(), 
            referral_code: row.out_referral_code
          });
        } catch {}
        if (offer === 'zt3m') fetchFounderCount();
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
    toast.success("Referral link copied!");
  };
  if (isSubmitted) {
    return <div className="min-h-screen bg-lavender">
        <Meta title="You're on the list! - ZeroToken Waitlist" description="Successfully joined the ZeroToken waitlist. Share your referral link to unlock bonus features." canonicalPath="/waitlist" />
        <Header />
        
        <main className="min-h-screen flex items-center justify-center px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-lime to-pink rounded-full flex items-center justify-center animate-bounce-gentle">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-pink via-lime to-lavender bg-clip-text text-transparent">
                  You're on the list!
                </h1>
                <p className="text-xl text-muted-foreground max-w-xl mx-auto">
                  Get ready for something extraordinary. We'll notify you as soon as ZeroToken launches.
                </p>
              </div>
            </div>

            <div className="bg-card/60 backdrop-blur-xl border border-pink/20 rounded-2xl p-8 space-y-6 shadow-2xl">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-semibold text-foreground">
                  Share your referral link
                </h3>
                <p className="text-muted-foreground">
                  Invite 3 friends and unlock <span className="font-semibold text-lime">3 months Pro</span> when we launch
                </p>
                {offer === 'zt3m' && (
                  <p className="text-muted-foreground">
                    <span className="font-semibold">You unlocked 3 months of Pro at launch.</span>
                    {typeof founderClaimed === 'number' && founderClaimed > 5000 && (
                      <> You’re queued for the <span className="font-semibold">Priority Wave</span>. We’ll notify you the moment we go live on the Chrome Web Store.</>
                    )}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-4 bg-muted/50 rounded-xl border border-border/50 font-mono text-sm text-muted-foreground break-all">
                  zerotoken.ai/waitlist?ref={referralCode}
                </div>
                <Button onClick={copyReferralLink} variant="outline" className="shrink-0 bg-gradient-to-r from-pink to-lime text-white border-0 hover:scale-105 transition-all duration-300">
                  <Share className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("I joined ZeroToken’s Founding 5000 — 3 months Pro on launch!")}&url=${encodeURIComponent(`https://zerotoken.ai/waitlist?ref=${referralCode}`)}`}
                  target="_blank" rel="noopener"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-xl bg-sky-400 text-black font-semibold hover:opacity-90"
                >Tweet</a>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Users className="w-5 h-5" />
              <span>{waitlistCount.toLocaleString()} people are waiting</span>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>;
  }
  return <div className="min-h-screen bg-lavender">
      <Meta title="Join the ZeroToken Waitlist" description="Be among the first to experience ZeroToken. Get 1 month Pro + Founding Member badge when we launch." canonicalPath="/waitlist" />
      <Header />
      {offer === 'zt3m' && (
        <div className="mx-auto mt-6 w-full max-w-4xl px-4">
          <div
            className="text-center text-sm font-semibold rounded-xl border px-4 py-2 shadow"
            style={{
              background: typeof founderClaimed === 'number' && founderClaimed > 5000 ? 'rgba(239,68,68,.15)' : 'rgba(161, 196, 253, .15)',
              borderColor: typeof founderClaimed === 'number' && founderClaimed > 5000 ? 'rgba(239,68,68,.45)' : 'rgba(255,255,255,.2)'
            }}
          >
            {typeof founderClaimed === 'number' && founderClaimed > 5000
              ? <>Founding 5,000 reached — Priority Wave opening soon. <span className="font-bold">{founderClaimed.toLocaleString()}</span>/5,000 claimed</>
              : <>Founding 5,000 — 3 months Pro at launch. <span className="font-bold">{(founderClaimed ?? 0).toLocaleString()}</span>/5,000 claimed</>}
          </div>
        </div>
      )}
      
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
              <h1 className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-pink via-lime to-lavender bg-clip-text text-transparent animate-fade-in-up lg:text-7xl">
                Join the ZeroToken Waitlist
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                Be among the first. Get <span className="font-semibold text-lime">1 month Pro + Founding Member badge</span> when we launch.
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="relative bg-gradient-to-br from-white/10 via-white/5 to-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 md:p-12 space-y-8 shadow-[0_8px_32px_rgba(31,38,135,0.37),0_0_1px_rgba(255,255,255,0.4)_inset,0_0_60px_rgba(255,255,255,0.1)_inset] animate-scale-in before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-pink/10 before:p-[1px] before:-z-10 before:backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input type="email" placeholder="Enter your email address" value={email} onChange={e => setEmail(e.target.value)} className="h-14 text-lg bg-background/50 border-border/50 focus:border-pink focus:ring-pink/20 rounded-xl px-6" disabled={isSubmitting} />
                
                <Button type="submit" disabled={isSubmitting} size="xl" className="w-full h-14 text-lg font-bold bg-gradient-to-r from-pink to-lime text-white rounded-xl hover:shadow-2xl hover:shadow-pink/30 hover:scale-105 transition-all duration-300 border-0 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Joining...</span>
                    </div> : "Join the Waitlist"}
                </Button>
              </div>
            </form>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Invite 3 friends and unlock <span className="font-semibold text-lime">3 months Pro</span>.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4" />
                <span className="text-sm">Currently {waitlistCount.toLocaleString()} people are waiting...</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid gap-4 md:gap-6 text-left max-w-lg mx-auto">
            {["Early access to ZeroToken", "1 month Pro subscription free", "Exclusive Founding Member badge", "Priority support & feedback channel"].map((benefit, index) => <div key={index} className="flex items-center space-x-3 p-4 bg-card/40 backdrop-blur-sm rounded-xl border border-border/30 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <CheckCircle className="w-5 h-5 text-lime shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </div>)}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Waitlist;