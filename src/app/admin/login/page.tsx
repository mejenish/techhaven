
"use client"; // For form handling

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

// Placeholder login action
async function loginAction(formData: FormData) {
  const email = formData.get('email') as string;
  // In a real app, you would validate credentials against a backend/database
  // and set up a session or token.
  console.log("Attempting login for:", email);
  // Simulate successful login for demo purposes
  if (email) {
    return { success: true };
  }
  return { success: false, error: "Invalid credentials" };
}


export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await loginAction(formData);
    if (result.success) {
      // Redirect to admin dashboard on successful login
      // For now, redirecting to products page as dashboard is not yet created
      router.push('/admin/products');
    } else {
      setError(result.error || "Login failed");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/40">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Admin Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your admin account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" name="password" required />
            </div>
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link href="/" className="underline">
              Back to site
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
