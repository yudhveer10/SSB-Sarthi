// app/screening/page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";

// ── PPDT Picture Dataset (40 pictures described as scene prompts) ──────────────
// Each entry has an id, a title, a scene description, suggested themes, and a difficulty tag.
// In a real app these would be actual images; here we render illustrated scene cards.

const PPDT_PICTURES = [
  { id: 1, title: "Bridge in Fog", scene: "A lone figure stands at the edge of a partially collapsed rope bridge over a deep ravine. Dense fog below. Distant sound of rushing water.", themes: ["Courage", "Decision-making", "Rescue"], difficulty: "Medium", color: "#0369a1" },
  { id: 2, title: "Crowded Market Fire", scene: "Smoke rising from a stall in a crowded market. Vendors and customers look alarmed. A child is separated from parents nearby.", themes: ["Leadership", "Crisis management", "Teamwork"], difficulty: "Hard", color: "#be123c" },
  { id: 3, title: "Stranded Boat", scene: "A small fishing boat is stranded on rocks near a rocky coastline. Three fishermen signal for help. A coast guard vessel is visible far in the distance.", themes: ["Rescue", "Resourcefulness", "Coordination"], difficulty: "Easy", color: "#1d6b40" },
  { id: 4, title: "Village Flood", scene: "Floodwater has entered a village. An elderly woman is on the roof of a house. A group of young men on a makeshift raft approach.", themes: ["Empathy", "Action", "Community"], difficulty: "Medium", color: "#7c3aed" },
  { id: 5, title: "Forest Path Crossroads", scene: "Two people stand at a fork in a dense forest trail. One path is clear; the other is overgrown but has a distant light source. A storm is approaching.", themes: ["Leadership", "Judgement", "Risk"], difficulty: "Easy", color: "#b45309" },
  { id: 6, title: "Collapsed Building", scene: "Part of a building has collapsed after an earthquake. Bystanders have gathered. A faint voice is heard from under the rubble. Emergency services have not arrived.", themes: ["First response", "Courage", "Organisation"], difficulty: "Hard", color: "#be123c" },
  { id: 7, title: "Mountain Climbers", scene: "A team of four climbers is near the summit. One has slipped and is hanging from a rope. The weather is worsening fast.", themes: ["Teamwork", "Pressure", "Decision"], difficulty: "Hard", color: "#0369a1" },
  { id: 8, title: "School Examination Hall", scene: "Students are writing an exam. One student is seen passing a cheat sheet. The invigilator has stepped out briefly.", themes: ["Integrity", "Values", "Peer pressure"], difficulty: "Easy", color: "#1d6b40" },
  { id: 9, title: "Night Patrol", scene: "A soldier on night patrol spots a suspicious figure near a perimeter fence. His radio has lost signal. His partner is 500 metres away.", themes: ["Alertness", "Protocol", "Initiative"], difficulty: "Medium", color: "#0369a1" },
  { id: 10, title: "Hospital Power Failure", scene: "A hospital corridor is in darkness. A patient on life support is in a room nearby. Two nurses are visible. A generator room is down the hall.", themes: ["Crisis response", "Priority", "Calmness"], difficulty: "Hard", color: "#7c3aed" },
  { id: 11, title: "Sports Injury on Field", scene: "A player collapses during a match. The crowd is tense. The team captain looks toward the coach. No medical staff is on the field yet.", themes: ["Leadership", "Care", "Composure"], difficulty: "Easy", color: "#1d6b40" },
  { id: 12, title: "Desert Breakdown", scene: "A military convoy vehicle has broken down in a desert. The main convoy has moved ahead. Two soldiers are assessing the engine. Sun is high. Water supply is low.", themes: ["Resourcefulness", "Teamwork", "Survival"], difficulty: "Medium", color: "#b45309" },
  { id: 13, title: "Protest at Gate", scene: "A large group of people has gathered at the gate of a factory. Signs suggest a wage dispute. The factory manager is seen in the window. Police have not arrived.", themes: ["Negotiation", "Empathy", "Judgement"], difficulty: "Medium", color: "#be123c" },
  { id: 14, title: "River Crossing", scene: "A group of NCC cadets is attempting to cross a swollen river using a rope system. One cadet is struggling mid-way. The bank on both sides is crowded with onlookers.", themes: ["Courage", "Group dynamics", "Initiative"], difficulty: "Hard", color: "#0369a1" },
  { id: 15, title: "Abandoned Child", scene: "A small child sits alone near a bus stand with a torn bag. Passengers are boarding a bus. A shopkeeper is watching from across the road.", themes: ["Responsibility", "Compassion", "Action"], difficulty: "Easy", color: "#1d6b40" },
  { id: 16, title: "Laboratory Accident", scene: "A flask has spilled in a research lab. Smoke is rising. One scientist is coughing near a vent. Others are backing away. A fire extinguisher is on the wall nearby.", themes: ["Presence of mind", "Safety", "Leadership"], difficulty: "Medium", color: "#7c3aed" },
  { id: 17, title: "Train Platform Chaos", scene: "A crowded train platform. Someone has fainted near the tracks. The train is approaching. Bystanders are frozen.", themes: ["Quick thinking", "Courage", "Crowd management"], difficulty: "Hard", color: "#be123c" },
  { id: 18, title: "Election Day", scene: "A long queue at a polling booth. An elderly woman is struggling in the heat. A political argument has broken out near the booth entrance. Police are at a distance.", themes: ["Civic duty", "Calmness", "Respect"], difficulty: "Easy", color: "#b45309" },
  { id: 19, title: "Campfire at Night", scene: "A group of trekkers sits around a campfire. One person is missing. Tracks in the mud lead into the dark forest. Mobile signal is absent.", themes: ["Leadership", "Calm under pressure", "Initiative"], difficulty: "Medium", color: "#0369a1" },
  { id: 20, title: "Border Outpost", scene: "A small border outpost at dusk. Unusual movement is detected beyond the fence. The commanding officer is asleep. One sentry sees what looks like torchlight in the hills.", themes: ["Alertness", "Duty", "Decision-making"], difficulty: "Hard", color: "#1d6b40" },
  { id: 21, title: "Scholarship Interview", scene: "A nervous young student is being interviewed for a scholarship. The interviewers look stern. A phone rings in the room, creating a distraction.", themes: ["Composure", "Confidence", "Communication"], difficulty: "Easy", color: "#7c3aed" },
  { id: 22, title: "Sinking Rowboat", scene: "A rowboat with four people is taking on water in a lake. Two people can swim. One elderly passenger is panicking. The shore is 80 metres away.", themes: ["Rescue", "Calm", "Prioritisation"], difficulty: "Medium", color: "#0369a1" },
  { id: 23, title: "Construction Site Accident", scene: "A worker has fallen from scaffolding and is lying on the ground at a construction site. Other workers have gathered. The site supervisor is running toward the scene.", themes: ["First aid", "Leadership", "Response"], difficulty: "Hard", color: "#be123c" },
  { id: 24, title: "Child Down a Well", scene: "Villagers are crowded around an old open well. A child has fallen inside. Rope is available. The well is narrow. Evening light is fading.", themes: ["Rescue", "Planning", "Courage"], difficulty: "Hard", color: "#b45309" },
  { id: 25, title: "Broken Dam Wall", scene: "A hairline crack is visible in a small dam. The village downstream is unaware. Two engineers are arguing over the severity. Water level is rising.", themes: ["Urgency", "Decision", "Leadership"], difficulty: "Hard", color: "#be123c" },
  { id: 26, title: "Exam Result Day", scene: "Students are gathered outside a notice board where results have just been posted. Some are celebrating; one is sitting alone with head in hands. Friends are unsure how to react.", themes: ["Empathy", "Support", "Human connection"], difficulty: "Easy", color: "#1d6b40" },
  { id: 27, title: "Animal Escape at Zoo", scene: "A large enclosure gate has been accidentally left open at a zoo. A crowd is nearby. A zookeeper is on the phone. A second zookeeper is trying to direct visitors away.", themes: ["Emergency response", "Crowd control", "Calm"], difficulty: "Medium", color: "#7c3aed" },
  { id: 28, title: "Stranded on Highway", scene: "A family car has broken down on a highway at night. Headlights of trucks are visible approaching. No spare tyre. Mobile phone battery is low.", themes: ["Resourcefulness", "Safety", "Decision"], difficulty: "Medium", color: "#0369a1" },
  { id: 29, title: "Scout Troop in Trouble", scene: "A group of scouts has taken a wrong trail and is lost in hilly terrain. Light is fading. One scout is injured. The troop leader is consulting a torn map.", themes: ["Navigation", "Leadership", "Teamwork"], difficulty: "Medium", color: "#b45309" },
  { id: 30, title: "Data Centre Alert", scene: "Red warning lights are flashing on servers in a data centre. A technician is staring at the screen with a confused look. A second technician has just arrived. The facility manages critical infrastructure.", themes: ["Technical response", "Calm", "Coordination"], difficulty: "Hard", color: "#be123c" },
  { id: 31, title: "Classroom Argument", scene: "Two students have gotten into a heated argument in a classroom. Other students are watching. The teacher has stepped out. Books have fallen to the floor.", themes: ["Conflict resolution", "Maturity", "Initiative"], difficulty: "Easy", color: "#1d6b40" },
  { id: 32, title: "Wildfire on Ridge", scene: "Smoke is visible from a ridge above a small town. Fire is spreading toward a forest area. Firefighters are visible in the distance. Residents are beginning to move out.", themes: ["Evacuation", "Coordination", "Urgency"], difficulty: "Hard", color: "#b45309" },
  { id: 33, title: "Medical Camp in Village", scene: "A doctor at a rural medical camp is overwhelmed with patients. A child with high fever is brought in. Medicine stocks are running low. A second doctor has been called but not arrived.", themes: ["Prioritisation", "Calm", "Service"], difficulty: "Medium", color: "#0369a1" },
  { id: 34, title: "Night Trekking Mishap", scene: "A group of friends on a night trek hears a loud noise in the dark. One person's torch has died. A figure is seen ahead. The trail narrows to a rocky ledge.", themes: ["Courage", "Composure", "Teamwork"], difficulty: "Medium", color: "#7c3aed" },
  { id: 35, title: "Airport Lost & Found", scene: "A child is crying at an airport. An announcement is playing. A security guard is nearby but busy with a crowd. The child is holding half a boarding pass.", themes: ["Compassion", "Initiative", "Problem-solving"], difficulty: "Easy", color: "#1d6b40" },
  { id: 36, title: "Old Bridge Collapse Warning", scene: "An engineer is putting up a warning sign on an old bridge. Vehicles are still crossing. A school bus is approaching. There is no alternate route visible.", themes: ["Urgency", "Decision", "Responsibility"], difficulty: "Hard", color: "#be123c" },
  { id: 37, title: "Underwater Pipeline Leak", scene: "Divers are near an underwater pipeline. One diver signals urgently. Oil is beginning to surface. A boat above has not received the signal yet.", themes: ["Communication", "Urgency", "Environmental response"], difficulty: "Hard", color: "#0369a1" },
  { id: 38, title: "Injured Street Dog", scene: "A badly injured street dog is lying near a busy road. Passersby are avoiding it. A young student stops and looks uncertain. A vet clinic sign is visible two blocks away.", themes: ["Empathy", "Action", "Compassion"], difficulty: "Easy", color: "#1d6b40" },
  { id: 39, title: "Sandstorm Approaching", scene: "A sandstorm is visible on the horizon. A group of soldiers is setting up camp in the open desert. Vehicles are visible. The storm will arrive in minutes.", themes: ["Preparedness", "Teamwork", "Quick action"], difficulty: "Medium", color: "#b45309" },
  { id: 40, title: "Rooftop Solar Fire", scene: "Smoke is rising from solar panels on the roof of a residential building. Residents below are unaware. A teenager on the adjacent terrace has spotted it. Fire brigade number is unknown.", themes: ["Alertness", "Initiative", "Crisis response"], difficulty: "Hard", color: "#be123c" },
];

