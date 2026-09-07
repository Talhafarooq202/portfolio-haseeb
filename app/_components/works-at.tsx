import Image from "next/image";
import Link from "next/link";
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { doctor } from "@/lib/data";
import { images } from "@/lib/images";

export function WorksAt() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Works at" variant="rust" align="left" />
        <div className="mt-6 grid items-center gap-6 sm:mt-8 lg:grid-cols-[0.9fr_1.2fr_1fr]">
          <div className="relative h-44 overflow-hidden rounded-xl sm:h-52 lg:h-44">
            <Image
              src={images.clinic.src}
              alt={images.clinic.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 260px"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy sm:text-xl">{doctor.clinic}</h3>
            <p className="mt-2 text-sm text-body">{doctor.address}</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-body">
              <li className="flex items-center gap-2">
                <FaClock className="h-4 w-4 text-accent-deep" />
                24/7
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="h-4 w-4 text-accent-deep" />
                {doctor.phoneDisplay}
              </li>
              <li className="flex items-center gap-2">
                <FaClock className="h-4 w-4 text-accent-deep" />
                24/7 emergency
              </li>
            </ul>
            <Link
              href={doctor.phoneHref}
              className="mt-5 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-navy px-4 py-3 text-sm font-semibold text-white transition hover:bg-navy-deep sm:w-auto sm:min-w-[220px]"
            >
              <FaPhoneAlt className="h-4 w-4" />
              Call clinic
            </Link>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl border border-line">
              <iframe
                title={`Map showing ${doctor.clinic} in Lahore`}
                src={doctor.mapEmbed}
                className="h-44 w-full sm:h-52 lg:h-40"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <Link
              href={doctor.mapHref}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-cream px-4 py-3 text-sm font-semibold text-rust transition hover:bg-peach"
            >
              <FaMapMarkerAlt className="h-4 w-4" />
              View on map
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
