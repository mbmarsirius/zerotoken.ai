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
            Keep your AI chats coherent. ZeroToken builds a continuity recap of your long thread and captures the WOW Events—so you can move forward without re-explaining.
          </p>
        </div>

        {/* 4 Simple Steps */}
        <div className="space-y-16 mb-20">
          <div className="text-center mb-12">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Step 1 — Chat as usual</h3>
              <p className="text-lg text-gray-600">Work in ChatGPT like you always do. ZeroToken stays quiet until you ask.</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Step 2 — Generate Handoff</h3>
              <p className="text-lg text-gray-600">Click Generate Handoff. ZeroToken reads this page only and compiles a short, structured brief.</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lavender/10 border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Step 3 — Recap + WOW Events</h3>
              <p className="text-lg text-gray-600">You get a continuity recap: Facts, Decisions, Open Questions, Next Steps—and a list of WOW Events (key insights, numbers, blockers, decisions).</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <div className="group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Step 4 — Keep going</h3>
              <p className="text-lg text-gray-600">Use the recap to continue your work without re-explaining. (Auto-paste & cross-AI handoff are on the roadmap.)</p>
            </div>
          </div>
        </div>

        {/* What the recap includes */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">What the recap includes</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Facts</h4>
                <p className="text-gray-600">the essentials, verbatim where it matters</p>
              </div>
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lavender/10 border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Decisions</h4>
                <p className="text-gray-600">who/what/when captured clearly</p>
              </div>
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Open Questions</h4>
                <p className="text-gray-600">gaps and pending items</p>
              </div>
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Next Steps</h4>
                <p className="text-gray-600">concise, actionable steps you can ship</p>
              </div>
            </div>
          </div>
        </div>

        {/* What ZeroToken adds under the hood */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">What ZeroToken adds under the hood</h3>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lavender/10 border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">WOW Events Capture</h4>
                <p className="text-gray-600">flags key moments so turning points never get lost</p>
              </div>
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">Checkpoints & Auto-Save</h4>
                <p className="text-gray-600">safe restore points as you work</p>
              </div>
              <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-pink/10 border-pink/50 hover:bg-pink/20 hover:shadow-2xl hover:shadow-pink/40 hover:border-pink/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-pink/20 before:transition-all before:duration-500 shadow-lg shadow-pink/15">
                <h4 className="text-xl font-bold text-gray-900 mb-3">ZeroMeter (AI memory gauge)</h4>
                <p className="text-gray-600">live tokens used vs. left, early warnings before overflow</p>
              </div>  
            </div>
          </div>
        </div>

        {/* Why it matters */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Why it matters</h3>
            <div className="space-y-4 max-w-3xl mx-auto">
              <p className="text-xl text-gray-600">No more re-explaining—resume in seconds</p>
              <p className="text-xl text-gray-600">Fewer hallucinations—tight, relevant context</p>
              <p className="text-xl text-gray-600">Shareable clarity—your team sees the same Decisions & Next Steps</p>
            </div>
          </div>
        </div>

        {/* Privacy */}
        <div className="mb-12">
          <div className="group relative p-6 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lavender/10 border-lavender/50 hover:bg-lavender/20 hover:shadow-2xl hover:shadow-lavender/40 hover:border-lavender/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lavender/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lavender/20 before:transition-all before:duration-500 shadow-lg shadow-lavender/15 text-center">
            <p className="text-lg text-gray-600">
              <strong>Privacy-first:</strong> ZeroToken processes only on your click. By default we store recaps + WOW Events (not raw chat). You can export or delete your data anytime in Settings.
            </p>
          </div>
        </div>

        {/* Badge line */}
        <div className="text-center">
          <div className="group relative p-4 rounded-3xl backdrop-blur-xl border transition-all duration-500 overflow-hidden bg-lime/10 border-lime/50 hover:bg-lime/20 hover:shadow-2xl hover:shadow-lime/40 hover:border-lime/70 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-lime/10 before:to-transparent before:opacity-100 hover:before:opacity-100 hover:before:from-lime/20 before:transition-all before:duration-500 shadow-lg shadow-lime/15">
            <p className="text-gray-600">
              Works in ChatGPT today · Claude & Gemini support coming soon · 3 free handoffs to try
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};