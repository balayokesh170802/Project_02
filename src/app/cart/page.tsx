"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import styles from "@/styles/pages/cart.module.css";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className={styles.emptyWrap}>
        <h1 className={styles.emptyHeading}>Your Cart is Empty</h1>
        <p className={styles.emptyText}>
          Looks like you haven&apos;t added anything yet.
        </p>
        <Link href="/products" className={styles.emptyCta}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Your Cart</h1>

      <div className={styles.layout}>
        <div className={styles.items}>
          {items.map((item) => (
            <div key={`${item.slug}-${item.size}-${item.color}`} className={styles.item}>
              <div className={styles.itemImage}>
                <Image src={item.image} alt={item.name} fill sizes="100px" className={styles.itemImageEl} />
              </div>
              <div className={styles.itemBody}>
                <div className={styles.itemTop}>
                  <div>
                    <Link href={`/products/${item.slug}`} className={styles.itemName}>
                      {item.name}
                    </Link>
                    <p className={styles.itemMeta}>
                      Size: {item.size} · Color: {item.color}
                    </p>
                  </div>
                  <span className={styles.itemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className={styles.itemBottom}>
                  <div className={styles.quantityRow}>
                    <button
                      type="button"
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.color, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      type="button"
                      className={styles.quantityButton}
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.color, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug, item.size, item.color)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Subtotal</span>
            <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRowTight}>
            <span className={styles.summaryLabel}>Shipping</span>
            <span className={styles.summaryValue}>Calculated at checkout</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link href="/checkout" className={styles.checkoutButton}>
            Checkout
          </Link>
          <Link href="/products" className={styles.continueLink}>
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
