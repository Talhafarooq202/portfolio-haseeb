import { FaBriefcase } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { qualifications } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-surface px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Experience & Qualifications" />
        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {qualifications.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-line bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <FaBriefcase className="h-6 w-6 text-accent" />
              <h3 className="mt-4 text-base font-bold leading-snug text-navy sm:text-lg">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-body">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
