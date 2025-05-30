import React from 'react';
import { Card, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Product } from '../data/products';
import { formatCurrency } from '../lib/utils';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-transform duration-300 hover:translate-y-[-4px]">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <h3 className="mb-2 line-clamp-2 h-12 text-base font-medium text-blue-900">
          {product.title}
        </h3>
        <p className="text-lg font-bold text-blue-900">
          {formatCurrency(product.price)}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Product
        </Button>
      </CardFooter>
    </Card>
  );
}