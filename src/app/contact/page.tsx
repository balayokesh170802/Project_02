"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
          Contact
        </p>
        <h1 className="font-display text-4xl tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-neutral-600">
          Questions about an order, sizing, or anything else? Send us a
          message and we&apos;ll get back to you.
        </p>

        {sent ? (
          <p className="mt-10 text-sm font-medium text-neutral-900">
            Thanks for reaching out — this is a demo store, so no message was
            actually sent, but in a live store we&apos;d reply within 24 hours.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="mt-10 space-y-4"
          >
            <input required placeholder="Full Name" className="w-full border border-neutral-300 px-3 py-2.5 text-sm" />
            <input required type="email" placeholder="Email" className="w-full border border-neutral-300 px-3 py-2.5 text-sm" />
            <textarea required placeholder="Message" rows={5} className="w-full border border-neutral-300 px-3 py-2.5 text-sm" />
            <button
              type="submit"
              className="bg-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-neutral-700"
            >
              Send Message
            </button>
          </form>
        )}
      </Reveal>
    </div>
  );
}
