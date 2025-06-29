
"use client";

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroSlides = [
  {
    title: "Unleash Peak Performance",
    description: "Discover our latest range of high-powered laptops and cutting-edge electronics.",
    imageUrl: "https://mudita.com.np/media/Legion_9_copy.webp",
    dataAiHint: "modern tech setup",
    linkHref: "/category/laptops",
    titleSize: "text-2xl md:text-3xl lg:text-4xl",
    descSize: "text-sm md:text-base",
    textColor: "text-white",
    descColor: "text-gray-200",
    overlayClass: "bg-gradient-to-t from-black/70 to-transparent"
  },
  {
    title: "Explore New Heights with Drones",
    description: "Capture breathtaking views with our advanced drones. Perfect for hobbyists and professionals.",
    imageUrl: "https://mudita.com.np/media/Legion_9_copy.webp",
    dataAiHint: "drone aerial shot",
    linkHref: "/category/drones",
    titleSize: "text-xl md:text-2xl lg:text-3xl",
    descSize: "text-sm",
    textColor: "text-white",
    descColor: "text-gray-300",
    overlayClass: "bg-black/60"
  },
  {
    title: "Accessorize Your Tech Life",
    description: "Find the perfect accessories to complete your tech ensemble, from keyboards to headphones.",
    imageUrl: "https://mudita.com.np/media/Legion_9_copy.webp",
    dataAiHint: "computer accessories",
    linkHref: "/category/accessories",
    titleSize: "text-xl md:text-2xl lg:text-3xl",
    descSize: "text-sm",
    textColor: "text-white",
    descColor: "text-gray-300",
    overlayClass: "bg-black/60"
  },
];

const rightSideOffer = {
  title: "Limited Time Deal!",
  description: "Get 20% off on selected motherboards.",
  imageUrl: "https://mudita.com.np/media/Legion_9_copy.webp", 
  dataAiHint: "motherboard sale",
  linkHref: "/category/motherboards",
};

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Side Hero Slider (70%) */}
        <div className="w-full md:w-[70%]">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full group"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index}>
                  <Link href={slide.linkHref} className="block">
                    <div className="bg-card rounded-lg shadow-lg overflow-hidden group relative aspect-[16/9] md:aspect-[20/9]">
                      <Image
                        src={slide.imageUrl}
                        alt={slide.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 70vw"
                        priority={index === 0}
                        data-ai-hint={slide.dataAiHint}
                      />
                      <div className={`absolute inset-0 p-4 md:p-6 lg:p-8 flex flex-col justify-end ${slide.overlayClass}`}>
                        <h2 className={`${slide.titleSize} font-headline font-bold ${slide.textColor} mb-1 md:mb-2`}>
                          {slide.title}
                        </h2>
                        <p className={`${slide.descSize} ${slide.descColor} mb-3 md:mb-4 max-w-md`}>
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            <CarouselNext className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Carousel>
        </div>

        {/* Right Side Vertical Image (30%) */}
        <div className="w-full md:w-[30%]">
          <Link href={rightSideOffer.linkHref} className="block bg-card rounded-lg shadow-lg overflow-hidden group relative h-full">
            <div className="relative aspect-[3/4] md:aspect-auto md:h-full">
              <Image
                src={rightSideOffer.imageUrl}
                alt={rightSideOffer.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 30vw"
                data-ai-hint={rightSideOffer.dataAiHint}
              />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent p-4 md:p-6 flex flex-col justify-end">
                 <h3 className="text-xl md:text-2xl font-headline font-bold text-white mb-1 md:mb-2">{rightSideOffer.title}</h3>
                 <p className="text-sm md:text-base text-gray-200">{rightSideOffer.description}</p>
               </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
