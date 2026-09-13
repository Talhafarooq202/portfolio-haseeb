export interface Qualification {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: "stethoscope" | "heartbeat" | "syringe" | "tooth";
}

export interface Credential {
  acronym: string;
  label: string;
  variant: "license" | "certificate" | "membership";
}

export interface SpeciesItem {
  name: string;
  icon: "dog" | "cat" | "bird";
}

export interface LanguageItem {
  name: string;
  flag: string;
  label: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface VaccinationCamp {
  label: string;
  count: number;
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  objectFit?: "contain" | "cover";
}

export interface ImpactProject {
  id: string;
  category: string;
  title: string;
  initiative: string;
  leadOrg: string;
  leadOrgFull: string;
  period: string;
  description: string;
  contribution: string;
  stats: ImpactStat[];
  highlights?: string[];
  schools?: string[];
  localLanguages?: string[];
  internationalLanguages?: string[];
  vaccinations?: VaccinationCamp[];
  totalVaccinated?: number;
  courses?: string[];
  image: ProjectImage;
  instagramHref: string;
}
