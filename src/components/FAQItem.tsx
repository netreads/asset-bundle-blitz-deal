
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-700 py-5">
      <button
        className="flex justify-between w-full text-left items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <span className={cn("transition-transform duration-300", isOpen ? "rotate-180" : "")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-bundle-blue">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>
      
      <div
        className={cn(
          "mt-2 text-gray-300 overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <p className="pb-4">{answer}</p>
      </div>
    </div>
  );
};

export default FAQItem;
