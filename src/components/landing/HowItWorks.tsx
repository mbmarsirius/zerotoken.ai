import { useEffect, useState, useRef } from "react";
import { Activity, TrendingUp, Zap, Chrome } from "lucide-react";

export const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: "monitoring",
      title: "How It Works",
      subtitle: "Monitor and manage your AI conversations",
      steps: [
        { icon: Activity, text: "Monitor Tokens", desc: "Track your usage in real-time" },
        { icon: Zap, text: "Auto-Save Context", desc: "Never lose conversation history" },
        { icon: Activity, text: "Keep Going", desc: "Continue seamlessly across sessions" }
      ],
      color: "from-lime/20 to-green-500/20"
    },
    {
      id: "results",
      title: "Results",
      subtitle: "Unlimited productivity unlocked",
      steps: [
        { icon: TrendingUp, text: "340% Faster", desc: "Complete tasks without token limits" },
        { icon: Zap, text: "Unlimited Context", desc: "Never start conversations from scratch" },
        { icon: Activity, text: "Seamless Flow", desc: "Continuous AI productivity" }
      ],
      color: "from-lime/30 to-pink/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "0px 0px -30% 0px" 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="how-it-works" 
      className="py-32 bg-gradient-to-br from-lime/10 via-white to-pink/10 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br ${sections[activeSection]?.color || 'from-lime/20 to-pink/20'} rounded-full blur-3xl opacity-60 transition-all duration-1000`}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink/20 to-lime/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            How ZeroToken Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Simple workflow in 2 steps
          </p>
        </div>

        {/* Progress indicator */}
        <div className="flex justify-center mb-16">
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <div
                key={index}
                className={`w-12 h-1 rounded-full transition-all duration-500 ${
                  index === activeSection 
                    ? 'bg-gradient-to-r from-pink to-lime' 
                    : index < activeSection
                      ? 'bg-gradient-to-r from-lime/60 to-pink/60'
                      : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Clean sections */}
        <div className="space-y-32">
          {sections.map((section, index) => {
            const isActive = activeSection === index;
            
            return (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="min-h-screen flex flex-col justify-center scroll-snap-section"
              >
                <div className="text-center mb-12">
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-500 ${
                    isActive ? 'text-gray-900' : 'text-gray-500'
                  }`}>
                    {section.title}
                  </h3>
                  <p className={`text-lg transition-colors duration-500 ${
                    isActive ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {section.subtitle}
                  </p>
                </div>
                
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.steps.map((step, stepIndex) => {
                      const StepIcon = step.icon;
                      return (
                        <div
                          key={stepIndex}
                          className={`text-center p-6 rounded-2xl transition-all duration-500 ${
                            isActive
                              ? 'bg-white/80 backdrop-blur border border-gray-200 shadow-lg'
                              : 'bg-white/40 backdrop-blur border border-gray-100'
                          }`}
                        >
                          <div className={`w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center transition-all duration-500 ${
                            isActive
                              ? 'bg-gradient-to-r from-pink to-lime shadow-lg'
                              : 'bg-gray-200'
                          }`}>
                            <StepIcon size={24} className={isActive ? 'text-white' : 'text-gray-400'} />
                          </div>
                          <h4 className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
                            isActive ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {step.text}
                          </h4>
                          <p className={`text-sm transition-colors duration-500 ${
                            isActive ? 'text-gray-600' : 'text-gray-400'
                          }`}>
                            {step.desc}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-lime/20 to-pink/20 rounded-full border border-lime/30">
            <Chrome size={24} className="text-lime-600" />
            <span className="text-lg font-semibold text-gray-900">
              Ready to get started with ZeroToken?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};