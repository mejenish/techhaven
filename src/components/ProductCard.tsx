
"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShoppingCart, Star } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast({
      title: `${product.name} added to cart!`,
      description: "You can continue shopping or proceed to checkout.",
      variant: "default",
    });
  };

  return (
    <Card className="group overflow-hidden rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link href={`/products/${product.slug}`} className="block">
        <CardHeader className="p-4">
          <div className="aspect-square overflow-hidden rounded-md">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.dataAiHint || 'product image'}
            />
          </div>
        </CardHeader>
      </Link>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.slug}`} className="block">
          <CardTitle className="text-lg font-headline leading-tight mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
        <CardDescription className="text-xs text-muted-foreground mb-2 line-clamp-2">
          {product.description}
        </CardDescription>
        <div className="flex items-center justify-between mb-2">
          <div>
            <span className="text-xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-2 text-sm text-muted-foreground line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center text-sm text-amber-500">
              <Star className="w-4 h-4 fill-amber-500 mr-1" />
              {product.rating.toFixed(1)}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          variant="default"
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

