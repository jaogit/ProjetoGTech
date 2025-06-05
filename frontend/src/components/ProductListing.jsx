import React from 'react';
import ProductCard from './ProductCard';

function ProductListing() {
  return (
    <div className="pt-6 pb-10 w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(18)].map((_, i) => (
          <ProductCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProductListing;