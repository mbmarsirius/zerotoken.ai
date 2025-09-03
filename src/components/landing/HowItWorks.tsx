import { useEffect, useState, useRef } from "react";
import { AlertTriangle, Chrome, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { ProblemAnimation } from "./infographics/ProblemAnimation";
import { InstallationFlow } from "./infographics/InstallationFlow";
import { MonitoringMagic } from "./infographics/MonitoringMagic";
import { SmartManagement } from "./infographics/SmartManagement";
import { ResultAnimation } from "./infographics/ResultAnimation";

export const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

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
      { threshold: 0.6, rootMargin: "-100px 0px" }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Context overload kills productivity",
      component: ProblemAnimation,
      color: "from-red-500/20 to-orange-500/20",
      delay: 0
    },
    {
      id: "installation", 
      title: "Easy Installation",
      subtitle: "One-click Chrome extension",
      component: InstallationFlow,
      color: "from-blue-500/20 to-cyan-500/20", 
      delay: 0.2
    },  
    {
      id: "monitoring",
      title: "Real-time Monitoring", 
      subtitle: "Watch your tokens in action",
      component: MonitoringMagic,
      color: "from-lime/20 to-green-500/20",
      delay: 0.4
    },
    {
      id: "management",
      title: "Smart Management",
      subtitle: "Auto-save and handoff generation", 
      component: SmartManagement,
      color: "from-pink/20 to-purple-500/20",
      delay: 0.6
    },
    {
      id: "result", 
      title: "The Result",
      subtitle: "Unlimited AI productivity",
      component: ResultAnimation,
      color: "from-lime/30 to-pink/30",
      delay: 0.8
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-gradient-to-br from-lime/10 via-white to-pink/10 relative overflow-hidden">
      {/* Dynamic background that changes with active section */}
      <div className="absolute inset-0 transition-all duration-1000">
        <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-br ${sections[activeSection]?.color || 'from-lime/20 to-pink/20'} rounded-full blur-3xl animate-pulse`}></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink/25 to-lime/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-lime/15 to-transparent rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            How ZeroToken Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From context chaos to organized AI conversations in minutes
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
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated sections */}
        <div className="space-y-32">
          {sections.map((section, index) => {
            const Component = section.component;
            return (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`transition-all duration-1000 ${
                  activeSection === index ? 'animate-fade-in' : 'opacity-60'
                }`}
                style={{ animationDelay: `${section.delay}s` }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink to-lime flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <h3 className="text-2xl lg:text-4xl font-bold text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 max-w-xl mx-auto">
                    {section.subtitle}
                  </p>
                </div>
                
                <div className="max-w-6xl mx-auto">
                  <Component isActive={activeSection === index} />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA at the bottom */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-lime/20 to-pink/20 rounded-full backdrop-blur-sm border border-white/50">
            <Chrome size={24} className="text-lime" />
            <span className="text-lg font-semibold text-gray-900">
              Ready to transform your AI workflow?
            </span>
            <div className="w-2 h-2 bg-lime rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};