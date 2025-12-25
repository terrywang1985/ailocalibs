import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="text-brand-green w-6 h-6" />
              <span className="text-lg font-bold text-white">
                AILocalabs
              </span>
            </div>
            <p className="text-gray-500 text-sm">Your GPU. Your Rules.</p>
          </div>

          <div className="flex gap-8 text-sm text-gray-400">
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Discord Support</a>
          </div>
        </div>

        <div className="text-center text-gray-600 text-xs pt-8 border-t border-white/5">
          <p>&copy; {new Date().getFullYear()} AILocalabs. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4 text-gray-500">
            <a href="/privacy.html" className="hover:text-brand-green transition-colors">Privacy Policy</a>
            <span className="text-white/10">|</span>
            <a href="/terms.html" className="hover:text-brand-green transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};