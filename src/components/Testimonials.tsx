import Image from "next/image";
import Reveal from "@/components/Reveal";
import styles from "@/styles/components/Testimonials.module.css";

const testimonials = [
  {
    name: "James R.",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote:
      "The Oxford shirt fits perfectly and the fabric feels like it'll outlast everything else in my closet. Ordering two more.",
    rating: 5,
  },
  {
    name: "Daniel K.",
    avatar: "https://i.pravatar.cc/150?img=33",
    quote:
      "Finally a chino that doesn't stretch out after a few wears. Sizing was spot on and shipping was fast.",
    rating: 5,
  },
  {
    name: "Marcus T.",
    avatar: "https://i.pravatar.cc/150?img=51",
    quote:
      "The denim jacket is exactly what I wanted — heavyweight, well-stitched, and it only gets better with age.",
    rating: 4,
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={i < rating ? styles.starFilled : styles.starEmpty}>
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <h2 className={styles.heading}>What Our Customers Say</h2>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className={styles.card}>
                <Stars rating={t.rating} />
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.person}>
                  <div className={styles.avatar}>
                    <Image src={t.avatar} alt={t.name} fill sizes="40px" className={styles.avatarImage} />
                  </div>
                  <span className={styles.name}>{t.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
