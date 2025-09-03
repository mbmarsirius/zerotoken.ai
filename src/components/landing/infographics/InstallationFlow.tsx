import { useEffect, useState, useCallback } from "react";
import { Chrome, Download, Check, Zap, Sparkles, Star, Shield, Play, RotateCcw, Mouse, ArrowRight } from "lucide-react";

interface InstallationFlowProps {
  isActive: boolean;
}

export const InstallationFlow = ({ isActive }: InstallationFlowProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [glowEffect, setGlowEffect] = useState(false);
  const [sparkles, setSparkles] = useState(0);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isUserControlled, setIsUserControlled] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showClickIndicator, setShowClickIndicator] = useState(false);
  const [platformConnections, setPlatformConnections] = useState([false, false, false]);

  const steps = [
    { 
      icon: Chrome, 
      label: "Open Chrome Store", 
      delay: 0, 
      color: "from-blue-500 to-blue-600",
      action: "Store opened! Extension found.",
      interactive: true
    },
    { 
      icon: Download, 
      label: "Click Install", 
      delay: 800, 
      color: "from-orange-500 to-red-500",
      action: "Downloading extension...",
      interactive: true
    },
    { 
      icon: Zap, 
      label: "Extension Added", 
      delay: 1200, 
      color: "from-purple-500 to-pink-500",
      action: "Installation complete!",
      interactive: true
    },
    { 
      icon: Check, 
      label: "Ready to Use", 
      delay: 600, 
      color: "from-green-500 to-lime",
      action: "Connecting to AI platforms...",
      interactive: true
    }
  ];

  // Interactive Functions
  const handleStepClick = useCallback((stepIndex: number) => {
    if (stepIndex === currentStep) {
      setGlowEffect(true);
      setShowClickIndicator(true);
      
      // Animate to next step
      setTimeout(() => {
        setCurrentStep(prev => Math.min(prev + 1, steps.length));
        setGlowEffect(false);
        setShowClickIndicator(false);
        setSparkles(prev => prev + 3);

        // Handle specific step animations
        if (stepIndex === 0) {
          // Chrome store opened
          setIsUserControlled(true);
        } else if (stepIndex === 1) {
          // Download progress
          let progress = 0;
          const interval = setInterval(() => {
            progress += 8;
            setDownloadProgress(progress);
            if (progress >= 100) {
              clearInterval(interval);
            }
          }, 60);
        } else if (stepIndex === 2) {
          // Platform connections
          const connectPlatforms = () => {
            [0, 1, 2].forEach((index) => {
              setTimeout(() => {
                setPlatformConnections(prev => {
                  const newConnections = [...prev];
                  newConnections[index] = true;
                  return newConnections;
                });
              }, index * 400);
            });
          };
          setTimeout(connectPlatforms, 200);
        } else if (stepIndex === 3) {
          // Final success
          setTimeout(() => {
            setShowSuccess(true);
            setSparkles(25);
          }, 400);
        }
      }, 300);
    }
  }, [currentStep, steps.length]);

  const handleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying && currentStep < steps.length) {
      const timer = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= steps.length) {
            clearInterval(timer);
            setIsAutoPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
  }, [isAutoPlaying, currentStep, steps.length]);

  const resetDemo = useCallback(() => {
    setCurrentStep(0);
    setShowSuccess(false);
    setGlowEffect(false);
    setSparkles(0);
    setDownloadProgress(0);
    setPlatformConnections([false, false, false]);
    setIsAutoPlaying(false);
    setIsUserControlled(false);
  }, []);

  // Mouse tracking for interactive effects
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100
    });
  }, []);

  // Auto-animation when not user controlled
  useEffect(() => {
    if (!isActive || isUserControlled) return;

    // Show initial click indicator
    const clickIndicatorTimer = setTimeout(() => {
      setShowClickIndicator(true);
      setTimeout(() => setShowClickIndicator(false), 2000);
    }, 1000);

    return () => clearTimeout(clickIndicatorTimer);
  }, [isActive, isUserControlled]);

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      {/* Interactive Control Panel */}
      <div className="mb-8 flex justify-center">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleAutoPlay}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                isAutoPlaying 
                  ? 'bg-red-500 text-white shadow-lg shadow-red-500/30' 
                  : 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
              }`}
            >
              <Play size={16} className={isAutoPlaying ? 'animate-pulse' : ''} />
              <span>{isAutoPlaying ? 'Pause' : 'Auto Play'}</span>
            </button>
            
            <button
              onClick={resetDemo}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl font-medium bg-gray-500 text-white transition-all duration-300 hover:bg-gray-600 shadow-lg shadow-gray-500/30"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>

            <div className="w-px h-8 bg-gray-300"></div>

            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mouse size={16} />
              <span>Click steps to control</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Step Navigator */}
      <div className="mb-12 flex justify-center">
        <div className="bg-gradient-to-r from-lime/20 via-white to-pink/20 rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-white/30">
          <div className="flex items-center space-x-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isClickable = index === currentStep;
              const isCompleted = currentStep > index;
              
              return (
                <button
                  key={index}
                  onClick={() => handleStepClick(index)}
                  disabled={!isClickable}
                  className={`relative flex flex-col items-center space-y-2 p-4 rounded-xl transition-all duration-500 ${
                    isClickable 
                      ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white shadow-2xl shadow-blue-500/40 scale-110 animate-pulse cursor-pointer hover:scale-115' 
                      : isCompleted
                        ? 'bg-gradient-to-br from-green-500 to-lime text-white shadow-lg shadow-green-500/30 scale-105'
                        : 'bg-gray-100 text-gray-400 scale-90 cursor-not-allowed'
                  }`}
                >
                  {/* Glowing ring for active step */}
                  {isClickable && (
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl blur-sm animate-pulse"></div>
                  )}
                  
                  {/* Step icon */}
                  <div className="relative z-10">
                    <Icon size={24} className={isClickable ? 'animate-bounce' : isCompleted ? 'animate-pulse' : ''} />
                  </div>
                  
                  {/* Step label */}
                  <span className="relative z-10 text-xs font-medium text-center">
                    {step.label}
                  </span>
                  
                  {/* Click indicator */}
                  {isClickable && showClickIndicator && (
                    <div className="absolute -top-2 -right-2 flex items-center space-x-1 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                      <ArrowRight size={12} />
                      <span>CLICK</span>
                    </div>
                  )}
                  
                  {/* Success check */}
                  {isCompleted && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Check size={12} className="text-green-500" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
          
          {/* Progress bar */}
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-lime via-blue-500 to-pink transition-all duration-1000 relative"
              style={{ width: `${(currentStep / steps.length) * 100}%` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse"></div>
            </div>
          </div>
          
          {/* Step counter */}
          <div className="mt-2 text-center">
            <span className="text-sm font-medium text-gray-600">
              Step {currentStep} of {steps.length}
            </span>
            {currentStep > 0 && (
              <span className="ml-2 text-xs text-green-600 font-medium">
                • {steps[currentStep - 1]?.action}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Animated mouse cursor for guidance */}
      {showClickIndicator && currentStep === 0 && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50">
          <div className="relative">
            <div className="w-8 h-8 bg-yellow-400 rounded-full animate-ping"></div>
            <div className="absolute inset-0 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce">
              <Mouse size={16} className="text-white" />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
              Click to start!
            </div>
          </div>
        </div>
      )}

      {/* Dynamic background effects based on mouse position */}
      <div 
        className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl"
        onMouseMove={handleMouseMove}
      >
        <div 
          className="absolute w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-48 h-48 bg-gradient-to-br from-lime/20 to-pink/20 rounded-full blur-2xl transition-all duration-1500"
          style={{
            left: `${100 - mousePosition.x}%`,
            top: `${100 - mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
      </div>

      {/* Installation feedback messages */}
      {currentStep > 0 && (
        <div className="mt-6 flex justify-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-xl border border-white/20 animate-fade-in">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">
                {steps[currentStep - 1]?.action || "Processing..."}
              </span>
              <div className="flex space-x-1">
                <div className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-1 h-1 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1 h-1 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      )}
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