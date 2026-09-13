"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaInstagram } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { featuredProjects } from "@/lib/data";
import type { ImpactProject as ImpactProjectData } from "@/lib/types";

const INTERVAL_MS = 3500;

function ProjectCard({ project }: { project: ImpactProjectData }) {
  const { image } = project;
  const items = project.highlights ?? project.schools ?? [];

  return (
    <article className="h-full overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(26,27,75,0.08)]">
      <div className="grid h-full lg:grid-cols-[0.38fr_0.62fr]">
        <Link
          href={image.src}
          target="_blank"
          rel="noreferrer"
          className="relative block min-h-[240px] cursor-pointer bg-cream sm:min-h-[320px] lg:min-h-[520px]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={`object-center ${
              image.objectFit === "cover" ? "object-cover" : "object-contain"
            }`}
            sizes="(max-width: 1024px) 100vw, 38vw"
          />
        </Link>
        <div className="flex min-w-0 flex-col justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12">
          <h3 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted sm:text-sm md:text-base">
            <span>{project.period}</span>
            <span aria-hidden>·</span>
            <Link
              href={project.instagramHref}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.leadOrg} on Instagram`}
              className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-navy transition hover:text-rust"
            >
              <FaInstagram className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {project.leadOrg}
            </Link>
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
          {items.length > 0 ? (
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-body sm:mt-7 sm:gap-x-6 sm:gap-y-3 sm:text-sm">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function ImpactProject() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("[data-project]");
    const width = card instanceof HTMLElement ? card.offsetWidth : node.clientWidth;
    const max = node.scrollWidth - node.clientWidth;
    const atEnd = node.scrollLeft >= max - 8;
    const atStart = node.scrollLeft <= 8;

    if (direction > 0 && atEnd) {
      node.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }
    if (direction < 0 && atStart) {
      node.scrollTo({ left: max, behavior: "smooth" });
      return;
    }
    node.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const timer = window.setInterval(() => {
      if (!paused) move(1);
    }, INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="project"
      className="scroll-mt-20 bg-surface px-4 py-6 sm:px-6 sm:py-8 md:py-12"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Community Projects" />
        <div
          className="mt-8 flex items-center gap-2 sm:mt-10 sm:gap-3"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
        >
          <button
            type="button"
            onClick={() => move(-1)}
            aria-label="Previous project"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scroller}
            className="flex min-w-0 flex-1 snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                data-project
                className="w-full min-w-full shrink-0 snap-start"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next project"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
