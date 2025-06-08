
import type { ReactNode } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Package, Users, LogOut, Settings } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-60 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-start gap-2 px-4 py-5">
          <Link
            href="/admin/dashboard" // Placeholder, will create dashboard later
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Home className="h-4 w-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/products"
            className="flex w-full items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
          >
            <Package className="h-4 w-4" />
            Products
          </Link>
          {/* Add more links here e.g. Orders, Customers */}
        </nav>
        <Separator />
        <nav className="mt-auto flex flex-col items-start gap-2 px-4 py-5">
           <Link
            href="/admin/settings" // Placeholder
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <Settings className="h-4 w-4" />
            Settings
          </Link>
          <Link
            href="/" // Link to public site
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
          >
            <LogOut className="h-4 w-4" />
            Logout (to Site)
          </Link>
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64 w-full">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <h1 className="text-xl font-semibold">Admin Panel</h1>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 bg-background rounded-lg shadow">
          {children}
        </main>
      </div>
    </div>
  );
}
