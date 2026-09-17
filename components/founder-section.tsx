import Image from "next/image";
import { Reveal } from "./reveal";
import { founder } from "@/lib/site";

/**
 * The founder, on the About page.
 *
 * An engineering profile rather than a personal portfolio: portrait, name,
 * discipline, and what the work covers — then the record itself follows in
 * `SelectedWork`. No invented quote is put in anyone's mouth, so the
 * positioning sentence carries the display type instead.
 *
 * Set on the dark surface because the portrait is a monochrome photograph with
 * a near-black background: on ink it bleeds into the page rather than sitting
 * in a box. Renders nothing until `founder` is filled in, and drops the
 * portrait column cleanly if there is no photograph.
 */
export function FounderSection() {
  if (!founder) return null;

  const { name, role, discipline, lead, focus, portrait } = founder;

  return (
    <section className="section-y bg-ink text-paper">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-20">
        {portrait && (
          <Reveal className="lg:col-span-4">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden bg-ink">
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 88vw"
                className="object-cover"
              />
              {/* The photograph's own background is near-black, so its top and
                  side edges already disappear into the section. This carries
                  the bright lower half out the same way, instead of leaving the
                  shirt cut off against a hard rectangular edge. */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent"
              />
            </div>
          </Reveal>
        )}

        <div className={portrait ? "lg:col-span-8" : "lg:col-span-9"}>
          <Reveal>
            <p className="label-mono text-white/55">Founder</p>
          </Reveal>

          <Reveal delay={60}>
            <h2 className="display-lg mt-8">{name}</h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-6 flex flex-col gap-1.5 border-t border-hairline-dark pt-6 sm:flex-row sm:gap-6 sm:border-0 sm:pt-0">
              <p className="label-mono text-white/55">{role}</p>
              <p className="label-mono text-white/55">{discipline}</p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <p className="lead mt-10 max-w-2xl text-white/80">{lead}</p>
          </Reveal>

          <Reveal delay={200}>
            <p className="body-text mt-7 max-w-2xl text-white/65">{focus}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