const DIFF_COLOR: Record<string, string> = {
  Easy: "#1d6b40",
  Medium: "#b45309",
  Hard: "#be123c",
};

// ─────────────────────────────────────────────────────────────────────────────

export default function ScreeningPage() {
  const [ppdtOpen, setPpdtOpen] = useState(false);
  const [selectedPic, setSelectedPic] = useState<(typeof PPDT_PICTURES)[0] | null>(null);
  const [filter, setFilter] = useState<"All" | "Easy" | "Medium" | "Hard">("All");

  const filtered = filter === "All" ? PPDT_PICTURES : PPDT_PICTURES.filter((p) => p.difficulty === filter);

  return (
    <main className="pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(220,240,255,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(3,105,161,0.16),transparent_68%)]" />
          <div className="absolute left-0 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(29,107,64,0.12),transparent_70%)]" />
          <div className="relative">
            <div className="flex items-center gap-3 mb-5">
              <Link
                href="/resources"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-ink-strong)]"
              >
                ← Resources
              </Link>
              <span className="text-[var(--color-muted)] opacity-40">/</span>
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)]">
                Screening Practice
              </span>
            </div>
            <h1 className="font-display text-4xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)] sm:text-5xl">
              Day 1 — Screening Practice
            </h1>
            <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
              Two things determine if you make it past Day 1: your OIR score and your PPDT narration. Practice both below.
            </p>
          </div>
        </div>
      </section>

      {/* ── Practice cards ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-8 sm:px-10 lg:px-12">
        <div className="grid gap-5 md:grid-cols-2">

          {/* OIR Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(219,239,255,0.90))] p-7 shadow-[var(--shadow-card)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(3,105,161,0.18),transparent_70%)]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex rounded-full bg-[#0369a1]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#0369a1]">
                  Timed Test
                </span>
                <span className="inline-flex rounded-full bg-[#0369a1]/08 border border-[#0369a1]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0369a1]/70">
                  50 Questions
                </span>
              </div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-3xl">
                OIR Practice Test
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Two timed papers — Verbal and Non-Verbal — 25 questions each, 17 minutes per paper. Mirrors the actual OIR format used at all SSB centres.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "Paper 1", desc: "Verbal" },
                  { label: "Paper 2", desc: "Non-Verbal" },
                  { label: "17 min", desc: "Per paper" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#0369a1]/07 px-3 py-2.5 text-center">
                    <p className="text-base font-bold text-[#0369a1]">{s.label}</p>
                    <p className="text-[10px] text-[var(--color-muted)] font-medium">{s.desc}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/screening/oir"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#0369a1,#0284c7)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(3,105,161,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(3,105,161,0.36)]"
              >
                Start OIR Test →
              </Link>
            </div>
          </div>

          {/* PPDT Card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.97),rgba(220,252,231,0.88))] p-7 shadow-[var(--shadow-card)]">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(29,107,64,0.16),transparent_70%)]" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex rounded-full bg-[#1d6b40]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#1d6b40]">
                  Picture Practice
                </span>
                <span className="inline-flex rounded-full bg-[#1d6b40]/08 border border-[#1d6b40]/20 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1d6b40]/70">
                  40 Scenes
                </span>
              </div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-3xl">
                PPDT Picture Sets
              </h2>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                40 scene descriptions across Easy, Medium, and Hard difficulty levels. Each card shows the scene, suggested themes, and coaching tips for narration.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 mb-6">
                {[
                  { label: "40", desc: "Scenes" },
                  { label: "3", desc: "Difficulty levels" },
                  { label: "4 min", desc: "Per narration" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl bg-[#1d6b40]/07 px-3 py-2.5 text-center">
                    <p className="text-base font-bold text-[#1d6b40]">{s.label}</p>
                    <p className="text-[10px] text-[var(--color-muted)] font-medium">{s.desc}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setPpdtOpen(true)}
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#1d6b40,#16a34a)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(29,107,64,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(29,107,64,0.36)]"
              >
                Browse Picture Sets →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect note ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-8 sm:px-10 lg:px-12">
        <div className="rounded-[1.8rem] border border-white/80 bg-[#0d1b2f] p-6 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)]">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/50 mb-4">
            What to expect on Day 1
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Document check & reporting", desc: "Arrive, submit documents, get your candidate number." },
              { step: "02", title: "OIR Test — Papers 1 & 2", desc: "Back-to-back verbal and non-verbal reasoning under time pressure." },
              { step: "03", title: "PPDT — Picture writing", desc: "4 minutes to observe a blurred image and write a story." },
              { step: "04", title: "Group narration & discussion", desc: "Each candidate narrates their story. Group forms a common story." },
            ].map((s) => (
              <div key={s.step} className="flex gap-3">
                <span className="text-3xl font-black text-white/15 shrink-0 leading-none mt-0.5">{s.step}</span>
                <div>
                  <p className="text-sm font-bold text-white/90 mb-1">{s.title}</p>
                  <p className="text-xs leading-5 text-white/55">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PPDT Modal / Overlay ── */}
      {ppdtOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#0d1b2f]/70 backdrop-blur-sm"
            onClick={() => { setPpdtOpen(false); setSelectedPic(null); }}
          />

          {/* Panel */}
          <div className="relative mx-auto my-8 w-full max-w-5xl px-4">
            <div className="rounded-[2rem] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(240,252,244,0.95))] p-6 shadow-[0_32px_80px_rgba(15,23,42,0.32)] sm:p-8">

              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#1d6b40]">PPDT Practice</p>
                  <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] mt-1">
                    Picture Description Sets
                  </h2>
                </div>
                <button
                  onClick={() => { setPpdtOpen(false); setSelectedPic(null); }}
                  className="rounded-xl border border-white/80 bg-white/80 p-2.5 text-[var(--color-muted)] hover:text-[var(--color-ink-strong)] shadow-sm transition-all"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                    <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {selectedPic ? (
                /* ── Picture Detail View ── */
                <div>
                  <button
                    onClick={() => setSelectedPic(null)}
                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--color-muted)] hover:text-[var(--color-ink-strong)] mb-6"
                  >
                    ← All Pictures
                  </button>

                  {/* Scene illustration card */}
                  <div
                    className="rounded-[1.8rem] p-8 mb-6 relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${selectedPic.color} 8%, white), color-mix(in srgb, ${selectedPic.color} 4%, rgba(255,255,255,0.95)))` }}
                  >
                    <div
                      className="absolute right-0 top-0 h-40 w-40 rounded-full"
                      style={{ background: `radial-gradient(circle, color-mix(in srgb, ${selectedPic.color} 20%, transparent), transparent 70%)` }}
                    />
                    {/* Decorative scene frame */}
                    <div
                      className="absolute inset-4 rounded-2xl border-2 border-dashed opacity-20"
                      style={{ borderColor: selectedPic.color }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em]"
                          style={{ background: `color-mix(in srgb, ${selectedPic.color} 15%, white)`, color: selectedPic.color }}
                        >
                          Picture #{selectedPic.id}
                        </span>
                        <span
                          className="rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em]"
                          style={{ background: `color-mix(in srgb, ${DIFF_COLOR[selectedPic.difficulty]} 12%, white)`, color: DIFF_COLOR[selectedPic.difficulty] }}
                        >
                          {selectedPic.difficulty}
                        </span>
                      </div>
                      <h3 className="font-display text-2xl font-semibold text-[var(--color-ink-strong)] mb-4">{selectedPic.title}</h3>
                      <p className="text-base leading-8 text-[var(--color-ink-strong)] max-w-2xl">{selectedPic.scene}</p>
                    </div>
                  </div>

                  {/* Themes */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)] mb-3">Suggested Themes</p>
                      <div className="flex flex-wrap gap-2">
                        {selectedPic.themes.map((t) => (
                          <span
                            key={t}
                            className="rounded-full px-3 py-1 text-xs font-semibold"
                            style={{ background: `color-mix(in srgb, ${selectedPic.color} 10%, white)`, color: selectedPic.color }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent-strong)] mb-3">Narration Tips</p>
                      <ul className="space-y-1.5">
                        {[
                          "Introduce a lead character in the first line.",
                          "Build a clear problem → action → resolution arc.",
                          "Keep the protagonist positive and proactive.",
                          "Keep your story under 4 minutes when spoken.",
                        ].map((tip) => (
                          <li key={tip} className="flex items-start gap-2 text-xs text-[var(--color-muted)]">
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                /* ── Grid View ── */
                <div>
                  {/* Filter tabs */}
                  <div className="flex items-center gap-2 mb-5 flex-wrap">
                    {(["All", "Easy", "Medium", "Hard"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className="rounded-full px-4 py-1.5 text-xs font-bold transition-all"
                        style={
                          filter === f
                            ? { background: f === "All" ? "#0369a1" : DIFF_COLOR[f], color: "white" }
                            : { background: "rgba(255,255,255,0.7)", color: "var(--color-muted)", border: "1px solid rgba(0,0,0,0.08)" }
                        }
                      >
                        {f} {f !== "All" && `(${PPDT_PICTURES.filter((p) => p.difficulty === f).length})`}
                      </button>
                    ))}
                    <span className="ml-auto text-xs text-[var(--color-muted)]">{filtered.length} pictures</span>
                  </div>

                  {/* Grid */}
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-h-[60vh] overflow-y-auto pr-1">
                    {filtered.map((pic) => (
                      <button
                        key={pic.id}
                        onClick={() => setSelectedPic(pic)}
                        className="rounded-2xl border border-white/80 bg-white/90 p-4 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                      >
                        {/* Illustrated scene placeholder */}
                        <div
                          className="relative mb-3 h-24 rounded-xl overflow-hidden flex items-center justify-center"
                          style={{ background: `linear-gradient(135deg, color-mix(in srgb, ${pic.color} 12%, white), color-mix(in srgb, ${pic.color} 6%, rgba(240,250,255,0.9)))` }}
                        >
                          <div
                            className="absolute inset-0 opacity-10"
                            style={{
                              backgroundImage: `radial-gradient(circle at 30% 40%, ${pic.color} 1px, transparent 1px), radial-gradient(circle at 70% 60%, ${pic.color} 1px, transparent 1px)`,
                              backgroundSize: "20px 20px",
                            }}
                          />
                          <span className="font-display text-4xl font-black opacity-15" style={{ color: pic.color }}>
                            {pic.id.toString().padStart(2, "0")}
                          </span>
                          <span
                            className="absolute bottom-2 right-2 rounded-full px-2 py-0.5 text-[9px] font-black uppercase tracking-wider"
                            style={{ background: `color-mix(in srgb, ${DIFF_COLOR[pic.difficulty]} 15%, white)`, color: DIFF_COLOR[pic.difficulty] }}
                          >
                            {pic.difficulty}
                          </span>
                        </div>
                        <p className="text-sm font-bold text-[var(--color-ink-strong)] mb-1">{pic.title}</p>
                        <p className="text-xs text-[var(--color-muted)] leading-4 line-clamp-2">{pic.scene}</p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {pic.themes.slice(0, 2).map((t) => (
                            <span
                              key={t}
                              className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                              style={{ background: `color-mix(in srgb, ${pic.color} 10%, white)`, color: pic.color }}
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}