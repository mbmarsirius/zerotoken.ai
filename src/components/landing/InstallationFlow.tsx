import { useEffect, useState } from "react";
import { Chrome, Download, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InstallationFlowProps {
  isActive?: boolean;
}

export const InstallationFlow = ({ isActive = true }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(timer);
  }, [isActive]);

  const installSteps = [
    {
      icon: Chrome,
      title: "Visit Chrome Web Store",
      subtitle: "Search for ZeroToken"
    },
    {
      icon: Download,
      title: "Click Add to Chrome",
      subtitle: "One-click installation"
    },
    {
      icon: Zap,
      title: "Auto-Configuration",
      subtitle: "Smart setup in seconds"
    },
    {
      icon: CheckCircle,
      title: "Ready to Use",
      subtitle: "Start unlimited AI chats"
    }
  ];

  return (
    <section id="installation" className="py-24 bg-gradient-to-br from-background via-secondary/20 to-accent/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How to Install ZeroToken
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get unlimited AI context in less than 30 seconds. No technical skills required.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {installSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index <= currentStep;
              const isCurrent = index === currentStep;
              
              return (
                <div
                  key={index}
                  className={`relative p-6 rounded-2xl border transition-all duration-500 ${
                    isActive
                      ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/30 shadow-lg'
                      : 'bg-muted/50 border-muted-foreground/20'
                  } ${isCurrent ? 'scale-105 shadow-xl' : 'scale-100'}`}
                >
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon size={24} />
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </h3>
                    
                    <p className={`text-sm transition-colors duration-300 ${
                      isActive ? 'text-muted-foreground' : 'text-muted-foreground/60'
                    }`}>
                      {step.subtitle}
                    </p>
                  </div>
                  
                  {/* Step number */}
                  <div className={`absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {index + 1}
                  </div>
                  
                  {/* Connection line */}
                  {index < installSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Installation Complete Message */}
          {currentStep >= installSteps.length - 1 && (
            <div className="text-center space-y-6 animate-fade-in">
              <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-2xl">
                <CheckCircle className="text-primary" size={32} />
                <div className="text-left">
                  <div className="text-xl font-bold text-foreground">Installation Complete!</div>
                  <div className="text-muted-foreground">ZeroToken is ready to supercharge your AI workflow</div>
                </div>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground font-semibold px-8"
              >
                Start Using ZeroToken Now
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};