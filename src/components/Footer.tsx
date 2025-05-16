
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-10 text-center text-gray-400 text-sm border-t border-gray-800/30">
      <div className="container mx-auto">
        <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
          <div className="mb-3">
            © {new Date().getFullYear()} BRANDLIFY. כל הזכויות שמורות.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">תנאי שימוש</Link>
            <span className="text-gray-600">|</span>
            <Link to="/cookie-policy" className="hover:text-white transition-colors">מדיניות עוגיות</Link>
            <span className="text-gray-600">|</span>
            <Link to="/disclaimer" className="hover:text-white transition-colors">כתב ויתור</Link>
            <span className="text-gray-600">|</span>
            <Link to="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
