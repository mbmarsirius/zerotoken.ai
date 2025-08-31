import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Terms of Service
            </h1>
            
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Service Description</h2>
                <p className="leading-relaxed">
                  ZeroToken is a Chrome extension and desktop application that helps manage AI 
                  conversations by providing memory tracking, handoff reports, and context refresh 
                  capabilities for ChatGPT, Claude, Gemini, and other AI platforms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Usage Terms</h2>
                <p className="leading-relaxed mb-4">By using ZeroToken, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to reverse engineer or hack the service</li>
                  <li>Respect rate limits and usage guidelines</li>
                  <li>Not share your Pro account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Subscription Terms</h2>
                <p className="leading-relaxed">
                  Pro subscriptions are billed monthly at €7/month. You may cancel at any time, 
                  and your subscription will remain active until the end of the current billing period. 
                  No refunds are provided for partial months.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Limitations</h2>
                <p className="leading-relaxed">
                  ZeroToken is provided "as is" without warranties. We are not liable for any 
                  damages arising from use of the service. Free accounts have usage limitations 
                  as specified on our pricing page.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p className="leading-relaxed">
                  For terms-related questions, contact us at legal@zerotoken.com
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;