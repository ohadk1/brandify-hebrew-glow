
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const TrustStatement: React.FC = () => {
  return (
    <ScrollReveal>
      <div className="mt-8 text-center text-gray-300">
        <p className="mb-2">
          <span className="mr-1">🔒</span> הפרטים שלך נשמרים באופן מאובטח.
        </p>
        <p>
          <span className="mr-1">💼</span> מיתוג אמין ומוכח לעסקים קטנים.
        </p>
      </div>
    </ScrollReveal>
  );
};

export default TrustStatement;
