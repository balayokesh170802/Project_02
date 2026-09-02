import Link from "next/link";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
        <div>
          <h3 className="mb-3 font-display text-lg font-bold tracking-widest text-white">MASTER</h3>
          <p className="text-sm text-neutral-400">
            Modern menswear essentials, built to last. Shirts, outerwear, footwear
            and accessories for every day.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Shop
          </h4>
          <ul className="space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/category/${c.slug}`} className="hover:text-white">
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Help
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/cart" className="hover:text-white">
                Your Cart
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white">
                All Products
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} MASTER Menswear. All rights reserved.
      </div>
    </footer>
  );
}
