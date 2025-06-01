import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2 } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { useCart } from '../lib/cart';
import { formatCurrency } from '../lib/utils';

export function CartPage() {
  const { items, removeItem, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center bg-gray-50 px-4 py-16">
          <h1 className="mb-4 text-2xl font-bold text-gray-900">Your cart is empty</h1>
          <p className="mb-8 text-gray-600">Add some products to get started!</p>
          <Link to="/products">
            <Button>Browse Products</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-2xl font-bold text-gray-900">Shopping Cart</h1>
          
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <select
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                        className="rounded-md border-gray-300 text-sm"
                      >
                        {[1, 2, 3, 4, 5].map((num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h2 className="mb-4 text-lg font-medium text-gray-900">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <span>{formatCurrency(total())}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Processing Fee</span>
                    <span>{formatCurrency(0)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2">
                    <div className="flex justify-between font-medium text-gray-900">
                      <span>Total</span>
                      <span>{formatCurrency(total())}</span>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 w-full">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}