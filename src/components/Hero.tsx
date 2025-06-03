import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/Button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToInstructions = () => {
    const instructionsSection = document.getElementById('instructions');
    instructionsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-brand-pink">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container relative mx-auto px-4 text-center py-24">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-teal mb-8 animate-fade-in">
          Support causes by<br />shopping online
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-brand-charcoal/80 mb-10">
          Purchase goods where proceeds go directly to fundraising campaigns that you care about.
        </p>
        <Link to="/create-campaign">
          <Button 
            size="lg" 
            className="animate-pulse hover:animate-none hover:scale-105 transition-transform"
          >
            Start a Shop2Give
          </Button>
        </Link>

        <button 
          onClick={scrollToInstructions}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors animate-bounce"
          aria-label="Scroll to learn more"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white/80"></div>
    </section>
  );
}