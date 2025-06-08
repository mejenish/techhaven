
"use client";

import Link from 'next/link';
import * as React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, UserCircle, ChevronDown, Laptop, Headphones, RadioTower, Cpu } from "lucide-react";
import { useCart } from '@/context/CartContext';

const categories = [
  { name: "Laptops", href: "/category/laptops", icon: Laptop, subCategories: [
    { name: "Gaming Laptops", href: "/category/laptops/gaming"},
    { name: "Professional Laptops", href: "/category/laptops/professional"},
    { name: "Budget Laptops", href: "/category/laptops/budget"},
  ]},
  { name: "Accessories", href: "/category/accessories", icon: Headphones, subCategories: [
    { name: "Keyboards", href: "/category/accessories/keyboards"},
    { name: "Mice", href: "/category/accessories/mice"},
    { name: "Monitors", href: "/category/accessories/monitors"},
  ] },
  { name: "Drones", href: "/category/drones", icon: RadioTower, subCategories: [
    { name: "Camera Drones", href: "/category/drones/camera"},
    { name: "Racing Drones", href: "/category/drones/racing"},
    { name: "Toy Drones", href: "/category/drones/toy"},
  ] },
  { name: "Motherboards", href: "/category/motherboards", icon: Cpu, subCategories: [
    { name: "AMD Motherboards", href: "/category/motherboards/amd"},
    { name: "Intel Motherboards", href: "/category/motherboards/intel"},
  ] },
];

interface CategoryMenuProps {
  category: typeof categories[0];
}

function CategoryMenu({ category }: CategoryMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <div
        className="flex items-center"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Button variant="ghost" className="text-foreground hover:text-primary pr-1 py-2 h-auto rounded-r-none" asChild>
          <Link href={category.href}>{category.name}</Link>
        </Button>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="text-foreground hover:text-primary pl-1 pr-2 py-2 h-auto rounded-l-none">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent 
        align="start" 
        className="mt-1"
        onMouseEnter={() => setIsOpen(true)} 
        onMouseLeave={() => setIsOpen(false)} 
      >
        {category.subCategories.map((subCategory) => (
          <DropdownMenuItem key={subCategory.name} asChild>
            <Link href={subCategory.href}>{subCategory.name}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Header() {
  const { getCartTotalQuantity } = useCart();
  const totalQuantity = getCartTotalQuantity();

  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-headline font-bold text-primary">
            Tech Haven
          </Link>
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {categories.map((category) => (
              <CategoryMenu key={category.name} category={category} />
            ))}
          </nav>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="relative hidden sm:block">
              <Input type="search" placeholder="Search products..." className="pr-10 w-40 lg:w-64" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <Button variant="ghost" size="icon" aria-label="User Account">
              <UserCircle className="h-6 w-6 text-primary" />
            </Button>
            <Link href="/cart" passHref>
              <Button variant="ghost" size="icon" aria-label="Shopping Cart" className="relative">
                <ShoppingCart className="h-6 w-6 text-primary" />
                {totalQuantity > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">
                    {totalQuantity}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
        {/* Mobile Search and Categories */}
        <div className="mt-2 md:hidden flex flex-col gap-2">
            <div className="relative w-full">
              <Input type="search" placeholder="Search products..." className="pr-10 w-full" />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <DropdownMenu key={`mobile-${category.name}`}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full justify-between text-foreground hover:text-primary">
                    <Link href={category.href} className="flex-grow text-left">{category.name}</Link>
                    <ChevronDown className="ml-1 h-4 w-4 flex-shrink-0" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[calc(50vw-1rem)]">
                   {category.subCategories.map((subCategory) => (
                    <DropdownMenuItem key={subCategory.name} asChild>
                        <Link href={subCategory.href}>{subCategory.name}</Link>
                    </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            </div>
        </div>
      </div>
    </header>
  );
}
