import { ShoppingBag, Heart } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <ShoppingBag className="h-8 w-8 text-blue-200" />
        <Heart className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform text-blue-600" />
      </div>
      <span className="text-xl font-bold text-blue-900">Shop2Give</span>
    </div>
  );
}