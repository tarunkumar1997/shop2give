import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="bg-brand-pink py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-8 font-serif text-5xl font-bold text-brand-charcoal md:text-6xl lg:text-7xl">
          Support causes by<br />shopping online
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-brand-charcoal/80 md:text-xl">
          Purchase goods where proceeds go directly to fundraising campaigns that you care about.
        </p>
        <Button size="lg" className="animate-pulse shadow-soft">
          Start Shopping
        </Button>
      </div>
    </section>
  );
}