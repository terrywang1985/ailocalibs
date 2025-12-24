import React from 'react';
import { Lock, Unlock, Zap, Infinity as InfinityIcon } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: "Absolute Privacy",
    description: "Your prompts, your data, your images – they never leave your machine. Perfect for sensitive projects and professional use.",
    icon: Lock
  },
  {
    title: "Uncensored Creation",
    description: "With Localabs, your artistic freedom is paramount. Create without cloud filters. It's your hardware, your rules.",
    icon: Unlock
  },
  {
    title: "Blazing Fast Speed",
    description: "Built to leverage RTX Tensor Cores. Up to 2x faster than standard setups with our precision-tuned SDNQ-int8 engine.",
    icon: Zap
  },
  {
    title: "Own Your Tools",
    description: "Say goodbye to monthly subscriptions. A single, one-time purchase gives you lifetime access and updates.",
    icon: InfinityIcon
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-6 rounded-xl bg-brand-gray border border-white/5 hover:border-brand-green/50 transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-brand-lightGray rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-green/10 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};