/**
 * Page: Home
 * Rendering: SSG
 * Reason: Public portfolio with static professional content
 */
import { Biography } from "@/app/_components/biography";
import { CtaBanner } from "@/app/_components/cta-banner";
import { Experience } from "@/app/_components/experience";
import { FloatingActions } from "@/app/_components/floating-actions";
import { Hero } from "@/app/_components/hero";
import { ImpactProject } from "@/app/_components/impact-project";
import { PracticePhotos } from "@/app/_components/practice-photos";
import { Services } from "@/app/_components/services";
import { SiteFooter } from "@/app/_components/site-footer";
import { SiteHeader } from "@/app/_components/site-header";
import { SpeciesLanguages } from "@/app/_components/species-languages";
import { WorksAt } from "@/app/_components/works-at";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Biography />
        <Experience />
        <WorksAt />
        <Services />
        <SpeciesLanguages />
        <PracticePhotos />
        <ImpactProject />
        <CtaBanner />
      </main>
      <SiteFooter />
      <FloatingActions />
    </>
  );
}
