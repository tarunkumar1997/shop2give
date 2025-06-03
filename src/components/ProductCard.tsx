import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Product as DataProduct } from '../data/products';
import { formatCurrency } from '../lib/utils';
import { useCartStore } from '../stores/cartStore';

type ProductCardProps = {
  product: DataProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = React.useState(1);
  const { addToCart } = useCartStore();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    const productToAdd = {
      id: product.id,
      name: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      description: '',
      category: '',
      priceId: product.id,
      campaignId: product.campaignId,
      stripeProductId: product.stripeProductId,
      stripePriceId: product.stripePriceId
    };
    
    addToCart(productToAdd, quantity);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-soft">
        <div className="relative h-48 overflow-hidden bg-white">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute right-3 top-3 rounded-full bg-brand-teal px-3 py-1 text-xs font-medium text-white">
              {product.badge}
            </div>
          )}
        </div>
        <CardContent className="bg-brand-pink/30 pt-4">
          <h3 className="mb-2 line-clamp-2 h-12 text-base font-medium text-brand-charcoal">
            {product.title}
          </h3>
          <p className="text-lg font-bold text-brand-charcoal">
            {formatCurrency(product.price)}
          </p>
          <div className="mt-4">
            <label htmlFor={`quantity-${product.id}`} className="mb-1 block text-sm font-medium text-brand-charcoal/80">
              Quantity
            </label>
            <select
              id={`quantity-${product.id}`}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              onClick={(e) => e.stopPropagation()}
              className="block w-full rounded-xl border-brand-teal/20 bg-white shadow-sm focus:border-brand-teal focus:ring-brand-teal sm:text-sm"
            >
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        </CardContent>
        <CardFooter className="bg-brand-pink/30">
          <Button 
            className="w-full shadow-soft"
            onClick={handleAddToCart}
          >
            Add to Cart ({formatCurrency(product.price * quantity)})
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}