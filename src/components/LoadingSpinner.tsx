
import React from 'react';

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = "md", 
  color = "white" 
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    white: "border-white",
    blue: "border-nepali-blue",
    gray: "border-gray-300",
  };

  return (
    <div className="flex items-center justify-center">
      <div 
        className={`${sizeClasses[size]} border-4 border-t-transparent rounded-full animate-spin-slow ${color in colorClasses ? colorClasses[color as keyof typeof colorClasses] : 'border-white'}`}
      ></div>
      <span className="ml-2 text-sm">LOADING...</span>
    </div>
  );
};

export default LoadingSpinner;
