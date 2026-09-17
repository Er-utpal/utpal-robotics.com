import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { activeProfiles, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Utpal Robotics about robotics kits, drones, project guidance, consulting or a custom robotic system.",
  alternates: { canonical: "/contact" },
};

const helpful = [
  "What you are trying to build, in a sentence or two",
  "Where it currently stands — idea, half-built, or stuck",
  "Whether it is for a course, a team, or your own interest",
  "Any deadline you are working to",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let&rsquo;s build something.</>}
        intro="Tell us what you are working on. A few honest lines are worth more than a formal brief."
        tone="light"
        height="short"
      />

      <section className="section-y bg-paper">
        <div className="container-page grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal>
              <ContactForm />
            </Reveal>
          </div>

          <aside className="lg:col-span-5 lg:pl-8">
            <Reveal delay={80}>
              <div className="border-t border-hairline pt-7">
                <p className="label-mono text-slate">Direct</p>
                <a
                  href={`mailto:${site.email}`}
                  className="display-sm mt-5 inline-block break-all transition-colors duration-300 hover:text-slate"
                >
                  {site.email}
                </a>
                <p className="body-text mt-4 text-slate">
                  Write to us directly if you would rather not use the form.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-12 border-t border-hairline pt-7">
                <p className="label-mono text-slate">Useful to include</p>
                <ul className="mt-6 space-y-3">
                  {helpful.map((item) => (
                    <li key={item} className="body-text flex gap-4 text-graphite">
                      <span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-silver" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {activeProfiles.length > 0 && (
              <Reveal delay={200}>
                <div className="mt-12 border-t border-hairline pt-7">
                  <p className="label-mono text-slate">Elsewhere</p>
                  <ul className="mt-5 space-y-3">
                    {activeProfiles.map(({ label, href }) => (
                      <li key={label}>
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="display-sm inline-block transition-colors duration-300 hover:text-slate"
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )}
          </aside>
        </div>
      </section>
    </>
  );
}
