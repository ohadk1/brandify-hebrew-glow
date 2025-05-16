
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const serviceItems = [
  {
    number: 1,
    title: "עיצוב לוגו 2D / 3D מותאם אישית",
    description: "לוגו שמספר סיפור ולא רק \"נראה יפה\". מותאם לעסק לפי התחום, הקהל והחזון – כולל אפשרות לאנימציה."
  },
  {
    number: 2,
    title: "בניית שפה גרפית מלאה למותג",
    description: "יצירת שפה חזותית עקבית לעסק: צבעים, פונטים, אייקונים וסגנון. מבטיחה מיתוג אחיד וזכיר לאורך כל נקודת מגע."
  },
  {
    number: 3,
    title: "עיצוב דפי נחיתה ואתרי תדמית",
    description: "אתרים מהירים, יפים ומותאמים להמרה. מבנה נכון + עיצוב ממוקד מניעים לפעולה מיידית."
  },
  {
    number: 4,
    title: "חיבורים לאוטומציות ו־CRM",
    description: "כל ליד נשמר ונשלח אוטומטית – לווטסאפ, Sheets או CRM. תהליך מכירה מסודר בלי לפספס אף פנייה."
  },
  {
    number: 5,
    title: "תכנון ויזואלי שיווקי ממוקד קהל",
    description: "עיצוב שנשען על הבנה של הקהל שלך, הצרכים והטריגרים שלו. כל פיקסל מדויק – לא סתם \"יפה\"."
  },
  {
    number: 6,
    title: "שירות אישי וליווי צמוד",
    description: "זמינות גבוהה, גישה מקצועית, והבנה אמיתית של העסק שלך. אנחנו איתך בכל שלב – מבריף ועד תוצאה."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-black bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              השירותים שלנו
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#00E5FF] to-[#FF3C3C] transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <ScrollReveal 
              key={index}
              className="stagger-item" 
              delay={index * 100}
            >
              <div className="relative group h-full">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur group-hover:opacity-70 transition duration-300"></div>
                <div className="relative p-6 bg-black bg-opacity-80 rounded-2xl border border-gray-800 h-full flex flex-col transition duration-300 transform group-hover:translate-y-[-5px] shadow-xl">
                  <div className="flex items-start mb-4">
                    <div className="text-3xl mr-4 text-gradient font-bold self-start">{service.number}</div>
                    <h3 className="text-xl md:text-2xl font-bold">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mt-2">{service.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
