import { MessageCircle, Zap, Edit3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "Narrative Handoff Reports",
      description: "Summarize sprawling threads into structured briefs: Decisions, Facts, Open Questions. Copy, PDF, or email instantly."
    },
    {
      icon: <Zap className="h-8 w-8 text-secondary" />,
      title: "AI Detox (Context Refresh)",
      description: "One tap offloads stale context, injects a dense recap, and lightens your prompt window — faster, clearer answers."
    },
    {
      icon: <Edit3 className="h-8 w-8 text-accent" />,
      title: "Auto-Prompt Engineer Mode",
      description: "Write like a human. Our extension instantly translates it into a flawless prompt and pastes it under your text: 'What you really meant.'"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--features-bg)' }}>
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-pink/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-lime/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-lavender/5 rounded-full blur-3xl opacity-40 transform -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
            Powerful features for 
            <span className="bg-gradient-to-r from-pink via-primary to-lime bg-clip-text text-transparent"> smarter AI conversations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take control of your AI interactions with professional-grade tools designed for clarity and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 hover:bg-white transition-all duration-700 hover:-translate-y-4 animate-fade-in-up overflow-hidden"
              style={{ 
                animationDelay: `${index * 200}ms`,
                boxShadow: 'var(--shadow-card)'
              }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              {/* Pink Glow Border on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink/20 to-lime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
              
              {/* Icon Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-6 w-fit mb-8 group-hover:scale-110 transition-transform duration-500 border border-gray-100/50">
                <div className="group-hover:animate-pulse transition-all duration-300">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-300 relative z-10">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300 relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};