
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

interface FeatureTagProps {
  color: "green" | "blue" | "purple";
  label: string;
}

const FeatureTag = ({ color, label }: FeatureTagProps) => {
  const isMobile = useIsMobile();
  
  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-gradient-to-r from-green-400 to-green-600";
      case "blue":
        return "bg-gradient-to-r from-blue-400 to-blue-600";
      case "purple":
        return "bg-gradient-to-r from-zacro-purple to-zacro-light-purple";
      default:
        return "bg-gradient-to-r from-zacro-purple to-zacro-light-purple";
    }
  };

  return (
    <div className={`flex items-center gap-2 bg-zacro-dark border border-zacro-purple/30 ${isMobile ? 'px-3 py-1.5 text-sm' : 'px-4 py-2'} rounded-full`}>
      <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${getColorClasses(color)}`}></div>
      <span className="text-white">{label}</span>
    </div>
  );
};

export default FeatureTag;
