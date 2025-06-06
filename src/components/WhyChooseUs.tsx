
import React from 'react';
import { Clock, Shield, Zap, Mouse } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const whyChooseItems = [
    {
      icon: <Clock size={20} className="text-brandlify-cyan" />,
      titleKey: "whyChoose1Title",
      contentKey: "whyChoose1Content"
    },
    {
      icon: <Shield size={20} className="text-brandlify-cyan" />,
      titleKey: "whyChoose2Title",
      contentKey: "whyChoose2Content"
    },
    {
      icon: <Zap size={20} className="text-brandlify-cyan" />,
      titleKey: "whyChoose3Title",
      contentKey: "whyChoose3Content"
    },
    {
      icon: <Mouse size={20} className="text-brandlify-cyan" />,
      titleKey: "whyChoose4Title",
      contentKey: "whyChoose4Content"
    }
  ];

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
                      <h3 className="font-bold text-lg mb-2">{t(item.titleKey)}</h3>
                      <p className="text-gray-200">{t(item.contentKey)}</p>
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
