import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Product } from '../data/products';
import { formatCurrency } from '../lib/utils';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:translate-y-[-4px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
        />
        {product.badge && (
          <div className="absolute right-2 top-2 rounded-full bg-blue-600 px-2 py-1 text-xs font-medium text-white">
            {product.badge}
          </div>
        )}
      </div>
      <CardContent className="pt-4">
        <h3 className="mb-2 line-clamp-2 h-12 text-base font-medium text-blue-900">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-blue-900">
          {formatCurrency(product.price)}
        </p>
        <div className="mt-4">
          <label htmlFor={`quantity-${product.id}`} className="mb-1 block text-sm font-medium text-gray-700">
            Quantity
          </label>
          <select
            id={`quantity-${product.id}`}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          Add to Donation ({formatCurrency(product.price * quantity)})
        </Button>
      </CardFooter>
    </Card>
  );
}