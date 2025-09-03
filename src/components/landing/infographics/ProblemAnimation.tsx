import { useEffect, useState } from "react";
import { MessageSquare, AlertTriangle, Clock, Zap, X, ChevronRight, Info, Play } from "lucide-react";

interface ProblemAnimationProps {
  isActive: boolean;
}

export const ProblemAnimation = ({ isActive }: ProblemAnimationProps) => {
  const [chaosLevel, setChaosLevel] = useState(0);
  const [showContextLoss, setShowContextLoss] = useState(false);
  const [showFrustration, setShowFrustration] = useState(false);
  const [activeMessages, setActiveMessages] = useState<number[]>([]);
  const [selectedScenario, setSelectedScenario] = useState<'without' | 'with' | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  const scenarios = {
    without: {
      title: "Without ZeroToken",
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      steps: [
        "Start new conversation with 8K tokens",
        "Hit context limit after 15 messages", 
        "Lose all previous context",
        "Start over and re-explain everything",
        "Repeat cycle endlessly..."
      ]
    },
    with: {
      title: "With ZeroToken",
      color: "from-lime to-green-500", 
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      steps: [
        "Start conversation with unlimited context",
        "Auto-checkpoint saves your progress",
        "Smart handoffs preserve context",
        "Continue seamlessly for hours",
        "Maximum productivity achieved!"
      ]
    }
  };

  useEffect(() => {
    if (!isActive) {
      setChaosLevel(0);
      setShowContextLoss(false);
      setShowFrustration(false);
      setActiveMessages([]);
      setSelectedScenario(null);
      setShowDetails(false);
      setAnimationStep(0);
      return;
    }

    // Progressive chaos animation
    const chaosTimer = setTimeout(() => setChaosLevel(1), 1000);
    const contextTimer = setTimeout(() => setShowContextLoss(true), 2500);
    const frustrationTimer = setTimeout(() => setShowFrustration(true), 4000);

    // Animate message overflow
    const messageInterval = setInterval(() => {
      setActiveMessages(prev => {
        if (prev.length < 15) {
          return [...prev, prev.length];
        }
        clearInterval(messageInterval);
        return prev;
      });
    }, 200);

    return () => {
      clearTimeout(chaosTimer);
      clearTimeout(contextTimer);
      clearTimeout(frustrationTimer);
      clearInterval(messageInterval);
    };
  }, [isActive]);

  const handleScenarioClick = (scenario: 'without' | 'with') => {
    setSelectedScenario(scenario);
    setShowDetails(true);
    setAnimationStep(0);
    
    // Animate through steps
    const steps = scenarios[scenario].steps;
    steps.forEach((_, index) => {
      setTimeout(() => {
        setAnimationStep(index + 1);
      }, (index + 1) * 1000);
    });
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Interactive Scenario Buttons */}
      <div className="grid lg:grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => handleScenarioClick('without')}
          className={`p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
            selectedScenario === 'without' 
              ? 'bg-red-50 border-red-300 shadow-xl' 
              : 'bg-gray-50 border-gray-200 hover:border-red-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
                <AlertTriangle size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">Without ZeroToken</h3>
                <p className="text-sm text-gray-600">The problem experience</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <Play size={16} className="text-red-500" />
            <span className="text-sm font-medium text-red-600">Click to see chaos</span>
          </div>
        </button>

        <button
          onClick={() => handleScenarioClick('with')}
          className={`p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
            selectedScenario === 'with' 
              ? 'bg-green-50 border-green-300 shadow-xl' 
              : 'bg-gray-50 border-gray-200 hover:border-green-200'
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-lime to-green-500 rounded-xl flex items-center justify-center">
                <Zap size={20} className="text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900">With ZeroToken</h3>
                <p className="text-sm text-gray-600">The solution experience</p>
              </div>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </div>
          <div className="flex items-center space-x-2">
            <Play size={16} className="text-green-500" />
            <span className="text-sm font-medium text-green-600">Click to see magic</span>
          </div>
        </button>
      </div>

      {/* Animated Scenario Flow */}
      {showDetails && selectedScenario && (
        <div className="mb-8 animate-fade-in">
          <div className={`${scenarios[selectedScenario].bgColor} ${scenarios[selectedScenario].borderColor} rounded-3xl border-2 p-8`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">{scenarios[selectedScenario].title}</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
              >
                <X size={16} className="text-gray-600" />
              </button>
            </div>
            
            <div className="space-y-4">
              {scenarios[selectedScenario].steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white/70 rounded-2xl border transition-all duration-500 ${
                    animationStep > index
                      ? 'border-gray-300 opacity-100 translate-x-0'
                      : 'border-gray-200 opacity-50 translate-x-4'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 ${
                    animationStep > index
                      ? `bg-gradient-to-r ${scenarios[selectedScenario].color} text-white scale-100`
                      : 'bg-gray-200 text-gray-500 scale-75'
                  }`}>
                    {index + 1}
                  </div>
                  <span className={`font-medium transition-colors duration-500 ${
                    animationStep > index ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                  {animationStep > index && (
                    <div className="ml-auto">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left: Chaos Simulation */}
        <div className="space-y-6">
          {/* Chat Interface Mockup */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="bg-gray-800 px-6 py-4 flex items-center space-x-3">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-medium">AI Assistant - Context Lost!</span>
            </div>
            
            <div className="p-6 space-y-4 max-h-80 overflow-hidden relative">
              {activeMessages.map((_, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    index >= 8 ? 'opacity-20 blur-sm animate-pulse' : 'animate-fade-in'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-xs p-3 rounded-2xl ${
                      index % 2 === 0 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    } ${index >= 10 ? 'border-2 border-red-500 animate-bounce' : ''}`}>
                      <div className="flex items-center space-x-2 mb-1">
                        <MessageSquare size={12} />
                        <span className="text-xs opacity-75">
                          {index % 2 === 0 ? 'You' : 'AI'}
                        </span>
                      </div>
                      <p className="text-sm">
                        {index < 10 
                          ? `Message ${index + 1}: Adding context...`
                          : `ERROR: Context overflow at message ${index + 1}`
                        }
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Overflow warning */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white via-red-50 to-transparent" />
              {activeMessages.length > 10 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-red-500 text-white text-sm rounded-full animate-pulse">
                  ⚠️ Context Limit Exceeded
                </div>
              )}
            </div>
          </div>

          {/* Interactive Problem Stats */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => {
                setSelectedScenario('without');
                setShowDetails(true);
              }}
              className="p-4 bg-red-50 border-2 border-red-200 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="text-2xl font-bold text-red-600 mb-1">{Math.min(activeMessages.length * 10, 100)}%</div>
              <div className="text-sm text-red-700">Context Lost</div>
              <Info size={16} className="text-red-500 mx-auto mt-2" />
            </button>
            
            <button 
              onClick={() => {
                setSelectedScenario('without');
                setShowDetails(true);
              }}
              className="p-4 bg-orange-50 border-2 border-orange-200 rounded-2xl hover:scale-105 transition-transform"
            >
              <div className="text-2xl font-bold text-orange-600 mb-1">{activeMessages.length}</div>
              <div className="text-sm text-orange-700">Messages Lost</div>
              <Play size={16} className="text-orange-500 mx-auto mt-2" />
            </button>
          </div>
        </div>

        {/* Right: Context Chaos Visualization */}
        <div className="space-y-6">
          {/* Token Counter */}
          <div className={`bg-white rounded-3xl border-2 p-6 transition-all duration-1000 ${
            showContextLoss ? 'border-red-300 shadow-xl animate-pulse' : 'border-gray-200'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Clock size={20} className={showContextLoss ? 'text-red-500 animate-spin' : 'text-gray-500'} />
                <span className="font-semibold text-gray-900">Token Usage</span>
              </div>
              {showContextLoss && (
                <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
              )}
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Available</span>
                <span className="font-semibold text-red-600">
                  {Math.max(0, 8192 - activeMessages.length * 800)} / 8192
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    activeMessages.length > 10 
                      ? 'bg-gradient-to-r from-red-600 to-red-500 animate-pulse' 
                      : 'bg-gradient-to-r from-yellow-500 to-red-500'
                  }`}
                  style={{ width: `${Math.min(100, (activeMessages.length / 12) * 100)}%` }}
                />
              </div>
              {activeMessages.length > 10 && (
                <div className="text-xs text-red-600 font-medium animate-pulse">
                  ⚠️ CRITICAL: Context buffer exceeded
                </div>
              )}
            </div>
          </div>

          {/* Frustration Meter */}
          <div className={`bg-white rounded-3xl border-2 p-6 transition-all duration-1000 ${
            showFrustration ? 'border-orange-300 shadow-xl' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle size={20} className={showFrustration ? 'text-orange-500 animate-bounce' : 'text-gray-500'} />
              <span className="font-semibold text-gray-900">User Frustration</span>
            </div>
            
            <div className="space-y-3">
              {['Re-explaining context', 'Lost progress', 'Decreased productivity'].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all duration-500 ${
                    chaosLevel > 0 && index < activeMessages.length / 5
                      ? 'bg-red-50 border border-red-200' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${
                    chaosLevel > 0 && index < activeMessages.length / 5
                      ? 'bg-red-500 animate-pulse' 
                      : 'bg-gray-300'
                  }`} />
                  <span className={`text-sm ${
                    chaosLevel > 0 && index < activeMessages.length / 5
                      ? 'text-red-700 font-medium' 
                      : 'text-gray-600'
                  }`}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <button
            onClick={() => handleScenarioClick('with')}
            className="w-full p-6 bg-gradient-to-r from-lime/20 to-green/20 rounded-3xl border-2 border-lime/40 hover:scale-105 transition-transform"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-lime to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap size={20} className="text-white" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">See the ZeroToken Solution</h4>
              <p className="text-sm text-gray-600">Click to see how we solve this problem</p>
            </div>
          </button>
        </div>
      </div>

      {/* Floating chaos particles */}
      {chaosLevel > 0 && Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.5 + Math.random()}s`
          }}
        />
      ))}
    </div>
  );
};