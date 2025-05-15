
import React from 'react';
import { Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const whyChooseItems = [
  "מותג שנראה באמת כמו מותג",
  "תהליך מהיר, ממוקד ואישי",
  "עיצוב שמניע לפעולה ולא רק יפה",
  "מסר ברור שמחובר לקהל היעד",
  "רספונסיבי לחלוטין – גם למובייל"
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              למה לבחור בנו?
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {whyChooseItems.map((item, index) => (
            <ScrollReveal 
              key={index}
              className="stagger-item"
              delay={index * 150}
            >
              <div className="relative group flex items-center">
                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
                <div className="relative flex items-center p-4 bg-black bg-opacity-70 rounded-lg border border-gray-800 w-full">
                  <div className="flex-shrink-0 bg-gradient-brand rounded-full p-2 mr-4 pulse-highlight">
                    <Check size={24} className="text-white" />
                  </div>
                  <p className="text-lg md:text-xl">{item}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
