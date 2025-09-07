import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Shield, Zap, Globe, CreditCard, Chrome } from "lucide-react";
export const FAQ = () => {
  const faqs = [{
    icon: Globe,
    question: "How does ZeroToken work with different AI platforms?",
    answer: "ZeroToken is a browser extension that integrates seamlessly with ChatGPT, Claude, and Gemini. Once installed, it adds a small interface that monitors your conversation memory and provides tools without interrupting your workflow.",
    color: "pink"
  }, {
    icon: HelpCircle,
    question: "What are handoff reports?",
    answer: "Handoff reports are structured summaries of your AI conversations that extract key decisions, facts, and open questions. You can export them as PDFs, copy to clipboard, or email them directly to team members.",
    color: "lime"
  }, {
    icon: Zap,
    question: "How does AI Detox work?",
    answer: "AI Detox analyzes your conversation history, identifies outdated or redundant context, and creates a condensed summary. This frees up memory space and helps the AI provide more focused, relevant responses.",
    color: "pink"
  }, {
    icon: Shield,
    question: "Is my conversation data secure?",
    answer: "Yes, ZeroToken processes your conversations locally in your browser. We don't store or transmit your private conversations to our servers. Only anonymized usage analytics are collected to improve the product.",
    color: "lime"
  }, {
    icon: CreditCard,
    question: "Can I cancel my Pro subscription anytime?",
    answer: "Absolutely. You can cancel your Pro subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period.",
    color: "pink"
  }, {
    icon: Chrome,
    question: "Which browsers are supported?",
    answer: "ZeroToken currently supports Chrome and Chrome-based browsers (Edge, Brave, etc.). We're working on Firefox support and will announce it soon.",
    color: "lime"
  }];
  return <section className="py-32 bg-gradient-to-b from-ink via-ink/95 to-ink/90 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60 bg-[#774ee6]">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink/40 to-lime/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-lime/40 to-pink/40 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-lavender/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white tracking-tight">
            Questions & answers
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about ZeroToken
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isPink = faq.color === "pink";
            return <AccordionItem key={index} value={`item-${index}`} className={`border-2 ${isPink ? 'border-pink/30 hover:border-pink/50' : 'border-lime/30 hover:border-lime/50'} rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in group hover:bg-gradient-to-br hover:from-white/15 hover:via-white/8 hover:to-white/5`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <AccordionTrigger className="hover:no-underline px-8 py-6 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-gray-50/50 transition-all duration-300">
                    <div className="flex items-center space-x-4 text-left">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${isPink ? 'from-pink/20 to-pink/30' : 'from-lime/20 to-lime/30'} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon size={20} className={`${isPink ? 'text-pink' : 'text-lime'} transition-all duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                      <span className="font-semibold text-white group-hover:text-gray-100 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 transition-all duration-300">
                    <div className="pl-16">
                      <p className="text-gray-100 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>;
          })}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-20 animate-fade-in" style={{
        animationDelay: '0.8s'
      }}>
          <div className="max-w-md mx-auto p-8 rounded-3xl bg-gradient-to-br from-pink/10 to-lime/10 border border-white/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 text-white">Still have questions?</h3>
            <p className="text-gray-300 mb-8 text-lg">
              Our support team is here to help
            </p>
            <Button asChild className="bg-gradient-to-r from-pink to-lime text-white hover:from-pink/90 hover:to-lime/90 border-0 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="mailto:support@zerotoken.ai">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};