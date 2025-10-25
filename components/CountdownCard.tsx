
import React from 'react';

interface CountdownCardProps {
  value: number;
  label: string;
}

const CountdownCard: React.FC<CountdownCardProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-black/30 backdrop-blur-sm rounded-2xl p-4 md:p-8 w-32 h-32 md:w-48 md:h-48 shadow-lg border border-white/10 transition-transform duration-300 hover:scale-105">
      <span className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300">
        {value.toString().padStart(2, '0')}
      </span>
      <span className="text-lg md:text-xl font-bold text-gray-300 mt-2">
        {label}
      </span>
    </div>
  );
};

export default CountdownCard;
