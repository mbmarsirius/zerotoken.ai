import { useEffect, useState, useRef } from "react";
import { Chrome, AlertTriangle, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import ZeroToken interface screenshots
import interface1 from "@/assets/zerotoken-interface-1.png";
import interface2 from "@/assets/zerotoken-interface-2.png";
import interface3 from "@/assets/zerotoken-interface-3.png";
import interface4 from "@/assets/zerotoken-interface-4.png";
import interface5 from "@/assets/zerotoken-interface-5.png";

export const HowItWorks = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const stages = [
    {
      id: "chaos",
      title: "The Chaos",
      subtitle: "Context limits kill productivity",
      duration: 7000,
      color: "from-red-500/30 to-orange-500/30"
    },
    {
      id: "arrival", 
      title: "ZeroToken Arrival",
      subtitle: "Smart solution in 30 seconds",
      duration: 6000,
      color: "from-blue-500/30 to-cyan-500/30"
    },
    {
      id: "transformation",
      title: "The Magic Transformation", 
      subtitle: "Unlimited context unlocked",
      duration: 10000,
      color: "from-lime/30 to-pink/30"
    },
    {
      id: "success",
      title: "Success Celebration",
      subtitle: "340% productivity boost achieved",
      duration: 7000,
      color: "from-lime/40 to-pink/40"
    }
  ];

  const totalDuration = stages.reduce((acc, stage) => acc + stage.duration, 0);

  useEffect(() => {
    if (!isPlaying || isPaused) return;

    let accumulatedTime = 0;
    const timers: NodeJS.Timeout[] = [];

    stages.forEach((stage, index) => {
      const timer = setTimeout(() => {
        setCurrentStage(index);
      }, accumulatedTime);
      
      timers.push(timer);
      accumulatedTime += stage.duration;
    });

    // Auto-restart after completion
    const restartTimer = setTimeout(() => {
      setCurrentStage(0);
    }, totalDuration);
    timers.push(restartTimer);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [isPlaying, isPaused]);

  const handleContainerHover = (isHovering: boolean) => {
    setIsPaused(isHovering);
  };

  const handleReplay = () => {
    setCurrentStage(0);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  const getCurrentProgress = () => {
    let elapsed = 0;
    for (let i = 0; i < currentStage; i++) {
      elapsed += stages[i].duration;
    }
    return (elapsed / totalDuration) * 100;
  };

  const renderStageContent = () => {
    switch (currentStage) {
      case 0: // The Chaos
        return (
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-4 px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl">
                <AlertTriangle className="text-red-500" size={24} />
                <span className={`text-xl font-bold text-red-500 transition-all duration-500 ${
                  currentStage === 0 ? 'animate-pulse' : ''
                }`}>
                  14,827/8,192 LIMIT REACHED ❌
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`p-6 bg-white/10 border border-white/20 rounded-2xl transition-all duration-1000 ${
                currentStage === 0 ? 'opacity-100 animate-fade-in' : 'opacity-60'
              }`}>
                <div className="space-y-3">
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-red-500 animate-pulse"></div>
                  </div>
                  <p className="text-sm text-gray-600 line-through">Previous conversation context lost...</p>
                  <p className="text-sm text-gray-600 line-through">Important details forgotten...</p>
                </div>
              </div>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <img 
                  src={interface1} 
                  alt="Context limit error"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );

      case 1: // ZeroToken Arrival  
        return (
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-4 px-6 py-3 bg-blue-500/20 border border-blue-500/30 rounded-xl transition-all duration-1000 ${
                currentStage === 1 ? 'scale-110' : 'scale-100'
              }`}>
                <Chrome className="text-blue-500" size={24} />
                <span className="text-xl font-bold text-blue-500">
                  Installing ZeroToken...
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col justify-center space-y-4">
                <div className={`p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl transition-all duration-1000 ${
                  currentStage === 1 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-blue-600 font-medium">Step 1: Chrome Extension</span>
                  </div>
                </div>
                
                <div className={`p-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl transition-all duration-1000 delay-500 ${
                  currentStage === 1 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">✅ Ready in 30 seconds!</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <img 
                  src={interface2} 
                  alt="ZeroToken installation"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );

      case 2: // The Magic Transformation
        return (
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-4 px-6 py-3 bg-gradient-to-r from-lime/20 to-pink/20 border border-lime/30 rounded-xl transition-all duration-1000 ${
                currentStage === 2 ? 'animate-pulse shadow-lg shadow-lime/20' : ''
              }`}>
                <Zap className="text-lime-600" size={24} />
                <span className="text-xl font-bold text-gray-900">
                  20,759 tokens • 10.4% ∞ UNLIMITED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className={`p-4 bg-gradient-to-r from-lime/10 to-pink/10 rounded-xl transition-all duration-1000 ${
                  currentStage === 2 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Context Status</span>
                    <span className="text-green-600 font-bold">Auto-saved ✓ just now</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r from-lime to-pink transition-all duration-2000 ${
                      currentStage === 2 ? 'w-full' : 'w-0'
                    }`}></div>
                  </div>
                </div>

                <div className={`p-4 bg-gradient-to-r from-lime/10 to-pink/10 rounded-xl transition-all duration-1000 delay-1000 ${
                  currentStage === 2 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Generate Handoff</span>
                    <span className="text-blue-600 font-bold">Complete! 100%</span>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <img 
                  src={interface3} 
                  alt="ZeroToken in action"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );

      case 3: // Success Celebration
        return (
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-lime/30 to-pink/30 border border-lime/40 rounded-2xl transition-all duration-1000 ${
                currentStage === 3 ? 'animate-scale-in shadow-2xl shadow-lime/30' : 'scale-95 opacity-80'
              }`}>
                <TrendingUp className="text-lime-600" size={32} />
                <div className="text-left">
                  <div className="text-2xl font-bold text-gray-900">340% Productivity Boost!</div>
                  <div className="text-lg text-gray-600">8.5h Daily Time Saved</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className={`p-6 bg-gradient-to-br from-lime/20 to-pink/20 rounded-2xl transition-all duration-1000 ${
                  currentStage === 3 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <h4 className="text-xl font-bold mb-4 text-gray-900">Mission Accomplished!</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span>Unlimited AI context</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span>Seamless conversation flow</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                      <span>Auto-save everything</span>
                    </li>
                  </ul>
                </div>

                <div className={`transition-all duration-1000 delay-500 ${
                  currentStage === 3 ? 'animate-fade-in' : 'opacity-0'
                }`}>
                  <Button 
                    size="xl"
                    className="w-full bg-gradient-to-r from-lime to-pink text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get ZeroToken Free
                  </Button>
                </div>
              </div>

              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <img 
                  src={interface4} 
                  alt="ZeroToken success"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section 
      id="how-it-works" 
      className="py-32 bg-gradient-to-br from-lime/5 via-white to-pink/5 relative overflow-hidden"
    >
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br ${stages[currentStage]?.color || 'from-lime/20 to-pink/20'} rounded-full blur-3xl opacity-60 transition-all duration-1000`}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink/20 to-lime/20 rounded-full blur-3xl opacity-40 transition-all duration-1000"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            Transform Your AI Workflow
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how ZeroToken eliminates context limits and unlocks unlimited AI productivity in 30 seconds
          </p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-lime to-pink transition-all duration-1000 ease-out"
              style={{ width: `${getCurrentProgress()}%` }}
            ></div>
          </div>
        </div>

        {/* Stage Indicator */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full">
            <div className={`w-3 h-3 rounded-full transition-all duration-500 ${
              stages[currentStage]?.id === 'chaos' ? 'bg-red-500' :
              stages[currentStage]?.id === 'arrival' ? 'bg-blue-500' :  
              stages[currentStage]?.id === 'transformation' ? 'bg-lime-500' :
              'bg-pink-500'
            }`}></div>
            <span className="font-semibold text-gray-800">
              {stages[currentStage]?.title || 'The Chaos'}
            </span>
            <span className="text-sm text-gray-600">
              {stages[currentStage]?.subtitle || 'Context limits kill productivity'}
            </span>
          </div>
        </div>

        {/* Main Animation Area */}
        <div 
          ref={containerRef}
          className="min-h-[600px] flex items-center justify-center cursor-pointer"
          onMouseEnter={() => handleContainerHover(true)}
          onMouseLeave={() => handleContainerHover(false)}
          onClick={handleReplay}
        >
          {renderStageContent()}
        </div>

        {/* Controls */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-4 text-sm text-gray-500">
            <span>Hover to pause • Click to replay</span>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
            <span>Auto-loops every 30 seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
};