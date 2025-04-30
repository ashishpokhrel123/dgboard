
import React from 'react';

const NepalLogo: React.FC = () => {
  return (
    <div className="w-24 h-24 mx-auto">
      <svg
        viewBox="0 0 250 280"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="125" cy="140" r="110" fill="#E01B22" />
        <circle cx="125" cy="140" r="100" fill="#003BB2" />
        <path
          d="M125 60 L225 140 L125 220 L25 140 Z"
          fill="#ffffff"
        />
        <circle cx="125" cy="110" r="25" fill="#E01B22" />
        <path 
          d="M90 165 L160 165 L125 220 Z" 
          fill="#E01B22" 
        />
        <path
          d="M100 70 L150 70 L125 110 Z" 
          fill="#FFD700"
        />
      </svg>
    </div>
  );
};

export default NepalLogo;
