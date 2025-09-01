import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Shield, Zap, Globe, CreditCard, Chrome } from "lucide-react";

export const FAQ = () => {
  const faqs = [
    {
      icon: Globe,
      question: "How does ZeroToken work with different AI platforms?",
      answer: "ZeroToken is a browser extension that integrates seamlessly with ChatGPT, Claude, and Gemini. Once installed, it adds a small interface that monitors your conversation memory and provides tools without interrupting your workflow."
    },
    {
      icon: HelpCircle,
      question: "What are handoff reports?",
      answer: "Handoff reports are structured summaries of your AI conversations that extract key decisions, facts, and open questions. You can export them as PDFs, copy to clipboard, or email them directly to team members."
    },
    {
      icon: Zap,
      question: "How does AI Detox work?",
      answer: "AI Detox analyzes your conversation history, identifies outdated or redundant context, and creates a condensed summary. This frees up memory space and helps the AI provide more focused, relevant responses."
    },
    {
      icon: Shield,
      question: "Is my conversation data secure?",
      answer: "Yes, ZeroToken processes your conversations locally in your browser. We don't store or transmit your private conversations to our servers. Only anonymized usage analytics are collected to improve the product."
    },
    {
      icon: CreditCard,
      question: "Can I cancel my Pro subscription anytime?",
      answer: "Absolutely. You can cancel your Pro subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period."
    },
    {
      icon: Chrome,
      question: "Which browsers are supported?",
      answer: "ZeroToken currently supports Chrome and Chrome-based browsers (Edge, Brave, etc.). We're working on Firefox support and will announce it soon."
    }
  ];

  return (
    <section className="relative py-24 transition-all duration-1000" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-black/70 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about ZeroToken and how it enhances your AI experience
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl px-6 py-2 bg-white shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center space-x-3 text-left">
                      <div className="p-2 rounded-lg bg-pink/10 text-pink">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                      <span className="font-medium text-black">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pt-2 px-12">
                    <p className="text-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-12 p-6 rounded-xl bg-gray-50 border border-gray-200 max-w-xl mx-auto">
          <h3 className="text-xl font-semibold mb-3 text-black">Still have questions?</h3>
          <p className="text-black/70 mb-4">
            Our support team is here to help you get the most out of ZeroToken
          </p>
          <Button 
            asChild
            variant="outline"
            className="border border-pink text-pink hover:bg-pink hover:text-white"
          >
            <a href="mailto:support@zerotoken.ai">
              Contact Support
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};