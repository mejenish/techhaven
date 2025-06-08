
import ProductForm from "@/components/admin/ProductForm";
import { updateProduct } from "../actions";
import { mockProducts } from "@/data/products"; // Direct import for reading
import { notFound } from "next/navigation";

export default async function EditProductPage({ params }: { params: { slug: string } }) {
  const product = mockProducts.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <ProductForm
      product={product}
      action={updateProduct}
      formTitle="Edit Product"
      formDescription={`Editing product: ${product.name}`}
      submitButtonText="Save Changes"
    />
  );
}
