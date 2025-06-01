import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CampaignForm } from '../components/Campaign/CampaignForm';

export function CreateCampaignPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-3xl font-bold text-blue-900">
          Create a New Campaign
        </h1>
        <CampaignForm />
      </main>
      <Footer />
    </div>
  );
}