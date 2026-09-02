import Link from "next/link";

export default function ConfirmationPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl text-green-600">
        ✓
      </div>
      <h1 className="text-3xl font-bold tracking-tight">Order Placed!</h1>
      <p className="mt-4 text-neutral-500">
        Thank you for your order. This is a demo store, so no real charge was
        made and no email will be sent — but in a live store, a confirmation
        would be on its way to your inbox.
      </p>
      <Link
        href="/products"
        className="mt-8 inline-block bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-700"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
