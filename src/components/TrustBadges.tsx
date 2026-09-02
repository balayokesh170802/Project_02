import Reveal from "@/components/Reveal";

const badges = [
  { icon: "🚚", title: "Free Shipping", desc: "On all orders over $75" },
  { icon: "↩", title: "Easy 30-Day Returns", desc: "No questions asked" },
  { icon: "🔒", title: "Secure Checkout", desc: "Encrypted & protected" },
  { icon: "✓", title: "Quality Guaranteed", desc: "Built to last, or your money back" },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {badges.map((b, i) => (
          <Reveal key={b.title} delay={i * 0.08} y={12}>
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
              <span className="text-2xl">{b.icon}</span>
              <div>
                <p className="text-sm font-semibold text-neutral-900">{b.title}</p>
                <p className="text-xs text-neutral-500">{b.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
