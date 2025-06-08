
import ProductForm from "@/components/admin/ProductForm";
import { createProduct } from "../actions";

export default function NewProductPage() {
  return (
    <ProductForm
      action={createProduct}
      formTitle="Create New Product"
      formDescription="Fill in the details for your new product."
      submitButtonText="Create Product"
    />
  );
}
