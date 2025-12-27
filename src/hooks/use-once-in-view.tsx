'use client';

import { useInView } from "framer-motion";
import { useRef } from "react";

/**
 * Hook that tracks if an element has been in view once
 * Prevents re-triggering animations on scroll - fixes flashing/glitching issues
 * Uses Framer Motion's useInView with once: true which is more reliable
 */
export function useOnceInView(threshold: number = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: threshold,
    margin: "0px 0px -50px 0px"
  });

  return { ref, hasBeenInView: isInView };
}
