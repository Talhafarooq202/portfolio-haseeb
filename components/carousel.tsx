"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  children: React.ReactNode[];
  itemClassName?: string;
  className?: string;
}

export function Carousel({ children, itemClassName, className }: CarouselProps) {
  const scroller = useRef<HTMLDivElement>(null);

  function move(direction: number) {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("[data-slide]");
    const width = card instanceof HTMLElement ? card.offsetWidth + 16 : 260;
    node.scrollBy({ left: direction * width, behavior: "smooth" });
  }

  return (
    <div className={`flex items-center gap-2 sm:gap-3 ${className ?? ""}`}>
      <button
        type="button"
        onClick={() => move(-1)}
        aria-label="Previous slide"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
      >
        <FaChevronLeft className="h-5 w-5" />
      </button>
      <div
        ref={scroller}
        className="flex min-w-0 flex-1 snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, index) => (
          <div
            key={index}
            data-slide
            className={itemClassName ?? "w-[min(240px,78%)] shrink-0 snap-start"}
          >
            {child}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => move(1)}
        aria-label="Next slide"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-line text-navy transition hover:bg-navy hover:text-white sm:h-10 sm:w-10"
      >
        <FaChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}
