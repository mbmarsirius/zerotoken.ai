import { useEffect, useState } from "react";
import { AlertTriangle, MessageSquare, X, Zap } from "lucide-react";

interface ProblemAnimationProps {
  isActive: boolean;
}

export const ProblemAnimation = ({ isActive }: ProblemAnimationProps) => {
  const [tokenCount, setTokenCount] = useState(100);
  const [showError, setShowError] = useState(false);
  const [messagesCount, setMessagesCount] = useState(1);
  const [showChaos, setShowChaos] = useState(false);
  const [particleCount, setParticleCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    // Start chaos effect
    const chaosTimer = setTimeout(() => setShowChaos(true), 1000);

    const interval = setInterval(() => {
      setTokenCount(prev => {
        if (prev > 0) {
          return Math.max(0, prev - 3);
        }
        return prev;
      });
      
      setMessagesCount(prev => Math.min(12, prev + 1));
      setParticleCount(prev => Math.min(20, prev + 2));
    }, 150);

    const errorTimer = setTimeout(() => {
      setShowError(true);
    }, 3500);

    return () => {
      clearTimeout(chaosTimer);
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
      setShowChaos(false);
      setParticleCount(0);
    }
  }, [isActive]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Chaos Particles */}
      {showChaos && Array.from({ length: particleCount }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-500 rounded-full animate-ping pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${0.5 + Math.random() * 1}s`
          }}
        />
      ))}

      {/* Warning Signals */}
      {showChaos && (
        <>
          <div className="absolute -top-8 left-1/4 animate-bounce">
            <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <AlertTriangle size={12} className="text-white" />
            </div>
          </div>
          <div className="absolute -top-6 right-1/3 animate-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <X size={8} className="text-white" />
            </div>
          </div>
        </>
      )}

      {/* Chat Interface Mockup */}
      <div className={`bg-white/80 backdrop-blur-sm rounded-3xl border shadow-2xl overflow-hidden transition-all duration-1000 ${
        showChaos 
          ? 'border-red-300 shadow-red-500/20 animate-pulse' 
          : 'border-gray-200'
      }`}>
        {/* Header */}
        <div className={`border-b px-6 py-4 transition-all duration-500 ${
          showChaos 
            ? 'bg-red-50 border-red-200' 
            : 'bg-gray-50 border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showChaos ? 'bg-red-500 animate-pulse' : 'bg-red-500'
              }`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showChaos ? 'bg-red-400 animate-pulse' : 'bg-yellow-500'
              }`}></div>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                showChaos ? 'bg-red-300 animate-pulse' : 'bg-green-500'
              }`}></div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600 font-medium">ChatGPT</span>
              {showChaos && (
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              )}
            </div>
          </div>
        </div>

        {/* Token Counter - Getting Critical */}
        <div className={`px-6 py-4 border-b transition-all duration-500 ${
          tokenCount < 20 
            ? 'bg-gradient-to-r from-red-100 to-red-50 border-red-300 animate-pulse' 
            : tokenCount < 50 
              ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200' 
              : 'bg-gradient-to-r from-green-50 to-yellow-50 border-green-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <AlertTriangle 
                size={16} 
                className={`transition-all duration-300 ${
                  tokenCount < 20 
                    ? 'text-red-600 animate-bounce' 
                    : tokenCount < 50 
                      ? 'text-orange-500 animate-pulse' 
                      : 'text-orange-500'
                }`} 
              />
              <span className={`text-sm font-medium transition-all duration-300 ${
                tokenCount < 20 
                  ? 'text-red-800 animate-pulse' 
                  : tokenCount < 50 
                    ? 'text-orange-700' 
                    : 'text-orange-700'
              }`}>
                Context: {tokenCount}% remaining
              </span>
              {tokenCount < 10 && (
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-1 h-1 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              )}
            </div>
            <div className="relative">
              <div className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                <div 
                  className={`h-full transition-all duration-500 relative ${
                    tokenCount < 20 
                      ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-lg shadow-red-500/50' 
                      : tokenCount < 50 
                        ? 'bg-gradient-to-r from-orange-500 to-yellow-500' 
                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                  }`}
                  style={{ width: `${tokenCount}%` }}
                >
                  {tokenCount < 20 && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  )}
                </div>
              </div>
              {tokenCount < 20 && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Messages - Growing Uncontrollably */}
        <div className="p-6 space-y-4 max-h-96 overflow-hidden relative">
          {Array.from({ length: messagesCount }).map((_, index) => (
            <div 
              key={index}
              className={`transition-all duration-700 ${
                index >= 8 
                  ? 'opacity-20 scale-90 blur-sm' 
                  : index >= 5 
                    ? 'opacity-50 scale-95' 
                    : 'animate-fade-in'
              } ${showChaos && index > 6 ? 'animate-bounce' : ''}`}
              style={{ 
                animationDelay: `${index * 0.08}s`,
                transform: showChaos && index > 8 ? `rotate(${Math.random() * 4 - 2}deg)` : 'none'
              }}
            >
              <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-2xl relative shadow-sm transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
                    : 'bg-gradient-to-r from-gray-100 to-gray-50 text-gray-900 border border-gray-200'
                } ${showChaos && index > 6 ? 'animate-pulse border-red-200' : ''}`}>
                  
                  {/* Message overflow indicator */}
                  {index > 8 && showChaos && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                  )}
                  
                  <div className="flex items-center space-x-2 mb-1">
                    <MessageSquare size={12} className={showChaos && index > 6 ? 'animate-spin' : ''} />
                    <span className="text-xs opacity-75 font-medium">
                      {index % 2 === 0 ? 'You' : 'AI'}
                    </span>
                    {index > 7 && (
                      <div className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed">
                    {index % 2 === 0 
                      ? `Message ${index + 1}: ${
                          index > 8 
                            ? 'ERROR: Context overflow detected...' 
                            : 'This conversation is getting too long and complex...'
                        }`
                      : `AI Response ${index + 1}: ${
                          index > 8 
                            ? 'Unable to process - memory limit exceeded' 
                            : 'Adding more context that rapidly consumes available tokens...'
                        }`
                    }
                  </p>
                  
                  {/* Glitch effect for overflowing messages */}
                  {index > 9 && showChaos && (
                    <div className="absolute inset-0 bg-red-500/10 rounded-2xl animate-pulse"></div>
                  )}
                </div>
              </div>
            </div>
          ))}
          
          {/* Enhanced overflow gradient with warning */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-red-50/50 to-transparent pointer-events-none" />
          
          {/* Overflow warning */}
          {messagesCount > 8 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-red-500 text-white text-xs rounded-full animate-bounce">
              Context Overflowing
            </div>
          )}
        </div>

        {/* Error Message */}
        {showError && (
          <div className="mx-6 mb-6 p-6 bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-300 rounded-3xl animate-fade-in shadow-lg shadow-red-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                  <X size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-red-900 text-lg">Context Limit Exceeded</p>
                  <p className="text-sm text-red-700 mt-1">Your conversation is too long to continue processing</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                    <span className="text-xs text-red-600 font-medium">SYSTEM ERROR</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="flex items-center space-x-2 text-red-600">
                  <Zap size={14} className="animate-bounce" />
                  <span className="text-xs font-bold">FAILED</span>
                </div>
                <div className="text-xs text-red-500">Token overflow</div>
              </div>
            </div>
            
            {/* Error details */}
            <div className="mt-4 p-3 bg-red-100 rounded-xl border border-red-200">
              <div className="text-xs text-red-700 font-mono">
                <div>• Context buffer: 100% utilized</div>
                <div>• Memory allocation: EXCEEDED</div>
                <div>• Status: CONVERSATION_TERMINATED</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced Floating Problem Indicators */}
      <div className="absolute -top-6 -right-6 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 relative">
          <AlertTriangle size={24} className="text-white animate-pulse" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 animate-bounce" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl shadow-orange-500/40">
          <X size={18} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>
      </div>

      {/* Additional chaos indicators */}
      {showChaos && (
        <>
          <div className="absolute top-1/2 -left-8 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center shadow-lg">
              <Zap size={12} className="text-white" />
            </div>
          </div>
          <div className="absolute top-1/4 -right-8 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center shadow-lg">
              <AlertTriangle size={10} className="text-white" />
            </div>
          </div>
        </>
      )}

      {/* Enhanced Problem Stats */}
      <div className="mt-8 grid grid-cols-3 gap-6">
        <div className={`text-center p-6 rounded-3xl border-2 transition-all duration-500 ${
          tokenCount < 20 
            ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-300 shadow-lg shadow-red-500/20 scale-105' 
            : 'bg-red-50 border-red-200'
        }`}>
          <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
            tokenCount < 20 ? 'text-red-700 animate-pulse' : 'text-red-600'
          }`}>
            {100 - tokenCount}%
          </div>
          <div className="text-sm text-red-800 font-medium">Context Lost</div>
          {tokenCount < 20 && (
            <div className="mt-2 flex justify-center">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
        
        <div className={`text-center p-6 rounded-3xl border-2 transition-all duration-500 ${
          messagesCount > 8 
            ? 'bg-gradient-to-br from-orange-50 to-orange-100 border-orange-300 shadow-lg shadow-orange-500/20 scale-105' 
            : 'bg-orange-50 border-orange-200'
        }`}>
          <div className={`text-3xl font-bold mb-2 transition-all duration-300 ${
            messagesCount > 8 ? 'text-orange-700 animate-pulse' : 'text-orange-600'
          }`}>
            {messagesCount}
          </div>
          <div className="text-sm text-orange-800 font-medium">Stuck Messages</div>
          {messagesCount > 8 && (
            <div className="mt-2 flex justify-center space-x-1">
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce"></div>
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-1 h-1 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          )}
        </div>
        
        <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl border-2 border-gray-300 shadow-lg">
          <div className="text-3xl font-bold text-gray-700 mb-2 relative">
            0
            <div className="absolute -top-1 -right-2 w-3 h-3 border-2 border-gray-400 rounded-full animate-spin"></div>
          </div>
          <div className="text-sm text-gray-800 font-medium">Solutions Available</div>
          <div className="mt-2 text-xs text-gray-600">Help needed!</div>
        </div>
      </div>
    </div>
  );
};