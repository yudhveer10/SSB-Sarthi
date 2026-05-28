// app/screening/oir/page.tsx
import OirQuiz from "../_components/oir-quiz";
 
export const metadata = {
  title: "OIR Quiz — SSB Sarthi",
  description: "Practice the Officer Intelligence Rating test with timed verbal and non-verbal questions.",
};
 
export default function OirPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto w-full max-w-5xl px-4 pt-8 sm:px-8 lg:px-10">
        <OirQuiz />
      </section>
    </main>
  );
}

