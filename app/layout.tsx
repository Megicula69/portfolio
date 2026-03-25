import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";

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
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-950 relative selection:bg-blue-100 selection:text-blue-900">
        <div className="fixed inset-0 pointer-events-none hero-bg -z-10" />
        <TopNav />
        <div className="relative">
          {children}
        </div>
      </body>
    </html>
  );
}
