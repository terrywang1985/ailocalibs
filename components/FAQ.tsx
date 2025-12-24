import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: "What GPUs are supported?",
    answer: "Localabs is optimized for NVIDIA RTX architecture. We support any RTX 30 Series or 40 Series GPU with 8GB VRAM or more for optimal performance."
  },
  {
    question: "Is it really 100% offline?",
    answer: "Yes! After the initial download of the engine and setup validation, Localabs runs completely offline. You can physically disconnect your ethernet cable and it will still work."
  },
  {
    question: "What if I don't have an RTX card?",
    answer: "Currently, Localabs is strictly optimized for RTX Tensor cores to guarantee the speed claims we make. Performance on GTX cards or AMD GPUs is not supported at this time."
  },
  {
    question: "Is this a subscription?",
    answer: "Absolutely not. We believe you should own your tools. It is a one-time payment for lifetime access to the version you buy."
  },
  {
    question: "What models are included?",
    answer: "Localabs comes with a custom-tuned, highly optimized AI engine designed for high-fidelity image generation, including specific optimizations for realistic and anime styles."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-brand-black">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Questions?</h2>
          <p className="text-gray-400">Everything you need to know about running Localabs.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-white/5 rounded-lg bg-brand-gray overflow-hidden transition-all duration-200"
            >
              <button 
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-white">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-brand-green" />
                ) : (
                  <Plus className="w-5 h-5 text-brand-green" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 pt-2 text-gray-400 leading-relaxed border-t border-white/5 animate-fadeIn">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};