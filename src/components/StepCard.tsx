
import React from 'react';

type StepCardProps = {
  icon: React.ReactNode;
  step: number;
  title: string;
  description: string;
};

const StepCard = ({ icon, step, title, description }: StepCardProps) => {
  return (
    <div className="step-card">
      <div className="bg-bundle-purple/20 text-bundle-purple p-4 rounded-full mb-4 text-3xl">
        {icon}
      </div>
      <div className="bg-bundle-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mb-3">
        {step}
      </div>
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default StepCard;
