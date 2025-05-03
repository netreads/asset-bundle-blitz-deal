
import React from 'react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="feature-card group hover:border-bundle-purple hover:shadow-md hover:shadow-bundle-purple/20 transition-all duration-300">
      <div className="flex flex-col items-center text-center p-6">
        <div className="text-bundle-purple mb-6 text-4xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-bundle-purple transition-colors">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
