import { practicePhotoSources } from "@/lib/images";
import type {
  Credential,
  ImpactProject,
  LanguageItem,
  Qualification,
  Service,
  SpeciesItem,
} from "@/lib/types";

export const doctor = {
  name: "Dr. Abdul Haseeb",
  credentials: "Veterinary Physician and Surgeon, DVM",
  summary:
    "Veterinary Physician with more than 1+ years of experience in small-animal medicine,  surgery, and minimally invasive procedures across Lahore.",
  location: "Lahore, Pakistan",
  clinic: "Happy Tails Pet Clinic",
  address: "Happy Tails Pet Clinic, Commercial Area Sector K Dha Phase 1, Lahore",
  phoneDisplay: "+92 306 7270101",
  phoneHref: "tel:+923067270101",
  whatsappHref: "https://wa.me/923067270101",
  instagramHref: "https://www.instagram.com/vetistry",
  linkedinHref: "https://www.linkedin.com/in/abdulhaseebqureshi7",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Happy+Tails+Pet+Clinic,+Commercial+Area+Sector+K+Dha+Phase+1,+Lahore",

  mapEmbed:
    "https://maps.google.com/maps?q=Happy%20Tails%20Pet%20Clinic,%20Commercial%20Area%20Sector%20K%20Dha%20Phase%201,%20Lahore&t=&z=15&ie=UTF8&iwloc=&output=embed",
  availability: "24/7",
  speciesLabel: "Cats · Dogs · Birds",
  languagesLabel: "EN · UR · PA",
  tags: [
    "General practitioner",
    "Internal Medicine",
    "Soft Tissue",
    "Laparoscopic surgery",
  ],
};

export const biography = [
  "Dr. Abdul Haseeb is a  veterinary physician and  surgeon  based in Lahore, Pakistan, with more than 1+ years of advanced small-animal practice. He currently leads clinical and surgical care at Happy Tails Pet Clinic in DHA. He earned his Doctor of Veterinary Medicine from the University of Veterinary and Animal Sciences, Lahore.",
  "His clinical approach combines precise diagnostics with compassionate, evidence-based treatment. Dr. Haseeb specialises in general practice, soft-tissue surgery, internal medicine, and minimally invasive procedures including laparoscopy. Every case is planned around safer anaesthesia, faster recovery, and clearer outcomes for pets and their families.",
  "He is committed to clear client communication, collaborative teamwork, and continuous professional development. Consultations are offered in English, Urdu, and Punjabi, so families across Lahore can discuss treatment options with confidence.",
];

export const qualifications: Qualification[] = [
  {
    title: "More than 1+ years of advanced practice in small animals",
    description:
      "Both Internal medicine and surgical care use current technology to enhance patient outcomes for dogs, cats, and birds across Lahore.",
  },
  {
    title: "Studies and other training certifications",
    description:
      "Doctor of Veterinary Medicine at UVAS Lahore, Pakistan registered veterinary physician and surgeon. Skills are developed through ongoing professional development.",
  },
  {
    title: "Expert in minimally invasive and endoscopic surgery",
    description:
      "Dogs, cats, and birds are treated for internal medicine, surgery, dentistry, and pain management. The specialty is focused on endosurgery and other minimally invasive procedures.",
  },
];

export const services: Service[] = [
  {
    title: "General practice",
    description: "Wellness exams, diagnostics and routine veterinary care.",
    icon: "stethoscope",
  },
  {
    title: "Soft Tissue Surgery",
    description: "Surgical procedures with precision and expertise.",
    icon: "heartbeat",
  },
  {
    title: "Dermatology & Skin Care",
    description: "Specialized care for fungal infections, allergies, itching, parasites, rashes, and other skin problems in pets.",
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
  { name: "Birds", icon: "bird" },
];

export const languages: LanguageItem[] = [
  { name: "Urdu", flag: "🇵🇰", label: "Pakistan" },
  { name: "English", flag: "🇬🇧", label: "United Kingdom" },
  { name: "Punjabi", flag: "🇵🇰", label: "Punjab" },
];

export const practicePhotos = practicePhotoSources;

export const rabiesFreePakistan: ImpactProject = {
  title: "Rabies Free Pakistan Initiative",
  initiative: "Impact Report",
  leadOrg: "SAVERS",
  leadOrgFull: "Special Animals & Veterinary Emergency Relief Society",
  period: "Rabies Awareness Month · September",
  description:
    "During Rabies Awareness Month, SAVERS led the Rabies-Free Pakistan Initiative, delivering awareness activities across Lahore and Muzaffargarh. Four school visits educated students on rabies prevention and animal welfare, while awareness reels in 11 languages helped spread these important messages to communities nationwide.",
  contribution:
    "Dr. Abdul Haseeb contributed as an aspiring veterinarian, accounting for 149 of the 386 animals vaccinated across partner camps.",
  stats: [
    { value: "1,750+", label: "Students educated" },
    { value: "450,531", label: "People reached online" },
    { value: "386", label: "Animals vaccinated" },
    { value: "11", label: "Languages in reels" },
  ],
  schools: [
    "LDA Model Girls High School, Lahore",
    "Beaconhouse School, Lahore",
    "BeaconHall School System, Muzaffargarh",
    "Lahore Grammar School, Muslim Town",
  ],
  localLanguages: [
    "Urdu",
    "Punjabi",
    "Gilgiti",
    "Siraiki",
    "Pashto",
    "Balochi",
    "Kashmiri",
  ],
  internationalLanguages: ["English", "Turkish", "Arabic", "Tamil"],
  vaccinations: [
    { label: "Aspiring Veterinarian", count: 149 },
    { label: "SAVERS Vaccination Camp", count: 85 },
    { label: "VCS SA Garden", count: 77 },
    { label: "VCS Rabies Camps", count: 75 },
  ],
  totalVaccinated: 386,
  courses: [
    "REC · Rabies Educator Certificate",
    "CCC · Community Coordinator for Rabies",
    "DWC · Dog Welfare Certificate",
    "AVC · Animal Handling & Vaccination",
    "RHC · Rabies Healthcare Certificate",
  ],
};
