"use client";

import Image from "next/image";
import cloudinaryLoader from "@/lib/cloudinaryLoader";

export default function OverlapImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <Image
      loader={cloudinaryLoader}
      src={src}
      alt={alt}
      width={900}
      height={1350}
      sizes="(max-width: 767px) 100vw, 40vw"
      quality={85}
      priority
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  );
}
