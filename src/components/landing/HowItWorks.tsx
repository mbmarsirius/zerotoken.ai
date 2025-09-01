import { Download, Eye, Sparkles } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="h-10 w-10" />,
      title: "Install Extension",
      description: "Add ZeroToken to Chrome and it instantly integrates with ChatGPT, Claude, and Gemini."
    },
    {
      icon: <Eye className="h-10 w-10" />,
      title: "Monitor Memory",
      description: "See exactly how much context memory you have left in real-time as you chat."
    },
    {
      icon: <Sparkles className="h-10 w-10" />,
      title: "Stay Organized", 
      description: "Generate reports, refresh context, and optimize prompts — all without leaving your AI chat."
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden" style={{ background: 'var(--how-it-works-bg)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-32 h-32 bg-lime/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-pink/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-20 h-20 bg-lavender/10 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            How it <span className="bg-gradient-to-r from-lime via-secondary to-pink bg-clip-text text-transparent">works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get started in minutes and transform your AI conversations instantly.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto relative">
          
          {/* Enhanced Connection Lines */}
          <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-1 bg-gradient-to-r from-lime via-lime/50 to-pink transform -translate-y-1/2 opacity-60 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-lime to-pink animate-pulse rounded-full"></div>
          </div>
          <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-1 bg-gradient-to-r from-pink via-pink/50 to-lavender transform -translate-y-1/2 opacity-60 rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-pink to-lavender animate-pulse rounded-full" style={{ animationDelay: '0.5s' }}></div>
          </div>

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 250}ms` }}
            >
              {/* Enhanced Step Number */}
              <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center text-lg font-bold shadow-xl group-hover:scale-125 transition-all duration-500 z-20"
                style={{
                  background: index === 0 ? 'hsl(var(--lime))' : index === 1 ? 'hsl(var(--pink))' : 'hsl(var(--lavender))',
                  color: 'hsl(var(--text-light))',
                  borderRadius: '50%',
                  filter: 'drop-shadow(0 4px 15px rgba(0,0,0,0.1))'
                }}>
                {index + 1}
              </div>

              {/* Enhanced Icon Container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 mb-8 transition-all duration-700 group-hover:-translate-y-6 overflow-hidden border border-gray-100/50"
                style={{ boxShadow: 'var(--shadow-card)' }}>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, hsl(var(--lime) / 0.1), transparent)' : 
                               index === 1 ? 'linear-gradient(135deg, hsl(var(--pink) / 0.1), transparent)' :
                               'linear-gradient(135deg, hsl(var(--lavender) / 0.1), transparent)'
                  }}></div>
                
                {/* Icon */}
                <div className="relative z-10 mx-auto w-fit p-6 rounded-2xl transition-all duration-500 group-hover:scale-110"
                  style={{
                    background: index === 0 ? 'linear-gradient(135deg, hsl(var(--lime) / 0.1), hsl(var(--lime) / 0.05))' : 
                               index === 1 ? 'linear-gradient(135deg, hsl(var(--pink) / 0.1), hsl(var(--pink) / 0.05))' :
                               'linear-gradient(135deg, hsl(var(--lavender) / 0.1), hsl(var(--lavender) / 0.05))'
                  }}>
                  <div className="transition-all duration-300 group-hover:animate-pulse"
                    style={{
                      color: index === 0 ? 'hsl(var(--lime))' : index === 1 ? 'hsl(var(--pink))' : 'hsl(var(--lavender))'
                    }}>
                    {step.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};