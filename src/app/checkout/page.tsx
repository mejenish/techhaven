
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Lock, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CheckoutPage() {
  const { cart, getCartTotalPrice, clearCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const totalPrice = getCartTotalPrice();

  if (cart.length === 0 && !paymentSuccess) {
    // Redirect to cart if cart is empty and payment hasn't been made
    // This check should ideally happen sooner, e.g. in a route guard or useEffect
    // For simplicity, handling it here.
    if (typeof window !== 'undefined') {
        router.push('/cart');
    }
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 text-center">
                <p>Your cart is empty. Redirecting...</p>
            </main>
            <Footer />
        </div>
    );
  }

  const handleMockPayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setPaymentSuccess(true);
    clearCart();
    toast({
      title: "Payment Successful!",
      description: "Your order has been confirmed. Thank you for shopping with Tech Haven!",
      variant: "default",
      duration: 5000,
    });
  };

  if (paymentSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
            <h1 className="text-3xl font-headline font-bold text-primary mb-4">Thank You For Your Order!</h1>
            <p className="text-muted-foreground mb-8 max-w-md">
                Your payment was successful and your order is being processed. You'll receive an email confirmation shortly.
            </p>
            <Button asChild>
                <Link href="/">Continue Shopping</Link>
            </Button>
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
          <Link href="/cart" className="text-primary hover:underline flex items-center text-sm">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Cart
          </Link>
        </div>
        <h1 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Checkout</h1>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-4xl mx-auto">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-primary" />
                    Payment Details
                </CardTitle>
                <CardDescription>Enter your card information. This is a mock payment form.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMockPayment} className="space-y-4">
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" type="text" placeholder="0000 0000 0000 0000" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input id="expiryDate" type="text" placeholder="MM/YY" required />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" type="text" placeholder="123" required />
                    </div>
                  </div>
                   <div>
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" type="text" placeholder="John M. Doe" required />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={isLoading}>
                    {isLoading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                    ) : (
                      <>
                        <Lock className="mr-2 h-4 w-4" /> Pay ${totalPrice.toFixed(2)} Securely
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          <div className="md:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                    <div>
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
                <div className="flex justify-between text-lg font-bold pt-4 mt-2 border-t">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
