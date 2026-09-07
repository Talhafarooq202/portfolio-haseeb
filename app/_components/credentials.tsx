"use client";

import { Carousel } from "@/components/carousel";
import { CredentialCard } from "@/components/credential-card";
import { SectionHeading } from "@/components/section-heading";
import { licenses, memberships } from "@/lib/data";

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-20 bg-surface px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
        <div className="min-w-0 rounded-2xl bg-white px-3 py-6 shadow-[0_8px_24px_rgba(26,27,75,0.05)] sm:px-5 sm:py-8">
          <SectionHeading title="Professional Licenses" />
          <div className="mt-6 sm:mt-8">
            <Carousel itemClassName="w-[min(220px,78%)] sm:w-[230px] shrink-0 snap-start">
              {licenses.map((license) => (
                <CredentialCard key={license.acronym} credential={license} />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="min-w-0 rounded-2xl bg-white px-3 py-6 shadow-[0_8px_24px_rgba(26,27,75,0.05)] sm:px-5 sm:py-8">
          <SectionHeading title="Professional Memberships" />
          <div className="mt-6 sm:mt-8">
            <Carousel itemClassName="w-[min(220px,78%)] sm:w-[230px] shrink-0 snap-start">
              {memberships.map((membership) => (
                <CredentialCard key={membership.acronym} credential={membership} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
