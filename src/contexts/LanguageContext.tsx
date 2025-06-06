import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'he' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Comprehensive translations object with Hebrew and English content
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
    aboutParagraph1: 'Brandlify הוא סטודיו בוטיק למיתוג, עיצוב ובניית נכסים דיגיטליים שמיועד לעסקים קטנים ובינוניים שרוצים לבלוט בשוק תחרותי. אנו מתמחים ביצירת נראות ויזואלית מהודקת, ברורה, ומעוררת רגש – כזו שלא רק נראית טוב, אלא גם ממירה.',
    aboutParagraph2: 'אנחנו לא עוד סטודיו שמספק שירותים גרפיים – אנחנו שותפים אסטרטגיים לדרך. כל פרויקט נבנה בהתאמה אישית מלאה, תוך הבנת ערכי המותג, קהל היעד והחזון העסקי של הלקוח. מטרתנו היא לזקק מסר חד, לשלב עיצוב מרגש עם חוויית משתמש ממירה, ולבנות מותג שלקוחות יזהו, יתחברו אליו – וירצו לבחור בו.',
    aboutParagraph3: 'עם מערך שירותים מקיף שכולל לוגואים, דפי נחיתה, אתרי תדמית, שפה מיתוגית, אסטרטגיה שיווקית ועוד – Brandlify נותן מענה מקצה לקצה. אנחנו משלבים קריאייטיב, טכנולוגיה ומיקוד תוצאות כדי לבנות מותג שנשאר בזיכרון.',
    aboutParagraph4: 'הלקוחות שלנו נהנים מליווי אישי, זמינות מלאה, שקיפות, ואכפתיות אמיתית להצלחה שלהם. אנחנו לא שואפים רק לעצב – אנחנו שואפים לייצר תחושת גאווה בכל פעם שהם מציגים את העסק שלהם לעולם.',
    servicesTitle: 'השירותים שלנו',
    service1Title: 'עיצוב לוגו 2D / 3D מותאם אישית',
    service1Description: 'לוגו שנבנה כדי לשרת מטרה, לא רק להיראות טוב.\nמותאם לעסק לפי התחום, קהל היעד והחזון.\nכולל אפשרות לאנימציה ועיבוד תלת־ממדי איכותי שמשדר מקצועיות.',
    service2Title: 'בניית שפה גרפית מלאה למותג',
    service2Description: 'שפה ויזואלית עקבית שגורמת ללקוחות לזהות אותך תוך שנייה.\nצבעים, טיפוגרפיה, אייקונים, סגנון תמונות – הכל קוהרנטי וממותג.\nנבנית סביב הערכים שלך ומגובה בחשיבה אסטרטגית.',
    service3Title: 'עיצוב דפי נחיתה ואתרי תדמית',
    service3Description: 'אתרים שמניעים לפעולה, לא רק "יפים".\nמבנה ברור, קריאה לפעולה חדה ונראות שמקרינה ביטחון.\nמותאם לכל מסך ומכוון להמיר מבקר ללקוח.',
    service4Title: 'חיבורים לאוטומציות ו־CRM',
    service4Description: 'מהרגע שלקוח משאיר פרטים – הכל עובד לבד.\nהמידע עובר ל־Google Sheets, וואטסאפ, CRM או Zapier.\nחיסכון בזמן, אפס פספוסים, שליטה מלאה בתהליך המכירה.',
    service5Title: 'תכנון ויזואלי שיווקי ממוקד קהל',
    service5Description: 'אנחנו לא רק מעצבים – אנחנו חושבים כמו הקהל שלך.\nמה הוא רואה? מה מניע אותו ללחוץ?\nהעיצוב מספר סיפור שמוביל להחלטה.',
    service6Title: 'שירות אישי וליווי צמוד',
    service6Description: 'כל פרויקט מלווה בליווי צמוד, מענה מהיר וזמינות גבוהה.\nלא נשארים לבד. אנחנו שם מהרגע הראשון ועד שהמותג שלך חי ובועט אונליין.',
    whyChooseTitle: 'למה לבחור בנו?',
    whyChoose1Title: 'שירות מהיר (תוך 3 ימי עבודה)',
    whyChoose1Content: 'אנחנו מספקים שירות זריז ואיכותי, עם תוצרים מוכנים תוך 3 ימי עבודה בלבד.',
    whyChoose2Title: 'מחירים נוחים במיוחד לעסקים קטנים',
    whyChoose2Content: 'חבילות מיתוג הוגנות ומשתלמות במיוחד לעסקים קטנים ויזמים בתחילת דרכם.',
    whyChoose3Title: 'מיתוג מקצועי שממיר ללידים',
    whyChoose3Content: 'עיצוב שלא רק נראה טוב, אלא גם עובד - ומביא תוצאות עסקיות אמיתיות.',
    whyChoose4Title: 'כולל חיבור אוטומטי לוואטסאפ',
    whyChoose4Content: 'כל הלידים מגיעים ישירות לוואטסאפ שלך באופן אוטומטי, בלי לפספס אף לקוח.',
    portfolioTitle: 'הלוגואים שלנו',
    footerCopyright: 'כל הזכויות שמורות.',
    footerPrivacyPolicy: 'מדיניות פרטיות',
    footerTermsOfUse: 'תנאי שימוש',
    footerCookiePolicy: 'מדיניות עוגיות',
    footerDisclaimer: 'כתב ויתור',
    footerAccessibility: 'הצהרת נגישות',
    // Contact form translations
    formHeaderTitle: 'רוצה להתחיל לבנות מותג?',
    formHeaderSubtitle: '⚡ מספר המקומות השבוע מוגבל – שלחו פרטים ונחזור אליכם בהקדם',
    formHeaderButton: 'לקבלת הצעה משתלמת – לחץ כאן',
    urgencyStripText: '🕓 רק 5 מקומות בחודש במחיר המוזל – השאר פרטים עכשיו!',
    trustStatement1: '🔒 הפרטים שלך נשמרים באופן מאובטח.',
    trustStatement2: '💼 מיתוג אמין ומוכח לעסקים קטנים.',
    formFieldName: 'שם מלא',
    formFieldBusinessName: 'שם העסק',
    formFieldPhone: 'טלפון',
    formFieldEmail: 'אימייל',
    formFieldService: 'איזה שירות מעניין אותך?',
    formFieldServicePlaceholder: 'בחר שירות',
    formFieldMessage: 'במה נוכל לעזור לך?',
    formSubmitButton: 'לקבלת הצעה משתלמת – לחץ כאן',
    formSubmitButtonLoading: 'שולח...',
    serviceOptionLogo: 'לוגו בלבד',
    serviceOptionDigitalCard: 'כרטיס ביקור דיגיטלי',
    serviceOptionPhysicalCard: 'כרטיס ביקור פיזי',
    serviceOptionMediaPost: 'פוסט פרסום מדיה',
    serviceOptionLanding: 'דף נחיתה',
    serviceOptionBrandingSite: 'אתר תדמית',
    serviceOptionEcommerceSite: 'אתר חנות',
    serviceOptionOther: 'אחר',
    toastSuccessTitle: 'הטופס נשלח בהצלחה!',
    toastSuccessDescription: 'ניצור איתך קשר בהקדם',
    toastErrorTitle: 'שגיאה בשליחת הטופס',
    toastErrorDescription: 'אנא נסה שוב מאוחר יותר'
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
    aboutParagraph1: 'Brandlify is a boutique studio for branding, design, and building digital assets designed for small and medium businesses that want to stand out in a competitive market. We specialize in creating tight, clear, and emotionally engaging visual presence – one that not only looks good but also converts.',
    aboutParagraph2: 'We are not just another studio that provides graphic services – we are strategic partners on the journey. Every project is built with complete customization, understanding the brand values, target audience, and business vision of the client. Our goal is to distill a sharp message, combine emotional design with converting user experience, and build a brand that customers will recognize, connect with – and want to choose.',
    aboutParagraph3: 'With a comprehensive service array that includes logos, landing pages, corporate websites, branding language, marketing strategy and more – Brandlify provides end-to-end solutions. We combine creativity, technology, and results focus to build a brand that stays in memory.',
    aboutParagraph4: 'Our clients enjoy personal guidance, full availability, transparency, and genuine care for their success. We don\'t just aspire to design – we aspire to create a sense of pride every time they present their business to the world.',
    servicesTitle: 'Our Services',
    service1Title: 'Custom 2D / 3D Logo Design',
    service1Description: 'A logo built to serve a purpose, not just look good.\nCustomized for the business according to the field, target audience and vision.\nIncludes the option for animation and high-quality 3D rendering that conveys professionalism.',
    service2Title: 'Complete Brand Visual Language Development',
    service2Description: 'Consistent visual language that makes customers recognize you in a second.\nColors, typography, icons, image style – everything coherent and branded.\nBuilt around your values and backed by strategic thinking.',
    service3Title: 'Landing Pages and Corporate Website Design',
    service3Description: 'Websites that drive action, not just "pretty".\nClear structure, sharp call-to-action and appearance that radiates confidence.\nAdapted to every screen and aimed at converting visitor to customer.',
    service4Title: 'Automation and CRM Integrations',
    service4Description: 'From the moment a customer leaves details – everything works automatically.\nInformation goes to Google Sheets, WhatsApp, CRM or Zapier.\nTime saving, zero misses, full control of the sales process.',
    service5Title: 'Audience-Focused Visual Marketing Planning',
    service5Description: 'We don\'t just design – we think like your audience.\nWhat do they see? What drives them to click?\nThe design tells a story that leads to a decision.',
    service6Title: 'Personal Service and Close Support',
    service6Description: 'Every project is accompanied by close support, quick response and high availability.\nYou\'re not left alone. We\'re there from the first moment until your brand is alive and kicking online.',
    whyChooseTitle: 'Why Choose Us?',
    whyChoose1Title: 'Fast Service (Within 3 Working Days)',
    whyChoose1Content: 'We provide fast and quality service, with ready products within just 3 working days.',
    whyChoose2Title: 'Especially Affordable Prices for Small Businesses',
    whyChoose2Content: 'Fair and especially profitable branding packages for small businesses and entrepreneurs starting out.',
    whyChoose3Title: 'Professional Branding that Converts to Leads',
    whyChoose3Content: 'Design that not only looks good, but also works - and brings real business results.',
    whyChoose4Title: 'Includes Automatic WhatsApp Connection',
    whyChoose4Content: 'All leads come directly to your WhatsApp automatically, without missing any customer.',
    portfolioTitle: 'Our Logos',
    footerCopyright: 'All rights reserved.',
    footerPrivacyPolicy: 'Privacy Policy',
    footerTermsOfUse: 'Terms of Use',
    footerCookiePolicy: 'Cookie Policy',
    footerDisclaimer: 'Disclaimer',
    footerAccessibility: 'Accessibility Statement',
    // Contact form translations
    formHeaderTitle: 'Want to Start Building a Brand?',
    formHeaderSubtitle: '⚡ Limited spots this week – send details and we\'ll get back to you soon',
    formHeaderButton: 'Click Here for an Affordable Quote',
    urgencyStripText: '🕓 Only 5 spots this month at the reduced price – leave details now!',
    trustStatement1: '🔒 Your details are stored securely.',
    trustStatement2: '💼 Reliable and proven branding for small businesses.',
    formFieldName: 'Full Name',
    formFieldBusinessName: 'Business Name',
    formFieldPhone: 'Phone',
    formFieldEmail: 'Email',
    formFieldService: 'Which service interests you?',
    formFieldServicePlaceholder: 'Select service',
    formFieldMessage: 'How can we help you?',
    formSubmitButton: 'Click Here for an Affordable Quote',
    formSubmitButtonLoading: 'Sending...',
    serviceOptionLogo: 'Logo Only',
    serviceOptionDigitalCard: 'Digital Business Card',
    serviceOptionPhysicalCard: 'Physical Business Card',
    serviceOptionMediaPost: 'Media Post Advertisement',
    serviceOptionLanding: 'Landing Page',
    serviceOptionBrandingSite: 'Corporate Website',
    serviceOptionEcommerceSite: 'E-commerce Website',
    serviceOptionOther: 'Other',
    toastSuccessTitle: 'Form submitted successfully!',
    toastSuccessDescription: 'We will contact you soon',
    toastErrorTitle: 'Error submitting form',
    toastErrorDescription: 'Please try again later'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['he']] || key;
  };

  const isRTL = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'text-right' : 'text-left'}>
        {children}
      </div>
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
