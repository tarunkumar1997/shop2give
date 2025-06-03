import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { formatCurrency } from '../lib/utils';

export function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden">
      <div className="aspect-square bg-white overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="card-content">
        <h3 className="font-serif text-lg font-semibold text-brand-charcoal mb-2">
          {product.name}
        </h3>
        <p className="text-xl font-bold text-brand-charcoal">
          {formatCurrency(product.price)}
        </p>
        <Button className="w-full mt-4">
          Add to cart
        </Button>
      </div>
    </Card>
  );
}