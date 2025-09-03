import { useEffect, useState } from "react";
import { Eye, Save, BarChart3, Clock, Zap, Activity, Shield } from "lucide-react";

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

  useEffect(() => {
    if (!isActive) {
      setTokenCount(138827);
      setPercentage(69.4);
      setShowAutoSave(false);
      setTyping(false);
      setGlowEffect(false);
      setPulseIntensity(0);
      setDataFlow(0);
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

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* Left: ZeroToken UI Recreation */}
        <div className="space-y-6">
          {/* Enhanced Main Token Counter */}
          <div className={`bg-white/95 backdrop-blur-md rounded-3xl border shadow-2xl p-6 transition-all duration-500 ${
            glowEffect 
              ? 'border-lime/50 shadow-lime/20 shadow-2xl' 
              : 'border-gray-200'
          }`}>
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
                <div>
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

            {/* Enhanced Token Counter */}
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
                  {glowEffect && (
                    <Zap size={12} className="text-lime animate-spin" />
                  )}
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
                    {/* Animated data flow */}
                    <div 
                      className="absolute top-0 left-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 animate-pulse"
                      style={{ 
                        transform: `translateX(${dataFlow * 3}px)`,
                        transition: 'transform 0.5s ease-in-out'
                      }}
                    />
                  </div>
                </div>
                
                {/* Progress indicators */}
                <div className="absolute -top-1 left-0 right-0 flex justify-between">
                  {[25, 50, 75].map((mark, i) => (
                    <div key={i} className={`w-1 h-6 rounded-full transition-all duration-300 ${
                      percentage > mark ? 'bg-lime' : 'bg-gray-300'
                    }`} style={{ marginLeft: `${mark}%` }} />
                  ))}
                </div>
              </div>

              {/* Enhanced Auto-save indicator */}
              <div className={`flex items-center justify-between p-3 rounded-xl transition-all duration-500 ${
                showAutoSave 
                  ? 'bg-gradient-to-r from-green-50 to-lime/10 border border-green-200 scale-105' 
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    showAutoSave 
                      ? 'bg-green-500 animate-pulse shadow-lg shadow-green-500/30' 
                      : 'bg-gray-400'
                  }`}>
                    <Save size={14} className="text-white" />
                  </div>
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      showAutoSave ? 'text-green-700' : 'text-gray-600'
                    }`}>
                      Auto-saved {showAutoSave ? '✓ just now' : '• 30s ago'}
                    </span>
                    {showAutoSave && (
                      <div className="text-xs text-green-600 mt-1">Checkpoint created successfully</div>
                    )}
                  </div>
                </div>
                
                {showAutoSave && (
                  <div className="flex items-center space-x-1">
                    <Shield size={12} className="text-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">SECURE</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Features Panel */}
          <div className={`bg-gradient-to-br from-lime/15 to-pink/15 rounded-3xl border-2 p-6 transition-all duration-500 ${
            glowEffect 
              ? 'border-lime/50 shadow-lg shadow-lime/20' 
              : 'border-lime/30'
          }`}>
            <div className="flex items-center justify-between mb-5">
              <h4 className="font-bold text-gray-900 text-lg">Smart Features</h4>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                glowEffect ? 'bg-lime animate-pulse' : 'bg-lime/50'
              }`}>
                <Zap size={12} className="text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              {[
                { icon: Save, label: "Auto-save: Unlimited", active: true, status: "ACTIVE" },
                { icon: BarChart3, label: "Token Analytics", active: isActive, status: "MONITORING" },
                { icon: Clock, label: "Context History", active: true, status: "READY" }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-300 ${
                    feature.active 
                      ? 'bg-white/80 border-lime/30 shadow-sm' 
                      : 'bg-gray-50/80 border-gray-200'
                  }`}>
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        feature.active 
                          ? glowEffect && index === 1
                            ? 'bg-gradient-to-r from-lime to-green-400 animate-pulse shadow-lg' 
                            : 'bg-lime text-white shadow-sm' 
                          : 'bg-gray-200 text-gray-500'
                      }`}>
                        <Icon size={16} className={glowEffect && feature.active && index === 1 ? 'animate-bounce' : ''} />
                      </div>
                      <div>
                        <span className={`text-sm font-medium transition-colors duration-300 ${
                          feature.active ? 'text-gray-900' : 'text-gray-500'
                        }`}>
                          {feature.label}
                        </span>
                        {feature.active && (
                          <div className="text-xs text-gray-600 mt-1">{feature.status}</div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {feature.active && (
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          glowEffect && index === 1 
                            ? 'bg-lime animate-ping' 
                            : 'bg-green-500 animate-pulse'
                        }`} />
                      )}
                      <span className={`text-xs font-bold transition-colors duration-300 ${
                        feature.active ? 'text-green-600' : 'text-gray-400'
                      }`}>
                        {feature.active ? 'ON' : 'OFF'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enhanced Pro Badge */}
          <div className={`bg-gradient-to-r from-pink via-purple-500 to-lime rounded-3xl p-5 text-white text-center shadow-2xl transition-all duration-500 ${
            glowEffect ? 'shadow-pink/30 scale-105' : 'shadow-pink/20'
          }`}>
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap size={18} className={glowEffect ? 'animate-spin' : ''} />
              <span className="font-bold text-lg">ZeroToken Pro</span>
              <Zap size={18} className={glowEffect ? 'animate-spin' : ''} style={{ animationDirection: 'reverse' }} />
            </div>
            <p className="text-sm opacity-90">Active • Unlimited handoffs & monitoring</p>
            {glowEffect && (
              <div className="mt-2 flex justify-center space-x-1">
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            )}
          </div>
        </div>

        {/* Right: Enhanced Live Chat Simulation */}
        <div className={`bg-white rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500 ${
          typing 
            ? 'border-blue-300 shadow-blue-500/20' 
            : 'border-gray-200'
        }`}>
          {/* Enhanced Chat Header */}
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

          {/* Enhanced Chat Messages */}
          <div className="p-6 space-y-5 h-96 overflow-y-auto relative">
            {/* Floating token counter overlay */}
            <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
              typing 
                ? 'bg-blue-500 text-white animate-pulse' 
                : 'bg-gray-200 text-gray-600'
            }`}>
              {typing ? 'Tracking...' : `${Math.floor(percentage)}%`}
            </div>
            
            {/* User message */}
            <div className="flex justify-end">
              <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-3xl max-w-xs shadow-lg transition-all duration-300 ${
                typing ? 'scale-105 shadow-blue-500/30' : ''
              }`}>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-xs opacity-80">You</span>
                </div>
                <p className="text-sm leading-relaxed">
                  Help me analyze this complex dataset and provide insights on customer behavior patterns...
                  {typing && <span className="animate-pulse ml-1">|</span>}
                </p>
              </div>
            </div>

            {/* AI response */}
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
                  I'll help you analyze the dataset. Based on the patterns I can see, there are several interesting trends in customer behavior...
                </p>
              </div>
            </div>

            {/* Enhanced Typing indicator */}
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
                    <Zap size={12} className="text-blue-500 animate-spin" />
                  </div>
                </div>
              </div>
            )}

            {/* Data flow visualization */}
            {typing && (
              <div className="absolute bottom-4 left-4 right-4">
                <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-lime animate-pulse" style={{ width: '70%' }}></div>
                </div>
                <div className="text-xs text-center text-gray-500 mt-1">Processing context...</div>
              </div>
            )}
          </div>

          {/* Enhanced Chat Input */}
          <div className={`border-t p-4 transition-all duration-300 ${
            typing ? 'border-blue-200 bg-blue-50/30' : 'border-gray-200'
          }`}>
            <div className="flex items-center space-x-3">
              <div className={`flex-1 rounded-2xl px-4 py-3 transition-all duration-300 ${
                typing 
                  ? 'bg-white border border-blue-200 shadow-sm' 
                  : 'bg-gray-100'
              }`}>
                <span className={`text-sm transition-colors duration-300 ${
                  typing ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {typing ? 'ZeroToken is monitoring context...' : 'Type your message...'}
                </span>
              </div>
              <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                typing 
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 animate-pulse shadow-lg shadow-blue-500/30' 
                  : 'bg-blue-500 hover:bg-blue-600'
              }`}>
                {typing ? (
                  <Activity size={16} className="text-white animate-spin" />
                ) : (
                  <span className="text-white font-bold">→</span>
                )}
              </div>
            </div>
            
            {/* Token usage indicator in input area */}
            {typing && (
              <div className="mt-2 flex items-center justify-between text-xs">
                <span className="text-blue-600">Context: {percentage.toFixed(1)}% used</span>
                <span className="text-green-600">Auto-save ready</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="mt-8 grid grid-cols-4 gap-4">
        <div className="text-center p-4 bg-green-50 rounded-2xl border border-green-200">
          <div className="text-2xl font-bold text-green-600">{percentage.toFixed(1)}%</div>
          <div className="text-sm text-green-800">Tokens Used</div>
        </div>
        <div className="text-center p-4 bg-blue-50 rounded-2xl border border-blue-200">
          <div className="text-2xl font-bold text-blue-600">Real-time</div>
          <div className="text-sm text-blue-800">Monitoring</div>
        </div>
        <div className="text-center p-4 bg-lime/20 rounded-2xl border border-lime/40">
          <div className="text-2xl font-bold text-lime-700">∞</div>
          <div className="text-sm text-lime-800">Auto-saves</div>
        </div>
        <div className="text-center p-4 bg-pink/20 rounded-2xl border border-pink/40">
          <div className="text-2xl font-bold text-pink-700">24/7</div>
          <div className="text-sm text-pink-800">Active</div>
        </div>
      </div>

      {/* Floating Monitoring Icon */}
      <div className="absolute -top-4 -left-4 animate-bounce" style={{ animationDelay: '0.5s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center shadow-lg">
          <Eye size={20} className="text-white" />
        </div>
      </div>
    </div>
  );
};