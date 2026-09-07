import { practicePhotoSources } from "@/lib/images";
import type {
  Credential,
  LanguageItem,
  Qualification,
  Service,
  SpeciesItem,
} from "@/lib/types";

export const doctor = {
  name: "Dr. Abdul Haseeb",
  credentials: "Veterinary Surgeon and Physician, DVM",
  summary:
    "Veterinary surgeon with more than 1+ years of experience in small-animal medicine, advanced surgery, and minimally invasive procedures across Lahore.",
  location: "Lahore, Pakistan",
  clinic: "PetLife Veterinary Hospital",
  address: "MM Alam Road, Gulberg III, Lahore, Pakistan",
  phoneDisplay: "+92 306 7270101",
  phoneHref: "tel:+923067270101",
  whatsappHref: "https://wa.me/923067270101",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=MM+Alam+Road+Gulberg+III+Lahore+Pakistan",
  mapEmbed:
    "https://maps.google.com/maps?q=MM%20Alam%20Road%20Gulberg%20III%20Lahore%20Pakistan&t=&z=15&ie=UTF8&iwloc=&output=embed",
  availability: "24/7",
  speciesLabel: "Cats · Dogs",
  languagesLabel: "EN · UR · PA",
  tags: [
    "General practitioner",
    "Orthopedics",
    "Soft Tissue",
    "Internal Medicine",
    "Laparoscopic surgery",
    "Endoscopy & minimally invasive procedures",
  ],
};

export const biography = [
  "Dr. Abdul Haseeb is a  veterinary surgeon and physician based in Lahore, Pakistan, with more than 1+ years of advanced small-animal practice. He currently leads clinical and surgical care at PetLife Veterinary Hospital in Gulberg III. He earned his Doctor of Veterinary Medicine from the University of Veterinary and Animal Sciences, Lahore.",
  "His clinical approach combines precise diagnostics with compassionate, evidence-based treatment. Dr. Haseeb specialises in general practice, orthopedics, soft-tissue surgery, internal medicine, and minimally invasive procedures including laparoscopy and endoscopy. Every case is planned around safer anaesthesia, faster recovery, and clearer outcomes for pets and their families.",
  "He is committed to clear client communication, collaborative teamwork, and continuous professional development. Consultations are offered in English, Urdu, and Punjabi, so families across Lahore can discuss treatment options with confidence.",
];

export const qualifications: Qualification[] = [
  {
    title: "More than 1+ years of advanced practice in small animals",
    description:
      "Both general surgery and advanced surgical care use current technology to enhance patient outcomes for dogs and cats across Lahore.",
  },
  {
    title: "International studies and other training certifications",
    description:
      "Doctor of Veterinary Medicine at UVAS Lahore, a master's in veterinary surgery, and a GP certificate in endoscopy at Improve Veterinary Education. Skills are developed through ongoing professional development.",
  },
  {
    title: "Expert in minimally invasive and endoscopic surgery",
    description:
      "Dogs and cats are treated for internal medicine, surgery, dentistry, and pain management. The specialty is focused on endosurgery and other minimally invasive procedures.",
  },
];

export const services: Service[] = [
  {
    title: "General practice",
    description: "Wellness exams, diagnostics and routine veterinary care.",
    icon: "stethoscope",
  },
  {
    title: "Advanced Surgery",
    description: "Complex surgical procedures with precision and expertise.",
    icon: "heartbeat",
  },
  {
    title: "Minimally Invasive Surgery",
    description: "Advanced endoscopic procedures with faster recovery times.",
    icon: "syringe",
  },
  {
    title: "Veterinary Dentistry",
    description: "Dental examinations, treatments and oral health care.",
    icon: "tooth",
  },
];

export const licenses: Credential[] = [
  {
    acronym: "PVMC",
    label: "Veterinary License",
    variant: "license",
  },
  {
    acronym: "PLDD",
    label: "Punjab Practice Permit",
    variant: "certificate",
  },
  {
    acronym: "ISVPS",
    label: "Endoscopy Certificate",
    variant: "certificate",
  },
  {
    acronym: "UVAS",
    label: "Advanced Surgery Diploma",
    variant: "certificate",
  },
];

export const memberships: Credential[] = [
  {
    acronym: "PVMA",
    label: "Member of the Pakistan Veterinary Medical Association",
    variant: "membership",
  },
  {
    acronym: "WSAVA",
    label: "Member of the World Small Animal Veterinary Association",
    variant: "membership",
  },
  {
    acronym: "PAVA",
    label: "Member of the Pakistan Association of Veterinary Anatomists",
    variant: "membership",
  },
];

export const species: SpeciesItem[] = [
  { name: "Dogs", icon: "dog" },
  { name: "Cats", icon: "cat" },
];

export const languages: LanguageItem[] = [
  { name: "Urdu", flag: "🇵🇰", label: "Pakistan" },
  { name: "English", flag: "🇬🇧", label: "United Kingdom" },
  { name: "Punjabi", flag: "🇵🇰", label: "Punjab" },
];

export const practicePhotos = practicePhotoSources;
