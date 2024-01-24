import type { Metadata } from 'next'
import { Source_Sans_3 as Sans, IBM_Plex_Mono as Mono } from "next/font/google";
import "./globals.css";

const sans = Sans({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = Mono({
  weight: ["400", "600"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Peter Shaan | Portofolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} font-sans ${mono.variable} font-mono bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
