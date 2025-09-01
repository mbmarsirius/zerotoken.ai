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
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900 tracking-tight">
            Questions & answers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ZeroToken
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => {
              const Icon = faq.icon;
              return (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="hover:no-underline px-6 py-5">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
                        <Icon size={16} className="text-gray-600" strokeWidth={1.5} />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5">
                    <div className="pl-12">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-16">
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Our support team is here to help
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900"
            >
              <a href="mailto:support@zerotoken.ai">
                Contact Support
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};