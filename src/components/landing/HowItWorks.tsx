import { useEffect, useState, useRef } from "react";
import { AlertTriangle, Chrome, MessageSquare, Zap, TrendingUp } from "lucide-react";
import { ProblemAnimation } from "./infographics/ProblemAnimation";
import { AutoFlowInstallation } from "./infographics/AutoFlowInstallation";
import { MonitoringMagic } from "./infographics/MonitoringMagic";
import { SmartManagement } from "./infographics/SmartManagement";
import { ResultAnimation } from "./infographics/ResultAnimation";

export const HowItWorks = () => {
  const [activeSection, setActiveSection] = useState(-1);
  const [autoPlaying, setAutoPlaying] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);

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
      component: AutoFlowInstallation,
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

  const startAutoPlaySequence = (startIndex: number = 0) => {
    const scrollToSection = (index: number) => {
      if (index < sections.length && sectionRefs.current[index]) {
        isScrollingRef.current = true;
        setActiveSection(index);
        
        sectionRefs.current[index]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });

        // Wait for animation to complete + pause time
        const animationDuration = index === 0 ? 8000 : // Problem animation
                                index === 1 ? 7000 : // Installation flow
                                index === 2 ? 6000 : // Monitoring
                                index === 3 ? 7000 : // Smart management
                                6000; // Results

        setTimeout(() => {
          isScrollingRef.current = false;
          if (index < sections.length - 1) {
            scrollToSection(index + 1);
          } else {
            setAutoPlaying(false);
          }
        }, animationDuration);
      }
    };

    scrollToSection(startIndex);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !isScrollingRef.current) {
              setActiveSection(index);
              
              // Auto-scroll through sections with breaks
              if (!autoPlaying) {
                setAutoPlaying(true);
                startAutoPlaySequence(index);
              }
            }
          }
        });
      },
      { 
        threshold: 0.5, 
        rootMargin: "-10% 0px -10% 0px" 
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [autoPlaying]);
  // Manual scroll control with enhanced smooth scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (!isScrollingRef.current && !autoPlaying) {
        const scrollPosition = window.scrollY;
        const sections = sectionRefs.current;
        
        sections.forEach((section, index) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            const isInView = rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
            
            if (isInView && activeSection !== index) {
              setActiveSection(index);
            }
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, autoPlaying]);

  return (
    <section 
      id="how-it-works" 
      className="py-32 bg-gradient-to-br from-lime/10 via-white to-pink/10 relative overflow-hidden scroll-smooth"
      ref={containerRef}
      style={{
        scrollSnapType: 'y mandatory',
        scrollBehavior: 'smooth'
      }}
    >
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

        {/* Enhanced Progress indicator with auto-play controls */}
        <div className="flex justify-center mb-16">
          <div className="flex items-center space-x-4">
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
            
            {/* Auto-play indicator */}
            <div className={`flex items-center space-x-2 px-3 py-1 rounded-full border transition-all duration-300 ${
              autoPlaying 
                ? 'bg-lime/20 border-lime/40 text-lime-700' 
                : 'bg-gray-100 border-gray-300 text-gray-600'
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                autoPlaying ? 'bg-lime animate-pulse' : 'bg-gray-400'
              }`} />
              <span className="text-xs font-medium">
                {autoPlaying ? 'Auto-Playing' : 'Scroll to activate'}
              </span>
            </div>

            {/* Manual control button */}
            {!autoPlaying && (
              <button
                onClick={() => startAutoPlaySequence(activeSection)}
                className="px-4 py-2 bg-gradient-to-r from-lime to-pink text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform"
              >
                ▶ Play Auto-Flow
              </button>
            )}
          </div>
        </div>

        {/* Auto-flowing animated sections with scroll snapping */}
        <div className="space-y-32">
          {sections.map((section, index) => {
            const Component = section.component;
            const isActive = activeSection === index;
            
            return (
              <div
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                className={`min-h-screen flex flex-col justify-center transition-all duration-1000 ${
                  isActive 
                    ? 'animate-fade-in opacity-100 scale-100' 
                    : activeSection > index
                      ? 'opacity-40 scale-95'
                      : 'opacity-60 scale-95'
                }`}
                style={{ 
                  animationDelay: `${section.delay}s`,
                  scrollSnapAlign: 'center',
                  scrollSnapStop: 'always'
                }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center space-x-3 mb-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-r from-pink to-lime animate-pulse scale-110'
                        : 'bg-gray-400 scale-100'
                    }`}>
                      {index + 1}
                    </div>
                    <h3 className={`text-2xl lg:text-4xl font-bold transition-all duration-500 ${
                      isActive ? 'text-gray-900' : 'text-gray-500'
                    }`}>
                      {section.title}
                    </h3>
                  </div>
                  <p className={`text-lg max-w-xl mx-auto transition-all duration-500 ${
                    isActive ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {section.subtitle}
                  </p>
                  
                  {/* Auto-play indicator for active section */}
                  {isActive && autoPlaying && (
                    <div className="mt-4 flex items-center justify-center space-x-2 animate-fade-in">
                      <div className="w-2 h-2 bg-lime rounded-full animate-bounce" />
                      <span className="text-sm text-lime-600 font-medium">Auto-playing...</span>
                      <div className="w-2 h-2 bg-lime rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  )}
                </div>
                
                <div className="max-w-6xl mx-auto">
                  <Component isActive={isActive} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA with auto-play completion indicator */}
        <div className={`text-center mt-20 transition-all duration-1000 ${
          activeSection === sections.length - 1 ? 'animate-fade-in scale-100' : 'scale-95 opacity-60'
        }`} style={{ animationDelay: '1s' }}>
          <div className={`inline-flex items-center space-x-4 px-8 py-4 rounded-full backdrop-blur-sm border transition-all duration-500 ${
            autoPlaying 
              ? 'bg-gradient-to-r from-lime/30 to-pink/30 border-lime/50' 
              : 'bg-gradient-to-r from-lime/20 to-pink/20 border-white/50'
          }`}>
            <Chrome size={24} className={`transition-colors duration-300 ${autoPlaying ? 'text-lime animate-bounce' : 'text-lime'}`} />
            <span className="text-lg font-semibold text-gray-900">
              {activeSection === sections.length - 1 ? 'Ready to transform your AI workflow?' : 'Experience the complete flow above'}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === sections.length - 1 ? 'bg-lime animate-pulse' : 'bg-gray-400'
            }`} />
          </div>
        </div>
      </div>
    </section>
  );
};