import zerotokenIcon from "@/assets/zerotoken-icon-official.png";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <img src={zerotokenIcon} alt="Install Extension" className="h-8 w-8" />,
      title: "Install Extension",
      description: "Add ZeroToken to Chrome and it instantly integrates with ChatGPT, Claude, and Gemini."
    },
    {
      icon: <img src={zerotokenIcon} alt="Monitor Memory" className="h-8 w-8" />,
      title: "Monitor Memory",
      description: "See exactly how much context memory you have left in real-time as you chat."
    },
    {
      icon: <img src={zerotokenIcon} alt="Stay Organized" className="h-8 w-8" />,
      title: "Stay Organized", 
      description: "Generate reports, refresh context, and optimize prompts — all without leaving your AI chat."
    }
  ];

  return (
    <section id="how-it-works" className="py-24" style={{ background: 'var(--how-it-works-bg)' }}>
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your AI conversations instantly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          
          {/* Connection Lines - Hidden on mobile */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-primary to-secondary transform -translate-y-1/2 opacity-30"></div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary to-primary transform -translate-y-1/2 opacity-30"></div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                {index + 1}
              </div>

              {/* Icon Container */}
              <div className="bg-white rounded-2xl p-6 mb-6 shadow-lg border border-border group-hover:shadow-xl group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-4 w-fit mx-auto relative z-10">
                  <div className="text-primary group-hover:animate-pulse">
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};