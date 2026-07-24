import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://halimslife.com"),
  title: {
    default: "Halim Md Abdul | Japan-based Bangladeshi Software Engineer",
    template: "%s | Halim Md Abdul",
  },
  description:
    "Japan-based software engineer working across robotics, computer vision, research and Bengali-friendly education.",
  openGraph: {
    title: "Halim Md Abdul | Engineer, Researcher & Educator",
    description:
      "Intelligent systems, practical research and learning tools built from Japan.",
    url: "https://halimslife.com",
    siteName: "Halim's Life",
    type: "website",
    locale: "bn_BD",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
