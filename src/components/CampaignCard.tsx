import React from 'react';
import { Card, CardContent, CardHeader, CardFooter } from './ui/Card';
import { ProgressBar } from './ui/ProgressBar';
import { CircularProgress } from './ui/CircularProgress';
import { MapPin } from 'lucide-react';
import { Campaign } from '../data/campaigns';
import { calculateProgress, formatCurrency } from '../lib/utils';

type CampaignCardProps = {
  campaign: Campaign;
};

export function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = calculateProgress(campaign.amountRaised, campaign.goal);

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:translate-y-[-4px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={campaign.imageUrl}
          alt={campaign.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <MapPin className="h-3 w-3" />
          <span>{campaign.location}</span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-blue-900">
          {campaign.title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {campaign.description}
        </p>
        <div className="mb-2 flex items-center gap-4">
          <CircularProgress
            value={progress}
            size={40}
            progressClassName="text-blue-600"
          />
          <div className="flex-1">
            <ProgressBar value={progress} />
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="text-sm font-medium text-gray-500">
          Raised
        </div>
        <div className="text-lg font-bold text-blue-900">
          {formatCurrency(campaign.amountRaised)}
        </div>
      </CardFooter>
    </Card>
  );
}