
"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { mockProducts } from "@/data/products"; // Assuming mockProducts is mutable
import type { Product } from "@/types";

// Schema for product validation
const ProductSchema = z.object({
  id: z.string().optional(), // Optional for creation, required for update
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  price: z.preprocess(
    (val) => parseFloat(String(val)),
    z.number().positive("Price must be positive")
  ),
  originalPrice: z.preprocess(
    (val) => (val ? parseFloat(String(val)) : undefined),
    z.number().positive("Original price must be positive").optional()
  ),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens"),
  featured: z.preprocess((val) => val === 'on' || val === true, z.boolean().optional()),
  onSale: z.preprocess((val) => val === 'on' || val === true, z.boolean().optional()),
  dataAiHint: z.string().optional(),
  // For simplicity, specifications are not handled in this basic form
});

export type ProductFormState = {
  message: string;
  errors?: Partial<Record<keyof Product, string[]>>;
  product?: Partial<Product>;
};


// Create Product Action
export async function createProduct(prevState: ProductFormState, formData: FormData): Promise<ProductFormState> {
  const rawData = Object.fromEntries(formData.entries());
  const validatedFields = ProductSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Failed to create product. Please check the errors.",
      errors: validatedFields.error.flatten().fieldErrors,
      product: rawData as Partial<Product>
    };
  }

  const data = validatedFields.data;

  // Check for unique slug (simulated)
  if (mockProducts.some(p => p.slug === data.slug)) {
    return {
      message: "Failed to create product.",
      errors: { slug: ["Slug already exists. Must be unique."] },
      product: data,
    };
  }
  
  const newProduct: Product = {
    ...data,
    id: String(Date.now()), // Generate a simple unique ID
    rating: undefined, // Default values
    reviewsCount: undefined,
    // Ensure boolean fields are set
    featured: data.featured || false,
    onSale: data.onSale || false,
  };

  mockProducts.push(newProduct); // Add to in-memory array

  revalidatePath("/admin/products");
  redirect("/admin/products"); // Or redirect to the new product's edit page: `/admin/products/${newProduct.slug}/edit`
  
  // This part is effectively unreachable due to redirect, but good for type signature
  return { message: "Product created successfully!", product: newProduct };
}

// Update Product Action
export async function updateProduct(prevState: ProductFormState, formData: FormData): Promise<ProductFormState> {
  const rawData = Object.fromEntries(formData.entries());
  const productId = rawData.id as string;

  if (!productId) {
    return { message: "Product ID is missing. Cannot update." };
  }

  const validatedFields = ProductSchema.safeParse(rawData);

  if (!validatedFields.success) {
    return {
      message: "Failed to update product. Please check the errors.",
      errors: validatedFields.error.flatten().fieldErrors,
      product: rawData as Partial<Product>
    };
  }
  
  const data = validatedFields.data;

  const productIndex = mockProducts.findIndex(p => p.id === productId);
  if (productIndex === -1) {
    return { message: "Product not found." };
  }

  // Check for unique slug (if changed)
  if (data.slug !== mockProducts[productIndex].slug && mockProducts.some(p => p.slug === data.slug && p.id !== productId)) {
     return {
      message: "Failed to update product.",
      errors: { slug: ["Slug already exists. Must be unique."] },
      product: data,
    };
  }

  const updatedProduct: Product = {
    ...mockProducts[productIndex], // Keep existing fields like rating
    ...data,
    id: productId, // Ensure ID is not changed
    // Ensure boolean fields are set
    featured: data.featured || false,
    onSale: data.onSale || false,
  };

  mockProducts[productIndex] = updatedProduct;

  revalidatePath("/admin/products");
  revalidatePath(`/admin/products/${updatedProduct.slug}/edit`);
  revalidatePath(`/products/${updatedProduct.slug}`); // Revalidate public product page
  redirect("/admin/products");

  // This part is effectively unreachable
  return { message: "Product updated successfully!", product: updatedProduct };
}

// Delete Product Action
export async function deleteProduct(productId: string): Promise<{ message: string }> {
  const productIndex = mockProducts.findIndex(p => p.id === productId);

  if (productIndex === -1) {
    return { message: "Product not found." };
  }

  const deletedProductSlug = mockProducts[productIndex].slug;
  mockProducts.splice(productIndex, 1); // Remove from in-memory array

  revalidatePath("/admin/products");
  revalidatePath(`/products/${deletedProductSlug}`); // Revalidate public product page
  // No redirect needed here usually, action happens on product list page or via a button
  return { message: "Product deleted successfully." };
}
