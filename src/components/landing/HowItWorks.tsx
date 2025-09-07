import { useState } from "react";
import { Chrome } from "lucide-react";
import { InstallationFlow } from "./infographics/InstallationFlow";

export const HowItWorks = () => {
  const [isActive] = useState(true);

  return (
    <section 
      id="how-it-works" 
      className="py-32 bg-gradient-to-br from-lime/10 via-white to-pink/10 relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink/20 to-lime/20 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative">
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
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r from-pink to-lime shadow-lg">
                <img src="/lovable-uploads/a4f475ad-7b5e-4298-ade8-c142abdc1edd.png" alt="Pink Cross Icon" className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Easy Installation
                </h3>
                <p className="text-lg text-gray-600">
                  Get ZeroToken in 30 seconds
                </p>
              </div>
            </div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <InstallationFlow isActive={isActive} />
          </div>
        </div>

        {/* Simple CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-lime/20 to-pink/20 rounded-full border border-lime/30">
            <Chrome size={24} className="text-lime-600" />
            <span className="text-lg font-semibold text-gray-900">
              Ready to get started with ZeroToken?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};