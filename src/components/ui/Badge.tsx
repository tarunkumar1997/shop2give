import React from 'react';
import { cn } from '../../lib/utils';
import { Sparkles } from 'lucide-react';

type BadgeProps = {
  variant?: 'success' | 'info' | 'warning';
  children: React.ReactNode;
  className?: string;
  showIcon?: boolean;
};

export function Badge({
  variant = 'info',
  children,
  className,
  showIcon = false
}: BadgeProps) {
  const variantStyles = {
    success: 'bg-brand-gold/20 text-brand-gold-dark',
    info: 'bg-brand-teal/20 text-brand-teal-dark',
    warning: 'bg-orange-100 text-orange-800'
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-sm font-medium',
        variantStyles[variant],
        className
      )}
    >
      {showIcon && variant === 'success' && (
        <Sparkles className="mr-1 h-4 w-4" />
      )}
      {children}
    </span>
  );
}