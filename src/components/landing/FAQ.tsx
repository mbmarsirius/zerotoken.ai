import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Shield, Zap, Globe, CreditCard, Chrome } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      icon: <Globe className="h-5 w-5" />,
      question: "How does ZeroToken work with different AI platforms?",
      answer: "ZeroToken is a browser extension that integrates seamlessly with ChatGPT, Claude, and Gemini. Once installed, it adds a small interface that monitors your conversation memory and provides tools without interrupting your workflow."
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      question: "What are handoff reports?",
      answer: "Handoff reports are structured summaries of your AI conversations that extract key decisions, facts, and open questions. You can export them as PDFs, copy to clipboard, or email them directly to team members."
    },
    {
      icon: <Zap className="h-5 w-5" />,
      question: "How does AI Detox work?",
      answer: "AI Detox analyzes your conversation history, identifies outdated or redundant context, and creates a condensed summary. This frees up memory space and helps the AI provide more focused, relevant responses."
    },
    {
      icon: <Shield className="h-5 w-5" />,
      question: "Is my conversation data secure?",
      answer: "Yes, ZeroToken processes your conversations locally in your browser. We don't store or transmit your private conversations to our servers. Only anonymized usage analytics are collected to improve the product."
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      question: "Can I cancel my Pro subscription anytime?",
      answer: "Absolutely. You can cancel your Pro subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period."
    },
    {
      icon: <Chrome className="h-5 w-5" />,
      question: "Which browsers are supported?",
      answer: "ZeroToken currently supports Chrome and Chrome-based browsers (Edge, Brave, etc.). We're working on Firefox support and will announce it soon."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'var(--faq-bg)' }}>
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-lavender/5 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink/5 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            Frequently asked <span className="bg-gradient-to-r from-lavender via-accent to-pink bg-clip-text text-transparent">questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ZeroToken and how it works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white/90 backdrop-blur-sm border border-border/50 rounded-2xl px-8 transition-all duration-500 hover:bg-white hover:-translate-y-1 overflow-hidden group"
                style={{ 
                  boxShadow: 'var(--shadow-card)',
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink/5 via-transparent to-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <AccordionTrigger className="text-left font-display font-bold text-foreground hover:text-primary transition-colors py-8 text-lg group relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: index % 3 === 0 ? 'hsl(var(--lime) / 0.1)' : 
                                   index % 3 === 1 ? 'hsl(var(--pink) / 0.1)' : 
                                   'hsl(var(--lavender) / 0.1)',
                        color: index % 3 === 0 ? 'hsl(var(--lime))' : 
                               index % 3 === 1 ? 'hsl(var(--pink))' : 
                               'hsl(var(--lavender))'
                      }}>
                      {faq.icon}
                    </div>
                    <span className="flex-1">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-8 pl-16 text-lg relative z-10 group-hover:text-foreground/90 transition-colors duration-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-lg mx-auto border border-border/30">
            <p className="text-muted-foreground mb-6 text-lg">
              Still have questions?
            </p>
            <a 
              href="mailto:support@zerotoken.com" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-lime text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <HelpCircle className="h-5 w-5" />
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};