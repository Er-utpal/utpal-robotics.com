import type { Metadata } from "next";
import { ButtonLink, TextLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { assets } from "@/lib/assets";
import { tracks } from "@/lib/content";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Practical robotics learning with Utpal Robotics — fundamentals, drones, embedded systems, control, robotics software, computer vision, autonomy and simulation, taught on real hardware.",
  alternates: { canonical: "/learn" },
};

const formats = [
  {
    index: "01",
    name: "Manuals",
    description:
      "Written documentation that comes with the hardware — assembly, wiring, and getting to first movement.",
  },
  {
    index: "02",
    name: "Demonstration video",
    description:
      "The machine doing what it should, which is often the fastest way to see what is wrong with yours.",
  },
  {
    index: "03",
    name: "Guided projects",
    description:
      "Structured things to build once the basics hold — each one adding a single new problem.",
  },
  {
    index: "04",
    name: "Direct guidance",
    description:
      "Questions answered by someone who has built the machine you are stuck on.",
  },
];

export default function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Understanding follows building."
        intro="You can read about control theory for a year. You will learn more in the afternoon a machine you assembled finally holds its position — and in the week it spent refusing to."
        image={assets.lab}
        imagePosition="50% 45%"
        caption="Workshop — where the learning actually happens"
      >
        <ButtonLink href="/products/kits" variant="solid-light" arrow>
          Start building
        </ButtonLink>
      </PageHero>

      {/* Approach */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Approach</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="display-lg max-w-[20ch] text-balance">
                Hardware first, explanation alongside it.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              <Reveal delay={80}>
                <p className="body-text text-graphite">
                  Our material is written around machines we actually build. It
                  is not a syllabus delivered in the abstract — it is the
                  explanation that belongs next to a specific robot, at the
                  point where you need it.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  That means starting with something that moves, breaking it,
                  understanding why it broke, and fixing it. Robotics rewards
                  that loop far more than it rewards reading ahead.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Subject areas */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="Subject areas"
            title="What you can work through."
            lead="The ground a practical robotics education has to cover — each one approached through hardware rather than around it."
          />

          <div className="mt-20 grid gap-x-10 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            {tracks.map((track, i) => (
              <Reveal key={track.name} delay={(i % 4) * 60}>
                <div className="border-t border-ink/20 pt-7">
                  <span className="label-mono text-slate">{track.index}</span>
                  <h3 className="display-sm mt-5">{track.name}</h3>
                  <p className="body-text mt-4 text-slate">
                    {track.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How the material arrives */}
      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            label="How it reaches you"
            title="Material attached to a machine."
            lead="Rather than a course catalogue, the teaching travels with the hardware — and grows as more of it is written."
          />

          <div className="mt-20 grid gap-x-12 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-16">
            {formats.map((format, i) => (
              <Reveal key={format.name} delay={(i % 4) * 60}>
                <div className="border-t border-hairline pt-7">
                  <span className="label-mono text-slate">{format.index}</span>
                  <h3 className="display-sm mt-5">{format.name}</h3>
                  <p className="body-text mt-4 text-slate">
                    {format.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-20 border-t border-hairline pt-10 md:mt-24">
              <p className="lead max-w-3xl text-graphite">
                Tutorials, guides and written material are published here as
                they are finished. We would rather release something worth
                reading late than list a curriculum that does not exist yet.
              </p>
              <div className="mt-10">
                <TextLink href="/contact">Ask what is available</TextLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        eyebrow="Learn"
        title="Start building."
        body="Pick a machine, put it together, and let the questions come from the hardware."
      >
        <ButtonLink href="/products/kits" variant="solid-light" arrow>
          Explore kits
        </ButtonLink>
        <ButtonLink href="/contact" variant="outline-light">
          Ask for guidance
        </ButtonLink>
      </CTASection>
    </>
  );
}
