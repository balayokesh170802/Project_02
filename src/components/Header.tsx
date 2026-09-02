"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { categories } from "@/lib/products";
import { useCart } from "@/lib/cart-context";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Shop", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c1.5-4 5-6 8-6s6.5 2 8 6" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M6 8h12l-1 12H7L6 8z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 016 0v2" strokeLinecap="round" />
    </svg>
  );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const { itemCount } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) searchInputRef.current?.focus();
  }, [searchOpen]);

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/products?q=${encodeURIComponent(query.trim())}`);
    setSearchOpen(false);
    setQuery("");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-[#f5f1ea] text-neutral-900">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-display text-xl font-extrabold tracking-tight">
          MASTER
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative pb-0.5 transition-colors hover:text-neutral-600 ${
                pathname === l.href ? "underline underline-offset-4" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setCollectionsOpen(true)}
            onMouseLeave={() => setCollectionsOpen(false)}
          >
            <Link href="/products" className="pb-0.5 transition-colors hover:text-neutral-600">
              Collections
            </Link>
            <AnimatePresence>
              {collectionsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full z-10 mt-2 w-48 -translate-x-1/2 border border-neutral-200 bg-white py-2 shadow-lg"
                >
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/products/category/${c.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-neutral-50"
                    >
                      {c.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-5">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((o) => !o)}
            className="hover:text-neutral-600"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
          <Link href="/account" aria-label="Account" className="hover:text-neutral-600">
            <UserIcon className="h-5 w-5" />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:text-neutral-600">
            <BagIcon className="h-5 w-5" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  key={itemCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 20 }}
                  className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-bold text-white"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="hover:text-neutral-600"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-neutral-200"
          >
            <form onSubmit={submitSearch} className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
              <input
                ref={searchInputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border-b border-neutral-400 bg-transparent py-2 text-lg outline-none placeholder:text-neutral-400"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-neutral-200"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-sm font-medium sm:px-6 lg:px-8">
              {navLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-2" onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              ))}
              <p className="mt-2 pt-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Collections
              </p>
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/products/category/${c.slug}`}
                  className="py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
