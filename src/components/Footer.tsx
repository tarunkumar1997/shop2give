import React from 'react';
import { Logo } from './Logo';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Logo className="mb-4" />
            <p className="text-gray-600">
              Buy with purpose. Give with heart.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">How It Works</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Partners</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase text-gray-500">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Cookie Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Shop2Give by Givio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}