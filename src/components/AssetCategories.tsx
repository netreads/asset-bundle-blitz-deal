
import React from 'react';
import { cn } from '@/lib/utils';

type AssetCategoryProps = {
  title: string;
  items: { name: string; count: number }[];
  className?: string;
};

const AssetCategories = ({ title, items, className }: AssetCategoryProps) => {
  return (
    <div className={cn("premium-card p-6 hover-card-effect", className)}>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-gray-300">{item.name}</span>
            <span className="font-bold bg-gradient-to-r from-bundle-purple to-bundle-pink text-transparent bg-clip-text">{item.count.toLocaleString()}+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetCategories;
