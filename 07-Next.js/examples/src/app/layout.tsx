import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Next.js 範例",
  description: "Next.js 核心概念範例",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="flex flex-wrap gap-4 border-b border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <Link href="/" className="text-zinc-700 hover:underline dark:text-zinc-300">
            首頁
          </Link>
          <Link href="/contact" className="text-blue-600 hover:underline">
            聯絡
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
