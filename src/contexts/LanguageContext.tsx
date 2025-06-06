
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object with Hebrew and English content
const translations = {
  he: {
    testimonial: '"האתר החדש ש-brandlify בנו לי העלה את כמות הלקוחות שלי – פי 3 יותר תוך שבוע 🙌"',
    skipToContent: 'דלג לתוכן העיקרי',
    mainContent: 'תוכן עיקרי',
    heroTitle: 'מיתוג מקצועי במחיר נגיש לעסקים קטנים',
    heroSubtitle: 'לוגו, אתר ודף נחיתה במקום אחד',
    heroDescription: 'עיצוב מותאם אישית במהירות, כולל חיבור למערכת לידים – כל מה שצריך כדי לצאת לדרך כבר בימים הקרובים.',
    heroButton: 'לקבלת הצעה משתלמת – לחץ כאן',
    aboutTitle: 'מי אנחנו?',
    servicesTitle: 'השירותים שלנו',
    whyChooseTitle: 'למה לבחור בנו?',
    portfolioTitle: 'הלוגואים שלנו'
  },
  en: {
    testimonial: '"The new website that brandlify built for me increased my client base by 3 times more within a week 🙌"',
    skipToContent: 'Skip to main content',
    mainContent: 'Main content',
    heroTitle: 'Professional Branding at Affordable Prices for Small Businesses',
    heroSubtitle: 'Logo, Website, and Landing Page in One Place',
    heroDescription: 'Custom design delivered quickly, including lead system integration – everything you need to get started in just a few days.',
    heroButton: 'Click Here for an Affordable Quote',
    aboutTitle: 'Who Are We?',
    servicesTitle: 'Our Services',
    whyChooseTitle: 'Why Choose Us?',
    portfolioTitle: 'Our Logos'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['he']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
