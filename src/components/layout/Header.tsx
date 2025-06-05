"use client";

import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ShoppingCart, UserCircle, ChevronDown, Laptop, Headphones, RadioTower, Cpu } from "lucide-react";

const categories = [
  { name: "Laptops", href: "/category/laptops", icon: Laptop },
  { name: "Accessories", href: "/category/accessories", icon: Headphones },
  { name: "Drones", href: "/category/drones", icon: RadioTower },
  { name: "Motherboards", href: "/category/motherboards", icon: Cpu },
];

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-3xl font-headline font-bold text-primary">
            Tech Haven
          </Link>
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {categories.map((category) => (
              <DropdownMenu key={category.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-foreground hover:text-primary">
                    {category.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {/* These are example sub-categories. In a real app, these would be dynamic. */}
                  <DropdownMenuItem asChild><Link href={category.href}>All {category.name}</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/gaming`}>Gaming</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/professional`}>Professional</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/budget`}>Budget</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
            <Button variant="ghost" size="icon" aria-label="Shopping Cart">
              <ShoppingCart className="h-6 w-6 text-primary" />
              <span className="absolute top-2 right-2 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent text-xs text-accent-foreground">0</span>
            </Button>
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
                    {category.name} <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-full">
                  <DropdownMenuItem asChild><Link href={category.href}>All {category.name}</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/gaming`}>Gaming</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/professional`}>Professional</Link></DropdownMenuItem>
                  <DropdownMenuItem asChild><Link href={`${category.href}/budget`}>Budget</Link></DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
            </div>
        </div>
      </div>
    </header>
  );
}
