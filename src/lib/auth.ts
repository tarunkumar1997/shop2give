import { create } from 'zustand';
import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

type AuthState = {
  user: User | null;
  roles: string[];
  profile: {
    full_name: string | null;
    avatar_url: string | null;
    bio: string | null;
  } | null;
  isLoading: boolean;
  initialize: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<AuthState['profile']>) => Promise<void>;
};

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  roles: [],
  profile: null,
  isLoading: true,

  initialize: async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: roles } = await supabase
          .from('user_roles')
          .select('role')
          .eq('user_id', user.id);

        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();

        set({ 
          user,
          roles: roles?.map(r => r.role) || [],
          profile: profile || null,
          isLoading: false
        });
      } else {
        set({ user: null, roles: [], profile: null, isLoading: false });
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
      set({ isLoading: false });
    }
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;

    await get().initialize();
  },

  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw error;

    await get().initialize();
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    set({ user: null, roles: [], profile: null });
  },

  updateProfile: async (data) => {
    const user = get().user;
    if (!user) throw new Error('No user logged in');

    const { error } = await supabase
      .from('profiles')
      .update(data)
      .eq('id', user.id);

    if (error) throw error;

    set({ profile: { ...get().profile, ...data } });
  },
}));

// Auth context initialization
supabase.auth.onAuthStateChange((event, session) => {
  if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
    useAuth.getState().initialize();
  } else if (event === 'SIGNED_OUT') {
    useAuth.setState({ user: null, roles: [], profile: null });
  }
});