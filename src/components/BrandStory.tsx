import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function BrandStory() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1000&h=750&fit=crop&q=80"
              alt="Craftsmanship behind MASTER menswear"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Our Story
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built on craft, not trends
          </h2>
          <p className="mt-4 text-neutral-600">
            MASTER started with a simple idea: menswear should be made well
            enough to outlast the season it was bought for. Every piece is
            selected for its fabric, construction, and fit — designed to earn
            a permanent place in your rotation, not just your closet.
          </p>
          <p className="mt-4 text-neutral-600">
            From breathable everyday shirting to outerwear that holds up
            through winter, we obsess over the details so you don&apos;t have
            to think twice about what you&apos;re wearing.
          </p>
          <Link
            href="/products"
            className="mt-6 inline-block border border-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Explore the Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
