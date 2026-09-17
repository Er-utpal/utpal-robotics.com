import { assets, type Asset } from "./assets";

/**
 * Site content.
 *
 * Deliberately free of specifications, pricing and performance claims — those
 * get added here once they are confirmed, and the layouts already account for
 * their absence.
 */

/* -------------------------------------------------------------------------- */
/* What we build — the domains Utpal Robotics works across                     */
/* -------------------------------------------------------------------------- */

export type Domain = {
  index: string;
  name: string;
  description: string;
  image: Asset | null;
  href?: string;
};

export const domains: Domain[] = [
  {
    index: "01",
    name: "Quadrupeds",
    description:
      "Legged platforms for working on locomotion, balance and whole-body control.",
    image: assets.quadruped,
    href: "/products/quadrupeds",
  },
  {
    index: "02",
    name: "Drones",
    description:
      "Quadcopters, FPV airframes and autonomous platforms built to fly outdoors.",
    image: assets.droneFlight,
    href: "/products/drones",
  },
  {
    index: "03",
    name: "Rovers",
    description:
      "Ground vehicles for navigation, terrain handling and manipulation work.",
    image: assets.rover,
  },
  {
    index: "04",
    name: "Spider Robots",
    description:
      "Multi-legged machines — gait generation across many degrees of freedom.",
    image: assets.spider,
  },
  {
    index: "05",
    name: "Robot Swarms",
    description:
      "Several machines coordinating: communication, formation and shared state.",
    image: assets.swarm,
  },
  {
    index: "06",
    name: "Experimental Platforms",
    description:
      "Moonlander-style builds and one-off machines made to test an idea properly.",
    image: null,
  },
];

/* -------------------------------------------------------------------------- */
/* Products                                                                    */
/* -------------------------------------------------------------------------- */

export type Product = {
  index: string;
  name: string;
  href: string;
  summary: string;
  description: string;
  image: Asset;
};

export const products: Product[] = [
  {
    index: "01",
    name: "Robotics Kits",
    href: "/products/robotics-kits",
    summary: "Hardware you assemble yourself, with the guidance to finish it.",
    description:
      "Buildable hardware for people starting out — supplied with assembly guidance, a manual, demonstration video and example projects so the machine ends up working, not shelved.",
    image: assets.spider,
  },
  {
    index: "02",
    name: "Drones",
    href: "/products/drones",
    summary: "Learning drones, FPV airframes and autonomous quadcopters.",
    description:
      "Platforms for learning to fly, for FPV, and for autonomy work — from a first controlled hover through to a machine carrying its own compute.",
    image: assets.fpv,
  },
  {
    index: "03",
    name: "Quadrupeds",
    href: "/products/quadrupeds",
    summary: "Four-legged platforms for serious control and locomotion work.",
    description:
      "Legged robots for people who want to work on the hard parts: actuation, balance, state estimation and the control loops that hold a machine upright.",
    image: assets.quadruped,
  },
];

/* -------------------------------------------------------------------------- */
/* Projects                                                                    */
/* -------------------------------------------------------------------------- */

export type Project = {
  name: string;
  category: string;
  description: string;
  image: Asset | null;
};

export const projects: Project[] = [
  {
    name: "Quadruped Platform",
    category: "Legged robotics",
    description:
      "A four-legged machine used to work through actuation, gait and balance — and to give the control problem a physical body to fail against.",
    image: assets.quadruped,
  },
  {
    name: "Rover with Manipulator",
    category: "Ground systems",
    description:
      "A wheeled platform carrying an arm, built around uneven ground: suspension, traction and picking things up once it arrives.",
    image: assets.rover,
  },
  {
    name: "Aerial Platforms",
    category: "Drone systems",
    description:
      "Quadcopters built for flight outside controlled conditions — airframe, tuning and stable flight in open terrain.",
    image: assets.droneFlight,
  },
  {
    name: "Hexapod Walker",
    category: "Legged robotics",
    description:
      "A six-legged robot for gait generation and coordinating a large number of joints through a single controller.",
    image: assets.spider,
  },
  {
    name: "Swarm Behaviour",
    category: "Multi-robot systems",
    description:
      "Work on several machines acting together: communication between units, formation keeping and shared state.",
    image: assets.swarm,
  },
  {
    name: "FPV Systems",
    category: "Drone systems",
    description:
      "First-person-view airframes — the video link, the latency and the flying itself, which is its own engineering problem.",
    image: null,
  },
];

/* -------------------------------------------------------------------------- */
/* Learn                                                                       */
/* -------------------------------------------------------------------------- */

export type Track = {
  index: string;
  name: string;
  description: string;
};

