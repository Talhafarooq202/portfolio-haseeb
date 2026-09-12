import Image from "next/image";
import Link from "next/link";
import { rabiesFreePakistan } from "@/lib/data";
import { images } from "@/lib/images";

const project = rabiesFreePakistan;

export function ImpactProject() {
  return (
    <section
      id="project"
      className="scroll-mt-20 bg-surface px-4 py-6 sm:px-6 sm:py-8 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <article className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(26,27,75,0.08)]">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <Link
              href={images.project.src}
              target="_blank"
              rel="noreferrer"
              className="relative block cursor-pointer bg-cream lg:min-h-[520px]"
            >
              <Image
                src={images.project.src}
                alt={images.project.alt}
                width={images.project.width}
                height={images.project.height}
                className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-contain lg:object-center"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </Link>
            <div className="flex min-w-0 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-wide text-rust">
                Community Project
              </p>
              <h2 className="mt-1 text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
                {project.title}
              </h2>
              <p className="mt-2 text-xs text-muted sm:text-sm md:text-base">
                {project.period} · {project.leadOrg}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-body sm:mt-5 sm:leading-7 md:text-[15px]">
                {project.description}
              </p>
              <p className="mt-3 text-sm leading-6 text-ink sm:leading-7">
                {project.contribution}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {project.stats.map((stat) => (
                  <li
                    key={stat.label}
                    className="rounded-full bg-peach px-2.5 py-1 text-xs text-navy sm:px-3.5 sm:py-1.5 sm:text-sm"
                  >
                    {stat.value} {stat.label}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-body sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-sm">
                {project.schools.map((school) => (
                  <li key={school}>{school}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
