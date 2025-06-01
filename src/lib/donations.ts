import { create } from 'zustand';
import { supabase } from './supabase';

export type Donation = {
  id: string;
  campaign_id: string;
  user_id: string | null;
  amount: number;
  stripe_payment_intent_id: string | null;
  comment: string | null;
  is_anonymous: boolean;
  created_at: string;
};

type DonationState = {
  donations: Donation[];
  isLoading: boolean;
  error: string | null;
  fetchDonations: (campaignId?: string) => Promise<void>;
  createDonation: (donation: Partial<Donation>) => Promise<Donation>;
};

export const useDonations = create<DonationState>((set, get) => ({
  donations: [],
  isLoading: false,
  error: null,

  fetchDonations: async (campaignId) => {
    set({ isLoading: true });
    try {
      let query = supabase
        .from('donations')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (campaignId) {
        query = query.eq('campaign_id', campaignId);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      set({ donations: data || [], isLoading: false, error: null });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  createDonation: async (donation) => {
    const { data, error } = await supabase
      .from('donations')
      .insert(donation)
      .select()
      .single();

    if (error) throw error;
    
    const donations = get().donations;
    set({ donations: [data, ...donations] });
    
    return data;
  },
}));