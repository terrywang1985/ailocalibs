import React from 'react';
import { Download, HardDrive, Play } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-brand-gray border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Local AI Studio in 3 Simple Steps.</h2>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-green/30 to-transparent z-0"></div>

          <div className="grid md:grid-cols-3 gap-12 relative z-10">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-brand-black border-2 border-brand-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                <Download className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Download Launcher</h3>
              <p className="text-gray-400 text-sm">
                Get our tiny, secure Localabs Launcher directly from our site.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-brand-black border-2 border-brand-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                <HardDrive className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. One-Click Deploy</h3>
              <p className="text-gray-400 text-sm">
                The Launcher automatically optimizes and installs the 11GB Local AI Engine to your drive.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-24 h-24 mx-auto bg-brand-black border-2 border-brand-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(0,255,65,0.2)]">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Launch & Create</h3>
              <p className="text-gray-400 text-sm">
                Activate your license key and start generating stunning AI art instantly. Offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};