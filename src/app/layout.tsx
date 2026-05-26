import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://logidental.vercel.app";
const DEFAULT_OG_IMAGE = "/logos/logo-logidental.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Logidental — Services dédiés à la médecine Bucco-Dentaire",
  description:
    "Depuis 2014, Logidental conçoit et réalise l'agencement complet de cabinets dentaires clés en main : agencement, informatique, digitalisation.",
  keywords: ["cabinet dentaire", "agencement dentaire", "clé en main", "Logidental", "Racines & Couronnes"],
  verification: { google: "xn1XPen40RySBdDEfRfkh3rcnWXgMivDGlf32yVhLvw" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Logidental",
    title: "Logidental — Services dédiés à la médecine Bucco-Dentaire",
    description:
      "Depuis 2014, Logidental conçoit et réalise l'agencement complet de cabinets dentaires clés en main : agencement, informatique, digitalisation.",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Logidental" }],
  },
  twitter: {
    card: "summary",
    title: "Logidental — Services dédiés à la médecine Bucco-Dentaire",
    description:
      "Depuis 2014, Logidental conçoit et réalise l'agencement complet de cabinets dentaires clés en main : agencement, informatique, digitalisation.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
