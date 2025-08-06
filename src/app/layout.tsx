import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
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
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
