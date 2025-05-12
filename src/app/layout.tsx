import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import {
  Geist,
  Geist_Mono,
  Poppins,
  Inter,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import FooterSection from "@/components/FooterSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-Montserrat",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const poppins = Poppins({
  variable: "--font-Poppins",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const inter = Inter({
  variable: "--font-Inter",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const integralcf = localFont({
  src: "./fonts/IntegarCFbold.otf",
  variable: "--font-integral-cf",
  weight: "100 900",
});
const satoshi = localFont({
  src: "./fonts/Satoshi-Medium.otf",
  variable: "--font-satoshi-medium",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "This is Hunain's personal portfolio — crafted to showcase clean frontend work, creative UI/UX, and modern web technologies like Next.js, Tailwind CSS, and TypeScript.",
  authors: [{ name: "Hunain Naeem Anwar" }],
  icons: {
    icon: "/favICON.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} ${satoshi.variable} ${integralcf.variable} ${montserrat.variable} antialiased`}
      >
        <NavBar />
        <Toaster position="bottom-right" />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
