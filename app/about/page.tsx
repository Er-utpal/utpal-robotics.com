import Image from "next/image";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { FounderSection } from "@/components/founder-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SelectedWork } from "@/components/selected-work";
import { assets } from "@/lib/assets";
import { activeProfiles } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Utpal Robotics exists to make practical robotics more accessible. Founded by Utpal Kant, an autonomous UAV systems engineer working across UAV systems, flight control, embedded systems and quadruped robotics.",
  alternates: { canonical: "/about" },
};

/** The loop the company is built around. */
const beliefs = [
  {
    index: "01",
    name: "Learn",
    description:
      "Enough theory to start, not enough to stall. The rest arrives when the hardware asks for it.",
  },
  {
    index: "02",
    name: "Build",
    description:
      "Assemble it yourself. Understanding begins at the point your own hands are involved.",
  },
  {
    index: "03",
    name: "Experiment",
    description:
      "Change it, push it, break it. A machine teaches most on the runs where it fails.",
  },
  {
    index: "04",
    name: "Improve",
    description:
      "Fix what broke and go round again. Every loop leaves you with a better machine.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build robotics to make robotics more accessible."
        intro="A company sitting deliberately between education, hardware, experimentation and engineering — because that is where people get stuck."
        tone="light"
        height="short"
      />

      {/* Company story */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">The company</p>
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
                  Robotics is taught almost everywhere and practised in far
                  fewer places, and the gap between the two is where most people
                  lose momentum — usually not for lack of ability, but for lack
                  of a machine and someone to ask.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  Utpal Robotics builds the hardware, writes the material that
                  explains it, runs its own experimental platforms, and takes on
                  engineering work for people who need something built. Each
                  side keeps the others honest.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop */}
      <section className="relative h-[52vh] min-h-[300px] overflow-hidden bg-ink md:h-[62vh]">
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

      {/* What we believe */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="What we believe"
            title="Four steps, then start again."
            lead="Not a methodology. Just the order the work actually happens in, for anyone who has built a machine that did not work the first time."
          />

          <ol className="mt-20 grid gap-x-10 gap-y-12 md:mt-24 md:grid-cols-2 lg:grid-cols-4 lg:gap-x-12">
            {beliefs.map((belief, i) => (
              <Reveal key={belief.name} delay={(i % 4) * 70} as="li">
                <div className="border-t border-ink/20 pt-7">
                  <span className="label-mono text-slate">{belief.index}</span>
                  <h3 className="display-md mt-5">{belief.name}</h3>
                  <p className="body-text mt-4 text-slate">
                    {belief.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FounderSection />

      {/* Selected work */}
      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            label="Selected work"
            title="The record behind the company."
            lead="Competitions, a granted patent and hardware built from the board up — listed as documented, without embellishment."
          />

          <div className="mt-20 md:mt-24">
            <SelectedWork />
          </div>

          {/* Professional references */}
          {activeProfiles.length > 0 && (
            <div className="mt-20 border-t border-hairline pt-14 md:mt-24">
              <Reveal>
                <p className="label-mono text-slate">Elsewhere</p>
              </Reveal>
              <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:max-w-3xl lg:gap-16">
                {activeProfiles.map((profile, i) => (
                  <Reveal key={profile.label} delay={i * 80}>
                    <a
                      href={profile.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group block"
                    >
                      <span className="display-sm inline-flex items-center gap-3">
                        {profile.label}
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 16 10"
                          className="h-2.5 w-4 text-slate transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-ink"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.25"
                        >
                          <path d="M0 5h14.5M10.5 1l4 4-4 4" />
                        </svg>
                      </span>
                      <p className="body-text mt-3 text-slate">
                        {profile.description}
                      </p>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection
        eyebrow="Get in touch"
        title="Build something with us."
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
