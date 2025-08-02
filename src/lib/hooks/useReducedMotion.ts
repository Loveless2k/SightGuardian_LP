/**
 * Hook to detect user's motion preferences for accessibility
 * Respects prefers-reduced-motion media query
 */

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") {
      return;
    }

    // Create media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Create event handler
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Add listener
    mediaQuery.addEventListener("change", handleChange);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Hook to get animation variants based on motion preferences
 * Returns reduced motion variants if user prefers reduced motion
 */
export function useAnimationVariants<T>(
  normalVariants: T,
  reducedVariants?: T,
): T {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion && reducedVariants) {
    return reducedVariants;
  }

  return normalVariants;
}
