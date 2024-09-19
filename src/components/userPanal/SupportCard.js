import React from 'react';

function SupportCard({ title, bgColor, textColor, borderColor }) {
  return (
    <div 
      className={`overflow-hidden gap-2.5 self-stretch px-4 py-1 ${bgColor} ${textColor} rounded-2xl border border-solid ${borderColor} cursor-pointer transition-colors duration-300 hover:opacity-80`}
      role="button"
      tabIndex="0"
      onClick={() => console.log(`Clicked on ${title}`)}
      onKeyPress={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          console.log(`Activated ${title} with keyboard`);
        }
      }}
    >
      {title}
    </div>
  );
}

export default SupportCard;