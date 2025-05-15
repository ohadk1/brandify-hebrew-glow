
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative">
          מי אנחנו?
          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-brand transform"></div>
        </h2>
        
        <div className="relative">
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-30 blur"></div>
          <div className="relative bg-black bg-opacity-80 p-8 rounded-lg border border-gray-700 shadow-xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Brandlify הוא סטודיו למיתוג ונראות דיגיטלית. אנחנו לא יוצרים עיצוב יפה בלבד – אנחנו בונים מותג. 
              עם ניסיון של עשרות פרויקטים, אנחנו יודעים איך לגרום לעסק שלך להיראות מקצועי, מבודל, ומוכן לצמיחה.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
