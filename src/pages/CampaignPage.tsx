import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DonationWidget } from '../components/DonationWidget';
import { ProductGrid } from '../components/ProductGrid';
import { campaigns } from '../data/campaigns';
import { products } from '../data/products';

export function CampaignPage() {
  const { id } = useParams();
  const campaign = campaigns.find(c => c.id === id);

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  const campaignProducts = products.filter(p => p.campaignId === campaign.id);
  
  const recentDonations = [
    { name: "Amy Schuster", amount: 25 },
    { name: "Caty's Musson family", amount: 725 },
    { name: "Becky Campbell", amount: 500 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-16 pt-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h1 className="mb-4 text-4xl font-bold text-blue-900">
                  {campaign.title}
                </h1>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">Angela Moses</span>
                  <span>•</span>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
                    Campaign Manager
                  </span>
                </div>
              </div>

              <div className="mb-8 overflow-hidden rounded-xl">
                <img
                  src={campaign.imageUrl}
                  alt={campaign.title}
                  className="h-[400px] w-full object-cover"
                />
              </div>

              <div className="prose max-w-none">
                <p className="whitespace-pre-line text-gray-700">
                  {campaign.description}
                </p>
              </div>

              <ProductGrid products={campaignProducts} />
            </div>

            <div>
              <DonationWidget
                amountRaised={campaign.amountRaised}
                goal={campaign.goal}
                donorCount={476}
                donations={recentDonations}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}