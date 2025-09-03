import { useEffect, useState } from "react";
import { Chrome, Download, Check, Zap } from "lucide-react";

interface InstallationFlowProps {
  isActive: boolean;
}

export const InstallationFlow = ({ isActive }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  const steps = [
    { icon: Chrome, label: "Open Chrome Store", delay: 0 },
    { icon: Download, label: "Click Install", delay: 1000 },
    { icon: Zap, label: "Extension Added", delay: 2000 },
    { icon: Check, label: "Ready to Use", delay: 3000 }
  ];

  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      setShowSuccess(false);
      return;
    }

    const timers = steps.map((step, index) => 
      setTimeout(() => {
        setCurrentStep(index + 1);
        if (index === steps.length - 1) {
          setShowSuccess(true);
        }
      }, step.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Browser Window */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Browser Header */}
        <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 mx-6">
              <div className="bg-white rounded-full px-4 py-2 text-sm text-gray-600 border">
                chrome://extensions/
              </div>
            </div>
            <Chrome size={20} className="text-gray-600" />
          </div>
        </div>

        {/* Chrome Web Store Interface */}
        <div className="p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Extension Card */}
            <div className="space-y-6">
              <div className={`bg-gradient-to-br from-lime/10 to-pink/10 rounded-3xl p-8 border-2 transition-all duration-1000 ${
                currentStep >= 1 ? 'border-lime scale-105' : 'border-gray-200'
              }`}>
                {/* Extension Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-lime to-pink rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap size={32} className="text-white" />
                </div>

                {/* Extension Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">ZeroToken</h3>
                  <p className="text-gray-600 mb-4">AI Context Manager for ChatGPT, Claude & Gemini</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                    <span>★★★★★ 4.9</span>
                    <span>•</span>
                    <span>10,000+ users</span>
                  </div>
                </div>

                {/* Install Button */}
                <button 
                  className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-500 ${
                    currentStep >= 2 
                      ? 'bg-green-500 text-white' 
                      : currentStep >= 1 
                        ? 'bg-blue-500 text-white hover:bg-blue-600 animate-pulse' 
                        : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {currentStep >= 3 ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Check size={20} />
                      <span>Installed</span>
                    </div>
                  ) : currentStep >= 2 ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Installing...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Download size={20} />
                      <span>Add to Chrome</span>
                    </div>
                  )}
                </button>
              </div>

              {/* Success Message */}
              {showSuccess && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 animate-fade-in">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-800">Successfully Installed!</p>
                      <p className="text-sm text-green-600">ZeroToken is now active in your browser</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: AI Platform Logos */}
            <div className="space-y-8">
              <h4 className="text-xl font-semibold text-gray-900 text-center">
                Works seamlessly with:
              </h4>
              
              <div className="grid grid-cols-1 gap-6">
                {['ChatGPT', 'Claude', 'Gemini'].map((platform, index) => (
                  <div 
                    key={platform}
                    className={`flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-500 ${
                      currentStep >= 3 
                        ? 'border-lime bg-lime/10 scale-105' 
                        : 'border-gray-200 bg-gray-50'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      platform === 'ChatGPT' ? 'bg-green-500' :
                      platform === 'Claude' ? 'bg-orange-500' : 'bg-blue-500'
                    }`}>
                      <span className="text-white font-bold text-sm">
                        {platform.slice(0, 2)}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{platform}</p>
                      <p className="text-sm text-gray-600">
                        {currentStep >= 3 ? '✓ Connected' : 'Ready to connect'}
                      </p>
                    </div>
                    {currentStep >= 3 && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-fade-in">
                        <Check size={12} className="text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="mt-8 flex justify-center">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep > index 
                    ? 'bg-gradient-to-r from-lime to-pink text-white scale-110' 
                    : currentStep === index 
                      ? 'bg-blue-500 text-white animate-pulse' 
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  <Icon size={20} />
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-1 mx-2 rounded-full transition-all duration-500 ${
                    currentStep > index ? 'bg-gradient-to-r from-lime to-pink' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Success Indicator */}
      {showSuccess && (
        <div className="absolute -top-6 -right-6 animate-bounce">
          <div className="w-16 h-16 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-2xl">
            <Check size={24} className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
};