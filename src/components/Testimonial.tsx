
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-20 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-90 p-8 md:p-12 rounded-lg border border-gray-800 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <Quote size={30} className="text-brandlify-cyan mb-4 opacity-70" />
                <p className="text-xl md:text-2xl font-light text-white leading-relaxed mb-6">
                  "Brandlify elevated my entire visual identity – I got 3x more leads within a week 🙌"
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C]"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonial;
