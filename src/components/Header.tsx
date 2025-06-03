import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { useCartStore } from '../stores/cartStore';
import { categories } from '../lib/types';

export function Header() {
  const { items } = useCartStore();
  const itemCount = items.length;
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  
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
          <Link to="/campaigns" className="nav-link">
            Campaigns
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setCategoriesOpen(true)}
            onMouseLeave={() => setCategoriesOpen(false)}
          >
            <button 
              className="nav-link flex items-center gap-1"
              onClick={() => setCategoriesOpen(!categoriesOpen)}
            >
              Categories
              <ChevronDown className={`h-4 w-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {categoriesOpen && (
              <div className="absolute left-0 top-full mt-1 w-64 rounded-lg bg-white py-2 shadow-lg">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <Link
                      key={category.id}
                      to={`/category/${category.slug}`}
                      className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                      onClick={() => setCategoriesOpen(false)}
                    >
                      <Icon className="h-4 w-4" />
                      {category.name}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
          
          <Link to="/products" className="nav-link">
            Products
          </Link>
          <Link to="/about" className="nav-link">
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
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand-pink text-xs text-brand-teal font-medium">
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
        <div className="fixed inset-0 z-10 bg-brand-teal/95 backdrop-blur-sm pt-20">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <Link 
              to="/campaigns" 
              className="text-xl font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
              onClick={() => setMobileMenuOpen(false)}
            >
              Campaigns
            </Link>
            
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="flex items-center gap-2 text-lg font-medium text-white hover:text-brand-pink p-2 border-b border-white/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </Link>
              );
            })}
            
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