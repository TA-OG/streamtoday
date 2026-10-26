"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface CheckoutButtonProps {
  priceKey: string;
  children: React.ReactNode;
  className?: string;
}

export function CheckoutButton({ priceKey, children, className }: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceKey }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch {
      alert("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`${className} disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center`}
    >
      {loading ? "Loading..." : children}
      {!loading && <ArrowRight className="ml-2" size={18} />}
    </button>
  );
}
