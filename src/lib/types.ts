export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
};

export const categories: Category[] = [
  { id: '1', name: 'Medical', slug: 'medical', icon: '🏥' },
  { id: '2', name: 'Memorial', slug: 'memorial', icon: '🕯️' },
  { id: '3', name: 'Emergency', slug: 'emergency', icon: '🚨' },
  { id: '4', name: 'Nonprofit', slug: 'nonprofit', icon: '🤝' },
  { id: '5', name: 'Education', slug: 'education', icon: '📚' },
  { id: '6', name: 'Animal', slug: 'animal', icon: '🐾' },
  { id: '7', name: 'Environment', slug: 'environment', icon: '🌱' },
  { id: '8', name: 'Business', slug: 'business', icon: '💼' },
  { id: '9', name: 'Community', slug: 'community', icon: '🏘️' },
  { id: '10', name: 'Competition', slug: 'competition', icon: '🏆' },
  { id: '11', name: 'Creative', slug: 'creative', icon: '🎨' },
  { id: '12', name: 'Event', slug: 'event', icon: '📅' },
  { id: '13', name: 'Faith', slug: 'faith', icon: '🙏' },
  { id: '14', name: 'Family', slug: 'family', icon: '👨‍👩‍👧‍👦' },
  { id: '15', name: 'Sports', slug: 'sports', icon: '⚽' },
  { id: '16', name: 'Travel', slug: 'travel', icon: '✈️' },
  { id: '17', name: 'Volunteer', slug: 'volunteer', icon: '🤲' },
  { id: '18', name: 'Wishes', slug: 'wishes', icon: '⭐' },
];

export interface PriceOption {
  id: string;
  amount: number;
  description?: string;
}

export interface DonationTarief {
  amount: number;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
  stockQuantity: number;
  priceId: string;
  campaignId?: string;
  priceOptions?: PriceOption[];
  stripeProductId?: string;
  mode?: 'payment' | 'subscription';
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DonationCampaign {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  ownerName?: string;
  ownerAvatarUrl?: string;
  slug?: string; // URL name slug
  goalAmount: number;
  currentAmount: number;
  status: 'active' | 'completed' | 'cancelled';
  startDate: string;
  endDate?: string;
  imageUrl?: string;
  galleryImages?: string[]; // Array of image URLs for the campaign gallery
  createdAt: string;
  updatedAt: string;
  categoryId?: string;
}

export interface PaymentSuccessData {
  items: {
    productId: string;
    campaignId?: string;
    price: number;
    quantity: number;
    name: string;
  }[];
  userId?: string;
  customerName?: string;
  customerEmail?: string;
  paymentMethod: string;
  sessionId: string;
}

export interface DonationTrend {
  date: string;
  amount: number;
  count: number;
}

export interface TopProduct {
  name: string;
  quantity: number;
  revenue: number;
}

export interface DonorDemographics {
  anonymous: number;
  identified: number;
}

export interface CampaignAnalyticsData {
  campaign: DonationCampaign;
  totalDonations: number;
  totalDonors: number;
  averageDonation: number;
  trends: DonationTrend[];
  topProducts: TopProduct[];
  donorDemographics: DonorDemographics;
}

export interface CampaignDonation {
  id: string;
  campaignId: string;
  donorId?: string;
  amount: number;
  donorName?: string;
  donorEmail?: string;
  message?: string;
  isAnonymous: boolean;
  paymentMethod: string;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: string;
}

export interface CampaignProduct {
  campaignId: string;
  productId: string;
  profitPercentage: number;
  createdAt: string;
}

export interface CampaignStatistics {
  campaignId: string;
  title: string;
  goalAmount: number;
  currentAmount: number;
  totalDonations: number;
  highestDonation: number;
  averageDonation: number;
}