
import React from 'react';

const serviceItems = [
  "עיצוב לוגו דו-ממד ותלת-ממד",
  "בניית אתרי תדמית ודפי נחיתה ממירים",
  "עיצוב גרפי מותאם לקהלים וטרנדים",
  "הגדרת שפה ויזואלית מלאה למותג",
  "אוטומציות לווטסאפ וטופסי לידים",
  "שירות אישי מותאם לכל לקוח"
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-black bg-opacity-70">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative inline-block">
            השירותים שלנו
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-brand transform"></div>
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div 
              key={index} 
              className="relative group"
            >
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur group-hover:opacity-100 transition duration-300"></div>
              <div className="relative p-6 bg-black bg-opacity-80 rounded-lg border border-gray-800 h-full flex items-center transition duration-300 transform group-hover:translate-y-[-5px] shadow-xl">
                <div className="mr-4 text-3xl text-gradient font-bold">{index + 1}</div>
                <p className="text-lg md:text-xl font-bold">{service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
