import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { useCartStore } from '../stores/cartStore';

export function Header() {
  const { items } = useCartStore();
  const itemCount = items.length;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-20 bg-brand-teal shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/">
            <Logo className="text-white" />
          </Link>
        </div>
        
        <nav className="hidden space-x-8 md:flex">
          <Link to="/campaigns" className="text-base font-medium text-white hover:text-brand-pink transition-colors border-b-2 border-transparent hover:border-brand-pink">
            Campaigns
          </Link>
          <Link to="/products" className="text-base font-medium text-white hover:text-brand-pink transition-colors border-b-2 border-transparent hover:border-brand-pink">
            Products
          </Link>
          <Link to="/about" className="text-base font-medium text-white hover:text-brand-pink transition-colors border-b-2 border-transparent hover:border-brand-pink">
            About Us
          </Link>
        </nav>

        <div className="flex items-center space-x-6">
          <button
            onClick={() => navigate('/search')}
            className="text-white hover:text-brand-pink transition-colors"
            aria-label="Search"
          >
            <Search className="h-6 w-6" />
          </button>
          
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-white hover:text-brand-pink transition-colors" />
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink text-xs text-brand-teal.DEFAULT font-medium">
                {itemCount}
              </span>
            )}
          </Link>
          
          <Link to="/auth" className="hidden md:block">
            <Button variant="secondary" size="sm">Sign In</Button>
          </Link>
          
          <button 
            onClick={toggleMobileMenu}
            className="block md:hidden text-white hover:text-brand-pink transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-10 bg-brand-teal.DEFAULT pt-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link 
              to="/campaigns" 
              className="text-xl font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaigns
            </Link>
            <Link 
              to="/products" 
              className="text-xl font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="text-xl font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/auth" 
              className="text-xl font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
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