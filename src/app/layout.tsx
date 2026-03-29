import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamToday Studios | Professional Podcast & Content Studio Nottingham",
  description: "Professional podcast and content studio at 20 Fletcher Gate, Nottingham's Lace Market. Book your session today.",
  keywords: ["podcast studio", "content studio", "Nottingham", "Lace Market", "video production", "podcast recording"],
  openGraph: {
    title: "StreamToday Studios | Nottingham's Premier Content Studio",
    description: "Professional podcast and content studio in the heart of Nottingham's Lace Market.",
    url: "https://streamtoday.studio",
    siteName: "StreamToday Studios",
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
