import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  return { title: product ? `${product.name} | MASTER Menswear` : "MASTER Menswear" };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Reveal>
          <ProductGallery images={product.images} name={product.name} />
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className="font-display text-3xl font-bold tracking-tight">{product.name}</h1>
          <div className="mt-2 flex items-center gap-3">
            <span className="text-xl font-semibold">${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className="text-lg text-neutral-400 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="mt-4 text-neutral-600">{product.description}</p>

          <div className="mt-8">
            <AddToCart product={product} />
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <Reveal>
            <h2 className="mb-8 font-display text-2xl font-bold tracking-tight">You May Also Like</h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
