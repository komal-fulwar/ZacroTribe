
import { useEffect, useState, useRef } from 'react';

interface SplineSceneProps {
  scene: string;
  imageSrc: string;
  altText?: string;
  className?: string;
}

const SplineScene = ({ imageSrc, altText = "Feature illustration", className = '' }: SplineSceneProps) => {
  return (
    <div className={`image-container ${className}`}>
      <img 
        src={imageSrc} 
        alt={altText} 
        className="w-full h-full object-cover rounded-xl" 
      />
    </div>
  );
};

export default SplineScene;
