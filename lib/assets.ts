/**
 * Image + video registry.
 *
 * Every asset the site renders is declared once, here. Replacing a placeholder
 * with real company photography is a one-line change: drop the new file into
 * `public/resources/` and update `src` (plus `alt`, and `width`/`height` if the
 * aspect ratio changes). Nothing else in the codebase needs to be touched.
 *
 * `onWhite: true` marks shots photographed against a white background. Those
 * are rendered with `blend-white-bg` (mix-blend-mode: multiply) so they sit on
 * light surfaces without a visible white box — never place them on dark.
 */

export type Asset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onWhite?: boolean;
};

export const assets = {
  quadruped: {
    src: "/resources/quadruped.webp",
    alt: "A black four-legged robot standing on asphalt, its actuators and wiring exposed.",
    width: 3000,
    height: 1688,
  },
  droneFlight: {
    src: "/resources/drone.webp",
    alt: "A fixed-wing hybrid drone in flight, seen from below against bare winter trees.",
    width: 819,
    height: 1024,
  },
  fpv: {
    src: "/resources/fpv.webp",
    alt: "An FPV racing quadcopter with carbon arms and a forward-facing camera.",
    width: 1024,
    height: 1024,
    onWhite: true,
  },
  rover: {
    src: "/resources/rover.jpg",
    alt: "An aluminium six-wheeled rover with a manipulator arm climbing over rock.",
    width: 1800,
    height: 2695,
  },
  spider: {
    src: "/resources/spider.jpg",
    alt: "A six-legged walking robot with servo-driven joints on a workshop bench.",
    width: 700,
    height: 636,
  },
  swarm: {
    src: "/resources/swarm.jpg",
    alt: "A line of identical multi-legged robots moving in formation.",
    width: 600,
    height: 478,
    onWhite: true,
  },
  lab: {
    src: "/resources/lab.webp",
    alt: "A robotics workshop: benches of hardware, test rigs and workstations under open ceilings.",
    width: 2400,
    height: 902,
  },
  founder: {
    src: "/resources/founder.jpg",
    alt: "Utpal Kant, founder of Utpal Robotics.",
    width: 377,
    height: 471,
  },
  logo: {
    src: "/resources/logo.png",
    alt: "Utpal Robotics",
    width: 1254,
    height: 1254,
  },
} as const satisfies Record<string, Asset>;

export const video = {
  flight: {
    src: "/resources/fpv-flight.mp4",
    poster: "/resources/fpv-flight-poster.webp",
    /** Described for screen readers in place of the moving image. */
    description:
      "Aerial footage tracking a dirt track through high-altitude mountain terrain.",
  },
} as const;
