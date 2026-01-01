import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Download } from 'lucide-react';

// 默认下载链接（配置加载前使用）
const DEFAULT_DOWNLOAD_URL = 'https://cdn.ailocalabs.com/launcher/AILocalabs-Setup-v1.0.0.exe';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 从配置文件加载下载链接
  useEffect(() => {
    fetch('/config.json')
      .then(res => res.json())
      .then(config => {
        if (config.launcher?.downloadUrl) {
          setDownloadUrl(config.launcher.downloadUrl);
        }
      })
      .catch(() => {
        // 加载失败时使用默认链接
      });
  }, []);

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
          <a 
            href={downloadUrl}
            download
            className="py-2 px-4 text-sm rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 border border-brand-green text-brand-green hover:bg-brand-green/10"
          >
            <Download className="w-4 h-4" />
            Download Launcher
          </a>
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
          <a 
            href={downloadUrl}
            download
            className="w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 bg-brand-green text-brand-black hover:bg-brand-greenDark"
          >
            <Download className="w-5 h-5" />
            Download Launcher
          </a>
        </div>
      )}
    </nav>
  );
};