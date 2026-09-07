import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Abdul Haseeb | Veterinary Surgeon in Lahore",
  description:
    "Portfolio of Dr. Abdul Haseeb, a veterinary surgeon in Lahore, Pakistan specialising in small-animal medicine, advanced surgery, and minimally invasive procedures.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full bg-white font-sans text-navy">{children}</body>
    </html>
  );
}
