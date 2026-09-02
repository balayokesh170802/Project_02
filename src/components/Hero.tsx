"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { getProductBySlug } from "@/lib/products";

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

const heights = ["h-56", "h-72", "h-[22rem]", "h-72", "h-56"];

export default function Hero() {
  const gallery = gallerySlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="bg-[#f5f1ea] pb-16 pt-16 sm:pt-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl px-4 text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          New Season. New You.
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-5xl uppercase leading-[0.95] tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl"
        >
          Elevate Your Look
          <br />
          With Timeless Craft.
        </motion.h1>
        <motion.p variants={item} className="mx-auto mt-6 max-w-xl text-neutral-600">
          Clean cuts. Quality fabric. Effortless style — pieces built to blend
          seamlessly into your everyday.
        </motion.p>
        <motion.div variants={item} className="mt-8">
          <Link
            href="/products"
            className="inline-block rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            Shop It Now
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto mt-16 flex max-w-6xl items-end justify-center gap-3 px-4 sm:gap-5"
      >
        {gallery.map((p, i) => (
          <motion.div key={p.slug} variants={item} className={`w-1/5 ${heights[i]}`}>
            <Link
              href={`/products/${p.slug}`}
              className="group relative block h-full w-full overflow-hidden rounded-t-2xl bg-neutral-200"
            >
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="20vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
