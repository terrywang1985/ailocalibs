import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Shield, WifiOff, Zap, Download, HardDrive, Cpu } from 'lucide-react';

// 默认下载链接（配置加载前使用）
const DEFAULT_DOWNLOAD_URL = 'https://pub-da80d4fb5ea542d0920e1f478ea9455b.r2.dev/launcher/AILocalabs-Setup-v1.0.0.exe';

export const Hero: React.FC = () => {
  const [downloadUrl, setDownloadUrl] = useState(DEFAULT_DOWNLOAD_URL);

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

  const handleDownload = () => {
    window.open(downloadUrl, '_blank');
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
            Stop Renting AI. <br />
            Start <span className="text-brand-green">Owning It.</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Unleash the full power of your RTX GPU with <strong className="text-white">Localabs</strong>. 
            Run professional-grade AI models 100% locally. Zero subscriptions, zero censorship, 
            and absolute data privacy.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Button onClick={handleDownload} className="text-lg px-8 py-4 w-full sm:w-auto">
              <Download className="w-5 h-5" />
              Unlock Your GPU Power
            </Button>
          </div>
          
          <div className="text-sm text-gray-500 font-medium">
             One-time payment of $14.9 Lifetime Access. (No recurring fees)
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-brand-green" />
              <span>100% Private & Offline</span>
            </div>
            <div className="w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-brand-green" />
              <span>Trusted by Creators</span>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Central GPU Core Representation */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gray to-black border border-white/10 rounded-2xl p-1 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              
              {/* Glowing Core */}
              <div className="relative z-10 w-48 h-48 rounded-full bg-brand-black border-4 border-brand-green/30 shadow-[0_0_50px_rgba(0,255,65,0.2)] flex items-center justify-center animate-pulse">
                <Cpu className="w-24 h-24 text-brand-green" />
              </div>

              {/* Orbiting Elements */}
              <div className="absolute top-10 right-10 p-3 bg-brand-gray rounded-lg border border-white/5 shadow-lg flex items-center gap-2 animate-bounce">
                <WifiOff className="w-5 h-5 text-red-500" />
                <span className="text-xs font-mono text-gray-300">DISCONNECTED</span>
              </div>

              <div className="absolute bottom-10 left-10 p-3 bg-brand-gray rounded-lg border border-white/5 shadow-lg flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-brand-green" />
                <span className="text-xs font-mono text-gray-300">LOCAL STORAGE</span>
              </div>

              {/* Decorative Lines */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent" />
              <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-brand-green/50 to-transparent" />
            </div>

            {/* Shield Overlay */}
            <div className="absolute -bottom-6 -right-6">
              <Shield className="w-32 h-32 text-brand-gray fill-brand-black drop-shadow-2xl" strokeWidth={1} />
              <Shield className="absolute inset-0 w-32 h-32 text-brand-green/20 animate-pulse" strokeWidth={1} />
            </div>
            
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-center w-full">
                <span className="text-brand-green font-mono text-sm tracking-widest uppercase">Zero Cloud. Pure Power.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};