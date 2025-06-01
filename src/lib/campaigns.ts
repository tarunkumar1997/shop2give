import { create } from 'zustand';
import { supabase } from './supabase';
import { useAuth } from './auth';

export type Campaign = {
  id: string;
  slug: string;
  title: string;
  description: string;
  main_image_url: string;
  goal_amount: number;
  current_amount: number;
  start_date: string;
  end_date: string | null;
  campaign_manager_id: string;
  created_at: string;
  updated_at: string;
};

type CampaignState = {
  campaigns: Campaign[];
  isLoading: boolean;
  error: string | null;
  fetchCampaigns: () => Promise<void>;
  createCampaign: (campaign: Partial<Campaign>) => Promise<Campaign>;
  updateCampaign: (id: string, updates: Partial<Campaign>) => Promise<void>;
  deleteCampaign: (id: string) => Promise<void>;
};

export const useCampaigns = create<CampaignState>((set, get) => ({
  campaigns: [],
  isLoading: false,
  error: null,

  fetchCampaigns: async () => {
    set({ isLoading: true });
    try {
      const { data, error } = await supabase
        .from('campaigns')
        .select('*')
        .is('deleted_at', null)
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ campaigns: data || [], isLoading: false, error: null });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  createCampaign: async (campaign) => {
    const user = useAuth.getState().user;
    if (!user) throw new Error('Must be logged in to create a campaign');

    const { data, error } = await supabase
      .from('campaigns')
      .insert({
        ...campaign,
        campaign_manager_id: user.id,
      })
      .select()
      .single();

    if (error) throw error;
    
    const campaigns = get().campaigns;
    set({ campaigns: [data, ...campaigns] });
    
    return data;
  },

  updateCampaign: async (id, updates) => {
    const { error } = await supabase
      .from('campaigns')
      .update(updates)
      .eq('id', id);

    if (error) throw error;

    const campaigns = get().campaigns.map(c => 
      c.id === id ? { ...c, ...updates } : c
    );
    set({ campaigns });
  },

  deleteCampaign: async (id) => {
    const { error } = await supabase
      .from('campaigns')
      .update({ deleted_at: new Date().toISOString() })
      .eq('id', id);

    if (error) throw error;

    const campaigns = get().campaigns.filter(c => c.id !== id);
    set({ campaigns });
  },
}));