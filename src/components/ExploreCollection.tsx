"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import styles from "@/styles/components/ExploreCollection.module.css";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function ExploreCollection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={item} className={styles.heading}>
            Essentials Worth Repeating.
          </motion.h2>
          <motion.p variants={item} className={styles.subtext}>
            Seven signature pieces engineered for daily rotation — considered
            fabrics, considered fit, zero excess.
          </motion.p>
          <motion.div variants={item}>
            <Link href="/products" className={`group ${styles.cta}`}>
              Explore Collection
              <span className={styles.arrow}>→</span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          className={styles.imageWrap}
        >
          <Image
            src="/rack.webp"
            alt="Rack of seven signature MASTER shirts and tees"
            width={1672}
            height={941}
            sizes="(min-width: 1024px) 1152px, 100vw"
            className={styles.image}
            priority={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
