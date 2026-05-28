"use client";

import { useState } from "react";

// ─── Data ────────────────────────────────────────────────────────────────────

type TransportInfo = {
  railwayStation: string;
  railwayDistance: string;
  busStand: string;
  busDistance: string;
  airport: string;
  airportDistance: string;
  metroStation: string;
  tips: string[];
};

type Centre = {
  id: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  founded?: string;
  boards: string[];
  motto?: string;
  address: string;
  phone: string;
  fax?: string;
  description: string;
  transport: TransportInfo;
};

type Branch = "Army" | "Air Force" | "Navy";

const CENTRES: Record<Branch, Centre[]> = {
  Army: [
    {
      id: "sce",
      name: "Selection Centre East (SCE)",
      shortName: "SCE",
      city: "Prayagraj",
      state: "Uttar Pradesh",
      founded: "1957",
      boards: ["11 SSB", "14 SSB", "18 SSB", "19 SSB", "34 SSB"],
      address: "Cariappa Rd, Canton, Civil Lines, Prayagraj, Uttar Pradesh 211001",
      phone: "0532-2424816",
      fax: "0532-2424815",
      description:
        "Founded in 1957, Selection Centre East in Prayagraj stands among India's oldest and most respected SSB centres. It has shaped generations of future Army officers through its rigorous selection process.",
      transport: {
        railwayStation: "Prayagraj Junction",
        railwayDistance: "approx. 6–7 km",
        busStand: "Civil Lines Bus Stand",
        busDistance: "approx. 4 km",
        airport: "Prayagraj Airport (Bamrauli)",
        airportDistance: "approx. 14 km",
        metroStation: "No metro connectivity available currently.",
        tips: [
          "Auto-rickshaws and Ola/Uber are easily available from the railway station.",
          "Travel time from station to centre is around 20–25 minutes.",
          "Candidates arriving by train should prefer daytime arrival for easier navigation.",
          "Keep your call letter and ID proof ready while entering cantonment areas.",
        ],
      },
    },
    {
      id: "scc",
      name: "Selection Centre Central (SCC)",
      shortName: "SCC",
      city: "Bhopal",
      state: "Madhya Pradesh",
      founded: "1975",
      boards: ["20 SSB", "21 SSB", "22 SSB"],
      address: "Jaipur-Guna Road Chandukheri, Bhopal, Madhya Pradesh 462001",
      phone: "0755-2735980",
      description:
        "Established in 1975 after the transfer of 20 SSB and 33 SSB from Jabalpur, Selection Centre Central has become a key hub for officer selection in the Indian Army.",
      transport: {
        railwayStation: "Bhopal Junction",
        railwayDistance: "approx. 18–20 km",
        busStand: "Nadra Bus Stand",
        busDistance: "approx. 17 km",
        airport: "Raja Bhoj Airport",
        airportDistance: "approx. 30 km",
        metroStation: "Rani Kamlapati Metro Station (nearest operational corridor area).",
        tips: [
          "The centre is located slightly outside the city, so book cab services in advance.",
          "Shared autos and local buses may not directly reach the centre.",
          "Keep some cash for local transport in case online payment fails.",
        ],
      },
    },
    {
      id: "scs",
      name: "Selection Centre South (SCS)",
      shortName: "SCS",
      city: "Bangalore",
      state: "Karnataka",
      founded: "1949",
      boards: ["12 SSB", "17 SSB", "24 SSB"],
      address:
        "Cubbon Rd, FM Cariappa Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
      phone: "9480948061, 9916322971",
      fax: "080-255327671",
      description:
        "With roots going back to 1949, Selection Centre South made history by hosting the very first SSB — 12 SSB — for Army and Navy candidates. Today it remains one of the busiest centres for officer assessment.",
      transport: {
        railwayStation: "KSR Bengaluru City Junction",
        railwayDistance: "approx. 5 km",
        busStand: "MG Road / Manipal Centre Bus Stop",
        busDistance: "walking distance",
        airport: "Kempegowda International Airport",
        airportDistance: "approx. 35 km",
        metroStation: "MG Road Metro Station – approx. 1 km",
        tips: [
          "BMTC airport buses (Vayu Vajra) are budget-friendly for airport travel.",
          "Bangalore traffic can be heavy, so keep extra travel time.",
          "Metro connectivity is available till MG Road station.",
        ],
      },
    },
    {
      id: "scn",
      name: "Selection Centre North (SCN)",
      shortName: "SCN",
      city: "Jalandhar",
      state: "Punjab",
      founded: "2015",
      boards: ["31 SSB", "32 SSB"],
      motto: "NISHPAKSH, NIHSWARTH, NISSANDEH",
      address: "Professor Colony, Kapurthala, Punjab 144602",
      phone: "01822-230127",
      fax: "01822-230127",
      description:
        "Raised in 2015 and operational from April 2016, Selection Centre North has steadily emerged as an important Army selection hub under its inspiring motto — Nishpaksh, Nihswarth, Nissandeh.",
      transport: {
        railwayStation: "Jalandhar City Junction",
        railwayDistance: "approx. 18 km",
        busStand: "Kapurthala Bus Stand",
        busDistance: "approx. 3 km",
        airport: "Adampur Airport",
        airportDistance: "approx. 32 km",
        metroStation: "No metro connectivity available.",
        tips: [
          "The centre is near Kapurthala, not inside Jalandhar city.",
          "Auto-rickshaws are the easiest option from Kapurthala Bus Stand.",
          "Winters can be very cold, so carry warm clothes if reporting between November–January.",
        ],
      },
    },
  ],
  "Air Force": [
    {
      id: "afsb-ddn",
      name: "1 AFSB",
      shortName: "1 AFSB",
      city: "Dehradun",
      state: "Uttarakhand",
      founded: "1943",
      boards: ["1 AFSB"],
      address:
        "112, 1, Post Office Rd, New Basti, Clement Town, Dehradun, Uttarakhand 248002",
      phone: "0135-2642269",
      fax: "0135-2640104",
      description:
        "Tracing its journey back to 1943, 1 AFSB began as an Experimental Selection Board at the Forest Research Institute. It officially became 1 AFSB in 1962 and continues selecting future Air Force officers.",
      transport: {
        railwayStation: "Dehradun Railway Station",
        railwayDistance: "approx. 9 km",
        busStand: "ISBT Dehradun",
        busDistance: "approx. 7 km",
        airport: "Jolly Grant Airport",
        airportDistance: "approx. 32 km",
        metroStation: "No metro connectivity available.",
        tips: [
          "Clement Town is well connected through local autos and Vikram buses.",
          "Reach before evening as traffic increases during tourist season.",
          "Carry light woollens even during moderate weather.",
        ],
      },
    },
    {
      id: "afsb-mys",
      name: "2 AFSB",
      shortName: "2 AFSB",
      city: "Mysore",
      state: "Karnataka",
      boards: ["2 AFSB"],
      address: "CV Complex, Sidharth Nagar PO, Mysore – 570011",
      phone: "0821-2526621",
      fax: "0821-2502836",
      description:
        "Located within Mysore's CV Complex, 2 AFSB conducts SSB interviews for IAF aspirants entering through NDA, CDS, and other schemes. The centre also handles the Pilot Aptitude Battery Test (PABT).",
      transport: {
        railwayStation: "Mysore Junction",
        railwayDistance: "approx. 6 km",
        busStand: "Mysore City Bus Stand",
        busDistance: "approx. 5 km",
        airport: "Mysore Airport",
        airportDistance: "approx. 4 km",
        metroStation: "No metro connectivity available.",
        tips: [
          "Autos are easily available outside the station.",
          "Bengaluru Airport is another option if direct flights to Mysore are unavailable.",
          "Weather is usually pleasant throughout the year.",
        ],
      },
    },
    {
      id: "afsb-gnd",
      name: "3 AFSB",
      shortName: "3 AFSB",
      city: "Gandhinagar",
      state: "Gujarat",
      founded: "2012",
      boards: ["3 AFSB"],
      address: "Electronic State, GIDC Rd, Sector 25, Gandhinagar, Gujarat 382024",
      phone: "079-23242600 Ext. 5754",
      fax: "079-23245080 / 23242550",
      description:
        "Established in 2012, 3 AFSB is among the newest additions to the IAF's selection network. Situated in Gandhinagar's Sector 25, it evaluates candidates qualifying through AFCAT, NDA, and CDS examinations.",
      transport: {
        railwayStation: "Gandhinagar Capital Railway Station",
        railwayDistance: "approx. 4 km",
        busStand: "Gandhinagar Bus Stand",
        busDistance: "approx. 7 km",
        airport: "Ahmedabad Airport",
        airportDistance: "approx. 38 km",
        metroStation:
          "Motera Stadium Metro Station (Ahmedabad Metro) – approx. 20–25 km",
        tips: [
          "Ahmedabad airport has excellent connectivity with all major cities.",
          "GSRTC buses regularly run between Ahmedabad and Gandhinagar.",
          "Use app-based cabs for smoother travel.",
        ],
      },
    },
    {
      id: "afsb-vns",
      name: "4 AFSB",
      shortName: "4 AFSB",
      city: "Varanasi",
      state: "Uttar Pradesh",
      founded: "1963",
      boards: ["4 AFSB"],
      address:
        "Mint Road, Nadesar, Chaukaghat, Varanasi, Uttar Pradesh 221002",
      phone: "0542-2503853 Ext. 213",
      fax: "0542-2502836",
      description:
        "Originally set up in Patna in 1963 before shifting to Varanasi in 1964, 4 AFSB has played a major role in selecting Air Force officers for decades. It remains one of the country's most active AFSB centres.",
      transport: {
        railwayStation: "Varanasi Junction",
        railwayDistance: "approx. 3 km",
        busStand: "Cantt Bus Stand",
        busDistance: "approx. 3 km",
        airport: "Lal Bahadur Shastri Airport",
        airportDistance: "approx. 24 km",
        metroStation: "No metro connectivity available currently.",
        tips: [
          "Traffic near Cantt area can be crowded.",
          "Reserve extra time during festivals or tourist season.",
          "Local autos are the cheapest transport option.",
        ],
      },
    },
    {
      id: "afsb-gwh",
      name: "5 AFSB",
      shortName: "5 AFSB",
      city: "Guwahati",
      state: "Assam",
      boards: ["5 AFSB"],
      address: "Near VIP Chowk, Guwahati, Assam 784015",
      phone: "0361-2840015, 9394805271",
      description:
        "5 AFSB oversees the assessment of candidates from India's northeastern states including Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura.",
      transport: {
        railwayStation: "Guwahati Railway Station",
        railwayDistance: "approx. 10 km",
        busStand: "ISBT Guwahati",
        busDistance: "approx. 8 km",
        airport: "Lokpriya Gopinath Bordoloi Airport",
        airportDistance: "approx. 28 km",
        metroStation: "No metro connectivity available currently.",
        tips: [
          "Reach before dark if travelling for the first time.",
          "Weather may suddenly change during monsoon season.",
          "Keep waterproof luggage protection during rainy months.",
        ],
      },
    },
  ],
  Navy: [
    {
      id: "nsb-cbe",
      name: "Naval Selection Board (NSB)",
      shortName: "NSB",
      city: "Coimbatore",
      state: "Tamil Nadu",
      boards: ["NSB"],
      address: "INS Agrani, Red Fields, Coimbatore – 641018",
      phone: "1800-425-4599",
      fax: "0422-2325957",
      description:
        "Situated inside INS Agrani in Coimbatore, this Naval Selection Board primarily conducts SSB interviews for candidates applying through the Indian Navy's 10+2 Cadet Entry scheme.",
      transport: {
        railwayStation: "Coimbatore Junction",
        railwayDistance: "approx. 3 km",
        busStand: "Gandhipuram Bus Stand",
        busDistance: "approx. 5 km",
        airport: "Coimbatore International Airport",
        airportDistance: "approx. 10 km",
        metroStation: "No metro connectivity available.",
        tips: [
          "The city has excellent transport and affordable hotels nearby.",
          "Autos are easily available from station and airport.",
          "Tamil and English are commonly understood.",
        ],
      },
    },
    {
      id: "ssb-blr-navy",
      name: "SSB at SCS (Navy — 12 SSB)",
      shortName: "12 SSB",
      city: "Bangalore",
      state: "Karnataka",
      boards: ["12 SSB"],
      address:
        "Cubbon Rd, FM Cariappa Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
      phone: "080-25588065",
      fax: "080-25327671",
      description:
        "The Indian Navy's 12 SSB functions within Selection Centre South, Bangalore, and handles interviews for Logistics, Education, Pilot, Submarine, 10+2 B.Tech, NDA, and CDS entries.",
      transport: {
        railwayStation: "KSR Bengaluru City Junction",
        railwayDistance: "approx. 5 km",
        busStand: "MG Road / Manipal Centre",
        busDistance: "walking distance",
        airport: "Kempegowda International Airport",
        airportDistance: "approx. 35 km",
        metroStation: "MG Road Metro Station – approx. 1 km",
        tips: [
          "Same campus as Selection Centre South (Army).",
          "Prefer metro or BMTC buses during peak traffic hours.",
          "Carry light luggage for easier movement inside the centre.",
        ],
      },
    },
    {
      id: "ssb-33-bpl",
      name: "33 SSB at SCC (Navy)",
      shortName: "33 SSB",
      city: "Bhopal",
      state: "Madhya Pradesh",
      boards: ["33 SSB"],
      address: "Jaipur-Guna Road Chandukheri, Bhopal, Madhya Pradesh 462001",
      phone: "0755-2732035 / 2702223",
      fax: "0755-2744033 / 2735980",
      description:
        "Apart from Army boards, Bhopal also hosts the Navy's 33 SSB, responsible for assessing candidates aspiring to become officers in the Indian Navy.",
      transport: {
        railwayStation: "Bhopal Junction",
        railwayDistance: "approx. 18–20 km",
        busStand: "Nadra Bus Stand",
        busDistance: "approx. 17 km",
        airport: "Raja Bhoj Airport",
        airportDistance: "approx. 30 km",
        metroStation: "Rani Kamlapati Metro Station.",
        tips: [
          "Since the centre is outside the city, book transport beforehand.",
          "Try reaching Bhopal in daytime for smoother travel.",
        ],
      },
    },
    {
      id: "ssb-kol",
      name: "SSB, Kolkata",
      shortName: "SSB Kolkata",
      city: "Kolkata",
      state: "West Bengal",
      founded: "2019",
      boards: ["SSB Kolkata"],
      address:
        "Chhota Nadir Road, Down Town Diamond Harbour, South 24 Parganas, West Bengal – 743331",
      phone: "031-74255791 / 24892150",
      description:
        "Inaugurated in 2019 at Diamond Harbour near Kolkata, this became the Indian Navy's first fully dedicated SSB centre for selecting Permanent and Short Service Commission officers.",
      transport: {
        railwayStation: "Diamond Harbour Railway Station",
        railwayDistance: "approx. 1 km",
        busStand: "Diamond Harbour Bus Stand",
        busDistance: "approx. 1–2 km",
        airport: "Netaji Subhas Chandra Bose International Airport",
        airportDistance: "approx. 65 km",
        metroStation:
          "No direct metro nearby; nearest major metro access from Kolkata city via Majerhat/Esplanade.",
        tips: [
          "Local trains from Sealdah are the cheapest travel option.",
          "Keep buffer time as suburban trains may get crowded.",
          "Autos are available outside the station.",
        ],
      },
    },
    {
      id: "nsb-vsk",
      name: "Naval Selection Board (NSB)",
      shortName: "NSB Vizag",
      city: "Visakhapatnam",
      state: "Andhra Pradesh",
      boards: ["NSB Vizag"],
      address:
        "9-IRSD Area, Next to Material Organisation, Visakhapatnam, Andhra Pradesh – 530008",
      phone: "0891-2573057",
      fax: "0891-2512150",
      description:
        "The NSB at Visakhapatnam focuses on selecting capable officers for the Indian Navy while encouraging more youth from the coastal region to join the maritime force.",
      transport: {
        railwayStation: "Visakhapatnam Junction",
        railwayDistance: "approx. 6 km",
        busStand: "Dwaraka Bus Station Complex",
        busDistance: "approx. 7 km",
        airport: "Visakhapatnam Airport",
        airportDistance: "approx. 9 km",
        metroStation: "No metro connectivity available currently.",
        tips: [
          "The naval area is highly secure; carry all documents properly.",
          "Ola/Uber services are widely available.",
          "Humid weather is common, so carry water and light clothes.",
        ],
      },
    },
  ],
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function TransportRow({
  icon,
  label,
  name,
  distance,
}: {
  icon: React.ReactNode;
  label: string;
  name: string;
  distance: string;
}) {
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-slate-100 last:border-0">
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[var(--color-accent-strong)]/8 text-[var(--color-accent-strong)]">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-muted)]">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-medium text-[var(--color-ink-strong)]">
          {name}
        </p>
        <p className="text-xs text-[var(--color-muted)]">{distance}</p>
      </div>
    </div>
  );
}

