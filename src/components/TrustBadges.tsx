import Reveal from "@/components/Reveal";
import styles from "@/styles/components/TrustBadges.module.css";

const badges = [
  { icon: "🚚", title: "Free Shipping", desc: "On all orders over $75" },
  { icon: "↩", title: "Easy 30-Day Returns", desc: "No questions asked" },
  { icon: "🔒", title: "Secure Checkout", desc: "Encrypted & protected" },
  { icon: "✓", title: "Quality Guaranteed", desc: "Built to last, or your money back" },
];

export default function TrustBadges() {
  return (
    <section className={styles.section}>
      <div className={styles.grid}>
        {badges.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08} y={12}>
            <div className={styles.item}>
              <span className={styles.icon}>{b.icon}</span>
              <div>
                <p className={styles.title}>{b.title}</p>
                <p className={styles.desc}>{b.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
