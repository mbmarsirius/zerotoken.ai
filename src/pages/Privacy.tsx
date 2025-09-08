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
              <p className="leading-relaxed text-sm text-gray-500 mb-8">
                <strong>Last updated:</strong> September 8, 2025
              </p>

              <section>
                <p className="leading-relaxed mb-6">
                  ZeroToken is a browser extension that runs inside <strong>ChatGPT</strong> to create a <strong>continuity handoff</strong> (a compact recap of your long chat) and to capture <strong>WOW Events</strong> (key decisions, metrics, blockers, insights). We are <strong>privacy-first</strong>. This Policy explains what we process, why, and how you can exercise your rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">What we process (by default)</h2>
                <p className="leading-relaxed mb-4">
                  We keep data <strong>only</strong> to operate your account and deliver the handoff feature. By default we store:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Account info:</strong> email, ZeroToken user ID.</li>
                  <li><strong>Handoff recaps & WOW Events</strong> you explicitly generate (title, recap text, WOW markers, timestamps).</li>
                  <li><strong>Minimal usage counters:</strong> number of handoffs used, plan/credits, fair-use counters (hourly/monthly).</li>
                  <li><strong>Operational metadata:</strong> hashed install ID, country code derived from IP (no raw IP stored), device/locale basics, error logs with personal fields masked.</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mt-4">
                  <p className="leading-relaxed">
                    <strong>We do not store raw chat text by default.</strong><br />
                    If you explicitly enable "Also save raw chat" in Settings (OFF by default), we will store raw chat content for your account until you delete it.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">What we do <em>not</em> do</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We <strong>do not sell</strong> your data.</li>
                  <li>We <strong>do not read</strong> pages automatically; ZeroToken reads the current chat <strong>only when you click "Generate Handoff"</strong>.</li>
                  <li>We <strong>do not</strong> collect browsing history outside ChatGPT.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">How we use your data</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide the handoff recap & WOW Events, checkpoints, fair-use limits.</li>
                  <li>Account, billing, anti-abuse, troubleshooting, service communications.</li>
                  <li>Optional product analytics may be aggregated/anonymized.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Legal bases (GDPR/UK GDPR)</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contract (to provide ZeroToken handoffs).</li>
                  <li>Legitimate interest (security, anti-abuse, service improvement).</li>
                  <li>Consent (raw chat storage toggle, marketing emails if opted-in).</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Sub-processors</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stripe</strong> (payments and subscriptions)</li>
                  <li><strong>Supabase</strong> (database, auth, storage, edge functions)</li>
                  <li><strong>Hosting/CDN</strong> (static site/app hosting)</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  All traffic is encrypted in transit (TLS). We maintain access controls and least-privilege roles.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">International transfers</h2>
                <p className="leading-relaxed">
                  Data may be processed outside your country. We use standard safeguards (e.g., SCCs where applicable).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Retention</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Handoff recaps/WOW Events: kept while your account is active.</li>
                  <li>Raw chat (if you enabled it): until you delete or disable the toggle.</li>
                  <li>Billing records: per tax/legal requirements.</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can <strong>export</strong> or <strong>delete</strong> your data at any time (see below).
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Your rights</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access, export, correct, delete.</li>
                  <li>Opt out of raw chat storage (toggle OFF in Settings).</li>
                  <li>Object/limit certain processing.</li>
                  <li>EU/UK: right to lodge a complaint with your local authority.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">How to export or delete your data</h2>
                <p className="leading-relaxed mb-4">
                  In the extension <strong>Settings</strong> (Options page) choose: <strong>Export my data</strong> or <strong>Delete my account & data</strong>.
                  You can also email <strong><a href="mailto:support@zerotoken.ai" className="text-blue-600 hover:text-blue-800">support@zerotoken.ai</a></strong> from your account email. Deletion removes your recaps/WOW Events, counters, and profile; Stripe subscriptions are cancelled at period end.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Children</h2>
                <p className="leading-relaxed">
                  ZeroToken is not intended for children under 16.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Changes</h2>
                <p className="leading-relaxed">
                  We may update this Policy to reflect product or legal changes. We will indicate the "Last updated" date and, when material, notify you.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p className="leading-relaxed">
                  Marsirius AI Labs — "ZeroToken"<br />
                  Email: <strong><a href="mailto:support@zerotoken.ai" className="text-blue-600 hover:text-blue-800">support@zerotoken.ai</a></strong>
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