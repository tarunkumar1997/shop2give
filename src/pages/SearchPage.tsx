import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SearchInput } from '../components/ui/SearchInput';
import { CampaignCard } from '../components/CampaignCard';
import { campaigns } from '../data/campaigns';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);

  useEffect(() => {
    const searchQuery = query.toLowerCase();
    const filtered = campaigns.filter(campaign => 
      campaign.title.toLowerCase().includes(searchQuery) ||
      campaign.description.toLowerCase().includes(searchQuery) ||
      campaign.location.toLowerCase().includes(searchQuery)
    );
    setFilteredCampaigns(filtered);
    
    // Update URL with search query
    if (query) {
      setSearchParams({ q: query });
    } else {
      setSearchParams({});
    }
  }, [query, setSearchParams]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Find fundraisers and nonprofits
          </h1>
          <p className="text-lg text-gray-600">
            Find fundraisers by person's name, location, title, or keyword
          </p>
        </div>

        <div className="mx-auto mb-12 max-w-2xl">
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Search campaigns..."
            autoFocus
          />
        </div>

        {filteredCampaigns.length === 0 ? (
          <div className="text-center">
            <p className="text-lg text-gray-600">No campaigns found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}