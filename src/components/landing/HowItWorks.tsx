import { Download, Eye, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Install Extension",
      description: "Add ZeroToken to Chrome and it instantly integrates with ChatGPT, Claude, and Gemini.",
      color: "pink"
    },
    {
      icon: Eye,
      title: "Monitor Memory",
      description: "See exactly how much context memory you have left in real-time as you chat.",
      color: "lime"
    },
    {
      icon: Sparkles,
      title: "Stay Organized", 
      description: "Generate reports, refresh context, and optimize prompts — all without leaving your AI chat.",
      color: "pink"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-lime rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-pink rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple browser extension
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isPink = step.color === "pink";
            return (
              <div 
                key={step.title}
                className="text-center relative group animate-fade-in"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Animated step number with gradient */}
                <div className={`w-16 h-16 mx-auto mb-8 bg-gradient-to-br ${isPink ? 'from-pink to-pink/80' : 'from-lime to-lime/80'} rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                  {index + 1}
                </div>
                
                {/* Icon with hover animation */}
                <div className={`w-20 h-20 mx-auto mb-8 bg-gradient-to-br ${isPink ? 'from-pink/10 to-pink/20' : 'from-lime/10 to-lime/20'} rounded-3xl flex items-center justify-center border ${isPink ? 'border-pink/20' : 'border-lime/20'} transition-all duration-500 group-hover:shadow-xl ${isPink ? 'group-hover:shadow-pink/30' : 'group-hover:shadow-lime/30'}`}>
                  <Icon 
                    size={36} 
                    className={`${isPink ? 'text-pink' : 'text-lime'} transition-all duration-500 group-hover:scale-110`} 
                    strokeWidth={1.5} 
                  />
                </div>
                
                <h3 className="text-2xl font-semibold mb-6 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-700 transition-colors">
                  {step.description}
                </p>

                {/* Animated connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-1/2 transition-all duration-1000">
                    <div 
                      className={`w-24 h-0.5 bg-gradient-to-r ${isPink ? 'from-pink to-lime' : 'from-lime to-pink'} opacity-60 animate-pulse`}
                      style={{ transform: 'translateX(50px)' }}
                    ></div>
                    <div 
                      className={`absolute -right-1 -top-1 w-2 h-2 ${isPink ? 'bg-lime' : 'bg-pink'} rounded-full animate-bounce`}
                      style={{ animationDelay: `${index * 0.5}s` }}
                    ></div>
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