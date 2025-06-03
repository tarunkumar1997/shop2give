import React from 'react';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Button } from './ui/Button';

export function ProductsSection() {
  return (
    <section className="section-products">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-center text-3xl font-bold text-brand-charcoal md:text-left">
            <span className="mr-2">🛍️</span> Featured Products
          </h2>
          <Button variant="outline">View All Products</Button>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}