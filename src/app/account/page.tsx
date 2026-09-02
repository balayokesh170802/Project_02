import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Account | MASTER Menswear",
};

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-24 text-center sm:px-6 lg:px-8">
      <Reveal>
        <h1 className="font-display text-3xl tracking-tight">Accounts, Coming Soon</h1>
        <p className="mt-4 text-neutral-500">
          Sign-in and order history aren&apos;t wired up in this demo store
          yet — check back soon.
        </p>
      </Reveal>
    </div>
  );
}
