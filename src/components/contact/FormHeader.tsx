
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const FormHeader: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <ScrollReveal>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
          <span className="relative inline-block">
            {t('formHeaderTitle')}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
          </span>
        </h2>
      </ScrollReveal>
      
      <ScrollReveal delay={100}>
        <p className="text-center text-gray-200 mb-12">
          {t('formHeaderSubtitle')}
        </p>
      </ScrollReveal>
      
      <ScrollReveal delay={150}>
        <div className="text-center mb-12">
          <Button 
            className="gradient-btn text-xl px-8 py-6 font-bold"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span>{t('formHeaderButton')}</span>
          </Button>
        </div>
      </ScrollReveal>
    </>
  );
};

export default FormHeader;
