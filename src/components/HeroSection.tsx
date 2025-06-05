
"use client";

import * as React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
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
    imageUrl: "https://placehold.co/1000x600.png",
    dataAiHint: "modern tech setup",
    linkHref: "/category/laptops",
    buttonText: "Shop Laptops",
    titleSize: "text-3xl md:text-4xl",
    descSize: "text-md md:text-lg",
    buttonSize: "lg" as "lg" | "sm" | "default" | "icon" | null | undefined, // Type assertion for Button size
    buttonVariant: "default" as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined, // Type assertion for Button variant
    textColor: "text-white",
    descColor: "text-gray-200",
    overlayClass: "bg-gradient-to-t from-black/70 to-transparent"
  },
  {
    title: "Explore New Heights",
    description: "Capture breathtaking views with our advanced drones.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "drone aerial shot",
    linkHref: "/category/drones",
    buttonText: "View Drones",
    titleSize: "text-2xl md:text-3xl",
    descSize: "text-base",
    buttonSize: "sm" as "lg" | "sm" | "default" | "icon" | null | undefined,
    buttonVariant: "outline" as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    textColor: "text-white",
    descColor: "text-gray-300",
    overlayClass: "bg-black/60"
  },
  {
    title: "Accessorize Your Setup",
    description: "Find the perfect accessories to complete your tech ensemble.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "computer accessories",
    linkHref: "/category/accessories",
    buttonText: "Shop Accessories",
    titleSize: "text-2xl md:text-3xl",
    descSize: "text-base",
    buttonSize: "sm" as "lg" | "sm" | "default" | "icon" | null | undefined,
    buttonVariant: "outline" as "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined,
    textColor: "text-white",
    descColor: "text-gray-300",
    overlayClass: "bg-black/60"
  },
];

export default function HeroSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
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
              <div className="bg-card rounded-lg shadow-lg overflow-hidden group relative aspect-video">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  data-ai-hint={slide.dataAiHint}
                />
                <div className={`absolute inset-0 p-6 md:p-8 flex flex-col justify-end ${slide.overlayClass}`}>
                  <h2 className={`${slide.titleSize} font-headline font-bold ${slide.textColor} mb-2 md:mb-3`}>
                    {slide.title}
                  </h2>
                  <p className={`${slide.descSize} ${slide.descColor} mb-4 md:mb-6 max-w-lg`}>
                    {slide.description}
                  </p>
                  <Link href={slide.linkHref}>
                    <Button 
                      size={slide.buttonSize} 
                      variant={slide.buttonVariant === "outline" ? "outline" : "default"} 
                      className={
                        slide.buttonVariant === "outline" 
                        ? "text-white border-white hover:bg-white hover:text-primary" 
                        : "bg-accent hover:bg-accent/90 text-accent-foreground"
                      }
                    >
                      {slide.buttonText} <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/30 hover:bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Carousel>
    </section>
  );
}
