import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-brand-pink">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] bg-repeat opacity-5"></div>
      </div>
      
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-brand-charcoal mb-8">
          Support causes by<br />shopping online
        </h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-brand-charcoal/80 mb-10">
          Purchase goods where proceeds go directly to fundraising campaigns that you care about.
        </p>
        <Button size="lg" className="shadow-glow bg-brand-teal">
          Start a Shop2Give
        </Button>
      </div>
    </section>
  );
}