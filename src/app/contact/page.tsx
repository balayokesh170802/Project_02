"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import styles from "@/styles/pages/contact.module.css";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className={styles.wrap}>
      <Reveal>
        <p className={styles.eyebrow}>Contact</p>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.text}>
          Questions about an order, sizing, or anything else? Send us a
          message and we&apos;ll get back to you.
        </p>

        {sent ? (
          <p className={styles.success}>
            Thanks for reaching out — this is a demo store, so no message was
            actually sent, but in a live store we&apos;d reply within 24 hours.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className={styles.form}
          >
            <input required placeholder="Full Name" className={styles.field} />
            <input required type="email" placeholder="Email" className={styles.field} />
            <textarea required placeholder="Message" rows={5} className={styles.field} />
            <button type="submit" className={styles.submit}>
              Send Message
            </button>
          </form>
        )}
      </Reveal>
    </div>
  );
}
