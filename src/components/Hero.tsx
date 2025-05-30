import React from 'react';
import { Button } from './ui/Button';

export function Hero() {
  return (
    <section className="bg-[#FFF3F1] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-blue-900 md:text-5xl lg:text-6xl">
          Buy with purpose. <br /> Give with heart.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-800/80">
          Shop2Give connects everyday purchases with life-changing causes, 
          empowering communities to support each other through transparent giving 
          and purposeful products.
        </p>
        <Button size="lg" className="animate-pulse">
          Start a Shop2Give
        </Button>
      </div>
    </section>
  );
}