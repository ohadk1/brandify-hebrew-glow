
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
} from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceItems = [
  {
    number: 1,
    title: "עיצוב לוגו 2D / 3D מותאם אישית",
    description: "לוגו שמספר סיפור ולא רק \"נראה יפה\".\nמותאם לעסק לפי התחום, הקהל והחזון – כולל אפשרות לאנימציה."
  },
  {
    number: 2,
    title: "בניית שפה גרפית מלאה למותג",
    description: "יצירת שפה חזותית עקבית לעסק: צבעים, פונטים, אייקונים וסגנון.\nמבטיחה מיתוג אחיד וזכיר לאורך כל נקודת מגע."
  },
  {
    number: 3,
    title: "עיצוב דפי נחיתה ואתרי תדמית",
    description: "אתרים מהירים, יפים ומותאמים להמרה.\nמבנה נכון + עיצוב ממוקד מניעים לפעולה מיידית."
  },
  {
    number: 4,
    title: "חיבורים לאוטומציות ו־CRM",
    description: "כל ליד נשמר ונשלח אוטומטית – לווטסאפ, Sheets או CRM.\nתהליך מכירה מסודר בלי לפספס אף פנייה."
  },
  {
    number: 5,
    title: "תכנון ויזואלי שיווקי ממוקד קהל",
    description: "עיצוב שנשען על הבנה של הקהל שלך, הצרכים והטריגרים שלו.\nכל פיקסל מדויק – לא סתם \"יפה\"."
  },
  {
    number: 6,
    title: "שירות אישי וליווי צמוד",
    description: "זמינות גבוהה, גישה מקצועית, והבנה אמיתית של העסק שלך.\nאנחנו איתך בכל שלב – מבריף ועד תוצאה."
  }
];

const Services: React.FC = () => {
  const [openItems, setOpenItems] = React.useState<Record<number, boolean>>({});

  const toggleItem = (index: number) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="services" className="py-20 px-4 backdrop-blur-lg bg-[rgba(0,0,0,0.7)]">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              השירותים שלנו
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
                className="relative group"
              >
                <div className="absolute -inset-0.5 rounded-[14px] bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-25 blur group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-black bg-opacity-70 rounded-[14px] border border-gray-800 shadow-lg transition-all duration-300">
                  <CollapsibleTrigger className="w-full text-right px-6 py-5 flex items-center justify-between focus:outline-none">
                    <div className="flex items-start">
                      <div className="text-3xl mr-4 text-gradient font-bold self-start">{service.number}</div>
                      <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-300",
                      openItems[index] ? "rotate-180" : ""
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="px-6 pb-5 pt-1 text-gray-300 whitespace-pre-line">
                      {service.description}
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
