
import React from 'react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card hover:border-bundle-blue hover:shadow-md hover:shadow-bundle-blue/20 transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="text-bundle-blue mb-4 text-4xl">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
