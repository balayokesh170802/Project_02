import BrandStory from "@/components/BrandStory";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us | MASTER Menswear",
};

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            About Us
          </p>
          <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
            Menswear built to outlast the season
          </h1>
          <p className="mt-6 text-neutral-600">
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
