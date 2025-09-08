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
              <p className="leading-relaxed text-sm text-gray-500 mb-8">
                <strong>Last updated:</strong> September 8, 2025
              </p>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">1. Service</h3>
                <p className="leading-relaxed">
                  ZeroToken is a Chrome extension that creates <strong>continuity handoffs</strong> and captures <strong>WOW Events</strong> inside ChatGPT. Future features may include Auto-Prompt Engineer Mode, AI Detox, and cross-model handoff.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">2. Accounts</h3>
                <p className="leading-relaxed">
                  You must provide a valid email and accept this ToS and the Privacy Policy. You are responsible for keeping your login secure.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">3. Plans & billing</h3>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Free (Trial):</strong> <strong>3 handoffs total</strong> (one-time).</li>
                  <li><strong>Lite PAYG:</strong> <strong>$2.99 per handoff</strong> (billed at checkout via Stripe; one credit = one handoff).</li>
                  <li><strong>Pro:</strong> <strong>$9.99/month</strong> subscription via Stripe. Auto-renews monthly until cancelled.</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  <strong>Fair-Use for Pro:</strong> up to <strong>20 handoffs/hour</strong> and <strong>500/month</strong> per user to keep the service fast and reliable. We may rate-limit or contact you if you exceed these levels.
                </p>
                <p className="leading-relaxed">
                  <strong>Taxes & refunds:</strong> Prices exclude applicable taxes. Unless required by law, payments are non-refundable; cancellations take effect at period end. Chargebacks or fraudulent activity may result in suspension.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">4. Acceptable use</h3>
                <p className="leading-relaxed">
                  Do not use ZeroToken to violate laws, infringe IP, harass others, or bypass platform rules. Do not attempt to reverse engineer, resell, or interfere with service integrity.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">5. Data & privacy</h3>
                <p className="leading-relaxed">
                  Our Privacy Policy governs how we process your data. By using the service you consent to processing as described. You can export or delete your data at any time. By default we <strong>do not store raw chat</strong>; if you enable the toggle, you can disable it later and delete stored content.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">6. Availability & changes</h3>
                <p className="leading-relaxed">
                  We aim for reliable service but provide ZeroToken "as is" without warranties. Features may change; we will give reasonable notice for material changes to paid plans.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">7. Limitation of liability</h3>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, ZeroToken/Marsirius AI Labs shall not be liable for indirect, incidental, special, consequential, or punitive damages, or loss of profits, data, or use. Our aggregate liability will not exceed the amounts you paid in the 3 months preceding the claim.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">8. Termination</h3>
                <p className="leading-relaxed">
                  You may cancel Pro anytime in billing or by contacting support. We may suspend or terminate for non-payment, fraud, or material breach.
                </p>
              </section>

              <section>
                <h3 className="font-display text-xl font-semibold mb-4">9. Governing law</h3>
                <p className="leading-relaxed">
                  These Terms are governed by the laws of the jurisdiction where Marsirius AI Labs is established (insert jurisdiction when available). Disputes will be resolved in that venue unless otherwise required by law.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p className="leading-relaxed">
                  <a href="mailto:support@zerotoken.ai" className="text-blue-600 hover:text-blue-800">support@zerotoken.ai</a>
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