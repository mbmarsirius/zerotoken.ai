import { Helmet } from "react-helmet-async";

export const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ZeroToken",
    "description": "Our extension works inside ChatGPT, Claude, and Gemini. Shows memory left, creates handoff reports, and keeps conversations fresh with AI Detox.",
    "url": "https://www.zerotoken.ai",
    "applicationCategory": "BrowserApplication",
    "operatingSystem": "Chrome, Desktop",
    "offers": [
      {
        "@type": "Offer",
        "name": "Free Plan",
        "price": "0",
        "priceCurrency": "EUR",
        "description": "1 Handoff total, 3 Auto-Checkpoints total, PDF & Email"
      },
      {
        "@type": "Offer", 
        "name": "Pro Plan",
        "price": "7",
        "priceCurrency": "EUR",
        "billingDuration": "P1M",
        "description": "Unlimited handoffs & checkpoints, Priority processing, Live progress & export suite"
      }
    ],
    "creator": {
      "@type": "Organization",
      "name": "ZeroToken",
      "url": "https://www.zerotoken.ai"
    },
    "publisher": {
      "@type": "Organization", 
      "name": "Marsirius AI Labs",
      "url": "https://marsirius.com"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};