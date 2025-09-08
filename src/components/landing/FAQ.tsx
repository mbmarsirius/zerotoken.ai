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
  return <section className="py-32 bg-gradient-to-b from-ink via-ink/95 to-ink/90 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-80 bg-[#a782fa]">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-pink/40 to-lime/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-lime/40 to-pink/40 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-lavender/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-4xl font-bold mb-6 tracking-tight text-neutral-950 text-center lg:text-6xl">Questions &amp; Answers</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about ZeroToken
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isPink = faq.color === "pink";
            return <AccordionItem key={index} value={`item-${index}`} className={`border-2 ${isPink ? 'border-pink/20 hover:border-pink/40' : 'border-lime/20 hover:border-lime/40'} rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl shadow-[0_8px_32px_rgba(255,255,255,0.1)] hover:shadow-[0_8px_32px_rgba(255,255,255,0.2)] border-white/20 hover:border-white/30 transition-all duration-300 animate-fade-in group`} style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <AccordionTrigger className="hover:no-underline px-8 py-6 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:to-gray-50/50 transition-all duration-300">
                    <div className="flex items-center space-x-4 text-left">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${isPink ? 'from-pink/20 to-pink/30' : 'from-lime/20 to-lime/30'} flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon size={20} className={`${isPink ? 'text-pink' : 'text-lime'} transition-all duration-300 group-hover:scale-110`} strokeWidth={1.5} />
                      </div>
                      <span className="font-bold text-xl text-gray-900 group-hover:text-gray-800 transition-colors">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-6 transition-all duration-300">
                    <div className="pl-16">
                      <p className="font-bold text-gray-900 leading-relaxed text-lg">
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