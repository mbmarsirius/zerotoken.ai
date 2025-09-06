import { useEffect, useState } from "react";
import { Chrome, Download, CheckCircle, Zap } from "lucide-react";

interface InstallationFlowProps {
  isActive: boolean;
}

export const InstallationFlow = ({ isActive }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      return;
    }

    const steps = [
      { delay: 500, step: 1 },
      { delay: 1500, step: 2 },
      { delay: 2500, step: 3 },
      { delay: 3500, step: 4 }
    ];

    steps.forEach(({ delay, step }) => {
      setTimeout(() => setCurrentStep(step), delay);
    });
  }, [isActive]);

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
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-blue-600 mb-2">Simple Installation Process</div>
        <p className="text-gray-600">Get ZeroToken running in under 30 seconds</p>
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
              <div className={`bg-white rounded-3xl border-2 p-6 text-center shadow-lg transition-all duration-500 ${
                isCurrent ? 'border-blue-300 shadow-blue-500/20 transform scale-105' : 
                isActive ? 'border-green-300 shadow-green-500/20' : 'border-gray-200'
              }`}>
                <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 ${
                  isCurrent ? 'bg-blue-500 animate-pulse shadow-lg' : 
                  isActive ? 'bg-green-500' : 'bg-gray-200'
                }`}>
                  <Icon size={24} className={isActive || isCurrent ? 'text-white' : 'text-gray-400'} />
                </div>
                
                <div className="space-y-2">
                  <div className={`text-lg font-bold transition-colors duration-300 ${
                    isActive || isCurrent ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isActive || isCurrent ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.subtitle}
                  </div>
                </div>

                <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                  isCurrent ? 'bg-blue-500 text-white animate-bounce' : 
                  isActive ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-600'
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
          <div className="bg-gradient-to-r from-lime/20 to-green/20 rounded-3xl border border-green-200 p-6">
            <CheckCircle size={48} className="text-green-500 mx-auto mb-4 animate-bounce" />
            <h3 className="font-bold text-gray-900 text-xl mb-2">Installation Complete!</h3>
            <p className="text-gray-600">ZeroToken is now protecting your AI conversations</p>
          </div>
        </div>
      )}
    </div>
  );
};