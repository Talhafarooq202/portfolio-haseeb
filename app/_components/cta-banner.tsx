import Image from "next/image";
import Link from "next/link";
import { doctor } from "@/lib/data";
import { images } from "@/lib/images";

export function CtaBanner() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white px-4 py-12 pb-24 sm:px-6 sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-peach">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <Image
            src={images.cta.src}
            alt={images.cta.alt}
            fill
            className="object-cover object-center opacity-70"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-peach via-peach/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-xl px-4 py-8 sm:px-6 sm:py-10 md:px-10 md:py-14">
          <h2 className="text-xl font-bold leading-snug text-navy sm:text-2xl md:text-3xl">
            Consult with an experienced veterinary specialist
          </h2>
          <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:flex-row">
            <Link
              href={doctor.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-navy px-5 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep"
            >
              Book An Appointment
            </Link>
            <Link
              href={doctor.phoneHref}
              className="inline-flex cursor-pointer items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-navy shadow-sm transition hover:bg-peach-soft"
            >
              <span className="truncate">Call : {doctor.phoneDisplay}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
