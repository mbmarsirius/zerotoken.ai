import { useEffect, useState } from "react";
import { FileText, Zap, RefreshCw, Sparkles, ArrowRight } from "lucide-react";

interface SmartManagementProps {
  isActive: boolean;
}

export const SmartManagement = ({ isActive }: SmartManagementProps) => {
  const [showCheckpoint, setShowCheckpoint] = useState(false);
  const [showHandoff, setShowHandoff] = useState(false);
  const [optimizing, setOptimizing] = useState(false);
  const [handoffCount, setHandoffCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setShowCheckpoint(false);
      setShowHandoff(false);
      setOptimizing(false);
      setHandoffCount(0);
      return;
    }

    // Sequence the animations
    const checkpointTimer = setTimeout(() => setShowCheckpoint(true), 1000);
    const handoffTimer = setTimeout(() => setShowHandoff(true), 2500);
    const optimizeTimer = setTimeout(() => {
      setOptimizing(true);
      setTimeout(() => setOptimizing(false), 2000);
    }, 4000);
    
    const countTimer = setInterval(() => {
      setHandoffCount(prev => Math.min(15, prev + 1));
    }, 200);

    return () => {
      clearTimeout(checkpointTimer);
      clearTimeout(handoffTimer);
      clearTimeout(optimizeTimer);
      clearInterval(countTimer);
    };
  }, [isActive]);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Checkpoint System */}
        <div className={`transition-all duration-1000 ${showCheckpoint ? 'animate-fade-in' : 'opacity-30'}`}>
          <div className="bg-gradient-to-br from-lime/20 to-green-500/20 rounded-3xl border border-lime/40 p-6 h-full">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-lime rounded-xl flex items-center justify-center">
                <FileText size={20} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Auto Checkpoint</h3>
                <p className="text-sm text-gray-600">Context preservation</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Checkpoint Timeline */}
              <div className="space-y-3">
                {[
                  { time: "2 min ago", status: "saved", active: true },
                  { time: "8 min ago", status: "saved", active: true },
                  { time: "15 min ago", status: "saved", active: showCheckpoint },
                  { time: "23 min ago", status: "saved", active: false }
                ].map((checkpoint, index) => (
                  <div key={index} className={`flex items-center space-x-3 transition-all duration-500 ${
                    checkpoint.active ? 'opacity-100' : 'opacity-40'
                  }`}>
                    <div className={`w-3 h-3 rounded-full ${
                      checkpoint.active ? 'bg-lime animate-pulse' : 'bg-gray-300'
                    }`} />
                    <span className="text-sm text-gray-600">{checkpoint.time}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      checkpoint.active ? 'bg-lime text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {checkpoint.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-lime/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Auto-save</span>
                  <span className="text-sm font-semibold text-lime-700">Unlimited</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Handoff Generation */}
        <div className={`transition-all duration-1000 ${showHandoff ? 'animate-fade-in scale-105' : 'opacity-50'}`}>
          <div className="bg-gradient-to-br from-pink/20 to-purple-500/20 rounded-3xl border-2 border-pink/40 p-6 h-full relative overflow-hidden">
            {/* Glowing effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-pink/10 to-purple/10 transition-opacity duration-1000 ${
              showHandoff ? 'opacity-100' : 'opacity-0'
            }`} />
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  showHandoff ? 'bg-gradient-to-r from-pink to-purple animate-pulse' : 'bg-gray-300'
                }`}>
                  <Zap size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Generate Handoff</h3>
                  <p className="text-sm text-gray-600">Context compression</p>
                </div>
              </div>

              {/* Handoff Preview */}
              <div className="space-y-4">
                <div className="bg-white/80 rounded-2xl p-4 border border-pink/30">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">Smart Summary</span>
                    {showHandoff && (
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-pink rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="w-2 h-2 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    "Previous discussion: Data analysis of Q3 metrics, identified 3 key trends, optimization suggestions for marketing funnel..."
                  </p>
                </div>

                <button className={`w-full py-3 rounded-2xl font-semibold transition-all duration-500 ${
                  showHandoff 
                    ? 'bg-gradient-to-r from-pink to-purple text-white hover:scale-105' 
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {showHandoff ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Sparkles size={16} />
                      <span>Generate Report</span>
                    </div>
                  ) : (
                    'Generate Handoff'
                  )}
                </button>

                <div className="text-center">
                  <div className="text-2xl font-bold text-pink">{handoffCount}</div>
                  <div className="text-xs text-gray-600">Handoffs created</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Context Optimization */}
        <div className="space-y-6">
          {/* Before/After Optimization */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-lg p-6">
            <div className="flex items-center space-x-3 mb-4">
              <RefreshCw size={16} className={`text-blue-500 ${optimizing ? 'animate-spin' : ''}`} />
              <h4 className="font-semibold text-gray-900">Context Optimization</h4>
            </div>

            <div className="space-y-4">
              {/* Before */}
              <div className="p-3 bg-red-50 rounded-xl border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-red-800">Before</span>
                  <span className="text-xs text-red-600">Messy • 15,642 tokens</span>
                </div>
                <div className="space-y-1">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="h-2 bg-red-200 rounded opacity-60" style={{ width: `${60 + Math.random() * 40}%` }} />
                  ))}
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <ArrowRight size={20} className={`text-gray-400 transition-all duration-500 ${
                  optimizing ? 'animate-bounce text-blue-500' : ''
                }`} />
              </div>

              {/* After */}
              <div className={`p-3 rounded-xl border transition-all duration-1000 ${
                optimizing 
                  ? 'bg-green-50 border-green-200' 
                  : 'bg-gray-50 border-gray-200'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-medium ${
                    optimizing ? 'text-green-800' : 'text-gray-600'
                  }`}>After</span>
                  <span className={`text-xs ${
                    optimizing ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {optimizing ? 'Clean • 8,241 tokens' : 'Optimizing...'}
                  </span>
                </div>
                <div className="space-y-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`h-2 rounded transition-all duration-500 ${
                        optimizing ? 'bg-green-300' : 'bg-gray-200'
                      }`} 
                      style={{ width: `${40 + i * 15}%` }} 
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pro Features */}
          <div className="bg-gradient-to-r from-lime/10 to-pink/10 rounded-2xl p-4 border border-lime/30">
            <div className="text-center">
              <div className="w-8 h-8 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center mx-auto mb-2">
                <Sparkles size={16} className="text-white" />
              </div>
              <p className="text-sm font-semibold text-gray-900">ZeroToken Pro</p>
              <p className="text-xs text-gray-600">Unlimited smart features</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Management Icons */}
      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 animate-bounce" style={{ animationDelay: '1s' }}>
        <div className="w-14 h-14 bg-gradient-to-r from-lime via-pink to-purple rounded-full flex items-center justify-center shadow-2xl">
          <Sparkles size={20} className="text-white" />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-lime/20 rounded-2xl border border-lime/40">
          <div className="text-2xl font-bold text-lime-700">Auto</div>
          <div className="text-sm text-lime-800">Checkpoints</div>
        </div>
        <div className="text-center p-4 bg-pink/20 rounded-2xl border border-pink/40">
          <div className="text-2xl font-bold text-pink-700">{handoffCount}</div>
          <div className="text-sm text-pink-800">Smart Reports</div>
        </div>
        <div className="text-center p-4 bg-purple-50 rounded-2xl border border-purple-200">
          <div className="text-2xl font-bold text-purple-600">47%</div>
          <div className="text-sm text-purple-800">Token Saved</div>
        </div>
      </div>
    </div>
  );
};