import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Quadruped Robots",
  description:
    "Four-legged robots from Utpal Robotics — practical platforms for locomotion, control, sensing, embedded systems and autonomy work on real hardware.",
  alternates: { canonical: "/products/quadrupeds" },
};

const disciplines = [
  {
    index: "01",
    name: "Locomotion",
    description:
      "Gaits, footfall timing and the mechanics of moving a body on legs rather than wheels.",
  },
  {
    index: "02",
    name: "Control",
    description:
      "Feedback loops that keep a machine upright while the ground refuses to cooperate.",
  },
  {
    index: "03",
    name: "Sensors",
    description:
      "Encoders, inertial measurement and the business of knowing where the robot actually is.",
  },
  {
    index: "04",
    name: "Embedded systems",
    description:
      "Timing, communication and driving a dozen actuators without falling behind.",
  },
  {
    index: "05",
    name: "Robotics software",
    description:
      "Structuring code that has to run continuously on a machine that can fall over.",
  },
  {
    index: "06",
    name: "Autonomy",
    description:
      "Deciding where to put the next foot without anyone holding the controller.",
  },
];

export default function QuadrupedsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products — Quadrupeds"
        title="Four legs. One hard problem."
        intro="A legged robot has nowhere to hide. Every shortcut in the control loop shows up immediately, in the only test that matters: whether it stays standing."
        image={assets.quadruped}
        imagePosition="40% 55%"
        caption="Quadruped platform — actuation and control"
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Enquire
        </ButtonLink>
        <ButtonLink href="/products" variant="outline-light">
          All products
        </ButtonLink>
      </PageHero>

      {/* Why legs */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Why legs</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="display-lg max-w-[20ch] text-balance">
                The most honest teaching platform in robotics.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              <Reveal delay={80}>
                <p className="body-text text-graphite">
                  A wheeled robot forgives a lot. A legged one does not. It has
                  to sense its own state, decide continuously, and commit to
                  each step — and when the maths is wrong, it lands on the
                  floor in front of you.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  That immediacy is why quadrupeds make such good platforms to
                  learn on. The whole stack — actuation, sensing, control and
                  software — has to work at once, and you find out straight away
                  which part does not.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplines */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="What you work on"
            title="One machine, the whole stack."
            lead="A quadruped is not a single subject. It is where six of them meet, on hardware you can put your hands on."
          />

          <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
            {disciplines.map((discipline, i) => (
              <Reveal key={discipline.name} delay={(i % 3) * 70}>
                <div className="border-t border-ink/20 pt-7">
                  <span className="label-mono text-slate">
                    {discipline.index}
                  </span>
                  <h3 className="display-sm mt-5">{discipline.name}</h3>
                  <p className="body-text mt-4 text-slate">
                    {discipline.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed detail band */}
      <section className="relative h-[52vh] min-h-[320px] overflow-hidden bg-ink md:h-[68vh]">
        <Image
          src={assets.quadruped.src}
          alt="Close detail of the quadruped's leg actuators and wiring."
          fill
          sizes="100vw"
          className="object-cover object-[22%_68%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent"
        />
        <p className="container-page absolute inset-x-0 bottom-0 pb-8 text-right font-mono text-[0.6875rem] tracking-[0.12em] text-white/70 [text-shadow:0_1px_6px_rgb(11_11_11/0.9)]">
          Actuators, linkages and wiring — exposed by design
        </p>
      </section>

      {/* Build on it */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <SectionHeading
              label="Working with one"
              title="A platform you keep developing against."
              lead="The hardware is only the starting point. What it is worth depends on how long you keep building on it — new controllers, new sensors, new behaviour."
            />
          </div>
          <Reveal delay={120} className="lg:col-span-5 lg:pt-20">
            <p className="body-text text-graphite">
              Specific configurations and availability are confirmed case by
              case, because what a quadruped needs to be depends entirely on
              what you intend to do with it. Tell us what you are working on —
              a course, a research problem, a personal build — and we will be
              straightforward about what we can supply and support.
            </p>
            <div className="mt-10">
              <ButtonLink href="/contact" arrow>
                Discuss a quadruped
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Quadrupeds"
        title="Start with something that stands up."
        body="Tell us what you want the machine to do, and we will tell you what it takes to get there."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Enquire
        </ButtonLink>
        <ButtonLink href="/projects" variant="outline-light">
          See the work
        </ButtonLink>
      </CTASection>
    </>
  );
}
