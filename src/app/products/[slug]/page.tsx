import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { mockProducts } from "@/data/products";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
  return mockProducts.map(product => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = mockProducts.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">Sorry, we couldn't find the product you're looking for.</p>
           <Link href="/">
            <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-primary hover:underline flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all products
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden p-4">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-auto object-contain aspect-square"
              data-ai-hint={product.dataAiHint || "product detail image"}
            />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-headline font-bold text-primary mb-3">{product.name}</h1>
            <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
            
            {product.rating && (
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < Math.round(product.rating || 0) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                ))}
                <span className="ml-2 text-muted-foreground">({product.reviewsCount} reviews)</span>
              </div>
            )}

            <p className="text-3xl font-bold text-primary mb-6">
              ${product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="ml-3 text-xl text-muted-foreground line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </p>

            <Button size="lg" className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
              <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
            </Button>

            {product.specifications && Object.keys(product.specifications).length > 0 && (
              <div className="mt-8 pt-6 border-t">
                <h2 className="text-xl font-headline font-semibold text-primary mb-3">Specifications</h2>
                <ul className="space-y-1 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <li key={key}><span className="font-medium">{key}:</span> {value}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Placeholder for Customer Reviews Section */}
        <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-headline font-semibold text-primary mb-6">Customer Reviews</h2>
            <p className="text-muted-foreground">Customer reviews will be displayed here.</p>
            {/* Example Review Structure */}
            <div className="mt-4 p-4 border rounded-lg bg-card">
                <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 font-semibold">Great Product!</span>
                </div>
                <p className="text-sm text-muted-foreground mb-1">by Jane Doe on {new Date().toLocaleDateString()}</p>
                <p className="text-sm">This laptop is fantastic, highly recommend for daily tasks and light gaming.</p>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
