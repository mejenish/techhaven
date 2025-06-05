import Link from 'next/link';
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-headline font-semibold mb-4">Tech Haven</h3>
            <p className="text-sm text-primary-foreground/80">
              Your one-stop shop for the latest in tech, from laptops to drones and everything in between.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-headline font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/laptops" className="hover:text-accent transition-colors">Laptops</Link></li>
              <li><Link href="/category/accessories" className="hover:text-accent transition-colors">Accessories</Link></li>
              <li><Link href="/category/drones" className="hover:text-accent transition-colors">Drones</Link></li>
              <li><Link href="/category/motherboards" className="hover:text-accent transition-colors">Motherboards</Link></li>
              <li><Link href="/sales" className="hover:text-accent transition-colors">Sales & Offers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-headline font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="/shipping" className="hover:text-accent transition-colors">Shipping Policy</Link></li>
              <li><Link href="/returns" className="hover:text-accent transition-colors">Returns & Exchanges</Link></li>
              <li><Link href="/faq" className="hover:text-accent transition-colors">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-headline font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent transition-colors"><Facebook size={24} /></a>
              <a href="#" aria-label="Twitter" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
              <a href="#" aria-label="Instagram" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent transition-colors"><Linkedin size={24} /></a>
            </div>
            <p className="text-sm">Stay updated with our latest deals and new arrivals.</p>
            {/* Newsletter signup could go here */}
          </div>
        </div>
        <Separator className="bg-primary-foreground/20 my-8" />
        <div className="text-center text-sm text-primary-foreground/80">
          &copy; {currentYear} Tech Haven. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
