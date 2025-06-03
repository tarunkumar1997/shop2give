import React from 'react';
import { cn } from '../../lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 shadow-glow';
  
  const variantStyles = {
    primary: 'bg-brand-teal.DEFAULT text-brand-pink hover:bg-brand-teal.dark focus-visible:ring-brand-teal.DEFAULT',
    secondary: 'bg-brand-pink text-brand-teal.DEFAULT hover:bg-opacity-90 focus-visible:ring-brand-pink',
    outline: 'border-2 border-brand-teal.DEFAULT bg-transparent text-brand-teal.DEFAULT hover:bg-brand-pink/10 focus-visible:ring-brand-teal.DEFAULT',
  };
  
  const sizeStyles = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}