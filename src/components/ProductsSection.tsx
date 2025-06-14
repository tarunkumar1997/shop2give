// Using JSX transform, no React import needed
import { Link } from 'react-router-dom';
import { ProductCard } from './ProductCard';
import { products } from '../data/products';
import { Button } from './ui/Button';

export function ProductsSection() {
  return (
    <section className="bg-[#FFF8E7] py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h2 className="text-center font-serif text-3xl font-bold text-[#1E2A32] md:text-left">
            Featured Products
          </h2>
          <Link to="/products">
            <Button variant="outline">View All Products</Button>
          </Link>
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