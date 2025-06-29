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
  title: "Feira Natur Farma: Saúde Natural em Harmonia com a Natureza",
  description:
    "Há 23 anos cuidando da comunidade com terapias integrativas e produtos naturais em Santa Maria da Feira.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-50`}
      >
        {children}
      </body>
    </html>
  );
}
