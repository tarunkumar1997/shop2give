import React from 'react';
import { cn } from '../../lib/utils';

type ProgressBarProps = {
  value: number;
  className?: string;
  barClassName?: string;
};

export function ProgressBar({
  value,
  className,
  barClassName,
}: ProgressBarProps) {
  const progress = Math.min(100, Math.max(0, value));
  
  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-brand-pink', className)}>
      <div
        className={cn('h-full bg-brand-teal transition-all duration-300 ease-in-out', barClassName)}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}