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

const heights = ["h-72", "h-[24rem]", "h-[29rem]", "h-[24rem]", "h-72"];

export default function Hero() {
  const gallery = gallerySlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="relative isolate overflow-hidden bg-[#f5f1ea] pb-10 pt-12 sm:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgba(23,23,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.06)_1px,transparent_1px)] [background-size:12.5%_16.66%]"
      />

      <div className="pointer-events-none absolute left-6 top-24 hidden text-left lg:block xl:left-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
          Made for Everyday
        </p>
        <span className="mt-2 block h-px w-6 bg-neutral-400" />
      </div>

      <div className="pointer-events-none absolute right-6 top-24 hidden text-right lg:block xl:right-10">
        <p className="text-sm font-semibold tracking-wide text-neutral-900">Spring / Summer</p>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          2026
        </p>
        <span className="ml-auto mt-2 block h-px w-6 bg-neutral-400" />
      </div>

      <div className="pointer-events-none absolute bottom-16 left-6 hidden flex-col items-center gap-3 lg:flex xl:left-10">
        <span className="block h-10 w-px bg-neutral-400" />
        <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          Explore Collection
        </span>
      </div>

      <div className="pointer-events-none absolute bottom-16 right-6 hidden flex-col items-center gap-2 lg:flex xl:right-10">
        <span className="[writing-mode:vertical-rl] rotate-180 whitespace-nowrap text-[11px] font-medium uppercase tracking-[0.2em] text-neutral-500">
          Scroll to Explore
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="text-neutral-500"
        >
          ↓
        </motion.span>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl px-4 text-center"
      >
        <motion.p
          variants={item}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500"
        >
          New Season. New You.
        </motion.p>
        <motion.h1
          variants={item}
          className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
        >
          Level Up Your Look
          <br />
          With Fearless Fashion.
        </motion.h1>
        <motion.p variants={item} className="mt-4 text-sm text-neutral-600 sm:text-base sm:whitespace-nowrap">
          Clean lines. Neutral tones. Effortless design — pieces made to blend seamlessly into your everyday.
        </motion.p>
        <motion.div variants={item} className="mt-6">
          <Link
            href="/products"
            className="inline-block rounded-full bg-neutral-900 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-700"
          >
            Style It Now
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="mx-auto mt-10 flex max-w-6xl items-end justify-center gap-3 px-4 sm:gap-5"
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
