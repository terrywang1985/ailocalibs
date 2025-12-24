import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Comparison } from './components/Comparison';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-brand-black min-h-screen text-white selection:bg-brand-green selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Comparison />
        <Features />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;