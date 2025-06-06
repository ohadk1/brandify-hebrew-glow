
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
    mainContent: 'תוכן עיקרי'
  },
  en: {
    testimonial: '"The new website that brandlify built for me increased my client base by 3 times more within a week 🙌"',
    skipToContent: 'Skip to main content',
    mainContent: 'Main content'
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
