import type { Metadata } from "next";
import { Jost, Libre_Caslon_Text } from "next/font/google";
import { FloatingButtons } from "@/components/FloatingButtons";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cabinet Dr. ZAHIR Nabil — Chirurgien-Dentiste à Tétouan",
  description:
    "Cabinet de chirurgie dentaire du Dr. ZAHIR Nabil à Tétouan. Ancien médecin-chef des services sociaux militaires. Implantologie, orthodontie, esthétique, prothèses, parodontie et soins généraux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${libreCaslon.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
