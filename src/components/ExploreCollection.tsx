"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  cubicBezier,
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { getProductBySlug, type Product } from "@/lib/products";
import styles from "@/styles/components/ExploreCollection.module.css";

const EASE = cubicBezier(0.33, 0, 0.15, 1);

const COLLECTION_SLUGS = [
  "classic-oxford-shirt",
  "essential-crew-tee",
  "slim-fit-chinos",
  "denim-trucker-jacket",
  "chelsea-boots",
];

const CATEGORY_LABELS: Record<string, string> = {
  shirts: "Shirts",
  "t-shirts": "T-Shirts",
  trousers: "Trousers",
  jackets: "Jackets",
  shoes: "Shoes",
  accessories: "Accessories",
};

// Narrow viewports need a proportionally larger start box, or the
// "NEW COLLECTION" label overflows it and gets clipped.
// Kept as a MotionValue so a resize recomputes the transform immediately —
// a plain state value would leave the DOM stale until the next scroll event.
function useInitialScale() {
  const scale = useMotionValue(0.35);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)");
    const tablet = window.matchMedia("(min-width: 640px) and (max-width: 1023px)");

    const update = () => {
      scale.set(mobile.matches ? 0.62 : tablet.matches ? 0.45 : 0.35);
    };

    update();
    mobile.addEventListener("change", update);
    tablet.addEventListener("change", update);
    return () => {
      mobile.removeEventListener("change", update);
      tablet.removeEventListener("change", update);
    };
  }, [scale]);

  return scale;
}

function ProductCard({
  product,
  index,
  progress,
}: {
  product: Product;
  index: number;
  progress: MotionValue<number>;
}) {
  // Staggered so the row rises as a wave rather than one block
  const start = 0.58 + index * 0.03;
  const end = start + 0.17;

  const opacity = useTransform(progress, [start, end], [0, 1], {
    clamp: true,
    ease: EASE,
  });
  const y = useTransform(progress, [start, end], [90, 0], {
    clamp: true,
    ease: EASE,
  });

  return (
    <motion.div style={{ opacity, y }} className={styles.card}>
      <Link href={`/products/${product.slug}`} className={`group ${styles.cardLink}`}>
        <div className={styles.cardMedia}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 639px) 62vw, (max-width: 1023px) 38vw, 18vw"
            className={styles.cardImage}
          />
          {product.isNew && <span className={styles.cardBadge}>New</span>}
        </div>

        <p className={styles.cardCategory}>
          {CATEGORY_LABELS[product.category] ?? product.category}
        </p>
        <h3 className={styles.cardName}>{product.name}</h3>
        <p className={styles.cardPriceRow}>
          <span className={styles.cardPrice}>${product.price.toFixed(2)}</span>
          {product.compareAtPrice && (
            <span className={styles.cardCompare}>
              ${product.compareAtPrice.toFixed(2)}
            </span>
          )}
        </p>
      </Link>
    </motion.div>
  );
}

export default function ExploreCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const initialScale = useInitialScale();

  const products = COLLECTION_SLUGS.map((slug) => getProductBySlug(slug)).filter(
    (p): p is Product => Boolean(p)
  );

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 26,
    restDelta: 0.0005,
  });

  // Stage 1→2: Expansion finishes by 30% of scroll
  const scale = useTransform(
    [progress, initialScale],
    ([p, from]: number[]) => {
      const t = Math.min(Math.max(p / 0.3, 0), 1);
      return from + (1 - from) * EASE(t);
    }
  );
  const borderRadius = useTransform(progress, [0, 0.27], [20, 0], {
    clamp: true,
    ease: EASE,
  });

  // Exact reciprocal so grid + text stay fixed size
  const counterScale = useTransform(scale, (s) => 1 / s);

  // Stage 3: Brief hold at full screen, then "NEW COLLECTION" fades out
  const labelOpacity = useTransform(
    progress,
    [0, 0.3, 0.34, 0.4],
    [1, 1, 1, 0],
    { clamp: true, ease: EASE }
  );

  // Stage 4: Heading + description appear
  const headingOpacity = useTransform(progress, [0.42, 0.52], [0, 1], {
    clamp: true,
    ease: EASE,
  });
  const headingY = useTransform(progress, [0.42, 0.52], [40, 0], {
    clamp: true,
    ease: EASE,
  });

  // Stage 5: Heading lifts to make room for the row. Separate wrapper so the
  // vh-based lift never has to interpolate against the px-based headingY above.
  const headingLift = useTransform(progress, [0.56, 0.7], ["0vh", "-20vh"], {
    clamp: true,
    ease: EASE,
  });

  // Stage 5: Product row rises from below (per-card stagger in ProductCard)
  const rowPointerEvents = useTransform(progress, (p) =>
    p > 0.62 ? "auto" : "none"
  );

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.stickyWrap}>
        <motion.div
          className={styles.container}
          style={{ scale, borderRadius }}
        >
          <motion.div
            className={styles.gridOverlay}
            style={{ scale: counterScale }}
            aria-hidden
          />

          <motion.div
            className={styles.inner}
            style={{ scale: counterScale }}
          >
            <motion.p
              className={styles.label}
              style={{ opacity: labelOpacity }}
            >
              New Collection
            </motion.p>

            <motion.div className={styles.textShift} style={{ y: headingLift }}>
              <motion.div
                className={styles.textBlock}
                style={{ opacity: headingOpacity, y: headingY }}
              >
                <h2 className={styles.heading}>
                  Essentials Worth Repeating.
                </h2>
              </motion.div>
            </motion.div>

            <motion.div
              className={styles.productRow}
              style={{ pointerEvents: rowPointerEvents }}
            >
              {products.map((product, i) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  index={i}
                  progress={progress}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
