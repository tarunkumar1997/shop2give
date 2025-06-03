// Export all Supabase API services
export * from './campaigns.js';
export * from './products.js';
export * from './users.js';
export * from './donations.js';

// Re-export the Supabase client
export { supabase } from '../../lib/supabase.js';
