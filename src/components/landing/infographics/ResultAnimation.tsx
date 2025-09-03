import React, { useEffect, useState } from "react";
import { TrendingUp, CheckCircle, Zap, Clock, Users, Star, ChevronRight, Play, Info } from "lucide-react";

interface ResultAnimationProps {
  isActive: boolean;
}

export const ResultAnimation = ({ isActive }: ResultAnimationProps) => {
  const [productivity, setProductivity] = useState(0);
  const [conversations, setConversations] = useState(0);
  const [timeSaved, setTimeSaved] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [activeMetrics, setActiveMetrics] = useState<number[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<number | null>(null);
  const [showMetricDetails, setShowMetricDetails] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setProductivity(0);
      setConversations(0);
      setTimeSaved(0);
      setShowCelebration(false);
      setActiveMetrics([]);
      return;
    }

    // Animate metrics sequentially
    const productivityTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setProductivity(prev => {
          if (prev >= 340) {
            clearInterval(interval);
            setActiveMetrics(prev => [...prev, 0]);
            return 340;
          }
          return prev + 8;
        });
      }, 50);
    }, 500);

    const conversationsTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setConversations(prev => {
          if (prev >= 12) {
            clearInterval(interval);
            setActiveMetrics(prev => [...prev, 1]);
            return 12;
          }
          return prev + 1;
        });
      }, 100);
    }, 1500);

    const timeTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setTimeSaved(prev => {
          if (prev >= 8.5) {
            clearInterval(interval);
            setActiveMetrics(prev => [...prev, 2]);
            return 8.5;
          }
          return prev + 0.2;
        });
      }, 80);
    }, 2500);

    const celebrationTimer = setTimeout(() => {
      setShowCelebration(true);
    }, 4000);

    return () => {
      clearTimeout(productivityTimer);
      clearTimeout(conversationsTimer);
      clearTimeout(timeTimer);
      clearTimeout(celebrationTimer);
    };
  }, [isActive]);

  const metrics = [
    {
      icon: TrendingUp,
      label: "Productivity Boost",
      value: `${productivity}%`,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      details: [
        "3.4x faster task completion",
        "Unlimited conversation length", 
        "Zero context switching time",
        "Perfect memory retention"
      ]
    },
    {
      icon: Users,
      label: "Active Conversations",
      value: conversations,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      details: [
        "Simultaneous AI sessions",
        "Each with full context",
        "No memory limits",
        "Seamless switching between topics"
      ]
    },
    {
      icon: Clock,
      label: "Hours Saved Daily",
      value: `${timeSaved.toFixed(1)}h`,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      details: [
        "No more re-explaining context",
        "Instant conversation resumption",
        "Auto-checkpoint recovery",
        "Smart handoff generation"
      ]
    }
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Hero Success Message */}
      <div className={`text-center mb-12 transition-all duration-1000 ${
        showCelebration ? 'animate-fade-in scale-100' : 'scale-95 opacity-70'
      }`}>
        <div className="inline-flex items-center space-x-3 mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-1000 ${
            showCelebration 
              ? 'bg-gradient-to-r from-lime to-pink animate-pulse' 
              : 'bg-gray-200'
          }`}>
            <CheckCircle size={32} className="text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-900">Mission Accomplished!</h3>
            <p className="text-lg text-gray-600">Your AI workflow is now optimized</p>
          </div>
        </div>
      </div>

      {/* Metrics Dashboard */}
      <div className="grid lg:grid-cols-3 gap-8 mb-12">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const isActive = activeMetrics.includes(index);
          
          return (
            <button 
              key={index}
              onClick={() => {
                setSelectedMetric(index);
                setShowMetricDetails(true);
              }}
              className={`${metric.bgColor} ${metric.borderColor} rounded-3xl border-2 p-8 text-center transition-all duration-1000 hover:scale-110 cursor-pointer ${
                isActive ? 'scale-105 shadow-2xl' : 'scale-95 opacity-60'
              }`}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center transition-all duration-500 ${
                isActive ? 'animate-bounce' : ''
              }`}>
                <Icon size={28} className="text-white" />
              </div>
              
              <div className="space-y-2">
                <div className={`text-4xl font-bold transition-all duration-500 ${
                  isActive ? 'bg-gradient-to-r ' + metric.color + ' bg-clip-text text-transparent' : 'text-gray-400'
                }`}>
                  {metric.value}
                </div>
                <p className={`text-sm font-medium transition-colors duration-500 ${
                  isActive ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {metric.label}
                </p>
              </div>

              {isActive && (
                <div className="mt-4 flex justify-center items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                  <ChevronRight size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-500">Click for details</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Metric Details Modal */}
      {showMetricDetails && selectedMetric !== null && (
        <div className="mt-8 animate-fade-in">
          <div className="bg-white rounded-3xl border-2 border-gray-200 shadow-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${metrics[selectedMetric].color} flex items-center justify-center`}>
                  {React.createElement(metrics[selectedMetric].icon, { size: 28, className: "text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{metrics[selectedMetric].label}</h3>
                  <p className="text-3xl font-bold bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent">
                    {metrics[selectedMetric].value}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowMetricDetails(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                ×
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">Key Benefits:</h4>
                <div className="space-y-3">
                  {metrics[selectedMetric].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${metrics[selectedMetric].color}`} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={`${metrics[selectedMetric].bgColor} rounded-2xl p-6 border ${metrics[selectedMetric].borderColor}`}>
                <h4 className="font-bold text-gray-900 mb-4">Real Impact:</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Before ZeroToken</span>
                    <span className="text-red-600 font-semibold">Limited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">After ZeroToken</span>
                    <span className="text-green-600 font-semibold">Unlimited</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Improvement</span>
                    <span className="font-bold bg-gradient-to-r from-lime to-pink bg-clip-text text-transparent">
                      {metrics[selectedMetric].value}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Stories Simulation */}
      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {/* Before/After Comparison */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8">
          <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">Before vs After</h4>
          
          <div className="space-y-6">
            {/* Before */}
            <div className="p-4 bg-red-50 rounded-2xl border border-red-200">
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <span className="text-sm font-semibold text-red-800">Before ZeroToken</span>
              </div>
              <ul className="space-y-2 text-sm text-red-700">
                <li>❌ Lost context every few messages</li>
                <li>❌ Repetitive explanations</li>
                <li>❌ Productivity bottlenecks</li>
                <li>❌ Manual context management</li>
              </ul>
            </div>

            {/* After */}
            <div className={`p-4 rounded-2xl border transition-all duration-1000 ${
              showCelebration 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-center space-x-2 mb-3">
                <div className={`w-3 h-3 rounded-full transition-colors duration-500 ${
                  showCelebration ? 'bg-green-500' : 'bg-gray-400'
                }`} />
                <span className={`text-sm font-semibold transition-colors duration-500 ${
                  showCelebration ? 'text-green-800' : 'text-gray-600'
                }`}>
                  After ZeroToken
                </span>
              </div>
              <ul className={`space-y-2 text-sm transition-colors duration-500 ${
                showCelebration ? 'text-green-700' : 'text-gray-600'
              }`}>
                <li>✅ Unlimited conversation length</li>
                <li>✅ Perfect context preservation</li>
                <li>✅ 340% productivity increase</li>
                <li>✅ Automated smart management</li>
              </ul>
            </div>
          </div>
        </div>

        {/* User Testimonial Simulation */}
        <div className="bg-gradient-to-br from-lime/10 to-pink/10 rounded-3xl border border-lime/30 p-8">
          <div className="text-center mb-6">
            <div className="flex justify-center space-x-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  size={20} 
                  className={`transition-all duration-500 ${
                    showCelebration 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <h4 className="text-lg font-bold text-gray-900">User Success Story</h4>
          </div>

          <div className="space-y-4">
            <div className="bg-white/80 rounded-2xl p-4 border border-white/50">
              <p className="text-sm text-gray-700 italic leading-relaxed">
                "ZeroToken completely transformed how I work with AI. I went from losing context every 10 minutes to having seamless 8-hour conversations. It's like having an AI assistant that never forgets!"
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-lime to-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Jake Smith</p>
                <p className="text-xs text-gray-600">Product Manager • Tech Startup</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      {showCelebration && (
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center space-x-6 px-12 py-6 bg-gradient-to-r from-lime/20 via-pink/20 to-lime/20 rounded-full backdrop-blur-sm border-2 border-lime/40">
            <Zap size={32} className="text-lime animate-pulse" />
            <div className="text-left">
              <p className="text-xl font-bold text-gray-900">Ready to 10x your AI productivity?</p>
              <p className="text-sm text-gray-600">Join thousands of users already saving hours daily</p>
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-lime rounded-full animate-bounce" />
              <div className="w-3 h-3 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
              <div className="w-3 h-3 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
            </div>
          </div>
        </div>
      )}

      {/* Celebration Particles */}
      {showCelebration && (
        <>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-lime to-pink rounded-full animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </>
      )}
    </div>
  );
};