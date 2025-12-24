import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-brand-green text-brand-black hover:bg-brand-greenDark hover:shadow-neon-hover shadow-neon",
    secondary: "bg-white text-brand-black hover:bg-gray-200",
    outline: "border border-brand-green text-brand-green hover:bg-brand-green/10"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};