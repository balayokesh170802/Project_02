import { notFound } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import AddToCart from "@/components/AddToCart";
import ProductGallery from "@/components/ProductGallery";
import Reveal from "@/components/Reveal";
import { getProductBySlug, getRelatedProducts, products } from "@/lib/products";
import styles from "@/styles/pages/product-detail.module.css";

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
    <div className={styles.wrap}>
      <div className={styles.grid}>
        <Reveal>
          <ProductGallery images={product.images} name={product.name} />
        </Reveal>

        <Reveal delay={0.15}>
          <h1 className={styles.name}>{product.name}</h1>
          <div className={styles.priceRow}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className={styles.comparePrice}>${product.compareAtPrice.toFixed(2)}</span>
            )}
          </div>
          <p className={styles.description}>{product.description}</p>

          <div className={styles.addToCartWrap}>
            <AddToCart product={product} />
          </div>
        </Reveal>
      </div>

      {related.length > 0 && (
        <div className={styles.related}>
          <Reveal>
            <h2 className={styles.relatedHeading}>You May Also Like</h2>
          </Reveal>
          <div className={styles.relatedGrid}>
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
