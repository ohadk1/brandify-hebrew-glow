
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

interface FormContainerProps {
  children: React.ReactNode;
}

const FormContainer: React.FC<FormContainerProps> = ({ children }) => {
  return (
    <ScrollReveal delay={200}>
      <div className="relative">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur moving-gradient"></div>
        <div className="relative bg-black bg-opacity-90 p-6 md:p-10 rounded-lg border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
          {children}
        </div>
      </div>
    </ScrollReveal>
  );
};

export default FormContainer;
