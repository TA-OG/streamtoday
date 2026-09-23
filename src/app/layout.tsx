import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PostHogProvider } from "@/components/providers/PostHogProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://streamtoday.co.uk"),
  title: "Podcast Studio Nottingham | Live-Editing Video & Audio | StreamToday",
  description: "Professional podcast studio hire in Nottingham from £45/hour. Live-editing, 4K video, multi-track audio. Cave Studio (4 guests) & Studio One (8 guests). Book today.",
  keywords: ["podcast studio nottingham", "video production lace market", "live editing podcast", "business content studio", "StreamToday Allan Okello"],
  icons: {
    icon: "/images/logo-sq-transparent.png",
    apple: "/images/logo-sq-transparent.png",
  },
  openGraph: {
    title: "Podcast Studio Nottingham | Live-Editing Video & Audio | StreamToday",
    description: "Professional podcast studio hire in Nottingham from £45/hour. Live-editing, 4K video, multi-track audio. Book today.",
    siteName: "StreamToday Studios",
    locale: "en_GB",
    type: "website",
    images: [{
      url: "/images/logo-sq-transparent.png",
      width: 512,
      height: 512,
      alt: "StreamToday Studios Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Podcast Studio Nottingham | Live-Editing Video & Audio | StreamToday",
    description: "Professional podcast studio hire in Nottingham from £45/hour. Live-editing, 4K video, multi-track audio. Book today.",
    images: ["/images/logo-sq-transparent.png"],
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
              "@type": ["LocalBusiness", "ProfessionalService"],
              "@id": "https://streamtoday.co.uk/#business",
              "name": "StreamToday Studios",
              "image": "https://streamtoday.co.uk/images/logo-sq-transparent.png",
              "url": "https://streamtoday.co.uk",
              "telephone": "+447763741309",
              "email": "hello@streamtoday.co.uk",
              "priceRange": "£45-£75/hour",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20 Fletcher Gate",
                "addressLocality": "Nottingham",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG1 2FZ",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 52.9536,
                "longitude": -1.1442
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/streamtoday_studios",
                "https://www.linkedin.com/company/streamtoday-studios"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Studio Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cave Studio",
                      "description": "Podcast studio for up to 4 guests with live-editing"
                    },
                    "price": "45",
                    "priceCurrency": "GBP",
                    "priceUnit": "hour"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Studio One",
                      "description": "Podcast studio for up to 8 guests with live-editing"
                    },
                    "price": "75",
                    "priceCurrency": "GBP",
                    "priceUnit": "hour"
                  }
                ]
              }
            })
          }}
        />
      </body>
    </html>
  );
}
