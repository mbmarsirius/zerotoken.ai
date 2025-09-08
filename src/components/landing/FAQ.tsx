import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, Shield, Zap, Globe, CreditCard, Chrome } from "lucide-react";
export const FAQ = () => {
  const faqs = [{
    icon: Globe,
    question: "How does ZeroToken work with different AI platforms?",
    answer: "ZeroToken runs inside ChatGPT today. Support for Claude and Gemini is planned. The continuity recap is designed so the next model can continue seamlessly.",
    color: "pink"
  }, {
    icon: HelpCircle,
    question: "What is a \"continuity handoff\"?",
    answer: "A short brief of your long chat, structured as Facts, Decisions, Open Questions, Next Steps. It lets you resume instantly without rereading the whole thread.",
    color: "lime"
  }, {
    icon: Zap,
    question: "What are \"WOW Events\"?",
    answer: "WOW Events are the moments that matter—key decisions, metrics, blockers, or insights. ZeroToken detects and pins them into the handoff so you never lose the turning points.",
    color: "pink"
  }, {
    icon: Shield,
    question: "How do I resume the conversation now?",
    answer: "Open a fresh ChatGPT chat and paste your recap to keep going. (Automatic paste and cross-AI handoff are on the roadmap.)",
    color: "lime"
  }, {
    icon: CreditCard,
    question: "Is my conversation data secure?",
    answer: "ZeroToken is built privacy-first. We only capture what's necessary to build your recap and operate your account (email, plan/credits, basic usage). We do not sell data. See Privacy for details.",
    color: "pink"
  }, {
    icon: Chrome,
    question: "How many handoffs do I get for free?",
    answer: "Three total (one-time trial). After that, choose Lite PAYG (per handoff) or Pro (monthly).",
    color: "lime"
  }, {
    icon: HelpCircle,
    question: "What is ZeroMeter?",
    answer: "ZeroMeter is ZeroToken's live AI memory (token) gauge. It shows how much capacity is used and what's left for the current chat, with early warnings before you hit the limit—so you can avoid truncation and stay in control.",
    color: "pink"
  }, {
    icon: HelpCircle,
    question: "What does \"Unlimited (Fair-Use)\" mean on Pro?",
    answer: "Soft limits keep things fast: up to 20/hour and 500/month per user. Most users never hit these limits.",
    color: "pink"
  }, {
    icon: CreditCard,
    question: "Can I cancel Pro anytime?",
    answer: "Yes. Pro is monthly and can be cancelled anytime from your billing page.",
    color: "lime"
  }, {
    icon: Chrome,
    question: "Which browsers are supported?",
    answer: "Chrome and Chromium-based browsers (Arc, Brave, Edge). Safari/Firefox support is planned.",
    color: "pink"
  }];
  return <section className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-gray-900 text-center lg:text-6xl">Questions &amp; Answers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about ZeroToken
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
            const Icon = faq.icon;
            return <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl transition-all duration-500 group relative overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
                  <AccordionTrigger className="hover:no-underline px-8 py-6 transition-all duration-500 group-hover:text-pink relative z-10">
                    <div className="flex items-center space-x-4 text-left">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink/20 to-pink/10 backdrop-blur-lg flex items-center justify-center group-hover:from-pink/30 group-hover:to-pink/20 group-hover:scale-110 transition-all duration-500 border border-pink/30 group-hover:border-pink/50 shadow-lg shadow-pink/15">
                        <Icon size={20} className="text-pink group-hover:text-pink transition-all duration-300" strokeWidth={1.5} />
                      </div>
                      <span className="font-semibold text-xl text-gray-900 group-hover:text-pink transition-colors duration-300">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 transition-all duration-300">
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>;
          })}
          </Accordion>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-20">
          <div className="max-w-md mx-auto p-8 rounded-2xl backdrop-blur-xl border relative overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 transition-all duration-500 before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Still have questions?</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our support team is here to help
              </p>
              <Button asChild className="relative bg-gradient-to-br from-pink/90 to-pink backdrop-blur-lg text-white border border-pink/30 hover:from-pink hover:to-pink/80 hover:shadow-2xl hover:shadow-pink/40 hover:scale-105 px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-500 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700">
                <a href="mailto:zerotoken@marsirius.ai">
                  <span className="relative z-10">Contact Support</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};