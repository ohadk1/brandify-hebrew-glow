
import React, { useEffect } from 'react';

const AccessibilityWidget: React.FC = () => {
  // This component is a wrapper for the Nagich accessibility widget
  // The actual widget is loaded via the external script in index.html
  
  useEffect(() => {
    // This effect ensures that any dynamic changes to the DOM are accessible
    // The Nagich script will be loaded in the head section of index.html
    
    // If we need to manually trigger the widget initialization
    if (window.nagishLiScript && typeof window.nagishLiScript.init === 'function') {
      window.nagishLiScript.init();
    }
  }, []);

  return (
    // The Nagich widget will be automatically injected into the DOM
    // This empty div is used as a fallback in case the script fails to load
    <div 
      id="accessibility-widget-container"
      className="fixed bottom-4 right-4 z-50" 
      aria-hidden="true" 
    />
  );
};

export default AccessibilityWidget;
