
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const TrustStatement: React.FC = () => {
  const { t } = useLanguage();

  return (
    <ScrollReveal>
      <div className="mt-8 text-center text-gray-300">
        <p className="mb-2">
          {t('trustStatement1')}
        </p>
        <p>
          {t('trustStatement2')}
        </p>
      </div>
    </ScrollReveal>
  );
};

export default TrustStatement;
