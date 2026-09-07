import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { services } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-peach-soft px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Services provided" variant="rust" align="left" />
        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-xl bg-white p-5 shadow-[0_8px_24px_rgba(26,27,75,0.06)] transition hover:-translate-y-0.5 hover:shadow-md sm:p-6"
            >
              <ServiceIcon icon={service.icon} />
              <h3 className="mt-4 text-base font-bold text-navy sm:mt-5 sm:text-lg">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-body">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
