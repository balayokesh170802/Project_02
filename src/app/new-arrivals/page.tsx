import ProductGrid from "@/components/ProductGrid";
import { getNewProducts } from "@/lib/products";

export const metadata = {
  title: "New Arrivals | MASTER Menswear",
};

export default function NewArrivalsPage() {
  return <ProductGrid title="New Arrivals" products={getNewProducts()} />;
}
