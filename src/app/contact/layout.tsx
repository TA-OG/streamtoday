import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact StreamToday Studios | Nottingham Podcast Studio",
  description: "Get in touch with StreamToday Studios in Nottingham. Book a tour, request a quote, or ask about our podcast and video production services. 20 Fletcher Gate, Lace Market.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
