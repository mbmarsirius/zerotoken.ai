import { useEffect, useState, useRef } from "react";
import { AlertTriangle, Chrome, Activity, Zap, TrendingUp } from "lucide-react";
import { ProblemAnimation } from "./infographics/ProblemAnimation";
import { InstallationFlow } from "./infographics/InstallationFlow";
import { MonitoringMagic } from "./infographics/MonitoringMagic";
import { SmartManagement } from "./infographics/SmartManagement";
import { ResultAnimation } from "./infographics/ResultAnimation";

export const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sections = [
    {
      id: "problem",
      title: "The Problem",
      subtitle: "Context chaos without ZeroToken",
      component: ProblemAnimation,
      icon: AlertTriangle,
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      id: "installation", 
      title: "Easy Installation",
      subtitle: "Get ZeroToken in 30 seconds",
      component: InstallationFlow,
      icon: Chrome,
      color: "from-blue-500/20 to-cyan-500/20"
    },  
    {
      id: "monitoring",
      title: "Real-time Monitoring", 
      subtitle: "Watch your tokens live",
      component: MonitoringMagic,
      icon: Activity,
      color: "from-lime/20 to-green-500/20"
    },
    {
      id: "management",
      title: "Smart Management",
      subtitle: "Auto-save and seamless handoffs", 
      component: SmartManagement,
      icon: Zap,
      color: "from-pink/20 to-purple-500/20"
    },
    {
      id: "result", 
      title: "The Result",
      subtitle: "Unlimited AI productivity",
      component: ResultAnimation,
      icon: TrendingUp,
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
        threshold: 0.4,
        rootMargin: "0px 0px -20% 0px" 
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

      <div className="container mx-auto px-4 lg:px-6 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            How ZeroToken Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your AI workflow in 5 simple steps
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
            const Component = section.component;
            const Icon = section.icon;
            const isActive = activeSection === index;
            
            return (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className="min-h-screen flex flex-col justify-center scroll-snap-section"
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-pink to-lime shadow-lg'
                        : 'bg-gray-200'
                    }`}>
                      <Icon size={24} className={isActive ? 'text-white' : 'text-gray-400'} />
                    </div>
                    <div>
                      <h3 className={`text-3xl lg:text-4xl font-bold transition-colors duration-500 ${
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
                  </div>
                </div>
                
                <div className="max-w-6xl mx-auto">
                  <Component isActive={isActive} />
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