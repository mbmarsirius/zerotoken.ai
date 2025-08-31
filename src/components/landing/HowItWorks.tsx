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
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
              
              <div className="relative z-10 bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                {/* Step number */}
                <div className="bg-gradient-to-br from-lime to-pink text-white font-bold text-lg rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-6">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="bg-gradient-to-br from-lime/10 to-pink/10 rounded-xl p-4 w-fit mx-auto mb-6">
                  <div className="text-lime">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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