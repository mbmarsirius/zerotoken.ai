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
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
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
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-8 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-lime/10 transition-colors duration-300">
                  <Icon size={28} className="text-gray-700 group-hover:text-lime transition-colors duration-300" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
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