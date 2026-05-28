// app/_data/center-data.ts

export type ServiceBranch = "Army" | "Air Force" | "Navy";

export type CenterRecord = {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  service: ServiceBranch;
  type: string;
  founded?: string;
  boards: string[];
  motto?: string;
  address: string;
  phone: string;
  fax?: string;
  description: string;
  transport: {
    railwayStation: string;
    railwayDistance: string;
    busStand: string;
    busDistance: string;
    airport: string;
    airportDistance: string;
    metroStation: string;
    tips: string[];
  };
};

export const serviceOptions: ServiceBranch[] = ["Army", "Air Force", "Navy"];

export const centerData: CenterRecord[] = [
  // ─── ARMY ────────────────────────────────────────────────────────────────
  {
    slug: "sce-prayagraj",
    name: "Selection Centre East",
    shortName: "SCE",
    city: "Prayagraj",
    state: "Uttar Pradesh",
    service: "Army",
    type: "Army SSB",
    founded: "1957",
    boards: ["11 SSB", "14 SSB", "18 SSB", "19 SSB", "34 SSB"],
    address: "Cariappa Rd, Canton, Civil Lines, Prayagraj, Uttar Pradesh 211001",
    phone: "0532-2424816",
    fax: "0532-2424815",
    description:
      "Founded in 1957, Selection Centre East in Prayagraj stands among India's oldest and most respected SSB centres. Home to 11 SSB, 14 SSB, 18 SSB, 19 SSB, and 34 SSB, it has shaped generations of future Army officers through its rigorous selection process.",
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
    slug: "scc-bhopal",
    name: "Selection Centre Central",
    shortName: "SCC",
    city: "Bhopal",
    state: "Madhya Pradesh",
    service: "Army",
    type: "Army SSB",
    founded: "1975",
    boards: ["20 SSB", "21 SSB", "22 SSB"],
    address: "Jaipur-Guna Road Chandukheri, Bhopal, Madhya Pradesh 462001",
    phone: "0755-2735980",
    description:
      "Established in 1975 after the transfer of 20 SSB and 33 SSB from Jabalpur, Selection Centre Central has become a key hub for officer selection in the Indian Army. The centre currently houses 20 SSB, 21 SSB, and 22 SSB.",
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
    slug: "scs-bangalore",
    name: "Selection Centre South",
    shortName: "SCS",
    city: "Bengaluru",
    state: "Karnataka",
    service: "Army",
    type: "Army SSB",
    founded: "1949",
    boards: ["12 SSB", "17 SSB", "24 SSB"],
    address:
      "Cubbon Rd, FM Cariappa Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
    phone: "9480948061, 9916322971",
    fax: "080-255327671",
    description:
      "With roots going back to 1949, Selection Centre South made history by hosting the very first SSB — 12 SSB — for Army and Navy candidates. Today, alongside 17 SSB and 24 SSB, it remains one of the busiest centres for officer assessment.",
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
    slug: "scn-kapurthala",
    name: "Selection Centre North",
    shortName: "SCN",
    city: "Kapurthala",
    state: "Punjab",
    service: "Army",
    type: "Army SSB",
    founded: "2015",
    boards: ["31 SSB", "32 SSB"],
    motto: "NISHPAKSH, NIHSWARTH, NISSANDEH",
    address: "Professor Colony, Kapurthala, Punjab 144602",
    phone: "01822-230127",
    fax: "01822-230127",
    description:
      "Raised in 2015 and operational from April 2016, Selection Centre North has steadily emerged as an important Army selection hub. It functions with 31 SSB and 32 SSB under its inspiring motto — Nishpaksh, Nihswarth, Nissandeh.",
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

  // ─── AIR FORCE ───────────────────────────────────────────────────────────
  {
    slug: "afsb-dehradun",
    name: "1 AFSB",
    shortName: "1 AFSB",
    city: "Dehradun",
    state: "Uttarakhand",
    service: "Air Force",
    type: "AFSB",
    founded: "1943",
    boards: ["1 AFSB"],
    address:
      "112, 1, Post Office Rd, New Basti, Clement Town, Dehradun, Uttarakhand 248002",
    phone: "0135-2642269",
    fax: "0135-2640104",
    description:
      "Tracing its journey back to 1943, 1 AFSB began as an Experimental Selection Board at the Forest Research Institute, Dehradun. After several transformations over the years, it officially became 1 AFSB in 1962 and continues selecting future Air Force officers.",
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
    slug: "afsb-mysore",
    name: "2 AFSB",
    shortName: "2 AFSB",
    city: "Mysuru",
    state: "Karnataka",
    service: "Air Force",
    type: "AFSB",
    boards: ["2 AFSB"],
    address: "CV Complex, Sidharth Nagar PO, Mysore – 570011",
    phone: "0821-2526621",
    fax: "0821-2502836",
    description:
      "Located within Mysore's CV Complex, 2 AFSB conducts SSB interviews for IAF aspirants entering through NDA, CDS, and other schemes. The centre also handles the Pilot Aptitude Battery Test (PABT) for Air Force candidates.",
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
    slug: "afsb-gandhinagar",
    name: "3 AFSB",
    shortName: "3 AFSB",
    city: "Gandhinagar",
    state: "Gujarat",
    service: "Air Force",
    type: "AFSB",
    founded: "2012",
    boards: ["3 AFSB"],
    address: "Electronic State, GIDC Rd, Sector 25, Gandhinagar, Gujarat 382024",
    phone: "079-23242600 Ext. 5754",
    fax: "079-23245080 / 23242550",
    description:
      "Established in 2012, 3 AFSB is among the newest additions to the Indian Air Force's selection network. Situated in Gandhinagar's Sector 25, it evaluates candidates qualifying through AFCAT, NDA, and CDS examinations.",
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
    slug: "afsb-varanasi",
    name: "4 AFSB",
    shortName: "4 AFSB",
    city: "Varanasi",
    state: "Uttar Pradesh",
    service: "Air Force",
    type: "AFSB",
    founded: "1963",
    boards: ["4 AFSB"],
    address: "Mint Road, Nadesar, Chaukaghat, Varanasi, Uttar Pradesh 221002",
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
    slug: "afsb-guwahati",
    name: "5 AFSB",
    shortName: "5 AFSB",
    city: "Guwahati",
    state: "Assam",
    service: "Air Force",
    type: "AFSB",
    boards: ["5 AFSB"],
    address: "Near VIP Chowk, Guwahati, Assam 784015",
    phone: "0361-2840015, 9394805271",
    description:
      "5 AFSB oversees the assessment of candidates from India's northeastern states — Assam, Arunachal Pradesh, Manipur, Meghalaya, Mizoram, Nagaland, and Tripura — ensuring equal opportunities for aspirants from the region.",
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

  // ─── NAVY ────────────────────────────────────────────────────────────────
  {
    slug: "nsb-coimbatore",
    name: "Naval Selection Board (NSB)",
    shortName: "NSB Coimbatore",
    city: "Coimbatore",
    state: "Tamil Nadu",
    service: "Navy",
    type: "NSB",
    boards: ["NSB Coimbatore"],
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
    slug: "ssb-bangalore-navy",
    name: "SSB at SCS (Navy — 12 SSB)",
    shortName: "12 SSB (Navy)",
    city: "Bengaluru",
    state: "Karnataka",
    service: "Navy",
    type: "Naval SSB",
    boards: ["12 SSB"],
    address:
      "Cubbon Rd, FM Cariappa Colony, Sivanchetti Gardens, Bengaluru, Karnataka 560042",
    phone: "080-25588065",
    fax: "080-25327671",
    description:
      "The Indian Navy's 12 SSB, functioning within Selection Centre South, Bangalore, handles interviews for Logistics, Education, Pilot, Submarine, 10+2 B.Tech, NDA, and CDS entries.",
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
    slug: "ssb-33-bhopal-navy",
    name: "33 SSB at SCC (Navy)",
    shortName: "33 SSB",
    city: "Bhopal",
    state: "Madhya Pradesh",
    service: "Navy",
    type: "Naval SSB",
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
    slug: "ssb-kolkata-navy",
    name: "SSB, Kolkata",
    shortName: "SSB Kolkata",
    city: "Diamond Harbour",
    state: "West Bengal",
    service: "Navy",
    type: "Naval SSB",
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
        "No direct metro nearby; nearest metro access from Kolkata city via Majerhat/Esplanade.",
      tips: [
        "Local trains from Sealdah are the cheapest travel option.",
        "Keep buffer time as suburban trains may get crowded.",
        "Autos are available outside the station.",
      ],
    },
  },
  {
    slug: "nsb-visakhapatnam",
    name: "Naval Selection Board (NSB)",
    shortName: "NSB Vizag",
    city: "Visakhapatnam",
    state: "Andhra Pradesh",
    service: "Navy",
    type: "NSB",
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
];

// ─── Helper utilities ─────────────────────────────────────────────────────────

export function getCentersByBranch(branch: ServiceBranch): CenterRecord[] {
  return centerData.filter((c) => c.service === branch);
}

export function getCenterBySlug(slug: string): CenterRecord | undefined {
  return centerData.find((c) => c.slug === slug);
}

export function getUniqueCities(): string[] {
  return [...new Set(centerData.map((c) => c.city))].sort();
}