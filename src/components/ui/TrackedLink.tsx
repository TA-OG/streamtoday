"use client";

import Link from "next/link";
import posthog from "posthog-js";

interface TrackedLinkProps {
  href: string;
  children: React.ReactNode;
  campaign?: string;
  className?: string;
  target?: string;
  rel?: string;
}

export function TrackedLink({ href, children, campaign, className, target, rel }: TrackedLinkProps) {
  const handleClick = () => {
    posthog.capture("button_click", {
      button_name: "book_now",
      button_location: campaign || "unknown",
      destination_url: href,
    });
  };

  return (
    <Link 
      href={href} 
      className={className}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
