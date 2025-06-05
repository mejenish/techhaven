export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number; // For sales
  imageUrl: string;
  description: string;
  rating?: number;
  reviewsCount?: number;
  specifications?: Record<string, string>;
  slug: string;
  featured?: boolean;
  onSale?: boolean;
}
