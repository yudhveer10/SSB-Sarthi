export type ServiceBranch = "Army" | "Air Force" | "Navy";

export type CenterRecord = {
  slug: string;
  name: string;
  city: string;
  service: ServiceBranch;
  type: string;
  boards: string[];
  travelNote: string;
  reportingNote: string;
  nearbyAccess: string;
  snapshot: string;
};

export const serviceOptions: ServiceBranch[] = ["Army", "Air Force", "Navy"];

export const centerData: CenterRecord[] = [
  {
    slug: "allahabad-army",
    name: "Selection Centre East",
    city: "Prayagraj",
    service: "Army",
    type: "Army SSB",
    boards: ["11 SSB", "14 SSB", "18 SSB", "19 SSB", "34 SSB"],
    travelNote: "Well-connected by Prayagraj Junction and Bamrauli Airport.",
    reportingNote:
      "Candidates usually prefer arriving a few hours early because reporting movement can be busy.",
    nearbyAccess: "Railway station, airport, and civil transport options are available.",
    snapshot:
      "A major Army center often discussed by repeat aspirants for its volume and community insights.",
  },
  {
    slug: "bhopal-army",
    name: "Selection Centre Central",
    city: "Bhopal",
    service: "Army",
    type: "Army SSB",
    boards: ["20 SSB", "21 SSB", "22 SSB"],
    travelNote: "Easy rail access and decent hotel availability near the city.",
    reportingNote:
      "Best used with a practical reporting checklist because many first-timers travel from outside MP.",
    nearbyAccess: "Bhopal Junction and Raja Bhoj Airport are the main access points.",
    snapshot:
      "Popular among candidates looking for an approachable city and manageable travel logistics.",
  },
  {
    slug: "kapurthala-army",
    name: "Selection Centre North",
    city: "Kapurthala",
    service: "Army",
    type: "Army SSB",
    boards: ["31 SSB", "32 SSB"],
    travelNote: "Often reached through Jalandhar with onward local travel.",
    reportingNote:
      "Travel planning matters here, especially for candidates unfamiliar with Punjab routes.",
    nearbyAccess: "Nearest larger transit support usually comes through Jalandhar.",
    snapshot:
      "A center where travel clarity and local instructions make a big difference for user experience.",
  },
  {
    slug: "varanasi-army",
    name: "Selection Centre East Extension",
    city: "Varanasi",
    service: "Army",
    type: "Army SSB",
    boards: ["24 SSB"],
    travelNote: "Strong rail connectivity and frequent student travel movement.",
    reportingNote:
      "Works well for a simple location page with maps, stay suggestions, and reporting instructions.",
    nearbyAccess: "Varanasi Junction and Lal Bahadur Shastri Airport.",
    snapshot:
      "A high-interest center for aspirants from North and East India who want fast planning support.",
  },
  {
    slug: "mysuru-air-force",
    name: "Air Force Selection Board Mysuru",
    city: "Mysuru",
    service: "Air Force",
    type: "AFSB",
    boards: ["1 AFSB"],
    travelNote: "Usually reached via Mysuru or Bengaluru depending on travel route.",
    reportingNote:
      "Ideal for detailed onboarding about documentation, train planning, and city transfer options.",
    nearbyAccess: "Rail access is common; some candidates route through Bengaluru.",
    snapshot:
      "A strong candidate for polished center detail UX because many aspirants search logistics repeatedly.",
  },
  {
    slug: "dehradun-air-force",
    name: "Air Force Selection Board Dehradun",
    city: "Dehradun",
    service: "Air Force",
    type: "AFSB",
    boards: ["2 AFSB"],
    travelNote: "Good choice for structured travel and arrival instructions.",
    reportingNote:
      "Weather, arrival timing, and transit planning can influence candidate comfort before reporting.",
    nearbyAccess: "Jolly Grant Airport and Dehradun rail routes support access.",
    snapshot:
      "A branch-specific page here can combine Air Force process context with real location support.",
  },
  {
    slug: "gandhinagar-air-force",
    name: "Air Force Selection Board Gandhinagar",
    city: "Gandhinagar",
    service: "Air Force",
    type: "AFSB",
    boards: ["3 AFSB"],
    travelNote: "Commonly approached via Ahmedabad with short onward transit.",
    reportingNote:
      "Clear first-visit guidance would help users reduce uncertainty around final reporting movement.",
    nearbyAccess: "Ahmedabad airport and rail links support the route well.",
    snapshot:
      "A useful node for branch filtering because many users specifically search Air Force board locations.",
  },
  {
    slug: "varanasi-air-force",
    name: "Air Force Selection Board Varanasi",
    city: "Varanasi",
    service: "Air Force",
    type: "AFSB",
    boards: ["4 AFSB"],
    travelNote: "Good rail access makes it relevant for broad candidate coverage.",
    reportingNote:
      "Perfect for future integration with candidate journals and branch-wise trends.",
    nearbyAccess: "Major station and airport options are available in the city.",
    snapshot:
      "A high-potential Air Force center page for content depth, trends, and journal linking.",
  },
  {
    slug: "coimbatore-navy",
    name: "Navy Selection Board Coimbatore",
    city: "Coimbatore",
    service: "Navy",
    type: "NSB",
    boards: ["NSB Coimbatore"],
    travelNote: "Good flight and rail options make this center convenient for South India candidates.",
    reportingNote:
      "Helpful place for polished pre-arrival guidance because many candidates travel solo for the first time.",
    nearbyAccess: "Coimbatore airport and rail links are the main entry points.",
    snapshot:
      "One of the most important Navy entries to present cleanly in a branch-first browsing experience.",
  },
  {
    slug: "visakhapatnam-navy",
    name: "Navy-linked SSB Access Point",
    city: "Visakhapatnam",
    service: "Navy",
    type: "Naval candidate travel context",
    boards: ["Naval reporting support context"],
    travelNote: "Best represented with clear travel planning and official route references later.",
    reportingNote:
      "This should evolve into a verified branch-specific logistics page as data becomes more structured.",
    nearbyAccess: "Strong rail and airport access.",
    snapshot:
      "A placeholder Navy-focused record that gives us space to expand verified naval guidance carefully.",
  },
];
