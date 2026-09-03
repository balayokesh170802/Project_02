import BrandStory from "@/components/BrandStory";
import Reveal from "@/components/Reveal";
import styles from "@/styles/pages/about.module.css";

export const metadata = {
  title: "About Us | MASTER Menswear",
};

export default function AboutPage() {
  return (
    <div>
      <section className={styles.intro}>
        <Reveal>
          <p className={styles.eyebrow}>About Us</p>
          <h1 className={styles.heading}>Menswear built to outlast the season</h1>
          <p className={styles.text}>
            MASTER is a menswear label for people who&apos;d rather buy once
            and wear it for years. We work with mills and makers who care
            about fabric weight, stitching, and fit as much as we do — so
            every shirt, jacket, and pair of boots we sell earns its place in
            your rotation.
          </p>
        </Reveal>
      </section>
      <BrandStory />
    </div>
  );
}
