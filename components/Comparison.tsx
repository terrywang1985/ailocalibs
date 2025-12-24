import React from 'react';
import { AlertCircle, CheckCircle2, CloudOff, Wrench, XCircle, Zap } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Beyond the GitHub Headaches.</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We've done the heavy lifting and optimization. You just create.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Old Way */}
          <div className="bg-brand-black border border-white/5 rounded-2xl p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-red-500/50" />
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-red-500/10 rounded-full">
                <Wrench className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-200">The Old Way</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Complex Python installs & errors",
                "Endless dependency conflicts",
                "Slow cloud queues & latency",
                "Monthly subscription costs",
                "Strict content filters & censorship"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The Localabs Way */}
          <div className="bg-brand-lightGray border border-brand-green/20 rounded-2xl p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-green shadow-[0_0_10px_#00FF41]" />
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-green/5 rounded-full blur-3xl" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-brand-green/10 rounded-full">
                <Zap className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-white">The Localabs Way</h3>
            </div>
            <ul className="space-y-4">
              {[
                "One-click executable deployment",
                "Instant setup, pre-optimized engine",
                "Blazing-fast RTX local generation",
                "Pay once, create forever",
                "True privacy & uncensored freedom"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-white">
                  <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};