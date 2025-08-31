import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data Collection</h2>
                <p className="leading-relaxed mb-4">
                  ZeroToken only captures the minimum data necessary to generate handoff reports and 
                  provide AI Detox functionality. We collect:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AI conversation content needed for report generation</li>
                  <li>Usage analytics to improve service quality</li>
                  <li>Account information for Pro subscribers</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data Storage</h2>
                <p className="leading-relaxed">
                  We do not permanently store your AI conversations. Data is processed temporarily 
                  to generate reports and then securely deleted. Pro accounts maintain handoff 
                  reports for easy access but conversations themselves are not retained.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Data Security</h2>
                <p className="leading-relaxed">
                  All data is encrypted in transit and at rest. We use industry-standard security 
                  measures to protect your information and regularly audit our security practices.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Third-Party Integrations</h2>
                <p className="leading-relaxed">
                  ZeroToken works with ChatGPT, Claude, Gemini, and other AI platforms but does not 
                  share your data with these services beyond what's necessary for functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p className="leading-relaxed">
                  For privacy-related questions, contact us at privacy@zerotoken.com
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

export default Privacy;