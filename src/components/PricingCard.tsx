
import React from 'react';

type PricingCardProps = {
  originalPrice: string;
  currentPrice: string;
  discount: string;
  onClick: () => void;
};

const PricingCard = ({ originalPrice, currentPrice, discount, onClick }: PricingCardProps) => {
  return (
    <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
      <div className="space-y-4">
        <div className="flex flex-col items-center">
          <p className="text-gray-400 text-lg mb-2">Regular Price</p>
          <p className="text-2xl text-gray-300 line-through">{originalPrice}</p>
        </div>
        
        <div className="flex flex-col items-center">
          <p className="text-bundle-green text-xl font-bold">TODAY'S PRICE:</p>
          <p className="text-5xl font-extrabold gradient-text my-2">{currentPrice}</p>
          <div className="bg-bundle-red text-white text-sm font-bold px-4 py-1 rounded-full animate-pulse-glow">
            {discount} OFF
          </div>
        </div>
        
        <button 
          onClick={onClick}
          className="w-full mt-6 btn-primary text-center flex items-center justify-center"
        >
          <span className="text-xl">BUY NOW</span>
        </button>
        
        <p className="text-center text-sm text-gray-400 mt-4">
          Secure payment • Instant access • 30-day money back guarantee
        </p>
      </div>
    </div>
  );
};

export default PricingCard;
