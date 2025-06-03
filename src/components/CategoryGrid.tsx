import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../lib/types';

export function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.slug}`}
          className="group flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-soft transition-all duration-300 hover:shadow-lg hover:bg-brand-pink/30"
        >
          <span className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110">{category.icon}</span>
          <span className="text-sm font-medium text-brand-charcoal">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}