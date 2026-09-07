import { SectionHeading } from "@/components/section-heading";
import { doctor } from "@/lib/data";
import { images } from "@/lib/images";

export function VideoSection() {
  return (
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#ffebdd_100%)] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={`Video About ${doctor.name}`} />
        <div className="mx-auto mt-8 max-w-[min(100%,36rem)] overflow-hidden rounded-2xl bg-navy shadow-[0_16px_40px_rgba(26,27,75,0.12)] sm:mt-10">
          <video
            className="aspect-[9/16] w-full bg-navy object-contain"
            controls
            muted
            defaultMuted
            playsInline
            preload="metadata"
            aria-label={images.video.alt}
          >
            <source src={encodeURI(images.video.src)} type="video/mp4" />
          </video>
        </div>
        <p className="mt-3 text-center text-sm text-body">
          {doctor.name} · {doctor.clinic} · Lahore
        </p>
      </div>
    </section>
  );
}
