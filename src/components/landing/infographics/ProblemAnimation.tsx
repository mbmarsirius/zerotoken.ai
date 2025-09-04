import { useEffect, useState } from "react";
import { MessageSquare, AlertTriangle } from "lucide-react";

interface ProblemAnimationProps {
  isActive: boolean;
}

export const ProblemAnimation = ({ isActive }: ProblemAnimationProps) => {
  const [activeMessages, setActiveMessages] = useState<number[]>([]);
  const [showOverflow, setShowOverflow] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setActiveMessages([]);
      setShowOverflow(false);
      return;
    }

    // Auto-add messages
    const messageInterval = setInterval(() => {
      setActiveMessages(prev => {
        if (prev.length < 12) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 200);

    setTimeout(() => setShowOverflow(true), 2500);

    return () => clearInterval(messageInterval);
  }, [isActive]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-red-600 mb-2">Context Chaos Without ZeroToken</div>
        <p className="text-gray-600">Watch what happens when AI conversations hit limits...</p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Chat Interface */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-800 px-6 py-4 flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-white text-sm font-medium">ChatGPT - Context Overflow</span>
          </div>
          
          <div className="p-6 space-y-4 h-80 overflow-hidden relative">
            {activeMessages.map((_, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  index >= 8 ? 'opacity-30 blur-sm' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    index % 2 === 0 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  } ${index >= 10 ? 'border-2 border-red-500 animate-pulse' : ''}`}>
                    <div className="flex items-center space-x-2 mb-1">
                      <MessageSquare size={12} />
                      <span className="text-xs opacity-75">
                        {index % 2 === 0 ? 'You' : 'AI'}
                      </span>
                    </div>
                    <p className="text-sm">
                      {index < 8 
                        ? `Building context step ${index + 1}...`
                        : `OVERFLOW: Message ${index + 1}`
                      }
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {showOverflow && (
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent flex items-center justify-center">
                <div className="bg-red-500 text-white px-6 py-3 rounded-full animate-pulse shadow-2xl">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle size={20} />
                    <span className="font-bold">Context Limit Exceeded!</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Token Usage */}
        <div className={`bg-white rounded-3xl border-2 p-6 transition-all duration-1000 ${
          showOverflow ? 'border-red-300 shadow-xl' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-gray-900">Token Usage</span>
            {showOverflow && (
              <div className="w-3 h-3 bg-red-500 rounded-full animate-ping" />
            )}
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Used / Available</span>
              <span className={`font-bold ${showOverflow ? 'text-red-600' : 'text-orange-600'}`}>
                {Math.min(activeMessages.length * 1000, 12000)} / 8192
              </span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <div 
                className={`h-full transition-all duration-1000 ${
                  showOverflow 
                    ? 'bg-gradient-to-r from-red-600 to-red-500 animate-pulse' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                }`}
                style={{ width: `${Math.min(120, (activeMessages.length / 10) * 100)}%` }}
              />
            </div>
            
            {showOverflow && (
              <div className="text-center py-4">
                <div className="text-red-600 font-bold text-lg mb-2">CONTEXT LOST!</div>
                <div className="text-gray-600 text-sm">AI forgets previous messages...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};