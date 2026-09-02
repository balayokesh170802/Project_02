import { notFound } from "next/navigation";
import ProductGrid from "@/components/ProductGrid";
import { categories, getProductsByCategory, type Category } from "@/lib/products";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const match = categories.find((c) => c.slug === category);
  return { title: match ? `${match.label} | MASTER Menswear` : "MASTER Menswear" };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const match = categories.find((c) => c.slug === category);
  if (!match) notFound();

  const items = getProductsByCategory(category as Category);
  return <ProductGrid title={match.label} products={items} />;
}
