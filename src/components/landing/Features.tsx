import zerotokenIcon from "@/assets/zerotoken-icon-official.png";

export const Features = () => {
  const features = [
    {
      icon: <img src={zerotokenIcon} alt="Narrative Handoff Reports" className="h-10 w-10" />,
      title: "Narrative Handoff Reports",
      description: "Summarize sprawling threads into structured briefs: Decisions, Facts, Open Questions. Copy, PDF, or email instantly."
    },
    {
      icon: <img src={zerotokenIcon} alt="AI Detox" className="h-10 w-10" />,
      title: "AI Detox (Context Refresh)",
      description: "One tap offloads stale context, injects a dense recap, and lightens your prompt window — faster, clearer answers."
    },
    {
      icon: <img src={zerotokenIcon} alt="Auto-Prompt Engineer" className="h-10 w-10" />,
      title: "Auto-Prompt Engineer Mode",
      description: "Write like a human. Our extension instantly translates it into a flawless prompt and pastes it under your text: 'What you really meant.'"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Powerful features for 
            <span className="text-primary"> smarter AI conversations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take control of your AI interactions with professional-grade tools designed for clarity and efficiency.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white border border-border rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-primary group-hover:animate-pulse">
                  {feature.icon}
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};