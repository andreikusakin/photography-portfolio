"use client";

import Image from "next/image";
import { CldImage } from "next-cloudinary";

interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  priority?: boolean;
}

export default function JournalCover({
  src,
  alt,
  width,
  height,
  sizes,
  priority,
}: Props) {
  const isLocal = src.startsWith("/");

  if (isLocal) {
    return (
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        style={{ width: "100%", height: "auto" }}
        priority={priority}
      />
    );
  }

  return (
    <CldImage
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      format="auto"
      quality="auto"
      style={{ width: "100%", height: "auto" }}
      priority={priority}
    />
  );
}
