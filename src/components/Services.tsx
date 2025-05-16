
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
    description: "לוגו שנבנה כדי לשרת מטרה, לא רק להיראות טוב.\nמותאם לעסק לפי התחום, קהל היעד והחזון.\nכולל אפשרות לאנימציה ועיבוד תלת־ממדי איכותי שמשדר מקצועיות."
  },
  {
    number: 2,
    title: "בניית שפה גרפית מלאה למותג",
    description: "שפה ויזואלית עקבית שגורמת ללקוחות לזהות אותך תוך שנייה.\nצבעים, טיפוגרפיה, אייקונים, סגנון תמונות – הכל קוהרנטי וממותג.\nנבנית סביב הערכים שלך ומגובה בחשיבה אסטרטגית."
  },
  {
    number: 3,
    title: "עיצוב דפי נחיתה ואתרי תדמית",
    description: "אתרים שמניעים לפעולה, לא רק \"יפים\".\nמבנה ברור, קריאה לפעולה חדה ונראות שמקרינה ביטחון.\nמותאם לכל מסך ומכוון להמיר מבקר ללקוח."
  },
  {
    number: 4,
    title: "חיבורים לאוטומציות ו־CRM",
    description: "מהרגע שלקוח משאיר פרטים – הכל עובד לבד.\nהמידע עובר ל־Google Sheets, וואטסאפ, CRM או Zapier.\nחיסכון בזמן, אפס פספוסים, שליטה מלאה בתהליך המכירה."
  },
  {
    number: 5,
    title: "תכנון ויזואלי שיווקי ממוקד קהל",
    description: "אנחנו לא רק מעצבים – אנחנו חושבים כמו הקהל שלך.\nמה הוא רואה? מה מניע אותו ללחוץ?\nהעיצוב מספר סיפור שמוביל להחלטה."
  },
  {
    number: 6,
    title: "שירות אישי וליווי צמוד",
    description: "כל פרויקט מלווה בליווי צמוד, מענה מהיר וזמינות גבוהה.\nלא נשארים לבד. אנחנו שם מהרגע הראשון ועד שהמותג שלך חי ובועט אונליין."
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
    <section id="services" className="py-20 px-4 backdrop-blur-[6px] bg-gradient-to-br from-[rgba(10,12,18,0.88)] to-[rgba(40,10,50,0.12)]">
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
                className="relative group transition-all duration-300 hover:transform hover:scale-[1.01]"
              >
                <div className="absolute -inset-0.5 rounded-[14px] bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-25 blur group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-black bg-opacity-70 rounded-[14px] border border-gray-800 shadow-lg transition-all duration-300 group-hover:shadow-[0_0_10px_rgba(0,255,255,0.05)]">
                  <CollapsibleTrigger className="w-full text-right px-6 py-5 flex items-center justify-between focus:outline-none">
                    <div className="flex items-start">
                      <div className="text-3xl ml-3 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C] bg-clip-text text-transparent font-bold self-start">{service.number}</div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{service.title}</h3>
                    </div>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-400 ease-in-out",
                      openItems[index] ? "rotate-180" : ""
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="accordion-content">
                    <div className="px-6 pb-5 pt-1 text-[#D0D0D0] whitespace-pre-line">
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
