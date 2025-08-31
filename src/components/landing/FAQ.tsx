import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "How does ZeroToken work with different AI platforms?",
      answer: "ZeroToken is a browser extension that integrates seamlessly with ChatGPT, Claude, and Gemini. Once installed, it adds a small interface that monitors your conversation memory and provides tools without interrupting your workflow."
    },
    {
      question: "What are handoff reports?",
      answer: "Handoff reports are structured summaries of your AI conversations that extract key decisions, facts, and open questions. You can export them as PDFs, copy to clipboard, or email them directly to team members."
    },
    {
      question: "How does AI Detox work?",
      answer: "AI Detox analyzes your conversation history, identifies outdated or redundant context, and creates a condensed summary. This frees up memory space and helps the AI provide more focused, relevant responses."
    },
    {
      question: "Is my conversation data secure?",
      answer: "Yes, ZeroToken processes your conversations locally in your browser. We don't store or transmit your private conversations to our servers. Only anonymized usage analytics are collected to improve the product."
    },
    {
      question: "Can I cancel my Pro subscription anytime?",
      answer: "Absolutely. You can cancel your Pro subscription at any time from your account settings. You'll continue to have Pro access until the end of your current billing period."
    },
    {
      question: "Which browsers are supported?",
      answer: "ZeroToken currently supports Chrome and Chrome-based browsers (Edge, Brave, etc.). We're working on Firefox support and will announce it soon."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Frequently asked questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about ZeroToken and how it works.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-border rounded-lg px-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md"
              >
                <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a 
            href="mailto:support@zerotoken.com" 
            className="text-primary hover:text-primary/80 font-semibold transition-colors duration-300"
          >
            Contact our support team →
          </a>
        </div>
      </div>
    </section>
  );
};