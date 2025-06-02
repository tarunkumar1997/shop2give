import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo.js';
import { Button } from './ui/Button.js';
import { useCartStore } from '../stores/cartStore.js';

export function Header() {
  const { items } = useCartStore();
  const itemCount = items.length;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
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
          {/* Search Icon */}
          <button
            onClick={() => navigate('/search')}
            className="text-blue-900 hover:text-blue-700"
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
          </button>
          
          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-blue-900" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
                {itemCount}
              </span>
            )}
          </Link>
          
          {/* Sign In Button - Hidden on Mobile */}
          <Link to="/auth" className="hidden md:block">
            <Button variant="outline" size="sm">Sign In</Button>
          </Link>
          
          {/* Hamburger Menu - Only visible on mobile */}
          <button 
            onClick={toggleMobileMenu}
            className="block md:hidden text-blue-900 hover:text-blue-700"
            aria-label="Menu"
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-white/95 pt-16">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link 
              to="/campaigns" 
              className="text-lg font-medium text-blue-900 hover:text-blue-700 p-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaigns
            </Link>
            <Link 
              to="/categories" 
              className="text-lg font-medium text-blue-900 hover:text-blue-700 p-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link 
              to="/products" 
              className="text-lg font-medium text-blue-900 hover:text-blue-700 p-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-lg font-medium text-blue-900 hover:text-blue-700 p-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/auth" 
              className="text-lg font-medium text-blue-900 hover:text-blue-700 p-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}