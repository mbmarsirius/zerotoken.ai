import { MessageCircle, Zap, Edit3, Activity } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Flawless Continuity Handoff",
      description: "Convert sprawling chats into a tight recap with Facts, Decisions, Open Questions, Next Steps. Built for \"pick up exactly where we left off.\"",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    },
    {
      icon: Zap,
      title: "Checkpoints & Auto-Save",
      description: "ZeroToken quietly takes safe checkpoints while you work. Roll back and regenerate whenever you need.",
      gradient: "from-lime/20 to-pink/20",
      iconColor: "text-lime group-hover:text-pink"
    },
    {
      icon: Edit3,
      title: "WOW Events Capture",
      description: "ZeroToken detects the wow moments—key insights, numbers, blockers, and decisions—and pins them into your handoff so the turning points never get lost.",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    },
    {
      icon: Activity,
      title: "ZeroMeter (AI Memory Gauge)",
      description: "See how much AI memory (tokens) you've used—live. A clear bar + percent shows used vs. left and warns before overflow, so you avoid cut-offs and keep responses sharp.",
      gradient: "from-lime/20 to-pink/20",
      iconColor: "text-lime group-hover:text-pink"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-white to-lavender/20 relative overflow-hidden">
      {/* Enhanced liquid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{backgroundImage: 'var(--gradient-liquid)'}}></div>
        <div className="absolute inset-0" style={{backgroundImage: 'var(--gradient-mesh)'}}></div>
      </div>

      {/* Floating liquid elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink/20 to-lime/20 rounded-full blur-3xl animate-floating animate-liquid-morphing"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/20 to-pink/20 rounded-full blur-3xl animate-floating" style={{ animationDelay: '2s', animationDirection: 'reverse' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-lavender/15 to-transparent rounded-full blur-3xl animate-rotate-slow"></div>
      
      {/* Micro floating particles */}
      <div className="absolute top-32 right-32 w-4 h-4 bg-pink/40 rounded-full blur-sm animate-bounce-gentle"></div>
      <div className="absolute bottom-40 left-40 w-6 h-6 bg-lime/40 rounded-full blur-sm animate-bounce-gentle" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-lavender/50 rounded-full blur-sm animate-bounce-gentle" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to keep your AI conversations organized and efficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center transform transition-all duration-500 hover:scale-105 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Enhanced liquid glass card */}
                <div className={`relative p-8 h-full rounded-3xl bg-gradient-to-br ${feature.gradient} border border-white/30 backdrop-blur-xl transition-all duration-700 group-hover:shadow-2xl group-hover:scale-105 hover:border-white/50 overflow-hidden flex flex-col justify-between min-h-[400px]`} style={{
                  boxShadow: 'var(--shadow-floating), inset 0 1px 0 rgba(255,255,255,0.1)'
                }}>
                  {/* Noise texture */}
                  <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'var(--glass-noise)'}}></div>
                  
                  {/* Icon container with enhanced effects */}
                  <div className="relative w-20 h-20 mx-auto mb-8 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-2xl hover:shadow-pink/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-white to-white/80 rounded-2xl"></div>
                    <Icon 
                      size={32} 
                      className={`relative ${feature.iconColor} transition-all duration-700 group-hover:scale-125 drop-shadow-lg`} 
                      strokeWidth={1.5} 
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                    {feature.description}
                  </p>

                  {/* Enhanced glass shine */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000 rounded-3xl"></div>
                  
                  {/* Floating micro-elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-bounce-gentle opacity-60"></div>
                  <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-white/60 rounded-full animate-bounce-gentle opacity-60" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};