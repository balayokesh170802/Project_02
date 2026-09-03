import Reveal from "@/components/Reveal";
import styles from "@/styles/pages/account.module.css";

export const metadata = {
  title: "Account | MASTER Menswear",
};

export default function AccountPage() {
  return (
    <div className={styles.wrap}>
      <Reveal>
        <h1 className={styles.heading}>Accounts, Coming Soon</h1>
        <p className={styles.text}>
          Sign-in and order history aren&apos;t wired up in this demo store
          yet — check back soon.
        </p>
      </Reveal>
    </div>
  );
}
