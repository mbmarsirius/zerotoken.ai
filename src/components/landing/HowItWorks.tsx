import { Download, Eye, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Install Extension",
      description: "Add ZeroToken to Chrome and it instantly integrates with ChatGPT, Claude, and Gemini."
    },
    {
      icon: Eye,
      title: "Monitor Memory",
      description: "See exactly how much context memory you have left in real-time as you chat."
    },
    {
      icon: Sparkles,
      title: "Stay Organized", 
      description: "Generate reports, refresh context, and optimize prompts — all without leaving your AI chat."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How ZeroToken Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transform your AI conversations in three simple steps with our powerful browser extension
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="group text-center"
              >
                <div className="p-8 rounded-2xl bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pink text-white text-lg font-semibold mb-6">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-lime/10 text-lime mb-6">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 transform -translate-y-1/2" 
                       style={{ left: `${(index + 1) * 33.33 - 8}%` }}>
                    <div className="w-16 h-px bg-border"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};