import { Meta } from "@/components/SEO/Meta";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Meta
        title="Cookie Policy — ZeroToken"
        description="Learn about cookies used by ZeroToken website. No advertising cookies."
        canonicalPath="/cookies"
      />
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            
            <div className="space-y-8 text-foreground">
              <p className="leading-relaxed text-sm text-gray-500 mb-8">
                <strong>Last updated:</strong> September 8, 2025
              </p>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">What are cookies?</h2>
                <p className="leading-relaxed">
                  Small text files stored by your browser to remember preferences and keep sessions working.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">How we use cookies</h2>
                <p className="leading-relaxed mb-4">
                  <strong>Strictly necessary / functional (first-party):</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><code>zt_consent_v1</code> (remembers your first-run consent banner)</li>
                  <li><code>zt_cloud_save_recaps</code> / <code>zt_raw_opt_in</code> (your privacy toggles)</li>
                  <li>Auth/session tokens for the website (if you sign in on the site)</li>
                </ul>
                <p className="leading-relaxed mb-4">
                  <strong>Analytics (optional, if enabled):</strong> aggregated, anonymized usage to improve the site/app.
                </p>
                <p className="leading-relaxed">
                  <strong>No advertising cookies.</strong>
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Third-party cookies we may use</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Stripe</strong> during checkout (fraud prevention, session).</li>
                  <li><strong>Supabase</strong> for authentication/session (if you sign in on the site).</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  These providers have their own privacy and cookie policies.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Your choices</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You can disable non-essential cookies in your browser.</li>
                  <li>Inside the extension <strong>Settings</strong>, you can disable cloud saving for handoffs and export/delete your data.</li>
                  <li>If analytics are enabled, we'll show a banner with an opt-out where required.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Questions?</h2>
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

export default Cookies;