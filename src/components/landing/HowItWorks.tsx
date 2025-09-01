import { Download, Eye, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Install Extension",
      description: "Add ZeroToken to Chrome and it instantly integrates with ChatGPT, Claude, and Gemini.",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    },
    {
      icon: Eye,
      title: "Monitor Memory",
      description: "See exactly how much context memory you have left in real-time as you chat.",
      gradient: "from-lime/20 to-pink/20",
      iconColor: "text-lime group-hover:text-pink"
    },
    {
      icon: Sparkles,
      title: "Stay Organized", 
      description: "Generate reports, refresh context, and optimize prompts — all without leaving your AI chat.",
      gradient: "from-pink/20 to-lime/20",
      iconColor: "text-pink group-hover:text-lime"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink/15 to-lime/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-lime/15 to-pink/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-pink/10 to-lime/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple browser extension
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.title}
                className="group text-center transform transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient background card */}
                <div className={`relative p-8 rounded-3xl bg-gradient-to-br ${step.gradient} border border-white/50 backdrop-blur-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-pink/20`}>
                  {/* Step number with gradient */}
                  <div className="absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br from-pink to-lime rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-all duration-500">
                    {index + 1}
                  </div>
                  
                  {/* Icon container with animation */}
                  <div className="w-20 h-20 mx-auto mb-8 mt-4 bg-white rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-all duration-500 shadow-lg">
                    <Icon 
                      size={32} 
                      className={`${step.iconColor} transition-all duration-500 group-hover:scale-110`} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed group-hover:text-gray-800 transition-colors">
                    {step.description}
                  </p>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/0 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Animated connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full z-10 transform -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-pink to-lime animate-pulse"></div>
                    <div className="absolute -right-1 -top-1 w-2 h-2 bg-lime rounded-full animate-bounce"></div>
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