import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Button } from './ui/Button';

export function ProductsSection() {
  return (
    <section className="relative py-24">
      {/* Gradient overlay for top transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFF3F1] to-[#FFF8E7]" />
      
      {/* Main content with background */}
      <div className="relative bg-[#FFF8E7]">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <h2 className="text-center font-serif text-3xl font-bold text-[#1E2A32] md:text-left">
              Featured Products
            </h2>
            <Button variant="outline">View All Products</Button>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      
      {/* Gradient overlay for bottom transition */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FFF3F1] to-[#FFF8E7]" />
    </section>
  );
}