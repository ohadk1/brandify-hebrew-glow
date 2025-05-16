
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Disclaimer: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f17] via-[#0a0d13] to-[#090c12] p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#111827]/80 backdrop-blur-sm rounded-lg shadow-lg p-6 md:p-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gradient">כתב ויתור</h1>
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="rounded-full">
            <X className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="prose prose-invert max-w-none text-right">
          <p className="text-lg mb-4">כל המידע באתר הוא למטרות שיווק/אינפורמטיביות בלבד.</p>
          
          <p className="mb-4">Brandlify אינה מבטיחה תוצאות ספציפיות או לוחות זמנים.</p>
          
          <p className="mb-4">התוכן אינו מהווה ייעוץ משפטי, פיננסי או אסטרטגי.</p>
          
          <p className="mb-4">דוגמאות ועדויות הן להמחשה בלבד.</p>
          
          <p className="mb-4">Brandlify אינה אחראית להחלטות שמתקבלות על ידי מבקרים על סמך תוכן האתר.</p>
        </div>
        
        <div className="mt-10 text-center">
          <Button 
            onClick={() => navigate(-1)}
            className="gradient-btn text-lg px-6 py-4"
          >
            <span>חזרה לעמוד הראשי</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
