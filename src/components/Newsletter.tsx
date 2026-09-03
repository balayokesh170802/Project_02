"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import styles from "@/styles/components/Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <h2 className={styles.heading}>Stay in the Loop</h2>
          <p className={styles.subtext}>
            Get 10% off your first order and early access to new drops.
          </p>
          {submitted ? (
            <p className={styles.success}>
              Thanks for subscribing — check your inbox for your code.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className={styles.form}
            >
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className={styles.input}
              />
              <button type="submit" className={styles.button}>
                Subscribe
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
