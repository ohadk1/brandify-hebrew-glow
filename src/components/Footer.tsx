
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 py-10 text-center text-gray-400 text-sm border-t border-gray-800/30" role="contentinfo" aria-label="תחתית האתר">
      <div className="container mx-auto">
        <div className="opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
          <div className="mb-3">
            © {new Date().getFullYear()} BRANDLIFY. כל הזכויות שמורות.
          </div>
          <nav aria-label="קישורי תחתית האתר" className="footer-links">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 list-none p-0 m-0">
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brandlify-cyan">מדיניות פרטיות</Link>
              </li>
              <li><span className="text-gray-600" aria-hidden="true">|</span></li>
              <li>
                <Link to="/terms-of-use" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brandlify-cyan">תנאי שימוש</Link>
              </li>
              <li><span className="text-gray-600" aria-hidden="true">|</span></li>
              <li>
                <Link to="/cookie-policy" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brandlify-cyan">מדיניות עוגיות</Link>
              </li>
              <li><span className="text-gray-600" aria-hidden="true">|</span></li>
              <li>
                <Link to="/disclaimer" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brandlify-cyan">כתב ויתור</Link>
              </li>
              <li><span className="text-gray-600" aria-hidden="true">|</span></li>
              <li>
                <Link to="/accessibility" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brandlify-cyan">הצהרת נגישות</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
