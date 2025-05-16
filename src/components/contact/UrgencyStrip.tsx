
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const UrgencyStrip: React.FC = () => {
  return (
    <ScrollReveal>
      <div className="bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red p-1 rounded-lg mb-10">
        <div className="bg-black bg-opacity-90 px-4 py-4 rounded-md text-center">
          <p className="text-xl md:text-2xl font-bold flex justify-center items-center flex-wrap">
            <span className="mr-2">🕓</span> רק 5 מקומות בחודש במחיר המוזל – השאר פרטים עכשיו!
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default UrgencyStrip;
