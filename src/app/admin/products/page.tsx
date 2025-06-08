
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockProducts } from "@/data/products"; // Direct import for reading
import { PlusCircle, MoreHorizontal, Trash2, Edit3 } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { deleteProduct } from "./actions"; // Import server action
import { Badge } from "@/components/ui/badge";

async function DeleteProductButton({ productId }: { productId: string}) {
    // This component allows using a form for the delete action if preferred,
    // or directly calling the action. For simplicity, direct call in a server component context
    // would need client component interaction to trigger.
    // Here, we'll prepare it for a form submission for progressive enhancement.
    const deleteProductWithId = deleteProduct.bind(null, productId);

    return (
        <form action={deleteProductWithId}>
            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-700 w-full justify-start">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
            </Button>
        </form>
    );
}


export default async function AdminProductsPage() {
  const products = mockProducts; // In a real app, fetch from database

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Products</h2>
          <p className="text-muted-foreground">
            Manage your store's products here.
          </p>
        </div>
        <Button asChild>
          <Link href="/admin/products/new">
            <PlusCircle className="mr-2 h-4 w-4" /> Add Product
          </Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Product List</CardTitle>
          <CardDescription>
            A list of all products in your store. Current count: {products.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden w-[100px] sm:table-cell">
                  Image
                </TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Category</TableHead>
                <TableHead className="hidden md:table-cell">Slug</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7} className="text-center">
                    No products found.
                  </TableCell>
                </TableRow>
              )}
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="hidden sm:table-cell">
                    <Image
                      alt={product.name}
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={product.imageUrl || "https://placehold.co/64x64.png"}
                      width="64"
                      data-ai-hint={product.dataAiHint || "product thumbnail"}
                    />
                  </TableCell>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>
                    {product.featured && <Badge variant="outline" className="mr-1">Featured</Badge>}
                    {product.onSale && <Badge variant="secondary">On Sale</Badge>}
                    {!product.featured && !product.onSale && <Badge variant="outline" className="text-muted-foreground">Standard</Badge>}
                  </TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell className="hidden md:table-cell">{product.slug}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          aria-haspopup="true"
                          size="icon"
                          variant="ghost"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem asChild>
                           <Link href={`/admin/products/${product.slug}/edit`} className="flex items-center cursor-pointer">
                            <Edit3 className="mr-2 h-4 w-4" /> Edit
                           </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                            <DeleteProductButton productId={product.id} />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
