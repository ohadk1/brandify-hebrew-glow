
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section className="py-14 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-15 blur-md moving-gradient"></div>
            <div className="relative bg-black bg-opacity-90 p-8 md:p-12 rounded-lg border border-gray-800 shadow-xl">
              <div className="flex flex-col items-center text-center">
                <Quote size={28} className="text-brandlify-cyan mb-5 opacity-60" />
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed mb-6 font-['Assistant','Heebo',sans-serif] px-2 md:px-6">
                  "האתר החדש ש-<span className="font-normal text-brandlify-cyan">brandlify</span> בנו לי העלה את כמות הלקוחות שלי – פי 3 יותר תוך שבוע 🙌"
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C]"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonial;
