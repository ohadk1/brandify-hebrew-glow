
import React from 'react';
import ScrollReveal from '@/components/ScrollReveal';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4">
      <ScrollReveal>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 inline-block relative">
            מי אנחנו?
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-400 to-pink-500 transform animate-[expandWidth_0.6s_ease_0.3s_forwards]"></div>
          </h2>
          
          <div className="relative space-y-6">
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-30 blur moving-gradient"></div>
            <div className="relative bg-black bg-opacity-80 p-8 rounded-lg border border-gray-700 shadow-xl transition-all duration-500 hover:transform hover:scale-[1.01] hover:shadow-2xl">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                Brandlify הוא סטודיו בוטיק למיתוג, עיצוב ובניית נכסים דיגיטליים שמיועד לעסקים קטנים ובינוניים שרוצים לבלוט בשוק תחרותי. אנו מתמחים ביצירת נראות ויזואלית מהודקת, ברורה, ומעוררת רגש – כזו שלא רק נראית טוב, אלא גם ממירה.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                אנחנו לא עוד סטודיו שמספק שירותים גרפיים – אנחנו שותפים אסטרטגיים לדרך. כל פרויקט נבנה בהתאמה אישית מלאה, תוך הבנת ערכי המותג, קהל היעד והחזון העסקי של הלקוח. מטרתנו היא לזקק מסר חד, לשלב עיצוב מרגש עם חוויית משתמש ממירה, ולבנות מותג שלקוחות יזהו, יתחברו אליו – וירצו לבחור בו.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                עם מערך שירותים מקיף שכולל לוגואים, דפי נחיתה, אתרי תדמית, שפה מיתוגית, אסטרטגיה שיווקית ועוד – Brandlify נותן מענה מקצה לקצה. אנחנו משלבים קריאייטיב, טכנולוגיה ומיקוד תוצאות כדי לבנות מותג שנשאר בזיכרון.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                הלקוחות שלנו נהנים מליווי אישי, זמינות מלאה, שקיפות, ואכפתיות אמיתית להצלחה שלהם. אנחנו לא שואפים רק לעצב – אנחנו שואפים לייצר תחושת גאווה בכל פעם שהם מציגים את העסק שלהם לעולם.
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};

export default AboutUs;
