
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative">
            {t('aboutTitle')}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-pink-500 transform animate-[expandWidth_0.6s_ease_0.3s_forwards]"></div>
          </h2>
          
          <div className="relative space-y-6">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-80 p-8 rounded-lg border border-gray-700 shadow-xl transition-all duration-500 hover:transform hover:scale-[1.01] hover:shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t('aboutParagraph1')}
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t('aboutParagraph2')}
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                {t('aboutParagraph3')}
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {t('aboutParagraph4')}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutUs;
