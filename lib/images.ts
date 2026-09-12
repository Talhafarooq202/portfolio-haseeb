export const images = {
  portrait: {
    src: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=1200&q=80",
    alt: "Dr. Abdul Haseeb, veterinary surgeon in Lahore",
  },
  clinic: {
    src: "/images/clinic_picture.png",
    alt: "Happy Tails Pet Clinic exterior in Lahore",
  },
  cta: {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1400&q=80",
    alt: "Veterinary specialist holding a small dog",
  },
  project: {
    src: "/images/project_photo1.jpeg",
    alt: "Rabies Free Pakistan Initiative impact report covering school visits, social reach, 11 languages, and 386 animal vaccinations",
    width: 720,
    height: 907,
  },
  video: {
    src: "/images/WhatsApp Video 2026-09-06 at 15.11.24.mp4",
    alt: "Video about Dr. Abdul Haseeb at Happy Tails Pet Clinic",
  },
};

export const practicePhotoSources = Array.from({ length: 17 }, (_, index) => {
  const n = index + 1;
  return {
    src: `/images/image${n}.jpeg`,
    alt: `Dr. Abdul Haseeb at practice, photo ${n}`,
  };
}).filter((photo) => !photo.src.endsWith("image13.jpeg") && !photo.src.endsWith("image14.jpeg") && !photo.src.endsWith("image17.jpeg"));
