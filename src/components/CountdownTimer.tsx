
import React, { useState, useEffect } from 'react';

type CountdownTimerProps = {
  targetDate: string; // ISO date string
  className?: string;
};

const CountdownTimer = ({ targetDate, className = "" }: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    };
  };
  
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    
    return () => clearInterval(timer);
  }, [targetDate]);
  
  const formatTime = (value: number): string => {
    return value.toString().padStart(2, '0');
  };

  return (
    <div className={`flex justify-center items-center gap-4 ${className}`}>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center border border-gray-700">
          <span className="text-2xl md:text-3xl font-bold text-white">{formatTime(timeLeft.days)}</span>
        </div>
        <span className="text-xs mt-2 text-gray-400">Days</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-gray-500">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center border border-gray-700">
          <span className="text-2xl md:text-3xl font-bold text-white">{formatTime(timeLeft.hours)}</span>
        </div>
        <span className="text-xs mt-2 text-gray-400">Hours</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-gray-500">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center border border-gray-700">
          <span className="text-2xl md:text-3xl font-bold text-white">{formatTime(timeLeft.minutes)}</span>
        </div>
        <span className="text-xs mt-2 text-gray-400">Minutes</span>
      </div>
      <div className="text-xl md:text-2xl font-bold text-gray-500">:</div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-800 w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center border border-gray-700">
          <span className="text-2xl md:text-3xl font-bold text-white">{formatTime(timeLeft.seconds)}</span>
        </div>
        <span className="text-xs mt-2 text-gray-400">Seconds</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
