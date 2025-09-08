import { useState } from "react";
import { Chrome } from "lucide-react";
import { InstallationFlow } from "./infographics/InstallationFlow";

export const HowItWorks = () => {
  const [isActive] = useState(true);

  return (
    <section id="how-it-works" className="py-32 bg-white">
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
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
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
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
              <InstallationFlow isActive={isActive} />
            </div>
          </div>
        </div>

        <div className="text-center mt-20">
          <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lavender/10 border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15">
            <div className="inline-flex items-center space-x-4 px-8 py-4 rounded-full relative z-10">
              <Chrome size={24} className="text-pink group-hover:text-pink transition-colors" />
              <span className="text-lg font-semibold text-gray-900 group-hover:text-pink transition-colors">
                Ready to get started with ZeroToken?
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};