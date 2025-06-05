
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Tag } from 'lucide-react';

const offers = [
  {
    title: "Student Discount: 15% Off Laptops!",
    description: "Verify your student status and get an exclusive discount on select laptops. Power up your studies!",
    imageUrl: "https://placehold.co/400x250.png",
    dataAiHint: "student laptop offer",
    linkHref: "/sales/student-discount",
    buttonText: "Learn More",
  },
  {
    title: "Trade-In Your Old Tech",
    description: "Get credit towards new gadgets when you trade in your eligible devices. Upgrade responsibly.",
    imageUrl: "https://placehold.co/400x250.png",
    dataAiHint: "tech trade-in",
    linkHref: "/trade-in",
    buttonText: "Get an Estimate",
  },
  {
    title: "Free Express Shipping",
    description: "On all orders over $99 for a limited time. Get your tech faster without the extra cost!",
    imageUrl: "https://placehold.co/400x250.png",
    dataAiHint: "shipping box speed",
    linkHref: "/shipping-offers",
    buttonText: "Shop Now",
  },
];

export default function OfferShowupSection() {
  if (offers.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-6 md:mb-8">
            <Tag className="h-8 w-8 text-accent mr-3" />
            <h2 className="text-3xl font-headline font-bold text-primary">
                Special Offers Just For You
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Link href={offer.linkHref} className="block">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={offer.imageUrl}
                    alt={offer.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={offer.dataAiHint}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </Link>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-headline text-primary group-hover:text-accent transition-colors">
                    <Link href={offer.linkHref} className="block">
                        {offer.title}
                    </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{offer.description}</p>
                <Link href={offer.linkHref} className="mt-auto">
                  <Button variant="outline" className="w-full text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    {offer.buttonText} <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
