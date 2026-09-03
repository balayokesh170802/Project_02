import Link from "next/link";
import { categories } from "@/lib/products";
import styles from "@/styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <h3 className={styles.brandTitle}>MASTER</h3>
          <p className={styles.brandText}>
            Modern menswear essentials, built to last. Shirts, outerwear, footwear
            and accessories for every day.
          </p>
        </div>
        <div>
          <h4 className={styles.heading}>Shop</h4>
          <ul className={styles.list}>
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/category/${c.slug}`} className={styles.link}>
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className={styles.heading}>Help</h4>
          <ul className={styles.list}>
            <li>
              <Link href="/cart" className={styles.link}>
                Your Cart
              </Link>
            </li>
            <li>
              <Link href="/products" className={styles.link}>
                All Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        © {new Date().getFullYear()} MASTER Menswear. All rights reserved.
      </div>
    </footer>
  );
}
