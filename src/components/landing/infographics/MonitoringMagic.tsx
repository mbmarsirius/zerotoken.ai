import React, { useEffect, useState } from "react";
import { Monitor, Zap, CheckCircle, AlertCircle, Activity, Play, Info, X, ChevronRight, Eye, Save, BarChart3, Clock, Shield } from "lucide-react";

interface MonitoringMagicProps {
  isActive: boolean;
}

export const MonitoringMagic = ({ isActive }: MonitoringMagicProps) => {
  const [tokenCount, setTokenCount] = useState(138827);
  const [percentage, setPercentage] = useState(69.4);
  const [showAutoSave, setShowAutoSave] = useState(false);
  const [typing, setTyping] = useState(false);
  const [glowEffect, setGlowEffect] = useState(false);
  const [pulseIntensity, setPulseIntensity] = useState(0);
  const [dataFlow, setDataFlow] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTokenCount(138827);
      setPercentage(69.4);
      setShowAutoSave(false);
      setTyping(false);
      setGlowEffect(false);
      setPulseIntensity(0);
      setDataFlow(0);
      setSelectedFeature(null);
      setShowDetails(false);
      return;
    }

    // Enhanced real-time token tracking with smooth animations
    const tokenInterval = setInterval(() => {
      setTyping(true);
      setGlowEffect(true);
      setTokenCount(prev => prev + Math.floor(Math.random() * 80) + 20);
      setPercentage(prev => Math.max(10, prev - (Math.random() * 0.8 + 0.2)));
      setPulseIntensity(prev => (prev + 1) % 3);
      setDataFlow(prev => (prev + 1) % 100);
      
      setTimeout(() => {
        setTyping(false);
        setGlowEffect(false);
      }, 1200);
    }, 1800);

    // Enhanced auto-save with visual feedback
    const saveInterval = setInterval(() => {
      setShowAutoSave(true);
      setTimeout(() => setShowAutoSave(false), 2500);
    }, 3500);

    return () => {
      clearInterval(tokenInterval);
      clearInterval(saveInterval);
    };
  }, [isActive]);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
    setShowDetails(true);
  };

  const features = [
    {
      id: 'realtime',
      title: 'Real-time Monitoring',
      icon: Activity,
      description: 'Track token usage instantly',
      details: [
        'Live token counter display',
        'Real-time conversation tracking',
        'Instant notifications on limits',
        'Visual progress indicators'
      ]
    },
    {
      id: 'smart-alerts',
      title: 'Smart Alerts',
      icon: AlertCircle,
      description: 'Get notified before limits',
      details: [
        'Context limit warnings at 80%',
        'Smart checkpoint suggestions',
        'Proactive handoff generation',
        'Customizable alert thresholds'
      ]
    },
    {
      id: 'ui-recreation',
      title: 'UI Recreation',
      icon: Monitor,
      description: 'Beautiful overlay interface',
      details: [
        'Non-intrusive overlay design',
        'Seamless integration with ChatGPT',
        'Customizable themes and positions',
        'One-click feature access'
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Interactive Feature Selection */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <button
              key={feature.id}
              onClick={() => handleFeatureClick(feature.id)}
              className={`p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 ${
                selectedFeature === feature.id 
                  ? 'bg-green-50 border-green-300 shadow-xl' 
                  : 'bg-gray-50 border-gray-200 hover:border-green-200'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                  selectedFeature === feature.id 
                    ? 'bg-gradient-to-r from-lime to-green-500' 
                    : 'bg-gray-300'
                }`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{feature.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <Play size={14} className="text-green-500" />
                  <span className="text-xs text-green-600">Click to explore</span>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feature Details Modal */}
      {showDetails && selectedFeature && (
        <div className="mb-8 animate-fade-in">
          <div className="bg-white rounded-3xl border-2 border-green-200 shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-lime to-green-500 rounded-2xl flex items-center justify-center">
                  {React.createElement(features.find(f => f.id === selectedFeature)?.icon || Activity, { size: 28, className: "text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {features.find(f => f.id === selectedFeature)?.title}
                  </h3>
                  <p className="text-gray-600">
                    {features.find(f => f.id === selectedFeature)?.description}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowDetails(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X size={16} className="text-gray-600" />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                <div className="space-y-3">
                  {features.find(f => f.id === selectedFeature)?.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-lime to-green-500" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h4 className="font-bold text-gray-900 mb-4">Live Preview:</h4>
                <div className="space-y-3">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Status</span>
                      <span className="text-green-600 font-semibold">Active</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Monitoring</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-green-600 font-semibold">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: ZeroToken UI Recreation */}
        <div className="space-y-6">
          {/* Interactive Monitoring Panel */}
          <button
            onClick={() => handleFeatureClick('realtime')}
            className={`w-full bg-white/95 backdrop-blur-md rounded-3xl border shadow-2xl p-6 transition-all duration-500 hover:scale-105 ${
              glowEffect 
                ? 'border-lime/50 shadow-lime/20 shadow-2xl' 
                : 'border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  glowEffect 
                    ? 'bg-gradient-to-r from-lime via-green-400 to-pink animate-pulse shadow-lg shadow-lime/50' 
                    : 'bg-gradient-to-r from-lime to-pink'
                }`}>
                  <Eye size={22} className={`text-white transition-all duration-300 ${
                    glowEffect ? 'animate-bounce' : ''
                  }`} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 text-lg">ZeroToken Monitor</h3>
                  <p className="text-sm text-gray-600">Real-time AI tracking</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  glowEffect 
                    ? 'bg-lime animate-ping shadow-lg shadow-lime/50' 
                    : 'bg-green-500 animate-pulse'
                }`}></div>
                <span className={`text-xs font-bold transition-colors duration-300 ${
                  glowEffect ? 'text-lime-600' : 'text-green-600'
                }`}>
                  MONITORING
                </span>
                <Activity size={14} className={`text-green-500 ${glowEffect ? 'animate-bounce' : ''}`} />
              </div>
            </div>

            {/* Token Counter Display */}
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 font-medium">Context Usage</span>
                  {glowEffect && (
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-lime rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-1 h-1 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`text-sm font-bold transition-all duration-300 ${
                    percentage < 30 
                      ? 'text-red-500 animate-pulse' 
                      : percentage < 60 
                        ? 'text-orange-500' 
                        : glowEffect 
                          ? 'text-lime-600' 
                          : 'text-green-500'
                  }`}>
                    {tokenCount.toLocaleString()} tokens • {percentage.toFixed(1)}%
                  </span>
                  <Info size={12} className="text-gray-400" />
                </div>
              </div>
              
              <div className="relative">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div 
                    className={`h-full transition-all duration-700 relative ${
                      percentage < 30 
                        ? 'bg-gradient-to-r from-red-500 to-red-600' 
                        : percentage < 60 
                          ? 'bg-gradient-to-r from-orange-500 to-yellow-500' 
                          : 'bg-gradient-to-r from-lime via-green-400 to-green-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  >
                    <div 
                      className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-pulse"
                      style={{ 
                        transform: `translateX(${dataFlow * 3}px)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </button>

          {/* Interactive Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleFeatureClick('smart-alerts')}
              className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200 hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <AlertCircle size={24} className="text-orange-500 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">Smart Alerts</h4>
                <p className="text-xs text-gray-600">Get notified early</p>
                <Play size={14} className="text-orange-500 mx-auto mt-2" />
              </div>
            </button>

            <button
              onClick={() => handleFeatureClick('ui-recreation')}
              className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-200 hover:scale-105 transition-transform"
            >
              <div className="text-center">
                <Monitor size={24} className="text-blue-500 mx-auto mb-2" />
                <h4 className="font-bold text-gray-900 mb-1">UI Integration</h4>
                <p className="text-xs text-gray-600">Beautiful interface</p>
                <Info size={14} className="text-blue-500 mx-auto mt-2" />
              </div>
            </button>
          </div>

          {/* Pro Badge */}
          <div className={`bg-gradient-to-r from-pink via-purple-500 to-lime rounded-3xl p-5 text-white text-center shadow-2xl transition-all duration-500 ${
            glowEffect ? 'shadow-pink/30 scale-105' : 'shadow-pink/20'
          }`}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap size={18} className={glowEffect ? 'animate-spin' : ''} />
              <span className="font-bold text-lg">ZeroToken Pro</span>
              <Zap size={18} className={glowEffect ? 'animate-spin' : ''} style={{ animationDirection: 'reverse' }} />
            </div>
            <p className="text-sm opacity-90">Active • Unlimited monitoring & features</p>
          </div>
        </div>

        {/* Right: Live Chat Simulation */}
        <div className={`bg-white rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
          typing 
            ? 'border-blue-300 shadow-blue-500/20' 
            : 'border-gray-200'
        }`}>
          <div className={`border-b px-6 py-4 transition-all duration-300 ${
            typing 
              ? 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200' 
              : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center ${
                  typing ? 'animate-pulse' : ''
                }`}>
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <span className="font-bold text-gray-900 text-lg">ChatGPT</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  typing 
                    ? 'bg-blue-500 animate-ping' 
                    : 'bg-green-500 animate-pulse'
                }`}></div>
                <div className="text-right">
                  <span className={`text-xs font-bold transition-colors duration-300 ${
                    typing ? 'text-blue-600' : 'text-green-600'
                  }`}>
                    ZeroToken {typing ? 'MONITORING' : 'ACTIVE'}
                  </span>
                  <div className="text-xs text-gray-500">Real-time tracking</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-5 h-96 overflow-y-auto relative">
            <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              typing 
                ? 'bg-blue-500 text-white animate-pulse' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {typing ? 'Tracking...' : `${Math.floor(percentage)}%`}
            </div>
            
            <div className="flex justify-end">
              <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-3xl max-w-xs shadow-lg transition-all duration-300 ${
                typing ? 'scale-105 shadow-blue-500/30' : ''
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xs opacity-80">You</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Help me analyze this complex dataset and provide insights...
                  {typing && <span className="animate-pulse ml-1">|</span>}
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <div className={`bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 p-4 rounded-3xl max-w-xs border shadow-sm transition-all duration-300 ${
                typing ? 'border-blue-200 shadow-blue-500/10' : 'border-gray-200'
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className={`w-2 h-2 rounded-full ${typing ? 'bg-blue-500 animate-pulse' : 'bg-green-500'}`}></div>
                  <span className="text-xs text-gray-600">ChatGPT</span>
                  <Activity size={10} className={`text-gray-500 ${typing ? 'animate-spin' : ''}`} />
                </div>
                <p className="text-sm leading-relaxed text-gray-800">
                  I'll help you analyze the dataset. Based on the patterns I can see...
                </p>
              </div>
            </div>

            {typing && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 p-4 rounded-3xl shadow-lg shadow-blue-500/20">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-xs text-blue-600 font-medium">AI is thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive Bottom Stats */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <button
          onClick={() => handleFeatureClick('realtime')}
          className="text-center p-4 bg-green-50 rounded-2xl border border-green-200 hover:scale-105 transition-transform"
        >
          <div className="text-2xl font-bold text-green-600">{percentage.toFixed(1)}%</div>
          <div className="text-sm text-green-800">Tokens Used</div>
          <Info size={16} className="text-green-500 mx-auto mt-2" />
        </button>
        <button
          onClick={() => handleFeatureClick('realtime')}
          className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200 hover:scale-105 transition-transform"
        >
          <div className="text-2xl font-bold text-blue-600">Live</div>
          <div className="text-sm text-blue-800">Monitoring</div>
          <Play size={16} className="text-blue-500 mx-auto mt-2" />
        </button>
        <button
          onClick={() => handleFeatureClick('smart-alerts')}
          className="text-center p-4 bg-lime/20 rounded-2xl border border-lime/40 hover:scale-105 transition-transform"
        >
          <div className="text-2xl font-bold text-lime-700">∞</div>
          <div className="text-sm text-lime-800">Auto-saves</div>
          <Activity size={16} className="text-lime-600 mx-auto mt-2" />
        </button>
        <button
          onClick={() => handleFeatureClick('ui-recreation')}
          className="text-center p-4 bg-pink/20 rounded-2xl border border-pink/40 hover:scale-105 transition-transform"
        >
          <div className="text-2xl font-bold text-pink-700">24/7</div>
          <div className="text-sm text-pink-800">Active</div>
          <ChevronRight size={16} className="text-pink-600 mx-auto mt-2" />
        </button>
      </div>
    </div>
  );
};