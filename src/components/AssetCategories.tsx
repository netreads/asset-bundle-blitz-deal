
import React from 'react';
import { cn } from '@/lib/utils';

type AssetCategoryProps = {
  title: string;
  items: { name: string; count: number }[];
  className?: string;
};

const AssetCategories = ({ title, items, className }: AssetCategoryProps) => {
  return (
    <div className={cn("bg-gray-800 rounded-xl p-6 border border-gray-700", className)}>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex justify-between">
            <span className="text-gray-300">{item.name}</span>
            <span className="font-bold text-bundle-blue">{item.count.toLocaleString()}+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssetCategories;
