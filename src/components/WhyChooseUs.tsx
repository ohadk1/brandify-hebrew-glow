
import React from 'react';
import { Clock, Shield, Zap, Mouse } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const whyChooseItems = [
  {
    icon: <Clock size={20} className="text-brandlify-cyan" />,
    title: "שירות מהיר (תוך 3 ימי עבודה)",
    content: "אנחנו מספקים שירות זריז ואיכותי, עם תוצרים מוכנים תוך 3 ימי עבודה בלבד."
  },
  {
    icon: <Shield size={20} className="text-brandlify-cyan" />,
    title: "מחירים נוחים במיוחד לעסקים קטנים",
    content: "חבילות מיתוג הוגנות ומשתלמות במיוחד לעסקים קטנים ויזמים בתחילת דרכם."
  },
  {
    icon: <Zap size={20} className="text-brandlify-cyan" />,
    title: "מיתוג מקצועי שממיר ללידים",
    content: "עיצוב שלא רק נראה טוב, אלא גם עובד - ומביא תוצאות עסקיות אמיתיות."
  },
  {
    icon: <Mouse size={20} className="text-brandlify-cyan" />,
    title: "כולל חיבור אוטומטי לוואטסאפ",
    content: "כל הלידים מגיעים ישירות לוואטסאפ שלך באופן אוטומטי, בלי לפספס אף לקוח."
  }
];

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="why-choose-us" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              {t('whyChooseTitle')}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {whyChooseItems.map((item, index) => (
            <ScrollReveal 
              key={index}
              className="stagger-item"
              delay={index * 150}
            >
              <div className="group relative overflow-hidden rounded-lg">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur transition duration-300"></div>
                <div className="relative bg-black bg-opacity-70 rounded-lg p-6 border border-gray-800 shadow-lg transition-all duration-300 group-hover:shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-[#00E5FF] to-[#8F00FF] rounded-full p-1.5 flex-shrink-0 pulse-highlight">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-200">{item.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
