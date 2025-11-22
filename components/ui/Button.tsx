import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, icon, className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-kaltra-glacial text-kaltra-graphite hover:bg-kaltra-glacialHover hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] focus:ring-kaltra-glacial",
    secondary: "bg-white text-kaltra-graphite hover:bg-gray-100 focus:ring-white",
    outline: "border border-kaltra-glacial text-kaltra-glacial hover:bg-kaltra-glacial/10 focus:ring-kaltra-glacial"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className || ''}`} 
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;