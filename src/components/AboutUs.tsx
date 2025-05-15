
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative">
            מי אנחנו?
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_0.3s_forwards]"></div>
          </h2>
          
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-80 p-8 rounded-lg border border-gray-700 shadow-xl transition-all duration-500 hover:transform hover:scale-[1.01] hover:shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Brandlify הוא סטודיו בוטיק למיתוג שמלווה עסקים קטנים ובינוניים להיראות מקצועיים, מיוחדים ובלתי נשכחים.
                אנחנו בונים מותגים עם נוכחות, חזון ונראות שיווקית שנשארת בראש של הלקוח.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutUs;
