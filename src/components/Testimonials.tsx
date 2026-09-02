import Image from "next/image";
import Reveal from "@/components/Reveal";

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
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={`h-4 w-4 ${i < rating ? "fill-amber-400" : "fill-neutral-200"}`}
        >
          <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-neutral-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="mb-12 text-center font-display text-3xl font-bold tracking-tight">
            What Our Customers Say
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="h-full border border-neutral-700 bg-neutral-800/50 p-6">
                <Stars rating={t.rating} />
                <p className="mt-4 text-sm leading-relaxed text-neutral-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full">
                    <Image src={t.avatar} alt={t.name} fill sizes="40px" className="object-cover" />
                  </div>
                  <span className="text-sm font-medium">{t.name}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
