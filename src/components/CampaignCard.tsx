import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={`/campaigns/${campaign.slug}`} className="block">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:translate-y-[-4px]">
        <div className="relative h-48 overflow-hidden">
          <img
            src={campaign.imageUrl}
            alt={campaign.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader className="bg-brand-pink/30">
          <div className="flex items-center gap-1 text-sm text-brand-charcoal/70">
            <MapPin className="h-3 w-3" />
            <span>{campaign.location}</span>
          </div>
          <h3 className="line-clamp-2 font-serif text-lg font-semibold text-brand-charcoal">
            {campaign.title}
          </h3>
        </CardHeader>
        <CardContent className="bg-brand-pink/30">
          <p className="mb-4 line-clamp-2 text-sm text-brand-charcoal/80">
            {campaign.description}
          </p>
          <div className="mb-2 flex items-center gap-4">
            <CircularProgress
              value={progress}
              size={40}
              progressClassName="text-brand-teal"
            />
            <div className="flex-1">
              <ProgressBar value={progress} />
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-between bg-brand-pink/30">
          <div className="text-sm font-medium text-brand-charcoal/70">
            Raised
          </div>
          <div className="text-lg font-bold text-brand-charcoal">
            {formatCurrency(campaign.amountRaised)}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}