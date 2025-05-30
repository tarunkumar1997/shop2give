import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Instructions } from '../components/Instructions';
import { CampaignsSection } from '../components/CampaignsSection';
import { ProductsSection } from '../components/ProductsSection';
import { Mission } from '../components/Mission';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Instructions />
        <CampaignsSection />
        <ProductsSection />
        <Mission />
      </main>
      <Footer />
    </div>
  );
}