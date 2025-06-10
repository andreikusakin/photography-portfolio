'use client';
import React, { useEffect, useRef } from 'react'; // Import useRef
import Lenis from 'lenis'; // Assuming 'lenis' is the correct package name
import { usePathname } from 'next/navigation';

export default function LenisScroll({ children }: React.PropsWithChildren) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null); // Use a ref to store the Lenis instance

  // Effect for initializing and cleaning up Lenis
  useEffect(() => {
    // Initialize Lenis only on the client side
    if (typeof window !== 'undefined') {
      const lenis = new Lenis();
      lenisRef.current = lenis; // Store the instance in the ref

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      // Cleanup function
      return () => {
        lenis.destroy(); // Important: Destroy Lenis instance on component unmount
        lenisRef.current = null;
      };
    }
  }, []); // Empty dependency array: runs once on mount and cleans up on unmount

  // Effect for scrolling to top on pathname change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, force: true });
    }
  }, [pathname]); // Runs when pathname changes

  return <>{children}</>;
}