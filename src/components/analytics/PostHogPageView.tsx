"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogPageView() {
  useEffect(() => {
    // Track page views
    posthog.capture("$pageview");
  }, []);

  return null;
}
