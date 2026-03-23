import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NetworkBackground from "@/components/NetworkBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Nicolai Folloso | Frontend Developer",
  description: "I build intuitive, responsive, and visually engaging user interfaces that transform complex logic into seamless user experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-white relative">
        <NetworkBackground />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
