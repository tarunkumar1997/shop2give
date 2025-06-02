export interface DonationCampaign {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  goal?: number;
  raised?: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  priceId: string;
  campaignId?: string;
  // Stripe-specific fields
  stripeProductId?: string;
  stripePriceId?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}
