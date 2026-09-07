import Image from "next/image";
import Link from "next/link";
import {
  FaCalendarAlt,
  FaClock,
  FaGlobe,
  FaHome,
  FaPaw,
  FaPhoneAlt,
} from "react-icons/fa";
import { doctor } from "@/lib/data";

const facts = [
  { icon: FaHome, label: doctor.location },
  { icon: FaClock, label: doctor.availability },
  { icon: FaPaw, label: doctor.speciesLabel },
  { icon: FaGlobe, label: doctor.languagesLabel },
];

export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 bg-surface px-4 py-6 sm:px-6 sm:py-8 md:py-12">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 truncate text-xs text-muted sm:mb-4 sm:text-sm">
          PetLife <span className="mx-1 text-line">/</span> Portfolio{" "}
          <span className="mx-1 text-line">/</span> {doctor.name}
        </p>
        <article className="overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(26,27,75,0.08)]">
          <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
            <div className="relative bg-cream lg:min-h-[520px]">
              <Image
                src="/images/image14.jpeg"
                alt="Dr. Abdul Haseeb's Portrait"
                width={2845}
                height={3922}
                className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:object-cover lg:object-top"
                sizes="(max-width: 1024px) 100vw, 38vw"
                priority
              />
            </div>
            <div className="flex min-w-0 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12">
              <h1 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
                {doctor.name}
              </h1>
              <p className="mt-2 text-xs text-muted sm:text-sm md:text-base">
                {doctor.credentials}
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-body sm:mt-5 sm:leading-7 md:text-[15px]">
                {doctor.summary}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                {doctor.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-peach px-2.5 py-1 text-xs text-navy sm:px-3.5 sm:py-1.5 sm:text-sm"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-body sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-sm">
                {facts.map((fact) => (
                  <li key={fact.label} className="flex items-center gap-2">
                    <fact.icon className="h-4 w-4 shrink-0 text-accent-deep" />
                    {fact.label}
                  </li>
                ))}
              </ul>
              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2">
                <Link
                  href={doctor.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-navy px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:py-3"
                >
                  <FaCalendarAlt className="h-4 w-4 shrink-0" />
                  Book An Appointment
                </Link>
                <Link
                  href={doctor.phoneHref}
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-navy px-4 py-2.5 text-sm font-semibold text-navy transition hover:bg-navy hover:text-white sm:py-3"
                >
                  <FaPhoneAlt className="h-4 w-4 shrink-0" />
                  Call Clinic
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
