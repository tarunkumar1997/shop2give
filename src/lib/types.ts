import { DivideIcon as LucideIcon, Stethoscope, Flame, Heart, GraduationCap, Dog, Sprout, Building2, Users, Trophy, Palette, Calendar, CloudSun, Users2, FolderRoot as Football, Plane, HandMetal, Star } from 'lucide-react';

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
};

export const categories: Category[] = [
  { id: '1', name: 'Medical', slug: 'medical', icon: Stethoscope },
  { id: '2', name: 'Memorial', slug: 'memorial', icon: Flame },
  { id: '3', name: 'Emergency', slug: 'emergency', icon: Flame },
  { id: '4', name: 'Nonprofit', slug: 'nonprofit', icon: Heart },
  { id: '5', name: 'Education', slug: 'education', icon: GraduationCap },
  { id: '6', name: 'Animal', slug: 'animal', icon: Dog },
  { id: '7', name: 'Environment', slug: 'environment', icon: Sprout },
  { id: '8', name: 'Business', slug: 'business', icon: Building2 },
  { id: '9', name: 'Community', slug: 'community', icon: Users },
  { id: '10', name: 'Competition', slug: 'competition', icon: Trophy },
  { id: '11', name: 'Creative', slug: 'creative', icon: Palette },
  { id: '12', name: 'Event', slug: 'event', icon: Calendar },
  { id: '13', name: 'Faith', slug: 'faith', icon: CloudSun },
  { id: '14', name: 'Family', slug: 'family', icon: Users2 },
  { id: '15', name: 'Sports', slug: 'sports', icon: Football },
  { id: '16', name: 'Travel', slug: 'travel', icon: Plane },
  { id: '17', name: 'Volunteer', slug: 'volunteer', icon: HandMetal },
  { id: '18', name: 'Wishes', slug: 'wishes', icon: Star },
];

// Helper function to get random categories
export function getRandomCategories(count: number): Category[] {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

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