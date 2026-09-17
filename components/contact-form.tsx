"use client";

import { useState, type FormEvent } from "react";
import { enquiryTopics } from "@/lib/content";
import { site } from "@/lib/site";

const field =
  "w-full border-b border-hairline bg-transparent py-4 text-[1.0625rem] text-ink transition-colors duration-300 outline-none placeholder:text-slate focus:border-ink";

/**
 * Front-end enquiry form.
 *
 * There is no backend yet, so nothing is stored or transmitted here: the form
 * composes a message and hands it to the visitor's own email client. The copy
 * says exactly that, and the address is always visible as a direct alternative.
 */
export function ContactForm() {
  const [topic, setTopic] = useState<string>(enquiryTopics[0]);
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const from = String(data.get("email") ?? "").trim();

    const body = [
      message,
      "",
      "—",
      name && `From: ${name}`,
      from && `Reply to: ${from}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `${topic} — enquiry from ${name || "the website"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <fieldset className="border-0 p-0">
        <legend className="label-mono text-slate">What is this about</legend>
        <div className="mt-6 flex flex-wrap gap-3">
          {enquiryTopics.map((option) => {
            const active = topic === option;
            return (
              <label
                key={option}
                className={`cursor-pointer border px-5 py-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.14em] transition-colors duration-300 ${
                  active
                    ? "border-ink bg-ink text-paper"
                    : "border-hairline text-slate hover:border-ink hover:text-ink"
                }`}
              >
                <input
                  type="radio"
                  name="topic"
                  value={option}
                  checked={active}
                  onChange={() => setTopic(option)}
                  className="sr-only"
                />
                {option}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-14 grid gap-10 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-mono text-slate">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" className={`${field} mt-3`} />
        </div>
        <div>
          <label htmlFor="email" className="label-mono text-slate">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={`${field} mt-3`}
          />
        </div>
      </div>

      <div className="mt-10">
        <label htmlFor="message" className="label-mono text-slate">
          What are you building
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A few lines about the project, where you are with it, and what you need."
          className={`${field} mt-3 resize-y`}
        />
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-6">
        <button
          type="submit"
          className="inline-flex items-center gap-3 bg-ink px-7 py-4 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-graphite"
        >
          Open in email
          <svg
            aria-hidden="true"
            viewBox="0 0 16 10"
            className="h-2.5 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          >
            <path d="M0 5h14.5M10.5 1l4 4-4 4" />
          </svg>
        </button>
        <p className="body-text max-w-xs text-slate" role="status">
          {sent
            ? "Your email client should now be open with the message ready to send."
            : "This opens the message in your own email app — nothing is stored on this site."}
        </p>
      </div>
    </form>
  );
}
