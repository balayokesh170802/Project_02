import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import styles from "@/styles/components/BrandStory.module.css";

export default function BrandStory() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        <Reveal>
          <div className={styles.imageWrap}>
            <Image
              src="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=1000&h=750&fit=crop&q=80"
              alt="Craftsmanship behind MASTER menswear"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={styles.image}
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className={styles.eyebrow}>Our Story</p>
          <h2 className={styles.heading}>Built on craft, not trends</h2>
          <p className={styles.text}>
            MASTER started with a simple idea: menswear should be made well
            enough to outlast the season it was bought for. Every piece is
            selected for its fabric, construction, and fit — designed to earn
            a permanent place in your rotation, not just your closet.
          </p>
          <p className={styles.text}>
            From breathable everyday shirting to outerwear that holds up
            through winter, we obsess over the details so you don&apos;t have
            to think twice about what you&apos;re wearing.
          </p>
          <Link href="/products" className={styles.cta}>
            Explore the Collection
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
