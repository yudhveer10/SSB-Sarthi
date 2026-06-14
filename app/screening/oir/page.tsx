import { redirect } from "next/navigation";
import OirQuiz from "../../_components/oir-quiz";
import { createClient } from "../../_lib/supabase/server";

export const metadata = {
  title: "OIR Quiz | SSB Sarthi",
  description: "Attempt the Officer Intelligence Rating practice test inside your SSB Sarthi account.",
};

export const dynamic = "force-dynamic";

export default async function OirPage() {
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  return (
    <main className="pb-20">
      <section className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-8 lg:px-10">
        <OirQuiz />
      </section>
    </main>
  );
}
