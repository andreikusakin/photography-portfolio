'use client';
import React, { useEffect } from 'react'
import Lenis from "lenis";

export default function LenisScroll({children}: React.PropsWithChildren) {
    useEffect(() => {
        const lenis = new Lenis();
    
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
    
        requestAnimationFrame(raf);
      }, []);
  return (
    <>{children}</>
  )
}
