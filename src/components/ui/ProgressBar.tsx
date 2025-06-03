import React from 'react';
import { cn } from '../../lib/utils';

type ProgressBarProps = {
  value: number;
  category?: 'medical' | 'education' | 'mission' | 'community';
  className?: string;
  barClassName?: string;
};

export function ProgressBar({
  value,
  category = 'mission',
  className,
  barClassName,
}: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, value));
  
  const categoryColors = {
    medical: 'bg-brand-teal-medical',
    education: 'bg-brand-teal-education',
    mission: 'bg-brand-teal-mission',
    community: 'bg-brand-teal-community'
  };
  
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-brand-pink', className)}>
      <div
        className={cn(
          'h-full transition-all duration-300 ease-in-out',
          categoryColors[category],
          barClassName
        )}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}