import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col justify-center bg-ink text-paper">
      <div className="container-page py-28">
        <p className="label-mono text-white/55">Error 404</p>
        <h1 className="display-xl mt-8 max-w-[16ch] text-balance">
          This page isn&rsquo;t here.
        </h1>
        <p className="lead mt-8 max-w-lg text-white/65">
          The link may be out of date, or the page may have moved. Everything
          else is still where you left it.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <ButtonLink href="/" variant="solid-light" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/products" variant="outline-light">
            Explore products
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
