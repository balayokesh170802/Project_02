"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight">Your Cart is Empty</h1>
        <p className="mt-4 text-neutral-500">
          Looks like you haven&apos;t added anything yet.
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

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold tracking-tight">Your Cart</h1>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {items.map((item) => (
            <div
              key={`${item.slug}-${item.size}-${item.color}`}
              className="flex gap-4 border-b border-neutral-200 pb-6"
            >
              <div className="relative h-28 w-24 flex-shrink-0 overflow-hidden bg-neutral-100">
                <Image src={item.image} alt={item.name} fill sizes="100px" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-2">
                  <div>
                    <Link
                      href={`/products/${item.slug}`}
                      className="font-medium text-neutral-900 hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-neutral-500">
                      Size: {item.size} · Color: {item.color}
                    </p>
                  </div>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-neutral-300">
                    <button
                      type="button"
                      className="px-3 py-1 text-lg"
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.color, item.quantity - 1)
                      }
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      className="px-3 py-1 text-lg"
                      onClick={() =>
                        updateQuantity(item.slug, item.size, item.color, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.slug, item.size, item.color)}
                    className="text-sm text-neutral-500 underline hover:text-neutral-900"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="h-fit border border-neutral-200 p-6">
          <h2 className="text-lg font-semibold">Order Summary</h2>
          <div className="mt-4 flex justify-between text-sm">
            <span className="text-neutral-500">Subtotal</span>
            <span className="font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span className="text-neutral-500">Shipping</span>
            <span className="font-medium">Calculated at checkout</span>
          </div>
          <div className="mt-4 flex justify-between border-t border-neutral-200 pt-4 text-base font-semibold">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link
            href="/checkout"
            className="mt-6 block bg-neutral-900 px-6 py-3 text-center text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-700"
          >
            Checkout
          </Link>
          <Link
            href="/products"
            className="mt-3 block text-center text-sm text-neutral-500 underline"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
