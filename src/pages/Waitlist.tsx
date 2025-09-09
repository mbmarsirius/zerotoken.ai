import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, Users, Gem, Share, Zap, Crown, HeartHandshake, Headphones, Twitter, Linkedin, Shield } from "lucide-react";
const Waitlist = () => {
  const [searchParams] = useSearchParams();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [waitlistCount, setWaitlistCount] = useState(0);
  const referredBy = searchParams.get("ref");
  useEffect(() => {
    fetchWaitlistCount();
  }, []);
  const fetchWaitlistCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_waitlist_count');
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
      // Use secure RPC to avoid RLS issues and generate referral code server-side
      const { data, error } = await supabase.rpc('create_waitlist', {
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
        // Trigger welcome email (fire-and-forget)
        try {
          await supabase.functions.invoke('waitlist_send_welcome', {
            body: { email: email.trim(), referral_code: row.out_referral_code },
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
                  You're in! Share your referral link below 🎉
                </h3>
                <p className="text-muted-foreground">
                  Invite 3 friends and unlock <span className="font-semibold text-lime">3 months Pro</span> when we launch
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 p-4 bg-muted/50 rounded-xl border border-border/50 font-mono text-sm text-muted-foreground break-all">
                  zerotoken.ai/waitlist?ref={referralCode}
                </div>
                <Button onClick={copyReferralLink} variant="outline" className="shrink-0 bg-gradient-to-r from-pink to-lime text-white border-0 hover:scale-105 transition-all duration-300">
                  <Share className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
              </div>
              
              <div className="flex gap-3 justify-center">
                <Button
                  onClick={() => window.open(`https://twitter.com/intent/tweet?text=Just%20joined%20the%20@ZeroToken%20waitlist!%20🚀%20Join%20me%20and%20get%20early%20access%20plus%20exclusive%20rewards&url=https://zerotoken.ai/waitlist?ref=${referralCode}`, '_blank')}
                  variant="outline"
                  size="sm"
                  className="bg-black hover:bg-gray-800 text-white border-gray-600"
                >
                  <Twitter className="w-4 h-4 mr-2" />
                  Share on X
                </Button>
                <Button
                  onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=https://zerotoken.ai/waitlist?ref=${referralCode}`, '_blank')}
                  variant="outline"
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </Button>
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
                Join the ZeroToken Waitlist 🚀
              </h1>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink/20 to-lime/20 border border-pink/30 rounded-full text-sm font-semibold text-foreground animate-pulse">
                ⚡ Limited Founding Member spots available
              </div>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-up">
                Be among the first. Get <span className="font-bold text-lime bg-lime/10 px-2 py-1 rounded-lg">1 month Pro + Exclusive Founding Member badge</span> when we launch.
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
                    </div> : "Join the Waitlist 🚀"}
                </Button>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/70 bg-background/30 rounded-lg p-2">
                <Shield className="w-4 h-4" />
                <span>Privacy-first: Your email is safe. No spam.</span>
              </div>
            </form>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-pink/10 via-lime/5 to-lavender/10 border border-pink/20 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Gem className="w-5 h-5 text-lime" />
                  Referral Rewards
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/30">
                    <div className="w-8 h-8 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <span className="text-sm text-muted-foreground">Invite 3 friends → <span className="font-semibold text-lime">Get 3 months Pro</span></span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-background/50 rounded-lg border border-border/30">
                    <div className="w-8 h-8 bg-gradient-to-r from-lavender to-pink rounded-full flex items-center justify-center">
                      <Crown className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-muted-foreground">Invite 10 friends → <span className="font-semibold text-lavender">Earn Lifetime Founding Badge</span></span>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-muted-foreground bg-gradient-to-r from-pink/5 to-lime/5 border border-pink/10 rounded-xl p-3">
                <div className="text-2xl">🔥</div>
                <span className="font-semibold">1,247 already joined this week</span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid gap-4 md:gap-6 text-left max-w-lg mx-auto">
            {[
              { icon: Zap, text: "Early access to ZeroToken" },
              { icon: Crown, text: "1 month Pro subscription free" },
              { icon: Gem, text: "Exclusive Founding Member badge" },
              { icon: Headphones, text: "Priority support & feedback channel" }
            ].map((benefit, index) => <div key={index} className="flex items-center space-x-3 p-4 bg-card/40 backdrop-blur-sm rounded-xl border border-border/30 animate-fade-in-up" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <benefit.icon className="w-5 h-5 text-lime shrink-0" />
                <span className="text-muted-foreground">{benefit.text}</span>
              </div>)}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>;
};
export default Waitlist;