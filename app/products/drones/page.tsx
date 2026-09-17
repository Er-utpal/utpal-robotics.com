import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/structured-data";
import { pageMetadata } from "@/lib/seo";
import { ButtonLink, TextLink } from "@/components/button-link";
import { CTASection } from "@/components/cta-section";
import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoSection } from "@/components/video-section";
import { assets } from "@/lib/assets";

export const metadata: Metadata = pageMetadata({
  title: "Drones & Quadcopter Platforms",
  description:
    "Learning drones, FPV airframes, autonomous quadcopters and custom drone systems, built so that flying them teaches you how they actually work.",
  path: "/products/drones",
});

const platforms = [
  {
    index: "03",
    name: "Autonomous quadcopters",
    description:
      "Aircraft that carry their own compute and make their own decisions — positioning, waypoints and behaviour that continues when nobody is holding the controller.",
  },
  {
    index: "04",
    name: "Custom drone systems",
    description:
      "Platforms designed around a specific job: the airframe, what it carries, and the software that makes the two work together. Built with you, from the requirement up.",
    href: "/services",
    linkLabel: "How custom work runs",
  },
];

export default function DronesPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Home", path: "/" }, { name: "Products", path: "/products" }, { name: "Drones", path: "/products/drones" }]}
      />
      <VideoSection
        hero
        eyebrow="Products — Drones"
        title="Machines that leave the ground."
        body="Learning drones, FPV airframes and autonomous platforms — built so that flying them teaches you something about how they work."
        caption="Aerial footage"
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Enquire
        </ButtonLink>
        <ButtonLink href="/products" variant="outline-light">
          All products
        </ButtonLink>
      </VideoSection>

      {/* Introduction */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-3">
            <p className="label-mono text-slate">Flight</p>
          </Reveal>
          <div className="lg:col-span-9">
            <Reveal>
              <h2 className="display-lg max-w-[18ch] text-balance">
                Air is an unforgiving place to learn.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
              <Reveal delay={80}>
                <p className="body-text text-graphite">
                  A drone gives immediate, physical feedback. A badly tuned loop
                  is not a warning in a console — it is a wobble you can see, and
                  then a repair. That is exactly what makes it worth learning on.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p className="body-text text-graphite">
                  We work across the range: airframes for a first controlled
                  hover, FPV machines built for the feel of flying, and aircraft
                  carrying enough compute to navigate on their own.
                </p>
                <div className="mt-10">
                  <TextLink href="/projects">See the aerial platforms</TextLink>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-y bg-bone">
        <div className="container-page">
          <SectionHeading
            label="Platforms"
            title="Four ways into flight."
            lead="Where you start depends on what you want to come away knowing."
          />

          <div className="mt-20 grid items-end gap-x-8 gap-y-16 md:mt-24 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Media
                asset={assets.droneFlight}
                aspect="aspect-[4/5]"
                sizes="(min-width: 1024px) 40vw, 92vw"
              />
              <div className="mt-6 flex items-baseline gap-4 border-t border-hairline pt-5">
                <span className="label-mono text-slate">01</span>
                <h3 className="display-sm">Learning drones</h3>
              </div>
              <p className="body-text mt-4 max-w-sm text-slate">
                Airframes meant to be built, flown, crashed and repaired — the
                fastest honest route to understanding how an aircraft holds
                itself in the air.
              </p>
            </Reveal>

            <Reveal delay={100} className="lg:col-span-7">
              <Media
                asset={assets.fpv}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 56vw, 92vw"
              />
              <div className="mt-6 flex items-baseline gap-4 border-t border-hairline pt-5">
                <span className="label-mono text-slate">02</span>
                <h3 className="display-sm">FPV platforms</h3>
              </div>
              <p className="body-text mt-4 max-w-md text-slate">
                Carbon airframes flown from the aircraft&rsquo;s own point of
                view. The video link, the latency and the control feel all become
                part of the engineering.
              </p>
            </Reveal>
          </div>

          <div className="mt-20 grid gap-x-8 gap-y-14 md:mt-24 lg:grid-cols-2 lg:gap-x-20">
            {platforms.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 80}>
                <div className="border-t border-ink/20 pt-8">
                  <span className="label-mono text-slate">{platform.index}</span>
                  <h3 className="display-md mt-5 max-w-[16ch] text-balance">
                    {platform.name}
                  </h3>
                  <p className="body-text mt-5 max-w-lg text-slate">
                    {platform.description}
                  </p>
                  {platform.href && (
                    <div className="mt-7">
                      <TextLink href={platform.href}>{platform.linkLabel}</TextLink>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        eyebrow="Drones"
        title="Tell us what it needs to do."
        body="Whether it is a first build or a platform for a specific job, describe the flight and we will tell you what it takes."
      >
        <ButtonLink href="/contact" variant="solid-light" arrow>
          Enquire
        </ButtonLink>
        <ButtonLink href="/products/robotics-kits" variant="outline-light">
          Explore kits
        </ButtonLink>
      </CTASection>
    </>
  );
}
