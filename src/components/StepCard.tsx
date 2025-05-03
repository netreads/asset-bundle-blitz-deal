
import React from 'react';

type StepCardProps = {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
};

const StepCard = ({ icon, step, title, description }: StepCardProps) => {
  return (
    <div className="step-card group hover:transform hover:scale-105 transition-all duration-300">
      <div className="bg-gradient-to-br from-bundle-purple/30 to-bundle-pink/20 text-bundle-purple p-5 rounded-full mb-5 text-3xl group-hover:shadow-lg group-hover:shadow-bundle-purple/20 transition-all duration-300">
        {icon}
      </div>
      <div className="bg-gradient-to-r from-bundle-purple to-bundle-pink text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-3 shadow-md">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-bundle-purple transition-colors">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default StepCard;
