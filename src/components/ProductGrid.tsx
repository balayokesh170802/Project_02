import ProductCard from "@/components/ProductCard";
import type { Product } from "@/lib/products";
import styles from "@/styles/components/ProductGrid.module.css";

export default function ProductGrid({
  title,
  products,
}: {
  title: string;
  products: Product[];
}) {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.title}>{title}</h1>
      {products.length === 0 ? (
        <p className={styles.empty}>No products found in this category yet.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
