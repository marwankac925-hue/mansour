
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="mb-4 animate-fade-in">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-20 h-20 md:w-28 md:h-28 text-white drop-shadow-lg"
        >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L8 12.5v2.5c0 .83.67 1.5 1.5 1.5h1.43c.42 0 .82-.18 1.09-.48L14.41 13H16c.83 0 1.5-.67 1.5-1.5v-1.89l1.79-1.79c.13.58.21 1.17.21 1.79 0 4.08-3.05 7.44-7 7.93zM15.5 10c-.83 0-1.5-.67-1.5-1.5V6h-4v2.5c0 .83-.67 1.5-1.5 1.5H6.61c-.58-.63-1.03-1.36-1.35-2.18l2.24-2.24c.3-.3.71-.48 1.13-.48H15.5c.83 0 1.5.67 1.5 1.5v1.89l-1.5 1.5h-.01z" />
        </svg>
    </div>
  );
};

export default Logo;
