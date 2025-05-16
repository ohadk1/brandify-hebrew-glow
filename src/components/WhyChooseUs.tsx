
import React from 'react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const whyChooseItems = [
  {
    title: "מותג שנראה באמת כמו מותג",
    content: "אנחנו לא עושים \"רק לוגו יפה\". אנחנו בונים מותג עם נראות, ערכים וסיפור שהלקוחות שלך יזהו ויזכרו. כל צבע, צורה וטקסט נבחרים אסטרטגית."
  },
  {
    title: "תהליך ממוקד, אישי ומהיר",
    content: "לא נמרח אותך שבועות. אנחנו עובדים בתהליך ברור של אפיון → סקיצה → אישור → השקה – עם ליווי אישי, זמינות והבנה עמוקה של הצרכים שלך."
  },
  {
    title: "עיצוב שממיר – לא רק מרשים",
    content: "אנחנו מעצבים לא בשביל מחמאות אלא בשביל תוצאות. כל אתר או עמוד מותאם כדי להניע לפעולה: למכור, ליצור קשר או לבנות אמון."
  },
  {
    title: "מסר ברור שמתחבר לקהל שלך",
    content: "לפני שאנחנו נוגעים בפיקסל – אנחנו מבינים למי אתה מדבר. התוכן, העיצוב והשפה כולם מדויקים לפרסונה של הלקוח האידיאלי שלך."
  },
  {
    title: "רספונסיבי לחלוטין – גם למובייל",
    content: "העיצובים שלנו נראים מעולה בכל מסך – נייד, טאבלט או מחשב. חוויית המשתמש מותאמת כך שכל אחד ירגיש שהאתר תוכנן בשבילו."
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
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-brand transform animate-[expandWidth_0.6s_ease_forwards]"></div>
            </span>
          </h2>
        </ScrollReveal>
        
        <div className="space-y-4">
          <Accordion type="single" collapsible className="w-full">
            {whyChooseItems.map((item, index) => (
              <ScrollReveal 
                key={index}
                className="stagger-item"
                delay={index * 150}
              >
                <AccordionItem 
                  value={`item-${index}`} 
                  className="group relative overflow-hidden rounded-xl border-0 mb-4"
                >
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-brandlify-cyan via-brandlify-purple to-brandlify-red opacity-0 group-hover:opacity-30 blur transition duration-300"></div>
                  <div className="relative bg-black bg-opacity-70 rounded-xl overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 text-right font-medium text-lg hover:no-underline">
                      <div className="flex items-center">
                        <div className="bg-gradient-brand rounded-full p-1 mr-3 pulse-highlight scale-90">
                          <ChevronDown size={16} className="text-white transition-transform" />
                        </div>
                        <span>{item.title}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-10 py-3 border-t border-gray-800 bg-black bg-opacity-50">
                      <p className="text-gray-200">{item.content}</p>
                    </AccordionContent>
                  </div>
                </AccordionItem>
              </ScrollReveal>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
