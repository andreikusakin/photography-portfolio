"use client";

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
