export type IconName =
  | "badge-check"
  | "banknote"
  | "bell"
  | "building"
  | "car"
  | "chart"
  | "circle-user"
  | "credit-card"
  | "file-check"
  | "heart-handshake"
  | "home"
  | "key-round"
  | "life-buoy"
  | "lock"
  | "map"
  | "map-pin"
  | "message-circle"
  | "messages-square"
  | "phone-call"
  | "search"
  | "shield-check"
  | "siren"
  | "sparkles"
  | "tool-case"
  | "users"
  | "wallet";

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Societies", href: "/for-societies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const features: Array<{
  title: string;
  description: string;
  icon: IconName;
  accent?: "red" | "green" | "blue";
}> = [
  {
    title: "Digital Billing & Payments",
    description: "Review dues, payment history, and society records in one clear view.",
    icon: "credit-card",
  },
  {
    title: "Complaint Management",
    description: "Submit issues with context and follow every status update to resolution.",
    icon: "file-check",
    accent: "green",
  },
  {
    title: "E-Notice Board",
    description: "Receive verified announcements without searching through group messages.",
    icon: "bell",
  },
  {
    title: "Community Chat",
    description: "Connect verified residents in organized community and private conversations.",
    icon: "messages-square",
    accent: "green",
  },
  {
    title: "Emergency SOS",
    description: "Send an urgent alert to society management and emergency contacts.",
    icon: "siren",
    accent: "red",
  },
  {
    title: "Verified Services",
    description: "Find approved electricians, plumbers, tutors, and local professionals.",
    icon: "tool-case",
  },
  {
    title: "Lost & Found",
    description: "Report items and search community posts from one trusted directory.",
    icon: "search",
    accent: "green",
  },
  {
    title: "Community Carpooling",
    description: "Offer or join verified local rides to reduce cost and everyday traffic.",
    icon: "car",
  },
  {
    title: "Society Map",
    description: "Locate gates, parks, mosques, offices, hospitals, and key amenities.",
    icon: "map",
  },
  {
    title: "Resident Profiles",
    description: "Keep resident and property information verified, current, and accessible.",
    icon: "circle-user",
    accent: "green",
  },
];

export const roleContent = {
  Resident: [
    "View and pay society bills",
    "Report and track complaints",
    "Access verified notices",
    "Join community discussions",
    "Use emergency SOS",
    "Find trusted services and carpools",
  ],
  Administrator: [
    "Verify and manage residents",
    "Issue bills and track payments",
    "Resolve complaints with clear status",
    "Publish notices and monitor emergencies",
    "Approve service providers",
    "Moderate platform activity",
  ],
  "Service Provider": [
    "Create a professional profile",
    "List services and availability",
    "Connect with verified residents",
    "Manage resident enquiries",
    "Build trust through accurate information",
    "Improve local visibility",
  ],
  "Super Administrator": [
    "Manage societies and administrators",
    "Review platform-level activity",
    "Configure roles and permissions",
    "Monitor security controls",
    "Access global reporting",
    "Coordinate platform configuration",
  ],
} as const;

