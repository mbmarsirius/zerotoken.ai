import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-lavender via-lavender/80 to-lavender/60">
      {/* Liquid glass background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-lime/20 via-transparent to-pink/20"></div>
        <div className="absolute inset-0" style={{backgroundImage: 'var(--glass-noise)'}}></div>
      </div>

      {/* Floating liquid elements */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-white/20 to-lime/30 rounded-full blur-xl animate-floating animate-liquid-morphing"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-pink/20 to-white/10 rounded-full blur-2xl animate-floating" style={{animationDelay: '2s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-lavender/15 to-transparent rounded-full blur-3xl animate-rotate-slow"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-lime/30 rounded-full blur-lg animate-bounce-gentle"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-pink/25 rounded-full blur-xl animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Status Badge - Enhanced liquid glass */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-2xl rounded-full px-6 py-3 text-sm font-medium text-white border border-white/20 shadow-xl hover:bg-white/20 hover:scale-105 transition-all duration-500 mt-10 relative overflow-hidden group">
            <div className="w-2 h-2 bg-gradient-to-r from-lime to-lime/80 rounded-full animate-glow-pulse shadow-lg shadow-lime/50"></div>
            ● Works in ChatGPT (Beta) — Claude & Gemini coming soon
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </div>

          {/* Brand Icon - Enhanced with liquid effects */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink/30 via-lime/30 to-pink/30 rounded-full blur-2xl animate-aurora opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img 
                src="/lovable-uploads/fae4b52f-ca68-4783-acf7-f8ca0bc7856c.png" 
                alt="ZeroToken Cross Logo" 
                className="relative h-40 w-auto transition-all duration-700 hover:scale-110 group-hover:rotate-6"
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(236,72,153,0.4)) drop-shadow(0 0 40px rgba(193,255,114,0.3))',
                  animation: 'floating 6s ease-in-out infinite'
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-tight">
            Your AI chats,{" "}
            <span className="bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text text-transparent animate-fade-in">
              clear and under control
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            ZeroToken runs inside ChatGPT. It turns long threads into a concise continuity recap so you can keep going without re-explaining.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button onClick={() => navigate('/waitlist')} variant="hero-primary" size="xl" className="min-w-48 shadow-2xl">
              Join Waitlist →
            </Button>
            
            <Button onClick={scrollToHowItWorks} variant="hero-outline" size="xl" className="min-w-48">
              See how it works
            </Button>
          </div>

          {/* Pain Point - Liquid Glass Enhanced */}
          <div className="pt-16 opacity-100">
            <div className="relative max-w-4xl mx-auto group">
              {/* Multi-layer glow effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink/30 to-lime/30 rounded-3xl blur-2xl animate-aurora"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-lime/20 to-pink/20 rounded-3xl blur-xl animate-pulse"></div>
              
              {/* Main liquid glass container */}
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl hover:shadow-3xl hover:bg-white/10 transition-all duration-700 hover:scale-[1.02] -mt-[50px] my-[40px] overflow-hidden">
                {/* Noise texture overlay */}
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'var(--glass-noise)'}}></div>
                
                {/* Content */}
                <div className="relative">
                  <p className="text-white text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                    "Your AI keeps forgetting things mid-conversation, and you're copy-pasting the same context over and over..."
                  </p>
                  <div className="flex items-center gap-3 text-lime text-lg md:text-xl font-semibold">
                    <div className="w-3 h-3 bg-gradient-to-r from-lime to-lime/80 rounded-full animate-glow-pulse shadow-lg shadow-lime/50"></div>
                    ZeroToken fixes this forever.
                  </div>
                </div>
                
                {/* Glass shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                
                {/* Floating micro-elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pink/60 rounded-full animate-bounce-gentle"></div>
                <div className="absolute bottom-6 left-6 w-1.5 h-1.5 bg-lime/60 rounded-full animate-bounce-gentle" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};