"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SectionHeading } from "@/components/section-heading";
import { practicePhotos } from "@/lib/data";

const INTERVAL_MS = 3500;

export function PracticePhotos() {
  const scroller = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("[data-photo]");
    const width = card instanceof HTMLElement ? card.offsetWidth + 16 : 320;
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
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Doctor At Practice Photos" />
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
            aria-label="Previous photo"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
          >
            <FaChevronLeft className="h-5 w-5" />
          </button>
          <div
            ref={scroller}
            className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {practicePhotos.map((photo) => (
              <article
                key={photo.src}
                data-photo
                className="relative aspect-[3/4] w-[70%] shrink-0 snap-center overflow-hidden rounded-xl sm:w-[40%] lg:w-[28%]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-top transition duration-700 ease-out"
                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 48vw, 32vw"
                />
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => move(1)}
            aria-label="Next photo"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
          >
            <FaChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
