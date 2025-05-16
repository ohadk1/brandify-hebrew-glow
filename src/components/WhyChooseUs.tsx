
import React from 'react';
import { Check, Clock, Shield, Mouse, Rocket, Zap } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const whyChooseItems = [
  {
    icon: <Shield size={20} className="text-brandlify-cyan" />,
    title: "מותג שנראה באמת כמו מותג",
    content: "אנחנו יוצרים זהות עסקית שנראית, נשמעת ומרגישה כמו מותג אמיתי."
  },
  {
    icon: <Clock size={20} className="text-brandlify-cyan" />,
    title: "תהליך ממוקד, אישי ומהיר",
    content: "שקיפות מלאה, ליווי צמוד, תוצרים איכותיים בלוחות זמנים קצרים."
  },
  {
    icon: <Zap size={20} className="text-brandlify-cyan" />,
    title: "עיצוב שממיר – לא רק מרשים",
    content: "אנחנו בונים חוויית משתמש שמובילה לתוצאה – לא רק ליופי."
  },
  {
    icon: <Mouse size={20} className="text-brandlify-cyan" />,
    title: "מסר ברור שמחובר לקהל שלך",
    content: "התוכן והעיצוב מדברים את השפה של הלקוח האידיאלי שלך."
  },
  {
    icon: <Rocket size={20} className="text-brandlify-cyan" />,
    title: "רספונסיבי לחלוטין – גם למובייל",
    content: "האתר שלך ייראה פיקס בכל מסך ויגרום לגולשים להרגיש בבית."
  }
];

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">
            <span className="relative inline-block">
              למה לבחור בנו?
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
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#00E5FF] via-[#8F00FF] to-[#FF3C3C] opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
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
