import Link from "next/link";
import { doctor } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center text-sm sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="font-semibold">{doctor.name}</p>
        <p className="text-white/75">
          {doctor.clinic} · {doctor.location}
        </p>
        <Link href={doctor.phoneHref} className="text-peach hover:text-white">
          {doctor.phoneDisplay}
        </Link>
      </div>
    </footer>
  );
}
