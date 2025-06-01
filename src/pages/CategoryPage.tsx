import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CampaignsSection } from '../components/CampaignsSection';
import { categories } from '../lib/types';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            {category?.icon} {category?.name} Campaigns
          </h1>
          <p className="mt-2 text-gray-600">
            Browse fundraisers in the {category?.name.toLowerCase()} category
          </p>
        </div>
        <CampaignsSection />
      </main>
      <Footer />
    </div>
  );
}