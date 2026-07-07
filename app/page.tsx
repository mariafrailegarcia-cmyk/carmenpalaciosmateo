import BandaObras from "@/components/BandaObras";
import MobileMenu from "@/components/MobileMenu";
import NavLinks from "@/components/NavLinks";

export default function Inicio() {
  return (
    <div className="pt-8 pb-16 md:pt-16">
      <header>
        <div className="flex items-start justify-between gap-4">
          <h1 className="max-w-2xl text-[clamp(1.75rem,2.8vw,2.5rem)] leading-[1.1] font-bold tracking-[-0.02em]">
            Carmen Palacios Mateo
          </h1>
          <MobileMenu />
        </div>
        <nav
          aria-label="Principal"
          className="mt-10 hidden border-b border-line pb-3 text-[0.8125rem] sm:block"
        >
          <NavLinks />
        </nav>
      </header>

      <BandaObras />
    </div>
  );
}
