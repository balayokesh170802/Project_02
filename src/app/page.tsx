import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductCard from "@/components/ProductCard";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import { categories, getFeaturedProducts, getNewProducts } from "@/lib/products";

export default function Home() {
  const featured = getFeaturedProducts();
  const newArrivals = getNewProducts();

  return (
    <div>
      <Hero />
      <TrustBadges />

      {/* Category grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight">Shop by Category</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.06}>
              <Link
                href={`/products/category/${c.slug}`}
                className="group relative block aspect-[4/5] overflow-hidden bg-neutral-900"
              >
                <Image
                  src={c.image}
                  alt={c.label}
                  fill
                  sizes="(min-width: 1024px) 16vw, 33vw"
                  className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-0 w-full text-center text-sm font-semibold uppercase tracking-wide text-white">
                  {c.label}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight">Featured Products</h2>
            <Link href="/products" className="text-sm font-medium underline underline-offset-4">
              View all
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <BrandStory />

      {/* New arrivals */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-display text-2xl font-bold tracking-tight">New Arrivals</h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <Testimonials />
      <Newsletter />
    </div>
  );
}
