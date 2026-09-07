import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { doctor } from "@/lib/data";
import { images } from "@/lib/images";

export function VideoSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#ffebdd_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={`Video About ${doctor.name}`} />
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-navy shadow-[0_16px_40px_rgba(26,27,75,0.12)] sm:mt-10">
          <div className="relative aspect-video">
            <Image
              src={images.video.src}
              alt={images.video.alt}
              fill
              className="object-cover"
              sizes="(max-width: 896px) 100vw, 896px"
            />
            <div className="absolute inset-0 bg-navy/30" />
            <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-6 sm:bottom-6">
              <p className="text-sm font-semibold md:text-base">
                Veterinary Interview Presentation
              </p>
              <p className="mt-1 text-xs text-white/85 md:text-sm">
                {doctor.name} · {doctor.clinic} · Lahore
              </p>
            </div>
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy shadow-lg sm:h-16 sm:w-16">
              <FaPlay className="h-6 w-6 sm:h-7 sm:w-7" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
