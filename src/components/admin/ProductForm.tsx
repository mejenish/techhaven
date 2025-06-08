
"use client";

import type { Product } from "@/types";
import type { ProductFormState } from "@/app/admin/products/actions";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

interface ProductFormProps {
  product?: Product | null;
  action: (prevState: ProductFormState, formData: FormData) => Promise<ProductFormState>;
  formTitle: string;
  formDescription: string;
  submitButtonText: string;
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Saving..." : text}
    </Button>
  );
}

export default function ProductForm({ product, action, formTitle, formDescription, submitButtonText }: ProductFormProps) {
  const initialState: ProductFormState = { message: "", product: product || {} };
  const [state, formAction] = useFormState(action, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) { // Success message
        toast({
            title: "Success!",
            description: state.message,
            variant: "default"
        })
    } else if (state.message && state.errors) { // Error message
        toast({
            title: "Error",
            description: state.message,
            variant: "destructive"
        })
    }
  }, [state, toast]);


  return (
    <Card>
      <CardHeader>
        <CardTitle>{formTitle}</CardTitle>
        <CardDescription>{formDescription}</CardDescription>
      </CardHeader>
      <CardContent>
        <form action={formAction} className="grid gap-6">
          {product?.id && <input type="hidden" name="id" value={product.id} />}
          
          <div className="grid gap-3">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" type="text" defaultValue={state.product?.name || product?.name || ""} required />
            {state.errors?.name && <p className="text-sm text-red-500">{state.errors.name.join(", ")}</p>}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="slug">Slug</Label>
            <Input id="slug" name="slug" type="text" defaultValue={state.product?.slug || product?.slug || ""} required />
            {state.errors?.slug && <p className="text-sm text-red-500">{state.errors.slug.join(", ")}</p>}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" defaultValue={state.product?.description || product?.description || ""} required />
            {state.errors?.description && <p className="text-sm text-red-500">{state.errors.description.join(", ")}</p>}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" type="number" step="0.01" defaultValue={state.product?.price || product?.price || ""} required />
              {state.errors?.price && <p className="text-sm text-red-500">{state.errors.price.join(", ")}</p>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="originalPrice">Original Price (Optional)</Label>
              <Input id="originalPrice" name="originalPrice" type="number" step="0.01" defaultValue={state.product?.originalPrice || product?.originalPrice || ""} />
               {state.errors?.originalPrice && <p className="text-sm text-red-500">{state.errors.originalPrice.join(", ")}</p>}
            </div>
          </div>

          <div className="grid gap-3">
            <Label htmlFor="category">Category</Label>
            <Input id="category" name="category" type="text" defaultValue={state.product?.category || product?.category || ""} required />
            {state.errors?.category && <p className="text-sm text-red-500">{state.errors.category.join(", ")}</p>}
          </div>
          
          <div className="grid gap-3">
            <Label htmlFor="imageUrl">Image URL</Label>
            <Input id="imageUrl" name="imageUrl" type="url" defaultValue={state.product?.imageUrl || product?.imageUrl || ""} required />
            {state.errors?.imageUrl && <p className="text-sm text-red-500">{state.errors.imageUrl.join(", ")}</p>}
          </div>

          <div className="grid gap-3">
            <Label htmlFor="dataAiHint">Image AI Hint (Optional)</Label>
            <Input id="dataAiHint" name="dataAiHint" type="text" defaultValue={state.product?.dataAiHint || product?.dataAiHint || ""} />
             {state.errors?.dataAiHint && <p className="text-sm text-red-500">{state.errors.dataAiHint.join(", ")}</p>}
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="featured" name="featured" defaultChecked={state.product?.featured !== undefined ? state.product.featured : product?.featured} />
            <Label htmlFor="featured">Featured Product</Label>
          </div>
           {state.errors?.featured && <p className="text-sm text-red-500">{state.errors.featured.join(", ")}</p>}

          <div className="flex items-center space-x-2">
            <Checkbox id="onSale" name="onSale" defaultChecked={state.product?.onSale !== undefined ? state.product.onSale : product?.onSale} />
            <Label htmlFor="onSale">On Sale</Label>
          </div>
          {state.errors?.onSale && <p className="text-sm text-red-500">{state.errors.onSale.join(", ")}</p>}

          <div className="flex flex-col sm:flex-row gap-2 justify-end">
            <Button variant="outline" asChild>
                <Link href="/admin/products">Cancel</Link>
            </Button>
            <SubmitButton text={submitButtonText} />
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
