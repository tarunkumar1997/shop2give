import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Mail, Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-teal py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <Logo className="mb-6" />
            <p className="text-brand-cream/90">
              Buy with purpose. Give with heart.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-brand-cream/80 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-brand-cream/90">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-brand-cream/90">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-brand-cream/90">Legal</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-brand-cream/80 hover:text-white transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-brand-cream/20 pt-8 flex justify-between items-center">
          <p className="text-sm text-brand-cream/70">
            &copy; {new Date().getFullYear()} Shop2Give by Givio. All rights reserved.
          </p>
          <a 
            href="https://bolt.new"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-brand-cream/70 hover:text-white transition-colors"
          >
            Built with
            <Zap className="h-5 w-5" />
            Bolt.new
          </a>
        </div>
      </div>
    </footer>
  );
}