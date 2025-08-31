import { Database, FileStack, Share2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="h-12 w-12" />,
      title: "Capture",
      description: "ZeroToken collects your AI turns inside ChatGPT, Claude, and Gemini."
    },
    {
      icon: <FileStack className="h-12 w-12" />,
      title: "Compile", 
      description: "We distill them into a narrative handoff brief + recap."
    },
    {
      icon: <Share2 className="h-12 w-12" />,
      title: "Share",
      description: "Copy, PDF, email — or keep working with Detox."
    }
  ];

  return (
    <section id="how-it-works" className="py-20" style={{ background: 'var(--how-it-works-bg)' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--how-it-works-text)' }}>
            How it works
          </h2>
          <p className="text-xl max-w-2xl mx-auto opacity-80" style={{ color: 'var(--how-it-works-text)' }}>
            Three simple steps to turn your AI conversations into actionable insights
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-lime to-pink opacity-30 z-0"></div>
              )}
              
              <div className="relative z-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 hover:bg-white/30 transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="bg-ink text-lime font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-ink/20 rounded-xl p-4 w-fit mx-auto mb-6">
                  <div style={{ color: 'var(--how-it-works-text)' }}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold mb-4" style={{ color: 'var(--how-it-works-text)' }}>
                  {step.title}
                </h3>
                
                <p className="leading-relaxed opacity-80" style={{ color: 'var(--how-it-works-text)' }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};