"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

function pseudoRating(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  const rating = 3.9 + (hash % 11) / 10;
  const count = 20 + (hash % 180);
  return { rating: Math.min(5, rating), count };
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i + 1 <= Math.round(rating);
        return (
          <svg
            key={i}
            viewBox="0 0 20 20"
            className={`h-3.5 w-3.5 ${filled ? "fill-amber-400" : "fill-neutral-200"}`}
          >
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
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {(product.isNew || product.compareAtPrice) && (
            <div className="absolute left-2 top-2 flex gap-2">
              {product.isNew && (
                <span className="bg-black px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  New
                </span>
              )}
              {product.compareAtPrice && (
                <span className="bg-red-600 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  Sale
                </span>
              )}
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product, product.sizes[0], product.colors[0], 1);
            }}
            className="absolute inset-x-2 bottom-2 translate-y-4 bg-white/95 px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-neutral-900 opacity-0 backdrop-blur transition-all duration-300 hover:bg-white group-hover:translate-y-0 group-hover:opacity-100"
          >
            Quick Add
          </button>
        </div>
        <div className="mt-3">
          <h3 className="text-sm font-medium text-neutral-900">{product.name}</h3>
          <div className="mt-1 flex items-center gap-1.5">
            <Stars rating={rating} />
            <span className="text-xs text-neutral-400">({count})</span>
          </div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-sm font-semibold text-neutral-900">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && (
              <span className="text-sm text-neutral-400 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
