import { redirect } from "next/navigation";
import OirQuiz from "../../../_components/oir-quiz";
import { createClient } from "../../../_lib/supabase/server";

export const metadata = {
  title: "OIR Practice",
};

export const dynamic = "force-dynamic";

export default async function DashboardOirPracticePage() {
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  return (
    <section className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
      <OirQuiz backHref="/dashboard/practice" />
    </section>
  );
}
