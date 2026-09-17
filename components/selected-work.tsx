import { Reveal } from "./reveal";
import { selectedWork } from "@/lib/content";

/**
 * The founder's documented engineering record.
 *
 * Editorial rows on hairlines, matching the services and domain lists already
 * used across the site — no cards, badges or achievement grid. Specifics like
 * award lines, patent numbers and prizes sit in the mono register, where the
 * rest of the site puts technical detail, so they read as reference rather
 * than as decoration.
 */
export function SelectedWork() {
  return (
    <ul>
      {selectedWork.map((item, i) => (
        <Reveal key={item.name} delay={(i % 3) * 50} as="li">
          <div className="grid gap-5 border-t border-hairline py-10 md:grid-cols-12 md:gap-8 md:py-12">
            <span className="label-mono text-slate md:col-span-1 md:pt-3">
              {item.index}
            </span>

            <div className="md:col-span-5 md:pr-10">
              <h3 className="display-sm text-balance">{item.name}</h3>
              {item.meta && (
                <p className="label-mono mt-4 text-slate">{item.meta}</p>
              )}
            </div>

            <div className="md:col-span-6 md:pt-2">
              <p className="body-text max-w-xl text-slate">{item.description}</p>

              {item.details && (
                <ul className="mt-5 space-y-2">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex gap-3.5 font-mono text-[0.75rem] tracking-[0.04em] text-graphite"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-px w-3 shrink-0 bg-slate"
                      />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}

              {item.link && (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/btn mt-7 inline-flex items-center gap-2.5 border-b border-ink/25 pb-1.5 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] transition-colors duration-300 hover:border-ink"
                >
                  {item.link.label}
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 16 10"
                    className="h-2.5 w-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/btn:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.25"
                  >
                    <path d="M0 5h14.5M10.5 1l4 4-4 4" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </ul>
  );
}
