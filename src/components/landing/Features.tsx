import { MessageCircle, Zap, Edit3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Narrative Handoff Reports",
      description: "Summarize sprawling threads into structured briefs: Decisions, Facts, Open Questions. Copy, PDF, or email instantly.",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    },
    {
      icon: Zap,
      title: "AI Detox (Context Refresh)",
      description: "One tap offloads stale context, injects a dense recap, and lightens your prompt window — faster, clearer answers.",
      gradient: "from-lime/20 to-pink/20",
      iconColor: "text-lime group-hover:text-pink"
    },
    {
      icon: Edit3,
      title: "Auto-Prompt Engineer Mode",
      description: "Write like a human. Our extension instantly translates it into a flawless prompt and pastes it under your text: 'What you really meant.'",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-lavender/30 via-white to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink/15 to-lime/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/15 to-pink/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-lavender/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Three powerful features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to keep your AI conversations organized and efficient
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group text-center transform transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient background card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${feature.gradient} border border-white/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink/20`}>
                  {/* Icon container with animation */}
                  <div className="w-20 h-20 mx-auto mb-8 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon 
                      size={32} 
                      className={`${feature.iconColor} transition-all duration-500 group-hover:scale-110`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {feature.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};