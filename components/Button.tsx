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
  const baseStyles = "rounded-full font-black tracking-widest uppercase transition-all duration-300 active:scale-95 text-center flex items-center justify-center";

  const variants = {
    primary: "bg-primary text-on-primary shadow-[0_0_20px_rgba(255,124,245,0.3)] hover:scale-105 hover:shadow-[0_0_30px_rgba(255,124,245,0.5)]",
    secondary: "bg-gradient-to-br from-primary to-secondary text-on-primary shadow-[0_0_20px_rgba(255,124,245,0.3)] hover:scale-105",
    outline: "border border-primary/20 text-primary hover:bg-primary/5",
    ghost: "text-zinc-500 hover:text-white transition-colors"
  };

  const sizes = {
    sm: "px-6 py-2 text-[10px]",
    md: "px-8 py-3 text-xs",
    lg: "px-10 py-4 text-sm",
    xl: "px-12 py-6 text-lg"
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
