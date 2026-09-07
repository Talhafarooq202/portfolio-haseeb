import { CredentialArt } from "@/components/credential-art";
import { ValidBadge } from "@/components/valid-badge";
import type { Credential } from "@/lib/types";

export function CredentialCard({ credential }: { credential: Credential }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white">
      <CredentialArt credential={credential} />
      <div className="flex flex-1 flex-col items-center px-5 py-5 text-center">
        <h3 className="text-lg font-bold text-navy">{credential.acronym}</h3>
        <p className="mt-1 text-sm text-body">{credential.label}</p>
        <div className="mt-4">
          <ValidBadge />
        </div>
      </div>
    </article>
  );
}
