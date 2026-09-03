import Link from "next/link";
import styles from "@/styles/pages/checkout-confirmation.module.css";

export default function ConfirmationPage() {
  return (
    <div className={styles.wrap}>
      <div className={styles.iconCircle}>✓</div>
      <h1 className={styles.heading}>Order Placed!</h1>
      <p className={styles.text}>
        Thank you for your order. This is a demo store, so no real charge was
        made and no email will be sent — but in a live store, a confirmation
        would be on its way to your inbox.
      </p>
      <Link href="/products" className={styles.cta}>
        Continue Shopping
      </Link>
    </div>
  );
}
