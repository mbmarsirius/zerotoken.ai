import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

const Cookies = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
              Cookie Policy
            </h1>
            
            <div className="space-y-8 text-foreground">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">What Are Cookies</h2>
                <p className="leading-relaxed">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide better service and understand how you use ZeroToken.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Essential Cookies</h2>
                <p className="leading-relaxed mb-4">
                  We use essential cookies that are necessary for the website to function:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Authentication and login state</li>
                  <li>Security and fraud prevention</li>
                  <li>User preferences and settings</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Analytics Cookies</h2>
                <p className="leading-relaxed">
                  We use Plausible Analytics, a privacy-focused analytics service that doesn't 
                  track individual users or use invasive cookies. This helps us understand 
                  website usage without compromising your privacy.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Managing Cookies</h2>
                <p className="leading-relaxed">
                  You can control cookies through your browser settings. However, disabling 
                  essential cookies may affect website functionality.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">Contact</h2>
                <p className="leading-relaxed">
                  For cookie-related questions, contact us at privacy@zerotoken.com
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