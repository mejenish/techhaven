import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard';
import { Tag } from 'lucide-react';

interface SaleSectionProps {
  products: Product[];
}

export default function SaleSection({ products }: SaleSectionProps) {
  const saleProducts = products.filter(p => p.onSale);

  if (saleProducts.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6 md:mb-8">
          <Tag className="h-8 w-8 text-accent mr-3" />
          <h2 className="text-3xl font-headline font-bold text-primary">
            Hot Deals &amp; Special Offers
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {saleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
