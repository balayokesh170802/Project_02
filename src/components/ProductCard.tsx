"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";
import styles from "@/styles/components/ProductCard.module.css";

function pseudoRating(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  const rating = 3.9 + (hash % 11) / 10;
  const count = 20 + (hash % 180);
  return { rating: Math.min(5, rating), count };
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars} aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <svg key={i} viewBox="0 0 20 20" className={filled ? styles.starFilled : styles.starEmpty}>
            <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
          </svg>
        );
      })}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const { rating, count } = pseudoRating(product.slug);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
      className="group"
    >
      <Link href={`/products/${product.slug}`} className={styles.link}>
        <div className={styles.imageWrap}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className={styles.image}
          />
          <div className={styles.overlay} />

          {(product.isNew || product.compareAtPrice) && (
            <div className={styles.badges}>
              {product.isNew && <span className={styles.badgeNew}>New</span>}
              {product.compareAtPrice && <span className={styles.badgeSale}>Sale</span>}
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.sizes[0], product.colors[0], 1);
            }}
            className={styles.quickAdd}
          >
            Quick Add
          </button>
        </div>
        <div className={styles.info}>
          <h3 className={styles.name}>{product.name}</h3>
          <div className={styles.ratingRow}>
            <Stars rating={rating} />
            <span className={styles.reviewCount}>({count})</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.price}>${product.price.toFixed(2)}</span>
            {product.compareAtPrice && (
              <span className={styles.comparePrice}>${product.compareAtPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
