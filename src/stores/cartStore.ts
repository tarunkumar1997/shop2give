import { create } from 'zustand';
import { CartItem, Product } from '../types/index.js';

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  setProductCampaign: (productId: string, campaignId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  
  addToCart: (product, quantity = 1) => set((state) => {
    // Check if item already exists in cart
    const existingItemIndex = state.items.findIndex(item => item.product.id === product.id);
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      const updatedItems = [...state.items];
      updatedItems[existingItemIndex].quantity += quantity;
      return { items: updatedItems };
    } else {
      // Add new item
      const newItem: CartItem = {
        id: `cart-${product.id}-${Date.now()}`,
        product,
        quantity
      };
      return { items: [...state.items, newItem] };
    }
  }),
  
  removeFromCart: (productId) => set((state) => ({
    items: state.items.filter(item => item.product.id !== productId)
  })),
  
  updateQuantity: (productId, quantity) => set((state) => ({
    items: state.items.map(item => 
      item.product.id === productId 
        ? { ...item, quantity } 
        : item
    )
  })),
  
  setProductCampaign: (productId, campaignId) => set((state) => ({
    items: state.items.map(item => 
      item.product.id === productId 
        ? { 
            ...item, 
            product: { 
              ...item.product, 
              campaignId 
            } 
          } 
        : item
    )
  })),
  
  clearCart: () => set({ items: [] }),
  
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}));
