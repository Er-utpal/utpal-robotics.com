import { assets, type Asset } from "./assets";

/**
 * Global site configuration.
 *
 * Anything here is real and verifiable. Links that do not exist yet are left
 * as `null` and the UI simply does not render them — nothing is invented.
 */

export const site = {
  name: "Utpal Robotics",
  shortName: "UTPAL ROBOTICS",
  email: "utpalkant.uav@gmail.com",
  description:
    "Utpal Robotics builds robotics kits, drones and quadruped platforms, and works with students, builders and engineering teams turning robotics ideas into working machines.",
  /**
   * Set once a production domain is live — used for canonical + Open Graph URLs.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://utpalrobotics.com",
  /**
   * ISO country code, used only in Organization structured data.
   *
   * Inferred from the founder's documented record — an Indian patent, Startup
   * Bihar, IIT Patna, Hindon Airbase — rather than from a confirmed registered
   * address. Confirm it, and add a locality and region here if you want the
   * site to compete for local searches.
   */
  country: "IN" as string | null,
} as const;

/**
 * External profiles.
 *
 * Set a URL to surface that link in the footer and on the contact page; leave
 * it null and nothing renders. Nothing here is ever invented — add a profile
 * only once the account genuinely exists.
 */
export const profiles: {
  label: string;
  href: string | null;
  /** What a visitor will actually find there. */
  description: string;
}[] = [
  {
    label: "LinkedIn",
    href: "https://in.linkedin.com/in/utpal-kant-uav",
    description: "Professional profile",
  },
  {
    label: "GitHub",
    href: "https://github.com/Er-utpal",
    description: "Engineering projects",
  },
];

/** Only the profiles that have a real URL behind them. */
export const activeProfiles = profiles.filter(
  (profile): profile is { label: string; href: string; description: string } =>
    Boolean(profile.href),
);

/**
 * The person behind the company.
 *
 * Every field is documented fact. Nothing here is inferred, rounded up or
 * padded out — if something cannot be verified it is left out rather than
 * guessed at. The About page skips any part that is null.
 */
export type Founder = {
  name: string;
  /** Relationship to the company. */
  role: string;
  /** Engineering discipline, stated as they state it themselves. */
  discipline: string;
  /** Positioning sentence, set in larger type. */
  lead: string;
  /** What the work actually covers. */
  focus: string;
  portrait: Asset | null;
};

export const founder: Founder | null = {
  name: "Utpal Kant",
  role: "Founder, Utpal Robotics",
  discipline: "Autonomous UAV Systems Engineer",
  lead:
    "Utpal Kant is an autonomous UAV systems engineer and the founder of Utpal Robotics, focused on making practical robotics and autonomous systems more accessible to students, builders and emerging engineering teams.",
  focus:
    "His work spans UAV systems, flight control, embedded systems, robotics, autonomous systems, quadruped robotics and practical robotics education.",
  portrait: assets.founder,
};

export const navigation = [
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/learn", label: "Learn" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const;
