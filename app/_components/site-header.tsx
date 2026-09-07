"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { doctor } from "@/lib/data";

const links = [
  { href: "#about", label: "Biography" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#credentials", label: "Licenses" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6">
        <Link href="#top" className="truncate text-sm font-semibold text-navy sm:text-base">
          {doctor.name}
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-6" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-body transition hover:text-navy"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={doctor.phoneHref}
            className="cursor-pointer rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white transition hover:bg-navy-deep"
          >
            Book now
          </Link>
        </nav>
        <button
          type="button"
          className="cursor-pointer rounded-md p-2 text-navy lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
        </button>
      </div>
      {open ? (
        <nav className="border-t border-line px-4 py-3 lg:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-body"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
