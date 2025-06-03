import React from 'react';
import { CampaignCard } from './CampaignCard';
import { campaigns } from '../data/campaigns';
import { Button } from './ui/Button';

export function CampaignsSection() {
  return (
    <section className="relative py-24">
      {/* Gradient overlay for top transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF8E7] to-[#FFF3F1]" />
      
      {/* Main content with background */}
      <div className="relative bg-[#FFF3F1]">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-center font-serif text-3xl font-bold text-[#1E2A32] md:text-left">
              Popular Campaigns
            </h2>
            <Button variant="outline">View All Campaigns</Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {campaigns.slice(0, 6).map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFF8E7] to-[#FFF3F1]" />
    </section>
  );
}