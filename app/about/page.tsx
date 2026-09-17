import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "About",
  description:
    "Utpal Robotics exists to make practical robotics more accessible — sitting between education, hardware, experimentation and engineering.",
  alternates: { canonical: "/about" },
};

const pillars = [
  {
    index: "01",
    name: "Education",
    description:
      "Material written around real machines, for people who want to understand what they are building rather than follow steps.",
  },
  {
    index: "02",
    name: "Hardware",
    description:
      "Kits, drones and platforms that are meant to be assembled, opened up, modified and occasionally broken.",
  },
  {
    index: "03",
    name: "Experimentation",
    description:
      "Our own builds — quadrupeds, rovers, swarms and one-off machines — where the harder problems get worked out first.",
  },
  {
    index: "04",
    name: "Engineering",
    description:
      "Direct work with people and teams: guidance, prototypes and custom robotic systems built for a specific purpose.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Between the classroom and the workshop."
        intro="Utpal Robotics exists to make practical robotics more accessible — to close the distance between studying how machines work and having one in front of you that does."
        tone="light"
        height="short"
      />

      {/* Position */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">What we are</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="display-lg max-w-[22ch] text-balance">
                People learn robotics best when they can build, break, test and
                improve a real machine.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              <Reveal delay={80}>
                <p className="body-text text-graphite">
                  That belief is the whole reason the company exists. Robotics
                  is taught almost everywhere and practised in far fewer places,
                  and the gap between the two is where most people lose momentum
                  — usually not for lack of ability, but for lack of a machine
                  and someone to ask.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  So we sit deliberately in the middle: building hardware,
                  writing the material that explains it, running our own
                  experimental platforms, and taking on engineering work for
                  people who need something built. Each side keeps the others
                  honest.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Four sides */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="How it fits together"
            title="Four sides of the same work."
            lead="None of these stand alone. The teaching comes out of the building, and the engineering work feeds straight back into both."
          />

          <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:gap-x-20">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.name} delay={(i % 2) * 80}>
                <div className="border-t border-ink/20 pt-7">
                  <span className="label-mono text-slate">{pillar.index}</span>
                  <h3 className="display-md mt-5">{pillar.name}</h3>
                  <p className="body-text mt-5 max-w-lg text-slate">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop band */}
      <section className="relative h-[52vh] min-h-[300px] overflow-hidden bg-ink md:h-[64vh]">
        <Image
          src={assets.lab.src}
          alt={assets.lab.alt}
          fill
          sizes="100vw"
          className="object-cover object-[35%_50%]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent"
        />
      </section>

      {/* Who it is for */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeading
              label="Who we work with"
              title="Anyone serious about building."
            />
          </div>
          <div className="grid gap-10 lg:col-span-6 lg:pt-4">
            <Reveal delay={80}>
              <p className="body-text text-graphite">
                Most of the people we work with are students, recent graduates
                and enthusiasts — someone partway through a project, or someone
                who wants to start one and is not sure which machine to begin
                with.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <p className="body-text text-graphite">
                The rest are early-stage teams and organisations who need a
                prototype, a custom platform, or a second opinion from someone
                who has built the thing before. The conversation starts the same
                way in both cases: what are you trying to make, and where are
                you stuck?
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Get in touch"
        title="Come and build something."
        body="Whether it is your first robot or a platform your team depends on, start with a message."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Contact us
        </ButtonLink>
        <ButtonLink href="/products" variant="outline-light">
          Explore products
        </ButtonLink>
      </CTASection>
    </>
  );
}
