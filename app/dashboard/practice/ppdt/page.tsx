import Image from "next/image";
import { redirect } from "next/navigation";
import { createClient } from "../../../_lib/supabase/server";

export const metadata = {
  title: "PPDT Picture Stories",
};

export const dynamic = "force-dynamic";

const PPDT_PROMPTS = [
  {
    id: 1,
    title: "PPDT Picture 1 - Flooded Road",
    image: "/ppdt/flooded-road.png",
    focus: "Observation, initiative, resource planning",
    themes: ["coordination", "problem solving", "public help"],
  },
  {
    id: 2,
    title: "PPDT Picture 2 - Railway Platform",
    image: "/ppdt/railway-platform.png",
    focus: "Helping behaviour, time pressure, responsibility",
    themes: ["initiative", "empathy", "travel"],
  },
  {
    id: 3,
    title: "PPDT Picture 3 - School Water Pump",
    image: "/ppdt/school-water-pump.png",
    focus: "Community action, student welfare, practical solution",
    themes: ["school", "community", "resourcefulness"],
  },
  {
    id: 4,
    title: "PPDT Picture 4 - Power Cut Lane",
    image: "/ppdt/power-cut-lane.png",
    focus: "Safety, calm leadership, local coordination",
    themes: ["safety", "leadership", "neighbourhood"],
  },
];

async function savePpdtStory(formData: FormData) {
  "use server";

  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  const pictureId = Number(formData.get("picture_id"));
  const prompt = PPDT_PROMPTS.find((item) => item.id === pictureId) ?? PPDT_PROMPTS[0];
  const story = String(formData.get("story") ?? "").trim();
  const selfScoreValue = String(formData.get("self_score") ?? "").trim();
  const themes = String(formData.get("themes") ?? "")
    .split(",")
    .map((theme) => theme.trim())
    .filter(Boolean);

  if (!story) {
    redirect("/dashboard/practice/ppdt");
  }

  await supabase.from("ppdt_attempts").insert({
    user_id: userData.user.id,
    picture_id: prompt.id,
    title: prompt.title,
    story,
    self_score: selfScoreValue ? Number(selfScoreValue) : null,
    themes: themes.length > 0 ? themes : prompt.themes,
  });

  redirect("/dashboard/practice");
}

export default async function DashboardPpdtPracticePage() {
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  const { data: attempts } = await supabase
    .from("ppdt_attempts")
    .select("id,title,completed_at,picture_id,self_score")
    .eq("user_id", userData.user.id)
    .order("completed_at", { ascending: false })
    .limit(4);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
            PPDT practice
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
            Black-and-white picture story prompts.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Pick a hazy picture, observe the scene, write a positive practical story,
            and save it into your dashboard tracker.
          </p>
        </div>
        <a href="/dashboard/practice" className="btn-secondary w-fit">
          Back to practice
        </a>
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {PPDT_PROMPTS.map((prompt) => (
          <article
            key={prompt.id}
            className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] shadow-[var(--shadow-card)]"
          >
            <div className="bg-[#111827] p-3">
              <Image
                src={prompt.image}
                alt={prompt.title}
                width={1680}
                height={945}
                className="aspect-video w-full rounded-md object-cover grayscale contrast-90"
              />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-extrabold text-[var(--color-ink-strong)]">
                    {prompt.title}
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--color-muted)]">
                    {prompt.focus}
                  </p>
                </div>
                <span className="rounded-md bg-[var(--color-surface)] px-3 py-1 text-xs font-extrabold text-[var(--color-blue)]">
                  Picture {prompt.id}
                </span>
              </div>

              <form action={savePpdtStory} className="mt-5 space-y-4">
                <input type="hidden" name="picture_id" value={prompt.id} />
                <label className="block">
                  <span className="text-sm font-extrabold text-[var(--color-ink-strong)]">
                    Your story
                  </span>
                  <textarea
                    name="story"
                    required
                    rows={7}
                    placeholder="Write the age, mood, action, obstacle, and realistic outcome..."
                    className="mt-2 min-h-40 w-full resize-y rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-bg)] p-4 text-sm font-semibold leading-7 text-[var(--color-ink-strong)] outline-none transition focus:border-[var(--color-blue)] focus:ring-4 focus:ring-blue-500/10"
                  />
                </label>

                <div className="grid gap-3 sm:grid-cols-[1fr_140px]">
                  <label className="block">
                    <span className="text-sm font-extrabold text-[var(--color-ink-strong)]">
                      Themes
                    </span>
                    <input
                      name="themes"
                      defaultValue={prompt.themes.join(", ")}
                      className="field-input mt-2"
                    />
                  </label>
                  <label className="block">
                    <span className="text-sm font-extrabold text-[var(--color-ink-strong)]">
                      Self score
                    </span>
                    <input
                      name="self_score"
                      type="number"
                      min="1"
                      max="10"
                      placeholder="1-10"
                      className="field-input mt-2"
                    />
                  </label>
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  Save PPDT story
                </button>
              </form>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-5">
        <h2 className="text-lg font-extrabold text-[var(--color-ink-strong)]">
          Recent PPDT attempts
        </h2>
        {attempts && attempts.length > 0 ? (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {attempts.map((attempt) => (
              <div
                key={attempt.id}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-4"
              >
                <p className="font-extrabold text-[var(--color-ink-strong)]">{attempt.title}</p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-muted)]">
                  Picture {attempt.picture_id ?? "-"} · Score {attempt.self_score ?? "-"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            No PPDT stories saved yet. Pick one picture above and write your first story.
          </p>
        )}
      </div>
    </section>
  );
}
