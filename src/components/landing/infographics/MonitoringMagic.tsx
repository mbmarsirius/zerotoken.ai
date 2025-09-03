import { useEffect, useState } from "react";
import { Eye, Save, BarChart3, Clock } from "lucide-react";

interface MonitoringMagicProps {
  isActive: boolean;
}

export const MonitoringMagic = ({ isActive }: MonitoringMagicProps) => {
  const [tokenCount, setTokenCount] = useState(138827);
  const [percentage, setPercentage] = useState(69.4);
  const [showAutoSave, setShowAutoSave] = useState(false);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTokenCount(138827);
      setPercentage(69.4);
      setShowAutoSave(false);
      setTyping(false);
      return;
    }

    // Simulate real-time token tracking
    const tokenInterval = setInterval(() => {
      setTyping(true);
      setTokenCount(prev => prev + Math.floor(Math.random() * 50) + 10);
      setPercentage(prev => Math.max(0, prev - 0.5));
      
      setTimeout(() => setTyping(false), 1000);
    }, 2000);

    // Show auto-save periodically
    const saveInterval = setInterval(() => {
      setShowAutoSave(true);
      setTimeout(() => setShowAutoSave(false), 2000);
    }, 4000);

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
          {/* Main Token Counter */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-lime to-pink rounded-xl flex items-center justify-center">
                  <Eye size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">ZeroToken Monitor</h3>
                  <p className="text-sm text-gray-600">Real-time tracking</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">ACTIVE</span>
              </div>
            </div>

            {/* Token Counter - Matching the screenshot */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Context Usage</span>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  percentage < 30 ? 'text-red-500' : percentage < 60 ? 'text-orange-500' : 'text-green-500'
                }`}>
                  {tokenCount.toLocaleString()} tokens • {percentage.toFixed(1)}%
                </span>
              </div>
              
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ${
                    percentage < 30 ? 'bg-red-500' : 
                    percentage < 60 ? 'bg-orange-500' : 
                    'bg-gradient-to-r from-lime to-green-500'
                  }`}
                  style={{ width: `${percentage}%` }}
                />
              </div>

              {/* Auto-save indicator */}
              <div className={`flex items-center space-x-2 transition-all duration-300 ${
                showAutoSave ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              }`}>
                <Save size={14} className={`${showAutoSave ? 'text-green-500' : 'text-gray-400'}`} />
                <span className={`text-sm ${showAutoSave ? 'text-green-600' : 'text-gray-500'}`}>
                  Auto-saved {showAutoSave ? '✓ just now' : '• 30s ago'}
                </span>
              </div>
            </div>
          </div>

          {/* Features Panel */}
          <div className="bg-gradient-to-br from-lime/10 to-pink/10 rounded-3xl border border-lime/30 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Smart Features</h4>
            <div className="space-y-3">
              {[
                { icon: Save, label: "Auto-save: Unlimited", active: true },
                { icon: BarChart3, label: "Token Analytics", active: isActive },
                { icon: Clock, label: "Context History", active: true }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      feature.active ? 'bg-lime text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      <Icon size={14} />
                    </div>
                    <span className={`text-sm ${
                      feature.active ? 'text-gray-900 font-medium' : 'text-gray-500'
                    }`}>
                      {feature.label}
                    </span>
                    {feature.active && (
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-auto" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pro Badge */}
          <div className="bg-gradient-to-r from-pink to-lime rounded-2xl p-4 text-white text-center">
            <p className="font-semibold">ZeroToken Pro active • unlimited handoffs</p>
          </div>
        </div>

        {/* Right: Live Chat Simulation */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-900">ChatGPT</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600">ZeroToken Active</span>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 space-y-4 h-96 overflow-y-auto">
            {/* User message */}
            <div className="flex justify-end">
              <div className="bg-blue-500 text-white p-3 rounded-2xl max-w-xs">
                <p className="text-sm">
                  Help me analyze this complex dataset...
                  {typing && <span className="animate-pulse">|</span>}
                </p>
              </div>
            </div>

            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 p-3 rounded-2xl max-w-xs">
                <p className="text-sm">
                  I'll help you analyze the dataset. Based on the patterns I can see...
                </p>
              </div>
            </div>

            {/* Typing indicator */}
            {typing && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-1 bg-gray-100 rounded-full px-4 py-2">
                <span className="text-gray-500 text-sm">Type your message...</span>
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">→</span>
              </div>
            </div>
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