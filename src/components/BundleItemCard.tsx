
import React from 'react';

type BundleItemCardProps = {
  title: string;
  count: string;
  icon: React.ReactNode;
  color: string;
};

const BundleItemCard = ({ title, count, icon, color }: BundleItemCardProps) => {
  const bgColorClass = `bg-${color}-500/20`;
  const textColorClass = `text-${color}-400`;

  return (
    <div className="bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="flex items-start">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColorClass} ${textColorClass}`}>
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="font-bold text-white">{title}</h3>
          <p className="text-gray-300 text-sm">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default BundleItemCard;
