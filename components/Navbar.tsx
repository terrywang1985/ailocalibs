import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleComingSoon = () => {
    alert("Coming Soon! The Localabs Launcher is getting its final polish.");
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-black/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Terminal className="text-brand-green w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-white">
            AILocalabs
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium">Why Localabs?</a>
          <a href="#how-it-works" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium">How it Works</a>
          <a href="#faq" className="text-gray-400 hover:text-brand-green transition-colors text-sm font-medium">FAQ</a>
          <Button variant="outline" className="py-2 px-4 text-sm" onClick={handleComingSoon}>
            Launch App
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-black border-b border-white/10 absolute top-full left-0 right-0 p-6 flex flex-col gap-4">
          <a href="#features" className="text-gray-300 hover:text-brand-green" onClick={() => setIsMobileMenuOpen(false)}>Why Localabs?</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-brand-green" onClick={() => setIsMobileMenuOpen(false)}>How it Works</a>
          <a href="#faq" className="text-gray-300 hover:text-brand-green" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
          <Button fullWidth onClick={handleComingSoon}>Download Launcher</Button>
        </div>
      )}
    </nav>
  );
};