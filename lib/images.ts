export const images = {
  portrait: {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dr. Abdul Haseeb, veterinary surgeon in Lahore",
  },
  clinic: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    alt: "PetLife Veterinary Hospital exterior in Lahore",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=80",
    alt: "Veterinary specialist holding a small dog",
  },
  video: {
    src: "/images/WhatsApp Video 2026-09-06 at 15.11.24.mp4",
    alt: "Video about Dr. Abdul Haseeb at PetLife Veterinary Hospital",
  },
};

export const practicePhotoSources = Array.from({ length: 17 }, (_, index) => {
  const n = index + 1;
  return {
    src: `/images/image${n}.jpeg`,
    alt: `Dr. Abdul Haseeb at practice, photo ${n}`,
  };
});
