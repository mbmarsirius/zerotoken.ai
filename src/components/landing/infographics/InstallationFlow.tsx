import { useEffect, useState, useRef } from "react";
import { Chrome, Download, CheckCircle, Zap } from "lucide-react";

interface InstallationFlowProps {
  isActive: boolean;
}

export const InstallationFlow = ({ isActive }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Reset animation when coming into view
          setCurrentStep(0);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    // Reset to initial state
    setCurrentStep(0);

    const steps = [
      { delay: 500, step: 1 },
      { delay: 1500, step: 2 },
      { delay: 2500, step: 3 },
      { delay: 3500, step: 4 }
    ];

    const timeouts = steps.map(({ delay, step }) => 
      setTimeout(() => setCurrentStep(step), delay)
    );

    // Cleanup function to clear timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isVisible]);

  const installSteps = [
    {
      icon: Chrome,
      title: "Visit Chrome Web Store",
      subtitle: "Search for ZeroToken"
    },
    {
      icon: Download,
      title: "Click Install",
      subtitle: "One-click installation"
    },
    {
      icon: Zap,
      title: "Auto-Connect",
      subtitle: "Links to AI platforms"
    },
    {
      icon: CheckCircle,
      title: "Ready to Go!",
      subtitle: "Start using unlimited AI"
    }
  ];

  return (
    <div ref={sectionRef} className="relative w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent mb-2">Simple Installation Process</div>
        <p className="text-muted-foreground">Get ZeroToken running in under 30 seconds</p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {installSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep > index;
          const isCurrent = currentStep === index + 1;
          
          return (
            <div
              key={index}
              className={`relative transition-all duration-700 ${
                isActive || isCurrent ? 'scale-100 opacity-100' : 'scale-95 opacity-40'
              }`}
            >
              <div className={`backdrop-blur-xl rounded-3xl border-2 p-6 text-center shadow-lg transition-all duration-500 relative overflow-hidden ${
                isCurrent ? 'border-lime/40 shadow-lime/30 transform scale-105 bg-gradient-to-br from-lime/10 via-lavender/5 to-pink/5' : 
                isActive ? 'border-pink/40 shadow-pink/30 bg-gradient-to-br from-pink/10 via-lime/5 to-lavender/5' : 'border-muted bg-white/80'
              }`}>
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 backdrop-blur-sm ${
                  isCurrent ? 'bg-gradient-to-br from-lime to-lime/80 animate-glow-pulse shadow-lime/40 shadow-lg' : 
                  isActive ? 'bg-gradient-to-br from-pink to-pink/80 shadow-pink/30' : 'bg-muted/50'
                }`}>
                  <Icon size={24} className={isActive || isCurrent ? 'text-white drop-shadow-sm' : 'text-muted-foreground'} />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-lg font-bold transition-colors duration-300 ${
                    isActive || isCurrent ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {step.title}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isActive || isCurrent ? 'text-muted-foreground' : 'text-muted-foreground/60'
                  }`}>
                    {step.subtitle}
                  </div>
                </div>

                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 backdrop-blur-sm ${
                  isCurrent ? 'bg-gradient-to-br from-lime to-lime/90 text-ink animate-bounce-gentle shadow-lime/40 shadow-lg' : 
                  isActive ? 'bg-gradient-to-br from-pink to-pink/90 text-white shadow-pink/30' : 'bg-muted text-muted-foreground'
                }`}>
                  {index + 1}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {currentStep >= 4 && (
        <div className="mt-8 text-center animate-fade-in">
          <div className="bg-gradient-to-r from-lime/20 via-pink/15 to-lavender/20 rounded-3xl border border-lime/30 p-6 backdrop-blur-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-lime/5 via-transparent to-pink/5 rounded-3xl"></div>
            <CheckCircle size={48} className="text-pink relative z-10 mx-auto mb-4 animate-bounce-gentle drop-shadow-lg" />
            <h3 className="font-bold text-foreground text-xl mb-2 relative z-10">Installation Complete!</h3>
            <p className="text-muted-foreground relative z-10">ZeroToken is now protecting your AI conversations</p>
          </div>
        </div>
      )}
    </div>
  );
};