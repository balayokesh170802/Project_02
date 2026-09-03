"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import styles from "@/styles/components/ProductGallery.module.css";

export default function ProductGallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.wrap}>
      <div className={styles.mainImageWrap}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={styles.mainImageMotion}
          >
            <Image
              src={images[active]}
              alt={name}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.mainImage}
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.thumbGrid}>
        {images.map((img, i) => (
          <button
            key={img + i}
            type="button"
            onClick={() => setActive(i)}
            className={`${styles.thumb} ${active === i ? styles.thumbActive : styles.thumbInactive}`}
          >
            <Image src={img} alt={`${name} ${i + 1}`} fill sizes="200px" className={styles.thumbImage} />
          </button>
        ))}
      </div>
    </div>
  );
}
