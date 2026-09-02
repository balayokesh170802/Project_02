"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push("/checkout/confirmation");
    }, 900);
  };

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Nothing to Checkout</h1>
        <p className="mt-4 text-neutral-500">Your cart is empty.</p>
        <Link
          href="/products"
          className="mt-8 inline-block bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-700"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Checkout</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <form onSubmit={handleSubmit} className="space-y-8 lg:col-span-2">
          <section>
            <h2 className="mb-4 text-lg font-semibold">Shipping Address</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Full Name" className="border border-neutral-300 px-3 py-2 text-sm sm:col-span-2" />
              <input required type="email" placeholder="Email" className="border border-neutral-300 px-3 py-2 text-sm sm:col-span-2" />
              <input required placeholder="Address" className="border border-neutral-300 px-3 py-2 text-sm sm:col-span-2" />
              <input required placeholder="City" className="border border-neutral-300 px-3 py-2 text-sm" />
              <input required placeholder="Postal Code" className="border border-neutral-300 px-3 py-2 text-sm" />
              <input required placeholder="Country" className="border border-neutral-300 px-3 py-2 text-sm sm:col-span-2" />
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-lg font-semibold">Payment</h2>
            <p className="mb-4 text-sm text-neutral-500">
              This is a demo checkout — no real payment is processed.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Card Number" className="border border-neutral-300 px-3 py-2 text-sm sm:col-span-2" />
              <input required placeholder="MM/YY" className="border border-neutral-300 px-3 py-2 text-sm" />
              <input required placeholder="CVC" className="border border-neutral-300 px-3 py-2 text-sm" />
            </div>
          </section>

          <button
            type="submit"
            disabled={placing}
            className="w-full bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-700 disabled:opacity-60"
          >
            {placing ? "Placing Order..." : `Place Order — $${total.toFixed(2)}`}
          </button>
        </form>

        <div className="h-fit border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {items.map((item) => (
              <li key={`${item.slug}-${item.size}-${item.color}`} className="flex justify-between">
                <span className="text-neutral-600">
                  {item.name} ({item.size}/{item.color}) × {item.quantity}
                </span>
                <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4 text-sm">
            <span className="text-neutral-500">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-neutral-500">Shipping</span>
            <span className="font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4 text-base font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
