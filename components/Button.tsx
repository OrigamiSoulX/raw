import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "rounded-xl font-semibold transition-all duration-200 active:scale-95 text-center flex items-center justify-center whitespace-nowrap";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 soft-shadow",
    secondary: "bg-gray-100 text-on-background hover:bg-gray-200",
    outline: "border-2 border-primary/10 text-primary hover:bg-primary/5 hover:border-primary/30",
    ghost: "text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-colors"
  };

  const sizes = {
    sm: "px-4 py-1.5 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base",
    xl: "px-10 py-4.5 text-lg"
  };

  const widthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
