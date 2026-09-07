import { FaCheck } from "react-icons/fa";
import type { Credential } from "@/lib/types";

export function CredentialArt({ credential }: { credential: Credential }) {
  if (credential.variant === "membership") {
    return (
      <div className="relative h-40 overflow-hidden rounded-t-xl bg-gradient-to-br from-[#0e7c7b] to-[#14532d]">
        <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-white/15" />
        <div className="absolute right-8 top-6 h-16 w-16 rounded-full bg-white/10" />
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-lg font-bold text-white">
            {credential.acronym.slice(0, 1)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Membership Card</p>
            <p className="text-xs text-white/80">{credential.acronym}</p>
          </div>
        </div>
        <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-valid">
          <FaCheck className="h-5 w-5" />
        </span>
      </div>
    );
  }

  const isLicense = credential.variant === "license";

  return (
    <div
      className={`relative h-40 overflow-hidden rounded-t-xl ${
        isLicense
          ? "bg-gradient-to-br from-cream to-peach"
          : "bg-gradient-to-br from-[#eef4ff] to-[#dbe7ff]"
      }`}
    >
      <div className="absolute inset-x-5 top-4 rounded-md bg-white/80 p-3 shadow-sm">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">
          {isLicense ? "Official License" : "Certificate"}
        </p>
        <p className="mt-1 text-sm font-bold text-navy">{credential.acronym}</p>
        <p className="text-xs text-body">{credential.label}</p>
        <p className="mt-2 text-[10px] leading-4 text-muted">
          Dr. Abdul Haseeb · Lahore, Pakistan
        </p>
      </div>
      <div className="absolute bottom-3 right-4 h-10 w-10 rounded-full border-2 border-accent/40 bg-white/70" />
    </div>
  );
}
