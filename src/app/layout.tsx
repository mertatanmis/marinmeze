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
  title: "Marin Meze - Denizin Lezzetleri | FATMA TAŞKIRAN",
  description: "Marin Meze - Sea Flavors, Masterpieces on Your Table. Fresh seafood and meze by FATMA TAŞKIRAN. Yapım Aşamasında.",
  keywords: "seafood, meze, fish, shrimp, squid, mussels, Turkish food, marin meze",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
