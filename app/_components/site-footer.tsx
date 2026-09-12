import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { doctor } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-center text-sm sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-semibold">{doctor.name}</p>
        <p className="text-white/75">
          {doctor.clinic} · {doctor.location}
        </p>
        <div className="flex items-center justify-center gap-4 md:justify-end">
          <Link href={doctor.phoneHref} className="text-peach hover:text-white">
            {doctor.phoneDisplay}
          </Link>
          <Link
            href={doctor.instagramHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="cursor-pointer text-peach transition hover:text-white"
          >
            <FaInstagram className="h-5 w-5" aria-hidden />
          </Link>
          <Link
            href={doctor.linkedinHref}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="cursor-pointer text-peach transition hover:text-white"
          >
            <FaLinkedin className="h-5 w-5" aria-hidden />
          </Link>
        </div>
      </div>
    </footer>
  );
}
