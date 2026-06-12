import UpdatePasswordForm from "./update-password-form";

export const metadata = {
  title: "Update password",
};

export default function UpdatePasswordPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto grid w-full max-w-5xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-16">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
            Account security
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-5xl">
            Set a new password.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            Use this page after opening the secure password setup link from your
            email. Once saved, you can sign in with email and password.
          </p>
        </div>

        <UpdatePasswordForm />
      </section>
    </main>
  );
}
