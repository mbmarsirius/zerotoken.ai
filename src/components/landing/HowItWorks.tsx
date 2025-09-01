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
    <section id="how-it-works" className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple browser extension
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="text-center relative"
              >
                {/* Step number */}
                <div className="w-12 h-12 mx-auto mb-8 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-900 shadow-sm border border-gray-200">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-200">
                  <Icon size={28} className="text-gray-700" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-1/2 w-16 h-px bg-gray-300" 
                       style={{ transform: 'translateX(100%)' }}>
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