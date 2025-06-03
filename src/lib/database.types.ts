export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      products: {
        Row: {
          id: string
          name: string
          price: number
          description: string
          category: string
          imageUrl: string
          featured: boolean
          stockQuantity: number
          priceId: string
          campaignId: string | null
          created_at: string
          updated_at: string | null
        }
        Insert: {
          id?: string
          name: string
          price: number
          description: string
          category: string
          imageUrl: string
          featured?: boolean
          stockQuantity: number
          priceId: string
          campaignId?: string | null
          created_at?: string
          updated_at?: string | null
        }
        Update: {
          id?: string
          name?: string
          price?: number
          description?: string
          category?: string
          imageUrl?: string
          featured?: boolean
          stockQuantity?: number
          priceId?: string
          campaignId?: string | null
          created_at?: string
          updated_at?: string | null
        }
      }
      campaigns: {
        Row: {
          id: string
          slug: string
          title: string
          description: string
          main_image_url: string
          goal_amount: number
          current_amount: number
          start_date: string
          end_date: string | null
          campaign_manager_id: string
          created_at: string
          updated_at: string
          deleted_at: string | null
        }
        Insert: {
          id?: string
          slug: string
          title: string
          description: string
          main_image_url: string
          goal_amount: number
          current_amount?: number
          start_date: string
          end_date?: string | null
          campaign_manager_id: string
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string
          main_image_url?: string
          goal_amount?: number
          current_amount?: number
          start_date?: string
          end_date?: string | null
          campaign_manager_id?: string
          created_at?: string
          updated_at?: string
          deleted_at?: string | null
        }
      }
      donation_campaigns: {
        Row: {
          id: string
          title: string
          description: string
          ownerId: string
          goalAmount: number
          currentAmount: number
          status: 'active' | 'completed' | 'cancelled'
          startDate: string
          endDate: string | null
          imageUrl: string | null
          createdAt: string
          updatedAt: string | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          ownerId: string
          goalAmount: number
          currentAmount?: number
          status?: 'active' | 'completed' | 'cancelled'
          startDate: string
          endDate?: string | null
          imageUrl?: string | null
          createdAt?: string
          updatedAt?: string | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          ownerId?: string
          goalAmount?: number
          currentAmount?: number
          status?: 'active' | 'completed' | 'cancelled'
          startDate?: string
          endDate?: string | null
          imageUrl?: string | null
          createdAt?: string
          updatedAt?: string | null
        }
      }
      campaign_donations: {
        Row: {
          id: string
          campaignId: string
          donorId: string | null
          amount: number
          donorName: string | null
          donorEmail: string | null
          message: string | null
          isAnonymous: boolean
          paymentMethod: string
          paymentStatus: 'pending' | 'completed' | 'failed'
          createdAt: string
        }
        Insert: {
          id?: string
          campaignId: string
          donorId?: string | null
          amount: number
          donorName?: string | null
          donorEmail?: string | null
          message?: string | null
          isAnonymous?: boolean
          paymentMethod: string
          paymentStatus?: 'pending' | 'completed' | 'failed'
          createdAt?: string
        }
        Update: {
          id?: string
          campaignId?: string
          donorId?: string | null
          amount?: number
          donorName?: string | null
          donorEmail?: string | null
          message?: string | null
          isAnonymous?: boolean
          paymentMethod?: string
          paymentStatus?: 'pending' | 'completed' | 'failed'
          createdAt?: string
        }
      }
      campaign_statistics: {
        Row: {
          campaignId: string
          title: string
          goalAmount: number
          currentAmount: number
          totalDonations: number
          highestDonation: number
          averageDonation: number
        }
        Insert: {
          campaignId: string
          title: string
          goalAmount: number
          currentAmount: number
          totalDonations: number
          highestDonation: number
          averageDonation: number
        }
        Update: {
          campaignId?: string
          title?: string
          goalAmount?: number
          currentAmount?: number
          totalDonations?: number
          highestDonation?: number
          averageDonation?: number
        }
      }
      campaign_products: {
        Row: {
          campaignId: string
          productId: string
          profitPercentage: number
          createdAt: string
        }
        Insert: {
          campaignId: string
          productId: string
          profitPercentage: number
          createdAt?: string
        }
        Update: {
          campaignId?: string
          productId?: string
          profitPercentage?: number
          createdAt?: string
        }
      }
      user_roles: {
        Row: {
          id: string
          userId: string
          role: 'admin' | 'charity_owner' | 'user'
          createdAt: string
          updatedAt: string | null
        }
        Insert: {
          id?: string
          userId: string
          role: 'admin' | 'charity_owner' | 'user'
          createdAt?: string
          updatedAt?: string | null
        }
        Update: {
          id?: string
          userId?: string
          role?: 'admin' | 'charity_owner' | 'user'
          createdAt?: string
          updatedAt?: string | null
        }
      }
      profiles: {
        Row: {
          id: string
          user_id: string
          first_name: string
          last_name: string
          avatar_url: string | null
          created_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          first_name: string
          last_name: string
          avatar_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          first_name?: string
          last_name?: string
          avatar_url?: string | null
          created_at?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
