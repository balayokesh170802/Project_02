"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import styles from "@/styles/pages/checkout.module.css";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout/confirmation");
    }, 900);
  };

  if (items.length === 0) {
    return (
      <div className={styles.emptyWrap}>
        <h1 className={styles.emptyHeading}>Nothing to Checkout</h1>
        <p className={styles.emptyText}>Your cart is empty.</p>
        <Link href="/products" className={styles.emptyCta}>
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Checkout</h1>

      <div className={styles.layout}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <section>
            <h2 className={styles.sectionTitle}>Shipping Address</h2>
            <div className={styles.fieldGrid}>
              <input required placeholder="Full Name" className={styles.field} />
              <input required type="email" placeholder="Email" className={styles.field} />
              <input required placeholder="Address" className={styles.field} />
              <input required placeholder="City" className={styles.fieldHalf} />
              <input required placeholder="Postal Code" className={styles.fieldHalf} />
              <input required placeholder="Country" className={styles.field} />
            </div>
          </section>

          <section>
            <h2 className={styles.sectionTitle}>Payment</h2>
            <p className={styles.demoNote}>
              This is a demo checkout — no real payment is processed.
            </p>
            <div className={styles.fieldGrid}>
              <input required placeholder="Card Number" className={styles.field} />
              <input required placeholder="MM/YY" className={styles.fieldHalf} />
              <input required placeholder="CVC" className={styles.fieldHalf} />
            </div>
          </section>

          <button type="submit" disabled={placing} className={styles.submitButton}>
            {placing ? "Placing Order..." : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        <div className={styles.summary}>
          <h2 className={styles.summaryTitle}>Order Summary</h2>
          <ul className={styles.summaryList}>
            {items.map((item) => (
              <li key={`${item.slug}-${item.size}-${item.color}`} className={styles.summaryListItem}>
                <span className={styles.summaryItemLabel}>
                  {item.name} ({item.size}/{item.color}) × {item.quantity}
                </span>
                <span className={styles.summaryItemValue}>
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.summaryRow}>
            <span className={styles.summaryLabel}>Subtotal</span>
            <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
          </div>
          <div className={styles.summaryRowTight}>
            <span className={styles.summaryLabel}>Shipping</span>
            <span className={styles.summaryValue}>${shipping.toFixed(2)}</span>
          </div>
          <div className={styles.summaryTotal}>
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
