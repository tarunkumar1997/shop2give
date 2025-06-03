import React from 'react';
import { CampaignCard } from './CampaignCard';
import { campaigns } from '../data/campaigns';
import { Button } from './ui/Button';

export function CampaignsSection() {
  return (
    <section className="bg-brand-pink py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-center text-3xl font-bold text-brand-charcoal md:text-left">
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
    </section>
  );
}