export const tracks: Track[] = [
  {
    index: "01",
    name: "Robotics Fundamentals",
    description:
      "Frames and transforms, actuators, sensing, power. The groundwork everything else rests on.",
  },
  {
    index: "02",
    name: "Drones",
    description:
      "Airframes, flight controllers, tuning and the discipline of flying without breaking things.",
  },
  {
    index: "03",
    name: "Embedded Systems",
    description:
      "Microcontrollers, timing, communication buses and talking to hardware directly.",
  },
  {
    index: "04",
    name: "Control Systems",
    description:
      "Feedback, stability and tuning — why a machine holds a position instead of oscillating.",
  },
  {
    index: "05",
    name: "Robotics Software",
    description: "ROS, nodes and messages, and structuring code a robot can run.",
  },
  {
    index: "06",
    name: "Computer Vision",
    description:
      "Cameras, calibration and getting usable information out of an image.",
  },
  {
    index: "07",
    name: "Autonomy",
    description:
      "Localisation, planning and decision-making without someone holding the controller.",
  },
  {
    index: "08",
    name: "Simulation",
    description:
      "Testing in simulation first — and understanding where it stops matching reality.",
  },
];

/* -------------------------------------------------------------------------- */
/* Services                                                                    */
/* -------------------------------------------------------------------------- */

export type Service = {
  index: string;
  name: string;
  description: string;
};

export const services: Service[] = [
  {
    index: "01",
    name: "Project Guidance",
    description:
      "Direction for students and builders working through a robotics project — scoping it sensibly, choosing hardware, and getting unstuck when it stops working.",
  },
  {
    index: "02",
    name: "Consulting",
    description:
      "Technical guidance for robotics and drone work: reviewing an approach, weighing options, and identifying what will cause problems later.",
  },
  {
    index: "03",
    name: "Prototyping",
    description:
      "Building and testing a concept physically, so a decision rests on a machine that exists rather than on a document.",
  },
  {
    index: "04",
    name: "Custom Robotics",
    description:
      "Robotic systems developed for a specific job — mechanical design, electronics, and the software that drives them.",
  },
  {
    index: "05",
    name: "Custom Drones",
    description:
      "Drone platforms built around a defined application, from airframe through to flight behaviour and integration.",
  },
];

/* -------------------------------------------------------------------------- */
/* Contact                                                                     */
/* -------------------------------------------------------------------------- */

export const enquiryTopics = [
  "Products",
  "Robotics guidance",
  "Consulting",
  "Custom project",
  "Other",
] as const;

/* -------------------------------------------------------------------------- */
/* Selected work — the founder's documented engineering record                 */
/* -------------------------------------------------------------------------- */

export type WorkItem = {
  index: string;
  name: string;
  /** Short qualifier shown beside the name, e.g. a year range. */
  meta?: string;
  description: string;
  /** Verifiable specifics: award lines, patent numbers, dates. */
  details?: string[];
  link?: { href: string; label: string };
};

/**
 * Documented achievements only. Each entry states what happened and nothing
 * beyond it — no inferred significance, no commercial claims, no rounding up.
 */
export const selectedWork: WorkItem[] = [
  {
    index: "01",
    name: "Smart India Hackathon",
    meta: "2019 / 2020",
    description: "Entered both the hardware and the software editions.",
    details: [
      "Winner — Hardware Edition, 2019",
      "Winner — Software Edition, 2020",
    ],
  },
  {
    index: "02",
    name: "Custom STM32H723 ArduPilot Flight Controller",
    description:
      "A working flight-controller prototype built on an STM32H723 board, running ArduPilot firmware with IMU, barometer, GPS, magnetometer and MAVLink integration.",
    link: {
      href: "https://github.com/Er-utpal/WeAct723-Ardupilot",
      label: "View on GitHub",
    },
  },
  {
    index: "03",
    name: "Quadruped Robotic Platform",
    description:
      "A servo-actuated quadruped designed and developed with gait sequencing, wireless control and mechanical optimisation — part of the wider focus on accessible platforms for education and experimentation.",
  },
  {
    index: "04",
    name: "Non-Invasive IoT Water Flow Meter",
    description:
      "A strap-on measurement system that reads flow through an existing pipe without cutting into it.",
    details: ["Patent 202031038046", "Issued 23 August 2023"],
  },
  {
    index: "05",
    name: "Sky Racer",
    meta: "2nd place",
    description:
      "Second place in a drone-racing challenge organised by Startup Bihar at the IIT Patna incubation centre.",
    details: ["₹40,000 prize"],
  },
  {
    index: "06",
    name: "Bharat Drone Shakti 2023",
    description:
      "Presented a rescue-drone system at Hindon Airbase as part of the VAMA SKYLIGHT team.",
  },
];
