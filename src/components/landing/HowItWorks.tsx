import { useState } from "react";
import { Chrome } from "lucide-react";
import { InstallationFlow } from "./infographics/InstallationFlow";
export const HowItWorks = () => {
  const [isActive] = useState(true);
  return <section id="how-it-works" className="py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
            How ZeroToken Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in under 30 seconds
          </p>
        </div>

        {/* Installation Flow Section */}
        <div className="flex flex-col justify-center">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-4 mb-6">
              <img src="/lovable-uploads/a4f475ad-7b5e-4298-ade8-c142abdc1edd.png" alt="Pink Cross Icon" className="w-36 h-24" />
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Install the Chrome extension
                </h3>
                <p className="text-lg text-gray-600">
                  Works inside ChatGPT. No setup, no prompts.
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <InstallationFlow isActive={isActive} />
          </div>
        </div>

          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 px-8 py-4 bg-lime/10 rounded-full border border-lime/20 hover:bg-pink/10 hover:border-pink/30 transition-all duration-300 group">
              <Chrome size={24} className="text-pink group-hover:text-pink transition-colors" />
              <span className="text-lg font-semibold text-gray-900 group-hover:text-pink transition-colors">
                Ready to get started with ZeroToken?
              </span>
            </div>
          </div>
      </div>
    </section>;
};