
import React, { useEffect, useRef } from 'react';
import WebsiteCard, { WebsiteProps } from './WebsiteCard';

interface WebsiteGridProps {
  websites: WebsiteProps[];
}

const WebsiteGrid: React.FC<WebsiteGridProps> = ({ websites }) => {
  console.log("WebsiteGrid rendering websites:", websites.length);
  
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Force reflow after mounting
    if (gridRef.current) {
      const forceReflow = gridRef.current.offsetHeight;
      console.log("Grid reflow triggered:", forceReflow);
    }
  }, []);
  
  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }
  
  return (
    <div 
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {websites.map((site, index) => (
        <div 
          key={`desktop-${site.title}-${index}`}
          className="opacity-100 transform-none"
        >
          <WebsiteCard {...site} />
        </div>
      ))}
    </div>
  );
};

export default WebsiteGrid;
