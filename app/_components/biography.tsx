import { SectionHeading } from "@/components/section-heading";
import { biography } from "@/lib/data";

export function Biography() {
  return (
    <section id="about" className="scroll-mt-20 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Biography" />
        <div className="mt-8 space-y-5 text-sm leading-7 text-body sm:mt-10 sm:space-y-6 sm:text-[15px] sm:leading-8 md:text-base">
          {biography.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
