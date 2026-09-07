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
  icon: "dog" | "cat";
}

export interface LanguageItem {
  name: string;
  flag: string;
  label: string;
}
