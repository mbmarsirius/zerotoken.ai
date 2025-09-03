import { useEffect, useState } from "react";
import { Chrome, Download, Check, Zap, Sparkles, Star, Shield } from "lucide-react";

interface InstallationFlowProps {
  isActive: boolean;
}

export const InstallationFlow = ({ isActive }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [glowEffect, setGlowEffect] = useState(false);
  const [sparkles, setSparkles] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);

  const steps = [
    { icon: Chrome, label: "Open Chrome Store", delay: 0, color: "from-blue-500 to-blue-600" },
    { icon: Download, label: "Click Install", delay: 1200, color: "from-orange-500 to-red-500" },
    { icon: Zap, label: "Extension Added", delay: 2400, color: "from-purple-500 to-pink-500" },
    { icon: Check, label: "Ready to Use", delay: 3600, color: "from-green-500 to-lime" }
  ];

  useEffect(() => {
    if (!isActive) {
      setCurrentStep(0);
      setShowSuccess(false);
      setGlowEffect(false);
      setSparkles(0);
      setDownloadProgress(0);
      return;
    }

    // Enhanced animation sequence
    const timers = steps.map((step, index) => 
      setTimeout(() => {
        setCurrentStep(index + 1);
        setGlowEffect(true);
        setSparkles(prev => prev + 5);
        
        // Simulate download progress
        if (index === 1) {
          const progressInterval = setInterval(() => {
            setDownloadProgress(prev => {
              if (prev >= 100) {
                clearInterval(progressInterval);
                return 100;
              }
              return prev + 5;
            });
          }, 50);
        }
        
        if (index === steps.length - 1) {
          setTimeout(() => {
            setShowSuccess(true);
            setSparkles(20);
          }, 500);
        }
        
        setTimeout(() => setGlowEffect(false), 800);
      }, step.delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isActive]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Enhanced Sparkle Effects */}
      {showSuccess && Array.from({ length: sparkles }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-ping pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${1 + Math.random()}s`
          }}
        />
      ))}

      {/* Floating Success Indicators */}
      {currentStep >= 2 && (
        <>
          <div className="absolute -top-4 left-1/4 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-8 bg-gradient-to-r from-lime to-green-400 rounded-full flex items-center justify-center shadow-lg">
              <Check size={16} className="text-white" />
            </div>
          </div>
          <div className="absolute -top-6 right-1/3 animate-bounce" style={{ animationDelay: '1s' }}>
            <div className="w-6 h-6 bg-gradient-to-r from-pink to-purple-500 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles size={12} className="text-white" />
            </div>
          </div>
        </>
      )}

      {/* Enhanced Browser Window */}
      <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-2 transition-all duration-1000 ${
        showSuccess 
          ? 'border-lime/50 shadow-lime/20 shadow-2xl' 
          : currentStep >= 2 
            ? 'border-blue-300 shadow-blue-500/20' 
            : 'border-gray-200'
      }`}>
        {/* Enhanced Browser Header */}
        <div className={`px-6 py-4 border-b transition-all duration-500 ${
          showSuccess 
            ? 'bg-gradient-to-r from-lime/10 to-green-50 border-lime/30' 
            : currentStep >= 2 
              ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200' 
              : 'bg-gray-100 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showSuccess ? 'bg-green-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showSuccess ? 'bg-green-400 animate-pulse' : currentStep >= 2 ? 'bg-blue-500' : 'bg-yellow-500'
              }`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showSuccess ? 'bg-green-300 animate-pulse' : currentStep >= 3 ? 'bg-lime' : 'bg-green-500'
              }`}></div>
            </div>
            <div className="flex-1 mx-6">
              <div className={`rounded-full px-4 py-2 text-sm font-mono border transition-all duration-500 ${
                showSuccess 
                  ? 'bg-green-50 text-green-700 border-green-200' 
                  : 'bg-white text-gray-600 border-gray-200'
              }`}>
                chrome://extensions/
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Chrome size={20} className={`transition-all duration-300 ${
                currentStep >= 1 ? 'text-blue-500' : 'text-gray-600'
              }`} />
              {currentStep >= 2 && (
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              )}
            </div>
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

              {/* Enhanced Success Message */}
              {showSuccess && (
                <div className="bg-gradient-to-r from-green-50 via-lime/10 to-green-50 border-2 border-green-200 rounded-3xl p-6 animate-fade-in shadow-lg shadow-green-500/20">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-lime rounded-full flex items-center justify-center animate-pulse shadow-lg shadow-green-500/30">
                      <Check size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-green-800 text-lg">Successfully Installed!</p>
                      <p className="text-sm text-green-600">ZeroToken is now active and monitoring your AI conversations</p>
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                  
                  {/* Success stats */}
                  <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                    <div className="p-2 bg-white/50 rounded-xl">
                      <div className="text-lg font-bold text-green-700">✓</div>
                      <div className="text-xs text-green-600">Chrome</div>
                    </div>
                    <div className="p-2 bg-white/50 rounded-xl">
                      <div className="text-lg font-bold text-green-700">✓</div>
                      <div className="text-xs text-green-600">ChatGPT</div>
                    </div>
                    <div className="p-2 bg-white/50 rounded-xl">
                      <div className="text-lg font-bold text-green-700">✓</div>
                      <div className="text-xs text-green-600">Ready</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right: Enhanced AI Platform Logos */}
            <div className="space-y-8">
              <h4 className="text-xl font-bold text-gray-900 text-center">
                Works seamlessly with:
              </h4>
              
              <div className="grid grid-cols-1 gap-6">
                {[
                  { name: 'ChatGPT', color: 'from-green-400 to-green-500', bg: 'bg-green-500' },
                  { name: 'Claude', color: 'from-orange-400 to-orange-500', bg: 'bg-orange-500' },
                  { name: 'Gemini', color: 'from-blue-400 to-blue-500', bg: 'bg-blue-500' }
                ].map((platform, index) => (
                  <div 
                    key={platform.name}
                    className={`flex items-center space-x-4 p-5 rounded-3xl border-2 transition-all duration-700 ${
                      currentStep >= 4 
                        ? `border-lime bg-gradient-to-r from-lime/10 to-green-50 scale-105 shadow-lg shadow-lime/20` 
                        : currentStep >= 3 
                          ? 'border-green-300 bg-green-50 scale-102' 
                          : 'border-gray-200 bg-gray-50'
                    }`}
                    style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 ${
                      currentStep >= 3 ? `bg-gradient-to-r ${platform.color}` : platform.bg
                    }`}>
                      <span className="text-white font-bold text-lg">
                        {platform.name.slice(0, 2)}
                      </span>
                      {currentStep >= 4 && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-lime rounded-full animate-ping"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-900 text-lg">{platform.name}</p>
                      <p className={`text-sm transition-colors duration-300 ${
                        currentStep >= 4 
                          ? 'text-green-600' 
                          : currentStep >= 3 
                            ? 'text-blue-600' 
                            : 'text-gray-600'
                      }`}>
                        {currentStep >= 4 
                          ? '✓ Connected & Monitoring' 
                          : currentStep >= 3 
                            ? '⚡ Connecting...' 
                            : 'Ready to connect'
                        }
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {currentStep >= 4 && (
                        <>
                          <div className="w-6 h-6 bg-lime rounded-full flex items-center justify-center animate-fade-in">
                            <Check size={12} className="text-white" />
                          </div>
                          <Shield size={16} className="text-lime animate-pulse" />
                        </>
                      )}
                      {currentStep === 3 && (
                        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Steps */}
      <div className="mt-12 flex justify-center">
        <div className="flex items-center space-x-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex items-center">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-700 relative ${
                  currentStep > index 
                    ? `bg-gradient-to-r ${step.color} text-white scale-110 shadow-2xl` 
                    : currentStep === index + 1 
                      ? `bg-gradient-to-r ${step.color} text-white animate-pulse scale-105 shadow-xl` 
                      : 'bg-gray-200 text-gray-500 scale-90'
                }`}>
                  <Icon size={24} className={currentStep > index ? 'animate-bounce' : ''} />
                  
                  {/* Step completion ring */}
                  {currentStep > index && (
                    <div className="absolute -inset-1 border-2 border-white rounded-full animate-ping"></div>
                  )}
                  
                  {/* Step number badge */}
                  <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                    currentStep > index 
                      ? 'bg-white text-gray-900' 
                      : 'bg-gray-400 text-white'
                  }`}>
                    {index + 1}
                  </div>
                </div>
                
                {/* Enhanced connection line */}
                {index < steps.length - 1 && (
                  <div className="flex flex-col items-center mx-4">
                    <div className={`w-12 h-2 rounded-full transition-all duration-500 ${
                      currentStep > index + 1 
                        ? 'bg-gradient-to-r from-lime to-pink animate-pulse' 
                        : 'bg-gray-200'
                    }`} />
                    {currentStep > index + 1 && (
                      <div className="w-3 h-3 bg-pink rounded-full animate-bounce mt-1"></div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Labels */}
      <div className="mt-6 flex justify-center">
        <div className="flex space-x-16">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <p className={`text-sm font-medium transition-colors duration-300 ${
                currentStep > index 
                  ? 'text-green-600' 
                  : currentStep === index + 1 
                    ? 'text-blue-600' 
                    : 'text-gray-500'
              }`}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Success Indicator */}
      {showSuccess && (
        <div className="absolute -top-8 -right-8 animate-bounce">
          <div className="w-20 h-20 bg-gradient-to-r from-lime via-green-400 to-lime rounded-full flex items-center justify-center shadow-2xl shadow-lime/50 relative">
            <Check size={32} className="text-white animate-pulse" />
            <div className="absolute -inset-2 border-4 border-lime/50 rounded-full animate-ping"></div>
            <div className="absolute -inset-4 border-2 border-lime/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      )}

      {/* Installation Stats */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-500 ${
          currentStep >= 2 
            ? 'bg-blue-50 border-blue-200 scale-105' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`text-2xl font-bold mb-1 ${
            currentStep >= 2 ? 'text-blue-600' : 'text-gray-600'
          }`}>
            <Download size={24} className="mx-auto" />
          </div>
          <div className="text-sm text-gray-600">Download</div>
        </div>
        
        <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-500 ${
          currentStep >= 3 
            ? 'bg-purple-50 border-purple-200 scale-105' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`text-2xl font-bold mb-1 ${
            currentStep >= 3 ? 'text-purple-600' : 'text-gray-600'
          }`}>
            {currentStep >= 3 ? downloadProgress : 0}%
          </div>
          <div className="text-sm text-gray-600">Installing</div>
        </div>
        
        <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-500 ${
          currentStep >= 4 
            ? 'bg-green-50 border-green-200 scale-105' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`text-2xl font-bold mb-1 ${
            currentStep >= 4 ? 'text-green-600' : 'text-gray-600'
          }`}>
            <Check size={24} className="mx-auto" />
          </div>
          <div className="text-sm text-gray-600">Complete</div>
        </div>
        
        <div className={`text-center p-4 rounded-2xl border-2 transition-all duration-500 ${
          showSuccess 
            ? 'bg-lime/20 border-lime/40 scale-105' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className={`text-2xl font-bold mb-1 ${
            showSuccess ? 'text-lime-700' : 'text-gray-600'
          }`}>
            <Sparkles size={24} className={`mx-auto ${showSuccess ? 'animate-spin' : ''}`} />
          </div>
          <div className="text-sm text-gray-600">Ready</div>
        </div>
      </div>
    </div>
  );
};