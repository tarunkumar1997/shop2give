import { ShoppingBag, Heart } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <ShoppingBag className="h-8 w-8 text-brand-pink" />
        <Heart className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform text-white" />
      </div>
      <span className="font-serif text-2xl font-bold text-inherit">Shop2Give</span>
    </div>
  );
}