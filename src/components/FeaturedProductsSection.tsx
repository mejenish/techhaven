import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import { Star } from 'lucide-react';

interface FeaturedProductsSectionProps {
  products: Product[];
  title?: string;
}

export default function FeaturedProductsSection({ products, title = "Featured Products" }: FeaturedProductsSectionProps) {
  const featured = products.filter(p => p.featured);
  
  if (featured.length === 0 && products.length === 0) {
     return null;
  }
  
  const productsToShow = featured.length > 0 ? featured : products.slice(0,4);


  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6 md:mb-8">
            <Star className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl font-headline font-bold text-primary">
            {title}
            </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productsToShow.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
