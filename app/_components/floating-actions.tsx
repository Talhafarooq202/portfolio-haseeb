"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronUp, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { doctor } from "@/lib/data";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Link
        href={doctor.phoneHref}
        aria-label="Call clinic"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-navy text-white shadow-lg transition hover:bg-navy-deep sm:bottom-6 sm:left-5 sm:h-14 sm:w-14"
      >
        <FaPhoneAlt className="h-6 w-6" />
      </Link>
      <Link
        href={doctor.whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-navy text-white shadow-lg transition hover:bg-navy-deep sm:bottom-6 sm:right-5 sm:h-14 sm:w-14"
      >
        <FaWhatsapp className="h-7 w-7" />
      </Link>
      {visible ? (
        <Link
          href="#top"
          aria-label="Back to top"
          className="fixed bottom-20 right-5 z-50 flex h-8 w-8 cursor-pointer items-center justify-center rounded-md bg-navy/80 text-white transition hover:bg-navy sm:bottom-24 sm:right-6 sm:h-9 sm:w-9"
        >
          <FaChevronUp className="h-4 w-4" />
        </Link>
      ) : null}
    </>
  );
}
