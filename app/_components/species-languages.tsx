import { FaCat, FaDog, FaDove } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { languages, species } from "@/lib/data";

const speciesIcons = {
  dog: FaDog,
  cat: FaCat,
  bird: FaDove,
};

export function SpeciesLanguages() {
  return (
    <section className="bg-surface px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="min-w-0">
          <SectionHeading title="Species Treated" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-5">
            {species.map((item) => {
              const Icon = speciesIcons[item.icon];
              return (
                <article
                  key={item.name}
                  className="flex h-32 w-32 flex-col items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(26,27,75,0.06)] sm:h-40 sm:w-40"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-peach-soft sm:h-20 sm:w-20">
                    <Icon
                      aria-hidden
                      className="h-10 w-10 text-accent sm:h-12 sm:w-12"
                    />
                  </span>
                  <p className="mt-3 text-sm font-bold text-navy sm:text-base">
                    {item.name}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
        <div className="min-w-0">
          <SectionHeading title="Languages" />
          <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 sm:gap-5">
            {languages.map((item) => (
              <article
                key={item.name}
                className="flex h-32 w-28 flex-col items-center justify-center rounded-xl bg-white shadow-[0_8px_24px_rgba(26,27,75,0.06)] sm:h-40 sm:w-32"
              >
                <span className="text-3xl sm:text-4xl" role="img" aria-label={item.label}>
                  {item.flag}
                </span>
                <p className="mt-3 text-sm font-bold text-navy sm:text-base">
                  {item.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
