"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error boundary caught:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
        Something went wrong
      </h2>
      <p className="mb-8 max-w-[500px] text-base text-body-color dark:text-body-color-dark">
        We encountered an unexpected issue loading this page. Please try reloading or return to the homepage.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white transition hover:bg-primary/90"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="rounded-lg bg-dark px-7 py-3 text-base font-medium text-white transition hover:bg-dark/90 dark:bg-white/10"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
