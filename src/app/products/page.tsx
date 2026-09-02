import ProductGrid from "@/components/ProductGrid";
import { products } from "@/lib/products";

export const metadata = {
  title: "All Products | MASTER Menswear",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q?.trim().toLowerCase();

  const filtered = query
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    : products;

  return (
    <ProductGrid
      title={query ? `Results for "${q}"` : "All Products"}
      products={filtered}
    />
  );
}
