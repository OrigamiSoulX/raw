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
  const baseStyles = "rounded-full font-bold transition-all duration-300 active:scale-95 text-center flex items-center justify-center whitespace-nowrap";

  const variants = {
    primary: "bg-primary text-black hover:opacity-90 shadow-lg shadow-primary/10",
    secondary: "bg-surface-high text-white hover:bg-surface-highest border border-white/5",
    outline: "border border-white/20 text-white hover:bg-white/5",
    ghost: "text-zinc-400 hover:text-white transition-colors"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg"
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
