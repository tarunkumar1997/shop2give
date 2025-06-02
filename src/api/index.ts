// Import all API services
import * as StripePayments from './stripe/payments.js';
import * as StripeProducts from './stripe/products.js';
import * as StripeWebhook from './stripe/webhook.js';

import * as SupabaseCampaigns from './supabase/campaigns.js';
import * as SupabaseProducts from './supabase/products.js';
import * as SupabaseUsers from './supabase/users.js';
import * as SupabaseDonations from './supabase/donations.js';

// Re-export all API services
export * from './stripe/index.js';
export * from './supabase/index.js';

// Export a unified API object with proper ES module imports
export const API = {
  // Stripe services
  stripe: {
    payments: StripePayments,
    products: StripeProducts,
    webhook: StripeWebhook,
  },
  
  // Supabase services
  supabase: {
    campaigns: SupabaseCampaigns,
    products: SupabaseProducts,
    users: SupabaseUsers,
    donations: SupabaseDonations,
  }
};
