import zerotokenIcon from "@/assets/zerotoken-icon.png";

export const Features = () => {
  const features = [
    {
      icon: <img src={zerotokenIcon} alt="Feature icon" className="h-8 w-8" />,
      title: "Narrative Handoff Reports",
      description: "Summarize sprawling threads into structured briefs: Decisions, Facts, Open Questions. Copy, PDF, or email instantly."
    },
    {
      icon: <img src={zerotokenIcon} alt="Feature icon" className="h-8 w-8" />,
      title: "AI Detox (Context Refresh)",
      description: "One tap offloads stale context, injects a dense recap, and lightens your prompt window — faster, clearer answers."
    },
    {
      icon: <img src={zerotokenIcon} alt="Feature icon" className="h-8 w-8" />,
      title: "Auto-Prompt Engineer Mode",
      description: "Write like a human. Our extension instantly translates it into a flawless prompt and pastes it under your text: 'What you really meant.'"
    }
  ];

  return (
    <section className="py-20" style={{ background: 'var(--features-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-xl hover:border-lime/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-gradient-to-br from-lime/10 to-pink/10 rounded-xl p-4 w-fit mb-6">
                <div className="text-lime">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};