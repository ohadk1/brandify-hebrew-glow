
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const serviceItems = [
    {
      number: 1,
      titleKey: 'service1Title',
      descriptionKey: 'service1Description'
    },
    {
      number: 2,
      titleKey: 'service2Title',
      descriptionKey: 'service2Description'
    },
    {
      number: 3,
      titleKey: 'service3Title',
      descriptionKey: 'service3Description'
    },
    {
      number: 4,
      titleKey: 'service4Title',
      descriptionKey: 'service4Description'
    },
    {
      number: 5,
      titleKey: 'service5Title',
      descriptionKey: 'service5Description'
    },
    {
      number: 6,
      titleKey: 'service6Title',
      descriptionKey: 'service6Description'
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-black bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              {t('servicesTitle')}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C] transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="flex flex-col gap-6">
          {serviceItems.map((service, index) => (
            <ScrollReveal 
              key={index}
              className="stagger-item" 
              delay={index * 100}
            >
              <Collapsible 
                open={openItems[index]} 
                onOpenChange={() => toggleItem(index)}
                className="relative group transition-all duration-300 hover:transform hover:scale-[1.01]"
              >
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur moving-gradient"></div>
                <div className="relative bg-black bg-opacity-90 p-6 rounded-lg border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl">
                  <CollapsibleTrigger className="w-full text-right px-6 py-5 flex items-center justify-between focus:outline-none">
                    <div className="flex items-start">
                      <div className="text-3xl ml-5 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C] bg-clip-text text-transparent font-bold self-start">{service.number}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{t(service.titleKey)}</h3>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-400 ease-in-out",
                      openItems[index] ? "rotate-180" : ""
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="accordion-content">
                    <div className="px-6 pb-5 pt-1 text-[#D0D0D0] whitespace-pre-line">
                      {t(service.descriptionKey)}
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