export const detailedModules = [
  {
    title: "Authentication & Resident Verification",
    problem: "Open groups and manual identity checks make community access difficult to control.",
    solution: "Structured registration and administrator verification keep each society directory organized.",
    actions: ["Register securely", "Verify resident details", "Manage role access"],
    residentBenefit: "A trusted community environment with a clear account status.",
    managementBenefit: "Controlled onboarding and an accurate resident directory.",
    icon: "badge-check" as IconName,
  },
  {
    title: "Resident Profiles",
    problem: "Contact and property information becomes outdated across paper files and spreadsheets.",
    solution: "A central resident profile keeps personal, contact, and property information together.",
    actions: ["Update profile", "Review property details", "Manage contact information"],
    residentBenefit: "One place to maintain essential society details.",
    managementBenefit: "Cleaner, easier-to-review resident records.",
    icon: "circle-user" as IconName,
  },
  {
    title: "Digital Billing",
    problem: "Paper bills and scattered records make dues difficult to follow.",
    solution: "UrbanEase presents current charges, due dates, history, and status in a clear billing area.",
    actions: ["View upcoming bills", "Review bill details", "Track payment status"],
    residentBenefit: "Clearer dues and fewer missed payment dates.",
    managementBenefit: "Consistent billing records and simpler follow-up.",
    icon: "banknote" as IconName,
  },
  {
    title: "Online Payments",
    problem: "Manual confirmations create delays and reconciliation work.",
    solution: "Structured payment records connect each resident, bill, and transaction status.",
    actions: ["Record payment", "Review receipt", "View payment history"],
    residentBenefit: "A convenient, traceable payment experience.",
    managementBenefit: "Better visibility into collected and pending amounts.",
    icon: "wallet" as IconName,
  },
  {
    title: "Complaints",
    problem: "Phone calls and registers do not show who is handling an issue or what happens next.",
    solution: "Residents submit complaints with details while administrators update progress in one workflow.",
    actions: ["Create complaint", "Add supporting details", "Track status"],
    residentBenefit: "Transparent progress from submission to resolution.",
    managementBenefit: "Prioritized queues, ownership, and clearer service follow-through.",
    icon: "file-check" as IconName,
  },
  {
    title: "E-Notice Board",
    problem: "Important updates disappear in busy chats or on physical boards.",
    solution: "Verified notices are published in a dedicated, searchable feed.",
    actions: ["Publish notice", "Target an audience", "Review recent updates"],
    residentBenefit: "Reliable access to official community information.",
    managementBenefit: "One accountable channel for announcements.",
    icon: "bell" as IconName,
  },
  {
    title: "Community & Private Chat",
    problem: "Unstructured groups mix official, social, and personal communication.",
    solution: "Verified community and private conversations create clearer communication boundaries.",
    actions: ["Join community chat", "Start a private conversation", "Moderate messages"],
    residentBenefit: "A familiar communication experience inside the society platform.",
    managementBenefit: "More organized, policy-aware community communication.",
    icon: "messages-square" as IconName,
  },
  {
    title: "SOS Emergency Alerts",
    problem: "Traditional communication can be too slow during an urgent event.",
    solution: "A focused SOS flow shares an immediate alert with society management and emergency contacts.",
    actions: ["Activate SOS", "Choose emergency type", "Monitor alert status"],
    residentBenefit: "A faster way to request help when time matters.",
    managementBenefit: "A visible alert queue with essential incident context.",
    icon: "siren" as IconName,
  },
  {
    title: "Service Providers",
    problem: "Residents often depend on unverified recommendations and incomplete contact lists.",
    solution: "UrbanEase organizes approved professionals and service information by category.",
    actions: ["Browse categories", "Review provider profiles", "Contact a provider"],
    residentBenefit: "Easier discovery of locally relevant professionals.",
    managementBenefit: "Controlled provider approvals and a better resident experience.",
    icon: "tool-case" as IconName,
  },
  {
    title: "Lost & Found",
    problem: "Lost-item posts quickly disappear in busy group conversations.",
    solution: "Dedicated lost and found records keep descriptions, locations, and status easy to search.",
    actions: ["Post an item", "Search listings", "Mark as returned"],
    residentBenefit: "A better chance of recovering belongings within the community.",
    managementBenefit: "A self-service community workflow with less manual coordination.",
    icon: "search" as IconName,
  },
  {
    title: "Carpooling",
    problem: "Residents have no structured way to coordinate trusted local rides.",
    solution: "Verified members can offer or join community rides with relevant route details.",
    actions: ["Offer a ride", "Find a route", "Manage ride requests"],
    residentBenefit: "Lower travel costs and stronger local coordination.",
    managementBenefit: "A visible, moderated alternative to informal ride posts.",
    icon: "car" as IconName,
  },
  {
    title: "Society Map",
    problem: "New residents and visitors struggle to locate important amenities.",
    solution: "An integrated map organizes gates, parks, mosques, offices, hospitals, and service areas.",
    actions: ["Browse amenities", "Find a location", "Review map details"],
    residentBenefit: "Faster navigation around the society.",
    managementBenefit: "A consistent directory of community locations.",
    icon: "map" as IconName,
  },
  {
    title: "Admin Analytics",
    problem: "Disconnected records make operational trends hard to understand.",
    solution: "A focused dashboard summarizes residents, complaints, collections, alerts, and activity.",
    actions: ["Review KPIs", "Monitor trends", "Inspect recent activity"],
    residentBenefit: "More responsive, evidence-led society operations.",
    managementBenefit: "Clearer priorities and faster operational decisions.",
    icon: "chart" as IconName,
  },
];

