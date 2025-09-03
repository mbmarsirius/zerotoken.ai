import { useEffect, useState } from "react";
import { AlertTriangle, MessageSquare, X } from "lucide-react";

interface ProblemAnimationProps {
  isActive: boolean;
}

export const ProblemAnimation = ({ isActive }: ProblemAnimationProps) => {
  const [tokenCount, setTokenCount] = useState(100);
  const [showError, setShowError] = useState(false);
  const [messagesCount, setMessagesCount] = useState(1);

  useEffect(() => {
    if (!isActive) return;

    const interval = setInterval(() => {
      setTokenCount(prev => {
        if (prev > 0) {
          return Math.max(0, prev - 2);
        }
        return prev;
      });
      
      setMessagesCount(prev => Math.min(8, prev + 1));
    }, 200);

    const errorTimer = setTimeout(() => {
      setShowError(true);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(errorTimer);
    };
  }, [isActive]);

  // Reset animation when not active
  useEffect(() => {
    if (!isActive) {
      setTokenCount(100);
      setShowError(false);
      setMessagesCount(1);
    }
  }, [isActive]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Chat Interface Mockup */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-gray-600 font-medium">ChatGPT</span>
          </div>
        </div>

        {/* Token Counter - Getting Critical */}
        <div className="px-6 py-4 bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle 
                size={16} 
                className={`transition-all duration-500 ${
                  tokenCount < 20 ? 'text-red-500 animate-pulse' : 'text-orange-500'
                }`} 
              />
              <span className={`text-sm font-medium transition-colors duration-500 ${
                tokenCount < 20 ? 'text-red-700' : 'text-orange-700'
              }`}>
                Context: {tokenCount}% remaining
              </span>
            </div>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  tokenCount < 20 ? 'bg-red-500' : tokenCount < 50 ? 'bg-orange-500' : 'bg-green-500'
                }`}
                style={{ width: `${tokenCount}%` }}
              />
            </div>
          </div>
        </div>

        {/* Chat Messages - Growing Uncontrollably */}
        <div className="p-6 space-y-4 max-h-96 overflow-hidden relative">
          {Array.from({ length: messagesCount }).map((_, index) => (
            <div 
              key={index}
              className={`animate-fade-in transition-all duration-500 ${
                index >= 5 ? 'opacity-30 scale-95' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-2xl ${
                  index % 2 === 0 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <MessageSquare size={12} />
                    <span className="text-xs opacity-75">
                      {index % 2 === 0 ? 'You' : 'AI'}
                    </span>
                  </div>
                  <p className="text-sm">
                    {index % 2 === 0 
                      ? `Message ${index + 1}: This is getting too long and complex...`
                      : `AI Response ${index + 1}: Adding more context that consumes tokens...`
                    }
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Overflow gradient */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        {/* Error Message */}
        {showError && (
          <div className="mx-6 mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl animate-fade-in">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <X size={20} className="text-red-500" />
                <div>
                  <p className="font-medium text-red-800">Context limit exceeded</p>
                  <p className="text-sm text-red-600">Your conversation is too long to continue</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-xs text-red-600">Failed</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Problem Indicators */}
      <div className="absolute -top-4 -right-4 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
          <AlertTriangle size={20} className="text-white" />
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <X size={16} className="text-white" />
        </div>
      </div>

      {/* Problem Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-red-50 rounded-2xl border border-red-200">
          <div className="text-2xl font-bold text-red-600">{100 - tokenCount}%</div>
          <div className="text-sm text-red-800">Context Lost</div>
        </div>
        <div className="text-center p-4 bg-orange-50 rounded-2xl border border-orange-200">
          <div className="text-2xl font-bold text-orange-600">{messagesCount}</div>
          <div className="text-sm text-orange-800">Stuck Messages</div>
        </div>
        <div className="text-center p-4 bg-gray-50 rounded-2xl border border-gray-200">
          <div className="text-2xl font-bold text-gray-600">0</div>
          <div className="text-sm text-gray-800">Solutions</div>
        </div>
      </div>
    </div>
  );
};