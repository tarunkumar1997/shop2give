import React from 'react';
import { cn } from '../../lib/utils';

type CardProps = {
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn(
        'rounded-2xl bg-white shadow-soft transition-all duration-300 hover:shadow-lg',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn('p-6 pt-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({ className, children, ...props }: CardProps) {
  return (
    <div 
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    >
      {children}
    </div>
  );
}