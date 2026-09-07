import { FaCheck } from "react-icons/fa";

export function ValidBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-valid-border bg-valid-bg px-3 py-1 text-xs font-semibold text-valid">
      <FaCheck className="h-3.5 w-3.5" />
      Valid &amp; Current
    </span>
  );
}
