import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mx-auto mt-26 w-full max-w-7xl px-6 pb-10 md:px-10">
      <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-line pt-6 text-[0.6875rem] tracking-[0.14em] text-mist uppercase">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <a
          href={`mailto:${site.email}`}
          className="transition-colors duration-300 hover:text-ink"
        >
          {site.email}
        </a>
      </div>
    </footer>
  );
}
