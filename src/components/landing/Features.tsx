import { MessageCircle, Zap, Edit3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Narrative Handoff Reports",
      description: "Summarize sprawling threads into structured briefs: Decisions, Facts, Open Questions. Copy, PDF, or email instantly."
    },
    {
      icon: Zap,
      title: "AI Detox (Context Refresh)",
      description: "One tap offloads stale context, injects a dense recap, and lightens your prompt window — faster, clearer answers."
    },
    {
      icon: Edit3,
      title: "Auto-Prompt Engineer Mode",
      description: "Write like a human. Our extension instantly translates it into a flawless prompt and pastes it under your text: 'What you really meant.'"
    }
  ];

  return (
    <section className="relative py-24 transition-all duration-1000" style={{ backgroundColor: '#000000' }}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-lime">
            Advanced AI Features
          </h2>
          <p className="text-xl text-pink max-w-2xl mx-auto leading-relaxed">
            Experience the next generation of AI interaction with our powerful enhancement suite
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-white/5 border border-pink/20 shadow-sm hover:shadow-lg hover:shadow-pink/10 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
              >
                <div className="inline-flex p-3 rounded-xl bg-lime/20 text-lime mb-6 group-hover:bg-lime/30 transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-lime">
                  {feature.title}
                </h3>
                
                <p className="text-pink/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};