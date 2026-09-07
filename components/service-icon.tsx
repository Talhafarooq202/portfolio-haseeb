import {
  FaHeartbeat,
  FaStethoscope,
  FaSyringe,
  FaTooth,
} from "react-icons/fa";
import type { Service } from "@/lib/types";

const icons = {
  stethoscope: FaStethoscope,
  heartbeat: FaHeartbeat,
  syringe: FaSyringe,
  tooth: FaTooth,
};

export function ServiceIcon({ icon }: { icon: Service["icon"] }) {
  const Icon = icons[icon];

  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-peach text-accent-deep">
      <Icon className="h-6 w-6" />
    </span>
  );
}
