"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/products";
import styles from "@/styles/components/AddToCart.module.css";

export default function AddToCart({ product }: { product: Product }) {
  const { addItem } = useCart();
  const router = useRouter();
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(product, size, color, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className={styles.wrap}>
      <div>
        <label className={styles.label}>Size</label>
        <div className={styles.optionRow}>
          {product.sizes.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSize(s)}
              className={`${styles.optionButton} ${
                size === s ? styles.optionButtonActive : styles.optionButtonInactive
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={styles.label}>Color</label>
        <div className={styles.optionRow}>
          {product.colors.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setColor(c)}
              className={`${styles.optionButton} ${
                color === c ? styles.optionButtonActive : styles.optionButtonInactive
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className={styles.label}>Quantity</label>
        <div className={styles.quantityRow}>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className={styles.quantityValue}>{quantity}</span>
          <button
            type="button"
            className={styles.quantityButton}
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <div className={styles.actions}>
        <button type="button" onClick={handleAdd} className={styles.addButton}>
          {added ? "Added ✓" : "Add to Cart"}
        </button>
        <button
          type="button"
          onClick={() => {
            addItem(product, size, color, quantity);
            router.push("/cart");
          }}
          className={styles.buyButton}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
