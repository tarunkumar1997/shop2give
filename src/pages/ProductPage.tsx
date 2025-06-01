import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/Button';
import { products } from '../data/products';
import { useCart } from '../lib/cart';
import { formatCurrency } from '../lib/utils';

export function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      name: product.title,
      price: product.price,
      quantity,
      imageUrl: product.imageUrl,
      campaignId: product.campaignId,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-xl bg-white">
            <img
              src={product.imageUrl}
              alt={product.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
            <p className="text-2xl font-bold text-blue-900">
              {formatCurrency(product.price)}
            </p>
            {product.badge && (
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {product.badge}
              </span>
            )}
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                Quantity
              </label>
              <select
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
              >
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <Button onClick={handleAddToCart} className="w-full">
              Add to Cart ({formatCurrency(product.price * quantity)})
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}