
import React, { useState, useEffect, useCallback } from 'react';
import CountdownCard from './components/CountdownCard';
import Logo from './components/Logo';
import type { TimeLeft } from './types';

const App: React.FC = () => {
  // --- إمكانية تعديل التاريخ والوقت بسهولة داخل الكود ---
  // Note: Month is 0-indexed (0 = January, 11 = December)
  // Set to a future date for demonstration, e.g., December 21, 2025
  const targetDate = new Date('2025-12-21T20:00:00Z').getTime();

  const calculateTimeLeft = useCallback((): TimeLeft | null => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }, [targetDate]);

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4 overflow-hidden relative">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-green-800 via-yellow-600 to-red-700 opacity-80 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(22,163,74,0.3) 0%, rgba(202,138,4,0.3) 50%, rgba(220,38,38,0.3) 100%), #111827',
        }}
      ></div>
      <div 
        className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/soccer.png')] opacity-5"
      ></div>
      
      <main className="z-10 flex flex-col items-center justify-center text-center w-full">
        <Logo />

        <h1 className="text-4xl md:text-6xl font-black my-4 md:my-6 tracking-tight text-shadow-lg animate-fade-in-down">
          العد التنازلي لكأس أمم إفريقيا
        </h1>

        {timeLeft ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mt-6 md:mt-10 animate-fade-in-up">
            <CountdownCard value={timeLeft.days} label="أيام" />
            <CountdownCard value={timeLeft.hours} label="ساعات" />
            <CountdownCard value={timeLeft.minutes} label="دقائق" />
            <CountdownCard value={timeLeft.seconds} label="ثواني" />
          </div>
        ) : (
          <div className="mt-10 p-8 bg-green-600/80 rounded-2xl shadow-2xl animate-pulse-intense">
            <h2 className="text-3xl md:text-5xl font-bold">!انطلقت البطولة</h2>
          </div>
        )}
      </main>

      <footer className="z-10 absolute bottom-4 text-gray-400 text-sm">
        صنع بواسطة الذكاء الاصطناعي
      </footer>
    </div>
  );
};

export default App;
