import React from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Logo />
        <nav className="hidden space-x-6 md:flex">
          <a href="#" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            How It Works
          </a>
          <a href="#" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            Campaigns
          </a>
          <a href="#" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            Products
          </a>
          <a href="#" className="text-sm font-medium text-blue-900 hover:text-blue-700">
            About Us
          </a>
        </nav>
        <Button>Start a Shop2Give</Button>
      </div>
    </header>
  );
}