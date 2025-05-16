
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const FormHeader: React.FC = () => {
  return (
    <>
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="relative inline-block">
            רוצה להתחיל לבנות מותג?
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
          </span>
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <p className="text-center text-gray-200 mb-12">
          ⚡ מספר המקומות השבוע מוגבל – שלחו פרטים ונחזור אליכם בהקדם
        </p>
      </ScrollReveal>
    </>
  );
};

export default FormHeader;
