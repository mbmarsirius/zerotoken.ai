import { useEffect, useState } from "react";
import { Activity, Eye } from "lucide-react";

interface MonitoringMagicProps {
  isActive: boolean;
}

export const MonitoringMagic = ({ isActive }: MonitoringMagicProps) => {
  const [tokenCount, setTokenCount] = useState(138827);
  const [percentage, setPercentage] = useState(69.4);
  const [glowEffect, setGlowEffect] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setTokenCount(138827);
      setPercentage(69.4);
      setGlowEffect(false);
      return;
    }

    // Simple token tracking animation
    const tokenInterval = setInterval(() => {
      setGlowEffect(true);
      setTokenCount(prev => prev + Math.floor(Math.random() * 50) + 10);
      setPercentage(prev => Math.max(15, prev - (Math.random() * 0.5 + 0.1)));
      
      setTimeout(() => setGlowEffect(false), 800);
    }, 2000);

    return () => clearInterval(tokenInterval);
  }, [isActive]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-2xl font-bold text-green-600 mb-2">Real-time Token Monitoring</div>
        <p className="text-gray-600">Watch ZeroToken track your AI conversation in real-time</p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        {/* ZeroToken Monitor Panel */}
        <div className={`bg-white/95 backdrop-blur-md rounded-3xl border shadow-2xl p-8 transition-all duration-500 ${
          glowEffect 
            ? 'border-lime/50 shadow-lime/20 shadow-2xl transform scale-105' 
            : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                glowEffect 
                  ? 'bg-gradient-to-r from-lime via-green-400 to-pink animate-pulse shadow-lg shadow-lime/50' 
                  : 'bg-gradient-to-r from-lime to-pink'
              }`}>
                <Eye size={28} className={`text-white transition-all duration-300 ${
                  glowEffect ? 'animate-bounce' : ''
                }`} />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-gray-900 text-xl">ZeroToken Monitor</h3>
                <p className="text-gray-600">Live AI conversation tracking</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`w-4 h-4 rounded-full transition-all duration-300 ${
                glowEffect 
                  ? 'bg-lime animate-ping shadow-lg shadow-lime/50' 
                  : 'bg-green-500 animate-pulse'
              }`}></div>
              <span className={`text-sm font-bold transition-colors duration-300 ${
                glowEffect ? 'text-lime-600' : 'text-green-600'
              }`}>
                LIVE
              </span>
              <Activity size={16} className={`text-green-500 ${glowEffect ? 'animate-bounce' : ''}`} />
            </div>
          </div>

          {/* Main Token Display */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold mb-4">
              <span className={`transition-all duration-500 ${
                glowEffect 
                  ? 'text-lime-600 animate-pulse' 
                  : 'text-gray-900'
              }`}>
                {tokenCount.toLocaleString()}
              </span>
              <span className="text-2xl text-gray-500 ml-2">tokens</span>
            </div>
            
            <div className="text-2xl font-bold mb-4">
              <span className={`transition-colors duration-300 ${
                percentage < 30 
                  ? 'text-red-500' 
                  : percentage < 60 
                    ? 'text-orange-500' 
                    : 'text-green-500'
              }`}>
                {percentage.toFixed(1)}% context remaining
              </span>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full transition-all duration-1000 ${
                  percentage < 30 
                    ? 'bg-gradient-to-r from-red-500 to-red-600' 
                    : percentage < 60 
                      ? 'bg-gradient-to-r from-orange-500 to-yellow-500' 
                      : 'bg-gradient-to-r from-lime via-green-400 to-green-500'
                }`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Status Message */}
          <div className="text-center">
            <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-500 ${
              glowEffect 
                ? 'bg-lime/20 border border-lime/40' 
                : 'bg-gray-100 border border-gray-200'
            }`}>
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                glowEffect 
                  ? 'bg-lime animate-ping' 
                  : 'bg-green-500 animate-pulse'
              }`}></div>
              <span className={`font-medium transition-colors duration-300 ${
                glowEffect ? 'text-lime-700' : 'text-gray-700'
              }`}>
                Monitoring conversation in real-time
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};