function CentreCard({
  centre,
  accentColor,
}: {
  centre: Centre;
  accentColor: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-2xl border border-white/80 bg-white shadow-[0_2px_16px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_6px_32px_rgba(0,0,0,0.11)]"
      style={{ "--acc": accentColor } as React.CSSProperties}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full"
        style={{ background: accentColor }}
      />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {centre.boards.map((b) => (
                <span
                  key={b}
                  className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
                  style={{
                    background: `color-mix(in srgb, ${accentColor} 12%, transparent)`,
                    color: accentColor,
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
            <h3 className="font-display text-xl font-semibold leading-snug text-[var(--color-ink-strong)]">
              {centre.name}
            </h3>
            <p className="mt-0.5 text-sm text-[var(--color-muted)]">
              {centre.city}, {centre.state}
              {centre.founded && (
                <span className="ml-2 text-xs font-medium opacity-60">
                  Est. {centre.founded}
                </span>
              )}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
          {centre.description}
        </p>

        {/* Motto */}
        {centre.motto && (
          <p className="mt-3 text-xs italic font-medium text-[var(--color-ink-strong)] opacity-70">
            &ldquo;{centre.motto}&rdquo;
          </p>
        )}

        {/* Contact */}
        <div className="mt-4 rounded-xl bg-slate-50 p-3 text-xs space-y-1">
          <p className="text-[var(--color-ink-strong)] font-medium leading-relaxed">
            <span className="text-[var(--color-muted)]">📍 </span>
            {centre.address}
          </p>
          <p className="text-[var(--color-muted)]">
            <span className="font-semibold text-[var(--color-ink-strong)]">📞 </span>
            {centre.phone}
            {centre.fax && (
              <span className="ml-2 text-[var(--color-muted)]">
                | Fax: {centre.fax}
              </span>
            )}
          </p>
        </div>

        {/* Travel toggle */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-4 flex w-full items-center justify-between rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200"
          style={{
            borderColor: `color-mix(in srgb, ${accentColor} 30%, transparent)`,
            color: accentColor,
            background: expanded
              ? `color-mix(in srgb, ${accentColor} 8%, transparent)`
              : "transparent",
          }}
        >
          <span>How to Reach</span>
          <svg
            className={`h-4 w-4 transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Travel details */}
        {expanded && (
          <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/50 p-4">
            <TransportRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              }
              label="Railway Station"
              name={centre.transport.railwayStation}
              distance={centre.transport.railwayDistance}
            />
            <TransportRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                  <rect x="1" y="3" width="15" height="13" rx="1" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 8h4l3 3v5h-7V8zM5.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM18.5 21a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
              }
              label="Bus Stand"
              name={centre.transport.busStand}
              distance={centre.transport.busDistance}
            />
            <TransportRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              }
              label="Airport"
              name={centre.transport.airport}
              distance={centre.transport.airportDistance}
            />
            <TransportRow
              icon={
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
                  <rect x="2" y="9" width="20" height="11" rx="2" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 9V7a5 5 0 0110 0v2" />
                </svg>
              }
              label="Metro Station"
              name={centre.transport.metroStation}
              distance=""
            />

            {/* Tips */}
            <div className="mt-3 pt-3 border-t border-slate-200">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[var(--color-muted)] mb-2">
                Travel Tips
              </p>
              <ul className="space-y-1.5">
                {centre.transport.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[var(--color-ink-strong)] leading-relaxed">
                    <span
                      className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: accentColor }}
                    />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}

// ─── Branch config ────────────────────────────────────────────────────────────

const BRANCH_CONFIG: Record<
  Branch,
  { color: string; description: string; icon: React.ReactNode }
> = {
  Army: {
    color: "#1d6b40",
    description:
      "4 Selection Centres across India — SCE, SCC, SCS & SCN — conducting SSB interviews for all Army officer entries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  "Air Force": {
    color: "#0369a1",
    description:
      "5 AFSBs spread from Dehradun to Guwahati — selecting pilots and officers for the Indian Air Force through AFCAT, NDA & CDS.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
      </svg>
    ),
  },
  Navy: {
    color: "#1e3a8a",
    description:
      "5 Naval SSB/NSB centres including the first dedicated Navy SSB at Kolkata — selecting officers for all Naval entries.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l2-9 7 4 7-4 2 9H3zM12 3v9" />
      </svg>
    ),
  },
};

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ServiceCenterBrowser() {
  const [activeBranch, setActiveBranch] = useState<Branch | null>(null);
  const branches: Branch[] = ["Army", "Air Force", "Navy"];

  const config = activeBranch ? BRANCH_CONFIG[activeBranch] : null;
  const centres = activeBranch ? CENTRES[activeBranch] : [];

  return (
    <div className="mt-10 space-y-10">
      {/* ── Step 1: Branch selector ── */}
      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(228,247,255,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12),transparent_70%)]" />
        <div className="relative">
          <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[var(--color-accent-strong)]">
            Step 1
          </p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-[var(--color-ink-strong)] sm:text-3xl">
            Choose the service branch first.
          </h2>
          <p className="mt-2 text-sm text-[var(--color-muted)]">
            Travel note: Candidates are advised to verify the latest transport routes
            and timings before travel, as metro connectivity and public transport
            services may change over time.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {branches.map((branch) => {
              const bc = BRANCH_CONFIG[branch];
              const isActive = activeBranch === branch;
              return (
                <button
                  key={branch}
                  onClick={() =>
                    setActiveBranch(isActive ? null : branch)
                  }
                  className="group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300"
                  style={{
                    borderColor: isActive
                      ? bc.color
                      : "rgba(255,255,255,0.8)",
                    background: isActive
                      ? `linear-gradient(135deg, ${bc.color}, color-mix(in srgb, ${bc.color} 80%, black))`
                      : "rgba(255,255,255,0.85)",
                    boxShadow: isActive
                      ? `0 8px 32px color-mix(in srgb, ${bc.color} 30%, transparent)`
                      : "0 2px 8px rgba(0,0,0,0.06)",
                    transform: isActive ? "translateY(-2px)" : "none",
                  }}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isActive ? "bg-white/20 text-white" : ""
                    }`}
                    style={!isActive ? { color: bc.color, background: `color-mix(in srgb, ${bc.color} 10%, transparent)` } : {}}
                  >
                    {bc.icon}
                  </span>
                  <p
                    className={`mt-3 text-base font-bold ${
                      isActive ? "text-white" : "text-[var(--color-ink-strong)]"
                    }`}
                  >
                    {branch}
                  </p>
                  <p
                    className={`mt-1 text-xs leading-relaxed ${
                      isActive ? "text-white/75" : "text-[var(--color-muted)]"
                    }`}
                  >
                    View branch-wise centres
                  </p>
                  {isActive && (
                    <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-white/25">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Step 2: Centre cards ── */}
      {activeBranch && config && (
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div
              className="h-px flex-1"
              style={{
                background: `linear-gradient(to right, ${config.color}40, transparent)`,
              }}
            />
            <div className="flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                background: `color-mix(in srgb, ${config.color} 10%, transparent)`,
                color: config.color,
              }}
            >
              <span>{activeBranch}</span>
              <span className="text-xs font-normal opacity-70">
                — {centres.length} centre{centres.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div
              className="h-px flex-1"
              style={{
                background: `linear-gradient(to left, ${config.color}40, transparent)`,
              }}
            />
          </div>

          {/* Branch summary */}
          <div
            className="mb-6 rounded-2xl border p-5"
            style={{
              borderColor: `color-mix(in srgb, ${config.color} 20%, transparent)`,
              background: `color-mix(in srgb, ${config.color} 5%, white)`,
            }}
          >
            <p className="text-sm leading-relaxed text-[var(--color-ink-strong)]">
              {config.description}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">
            {centres.map((centre) => (
              <CentreCard
                key={centre.id}
                centre={centre}
                accentColor={config.color}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Empty state ── */}
      {!activeBranch && (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 py-16 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm text-2xl">
            🏛️
          </div>
          <p className="mt-4 text-base font-semibold text-[var(--color-ink-strong)]">
            Select a branch above to explore centres
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Army, Air Force, or Navy — choose your path.
          </p>
        </div>
      )}
    </div>
  );
}