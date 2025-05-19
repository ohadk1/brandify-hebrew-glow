
import React from 'react';
import WebsiteCard, { WebsiteProps } from './WebsiteCard';

interface WebsiteGridProps {
  websites: WebsiteProps[];
}

const WebsiteGrid: React.FC<WebsiteGridProps> = ({ websites }) => {
  console.log("WebsiteGrid rendering websites:", websites.length);
  console.log("WebsiteGrid websites data:", JSON.stringify(websites));
  
  if (websites.length === 0) {
    return <div className="text-center text-white">No websites to display.</div>;
  }
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {websites.map((site, index) => (
        <div 
          key={`desktop-${site.title}-${index}`}
          className="stagger-item"
          style={{ animationDelay: `${index * 150}ms` }}
        >
          <WebsiteCard {...site} />
        </div>
      ))}
    </div>
  );
};

export default WebsiteGrid;
