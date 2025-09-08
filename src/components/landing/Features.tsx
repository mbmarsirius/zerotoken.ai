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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to keep your AI conversations organized and efficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center h-full"
              >
                <div className="relative p-8 h-full rounded-2xl backdrop-blur-xl border transition-all duration-500 flex flex-col justify-between min-h-[320px] overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
                  <div className="relative z-10 w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-pink/20 to-pink/10 backdrop-blur-lg rounded-xl flex items-center justify-center group-hover:from-pink/30 group-hover:to-pink/20 group-hover:shadow-xl group-hover:shadow-pink/30 group-hover:scale-110 transition-all duration-500 border border-pink/30 group-hover:border-pink/50 shadow-lg shadow-pink/15">
                    <Icon 
                      size={28} 
                      className="text-pink group-hover:text-pink transition-all duration-300" 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};