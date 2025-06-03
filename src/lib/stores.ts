// Export all stores from a single file for easier imports
export { useAuth } from './auth.js';
export { useCampaigns, type Campaign } from './campaigns.js';
export { useProducts, type Product } from './products.js';
export { useDonations, type Donation } from './donations.js';
export { useCheckout, type CartItem, type CheckoutState } from './checkout.js';

// Re-export any types that are used across multiple stores
export type { CampaignDonation, CampaignStatistics } from './types.js';
