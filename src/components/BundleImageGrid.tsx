
import React from 'react';
import { cn } from '@/lib/utils';

interface BundleImageProps {
  title: string;
  imageSrc: string;
  className?: string;
}

const BundleImage = ({ title, imageSrc, className }: BundleImageProps) => {
  return (
    <div className={cn("bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-bundle-blue hover:shadow-md hover:shadow-bundle-blue/10 transition-all duration-300", className)}>
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-auto object-cover"
      />
      <div className="p-4">
        <h3 className="text-white font-bold text-center">{title}</h3>
      </div>
    </div>
  );
};

const BundleImageGrid = () => {
  const bundleImages = [
    {
      title: "Lightroom Presets Collection",
      imageSrc: "/lovable-uploads/eb35ebab-d400-4ad1-bf07-c890d74c5a2b.png"
    },
    {
      title: "Wedding Album Templates",
      imageSrc: "/lovable-uploads/caba4776-739d-4e53-a0fd-290f3ac07c34.png"
    },
    {
      title: "Photoshop Action Presets",
      imageSrc: "/lovable-uploads/bbec84db-4f96-4e7f-8bd1-d43b154288fb.png"
    },
    {
      title: "Custom Photoshop Brushes",
      imageSrc: "/lovable-uploads/9cba5a39-1b82-4609-9d8c-973262f975cf.png"
    },
    {
      title: "Photoshop Plugins Collection",
      imageSrc: "/lovable-uploads/05127d59-438a-46fc-9008-6645462c473f.png"
    },
    {
      title: "Custom Photoshop Shapes",
      imageSrc: "/lovable-uploads/a29c25f0-cf94-4bef-b122-0733cfa73aaf.png"
    },
    {
      title: "Photoshop Gradients Bundle",
      imageSrc: "/lovable-uploads/2eba2b94-e670-4e5c-8667-7552e013b10b.png"
    },
    {
      title: "Premium Font Collection",
      imageSrc: "/lovable-uploads/ff98d112-2739-430c-bcff-376b53404872.png"
    },
    {
      title: "Cinematic LUTs Pack",
      imageSrc: "/lovable-uploads/940dd628-b0ca-4434-8d3d-57b45f69eaa2.png"
    },
    {
      title: "Photoshop Text Style Bundle",
      imageSrc: "/lovable-uploads/53ab7543-2dc8-44c8-986d-ca5f1ae7d0c6.png"
    },
    {
      title: "Background Collection",
      imageSrc: "/lovable-uploads/05e9407c-8714-4ee4-8df3-121b10ea9b63.png"
    },
    {
      title: "Album Design Templates",
      imageSrc: "/lovable-uploads/010027e0-45f5-4dfb-9e51-56c34084676a.png"
    }
  ];

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bundleImages.map((item, index) => (
          <BundleImage
            key={index}
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default BundleImageGrid;
