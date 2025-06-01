import { create } from 'zustand';
import { supabase } from './supabase';

export type Product = {
  id: string;
  stripe_product_id: string;
  campaign_id: string | null;
  is_featured: boolean;
  created_at: string;
};

type ProductState = {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: (campaignId?: string) => Promise<void>;
  createProduct: (product: Partial<Product>) => Promise<Product>;
  updateProduct: (id: string, updates: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
};

export const useProducts = create<ProductState>((set, get) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async (campaignId) => {
    set({ isLoading: true });
    try {
      let query = supabase
        .from('campaign_products')
        .select('*');
      
      if (campaignId) {
        query = query.eq('campaign_id', campaignId);
      }

      const { data, error } = await query;
      if (error) throw error;
      
      set({ products: data || [], isLoading: false, error: null });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  createProduct: async (product) => {
    const { data, error } = await supabase
      .from('campaign_products')
      .insert(product)
      .select()
      .single();

    if (error) throw error;
    
    const products = get().products;
    set({ products: [...products, data] });
    
    return data;
  },

  updateProduct: async (id, updates) => {
    const { error } = await supabase
      .from('campaign_products')
      .update(updates)
      .eq('id', id);

    if (error) throw error;

    const products = get().products.map(p => 
      p.id === id ? { ...p, ...updates } : p
    );
    set({ products });
  },

  deleteProduct: async (id) => {
    const { error } = await supabase
      .from('campaign_products')
      .delete()
      .eq('id', id);

    if (error) throw error;

    const products = get().products.filter(p => p.id !== id);
    set({ products });
  },
}));