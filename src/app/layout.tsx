import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StreamToday Studios | Premier Podcast & Video Content in Nottingham",
  description: "Nottingham's only live-editing podcast studio. 4K video, professional audio, and batch content production for business leaders in the East Midlands.",
  keywords: ["podcast studio nottingham", "video production lace market", "live editing podcast", "business content studio", "StreamToday Allan Okello"],
  openGraph: {
    title: "StreamToday Studios | Stop Creating. Start Orchestrating.",
    description: "Professional 4K podcast and video studio in Nottingham. Walk out with finished content.",
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
      <body className={inter.className}>
        <PostHogProvider>
        {children}
        </PostHogProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PodcastStudio",
              "name": "StreamToday Studios",
              "image": "https://streamtoday.studio/logo.png",
              "url": "https://streamtoday.studio",
              "telephone": "+447949462619",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20 Fletcher Gate",
                "addressLocality": "Nottingham",
                "postalCode": "NG1 2FZ",
                "addressRegion": "East Midlands",
                "addressCountry": "UK"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.9536,
                "longitude": -1.1442
              },
              "priceRange": "£££",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.instagram.com/streamtoday_studios",
                "https://www.linkedin.com/company/streamtoday-studios"
              ]
            })
          }}
        />
      </body>
    </html>
  );
}
