import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side (70%) */}
        <div className="md:w-7/10 w-full bg-card rounded-lg shadow-lg overflow-hidden group relative">
          <Image
            src="https://placehold.co/1000x600.png"
            alt="Featured Product Large"
            width={1000}
            height={600}
            className="w-full h-auto object-cover aspect-[5/3] transition-transform duration-500 group-hover:scale-105"
            data-ai-hint="modern tech setup"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 md:p-8 flex flex-col justify-end">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-white mb-3">
              Unleash Peak Performance
            </h2>
            <p className="text-md md:text-lg text-gray-200 mb-6 max-w-lg">
              Discover our latest range of high-powered laptops and cutting-edge electronics.
            </p>
            <Link href="/category/laptops">
              <Button size="lg" variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Shop Laptops <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Side (30%) */}
        <div className="md:w-3/10 w-full flex flex-col gap-6">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden group relative aspect-video md:aspect-auto flex-1">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Promotion 1"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="drone aerial shot"
            />
            <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
              <h3 className="text-xl font-headline font-semibold text-white mb-2">
                Explore New Heights
              </h3>
              <Link href="/category/drones">
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  View Drones <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden group relative aspect-video md:aspect-auto flex-1">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Promotion 2"
              width={600}
              height={400}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="computer accessories"
            />
             <div className="absolute inset-0 bg-black/50 p-4 flex flex-col justify-end">
              <h3 className="text-xl font-headline font-semibold text-white mb-2">
                Accessorize Your Setup
              </h3>
              <Link href="/category/accessories">
                <Button size="sm" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Shop Accessories <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
