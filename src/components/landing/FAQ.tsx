import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "What problem does ZeroToken solve?",
      answer: "When chats get long, AI forgets or acts strange. ZeroToken shows memory left and keeps chats usable by providing context refresh and structured handoff reports."
    },
    {
      question: "Which AIs does it work with?",
      answer: "ChatGPT, Claude, Gemini, and any LLM chatbox in Chrome. Desktop app coming soon."
    },
    {
      question: "What's AI Detox?",
      answer: "One-tap refresh that offloads old context and adds a dense recap, freeing up memory for clearer, faster AI responses."
    },
    {
      question: "Is my data safe?",
      answer: "Yes. We only capture what's needed to generate reports and never store your conversations permanently. See our Privacy policy for full details."
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about ZeroToken
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg font-semibold hover:text-lime transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};