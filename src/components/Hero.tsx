"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { getProductBySlug } from "@/lib/products";
import styles from "@/styles/components/Hero.module.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

const gallerySlugs = [
  "denim-trucker-jacket",
  "classic-oxford-shirt",
  "chelsea-boots",
  "wool-blend-overcoat",
  "classic-analog-watch",
];

export default function Hero() {
  const gallery = gallerySlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const heightClasses = [
    styles.heightSm,
    styles.heightMd,
    styles.heightLg,
    styles.heightMd,
    styles.heightSm,
  ];

  return (
    <section className={styles.section}>
      <div aria-hidden className={styles.grid} />

      <div className={styles.labelTopLeft}>
        <p className={styles.labelTitle}>Made for Everyday</p>
        <span className={styles.dash} />
      </div>

      <div className={styles.labelTopRight}>
        <p className={styles.labelTopRightTitle}>Spring / Summer</p>
        <p className={styles.labelTopRightSub}>2026</p>
        <span className={styles.dashRight} />
      </div>

      <div className={styles.sideLeft}>
        <span className={styles.sideLine} />
        <span className={styles.verticalLabel}>Explore Collection</span>
      </div>

      <div className={styles.sideRight}>
        <span className={styles.verticalLabel}>Scroll to Explore</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className={styles.arrow}
        >
          ↓
        </motion.span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className={styles.textWrap}
      >
        <motion.p variants={item} className={styles.eyebrow}>
          New Season. New You.
        </motion.p>
        <motion.h1 variants={item} className={styles.heading}>
          Level Up Your Look
          <br />
          With Fearless Fashion.
        </motion.h1>
        <motion.p variants={item} className={styles.subtext}>
          Clean lines. Neutral tones. Effortless design — pieces made to blend seamlessly into your everyday.
        </motion.p>
        <motion.div variants={item} className={styles.ctaWrap}>
          <Link href="/products" className={styles.cta}>
            Style It Now
          </Link>
        </motion.div>
      </motion.div>

      <motion.div initial="hidden" animate="show" variants={container} className={styles.gallery}>
        {gallery.map((p, i) => (
          <motion.div key={p.slug} variants={item} className={`${styles.galleryItem} ${heightClasses[i]}`}>
            <Link href={`/products/${p.slug}`} className={`group ${styles.galleryLink}`}>
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="20vw"
                className={styles.galleryImage}
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
