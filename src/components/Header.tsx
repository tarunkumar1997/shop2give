import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { useCart } from '../lib/cart';

export function Header() {
  const { items } = useCart();
  const itemCount = items.length;
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/">
          <Logo />
        </Link>
        
        <nav className="hidden space-x-6 md:flex">
          <Link to="/campaigns" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            Campaigns
          </Link>
          <Link to="/categories" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            Categories
          </Link>
          <Link to="/products" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            Products
          </Link>
          <Link to="/about" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate('/search')}
            className="text-blue-900 hover:text-blue-700"
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
          </button>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-blue-900" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>
          <Link to="/auth">
            <Button variant="outline" size="sm">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}